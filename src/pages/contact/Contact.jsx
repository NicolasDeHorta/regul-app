import React from 'react';
import { ContactForm } from '../../components/contactform/ContactForm';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';

export const Contact = () => {
	return (
		<div>
			<Header />
			<ContactForm />
			<Footer />
		</div>
	);
};
