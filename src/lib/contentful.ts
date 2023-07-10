import { createClient } from 'contentful';

const client = createClient({
  accessToken: process.env.CONTENTFUL_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID,
});

if (!process.env.CONTENTFUL_TOKEN) {
  console.error('Invalid contentful token!');
}

if (!process.env.CONTENTFUL_SPACE_ID) {
  console.error('Invalid contentful space id!');
}

const transformData = (incomeData) => {
  const combineFieldsWithId = (obj) => {
    const combinedData = { ...obj.fields, id: obj?.sys?.id };
    return iterate(combinedData);
  };

  const iterate = (obj) => {
    const clearObject = {...obj};
    for (const [key, value] of Object.entries(clearObject)) {
      if (Array.isArray(value)) {
        clearObject[key] = value.map(item => combineFieldsWithId(item));
      } else if (typeof value === 'object' && Object.hasOwn(value, 'sys')) {
        clearObject[key] = combineFieldsWithId(value);
      }
    }

    return { ...clearObject };
  };

  return combineFieldsWithId(incomeData);
};

export const getContentEntries = async (content_type: string, limit?: number): Promise<string> => {
  try {
    return await client.getEntries({ content_type, limit, include: 2 })
      .then(({ items }) => JSON.stringify(items.map(item => transformData(item))));
  } catch (err) {
    console.error(err);
    return JSON.stringify([]);
  }
};
export const getContentEntry = async (id: string): Promise<string> => {
  try {
    return await client.getEntry(id, { include: 2 })
      .then(res => JSON.stringify(transformData(res)));
  } catch (err) {
    console.error(err);
    return JSON.stringify({});
  }
};
