import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setActiveItem } from '../drawerSlice';
import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import Icon from '../../../components/icon/Icon';

const Item = ({ data }) => {
	const navigate = useNavigate();

	const { label, icon, google_icon_class, href } = data;
	const dispatch = useDispatch();

	return (
		<ListItem key={label}>
			<ListItemButton
				sx={{
					display: 'felx',
					justifyContent: 'space-evenly',
				}}
				onClick={() => navigate(href, { state: { label } })}
			>
				<ListItemIcon>
					<Icon
						name={icon}
						classes={google_icon_class}
					/>
				</ListItemIcon>
				<ListItemText
					sx={{
						textAlign: 'start',
					}}
					primary={label}
				/>
			</ListItemButton>
		</ListItem>
	);
};

export default Item;
