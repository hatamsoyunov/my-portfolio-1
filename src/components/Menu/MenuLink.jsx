import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MenuLink({ children, onMenuToggle, ...rest }) {
	return (
		<NavLink
			className="menu_link"
			activeClassName="active"
			onClick={onMenuToggle}
			{...rest}
		>
			{children}
		</NavLink>
	);
}
