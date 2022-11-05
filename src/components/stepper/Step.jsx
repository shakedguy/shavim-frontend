import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Step as MuiStep } from '@mui/material';
import StepLabel from '@mui/material/StepLabel';
import StepButton from '@mui/material/StepButton';
import Box from '@mui/material/Box';

const Step = ({
	index,
	data,
	activeStep,
	stepLength,
	isStepOptional,
	isStepSkipped,
	handleStep,
	completed,
}) => {
	const { label } = data;
	const stepProps = {};
	const labelProps = {};
	if (isStepOptional(index)) {
		labelProps.optional = <Typography variant='caption'>Optional</Typography>;
	}
	if (isStepSkipped(index)) {
		stepProps.completed = false;
	}
	return (
		<MuiStep
			key={label}
			completed={completed[index]}
			sx={{ width: '75%', margin: '0 auto' }}
		>
			<StepButton
				color='inherit'
				onClick={handleStep(index)}
			>
				{label}
			</StepButton>
		</MuiStep>
	);
};

export default Step;
