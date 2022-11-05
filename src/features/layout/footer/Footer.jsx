import { useContext, useState } from 'react';
import { Container, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
	toggleEditMode,
	setIsEditCanceled,
	toggleIsEditDrawerOpen,
	toggleIsEditPageDrawerOpen,
} from '../layoutSlice';
import Spinner from '../../../components/spinner/Spinner';

const Footer = () => {
	const dispatch = useDispatch();
	const isEditMode = useSelector((state) => state.layout.isEditMode);
	const isEditCanceled = useSelector((state) => state.layout.isEditCanceled);
	const isEditDrawerOpen = useSelector(
		(state) => state.layout.isEditDrawerOpen
	);
	const [isLoading, setIsLoading] = useState(false);

	const toggleEditModeHandler = () => {
		setIsLoading(true);
		if (isEditMode && !isEditCanceled) {
			// saveItems();
			// saveContent();
		}
		dispatch(toggleEditMode());
		dispatch(toggleIsEditPageDrawerOpen());

		setIsLoading(false);
	};

	const cancelEventHandler = () => {
		setIsLoading(true);
		// removeNewItems();
		dispatch(toggleEditMode());
		dispatch(setIsEditCanceled(true));
		setIsLoading(false);
	};
	const buttonText = isEditMode ? 'Save' : 'Edit';

	if (isLoading) return <Spinner />;

	return (
		<Container
			sx={{
				position: 'fixed',
				bottom: 5,
				right: 5,
				width: '100vw',
				height: '10vh',
				display: 'flex',
				justifyContent: 'flex-start',
				padding: '1rem',
				gap: '1rem',
			}}
		>
			{isEditMode && !isEditDrawerOpen && (
				<Button
					style={{ zIndex: 100 }}
					variant='contained'
					onClick={() => dispatch(toggleIsEditDrawerOpen())}
				>
					Open Tool Bar
				</Button>
			)}
			{isEditMode && (
				<Button
					style={{ zIndex: 100 }}
					variant='contained'
					onClick={cancelEventHandler}
				>
					Cancel
				</Button>
			)}
			{!isEditDrawerOpen && (
				<Button
					style={{ zIndex: 100 }}
					variant='contained'
					color='primary'
					onClick={toggleEditModeHandler}
				>
					{buttonText}
				</Button>
			)}
			{/* <EditBar /> */}
		</Container>
	);
};

export default Footer;
