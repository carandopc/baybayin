function check() {
	let text = document.getElementById('text').value;
	let result = document.getElementById('result');

	if (text != null) {
		text = text.replace(/c|q/g, 'k');
		text = text.replace(/f/g, 'p');
		text = text.replace(/i/g, 'e');
		text = text.replace(/j|r/g, 'd');
		text = text.replace(/ng/g, '+');
		text = text.replace(/u/g, 'o');
		text = text.replace(/v/g, 'b');
		text = text.replace(/x|z/g, 's');

		var patinig = 'aeo';
		var katinig = 'bkdghlmn+prstwy';

		let count = 0;
		let output = '';

		while (count < text.length) {
			let part = text.charAt(count);
			let next = text.charAt(count + 1);

			if (patinig.indexOf(part) > -1) {
				output += pMap.get(part);
			} else if (katinig.indexOf(part) > -1) {
				output += kMap.get(part);

				if (next != '' && patinig.indexOf(next) > -1) {
					output += uMap.get(next);
					count++;
				} else {
					output += uMap.get('+');
				}
			} else {
				output += ' ';
			}

			count++;
		}

		result.innerHTML = output;
	}

	return false;
}

let pMap = new Map();
pMap.set('a', '\u1700');
pMap.set('e', '\u1701');
pMap.set('o', '\u1702');

let kMap = new Map();
kMap.set('b', '\u170A');
kMap.set('k', '\u1703');
kMap.set('d', '\u1707');
kMap.set('g', '\u1704');
kMap.set('h', '\u1711');
kMap.set('l', '\u170E');
kMap.set('m', '\u170B');
kMap.set('n', '\u1708');
kMap.set('+', '\u1705');
kMap.set('p', '\u1709');
kMap.set('s', '\u1710');
kMap.set('t', '\u1706');
kMap.set('w', '\u170F');
kMap.set('y', '\u170C');

let uMap = new Map();
uMap.set('a', '');
uMap.set('e', '\u1712');
uMap.set('o', '\u1713');
uMap.set('+', '\u1714');