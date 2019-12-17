import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import './Header.sass';
import logo from './../../img/icons/logo_default.svg';

function Header(props) {
	const { pathname } = props.location;

	return (
		<header className={`header${pathname !== '/' ? ' page-header' : ''}`}>
			{pathname === '/' ? (
				<div
					className="logo_wrap"
					onClick={() => window.fullpage_api.moveTo(1, 0)}
				>
					<img src={logo} alt="Logo Img - hattam.ru" className="logo" />
				</div>
			) : (
				<Link to="/" className="logo_wrap">
					<img src={logo} alt="Logo Img - hattam.ru" className="logo" />
				</Link>
			)}

			<div className="contacts_wrap">
				<a href="tel: +7 903 877-41-41" className="phone feedback_button">
					<FontAwesomeIcon icon={faPhone} />
					+7 903 877-41-41
				</a>
				<button className="button order_button" onClick={props.onOpenModal}>
					Оставить заявку
				</button>
			</div>
			<div className="menu_button_wrap">
				<div
					className={`menu_button ${props.showMenu ? 'active' : ''}`}
					onClick={props.onMenuToggle}
				>
					<span className="line"></span>
				</div>
			</div>
		</header>
	);
}

export default withRouter(Header);
