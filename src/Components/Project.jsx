import React from 'react';

class Project extends React.Component {
	// constructor() {
	// 	super();
	// }

	render() {
		return (
			<div className="col-lg-6">
				<div className="project-item">
					<div className="project-item__img-wrap">
						<img src={this.props.img} alt="" />
					</div>
					<div className="project-item__info">
						<div className="project-item__name">{this.props.name}</div>
						<div className="project-item__desc">{this.props.desc}</div>
						<div className="project-item__more">
							<button className="btn btn-primary project-item__btn">
								More
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Project;
