import * as React from "react";
import { db } from "../../firebase";
import { doc, setDoc, collection, query, onSnapshot } from "firebase/firestore";

const DataStore = React.createContext();
export const useDataStore = () => {
  return React.useContext(DataStore);
};

export const blankCotiz = {
  moneda: "",
  compra: 0,
  venta: 0,
};

export const ContextProvider = ({ children }) => {
  const [editMode, setEditMode] = React.useState(false);
  const [currentCotiz, setCurrentCotiz] = React.useState(blankCotiz);
  const [adminMode, setAdminMode] = React.useState(false);
  const [cotizDB, setCotizDB] = React.useState([]);

  const adminAccess = () => {
    setAdminMode(true);
    sessionStorage.setItem("isAdmin", true);
  };

  const adminLogout = () => {
    setAdminMode(false);
    sessionStorage.setItem("isAdmin", false);
  };

  const getCotizDB = () => {
    const cotiz = query(collection(db, "cotizaciones"));
    onSnapshot(cotiz, (querySnapshot) => {
      const allCotiz = [];
      querySnapshot.docs.map((item) => allCotiz.push(item.data()));
      setCotizDB(allCotiz);
    });
  };

  const addCotiz = async (cotiz) => {
    await setDoc(doc(db, "cotizaciones", cotiz.moneda), {
      moneda: cotiz.moneda,
      compra: parseFloat(cotiz.compra),
      venta: parseFloat(cotiz.venta),
    });
  };

  React.useEffect(async () => {
    console.log("fetching cotizaciones");
    getCotizDB();
  }, []);

  React.useEffect(() => {
    sessionStorage.getItem("isAdmin")
      ? setAdminMode(true)
      : setAdminMode(false);
  }, [sessionStorage.getItem("isAdmin")]);

  React.useEffect(async () => {
    cotizDB.filter((item) => item.moneda === currentCotiz.moneda).length > 0
      ? setEditMode(true)
      : setEditMode(false);
  }, [currentCotiz]);

  return (
    <DataStore.Provider
      value={{
        editMode,
        currentCotiz,
        setCurrentCotiz,
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
