function calcWordFrequencies() {
	const input = prompt('Enter a sentence');
	let words = input.split(' ');
	let freqMap = new Map();

	for (let word of words) {
		if (freqMap.has(word)) {
			freqMap.set(word, freqMap.get(word) + 1);
		} else {
			freqMap.set(word, 1);
		}
	}
	return freqMap;
}
const result = calcWordFrequencies();

for (let [word, frequency] of result) {
	console.log(`${word}: ${frequency}`);
}
