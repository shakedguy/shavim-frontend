import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import usePages from '../../hooks/usePages';
import { setTermsModalIsOpen } from '../layout/layoutSlice';
import Theme from '../../utils/theme';
import Item from '../../components/item/Item';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import AuthModal from '../auth/AuthModal';
import Dialog from '../../components/dialog/Dialog';
import Paper from '../../components/paper/Paper';
import Box from '../../components/box/Box';
import Stack from '../../components/stack/Stack';
import Form from '../../components/form/Form';
import Spinner from '../../components/spinner/Spinner';
import FileUploader from '../../components/file_uploader/FileUploader';
import Stepper from '../../components/stepper/Stepper';

const Page = () => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const { slug } = useParams();
	const { isLoading, isError } = usePages();
	const {
		name,
		title,
		papers,
		steppers,
		linkButtons,
		stacks,
		boxes,
		forms,
		style,
		modals,
	} = useSelector((state) => state.pages.currentPage);

	const { current } = useSelector((state) => state.theme);
	const { termsModalIsOpen } = useSelector((state) => state.layout);
	const dispatch = useDispatch();

	if (isLoading) {
		return <Spinner />;
	}

	if (isError) {
		navigate('/404');
	}

	const backgroundImage =
		style?.backgroundImage || style?.backgroundImageUrl || '';

	return (
		<div
			id='page'
			dir='rtl'
			style={{
				...style,
				backgroundImage: !!backgroundImage
					? 'url(' + backgroundImage + ')'
					: null,
				justifyContent: 'start',
				width: '100vw',
			}}
		>
			{title && (
				<Typography
					variant='h4'
					sx={{ margin: 0, padding: 0 }}
				>
					{title}
				</Typography>
			)}
			<>
				{steppers &&
					steppers.map((stepper, index) => (
						<Stepper
							key={index}
							data={stepper}
						/>
					))}
			</>
			<>
				{papers &&
					papers.map((paper, index) => (
						<Paper
							key={index}
							data={paper}
						/>
					))}
			</>

			<>
				{boxes &&
					boxes.map((box, index) => (
						<Box
							key={index}
							data={box}
						/>
					))}
			</>
			<>
				{stacks &&
					stacks.map((stack, index) => (
						<Stack
							key={index}
							data={stack}
						/>
					))}
			</>
			<>
				{forms &&
					forms.map((form, index) => (
						<Form
							key={index}
							data={form}
						/>
					))}
			</>
			<AuthModal />

			{modals &&
				modals.map((modal, index) => {
					if (modal.title === 'תקנון' && termsModalIsOpen) {
						return (
							<Dialog
								key={index}
								isOpen={termsModalIsOpen}
								onClose={() => dispatch(setTermsModalIsOpen(false))}
								data={modal}
							/>
						);
					} else {
						<Dialog
							key={index}
							data={modal}
							isOpen={true}
							onClose={() => {}}
						/>;
					}
				})}
		</div>
	);
};

export default Page;
