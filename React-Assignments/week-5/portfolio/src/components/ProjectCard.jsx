import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
export const ProjectCard = ({ project }) => {
	const { theme } = useTheme();
	const { title, description, img } = project;
	return (
		<Card data-bs-theme={`${theme === 'light' ? 'light' : 'dark'}`} className="mb-4">
			<Card.Img variant="top" src={`/assets/${img}`} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Link to={`/project/${project.id}`}>
					<Button variant="primary">Details</Button>
				</Link>
			</Card.Body>
		</Card>
	);
};
