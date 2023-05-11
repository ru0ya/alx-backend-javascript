export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  if (!endpoint || typeof endpoint !== 'object') {
    throw new Error('Invalid endpoint');
  }

  const endpointKey = JSON.stringify(endpoint);

  let queryCount = weakMap.get(endpointKey) || 0;
  queryCount++;

  weakMap.set(endpointKey, queryCount);

  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }


  console.log(`Querying ${endpoint.protocol}:${endpoint.name}`);
}
