import fetch from 'isomorphic-fetch';
import keys from '../keys';

const HOST_URL = `https://cdn.contentful.com`;
const BASE = `${HOST_URL}/spaces/${keys.contentful.space_id}/environments/master/entries?access_token=${keys.contentful.token}`;

type GetDrinkcastListOptions = {
  contentType: string;
  limit?: number;
};

export async function getEntryList(params: GetDrinkcastListOptions) {
  const { contentType, limit = 100 } = params;
  const items = await fetch(`${BASE}&limit=${limit}&content_type=${contentType}`);
  const json = await items.json();

  return json.items;
}
