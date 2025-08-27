'use client'

import { Button, Stack } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import { useDialogModalPreviewContext } from '@/context/DialogModalPreviewContext/useDialogModalPreviewContext'
import { useFormikContext } from 'formik'
import { handleNext } from '@/utils/createPost/handleNext'
import { useCreatePostStepContext } from '@/context/CreatePostStepContext/useCreatePostStepContext'

const ActionButtons = () => {
	const { setIsDialogModalPreviewOpen } = useDialogModalPreviewContext()
	const { validateForm, setTouched } = useFormikContext()
	const { step, setStep } = useCreatePostStepContext()

	return (
		<Stack
			sx={{
				mt: '35px',
				flexDirection: 'row',
				justifyContent: 'space-between',
			}}
		>
			<Button
				sx={{
					color: step === 1 ? '#b3b3b3' : '#2196f3',
				}}
				variant='text'
				disabled={step === 1}
				onClick={() => setStep(prev => prev - 1)}
			>
				НАЗАД
			</Button>
			<Button
				variant='contained'
				sx={{
					bgcolor: '#2196f3',
					color: '#ffffff',
				}}
				endIcon={<SaveIcon />}
				onClick={() => {
					if (step === 3) {
						setIsDialogModalPreviewOpen(true)
						return
					} else {
						handleNext(setTouched, validateForm, setStep)
					}
				}}
			>
				{step === 3 ? 'ЗБЕРЕГТИ' : 'ДАЛІ'}
			</Button>
		</Stack>
	)
}

export default ActionButtons
