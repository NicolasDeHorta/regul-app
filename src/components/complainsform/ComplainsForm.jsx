import React, { useState } from 'react';
import axios from 'axios';

import './complainsForm.scss';

const formInitialState = {
	name: '',
	lastname: '',
	company: '',
	mail: '',
	phone: '',
	msg: '',
};

export const ComplainsForm = () => {
	const [contactInfo, setContactInfo] = useState(formInitialState);

	const handleInfoChange = ({ target }) => {
		const { name, value } = target;
		setContactInfo({ ...contactInfo, [name]: value });
	};

	const resetForm = () => {
		setContactInfo(formInitialState);
	};

	const sendMail = () => {
		axios.post('http://localhost:5000/sendComplain', contactInfo);
	};

	const { name, lastname, mail, phone, company, msg } = contactInfo;
	return (
		<div className="contactFormWrapper">
			<form onSubmit={() => false}>
				<label htmlFor="nameInput">
					Nombre:
					<br />{' '}
					<input
						type="text"
						id="nameInput"
						value={name}
						name="name"
						onChange={handleInfoChange}
					/>
				</label>
				<label htmlFor="lastNameInput">
					Apellido:
					<br />{' '}
					<input
						type="text"
						id="lastNameInput"
						value={lastname}
						name="lastname"
						onChange={handleInfoChange}
					/>
				</label>
				<label htmlFor="mailInput">
					Empresa:
					<br />{' '}
					<input
						type="text"
						id="mailInput"
						value={company}
						name="company"
						onChange={handleInfoChange}
					/>
				</label>
				<label htmlFor="companyInput">
					Correo:
					<br />{' '}
					<input
						type="email"
						id="companyInput"
						value={mail}
						name="mail"
						onChange={handleInfoChange}
					/>
				</label>
				<label htmlFor="phoneInput">
					Teléfono:
					<br />{' '}
					<input
						type="text"
						id="phoneInput"
						value={phone}
						name="phone"
						onChange={handleInfoChange}
					/>
				</label>
				<label htmlFor="messageInput">
					Consulta:
					<br />
					<textarea
						id="messageInput"
						rows={6}
						value={msg}
						name="msg"
						onChange={handleInfoChange}
					/>
				</label>
				<div className="buttons">
					<div className="submitButton" onClick={sendMail}>
						Enviar
					</div>
					<div className="resetFormButton" onClick={resetForm}>
						Borrar
					</div>
				</div>
			</form>
		</div>
	);
};
