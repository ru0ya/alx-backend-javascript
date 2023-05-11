export default function divideFunction(numerator, denominator) {
	try {
		const result = numerator / denominator;
		return result;
	}catch (error) {
		console.log('cannot divide by 0');
	}
}
