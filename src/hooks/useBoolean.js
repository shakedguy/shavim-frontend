import React from 'react';

const useBoolean = ({ init }) => {
	const [value, setValue] = React.useState(init);

	const toggle = () => {
		setValue((value) => !value);
	};

	return { value, toggle };
};

export default useBoolean;
