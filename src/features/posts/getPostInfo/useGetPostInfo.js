import { getPostInfoByIdThunk } from '@/redux/post/operations'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetPostInfo = (id, setSnackbar) => {
	const dispatch = useDispatch()

	useEffect(() => {
		;(async () => {
			try {
				await dispatch(getPostInfoByIdThunk(id)).unwrap()
			} catch (error) {
				setSnackbar({
					open: true,
					message: error.message,
				})
			}
		})()
	}, [dispatch, id, setSnackbar])
}

export default useGetPostInfo
