import React from 'react';
import Label from '../label/Label';
import Box from '@mui/material/Box';

const Paragraph = ({ data }) => {
	const { labels, style } = data;

	console.log(style);
	return (
		<Box sx={{ ...style }}>
			{labels.map((label, index) => {
				return (
					<Label
						key={index}
						data={label}
					/>
				);
			})}
		</Box>
	);
};

export default Paragraph;
