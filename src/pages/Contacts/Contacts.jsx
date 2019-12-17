import React from 'react';
import Socials from '../../components/Socials';

import './Contacts.sass';

export default function Contacts() {
	return (
		<section className="contacts-page page-section">
			<div className="container">
				<div className="row justify-content-center align-items-center">
					<div className="section_title">Контакты</div>
				</div>

				<div className="row justify-content-center align-items-center">
					<ul className="contacts">
						<li className="icon_phone">
							<a href="tel:+79038774141">+7 903 877-41-41</a>
						</li>
						<li className="icon_mail">
							<a href="mailto:hattam@mail.ru">hattam@mail.ru</a>
						</li>
					</ul>
				</div>

				<div className="row justify-content-center align-items-center">
					<Socials />
				</div>
			</div>
		</section>
	);
}
