import { Modal as MuiModal } from '@mui/material';
import Box from '@mui/material/Box';

const baseStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	minWidth: 400,
	bgcolor: 'background.paper',
	border: 0,
	boxShadow: 24,
	borderRadius: 1,
	p: 4,
};

const Modal = ({ children, style, isOpen, toggleIsOpen }) => {
	return (
		<MuiModal
			open={isOpen}
			onClose={toggleIsOpen}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
			sx={{ borderRadius: 1 }}
		>
			<Box sx={{ ...baseStyle, ...style }}>{children}</Box>
		</MuiModal>
	);
};
export default Modal;
