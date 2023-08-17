// Put your solution here
function divideArray(arr) {
	let oddArr = [];
	let evenArr = [];
	arr.sort((a, b) => {
		if (a >= b) {
			return 1;
		} else if (a <= b) {
			return -1;
		} else {
			return 0;
		}
	});
	arr.forEach((n) => {
		if (n % 2 === 1) {
			oddArr.push(n);
		} else {
			evenArr.push(n);
		}
	});

	return { oddArr, evenArr };
}
let nums = [2, 1, 6, 3, 1, 6, 2];

const { oddArr, evenArr } = divideArray(nums);

if (oddArr.length) {
	console.log('Odd numbers:');
	oddArr.forEach((on) => {
		console.log(on);
	});
} else {
	console.log('Odd numbers:');
	console.log('None');
}
if (evenArr.length) {
	console.log('Even numbers:');
	evenArr.forEach((en) => {
		console.log(en);
	});
} else {
	console.log('Even numbers:');
	console.log('None');
}
