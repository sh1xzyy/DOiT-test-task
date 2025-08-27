'use client'

import { getPostsByQueryThunk } from '@/redux/post/operations'
import { useDispatch } from 'react-redux'
import { initialValues } from './initialValues'

const useGetPostsByQuery = () => {
	const dispatch = useDispatch()

	const handleSubmit = async (query, actions, setSnackbar) => {
		try {
			await dispatch(getPostsByQueryThunk(query)).unwrap()
			actions.resetForm()
		} catch (error) {
			setSnackbar({
				open: true,
				message: error.message,
			})
		}
	}

	return { initialValues, handleSubmit }
}

export default useGetPostsByQuery
