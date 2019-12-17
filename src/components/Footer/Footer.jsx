import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

import Socials from './../Socials';
import './Footer.sass';

export default function Footer(props) {
	return (
		<footer className="footer">
			<Socials />
			<button className="button order_button" onClick={props.onOpenModal}>
				<FontAwesomeIcon icon={faBolt} />
			</button>
		</footer>
	);
}
