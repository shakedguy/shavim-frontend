import React from 'react';
import Typography from '@mui/material/Typography';
// import { Label as LabelPrototipe } from '../../items/label';
const Label = ({ data }) => {
	const { text, font_size, style } = data;

	return (
		<>
			<Typography
				className='px-3'
				fontSize={font_size}
				component={'span'}
				variant={'body2'}
				style={{ ...style, lineHeight: '2rem', direction: 'rtl' }}
			>
				{text}
			</Typography>
			<br />
		</>
	);
};

export default Label;
