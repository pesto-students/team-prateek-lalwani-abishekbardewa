import React from 'react';
import BookList from './components/BookList';
import { Container } from 'react-bootstrap';

function App() {
	return (
		<Container className="my-5">
			<BookList />
		</Container>
	);
}

export default App;
