import React from 'react';
import { Box as MuiBox } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '../stack/Stack';
import Video from '../video/Video';
import InlineBox from './InlineBox';
import Form from '../form/Form';
import Label from '../label/Label';

const Box = ({ data }) => {
	if (!data) {
		return null;
	}
	const { title, description, style, labels, stacks, items, forms, videos } =
		data;

	let fontFamily, fontSize, fontWeight, color;
	if (!!style) {
		fontFamily = style.fontFamily;
		fontSize = style.fontSize;
		fontWeight = style.fontWeight;
		color = style.color;
	}

	let descriptionRows = null;

	if (description) {
		descriptionRows = description.split('|');
	}

	return (
		<MuiBox
			sx={{
				...style,
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			{title && (
				<Typography
					variant='h4'
					sx={{ fontFamily, fontSize, fontWeight, color, mb: 2 }}
				>
					{title}
				</Typography>
			)}

			{descriptionRows &&
				descriptionRows.map((row, index) => (
					<Typography
						key={index}
						variant='body2'
						sx={{ fontFamily, color }}
					>
						{row}
					</Typography>
				))}
			<MuiBox sx={{ ...style }}>
				{videos &&
					videos.length > 0 &&
					videos.map((video, index) => {
						return (
							<Video
								key={index}
								data={video}
							/>
						);
					})}
				{labels &&
					labels.map((label, index) => (
						<Label
							key={index}
							data={label}
						/>
					))}
				{stacks &&
					stacks.map((stack, index) => (
						<Stack
							key={index}
							data={stack}
						/>
					))}

				{items &&
					items.map((item, index) => (
						<InlineBox
							key={index}
							data={item}
						></InlineBox>
					))}
				{forms &&
					forms.length > 0 &&
					forms.map((form, index) => {
						return (
							<Form
								key={index}
								data={form}
							/>
						);
					})}
			</MuiBox>
		</MuiBox>
	);
};

export default Box;
