import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Stack as MuiStack } from '@mui/material';
import { styled } from '@mui/material/styles';
import styles from './stack.module.css';
import Dialog from '../dialog/Dialog';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	transition: 'all 0.2s ease-in-out',
	boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.25)',
	'&:hover': {
		transform: 'scale(0.96)',
	},
}));

const StackItem = ({ data }) => {
	const { style, text, modal, href } = data;
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const navigate = useNavigate();

	const toggleDialog = () => {
		if (!!href) {
			navigate(href);
		} else {
			setIsDialogOpen((isDialogOpen) => !isDialogOpen);
		}
	};

	return (
		<>
			<Item
				onClick={toggleDialog}
				sx={{ ...style }}
			>
				{text}
			</Item>
			{modal && (
				<Dialog
					data={modal}
					isOpen={isDialogOpen}
					onClose={() => setIsDialogOpen(false)}
				/>
			)}
		</>
	);
};

export default StackItem;
