import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Stack as MuiStack } from '@mui/material';
import { styled } from '@mui/material/styles';
import styles from './stack.module.css';
import StackItem from './StackItem';

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

const Stack = ({ data }) => {
	const { stackItems, style } = data;
	const navigate = useNavigate();

	const { flexDirection } = style;
	return (
		<Box sx={{ width: '100%' }}>
			<MuiStack
				direction={flexDirection}
				spacing={2}
				sx={{ ...style }}
			>
				{stackItems.map((item, index) => (
					<StackItem
						key={index}
						data={item}
					/>
				))}
			</MuiStack>
		</Box>
	);
};
export default Stack;
