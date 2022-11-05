import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Paragraph from '../paragraph/Paragraph';
import Link from '@mui/material/Link';
import { setTermsModalIsOpen } from '../../features/layout/layoutSlice';
import { useSelector, useDispatch } from 'react-redux';
const MyPaper = ({ data }) => {
	const { title, paragraphs, linkButtons, style, elevation } = data;
	const dispatch = useDispatch();

	const TermsModalHandler = () => {
		dispatch(setTermsModalIsOpen(true));
	};

	return (
		<Paper
			elevation={elevation}
			sx={{
				...style,
			}}
		>
			<Box>
				{title && <h2>{title}</h2>}
				{paragraphs.map((paragraph, index) => (
					<Paragraph
						key={index}
						data={paragraph}
					/>
				))}
			</Box>
			<Box>
				{linkButtons.map((linkButton, index) => (
					<Link
						onClick={linkButton.text === 'תקנון' ? TermsModalHandler : null}
						type='button'
						key={index}
						href={linkButton.href}
						fontSize={linkButton.fontSize}
					>
						{linkButton.text}
					</Link>
				))}
			</Box>
		</Paper>
	);
};

export default MyPaper;
