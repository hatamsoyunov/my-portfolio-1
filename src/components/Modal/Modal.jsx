import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const customStyles = {
	overlay: {
		background: 'rgba(255,255,255,.98)'
	},
	content: {
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		background: 'transparent',
		border: 'none'
	}
};

function Modal(props) {
	return (
		<ReactModal
			isOpen={props.isOpen}
			closeTimeoutMS={props.closeTimeoutMS}
			style={customStyles}
			className={props.className}
		>
			{props.children}
			<button className="ReactModal__close-btn" onClick={props.onCloseModal}>
				<div className="button_box">
					<span className="line"></span>
				</div>
			</button>
		</ReactModal>
	);
}

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	closeTimeoutMS: PropTypes.number
};

Modal.defaultProps = {
	closeTimeoutMS: 400
};

export default Modal;
