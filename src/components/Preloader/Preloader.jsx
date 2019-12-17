import React from 'react';
import PropTypes from 'prop-types';

import Logo from './../../img/logo.svg';
import './Preloader.sass';

export default function Preloader(props) {
	return (
		<div id="preloader" className={props.pageLoaded ? 'loaded' : 'loading'}>
			<img src={Logo} alt="" />
			<div className="dots">
				<div className="dot"></div>
				<div className="dot"></div>
				<div className="dot"></div>
			</div>
		</div>
	);
}

Preloader.propTypes = {
	pageLoaded: PropTypes.bool.isRequired
};
