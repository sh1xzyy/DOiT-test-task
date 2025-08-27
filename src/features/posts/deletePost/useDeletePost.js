'use client'

import { deletePostByIdThunk } from '@/redux/post/operations'
import { useDispatch } from 'react-redux'

const useDeletePost = () => {
	const dispatch = useDispatch()

	const handleDelete = async (id, setSnackbar) => {
		try {
			await dispatch(deletePostByIdThunk(id)).unwrap()
		} catch (error) {
			setSnackbar({
				open: true,
				message: error.message,
			})
		}
	}

	return { handleDelete }
}

export default useDeletePost
