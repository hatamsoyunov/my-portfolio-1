import React from 'react';

export default function Filter(props) {
	return (
		<div className="projects_filter">
			<ul>
				{props.filters.map(filter => (
					<li
						className={props.activeFilter === filter.id ? 'active' : ''}
						key={filter.id}
						filter={filter.id}
						onClick={() => props.onFilter(filter.id)}
					>
						{filter.title}
					</li>
				))}
			</ul>
		</div>
	);
}
