import { useState, useRef, forwardRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTermsModalIsOpen } from '../../features/layout/layoutSlice';
import Button from '@mui/material/Button';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Dialog as MuiDialog, Typography } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Paragraph from '../paragraph/Paragraph';
import Slide from '@mui/material/Slide';
import useModal from '../../hooks/useModal';
import Spinner from '../spinner/Spinner';

const Transition = forwardRef(function Transition(props, ref) {
	return (
		<Slide
			direction='up'
			ref={ref}
			{...props}
		/>
	);
});

const Dialog = ({ data, isOpen, onClose }) => {
	const { title, description, paragraphs, style } = data;
	// const [paragraphs, setParagraphs] = useState([]);
	// const [title, setTitle] = useState('');
	// const [searchParams] = useSearchParams();

	// const dialog = searchParams.get('dialog');

	// const { modal, isLoading, isError } = useModal(dialog);
	const descriptionElementRef = useRef(null);
	const [scroll, setScroll] = useState('paper');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// useEffect(() => {
	// 	if (modal) {
	// 		setParagraphs(modal.paragraphs);
	// 		setTitle(modal.title);
	// 	}
	// }, [modal]);

	// if (isLoading) {
	// 	return <Spinner />;
	// }

	// if (isError) {
	// 	navigate('/404');
	// }

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{paragraphs && (
				<MuiDialog
					open={isOpen}
					onClose={onClose}
					scroll={'paper'}
					TransitionComponent={Transition}
					aria-labelledby='scroll-dialog-title'
					aria-describedby='scroll-dialog-description'
				>
					{title && (
						<DialogTitle
							style={{ cursor: 'move' }}
							id='scroll-dialog-title'
						>
							{title || 'Title'}
						</DialogTitle>
					)}
					<DialogContent
						style={{ minWidth: '30vw', minHeight: '70vw' }}
						dividers={scroll === 'paper'}
					>
						<DialogContentText
							id='scroll-dialog-description'
							ref={descriptionElementRef}
							tabIndex={-1}
						>
							{paragraphs && (
								<Typography variant='body1'>{description}</Typography>
							)}
							{paragraphs.map((paragraph, index) => (
								<Paragraph
									key={index}
									data={paragraph}
								/>
							))}
						</DialogContentText>
					</DialogContent>
				</MuiDialog>
			)}
		</div>
	);
};

export default Dialog;
