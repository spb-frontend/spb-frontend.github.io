import { Meetup } from '@/components/BlockMeetups/types';

export interface NearestMeetupProps extends Meetup {
  isUpcomingEvent: boolean;
}
