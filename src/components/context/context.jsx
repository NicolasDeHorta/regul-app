import * as React from 'react';

const DataStore = React.createContext();
export const useDataStore = () => {
	return React.useContext(DataStore);
};

export const ContextProvider = ({ children }) => {
	const [adminMode, setAdminMode] = React.useState(false);

	const adminAccess = () => {
		setAdminMode(true);
	};

	const adminLogout = () => {
		setAdminMode(false);
	};

	return (
		<DataStore.Provider value={{ adminAccess, adminLogout, adminMode }}>
			{children}
		</DataStore.Provider>
	);
};
