import React from 'react';
import { Badge, Card, Col, Row, Stack } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';
import skillsData from '../utils/skillsData';
export const Skills = () => {
	const { theme } = useTheme();
	return (
		<Row>
			<Col lg={4}>
				<Card data-bs-theme={`${theme === 'light' ? 'light' : 'dark'}`} className="mb-4">
					{skillsData.map((ele) => (
						<Card.Body key={ele.id}>
							<Card.Title>{ele.title}</Card.Title>
							<Stack direction="horizontal" gap={2} className="flex-wrap">
								{ele.skills.map((skill, i) => (
									<Badge key={i} pill bg="primary">
										{skill}
									</Badge>
								))}
							</Stack>
						</Card.Body>
					))}
				</Card>
			</Col>
		</Row>
	);
};
