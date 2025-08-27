'use client'

import { createNewPostThunk } from '@/redux/post/operations'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { validationSchema } from './validationSchema'
import { initialValues } from './initialValues'

const useCreateNewPost = () => {
	const dispatch = useDispatch()

	const handleSubmit = async (values, actions) => {
		try {
			await dispatch(createNewPostThunk(values)).unwrap()
			actions.resetForm()
		} catch (error) {
			toast.error(error.message)
		}
	}

	return { validationSchema, handleSubmit, initialValues }
}

export default useCreateNewPost
