import React from 'react';
import { withRouter } from 'react-router-dom';

import logo from './../../img/icons/logo_default.svg';

import Socials from './../Socials';

import MenuLink from './MenuLink';
import './Menu.sass';
import FPMenuNavItem from './FPMenuNavItem';

function Menu(props) {
	const { pathname } = props.location;
	const isHome = pathname === '/';

	return (
		<div id="menu" className={props.showMenu ? 'opened' : ''}>
			<div className="row justify-content-center align-items-center">
				<div className="logo_wrap">
					<img src={logo} alt="Logo Img - hattam.ru" className="logo" />
				</div>
			</div>

			<div className="row justify-content-center align-items-center">
				<nav>
					<ul>
						<li>
							{isHome ? (
								<FPMenuNavItem
									index={1}
									text="Главная"
									onMenuToggle={props.onMenuToggle}
								/>
							) : (
								<MenuLink exact to="/" onMenuToggle={props.onMenuToggle}>
									Главная
								</MenuLink>
							)}
						</li>
						<li>
							<MenuLink to="/about" onMenuToggle={props.onMenuToggle}>
								Обо мне
							</MenuLink>
						</li>
						<li>
							{isHome ? (
								<FPMenuNavItem
									index={2}
									text="Навыки"
									onMenuToggle={props.onMenuToggle}
								/>
							) : (
								<MenuLink exact to="/#skills" onMenuToggle={props.onMenuToggle}>
									Навыки
								</MenuLink>
							)}
						</li>
						<li>
							{isHome ? (
								<FPMenuNavItem
									index={3}
									text="Проекты"
									onMenuToggle={props.onMenuToggle}
								/>
							) : (
								<MenuLink
									exact
									to="/#projects"
									onMenuToggle={props.onMenuToggle}
								>
									Проекты
								</MenuLink>
							)}
						</li>
						<li>
							<MenuLink to="/contacts" onMenuToggle={props.onMenuToggle}>
								Контакты
							</MenuLink>
						</li>
					</ul>
				</nav>
			</div>

			<div className="row justify-content-center align-items-center">
				<Socials />

				<div className="copyright">
					<div className="copyright_text">© 2014-2018. Все права защищены</div>
				</div>
			</div>
		</div>
	);
}

export default withRouter(Menu);
