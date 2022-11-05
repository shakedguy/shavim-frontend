import React from 'react';
import AppBarItem from './AppBarItem';

const AppBarItemsList = ({ items }) => {
	if (!items) return null;
	return (
		<ul className='navbar-nav gap-4'>
			{items.map((item, index) => (
				<AppBarItem
					key={index}
					data={item}
				/>
			))}
		</ul>
	);
};

export default AppBarItemsList;
