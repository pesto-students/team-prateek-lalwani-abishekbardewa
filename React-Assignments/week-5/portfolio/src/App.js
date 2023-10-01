import React from 'react';
import { Container } from 'react-bootstrap';
import { useTheme } from './context/ThemeContext';
import { TopNav } from './components/TopNav';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Project } from './pages/Project';
import { Contact } from './pages/Contact';
import { ProjectDetail } from './pages/ProjectDetail';
import { NotFound } from './components/NotFound';
import { Skills } from './pages/Skills';

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
			<TopNav />
			<Container className="my-5">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/project" element={<Project />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/project/:id" element={<ProjectDetail />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
		</>
	);
}

export default App;
