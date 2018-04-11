import localforage from 'localforage';

import { parseBasketItem } from './helpers';

const localCacheKey = 'crystallize-basket';

export async function retrieveBasketFromCache() {
  try {
    const basket = await localforage.getItem(localCacheKey);
    if (basket) {
      const parsed = JSON.parse(basket);
      parsed.items.forEach(parseBasketItem);
      return parsed;
    }
  } catch (error) {
    console.warn('The basket was not retrieved', error); // eslint-disable-line
  }
  return null;
}

export async function persistBasketToCache({ items, shipping }) {
  try {
    await localforage.setItem(
      localCacheKey,
      JSON.stringify({ items, shipping })
    );
  } catch (error) {
    console.warn('The basket was not persisted', error); // eslint-disable-line
  }
}
