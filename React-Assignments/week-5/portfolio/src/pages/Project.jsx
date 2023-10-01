import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import projectsData from '../utils/projectsData.json';
import { ProjectCard } from '../components/ProjectCard';
import { Loading } from '../components/Loading';
export const Project = () => {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setProjects(projectsData);
			setLoading(false);
		}, 300);
	}, []);
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<Row>
					{projects?.map((project) => (
						<Col key={project.id} md={3}>
							<ProjectCard project={project} />
						</Col>
					))}
				</Row>
			)}
		</>
	);
};
