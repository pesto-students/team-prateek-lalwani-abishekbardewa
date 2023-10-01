import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CustomNavLink } from './CustomNavLink';

export const TopNav = () => {
	const { theme, toggleTheme } = useTheme();

	// Function to toggle the theme between light and dark
	const setTheme = () => {
		toggleTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	return (
		<Navbar collapseOnSelect expand="lg" bg={`${theme === 'light' ? 'light' : 'dark'}`} data-bs-theme={`${theme === 'light' ? 'light' : 'dark'}`}>
			<Container>
				<Navbar.Brand>
					<Link className="text-decoration-none link" to={'/'}>
						AB
					</Link>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
					<Nav className="ml-auto">
						<Nav.Link className="me-2">
							<CustomNavLink to="/" title="Home" />
						</Nav.Link>
						<Nav.Link className="me-2">
							<CustomNavLink to="/skills" title="Skills" />
						</Nav.Link>
						<Nav.Link className="me-2">
							<CustomNavLink to="/project" title="Project" />
						</Nav.Link>

						<Nav.Link className="me-2">
							<CustomNavLink to="/contact" title="Contact" />
						</Nav.Link>
					</Nav>
					<Button onClick={setTheme} className="toggleSwitch" title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
						<Image
							src={theme === 'light' ? '../assets/moon-sharp.svg' : '../assets/sunny-sharp.svg'}
							alt={theme === 'light' ? 'Moon' : 'Sun'}
							width="20"
							height="20"
						/>
					</Button>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
