import { useSelector, useDispatch } from 'react-redux';
import {
	setIsEditPageDrawerOpen,
	toggleIsEditPageDrawerOpen,
} from '../../../features/layout/layoutSlice';
import { useNavigate } from 'react-router-dom';
import {
	SwipeableDrawer,
	Divider,
	IconButton,
	Typography,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ItemsList from './ItemsList';

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'space-between',
}));

export const Drawer = ({ anchor }) => {
	const dispatch = useDispatch();
	const { isEditPageDrawerOpen } = useSelector((state) => state.layout);
	const page = useSelector((state) => state.pages.currentPage);

	const theme = useTheme();

	const toggleDrawerHandler = () => {
		dispatch(toggleIsEditPageDrawerOpen());
	};

	if (!isEditPageDrawerOpen) return null;

	// const { items, title } = drawer;

	const title = 'Edit Page';

	anchor = 'left';

	return (
		<div>
			<SwipeableDrawer
				anchor={anchor}
				open={isEditPageDrawerOpen}
				onClose={toggleDrawerHandler}
				onOpen={toggleDrawerHandler}
			>
				<DrawerHeader>
					<IconButton onClick={toggleDrawerHandler}>
						{theme.direction === 'ltr' ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
					<Typography
						variant='h6'
						marginX={'auto'}
						paddingX={'auto'}
					>
						{!!title && title}
					</Typography>
				</DrawerHeader>
				<Divider />
				<ItemsList data={page} />
			</SwipeableDrawer>
		</div>
	);
};

export default Drawer;
