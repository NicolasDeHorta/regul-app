import React from 'react';
import { useDataStore } from '../context/context';

import './addCotizacionForm.scss';

const initialState = {
	moneda: '',
	compra: 0,
	venta: 0,
};
export const AddCotizacionForm = () => {
	const { addCotiz } = useDataStore();
	const [moneda, setMoneda] = React.useState(initialState);

	const handleInputs = ({ target }) => {
		const { value, name } = target;
		setMoneda({ ...moneda, [name]: value });
	};

	return (
		<div className="addEditCotizForm">
			<input
				type="text"
				name="moneda"
				value={moneda.moneda}
				onChange={handleInputs}
			/>
			<input
				type="number"
				name="compra"
				value={moneda.compra}
				onChange={handleInputs}
			/>
			<input
				type="number"
				name="venta"
				value={moneda.venta}
				onChange={handleInputs}
			/>
			<button onClick={addCotiz}> Agregar</button>
		</div>
	);
};
