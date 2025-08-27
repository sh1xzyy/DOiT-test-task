import { getPostCommentsByIdThunk } from '@/redux/post/operations'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetPostComments = (id, setSnackbar) => {
	const dispatch = useDispatch()

	useEffect(() => {
		;(async () => {
			try {
				await dispatch(getPostCommentsByIdThunk(id)).unwrap()
			} catch (error) {
				setSnackbar({
					open: true,
					message: error.message,
				})
			}
		})()
	}, [dispatch, id, setSnackbar])
}

export default useGetPostComments
