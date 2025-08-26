'use client'

import { deletePostByIdThunk } from '@/redux/post/operations'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

const useDeletePost = () => {
	const dispatch = useDispatch()

	const handleDelete = async id => {
		try {
			await dispatch(deletePostByIdThunk(id)).unwrap()
			toast.success('You have successfully deleted a post')
		} catch (error) {
			toast.error(error)
		}
	}

	return { handleDelete }
}

export default useDeletePost
