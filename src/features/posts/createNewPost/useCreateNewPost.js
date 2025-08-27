'use client'

import { createNewPostThunk } from '@/redux/post/operations'
import { useDispatch } from 'react-redux'
import { validationSchema } from './validationSchema'
import { initialValues } from './initialValues'
import { useRouter } from 'next/navigation'
import { useCreatePostStepContext } from '@/context/CreatePostStepContext/useCreatePostStepContext'
import { useDialogModalPreviewContext } from '@/context/DialogModalPreviewContext/useDialogModalPreviewContext'

const useCreateNewPost = () => {
	const { setIsDialogModalPreviewOpen } = useDialogModalPreviewContext()
	const { setStep } = useCreatePostStepContext()
	const dispatch = useDispatch()
	const router = useRouter()

	const handleSubmit = async (values, actions, setSnackbar) => {
		try {
			await dispatch(createNewPostThunk(values)).unwrap()
			actions.resetForm()
			setSnackbar({
				open: true,
				message: 'Пост успішно створено!',
			})
			router.push('/posts')
			setIsDialogModalPreviewOpen(false)
			setStep(1)
		} catch (error) {
			setSnackbar({
				open: true,
				message: error,
			})
		}
	}

	return { validationSchema, handleSubmit, initialValues }
}

export default useCreateNewPost
