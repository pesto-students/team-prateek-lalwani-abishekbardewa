// Function to display various properties of the Window object
function displayWindowProperties() {
	// Display the user agent string of the browser
	console.log('User Agent:', window.navigator.userAgent);

	// Display the width and height of the user's screen
	console.log('Screen Width:', window.screen.width);
	console.log('Screen Height:', window.screen.height);

	// Display the complete URL of the current page
	console.log('Current URL:', window.location.href);

	// Display the path portion of the current URL
	console.log('Path Name:', window.location.pathname);

	// Store data in the browser's session storage
	sessionStorage.setItem('sessionData', 'This is session data.');

	// Store data in the browser's local storage
	localStorage.setItem('localData', 'This is local data.');

	// Retrieve and display data from session storage
	console.log('Session Storage Data:', sessionStorage.getItem('sessionData'));

	// Retrieve and display data from local storage
	console.log('Local Storage Data:', localStorage.getItem('localData'));
}

//displayWindowProperties() function when the page fully loads
window.onload = displayWindowProperties;
