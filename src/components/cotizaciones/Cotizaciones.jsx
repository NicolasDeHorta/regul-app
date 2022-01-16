import React from 'react';
import { AddCotizacionForm } from '../addCotizacionForm/AddCotizacionForm';
import { useDataStore } from '../context/context';

import './cotizaciones.scss';

export const Cotizaciones = () => {
	const { adminMode, cotizDB, getCotizDB } = useDataStore();

	React.useEffect(() => {
		getCotizDB();
	}, []);

	const handleAddCotizacion = (moneda, compra, venta) => {
		const newCotizacion = {
			moneda: moneda,
			compra: compra,
			venta: venta,
		};
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
								<td>{moneda.moneda}</td>
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
