import { useState, useEffect } from 'react';
import slugify from 'react-slugify';
import { useCookies } from 'react-cookie';
import { Box as MuiBox } from '@mui/material';
import { Stepper as MuiStepper } from '@mui/material';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '../box/Box';

const maxAge = 3600;

const Stepper = ({ data }) => {
	const cookieName = `${slugify(data.name)}-active-step`;
	const [cookies, setCookie, removeCookie] = useCookies([cookieName]);
	const [activeStep, setActiveStep] = useState(0);
	const [completed, setCompleted] = useState({});

	useEffect(() => {
		if (cookies[cookieName]) {
			setActiveStep(Number(cookies[cookieName]));
		}
	}, [cookies, cookieName]);

	const totalSteps = () => {
		return steps.length;
	};

	const completedSteps = () => {
		return Object.keys(completed).length;
	};

	const isLastStep = () => {
		return activeStep === totalSteps() - 1;
	};

	const allStepsCompleted = () => {
		return completedSteps() === totalSteps();
	};

	const handleNext = () => {
		const newActiveStep =
			isLastStep() && !allStepsCompleted()
				? steps.findIndex((step, i) => !(i in completed))
				: activeStep + 1;

		setCookie(cookieName, newActiveStep, { maxAge });
		setActiveStep(newActiveStep);
	};

	const handleBack = () => {
		const newActiveStep = activeStep - 1;
		setActiveStep(newActiveStep);
		setCookie(cookieName, newActiveStep, { maxAge });
	};

	const handleStep = (step) => () => {
		setActiveStep(step);
		setCookie(cookieName, step, { maxAge });
	};

	const handleComplete = () => {
		const newCompleted = completed;
		newCompleted[activeStep] = true;
		setCompleted(newCompleted);
		handleNext();
	};

	const handleReset = () => {
		setActiveStep(0);
		setCompleted({});
		removeCookie(cookieName);
	};

	const { steps } = data;
	return (
		<MuiBox sx={{ width: '80%', marginX: 'auto', marginTop: 0, height: '70%' }}>
			<Box data={steps[activeStep].box} />
			<MuiStepper
				nonLinear
				activeStep={activeStep}
			>
				{steps.map((step, index) => (
					<Step
						key={index}
						completed={completed[index]}
					>
						<StepButton
							color='inherit'
							onClick={handleStep(index)}
						>
							<StepLabel>{step.label}</StepLabel>
						</StepButton>
					</Step>
				))}
			</MuiStepper>
			<div>
				{allStepsCompleted() ? (
					<>
						<Typography sx={{ mt: 2, mb: 1 }}>
							All steps completed - you&apos;re finished
						</Typography>
						<MuiBox sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
							<MuiBox sx={{ flex: '1 1 auto' }} />
							<Button onClick={handleReset}>Reset</Button>
						</MuiBox>
					</>
				) : (
					<>
						<MuiBox sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
							<Button
								color='inherit'
								disabled={activeStep === 0}
								onClick={handleBack}
								sx={{ mr: 1 }}
							>
								חזור
							</Button>
							<MuiBox sx={{ flex: '1 1 auto' }} />
							<Button
								onClick={handleNext}
								sx={{ mr: 1 }}
							>
								הבא
							</Button>
						</MuiBox>
					</>
				)}
			</div>
		</MuiBox>
	);
};

export default Stepper;
