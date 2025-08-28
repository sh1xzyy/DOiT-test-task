'use client'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllPostsThunk } from '@/redux/post/operations'

const useFetchPosts = setSnackbar => {
	const dispatch = useDispatch()

	useEffect(() => {
		;(async () => {
			try {
				await dispatch(getAllPostsThunk('')).unwrap()
			} catch (error) {
				setSnackbar({
					open: true,
					message: error.message,
				})
			}
		})()
	}, [dispatch, setSnackbar])
}

export default useFetchPosts
