import fetch from 'isomorphic-fetch';
import { createClient, Asset } from 'contentful';
import { DRINKCAST } from '../constants/contentType';
import keys from '../../keys';

const client = createClient({
  space: keys.contentful.space_id,
  accessToken: keys.contentful.token,
});

export type PodcastData = {
  title: string;
  date: string;
  image: Asset;
  file: string;
  explicit: boolean;
  duration: string;
  length: string;
  notes: string;
  number: number;
  persons: any;
};

/**
 * Uses to get drinkcast list in main page
 */
export async function getMainDrinkcastList() {
  const entries = await client.getEntries<PodcastData>({
    content_type: DRINKCAST,
    limit: 3,
    order: '-sys.createdAt',
  });

  console.log(entries.items[0]);

  return entries.items.map((item) => ({
    number: item.fields.number,
    title: item.fields.title,
    date: item.fields.date,
    image: item.fields.image.fields.file.url,
  }));
}
