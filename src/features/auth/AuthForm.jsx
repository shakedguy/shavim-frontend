import { useState } from 'react';
import { Box, Container, Button, Typography, Link } from '@mui/material';
import ValidationTextField from './ValidationTextField';
import {
	validateEmail,
	validatePasswordWitheExplanation,
} from '../../utils/validators';
import useAuth from '../../hooks/useAuth';

const buttonStyle = {
	margin: 3,
	minWidth: 240,
};

const AuthForm = () => {
	const [invalidPasswordResult, setInvalidPasswordResult] = useState(null);
	const [, setIsRegister] = useState(false);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	const { loginWithEmailAndPassword } = useAuth();

	const switchToRegisterModal = () => {
		setIsRegister(true);
	};

	const passwordChangeHandler = (event) => {
		setPassword(event.target.value);
	};

	const emailChangeHandler = (event) => {
		setEmail(event.target.value);
	};

	const loginClickEventHandler = () => {
		loginWithEmailAndPassword(email, password);
	};

	const validatePasswordHandler = (value) => {
		const result = validatePasswordWitheExplanation(value);
		!result.isValid && setInvalidPasswordResult(result);
		return result.isValid;
	};

	const displayInvalidMessage = [];

	if (invalidPasswordResult) {
		displayInvalidMessage.push(
			<Typography
				align={'center'}
				variant={'caption'}
				sx={{ color: 'error.main' }}
			>
				{invalidPasswordResult.message}
			</Typography>
		);
		Array.from(invalidPasswordResult.requirements).forEach((requirement) => {
			displayInvalidMessage.push(
				<Typography
					align={'center'}
					variant={'caption'}
					sx={{ color: 'error.main' }}
				>
					{requirement}
				</Typography>
			);
		});
	}

	return (
		<Container>
			<Box
				display={'flex'}
				sx={{ justifyContent: 'space-evenly', height: '100%' }}
			>
				<ValidationTextField
					onInput={emailChangeHandler}
					type={'email'}
					label='Email'
					isRequired={true}
					placeholder={'example@gmail.com'}
					validator={validateEmail}
				/>
				<ValidationTextField
					onInput={passwordChangeHandler}
					type={'password'}
					label='Password'
					isRequired={true}
					placeholder={'Password'}
					validator={validatePasswordHandler}
				/>
			</Box>
			<Box sx={{ textAlign: 'center' }}>
				<Link
					onClick={switchToRegisterModal}
					sx={{
						textDecoration: 'none',
						cursor: 'pointer',
						textAlign: 'center',
					}}
				>
					<Typography
						align={'center'}
						variant={'caption'}
						sx={{ color: 'primary.contrastText' }}
					>
						הרשם
					</Typography>
				</Link>
			</Box>
			<Box
				display={'flex'}
				sx={{ justifyContent: 'space-evenly' }}
			>
				<Button
					onClick={loginClickEventHandler}
					variant='contained'
					sx={{ ...buttonStyle }}
				>
					הכנס
				</Button>
				{/* {displayInvalidMessage} */}
			</Box>
		</Container>
	);
};
export default AuthForm;
