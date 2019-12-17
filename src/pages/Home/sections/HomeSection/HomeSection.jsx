import React from 'react';
import { Link } from 'react-router-dom';

import './HomeSection.sass';

export default function HomeSection(props) {
	return (
		<div className="home-sect section active">
			<div className="parallax_bg"></div>

			<div className="section_row align-items-center">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-12 col-lg-5 order-lg-last">
							<div className="personal_img_wrap">
								<img
									src="img/personal_img.jpg"
									alt="Personal img - hattam.ru"
								/>
							</div>
							{/* <div className="glitch">
								<img
									src="img/glitch_img_1.jpg"
									className="glitch__img"
									alt=""
								/>
								<img
									src="img/glitch_img_2.jpg"
									className="glitch__img"
									alt=""
								/>
							</div> */}
						</div>

						<div className="col-12 col-lg-6">
							<div className="personal_info_wrap">
								<div className="name">Хатам Союнов</div>
								<div className="desc">
									Привет, меня зовут Хатам, я{' '}
									<a
										href="https://www.profguide.io/professions/front_end_developer.html"
										target="_blank"
										rel="noopener noreferrer"
									>
										<strong>front-end разработчик</strong>
									</a>{' '}
									с опытом более <strong>6 лет</strong>.
								</div>

								<div className="buttons_wrap">
									<Link to="/about" className="button arrow_right more_about">
										Обо мне
									</Link>
									<button
										className="button button_invert arrow_right"
										onClick={() => props.fullpageApi.moveTo(3, 0)}
									>
										Мои проекты
									</button>
								</div>

								<div id="like_button_container"></div>
							</div>
						</div>
					</div>
				</div>

				<div className="scroll_arrow_wrap">
					<div
						className="scroll_arrow"
						onClick={() => props.fullpageApi.moveSectionDown()}
					>
						<span className="text">Прокрути вниз</span>
						<div className="icon"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
