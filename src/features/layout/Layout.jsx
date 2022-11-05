import { useState } from 'react';
import { Drawer as MainDrawer } from '../drawer/main_drawer/Drawer';
import AppBar from '../app_bar/AppBar';
import Footer from './footer/Footer';
import Header from './header/Header';
import { Drawer as EditDrawer } from '../drawer/edit_page_drawer/Drawer';

const Layout = ({ children }) => {
	const [state, setState] = useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});
	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};
	return (
		<>
			<AppBar
				anchor={'left'}
				drawerState={state}
				toggleDrawer={toggleDrawer}
			/>
			<MainDrawer
				anchor={'left'}
				state={state}
				toggleDrawer={toggleDrawer}
			/>
			<Header />
			{children}
			<Footer />
			<EditDrawer anchor={'left'} />
		</>
	);
};

export default Layout;
