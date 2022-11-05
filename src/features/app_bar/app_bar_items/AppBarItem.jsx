import React from 'react';
import Item from '../Item';

const AppBarItem = ({ data }) => {
	return (
		<li className='nav-item'>
			<Item data={data} />
		</li>
	);
};

export default AppBarItem;
