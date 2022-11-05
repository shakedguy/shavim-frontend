import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar as MuiAppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import { useLocation, useNavigate } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { toggleIsAuthModalOpen } from '../layout/layoutSlice';
import useAppBar from '../../hooks/useAppBar';

const AppBar = ({ anchor, drawerState, toggleDrawer }) => {
	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();
	const { appBarTitle } = useSelector((state) => state.pages.currentPage);
	const { appBar } = useAppBar('2');
	const title = appBarTitle
		? appBarTitle
		: location.state
		? location.state.text
		: 'שם הדף';

	const { logo } = appBar;

	return (
		<Box sx={{ flexGrow: 1 }}>
			<CssBaseline />
			<MuiAppBar position='static'>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2, borderRadius: '10%' }}
						onClick={toggleDrawer(anchor, true)}
					>
						<MenuIcon />
					</IconButton>
					{logo && (
						<img
							src={logo}
							alt='logo'
							style={{
								height: '40px',
								backgroundColor: 'transparent',
								cursor: 'pointer',
							}}
							onClick={() => navigate('/')}
						/>
					)}
					<Typography
						variant='h6'
						component='div'
						sx={{ flexGrow: 1, mx: '1.5rem' }}
					>
						{title}
					</Typography>
					<IconButton
						color='inherit'
						aria-label='login'
						sx={{ borderRadius: '10%' }}
						onClick={() => dispatch(toggleIsAuthModalOpen())}
					>
						<AccountCircleIcon />
					</IconButton>
				</Toolbar>
			</MuiAppBar>
		</Box>
	);
};
export default AppBar;
