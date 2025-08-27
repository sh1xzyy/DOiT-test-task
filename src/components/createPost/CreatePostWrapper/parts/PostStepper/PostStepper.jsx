'use client'

import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { useCreatePostStepContext } from '@/context/CreatePostStepContext/useCreatePostStepContext'
import { useThemeContext } from '@/context/ThemeContext/useThemeContext'
import { getStylesByMode } from '@/utils/common/getStylesByMode'
import { steps } from './steps'

const PostStepper = () => {
	const { step } = useCreatePostStepContext()
	const { mode } = useThemeContext()

	return (
		<Stepper activeStep={step} alternativeLabel>
			{steps.map(label => (
				<Step key={label}>
					<StepLabel
						sx={{
							'& .MuiStepLabel-label': {
								color: getStylesByMode(mode, '#919191', '#ffffff'),
							},
							'& .MuiStepIcon-root': {
								color: '#b3b3b3',
								'&.Mui-active': {
									color: '#b3b3b3',
								},
								'&.Mui-completed': {
									color: '#2196f3',
								},
							},
							'& .MuiStepIcon-text': {
								fill: '#ffffff',
							},
						}}
					>
						{label}
					</StepLabel>
				</Step>
			))}
		</Stepper>
	)
}

export default PostStepper
