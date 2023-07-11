import { Meetup } from '../BlockMeetups/types';

export interface NearestMeetupProps extends Meetup {
  isUpcomingEvent: boolean;
}
