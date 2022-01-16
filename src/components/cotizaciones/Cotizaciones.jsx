import React from "react";
import { AddCotizacionForm } from "../addCotizacionForm/AddCotizacionForm";
import { blankCotiz, useDataStore } from "../context/context";
import { db } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";

import "./cotizaciones.scss";

export const Cotizaciones = () => {
  const {
    adminMode,
    cotizDB,
    getCotizDB,
    setEditMode,
    currentCotiz,
    setCurrentCotiz,
  } = useDataStore();

  React.useEffect(() => {
    getCotizDB();
  }, []);

  const handleEditMode = (moneda) => {
    setEditMode(true);
    setCurrentCotiz(moneda);
  };

  const handleDelete = (moneda) => {
    deleteDoc(doc(db, "cotizaciones", moneda.moneda));
    setEditMode(false);
    setCurrentCotiz(blankCotiz);
  };

  return (
    <div className="cotizacionesWrapper">
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
                  {" "}
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

      {adminMode && <AddCotizacionForm />}
    </div>
  );
};
