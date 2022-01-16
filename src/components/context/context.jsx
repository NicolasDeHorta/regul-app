import * as React from 'react';
import { db } from '../../firebase';
import { doc, collection, query, onSnapshot } from 'firebase/firestore';

const DataStore = React.createContext();
export const useDataStore = () => {
	return React.useContext(DataStore);
};

export const ContextProvider = ({ children }) => {
	const [adminMode, setAdminMode] = React.useState(false);
	const [cotizDB, setCotizDB] = React.useState([]);

	const adminAccess = () => {
		setAdminMode(true);
	};

	const adminLogout = () => {
		setAdminMode(false);
	};

	const getCotizDB = () => {
		const cotiz = query(collection(db, 'cotizaciones'));
		onSnapshot(cotiz, (querySnapshot) => {
			const allCotiz = [];
			querySnapshot.docs.map((item) => allCotiz.push(item.data()));
			setCotizDB(allCotiz);
		});
	};

	const addCotiz = () => {
		console.log('Added ');
	};

	React.useEffect(async () => {
		console.log('fetching cotizaciones');
		getCotizDB();
	}, []);

	return (
		<DataStore.Provider
			value={{
				adminAccess,
				adminLogout,
				adminMode,
				cotizDB,
				getCotizDB,
				addCotiz,
			}}
		>
			{children}
		</DataStore.Provider>
	);
};
