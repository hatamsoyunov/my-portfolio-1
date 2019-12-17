import React from 'react';
import PropTypes from 'prop-types';

import Knob from './Knob';

function knobDisplayCustom(knob) {
	return (
		<input
			style={knob.inputStyle()}
			type="text"
			value={knob.props.value + '%'}
			onChange={knob.handleTextInput}
			onKeyDown={knob.handleArrowKey}
			readOnly={knob.props.readOnly || knob.props.disableTextInput}
		/>
	);
}

export default function Skill(props) {
	const devWidth =
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth;

	const knobWidth = devWidth <= 1440 ? 100 : 125;
	const knobHeight = devWidth <= 1440 ? 100 : 125;

	return (
		<div className="skill_item">
			<div className="skill_circle_wrap">
				<Knob
					value={props.percent}
					lineCap={'round'}
					width={knobWidth}
					height={knobHeight}
					bgColor="#e57d2124"
					fgColor="#E57D21"
					thickness={0.06}
					readOnly={true}
					displayInput={false}
					displayCustom={knobDisplayCustom}
				/>
			</div>
			<div className="skill_title">{props.title}</div>
		</div>
	);
}

Skill.propTypes = {
	title: PropTypes.string.isRequired,
	percent: PropTypes.number.isRequired
};
