import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	minHeight: '4rem',
	color: theme.palette.text.secondary,
}));

const TestPage = () => {
	return (
		<div
			id='page'
			dir='rtl'
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100vw',
				height: '100vh',
				margin: 'auto',
				padding: '0 2rem',
			}}
		>
			<Box sx={{ width: '85%', height: '75%', margin: 'auto' }}>
				<Stack
					sx={{ width: '85%', height: '75%', margin: 'auto' }}
					spacing={2}
				>
					<Item>פגישת ייעוץ טלפוני</Item>
					<Item>פגישת יחיד ייעוץ והכוונה</Item>
					<Item>פגישת גישור זוגית בת 3 מפגשים</Item>
					<Item>תאום והדרכה עם פסיכולוג ילדים</Item>
					<Item>עריכת הסכם + אישור בבית משפט +אגרות </Item>
				</Stack>
			</Box>
		</div>
	);
};

export default TestPage;
