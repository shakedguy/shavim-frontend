import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	minWidth: '400px',
	minHeight: '400px',
	transform: 'translate(-50%, -50%)',
	border: '0',
	margin: 'auto',
	display: 'flex',
	p: 0,
};
const Spinner = () => {
	return (
		<Box sx={{ ...style }}>
			<CircularProgress
				size={70}
				sx={{ margin: 'auto' }}
			/>
		</Box>
	);
};

export default Spinner;
