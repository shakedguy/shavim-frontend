import { useNavigate } from 'react-router-dom';
import {
	SwipeableDrawer,
	Divider,
	IconButton,
	Typography,
} from '@mui/material';
import ItemsList from './ItemsList';
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useDrawer from '../../../hooks/useDrawer';
import Spinner from '../../../components/spinner/Spinner';

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'space-between',
}));

export const Drawer = ({ anchor, state, toggleDrawer }) => {
	const navigate = useNavigate();
	const { drawer, drawerIsLoading, drawerIsError } = useDrawer('default');
	const theme = useTheme();

	if (drawerIsLoading) {
		return <Spinner />;
	}

	if (drawerIsError) {
		navigate('/404');
	}

	const { items, title } = drawer;

	return (
		<div>
			<SwipeableDrawer
				anchor={anchor}
				open={state[anchor]}
				onClose={toggleDrawer(anchor, false)}
				onOpen={toggleDrawer(anchor, true)}
			>
				<DrawerHeader>
					<Typography
						variant='h6'
						marginX={'auto'}
						paddingX={'auto'}
					>
						{!!title && title}
					</Typography>
					<IconButton onClick={toggleDrawer(anchor, false)}>
						{theme.direction === 'ltr' ? (
							<ChevronRightIcon />
						) : (
							<ChevronLeftIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<ItemsList
					anchor={anchor}
					items={items}
					toggleDrawer={toggleDrawer}
				/>
			</SwipeableDrawer>
		</div>
	);
};

export default Drawer;
