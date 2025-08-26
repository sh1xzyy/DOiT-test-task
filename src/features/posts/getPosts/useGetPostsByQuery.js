'use client'

import { getPostsByQueryThunk } from '@/redux/post/operations'
import { useDispatch } from 'react-redux'
import { initialValues } from './initialValues'
import toast from 'react-hot-toast'

const useGetPostsByQuery = () => {
	const dispatch = useDispatch()

	const handleSubmit = async (query, actions) => {
		try {
			await dispatch(getPostsByQueryThunk(query)).unwrap()
			actions.resetForm()
		} catch (error) {
			toast.error(error)
		}
	}

	return { initialValues, handleSubmit }
}

export default useGetPostsByQuery
