import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

function BookDetail({ book: { id, title, author, year }, handleDelete }) {
	const [showMore, setShowMore] = useState(false);
	function deleteBook(id) {
		handleDelete(id);
	}
	function toggleShowMore() {
		setShowMore(!showMore);
	}
	return (
		<Card className="p-3">
			<Card.Title>{title}</Card.Title>
			<p onClick={toggleShowMore} className="show-more">
				Show more
			</p>

			{showMore && (
				<>
					<p>Author: {author}</p>
					<p>Year: {year}</p>
				</>
			)}
			<Button type="button" variant="danger" onClick={() => deleteBook(id)}>
				Delete Book
			</Button>
		</Card>
	);
}

export default BookDetail;
