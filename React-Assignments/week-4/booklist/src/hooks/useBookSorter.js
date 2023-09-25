import { useMemo } from 'react';

// Custom hook to sort books based on sortBy (title, author and year)
export function useBookSorter(books, sortBy) {
	const sortedBooks = useMemo(() => {
		const sorted = [...books];
		if (sortBy === 'title') {
			sorted.sort((a, b) => a.title.localeCompare(b.title));
		} else if (sortBy === 'author') {
			sorted.sort((a, b) => a.author.localeCompare(b.author));
		} else {
			sorted.sort((a, b) => a.year - b.year);
		}
		return sorted;
	}, [books, sortBy]);

	return sortedBooks;
}
