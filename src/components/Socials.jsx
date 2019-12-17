import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faVk,
	faSkype,
	faInstagram,
	faYoutube,
	faGithub
} from '@fortawesome/free-brands-svg-icons';

export default function Socials(props) {
	return (
		<div className={`socs_wrap ${props.className ? props.className : ''}`}>
			<ul>
				<li>
					<a
						href="https://vk.com/hattam_webdeveloper"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faVk} />
					</a>
				</li>
				<li>
					<a
						href="skype:hattam.soyunow"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faSkype} />
					</a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/hattam_webdeveloper/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
				</li>
				<li>
					<a
						href="https://www.youtube.com/channel/UCeoeg2wncse37GJ84kCXkTg"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faYoutube} />
					</a>
				</li>
				<li>
					<a
						href="https://github.com/hattamsoyunov/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</li>
			</ul>
		</div>
	);
}

Socials.propTypes = {
	className: PropTypes.string
};
