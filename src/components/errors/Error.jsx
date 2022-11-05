import React from 'react';

const Error = ({ data }) => {
	const { message, code } = data;
	return (
		<>
			<h1>{message}</h1>
			<h2>{code}</h2>
		</>
	);
};

export default Error;
