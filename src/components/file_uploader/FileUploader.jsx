import { useState } from 'react';
import Dropzone from 'react-dropzone';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import styles from './file_uploader.module.css';

const baseStyle = {
	display: 'inline-block',
	width: '100%',
	height: '100%',
	textAlign: 'center',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '2px',
};
const defaultStyle = {
	...baseStyle,
	backgroundColor: 'white',
};

const hoverStyle = {
	...baseStyle,
	backgroundColor: 'rgba(0, 0, 0, 0.04)',
};

const dragOverStyle = {
	...baseStyle,
	backgroundColor: 'rgba(116, 198, 157, 0.5)',
};

const FileUploader = ({ onInput }) => {
	const [style, setStyle] = useState(defaultStyle);
	const [uploaded, setUploaded] = useState([]);

	const onDropHandler = (acceptedFiles) => {
		setUploaded(acceptedFiles);
		const image = acceptedFiles[0];
		onInput(image);
	};

	const files = uploaded.map((file) => (
		<ListItem
			sx={{ fontSize: 10 }}
			key={file.name}
		>
			{`${file.name} - ${file.size} bytes`}
		</ListItem>
	));

	return (
		<Dropzone onDrop={onDropHandler}>
			{({ getRootProps, getInputProps }) => (
				<Paper
					className='file-uploader-container'
					elevation={3}
					sx={{
						...style,
					}}
					onMouseEnter={() => setStyle(hoverStyle)}
					onMouseLeave={() => setStyle(defaultStyle)}
					onDragOver={() => setStyle(dragOverStyle)}
					onDragLeave={() => setStyle(defaultStyle)}
				>
					<div
						{...getRootProps()}
						className={styles.fileUploader}
					>
						<input {...getInputProps()} />
						<Typography fontSize={12}>Drag 'n' drop image</Typography>
						{uploaded && (
							<List sx={{ fontSize: 10 }}>
								{uploaded.map((file, index) => (
									<ListItem
										sx={{ fontSize: 10, justifyContent: 'center' }}
										key={index}
									>{`${file.name} - ${file.size} bytes`}</ListItem>
								))}
							</List>
						)}
					</div>
				</Paper>
			)}
		</Dropzone>
	);
};

export default FileUploader;
