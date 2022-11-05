import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

const Adornment = ({ label }) => {
	if (label) {
		return <InputAdornment position='end'>{label}</InputAdornment>;
	}
	return null;
};

const IntegerField = ({ data }) => {
	const { label, adornment, value } = data;

	return (
		<FormControl
			sx={{
				m: '1rem 0',
				width: '30ch',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				textAlign: 'center',
				textAlign: 'center',
				alignContent: 'center',
				alignSelf: 'center',
				padding: 0,
			}}
			variant='outlined'
		>
			<InputLabel
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					textAlign: 'center',
					textAlign: 'center',
					alignContent: 'center',
					alignSelf: 'center',
				}}
			>
				{label}
			</InputLabel>
			<OutlinedInput
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					textAlign: 'center',
					textAlign: 'center',
					alignContent: 'center',
					alignSelf: 'center',
					width: '100%',
				}}
				type='number'
				inputProps={{
					style: {
						minHeight: '3.5rem',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						textAlign: 'center',
						textAlign: 'center',
						alignContent: 'center',
						alignSelf: 'center',
					},
				}}
				endAdornment={<Adornment label={adornment} />}
				label={label}
			/>
		</FormControl>
	);
};

export default IntegerField;
