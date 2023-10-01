import React, { useState } from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';

export const Contact = () => {
	const { theme } = useTheme();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const [isSuccess, setSuccess] = useState(false);
	const onFormSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setTimeout(() => {
			console.log({ name, email, subject, message });
			setName('');
			setEmail('');
			setSubject('');
			setMessage('');
			setLoading(false);
			setSuccess(true);
		}, 3000);
	};
	return (
		<Row className="justify-content-md-center">
			<Col md={6}>
				<Form onSubmit={onFormSubmit} data-bs-theme={`${theme === 'light' ? 'light' : 'dark'}`} className="form-wrapper">
					<Form.Group className="mb-3" controlId="name">
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required />
					</Form.Group>
					<Form.Group className="mb-3" controlId="email">
						<Form.Label>Email </Form.Label>
						<Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
					</Form.Group>
					<Form.Group className="mb-3" controlId="subject">
						<Form.Label>Subject</Form.Label>
						<Form.Control type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
					</Form.Group>
					<Form.Group className="mb-3" controlId="message">
						<Form.Label>Message</Form.Label>
						<Form.Control as="textarea" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
					</Form.Group>{' '}
					{isSuccess && <Alert variant="success">Your message has been sent.</Alert>}
					<Button variant="primary" type="submit" disabled={loading}>
						{loading ? 'Submitting...' : 'Submit'}
					</Button>
				</Form>
			</Col>
		</Row>
	);
};
