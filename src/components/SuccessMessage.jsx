import React from 'react';

export default function SuccessMessage(props) {
	return (
		<div
			className={`success_message ${
				props.isSubmitting ? 'active success' : ''
			}`}
		>
			<div className="preloader_send">
				<div className="dot"></div>
				<div className="dot"></div>
				<div className="dot"></div>
			</div>
			<div className="success_icon"></div>
			<div className="message_text">Заявка успешно отправлена!</div>
		</div>
	);
}
