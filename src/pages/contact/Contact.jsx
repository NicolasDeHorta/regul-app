import React from 'react';
import { ContactForm } from '../../components/contactform/ContactForm';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';

import './contact.scss';

export const Contact = () => {
	return (
		<div>
			<Header />
			<div className="contactWrapper">
				<ContactForm />
			</div>
			<Footer />
		</div>
	);
};
