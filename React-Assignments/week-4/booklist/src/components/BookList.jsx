import React, { useState } from 'react';
import { BookDetail } from './BookDetail';
import { Col, Container, Row } from 'react-bootstrap';
import { Filter } from './Filter';
import { useBookFilter } from '../hooks/useBookFilter.js';
import { useBookSorter } from '../hooks/useBookSorter.js';
import { useTheme } from '../context/ThemeContext';

export function BookList({ books }) {
	const { theme } = useTheme();
	const [searchTerm, setSearchTerm] = useState('');
	const [sortBy, setSortBy] = useState('title');

	// Use of custom hook for filtering books
	const filteredBooks = useBookFilter(books, searchTerm);
	// Use of custom hook for sorting books
	const sortedBooks = useBookSorter(filteredBooks, sortBy);

	// Function to handle changes to the search term input
	const handleSearch = (term) => {
		setSearchTerm(term);
	};
	// Function to handle changes to the sort criteria input
	const handleSort = (criteria) => {
		setSortBy(criteria);
	};
	return (
		<>
			<Container className="my-4 p-0">
				<Filter handleSearch={handleSearch} handleSort={handleSort} />
				<Row className="row-gap-3 mt-5">
					{filteredBooks.length === 0 ? (
						<div className={`text-${theme === 'dark' ? 'light' : 'dark'}`}>No books found</div>
					) : (
						sortedBooks.map((book) => (
							<Col md={3} sm={12}>
								<BookDetail key={book.id} book={book} />
							</Col>
						))
					)}
				</Row>
			</Container>
		</>
	);
}
