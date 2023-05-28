import fetch from 'isomorphic-fetch';
import { timepadId } from '../constants/timepadId';
import fs from 'fs';
import path from 'path';
import { DAY } from '../constants/date';

const TIMEPAD_EVENTS_FILE = path.resolve(process.cwd(), './.tmp/timepadEvents.json');
const UPDATE_INTERVAL = DAY;

export interface TimepadEventsJson {
  updateTime: number;
  eventsList: TimepadEvent[];
}

export interface TimepadEvent {
  id: number;
  created_at: string;
  starts_at: string;
  name: string;
  status: string;
  description_short: string;
  description_html: string;
  url: string;
  poster_image: {
    default_url: string;
    uploadcare_url: string;
  };
  ad_partner_percent: number;
  locale: string;
  location: Location;
  organization: Organization;
  categories: {
    id: number;
    name: string;
  }[];
  tickets_limit: number;
  ticket_types: {
    id: number;
    name: string;
    description: string;
    buy_amount_min: number;
    buy_amount_max: number;
    price: number;
    is_promocode_locked: boolean;
    remaining: number;
    sale_ends_at: string;
    sale_starts_at?: string;
    public_key: string;
    is_active: boolean;
    ad_partner_profit: number;
    send_personal_links: boolean;
    sold: number;
    attended: number;
    limit: number;
    status: string;
  }[];
  questions: Question[];
  age_limit: string;
  widgets: any;
  properties: string[];
  moderation_status: string;
  access_status: string;
  registration_data: {
    price_max: number;
    price_min: number;
    sale_ends_at: string;
    tickets_total: number;
    is_registration_open: boolean;
  };
  is_sending_free_tickets: boolean;
  reservation_period: string;
}

export interface Location {
  country: string;
  city: string;
  address: string;
}

export interface Organization {
  id: number;
  name: string;
  description_html: string;
  url: string;
  logo_image: {
    default_url: string;
    uploadcare_url: string;
  };
  subdomain: string;
  permissions: string[];
}

export interface Question {
  field_id: string;
  name: string;
  comment?: string;
  type: string;
  is_mandatory: boolean;
  is_for_every_visitor: boolean;
  meta: {
    comment?: string;
    mandatory?: boolean;
    blocked?: boolean;
    block?: boolean;
  };
}

const saveDataToJson = (data: any, filePath: string) => {
  const directory = path.dirname(filePath);

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

/**
 * The function returns the nearest upcoming event,
 * but if there are no upcoming events, it returns the last past event
 */
const findNearestEvent = (events: TimepadEvent[]): TimepadEvent | undefined => {
  const now = new Date().toISOString();

  const pastEvents = events.filter((event) => event.starts_at < now);

  if (pastEvents.length > 0) {
    const lastPastEvent = pastEvents[pastEvents.length - 1];
    return lastPastEvent;
  }

  const futureEvents = events
    .filter((event) => event.starts_at >= now)
    .sort((a, b) => a.starts_at.localeCompare(b.starts_at));

  if (futureEvents.length > 0) {
    return futureEvents[0];
  }

  return undefined;
};

/** Fetches a list of events from timepad, saves the list to temp json file and returns the list */
export const getMeetupList = async () => {
  try {
    const eventsListCache = fs.readFileSync(TIMEPAD_EVENTS_FILE, 'utf8');

    if (eventsListCache) {
      const eventsListJson: TimepadEventsJson = JSON.parse(eventsListCache);

      if (eventsListJson.updateTime > Date.now() - UPDATE_INTERVAL) {
        console.log(`Cached timepad events used from ${new Date(eventsListJson.updateTime).toLocaleString()}`);

        return eventsListJson.eventsList;
      }
    }
  } catch (err) {
    // Nothing to do here
  }

  if (!process.env.TIMEPAD_TOKEN) {
    console.error('Invalid timepad token!');
    return null;
  }

  try {
    return await fetch(`https://api.timepad.ru/v1/events?organization_ids=${timepadId}`, {
      headers: {
        Authorization: `Bearer ${process.env.TIMEPAD_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (!data || !Array.isArray(data.values)) {
          console.error(data);
          throw new Error('Wrong received data from timepad');
        }

        const eventsSummaryList = data.values.filter((item: any) => item.moderation_status === 'shown');
        const eventsDetailList = [];

        for (let i = 0; i < eventsSummaryList.length; i++) {
          const eventSummary = eventsSummaryList[i];

          const eventDetails = await fetch(`https://api.timepad.ru/v1/events/${eventSummary.id}`, {
            headers: {
              Authorization: `Bearer ${process.env.TIMEPAD_TOKEN}`,
            },
          });

          eventsDetailList.push(await eventDetails.json());
        }

        const eventsListCache = {
          updateTime: Date.now(),
          eventsList: eventsDetailList,
        };

        // Side effect

        saveDataToJson(eventsListCache, TIMEPAD_EVENTS_FILE);

        return eventsDetailList;
      });
  } catch (err) {
    console.log('Error during getting timepad events: ' + err.message);
    console.log(err);
    return null;
  }
};

export const getLastMeetup = async (
  eventsList: TimepadEvent[]
): Promise<{
  date: number;
  url: string;
  poster: string;
  location: {
    country: string;
    city: string;
    address: string;
  };
} | null> => {
  if (!process.env.TIMEPAD_TOKEN) {
    console.error('Invalid timepad token!');
    return null;
  }

  if (!Array.isArray(eventsList) || eventsList.length === 0) {
    console.log('Timepad event list is empty');
    return null;
  }

  try {
    const nearestEventDetails = findNearestEvent(eventsList);

    return {
      date: new Date(nearestEventDetails.starts_at).getTime(),
      url: nearestEventDetails.url,
      poster: nearestEventDetails.poster_image.uploadcare_url,
      location: nearestEventDetails.location,
    };
  } catch (err) {
    console.log('Unable to get data from timepad');
    console.log(err);

    return null;
  }
};
