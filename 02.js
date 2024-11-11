/**
 * @param {string} d 
 */
export const part1 = async d => {
	const data = d.split('\n\n');
	const words = data[0].slice(6).split(',');
	const sentence = data[1];
	const count = words.reduce((c, v) => c += (sentence.split(v).length - 1), 0);
	return count;
};

/**
 * @param {string} d 
 */
export const part2 = async d => {
	const data = d.split('\n\n');
	const wordsTemp = data[0].slice(6).split(',');
	const words = wordsTemp.concat(wordsTemp.map(e => e.split('').reverse().join('')));
	const sentences = data[1].split('\n').map(e => words.reduce((c, v) => c += (e.split(v).length - 1) * v.length, 0));
	console.log(sentences);
	return data;
};

/**
 * @param {string} d 
 */
export const part3 = async d => {
	const data = d.split('\n');
	data.splice(0, data.length);
	return data;
};
