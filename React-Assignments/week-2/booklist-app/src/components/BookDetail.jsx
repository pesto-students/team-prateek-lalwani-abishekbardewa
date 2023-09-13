import React from 'react';

function BookDetail({ book: { title, author, year } }) {
	return (
		<div>
			<h3>{title}</h3>
			<p>Author: {author}</p>
			<p>Year: {year}</p>
		</div>
	);
}

export default BookDetail;
