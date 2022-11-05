import React from 'react';
import Box from '@mui/material/Box';

const Video = ({ data }) => {
	const { file, src, style } = data;

	const url = file || src;

	return (
		<Box sx={{ ...style }}>
			<iframe
				style={{ ...style }}
				width={style?.width || '520'}
				height={style?.height || '300'}
				src={url}
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen={true}
				title='Embedded youtube'
			/>
		</Box>
	);
};

export default Video;
