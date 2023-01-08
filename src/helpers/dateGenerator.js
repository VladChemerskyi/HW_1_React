export const dateGenerator = () => {
	let dateObj = new Date();

	return (
		dateObj.getUTCDate() +
		'/' +
		dateObj.getUTCMonth() +
		1 +
		'/' +
		dateObj.getUTCFullYear()
	);
};
