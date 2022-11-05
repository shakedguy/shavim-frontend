import { useContext } from 'react';
import {
	signInWithPopup,
	GoogleAuthProvider,
	FacebookAuthProvider,
} from 'firebase/auth';
import firebaseContext from '../context/firebaseContext';
import { useCookies } from 'react-cookie';
import httpClient from '../utils/httpClient';

const googleProvider = new GoogleAuthProvider();
googleProvider.getScopes(['profile', 'email']);
googleProvider.setCustomParameters({ prompt: 'select_account' });
const facebookProvider = new FacebookAuthProvider();
facebookProvider.getScopes(['profile', 'email']);
facebookProvider.setCustomParameters({ prompt: 'select_account' });

const fetchTokensFromApi = async (accessToken, provider) => {
	const response = await httpClient.post('/auth/convert-token/', {
		token: accessToken,
		backend: provider,
		grant_type: 'convert_token',
		client_id: 'eYa1h6kZpfYBiP8QaBApiHyUSKUuuOQP8tNv1qee',
		client_secret:
			'aBpK8J54OpH8xJu7opD0bAo0wPiHLPhwlCFAJ65XTTN2JPTe5DpxJjuHXtBk3ckcrZTuvrXKsgyCR2NVDJtiug0inspwB9MEIUhE7DzxBdcXtV2yDjvutSmpBhl16Sl5',
	});
	return response.data;
};

const useAuth = () => {
	const { auth } = useContext(firebaseContext);
	const [setCookie] = useCookies(['access_token', 'refresh_token']);

	const loginWithGoogle = async () => {
		const result = await signInWithPopup(auth, googleProvider);
		const accessToken =
			GoogleAuthProvider.credentialFromResult(result).accessToken;

		const response = await fetchTokensFromApi(accessToken, 'google-oauth2');
		setCookie('access_token', response.access_token, { maxAge: 300000 });
		setCookie('refresh_token', response.refresh_token, { maxAge: 900000 });
	};
	const loginWithFacebook = async () => {
		const result = await signInWithPopup(auth, facebookProvider);
		const accessToken =
			FacebookAuthProvider.credentialFromResult(result).accessToken;

		const response = await fetchTokensFromApi(accessToken, 'facebook');
		setCookie('access_token', response.access_token, { maxAge: 300000 });
		setCookie('refresh_token', response.refresh_token, { maxAge: 900000 });
	};
	const loginWithEmailAndPassword = () => {};
	const logout = () => {};

	return {
		auth,
		googleProvider,
		facebookProvider,
		loginWithGoogle,
		loginWithFacebook,
		loginWithEmailAndPassword,
		logout,
	};
};

export default useAuth;
