'use client'

import { Button, Stack } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import { useCreatePostStepContext } from '@/context/CreatePostStepContext/useCreatePostStepContext'
import { useDialogModalPreviewContext } from '@/context/DialogModalPreviewContext/useDialogModalPreviewContext'
import { useFormikContext } from 'formik'

const ActionButtons = () => {
	const { setIsDialogModalPreviewOpen } = useDialogModalPreviewContext()
	const { setStep } = useCreatePostStepContext()
	const { handleSubmit } = useFormikContext()

	return (
		<Stack
			sx={{
				m: '10px',
				flexDirection: 'row',
				gap: '20px',
				justifyContent: 'flex-end',
			}}
		>
			<Button
				variant='text'
				sx={{
					color: '#2196f3',
				}}
				onClick={() => {
					setStep(2)
					setIsDialogModalPreviewOpen(false)
				}}
			>
				РЕДАГУВАТИ
			</Button>
			<Button
				type='submit'
				variant='contained'
				sx={{
					color: '#ffffff',
					bgcolor: '#2196f3',
				}}
				endIcon={<SaveIcon />}
				onClick={handleSubmit}
			>
				ПІДТВЕРДИТИ
			</Button>
		</Stack>
	)
}

export default ActionButtons
