import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../utils/projectsData';
import { Card, Col, Row } from 'react-bootstrap';
import { NotFound } from '../components/NotFound';
import { useTheme } from '../context/ThemeContext';
export const ProjectDetail = () => {
	const { theme } = useTheme();
	const { id } = useParams();
	const project = projectsData.find((project) => project.id === parseInt(id));
	if (!project) {
		return <NotFound />;
	}

	const { title, description, img } = project;

	return (
		<Row className="justify-content-md-center">
			<Col md={6}>
				<Card data-bs-theme={`${theme === 'light' ? 'light' : 'dark'}`}>
					<Card.Img variant="top" src={`/assets/${img}`} />
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<Card.Text>{description}</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};
