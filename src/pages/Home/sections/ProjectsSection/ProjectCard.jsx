import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';

export default function ProjectCard(props) {
	return (
		<div className="col-12 col-md-6 col-xl-4">
			<div className="project_item">
				<div className="img_wrap">
					<img src={props.img} alt={props.title} />
				</div>
				<div className="project_info">
					<div className="info_content">
						<div className="title">{props.title}</div>
						<div className="desc">
							<TextTruncate
								line={3}
								element="div"
								truncateText="..."
								text={props.desc}
								textTruncateChild=""
							/>
						</div>
						<Link to={`/projects/${props.slug}`} className="more_button">
							<span className="plus_arrow">
								<span></span>
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

ProjectCard.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	desc: PropTypes.any.isRequired,
	slug: PropTypes.string.isRequired
};
