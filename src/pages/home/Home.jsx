import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { Cotizaciones } from '../../components/cotizaciones/Cotizaciones';
import cambio18img from '../../assets/img/cambio18.jpg';

import './home.scss';

export const Home = () => {
	return (
		<>
			<Header />
			<div className="midWrapper">
				<div className="imgCambio">
					<img src={cambio18img} alt="" />
				</div>
				<Cotizaciones />
			</div>
			<Footer />
		</>
	);
};
