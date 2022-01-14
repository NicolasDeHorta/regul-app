import * as React from 'react';

const DataStore = React.createContext();

export const useDataStore = () => {
	return React.useContext(DataStore);
};

export const ContextProvider = ({ children }) => {
	const [adminMode, setAdminMode] = React.useState(false);

	const adminAccess = () => {
		setAdminMode(!adminMode);
	};

	return (
		<DataStore.Provider value={{ adminMode, adminAccess }}>
			{children}
		</DataStore.Provider>
	);
};
