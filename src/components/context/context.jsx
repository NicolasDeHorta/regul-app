import * as React from 'react';

const loginInfo = {
	user: 'admin',
	pass: 'admin',
};

const DataStore = React.createContext();

export const useDataStore = () => {
	return React.useContext(DataStore);
};

export const ContextProvider = ({ children }) => {
	const [adminMode, setAdminMode] = React.useState(false);

	const adminAccess = (user, password) => {
		if (user === loginInfo.user && password === loginInfo.pass) {
			setAdminMode(true);
		}
	};

	const adminLogout = (user, password) => {
		setAdminMode(false);
	};

	return (
		<DataStore.Provider value={{ adminMode, adminAccess, adminLogout }}>
			{children}
		</DataStore.Provider>
	);
};
