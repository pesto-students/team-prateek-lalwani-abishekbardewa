class Calculator {
	constructor() {}
	add(num1, num2) {
		return num1 + num2;
	}
	subtract(num1, num2) {
		return num1 - num2;
	}
	multiply(num1, num2) {
		return num1 * num2;
	}
	divide(num1, num2) {
		if (num2 === 0) {
			throw new Error('Division by zero is not allowed');
		}
		return num1 / num2;
	}
}

class ScientificCalculator extends Calculator {
	constructor() {
		super();
	}
	square(num) {
		return num * num;
	}

	cube(num) {
		return num * num * num;
	}
	power(base, exponent) {
		return Math.pow(base, exponent);
	}
}
const sCalculator = new ScientificCalculator();
console.log(sCalculator.add.call(sCalculator, 2, 3));
console.log(sCalculator.subtract.apply(sCalculator, [10, 7]));
const multiplyByTwo = sCalculator.multiply.bind();
console.log(multiplyByTwo(2, 3));
console.log(multiplyByTwo(2, 5));
const powerOfThree = sCalculator.power.bind();
console.log(powerOfThree(2, 3));
