import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

const BookForm = ({ addBook }) => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [year, setYear] = useState('');
	function handleSubmit(e) {
		e.preventDefault();
		addBook({ title, author, year });
		setTitle('');
		setAuthor('');
		setYear('');
	}
	return (
		<Row>
			<Col md={6}>
				<Card className="p-3">
					<Card.Title>Add New Book</Card.Title>
					<Form onSubmit={handleSubmit} className="form-wrapper ">
						<Form.Group className="mb-2">
							{/* <Form.Label htmlFor="bookTitle">Book title</Form.Label> */}
							<Form.Control id="bookTitle" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} />
						</Form.Group>
						<Form.Group className="mb-2">
							{/* <Form.Label htmlFor="bookAuthor">Book author</Form.Label> */}
							<Form.Control id="bookAuthor" placeholder="Book author" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
						</Form.Group>
						<Form.Group className="mb-3">
							{/* <Form.Label htmlFor="year">Published Year</Form.Label> */}
							<Form.Control id="year" placeholder="Published Year" value={year} onChange={(e) => setYear(e.target.value)} />
						</Form.Group>
						<Button type="submit">Save book</Button>
					</Form>
				</Card>
			</Col>
		</Row>
	);
};

export default BookForm;
