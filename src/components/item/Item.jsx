import React from 'react';
import Card from '../card/Card';
import Label from '../label/Label';
import Icon from '../icon/Icon';

const Item = ({ data }) => {
	if (data.type === 'card') {
		return <Card data={data} />;
	} else if (data.type === 'label') {
		return <Label data={data} />;
	} else if (data.type === 'icon') {
		return <Icon data={data} />;
	}
};

export default Item;
