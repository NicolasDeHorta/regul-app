import React, { useState } from 'react';
import { useDataStore } from '../context/context';

import './accessForm.scss';

export const AccessForm = () => {
	const [user, setUser] = useState('');
	const [pass, setPass] = useState('');

	const handleUserInput = (event) => {
		setUser(event.target.value);
	};

	const handlePassInput = (event) => {
		setPass(event.target.value);
	};

	const handleSubmit = () => {
		setUser('');
		setPass('');
		adminAccess(user, pass);
	};

	const { adminMode, adminAccess, adminLogout } = useDataStore();
	return (
		<div className="accessInputs">
			{!adminMode ? (
				<>
					<input
						type="text"
						placeholder="username"
						value={user}
						onChange={handleUserInput}
					/>
					<input
						type="text"
						placeholder="password"
						value={pass}
						onChange={handlePassInput}
					/>
					<div className="loginBtn" onClick={handleSubmit}>
						Access
					</div>
				</>
			) : (
				<div className="logoutBtn" onClick={adminLogout}>
					Logout
				</div>
			)}
		</div>
	);
};
