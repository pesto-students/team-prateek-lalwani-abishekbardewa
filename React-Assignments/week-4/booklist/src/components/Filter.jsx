import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useTheme } from '../context/ThemeContext';

export function Filter({ handleSearch, handleSort }) {
	const { theme } = useTheme();
	return (
		<Form data-bs-theme={`${theme === 'light' ? 'light' : 'dark'}`}>
			<Row>
				<Col md={6}>
					{/* Input field for searching books */}
					<Form.Group controlId="search">
						<Form.Control
							type="text"
							placeholder="Search book"
							onChange={(e) => handleSearch(e.target.value)}
							className={`bg-${theme === 'light' ? 'light' : 'dark'} text-${theme === 'light' ? 'dark' : 'light'}`}
						/>
					</Form.Group>
				</Col>
			</Row>
			<Row>
				<Col md={6}>
					{/* Dropdown for sorting books */}
					<Form.Group controlId="sort">
						<Form.Label className={` mt-2 text-${theme === 'dark' ? 'light' : 'dark'}`}>Sort By:</Form.Label>
						<Form.Control
							as="select"
							onChange={(e) => handleSort(e.target.value)}
							className={`bg-${theme === 'light' ? 'light' : 'dark'} text-${theme === 'light' ? 'dark' : 'light'}`}
						>
							<option value="title">Title</option>
							<option value="author">Author</option>
							<option value="year">Year</option>
						</Form.Control>
					</Form.Group>
				</Col>
			</Row>
		</Form>
	);
}
