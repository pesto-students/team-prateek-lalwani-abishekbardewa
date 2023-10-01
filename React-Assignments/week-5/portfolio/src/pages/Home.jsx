import React from 'react';
import { Col, Row, Card, Image, Stack, Badge } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';

export const Home = () => {
	const { theme } = useTheme();
	const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'NextJS', 'Node'];
	return (
		<Row>
			<Col lg={3} md={6} gap={2}>
				<Card data-bs-theme={`${theme === 'light' ? 'light' : 'dark'}`} className="mb-4">
					<div className="d-flex align-items-center justify-content-center mt-3">
						<Image className="profile-img" src="/assets/profile.jpg" roundedCircle />
					</div>
					<Card.Body>
						<Card.Title className="text-center">Abishek Bardewa</Card.Title>
						<Card.Subtitle className="m-0 mb-1">Skills</Card.Subtitle>
						<Stack direction="horizontal" gap={2} className="flex-wrap">
							{skills.map((skill, i) => (
								<Badge key={i} pill bg="primary">
									{skill}
								</Badge>
							))}
						</Stack>
						<Card.Subtitle className="m-0 mt-2">Contact</Card.Subtitle>
						<Card.Text className="m-0">abishekbardewa@gmail.com</Card.Text>
						<Card.Text className="m-0">+916296614710</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col lg={9} md={12}>
				<Card data-bs-theme={`${theme === 'light' ? 'light' : 'dark'}`}>
					<Card.Body>
						<Card.Title>Web Developer</Card.Title>
						<Card.Text className="m-0 mb-1">
							Sed posuere feugiat tortor, sit amet interdum risus vestibulum placerat. Nunc sagittis velit a placerat pulvinar. Etiam feugiat tortor
							cursus est porta tincidunt. Integer et tortor eu quam hendrerit tincidunt. Sed commodo scelerisque tellus in venenatis. Donec enim
							lorem, accumsan at bibendum laoreet, congue sit amet dui. Curabitur ut sem varius, eleifend orci et, scelerisque mi.
						</Card.Text>
					</Card.Body>
				</Card>
				<Row className="mt-4">
					<Col lg={6} md={12} className="mb-4">
						<Card data-bs-theme={`${theme === 'light' ? 'light' : 'dark'}`}>
							<Card.Body>
								<Card.Title>Experience</Card.Title>
								<Badge pill bg="primary">
									2022 - Present
								</Badge>
								<Card.Text className="m-0 mb-1">Web Developer</Card.Text>
								<Card.Text className="m-0 mb-1">Distinct Cloud Labs</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={6} md={12}>
						<Card data-bs-theme={`${theme === 'light' ? 'light' : 'dark'}`}>
							<Card.Body>
								<Card.Title>Education</Card.Title>
								<Badge pill bg="primary">
									2009 - 2012
								</Badge>
								<Card.Text className="m-0 mb-1">Bachelor Of Technology (IT)</Card.Text>
								<Card.Text className="m-0 mb-1">West Bengal University of Technology</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};
