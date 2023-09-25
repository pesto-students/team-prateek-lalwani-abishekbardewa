import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Button, Container, Image, Navbar } from 'react-bootstrap';

export const Nav = () => {
	const { theme, toggleTheme } = useTheme();

	// Function to toggle the theme between light and dark
	const setTheme = () => {
		toggleTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};
	return (
		<Navbar bg="primary" data-bs-theme="dark">
			<Container>
				<Navbar.Brand>BookList</Navbar.Brand>
				{/* Button to toggle the theme */}
				<Button className="ml-auto" onClick={setTheme} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
					<Image
						src={theme === 'light' ? '../assets/moon-sharp.svg' : '../assets/sunny-sharp.svg'}
						alt={theme === 'light' ? 'Moon' : 'Sun'}
						width="20"
						height="20"
					/>
				</Button>
			</Container>
		</Navbar>
	);
};
