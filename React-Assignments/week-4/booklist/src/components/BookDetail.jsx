import React from 'react';
import { Card } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';

export function BookDetail({ book: { id, title, author, year } }) {
	const { theme } = useTheme();
	return (
		// Set the background and text color based on the theme (light or dark)
		<Card bg={theme === 'light' ? 'light' : 'dark'} text={theme === 'light' ? 'dark' : 'white'} className="p-3">
			<Card.Title>{title}</Card.Title>
			<Card.Text className="m-0">Author: {author}</Card.Text>
			<Card.Text className="m-0">Year: {year}</Card.Text>
		</Card>
	);
}
