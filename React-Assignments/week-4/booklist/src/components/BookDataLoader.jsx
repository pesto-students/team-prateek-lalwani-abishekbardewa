import React, { useState, useEffect } from 'react';
import booksData from '../utils/booksData.json';
import { BookList } from './BookList';
import { Loading } from './Loading';

export function BookDataLoader() {
	const [loading, setLoading] = useState(true);
	const [books, setBooks] = useState([]);

	// useEffect to mimic a delayed data loading process
	useEffect(() => {
		setTimeout(() => {
			setBooks(booksData);
			setLoading(false);
		}, 2000);
	}, []);

	return <>{loading ? <Loading /> : <BookList books={books} />}</>;
}
