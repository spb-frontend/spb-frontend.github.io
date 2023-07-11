import { Meetup } from '../../types/meetup';

export interface NearestMeetupProps extends Meetup {
  isUpcomingEvent: boolean;
}
