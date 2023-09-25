import React from 'react';
import { Container } from 'react-bootstrap';
import { BookDataLoader } from './components/BookDataLoader';
import { useTheme } from './context/ThemeContext';
import { Nav } from './components/Nav';

function App() {
	// Access the theme from the ThemeContext
	const { theme } = useTheme();

	// Checks the current theme and set the background color accordingly
	if (theme === 'dark') {
		document.body.style.backgroundColor = '#000000';
	} else {
		document.body.style.backgroundColor = '#ffffff';
	}

	return (
		<>
			<Nav />
			<Container className="my-5">
				<BookDataLoader />
			</Container>
		</>
	);
}

export default App;
