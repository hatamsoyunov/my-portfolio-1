import React from 'react';

import './Project.sass';

import projects from '../../data/projects';

export default class Project extends React.Component {
	constructor({ props, match }) {
		super(props);

		this.state = {
			testimonialIsMore: false
		};

		this.project = projects.find(project => project.slug === match.params.slug);
		this.onHandleMore = this.onHandleMore.bind(this);
	}

	onHandleMore() {
		this.setState({ testimonialIsMore: !this.state.testimonialIsMore });
	}

	render() {
		return (
			<section className="page-section project-single">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-5 col-lg-4">
							<div className="project_info">
								<div className="info_content">
									<div className="title">{this.project.title}</div>
									<div className="desc">{this.project.desc}</div>

									<div className="tools">
										<div className="row">
											<div className="col-12">
												<div className="tool_name">Заказчик</div>
												<div className="client_name">
													{this.project.clientName}
												</div>
											</div>
											{this.project.testimonial !== undefined ? (
												<div class="col-12">
													<div class="tool_name">
														Отзыв
														<span
															class={`more_test_button ${
																this.state.testimonialIsMore ? 'active' : ''
															}`}
															onClick={this.onHandleMore}
														>
															<div class="plus_arrow">
																<span></span>
															</div>
														</span>
													</div>
													<div
														class={`testimonial short ${
															this.state.testimonialIsMore ? 'more' : ''
														}`}
													>
														{this.project.testimonial}
													</div>
												</div>
											) : (
												''
											)}
											<div className="col-12">
												<div className="tool_name">Инструменты</div>
												<div className="tools_list">
													{this.project.toolsList.map(tool => `${tool}, `)}
												</div>
											</div>
											<div className="col-12">
												<div className="tool_name">Теги</div>
												<div className="tags">
													<ul>
														{this.project.tags.map((tag, index) => (
															<li key={index}>{tag}</li>
														))}
													</ul>
												</div>
											</div>
										</div>
									</div>

									<div className="more_button_wrap">
										<a
											href={this.project.link}
											target="_blank"
											rel="noopener noreferrer"
											className="button arrow_right more_button"
										>
											Посмотреть сайт
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="col-12 col-md-7 col-lg-8 order-md-first align-self-start">
							<div className="img_wrap zoom_gallery">
								<img src={this.project.mainImg} alt="" />

								{/* <a href={this.project.mainImg} data-fancybox>
								</a>

								{/* <div className="mouse_icon">
									<div className="wheel"></div>
								</div> */}
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="img_wrap">
								<img src={this.project.fullImg} alt="" />
							</div>

							{/* <a href={this.project.fullImg} data-fancybox>
							</a> */}
						</div>
					</div>
				</div>
			</section>
		);
	}
}
