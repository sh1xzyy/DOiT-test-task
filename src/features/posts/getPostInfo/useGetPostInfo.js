import { getPostInfoByIdThunk } from '@/redux/post/operations'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

const useGetPostInfo = () => {
	const dispatch = useDispatch()

	const handleClick = async id => {
		try {
			await dispatch(getPostInfoByIdThunk(id)).unwrap()
		} catch (error) {
			toast.error(error)
		}
	}

	return { handleClick }
}

export default useGetPostInfo
