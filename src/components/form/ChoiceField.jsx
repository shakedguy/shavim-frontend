import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

const ChoiceField = ({ data }) => {
	const [value, setValue] = React.useState('');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const { label, choices } = data;
	return (
		<Box
			sx={{
				minWidth: '30ch',
				maxWidth: '30ch',
				display: 'flex',
				flexDirection: 'row',
				gap: 4,
				marginY: 2,
			}}
		>
			<FormControl
				sx={{
					textAlign: 'center',
					justifyContent: 'center',
					alignContent: 'center',
				}}
				fullWidth={true}
			>
				<InputLabel id='demo-simple-select-label'>{label}</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={value}
					label={label}
					sx={{
						alignItems: 'center',
						textAlign: 'center',
						justifyContent: 'center',
					}}
					onChange={handleChange}
				>
					{choices &&
						choices.map((choice, index) => (
							<MenuItem
								key={index}
								value={choice.value}
							>
								{choice.value}
							</MenuItem>
						))}
				</Select>
			</FormControl>
		</Box>
	);
};

export default ChoiceField;
