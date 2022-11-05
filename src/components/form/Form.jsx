import React from 'react';
import IntegerField from './IntegerField';
import FloatField from './FloatField';
import TextField from './TextField';
import EmailField from './EmailField';
import ChoiceField from './ChoiceField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const Form = ({ data }) => {
	const {
		title,
		description,
		style,
		integerFields,
		floatFields,
		textFields,
		emailFields,
		videos,
		choiceFields,
	} = data;

	const { fontFamily, fontSize, fontWeight, color } = style;

	return (
		<Box
			sx={{
				...style,
				minHeight: '18rem',
			}}
		>
			<Typography
				variant='h4'
				sx={{ fontFamily, fontSize, fontWeight, color, mb: 2 }}
			>
				{title}
			</Typography>
			<Typography
				variant='body2'
				sx={{ fontFamily, color }}
			>
				{description}
			</Typography>
			{videos &&
				videos.length > 0 &&
				videos.map((video, index) => {
					if (video.file) {
						return (
							<video
								key={index}
								src={video.file}
								controls
								style={{ width: '100%' }}
							/>
						);
					}
					return (
						<Box
							key={index}
							sx={{ ...videos?.style }}
						>
							<iframe
								style={{ ...video?.style }}
								width={video?.style?.width || '520'}
								height={video?.style?.height || '300'}
								src={video.src}
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen={true}
								title='Embedded youtube'
							/>
						</Box>
					);
				})}
			<Box sx={{ width: '100%' }}>
				{textFields &&
					textFields.map((field, index) => {
						return (
							<TextField
								key={index}
								data={field}
							/>
						);
					})}

				{emailFields &&
					emailFields.map((field, index) => {
						return (
							<EmailField
								key={index}
								data={field}
							/>
						);
					})}
				{choiceFields &&
					choiceFields.map((field, index) => {
						return (
							<ChoiceField
								key={index}
								data={field}
							/>
						);
					})}
				{integerFields &&
					integerFields.map((field, index) => {
						return (
							<IntegerField
								key={index}
								data={field}
							/>
						);
					})}
				{floatFields &&
					floatFields.map((field, index) => {
						return (
							<FloatField
								key={index}
								data={field}
							/>
						);
					})}
			</Box>
		</Box>
	);
};

export default Form;
