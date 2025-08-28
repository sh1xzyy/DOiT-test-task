'use client'

import SearchField from '@/components/posts/SearchField/SearchField'
import { Container } from '@mui/system'
import css from './page.module.css'
import PostsList from '@/components/posts/PostsList/PostsList'
import useFetchPosts from '@/features/posts/getPosts/useFetchPosts'
import AddPostButton from '@/components/posts/AddPostButton/AddPostButton'
import SnackbarWrapper from '@/components/common/SnackbarWrapper/SnackbarWrapper'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoading, selectPostsList } from '@/redux/post/selectors'
import PostCardSkeleton from '@/components/posts/PostCardSkeleton/PostCardSkeleton'
import PostCard from '@/components/posts/PostCard/PostCard'
import useSkeletonCount from '@/hooks/skeletonCount/useSkeletonCount'

const Page = () => {
	const [snackbar, setSnackbar] = useState({
		open: false,
		message: '',
	})
	const isLoading = useSelector(selectIsLoading)
	const postsList = useSelector(selectPostsList)
	const skeletonCount = useSkeletonCount()

	useFetchPosts(setSnackbar)

	return (
		<>
			<section className={css.section}>
				<Container maxWidth='lg'>
					<SearchField />
					{isLoading ? (
						<PostsList
							count={skeletonCount}
							renderItem={() => <PostCardSkeleton />}
						/>
					) : (
						<PostsList
							items={postsList}
							renderItem={post => (
								<PostCard key={post.id} data={post} type='common' />
							)}
						/>
					)}
				</Container>
			</section>
			<AddPostButton />
			<SnackbarWrapper snackbar={snackbar} setSnackbar={setSnackbar} />
		</>
	)
}

export default Page
