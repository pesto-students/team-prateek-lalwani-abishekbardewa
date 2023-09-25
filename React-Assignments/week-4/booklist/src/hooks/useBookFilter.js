import { useMemo } from 'react';

// Custom hook for filtering books based on a search term
export function useBookFilter(books, searchTerm) {
	const filteredBooks = useMemo(() => {
		return books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
	}, [books, searchTerm]);

	return filteredBooks;
}
