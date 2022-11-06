import React from 'react';
import { Box as MuiBox } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '../stack/Stack';
import Video from '../video/Video';
import Form from '../form/Form';

const InlineBox = ({ data }) => {
	const { title, description, style, stacks, forms, videos } = data;

	const { fontFamily, fontSize, fontWeight, color } = { ...style };

	// console.log(data);
	return (
		<>
			{title && (
				<Typography
					variant='h4'
					sx={{ fontFamily, fontSize, fontWeight, color, my: 2 }}
				>
					{title}
				</Typography>
			)}

			<MuiBox
				sx={{
					...style,
				}}
			>
				<Typography
					variant='body2'
					sx={{ fontFamily, color }}
				>
					{description}
				</Typography>
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
				{stacks &&
					stacks.map((stack, index) => (
						<Stack
							key={index}
							data={stack}
						/>
					))}

				{forms &&
					forms.map((stack, index) => (
						<Form
							key={index}
							data={stack}
						/>
					))}
			</MuiBox>
		</>
	);
};

export default InlineBox;
