import React from "react";
import { useDataStore, blankCotiz } from "../context/context";

import "./addCotizacionForm.scss";

export const AddCotizacionForm = () => {
  const { addCotiz, editMode, setEditMode, currentCotiz, setCurrentCotiz } =
    useDataStore();

  const handleInputs = ({ target }) => {
    const { value, name } = target;
    setCurrentCotiz({ ...currentCotiz, [name]: value });
  };

  const handleSubmit = (e) => {
    addCotiz(currentCotiz);
    setCurrentCotiz(blankCotiz);
    if (editMode) setEditMode(false);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") handleSubmit();
  };

  return (
    <div className="addEditCotizForm">
      <input
        type="text"
        name="moneda"
        value={currentCotiz.moneda}
        onChange={handleInputs}
        onKeyPress={handleEnter}
      />
      <input
        type="number"
        name="compra"
        value={currentCotiz.compra}
        step={0.01}
        onChange={handleInputs}
        onKeyPress={handleEnter}
      />
      <input
        type="number"
        name="venta"
        value={currentCotiz.venta}
        step={0.01}
        onChange={handleInputs}
        onKeyPress={handleEnter}
      />
      <button onClick={handleSubmit} onPressEnter={handleSubmit}>
        {" "}
        {editMode ? "Editar" : "Agregar"}
      </button>
    </div>
  );
};
