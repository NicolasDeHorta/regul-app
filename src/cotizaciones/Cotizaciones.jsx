import { useState } from 'react';
import { useDataStore } from '../components/context/context';
import './cotizaciones.scss';

const initialCotizacionesState = [
	{
		moneda: 'Dolar',
		compra: 43.2,
		venta: 45.7,
	},
	{
		moneda: 'Peso',
		compra: 0.1,
		venta: 0.3,
	},
	{
		moneda: 'Real',
		compra: 7.5,
		venta: 9.0,
	},
	{
		moneda: 'Euro',
		compra: 49.2,
		venta: 52.7,
	},
];

export const Cotizaciones = () => {
	const { adminMode } = useDataStore();
	const [cotizaciones, setCotizaciones] = useState(initialCotizacionesState);

	const handleAddCotizacion = (moneda, compra, venta) => {
		const newCotizacion = {
			moneda: moneda,
			compra: compra,
			venta: venta,
		};

		setCotizaciones([...cotizaciones, newCotizacion]);
	};
	return (
		<div className="cotizacionesWrapper">
			<table>
				<thead>
					<th>&nbsp;</th>
					<th>Compra</th>
					<th>Venta</th>
				</thead>
				<tbody>
					{cotizaciones.map((moneda) => {
						return (
							<tr>
								<td>{moneda.moneda}</td>
								<td>{moneda.compra.toFixed(2)}</td>
								<td>{moneda.venta.toFixed(2)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>

			{adminMode && (
				<button onClick={() => handleAddCotizacion('Yen', 55, 32)}>
					Agregar
				</button>
			)}
		</div>
	);
};
