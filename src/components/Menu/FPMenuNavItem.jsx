import React from 'react';
import PropTypes from 'prop-types';

export default function FPMenuNavItem(props) {
	return (
		<a
			href="/"
			className="menu_link"
			onClick={e => {
				e.preventDefault();
				props.onMenuToggle();
				window.fullpage_api.moveTo(props.index, 0);
			}}
		>
			{props.text}
		</a>
	);
}

FPMenuNavItem.propTypes = {
	index: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired
};
