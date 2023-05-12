/* eslint-disable */
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const nQuery = weakMap.has(endpoint) ? weakMap.get(endpoint) : 0;
  weakMap.set(endpoint, nQuery + 1);
  if (nQuery >= 4) {
    throw new Error('Endpoint load is high');
  }
}
