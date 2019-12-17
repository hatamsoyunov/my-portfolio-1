import React from 'react';

import './LeftAside.sass';

export default function LeftAside(props) {
	return (
		<div id="left_panel">
			<div className="menu_button_wrap">
				<div
					className={`menu_button ${props.showMenu ? 'active' : ''}`}
					onClick={props.onMenuToggle}
				>
					<span className="line"></span>
				</div>
			</div>
			<div className="copyright">
				<div className="copyright_text">
					© 2014-{new Date().getFullYear()}. Все права защищены
				</div>
			</div>
			<div
				className={`totop ${props.showToTop ? 'active' : ''}`}
				onClick={() => window.fullpage_api.moveTo(1, 0)}
			>
				<div className="icon"></div>
				<div className="text">Вверх</div>
			</div>
		</div>
	);
}
