function pipeDuration(dur) {
	return `${padTo2Digits(Math.floor(dur / 60))}:${padTo2Digits(dur % 60)}`;
}
function padTo2Digits(num) {
	return num.toString().padStart(2, '0');
}

export { pipeDuration };
