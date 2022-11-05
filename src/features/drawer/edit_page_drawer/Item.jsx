import { useState } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setStyleProperty } from '../../../features/pages/pagesSlice';
import FileUploader from '../../../components/file_uploader/FileUploader';

const Item = ({ defaultKey, defaultValue }) => {
	const dispatch = useDispatch();

	const [value, setValue] = useState(defaultValue);

	const handleChange = (e) => {
		setValue(e.target.value);
		dispatch(setStyleProperty({ key: defaultKey, value: e.target.value }));
	};

	const handleFileUpload = (acceptedFiles) => {
		setValue(acceptedFiles);
		dispatch(
			setStyleProperty({
				key: defaultKey,
				value: acceptedFiles,
			})
		);
	};

	if (
		defaultKey === 'id' ||
		defaultKey === 'name' ||
		defaultKey === 'description'
	)
		return null;

	const type = defaultKey === 'backgroundImage' ? 'file' : 'text';

	const padding = type === 'text' ? '0px' : '0px 16px';

	const component =
		defaultKey === 'backgroundImage' ? (
			<FileUploader onInput={handleFileUpload} />
		) : (
			<input
				value={value || ''}
				type={type}
				style={{ width: '100%', textAlign: 'center', padding }}
				onInput={handleChange}
			/>
		);
	return (
		<>
			<Box
				display={'flex'}
				flexDirection={'row'}
				width={'100%'}
				height={'fit-content'}
				justifyContent={'left'}
				alignItems={'left'}
				textAlign={'center'}
				padding={'0.5rem 1.5rem'}
				margin={'0.5rem 1rem'}
			>
				{component}
				<Typography
					sx={{ marginX: 2 }}
					fontSize={12}
				>
					{defaultKey}
				</Typography>
			</Box>
			<Divider />
		</>
	);
};

export default Item;
