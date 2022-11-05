import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
const FloatField = ({ data }) => {
	const { label, value } = data;
	return (
		<Box
			display={'flex'}
			gap={5}
			sx={{
				marginY: 2,
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'right',
				width: '100%',
				paddingX: 2,
			}}
		>
			<Typography>{label}</Typography>
			<input
				type='number'
				step='0.1'
				style={{ height: '2rem' }}
			/>
		</Box>
	);
};

export default FloatField;
