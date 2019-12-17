import React from 'react';

import './SkillsSection.sass';

import Skill from './Skill';
import skills from '../../../../data/skills.js';

export default function SkillsSection() {
	return (
		<div className="skills-sect section">
			<div className="parallax_bg"></div>
			<div className="section_row align-items-center justify-content-center">
				<div className="container">
					<div className="row justify-content-center">
						<div className="section_title">Навыки</div>
					</div>

					<div className="row justify-content-center">
						<div className="skills_wrap">
							{skills.map((skill, index) => (
								<Skill
									key={index}
									title={skill.title}
									percent={skill.percent}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
