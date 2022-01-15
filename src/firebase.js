import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDTVC5NXjWSNkTDF-2szyHhKL0d3mKpwVk',
	authDomain: 'cambioregul.firebaseapp.com',
	projectId: 'cambioregul',
	storageBucket: 'cambioregul.appspot.com',
	messagingSenderId: '552746265914',
	appId: '1:552746265914:web:f916fda92aad18d0187403',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
