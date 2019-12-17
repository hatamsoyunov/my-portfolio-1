<div id="about_more" className="mfp_pupup zoom-anim-dialog mfp-hide">
					<div className="popup_container">
						<div title="Закрыть" className="popup_close_button opened">
							<div className="button_box">
								<span className="line"></span>
							</div>
						</div>

						<div className="row justify-content-center align-items-center">
							<div className="section_title">Обо мне</div>
						</div>

						<div className="row justify-content-center align-items-center">
							<div className="about_text">
								<p>
									Меня зовут <strong>Хатам</strong>, занимаюсь веб-разработкой,
									а именно <strong>front-end'ом</strong> уже более{' '}
									<strong>6-ти лет.</strong>
								</p>

								<p>
									За все это время успел работать в нескольких веб-студиях и на
									фрилансе, набирал большое количество опыта, а сейчас работаю
									на удалёнке в компании
									<a
										href="https://lained.ru"
										target="_blank"
										rel="noopener noreferrer"
									>
										"Lained"
									</a>
									на должности "Руководитель отдела front-end разработки".
								</p>

								<p>
									Уверенно могу сказать что являюсь
									<strong>профессионалом</strong> в
									<strong>частности вёрстки</strong>, так как уже проделан куча
									работ с разными сложностями (резиновый, полноэкранными
									блоками, с поблочным вертикальным/горизонтальным скроллом, с
									анимациями, вёрстка сложных многостраничных сайтов и
									интернет-магазинов, вёрстка админской части сайта и многое
									другое).
								</p>

								<div className="title">Профессиональная вёрстка</div>
								<ul>
									<li>
										Очень хорошо знаю <strong>HTML/CSS/JS(jQ+Ajax)</strong>
									</li>
									<li>
										Пользуюсь препроцессорам и шаблонизатором HTML
										<strong>PUG</strong>
									</li>
									<li>
										Также работаю с препроцессорами CSS, а именно
										<strong>SASS</strong>'ом.
									</li>
									<li>
										Проект собираю и компилирую с помощью своего сборщика на
										gulp -
										<a
											href="https://github.com/hattamsoyunov/start_dev"
											target="_blank"
											rel="noopener noreferrer"
										>
											start_dev
										</a>
										.
									</li>
									<li>
										Вёрстку делаю по системе БЕМ, чистый код со смысловыми
										классами и комментариями чтобы в дальнейшем любой другой
										веб-разработчик с легкостью понимал код (не делать такое, не
										позволяет мой перфекционизм и мой принцип "Качество всегда
										на первом месте")
									</li>
								</ul>

								<div className="title">Веб-дизайн</div>

								<p>
									Также, занимаюсь <strong>веб-дизайном</strong>, за все время
									работы верстальщиком очень много изучал по веб-дизайну и
									набирал опыта, в свое время даже начал принимать заказы на
									создание дизайна сайтов, но как основной вид делятельности на
									профессиональном уровне не занимался, а продвигался в основном
									по сторону front-end разработки. Время от времени рисую и
									дизайн сайтов тоже.
								</p>

								<ul>
									<li>
										Очень хорошо знаю <strong>Adobe Photoshop</strong>, более{' '}
										<strong>7-ми лет опыта</strong>.
									</li>
									<li>
										Для создание макетов сайта в основном пользуюсь крутой
										программой{' '}
										<strong>Abode XD (Adobe Experience Design)</strong>.
									</li>
									<li>
										<strong>Adobe Illustrator</strong>, опыт более 2 года, в
										основном рисую SVG элементы, иконки для сайта.
									</li>
								</ul>

								<div className="title">Немного back-end'a</div>

								<p>
									Для не сложных, иногда и для сложных сайтов делаю интеграцию
									на CMS систему, а именно на MODX Revo. Почти все
									одностраничные или несложные многостраничные сайты
									интегрировал на MODX.
								</p>

								<ul>
									<li>Опыт работы на MODX более 3 лет.</li>
									<li>
										Опыт в интеграции начиная с одностраниных сайтов до
										полнофункционального интернет-магазина.
									</li>
								</ul>

								<div className="title">Моя цель</div>
								<ul>
									<li>Стать профессиональным JavaScript программистом.</li>
									<li>Стать full-stack разработчиком.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div id="contacts" className="mfp_pupup zoom-anim-dialog mfp-hide">
					<div className="popup_container">
						<div title="Закрыть" className="popup_close_button opened">
							<div className="button_box">
								<span className="line"></span>
							</div>
						</div>

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

						<div className="row justify-content-center align-items-center">
							<form id="feedback">
								<div className="row">
									<input
										type="hidden"
										name="form_subject"
										value="Обратная связь - hattam.ru"
									/>
									<div className="col-12 col-sm-6">
										<div className="input_wrap">
											<input type="text" name="us_name" requried="true" />
											<span className="placeholder">Имя*</span>
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="input_wrap">
											<input type="email" name="us_email" requried="true" />
											<span className="placeholder">Email*</span>
										</div>
									</div>
									<div className="col-12">
										<div className="input_wrap">
											<textarea
												rows="4"
												name="us_message"
												requried="true"
											></textarea>
											<span className="placeholder">Сообщение</span>
										</div>
									</div>
									<div className="col-12">
										<button
											type="submit"
											className="button arrow_right btn-submit"
										>
											Отправить
										</button>
									</div>
								</div>
								<div className="success_message">
									<div className="preloader_send">
										<div className="dot"></div>
										<div className="dot"></div>
										<div className="dot"></div>
									</div>
									<div className="success_icon"></div>
									<div className="message_text">
										Сообщение успешно отправлено!
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div id="order_popup" className="mfp_pupup zoom-anim-dialog mfp-hide">
					<div className="popup_container">
						<div title="Закрыть" className="popup_close_button opened">
							<div className="button_box">
								<span className="line"></span>
							</div>
						</div>

						<div className="row justify-content-center align-items-center">
							<div className="section_title">Оставить заявку</div>
						</div>
						<div className="row justify-content-center align-items-center">
							<div className="section_desc">
								Оставьте заявку и я вам отвечу как можно скорее.
							</div>
						</div>

						<div className="row justify-content-center align-items-center">
							<form id="order_form">
								<div className="row">
									<input
										type="hidden"
										name="form_subject"
										value="Новая заявка - hattam.ru"
									/>
									<div className="col-12">
										<div className="input_wrap">
											<input type="text" name="us_name" requried="true" />
											<span className="placeholder">Имя*</span>
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="input_wrap">
											<input type="email" name="us_email" requried="true" />
											<span className="placeholder">Email*</span>
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="input_wrap">
											<input type="tel" name="us_phone" requried="true" />
											<span className="placeholder">Телефон*</span>
										</div>
									</div>
									<div className="col-12">
										<div className="input_wrap">
											<textarea
												rows="4"
												name="us_message"
												requried="true"
											></textarea>
											<span className="placeholder">Сообщение</span>
										</div>
									</div>
									<div className="col-12">
										<button
											type="submit"
											className="button arrow_right btn-submit"
										>
											Отправить
										</button>
									</div>
								</div>
								<div className="success_message">
									<div className="preloader_send">
										<div className="dot"></div>
										<div className="dot"></div>
										<div className="dot"></div>
									</div>
									<div className="success_icon"></div>
									<div className="message_text">Заявка успешно отправлена!</div>
								</div>
							</form>
						</div>
					</div>
				</div>