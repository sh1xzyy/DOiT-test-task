'use client'

import { useDispatch } from 'react-redux'
import { validate } from './validate'
import { filterPosts } from '@/redux/post/slice'

const useGetPostsByQuery = () => {
	const dispatch = useDispatch()

	const handleSearch = async (value, setValue, setSnackbar, setError) => {
		try {
			const error = validate(value.title)

			if (error) {
				setError(error)
				return
			}
			setError('')

			dispatch(filterPosts(value))

			if (setValue) setValue('')
		} catch (error) {
			setSnackbar({
				open: true,
				message: error.message,
			})
		}
	}

	return { handleSearch }
}

export default useGetPostsByQuery
