// Your solution goes here

function playGuessingGame(numToGuess, defaultGuess = 10) {
	let guesses = 0;
	let enteredNumber;
	while (guesses < defaultGuess) {
		let promptText = '';
		if (guesses === 0) {
			promptText = 'Enter a number between 1 and 100.';
		} else if (guesses > 0 && numToGuess < enteredNumber) {
			promptText = `${enteredNumber} is too large. Guess a smaller number.`;
		} else if (guesses > 0 && numToGuess > enteredNumber) {
			promptText = `${enteredNumber} is too small. Guess a larger number.`;
		}

		const userInput = prompt(promptText);

		if (userInput === null) {
			return { result: 0, defaultGuess };
		}

		enteredNumber = parseInt(userInput);
		if (isNaN(enteredNumber)) {
			alert('Please enter a number.');
			continue;
		}
		if (enteredNumber === numToGuess) {
			return { result: guesses + 1, defaultGuess };
		}
		guesses++;
	}

	return { result: 0, defaultGuess };
}

let totalGuesses = 3;
let numToGuess = getRandomNumber(1, 100);

const { result, defaultGuess } = playGuessingGame(numToGuess, totalGuesses);

if (result > 0) {
	alert(`Congratulations! You guessed the number ${numToGuess} in ${result} guesses.`);
} else {
	alert(`Sorry, you couldn't guess the number ${numToGuess} within ${defaultGuess} guesses.`);
}

//Helpers Functions
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
