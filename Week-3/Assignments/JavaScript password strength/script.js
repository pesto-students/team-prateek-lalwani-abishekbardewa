// Your solution goes here

function isStrongPassword(str) {
	var pattern = /(?=.*[A-Z])(?=.*[0-9])/;
	if (str.length < 8 || str.includes('password') || !pattern.test(str)) {
		return false;
	}
	return true;
}

console.log(isStrongPassword('Qwerty')); // false - Too short
console.log(isStrongPassword('passwordQwerty')); // false - Contains "password"
console.log(isStrongPassword('qwerty123')); // false - No uppercase characters
console.log(isStrongPassword('Qwerty123')); // true
