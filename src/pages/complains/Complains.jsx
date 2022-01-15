import React from 'react';
import { ComplainsForm } from '../../components/complainsform/ComplainsForm';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';

import './complains.scss';

export const Complains = () => {
	return (
		<div>
			<Header />
			<div className="contactWrapper">
				<ComplainsForm />
			</div>
			<Footer />
		</div>
	);
};
