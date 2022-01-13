import React, { useState } from 'react';

import './contactForm.scss';

export const ContactForm = () => {
	const [name, setName] = useState('');
	const [lastname, setLastname] = useState('');
	const [company, setCompany] = useState('');
	const [mail, setMail] = useState('');
	const [phone, setPhone] = useState('');
	const [msg, setMsg] = useState('');

	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleLastname = (e) => {
		setLastname(e.target.value);
	};
	const handleCompany = (e) => {
		setCompany(e.target.value);
	};
	const handleMail = (e) => {
		setMail(e.target.value);
	};
	const handlePhone = (e) => {
		setPhone(e.target.value);
	};
	const handleMsg = (e) => {
		setMsg(e.target.value);
	};

	const sendMail = () => {
		console.log('name: ' + name);
		console.log('lastname: ' + lastname);
		console.log('Company: ' + company);
		console.log('mail: ' + mail);
		console.log('phone: ' + phone);
		console.log('msg: ' + msg);
	};

	const resetForm = () => {
		setName('');
		setLastname('');
		setCompany('');
		setMail('');
		setPhone('');
		setMsg('');
	};

	return (
		<div className="contactFormWrapper">
			<form onSubmit="return false">
				<label htmlFor="nameInput">
					Nombre:
					<br />{' '}
					<input
						type="text"
						id="nameInput"
						value={name}
						onChange={handleName}
					/>
				</label>
				<label htmlFor="lastNameInput">
					Apellido:
					<br />{' '}
					<input
						type="text"
						id="lastNameInput"
						value={lastname}
						onChange={handleLastname}
					/>
				</label>
				<label htmlFor="mailInput">
					Empresa:
					<br />{' '}
					<input
						type="text"
						id="mailInput"
						value={company}
						onChange={handleCompany}
					/>
				</label>
				<label htmlFor="companyInput">
					Correo:
					<br />{' '}
					<input
						type="email"
						id="companyInput"
						value={mail}
						onChange={handleMail}
					/>
				</label>
				<label htmlFor="phoneInput">
					Teléfono:
					<br />{' '}
					<input
						type="text"
						id="phoneInput"
						value={phone}
						onChange={handlePhone}
					/>
				</label>
				<label htmlFor="messageInput">
					Consulta:
					<br />{' '}
					<textarea
						id="messageInput"
						rows={6}
						value={msg}
						onChange={handleMsg}
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
