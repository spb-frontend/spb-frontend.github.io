import fetch from 'isomorphic-fetch';
import { timepadId } from '../constants/timepadId';

export const getUpcomingMeetup = async (): Promise<{
  date: number;
  url: string;
  poster: string;
  location: {
    country: string;
    city: string;
    address: string;
  };
} | null> => {
  try {
    return await fetch(`https://api.timepad.ru/v1/events?organization_ids=${timepadId}`, {
      headers: {
        Authorization: `Bearer ${process.env.TIMEPAD_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const eventList = data?.values ?? [];
        const upcomingEvent = eventList.find((item) => {
          const date = new Date(item.starts_at);

          return date.getTime() > Date.now();
        });

        return fetch(`https://api.timepad.ru/v1/events/${upcomingEvent.id}`, {
          headers: {
            Authorization: `Bearer ${process.env.TIMEPAD_TOKEN}`,
          },
        }).then((res) => res.json());
      })
      .then((data) => ({
        date: new Date(data.starts_at).getTime(),
        url: data.url,
        poster: data.poster_image.uploadcare_url,
        location: data.location,
      }))
      .catch((err) => {
        console.log('Unable to get data from timepad');

        console.log(err);

        return null;
      });
  } catch {
    return null;
  }
};
