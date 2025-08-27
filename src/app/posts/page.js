'use client'

import SearchField from '@/components/posts/SearchField/SearchField'
import { Container } from '@mui/system'
import css from './page.module.css'
import PostsList from '@/components/posts/PostsList/PostsList'
import useFetchPosts from '@/features/posts/getPosts/useFetchPosts'
import AddPostButton from '@/components/posts/AddPostButton/AddPostButton'
import SnackbarWrapper from '@/components/common/SnackbarWrapper/SnackbarWrapper'
import { useState } from 'react'

const Page = () => {
	const [snackbar, setSnackbar] = useState({
		open: false,
		message: '',
	})
	useFetchPosts(setSnackbar)

	return (
		<>
			<section className={css.section}>
				<Container maxWidth='lg'>
					<SearchField />
					<PostsList />
				</Container>
			</section>
			<AddPostButton />
			<SnackbarWrapper snackbar={snackbar} setSnackbar={setSnackbar} />
		</>
	)
}

export default Page
