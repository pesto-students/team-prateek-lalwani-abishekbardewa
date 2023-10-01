import React from 'react';
import { NavLink } from 'react-router-dom';

export const CustomNavLink = ({ to, title }) => {
	return (
		<NavLink
			className="text-decoration-none link"
			to={to}
			style={({ isActive, isPending }) => {
				return {
					fontWeight: isActive ? '600' : '',
					color: isActive && '#0d6efd',
				};
			}}
		>
			{title}
		</NavLink>
	);
};
