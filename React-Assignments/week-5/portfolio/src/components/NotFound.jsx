import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';
export const NotFound = () => {
	const { theme } = useTheme();
	return (
		<Row className="justify-content-md-center">
			<Col md={6}>
				<Card data-bs-theme={`${theme === 'light' ? 'light' : 'dark'}`}>
					<Card.Body>
						<Card.Title>NotFound</Card.Title>
						<Card.Text>Page you are looking for does not exists.</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};
