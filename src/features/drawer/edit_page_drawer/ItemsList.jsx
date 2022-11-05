import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSelector, useDispatch } from 'react-redux';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import FormatColorResetIcon from '@mui/icons-material/FormatColorReset';
import { setStyle } from '../../pages/pagesSlice';
import httpClient from '../../../utils/httpClient';
import Item from './Item';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const saveStyle = (style) => {
	const uploadData = new FormData();
	for (const key in style) {
		if (key === 'backgroundImage') {
			uploadData.append(key, style[key], style[key].name);
		} else {
			uploadData.append(key, style[key]);
		}
	}
	return httpClient.patch(`api/styles/${style.id}/`, uploadData, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
};

const savePage = (page) => {
	const uploadData = new FormData();
	const { style } = page;

	return httpClient.patch(`api/styles/${page.id}/`, style);
};

const ItemsList = () => {
	const dispatch = useDispatch();
	const page = useSelector((state) => state.pages.currentPage);

	const { style, appBarTitle } = page;

	const [open, setOpen] = React.useState(true);

	const { isLoading, error, refetch } = useQuery(
		['fetch_style', style],
		() => saveStyle(style),
		{
			enabled: false,
			onSuccess: (response) => {
				dispatch(setStyle(response.data));
			},
		}
	);
	const { refetch: refatchPage } = useQuery(
		['update_page', page],
		() => savePage(page),
		{
			enabled: false,
			onSuccess: (response) => {
				// dispatch(setStyle(response.data));
			},
		}
	);

	const handleClick = () => {
		setOpen(!open);
	};

	const updatePageHandler = () => {
		refetch();
		// refatchPage();
	};

	const items = [
		'alignItems',
		'backgroundColor',
		'backgroundImage',
		'backgroundImageUrl',
		'backgroundPosition',
		'backgroundRepeat',
		'backgroundSize',
		'display',
		'width',
		'height',
	];

	return (
		<List
			sx={{
				minWidth: '50vw',
				width: '100%',
				maxWidth: 360,
				bgcolor: 'background.paper',
			}}
			component='nav'
			aria-labelledby='nested-list-subheader'
		>
			<Item
				defaultKey={'App Bar Title'}
				defaultValue={appBarTitle}
			/>
			<ListItemButton onClick={handleClick}>
				<ListItemText primary='Style' />
				<ListItemIcon>
					<FormatColorResetIcon />
				</ListItemIcon>

				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse
				in={open}
				timeout='auto'
				unmountOnExit
			>
				<List
					component='div'
					disablePadding
				>
					{items.map((item, index) => {
						return (
							<Item
								key={index}
								defaultKey={item}
								defaultValue={style[item]}
							/>
						);
					})}
				</List>
			</Collapse>
			<ListItemButton onClick={updatePageHandler}>
				<ListItemText primary='Save' />
				<ListItemIcon>
					<SaveAltIcon />
				</ListItemIcon>
			</ListItemButton>
		</List>
	);
};

export default ItemsList;
