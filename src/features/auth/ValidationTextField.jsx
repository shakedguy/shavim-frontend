import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const ValidationTextField = ({
	type,
	label,
	isRequired,
	placeholder,
	defaultValue,
	onInput,
	validator,
}) => {
	const [isValid, setIsValid] = useState(false);
	const onInputHandler = (event) => {
		if (validator(event.target.value)) {
			setIsValid(true);
		} else if (isValid) {
			setIsValid(false);
		}
		onInput(event);
	};

	return (
		<TextField
			sx={{ padding: '10px', margin: 'auto', height: '4rem' }}
			id='validation-outlined-input'
			type={type}
			label={label}
			required={isRequired}
			variant='outlined'
			defaultValue={defaultValue}
			placeholder={placeholder}
			onInput={onInputHandler}
			color={isValid ? 'success' : 'error'}
			error={!isValid}
		/>
	);
};

export default ValidationTextField;
