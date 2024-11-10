/**
 * @param {string} d 
 */
export const part1 = async d => {
	return ''; // Too lazy to make multipart inputs
	const potionsNeeded = {A: 0, B: 1, C: 3};
	const data = d.split('').reduce((c, n) => c += potionsNeeded[n], 0);
	return data;
};

/**
 * @param {string} d 
 */
export const part2 = async d => {
	return ''; // Too lazy to make multipart inputs
	const potionsNeeded = {x: -2, A: 0, B: 1, C: 3, D: 5};
	const data = d.match(/.{2}/g).reduce((c, n) => {
		if (n == 'xx') {
			return c;
		}
		return c + n.split('').reduce((c, n) => c += potionsNeeded[n] + 1, 0);
	}, 0);
	return data;
};

/**
 * @param {string} d 
 */
export const part3 = async d => {
	const potionsNeeded = {A: 0, B: 1, C: 3, D: 5};
	const data = d.match(/.{3}/g).reduce((c, n) => {
		if (n == 'xxx') {
			return c;
		}
		n = n.replaceAll('x', '');
		let extra = 0;
		switch (n.length) {
			case 3:
				extra = 6;
				break;
			case 2:
				extra = 2;
				break;
		}
		const p = n.split('').reduce((c, n) => c += potionsNeeded[n], 0) + extra;
		return c + p;
	}, 0);
	return data;
};
