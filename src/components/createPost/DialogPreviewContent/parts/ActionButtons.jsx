'use client'

import { Button, Stack } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import { useCreatePostStepContext } from '@/context/CreatePostStepContext/useCreatePostStepContext'
import { useDialogModalPreviewContext } from '@/context/DialogModalPreviewContext/useDialogModalPreviewContext'
import { useFormikContext } from 'formik'
import { useState } from 'react'

const ActionButtons = () => {
	const { setIsDialogModalPreviewOpen } = useDialogModalPreviewContext()
	const { setStep } = useCreatePostStepContext()
	const { handleSubmit } = useFormikContext()
	const [isSubmitted, setIsSubmitted] = useState(false)

	return (
		<Stack
			sx={{
				m: '10px',
				flexDirection: 'row',
				gap: '10px',
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
				disabled={isSubmitted}
				onClick={() => {
					handleSubmit()
					setIsSubmitted(true)
				}}
			>
				ПІДТВЕРДИТИ
			</Button>
		</Stack>
	)
}

export default ActionButtons
