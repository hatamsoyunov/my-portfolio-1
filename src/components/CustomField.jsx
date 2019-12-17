import React, { useState } from 'react';
import { useField } from 'formik';

export default function CustomField(props) {
	const [field, meta] = useField(props);
	const [isFocused, onFocus] = useState(false);

	function handleFocus() {
		onFocus(true);
	}

	function handleBlur(e) {
		field.onBlur(e);

		if (!field.value.length > 0) {
			onFocus(false);
		}
	}

	return (
		<>
			{props.as === 'textarea' ? (
				<textarea
					{...field}
					{...props}
					onFocus={handleFocus}
					onBlur={e => handleBlur(e)}
				></textarea>
			) : (
				<input
					{...field}
					{...props}
					onFocus={handleFocus}
					onBlur={e => handleBlur(e)}
				/>
			)}
			{meta.error && meta.touched && (
				<span className="error">{meta.error}</span>
			)}
			<span className={`placeholder${isFocused ? ' focused' : ''}`}>
				{props.customplaceholder}
			</span>
		</>
	);
}
