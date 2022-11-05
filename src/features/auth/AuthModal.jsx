import { useSelector, useDispatch } from 'react-redux';
import { toggleIsAuthModalOpen } from '../../features/layout/layoutSlice';

import { Box, Divider, Typography } from '@mui/material';

import useAuth from '../../hooks/useAuth';
import Modal from '../../components/modal/Modal';
import GlobalMainPortal from '../../components/portal/GlobalMainPortal';
import AuthForm from './AuthForm';
import GoogleLoginButton from './GoogleLoginButton';
import FacebookLoginButton from './FacebookLoginButton';

const modalStyle = {
	width: 'fit-content',
	height: 'fit-content',
	minWidth: '50vw',
	minHeight: '60vh',
	display: 'flex',
	flexDirection: 'column',
	gap: 2,
	padding: '2rem 4rem',
	boxSizing: 'border-box',
	justifyContent: 'space-evenly',
};

const AuthModal = () => {
	const dispatch = useDispatch();
	const { isAuthModalOpen } = useSelector((state) => state.layout);
	const { loginWithGoogle, loginWithFacebook } = useAuth();

	return (
		<GlobalMainPortal isOpen={isAuthModalOpen}>
			<Modal
				style={{ ...modalStyle }}
				isOpen={isAuthModalOpen}
				toggleIsOpen={() => dispatch(toggleIsAuthModalOpen())}
			>
				<AuthForm />

				<Divider>OR</Divider>

				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-evenly',
					}}
				>
					<GoogleLoginButton onClick={loginWithGoogle} />
					<FacebookLoginButton onClick={loginWithFacebook} />
				</Box>
			</Modal>
		</GlobalMainPortal>
	);
};

export default AuthModal;
