/* eslint-disable */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
	  throw new Error('cannot divide by 0');
  }
	const ans = (numerator / denominator);

	return ans;
}
