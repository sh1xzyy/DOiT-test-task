import { getPostCommentsByIdThunk } from '@/redux/post/operations'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

const useGetPostComments = id => {
	const dispatch = useDispatch()

	useEffect(() => {
		;(async () => {
			try {
				await dispatch(getPostCommentsByIdThunk(id)).unwrap()
			} catch (error) {
				toast.error(error)
			}
		})()
	}, [dispatch, id])
}

export default useGetPostComments
