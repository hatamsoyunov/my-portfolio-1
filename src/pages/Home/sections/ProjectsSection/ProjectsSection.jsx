import React from 'react';
import PropTypes from 'prop-types';

import './ProjectsSection.sass';

// Data
import projects from './../../../../data/projects';
import filters from './../../../../data/filters';

// Components
import ProjectCard from './ProjectCard';
import Filter from './Filter';

export default class ProjectsSection extends React.Component {
	constructor({props, limit, step}) {
		super(props);

		this.state = {
			activeFilter: '',
			projects: projects,
			limit: limit,
			step: step
		};

		this.handleFilter = this.handleFilter.bind(this);
		this.onLoadMore = this.onLoadMore.bind(this);
	}

	handleFilter(id) {
		const result = projects.filter(filter => filter.type.indexOf(id) > -1);

		this.setState({
			projects: result,
			activeFilter: id
		});

		window.fullpage_api.reBuild();
	}

	onLoadMore() {
		this.setState({ limit: this.state.limit + this.state.step });

		window.fullpage_api.reBuild();
	}
	render() {
		return (
			<div className="projects-sect section">
				<div className="parallax_bg"></div>
				<div className="section_row align-items-center">
					<div className="container">
						<div className="row justify-content-center">
							<div className="section_title">Проекты</div>
						</div>

						<div className="row justify-content-center">
							<Filter
								filters={filters}
								activeFilter={this.state.activeFilter}
								onFilter={this.handleFilter}
							/>
						</div>

						<div className="row justify-content-center projects-list">
							<div className="projects_wrap">
								<div className="row">
									{this.state.projects
										.slice(0, this.state.limit)
										.map(project => (
											<ProjectCard
												key={project.id}
												slug={project.slug}
												img={project.img}
												title={project.title}
												desc={project.desc}
											/>
										))}
								</div>
							</div>

							<div className="row justify-content-center">
								{this.state.limit >= this.state.projects.length ? (
									''
								) : (
									<button
										className="button more_projects"
										onClick={this.onLoadMore}
									>
										Показать еще
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ProjectsSection.propTypes = {
	limit: PropTypes.number.isRequired,
	step: PropTypes.number.isRequired
}