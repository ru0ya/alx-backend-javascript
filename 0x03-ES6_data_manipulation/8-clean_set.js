/* eslint-disable */
export default function cleanSet(set, startString) {
  if (!startString || !startString.length) {
    return '';
  }

  return [...set]
    .filter((value) => value && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
