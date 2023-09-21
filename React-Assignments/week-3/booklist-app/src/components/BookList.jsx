import React, { Component } from 'react';
import BookDetail from './BookDetail';
import WithLogging from './WithLogging';
import BookForm from './BookForm';
import { Col, Container, Row } from 'react-bootstrap';

class BookList extends Component {
	constructor() {
		super();
		this.state = {
			books: [
				// { id: 2, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
				// { id: 23, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
				// { id: 1, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
				// { id: 1, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
				// { id: 1, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
			],
		};
	}
	generateRandomId = () => {
		return Math.floor(Math.random() * 10000);
	};
	addBook = (book) => {
		if (book.title === '' || book.author === '' || book.year === '') {
			alert('Book fields are empty');
			return;
		}
		const newBook = { ...book, id: this.generateRandomId(), showMore: false };
		this.setState((prevState) => ({
			books: [...prevState.books, newBook],
		}));
		console.log(this.state.books);
	};
	handleDelete = (id) => {
		if (window.confirm('Are you sure want to delete?')) {
			this.setState((prevState) => {
				const newList = prevState.books.filter((book) => book.id !== id);
				return { books: newList };
			});
		}
	};
	render() {
		return (
			<>
				<BookForm addBook={this.addBook} />
				<Container className="my-4 p-0">
					<h1 className="heading mb-3">Book List</h1>
					{this.state.books.length > 0 ? (
						<Row className="row-gap-3">
							{this.state.books.map((book) => (
								<Col md={3} sm={12}>
									<BookDetail key={book.id} book={book} handleDelete={this.handleDelete} />
								</Col>
							))}
						</Row>
					) : (
						<h2 className="sub-heading">Book list is empty</h2>
					)}
				</Container>
			</>
		);
	}
}
export default WithLogging(BookList);
