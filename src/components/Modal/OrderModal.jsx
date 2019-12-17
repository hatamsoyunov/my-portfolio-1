import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import CustomField from '../CustomField';
import SuccessMessage from '../SuccessMessage';

const validateSchema = Yup.object().shape({
	name: Yup.string()
		.max(40, 'Имя не может быть таким длинным')
		.required('Это поле обязательно к заполнению'),
	email: Yup.string()
		.email('Введите корректный Email')
		.required('Это поле обязательно к заполнению'),
	phone: Yup.string()
		.min(10, 'Телефон не может быть менее 10 символов')
		.max(18, 'Телефон не может быть более 18 символов')
		.required('Это поле обязательно к заполнению')
});

export default class OrderModal extends React.Component {
	render() {
		return (
			<div id="order_popup" className="container">
				<div className="row justify-content-center align-items-center">
					<div className="section_title">Оставить заявку</div>
				</div>
				<div className="row justify-content-center align-items-center">
					<div className="section_desc">
						Оставьте заявку и я вам отвечу как можно скорее.
					</div>
				</div>

				<div className="row justify-content-center align-items-center">
					<Formik
						initialValues={{
							name: '',
							email: '',
							phone: '',
							message: ''
						}}
						validationSchema={validateSchema}
						onSubmit={(values, { setSubmitting }) => {
							setTimeout(() => {
								console.log(JSON.stringify(values, null, 2));
								// setSubmitting(false);
							}, 400);
						}}
					>
						{({ isSubmitting }) => (
							<Form id="order_form">
								<div className="row">
									<div className="col-12">
										<div className="input_wrap">
											<CustomField
												type="text"
												name="name"
												customplaceholder="Имя*"
											/>
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="input_wrap">
											<CustomField
												type="email"
												name="email"
												customplaceholder="Email*"
											/>
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="input_wrap">
											<CustomField
												type="tel"
												name="phone"
												customplaceholder="Телефон*"
											/>
										</div>
									</div>
									<div className="col-12">
										<div className="input_wrap">
											<CustomField
												as="textarea"
												rows="4"
												name="message"
												customplaceholder="Сообщение"
											/>
										</div>
									</div>
									<div className="col-12">
										<button
											type="submit"
											className="button arrow_right"
											disabled={isSubmitting}
										>
											Отправить
										</button>
									</div>
								</div>

								<SuccessMessage isSubmitting={isSubmitting} />
							</Form>
						)}
					</Formik>
				</div>
			</div>
		);
	}
}
