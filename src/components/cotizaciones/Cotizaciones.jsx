import React from "react";
import { AddCotizacionForm } from "../addCotizacionForm/AddCotizacionForm";
import { blankCotiz, useDataStore } from "../context/context";
import { db } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import RiseLoader from "react-spinners/ClipLoader";

import "./cotizaciones.scss";

export const Cotizaciones = () => {
  const { adminMode, cotizDB, getCotizDB, setCurrentCotiz } = useDataStore();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(async () => {
    await getCotizDB();
  });

  React.useEffect(() => {
    if (cotizDB.length > 0) setLoading(false);
  }, [cotizDB.length]);

  const handleEditMode = (moneda) => {
    setCurrentCotiz(moneda);
  };

  const handleDelete = (moneda) => {
    deleteDoc(doc(db, "cotizaciones", moneda.moneda));
    setCurrentCotiz(blankCotiz);
  };

  const showTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Compra</th>
            <th>Venta</th>
          </tr>
        </thead>
        <tbody>
          {cotizDB.map((moneda) => {
            return (
              <tr key={moneda.moneda}>
                <td>
                  {adminMode && (
                    <>
                      <span
                        className="editText"
                        onClick={() => handleEditMode(moneda)}
                      >
                        edit
                      </span>
                      <span
                        className="deleteText"
                        onClick={() => handleDelete(moneda)}
                      >
                        delete
                      </span>
                    </>
                  )}
                  {moneda.moneda}
                </td>
                <td>{moneda.compra.toFixed(2)}</td>
                <td>{moneda.venta.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <div className="cotizacionesWrapper">
      {loading ? (
        <div className="loadingBlock">
          <span>Cargando Cotizaciones </span>
          <RiseLoader loading={loading} />
        </div>
      ) : (
        showTable()
      )}

      {adminMode && <AddCotizacionForm />}
    </div>
  );
};
