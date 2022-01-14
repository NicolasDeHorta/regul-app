import React from 'react';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

import './documentacion.scss';

export const Documentacion = () => {
	return (
		<div>
			<Header />
			<div className="documentacionWrapper">
				<div>i'm the docs page</div>
				<div>here are some files</div>
			</div>
			<Footer />
		</div>
	);
};
