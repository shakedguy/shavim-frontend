import React, { createContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import firebaseConfig from '../utils/firebaseConfig';

const firebaseContext = createContext({
	config: firebaseConfig,
	app: null,
	auth: null,
	analitics: null,
	storage: null,
});

const FirebaseProvider = ({ children }) => {
	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);
	const analytics = getAnalytics(app);
	const storage = getStorage(app);

	return (
		<firebaseContext.Provider value={{ app, auth, analytics, storage }}>
			{children}
		</firebaseContext.Provider>
	);
};

export { firebaseContext, FirebaseProvider };

export default firebaseContext;
