import React from 'react';
import { TextField as MuiTextField } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TextField = ({ data }) => {
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
			<MuiTextField
				type='text'
				style={{ height: '2rem' }}
			/>
		</Box>
	);
};

export default TextField;
