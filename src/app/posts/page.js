'use client'

import SearchField from '@/components/posts/SearchField/SearchField'
import { Container } from '@mui/system'
import css from './page.module.css'
import PostsList from '@/components/posts/PostsList/PostsList'
import useFetchPosts from '@/features/posts/getPosts/useFetchPosts'
import AddPostButton from '@/components/posts/AddPostButton/AddPostButton'

const Page = () => {
	useFetchPosts()

	return (
		<>
			<section className={css.section}>
				<Container maxWidth='lg'>
					<SearchField />
					<PostsList />
				</Container>
			</section>
			<AddPostButton />
		</>
	)
}

export default Page
