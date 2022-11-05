import React from 'react';
import { Box, List } from '@mui/material';
import Item from './Item';

const ItemsList = ({ anchor, items, toggleDrawer }) => {
	return (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
			role='presentation'
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{items.map((item, index) => (
					<Item
						key={index}
						data={item}
					/>
				))}
			</List>
		</Box>
	);
};

export default ItemsList;
