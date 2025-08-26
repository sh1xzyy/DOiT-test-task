'use client'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initialValues } from './initialValues'
import toast from 'react-hot-toast'
import { getPostsByQueryThunk } from '@/redux/post/operations'

const useFetchPosts = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		;(async () => {
			try {
				await dispatch(getPostsByQueryThunk(initialValues.query)).unwrap()
			} catch (error) {
				toast.error(error)
			}
		})()
	}, [dispatch])
}

export default useFetchPosts
