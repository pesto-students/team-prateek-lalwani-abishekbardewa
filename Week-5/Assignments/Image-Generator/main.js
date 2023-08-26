// API endpoint and key
const apiUrl = 'https://api.openai.com/v1/images/generations';
const apiKey = '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';

// Cache for memoized responses
const memoizedResponses = {};

// DOM elements
const generateButton = document.getElementById('generateButton');
const promptInput = document.getElementById('promptInput');
const errorMessage = document.querySelector('.error-message');
const imgContainer = document.getElementById('imgContainer');
const placeholderText = document.querySelector('.placeholder-text');
const spinner = document.querySelector('.spinner');

// Event listener for button click
generateButton.addEventListener('click', () => {
	if (!validate()) {
		return;
	}
	errorMessage.style.display = 'none';
	placeholderText.style.display = 'none';
	spinner.style.display = 'block';
	const topic = promptInput.value.trim();

	if (memoizedResponses[topic]) {
		populateImage(memoizedResponses[topic]);
	} else {
		generateImage(topic);
	}
	promptInput.value = '';
});

// Function to fetch and display image from API
async function generateImage(topic) {
	try {
		generateButton.disabled = true;
		const reqObj = {
			prompt: topic,
			n: 4,
			size: '256x256',
		};
		const response = await fetch(apiUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`,
			},
			body: JSON.stringify(reqObj),
		});
		const jsonRes = await response.json();
		if (response.status === 200) {
			memoizedResponses[topic] = jsonRes;
			spinner.style.display = 'none';
			populateImage(jsonRes);
		} else {
			placeholderText.style.display = 'block';
			spinner.style.display = 'none';
			alert(`Error generating image, ${jsonRes.error.message}`);
		}
		generateButton.disabled = false;
	} catch (error) {
		generateButton.disabled = false;
		spinner.style.display = 'none';
		alert(`Error generating image: ${error}`);
	}
}

// Function to display image in the container
function populateImage(imgObj) {
	const imgElement = document.createElement('img');
	imgElement.src = imgObj.url;
	imgElement.alt = 'Generated Image';
	imgContainer.appendChild(imgElement);
}
// Function to validate user input
function validate() {
	if (promptInput.value.trim() === '') {
		errorMessage.style.display = 'block';
		return false;
	} else {
		errorMessage.style.display = 'none';
		return true;
	}
}
