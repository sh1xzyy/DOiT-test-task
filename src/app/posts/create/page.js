'use client'

import { Container } from '@mui/material'
import css from './page.module.css'
import CreatePostWrapper from '@/components/createPost/CreatePostWrapper/CreatePostWrapper'
import { useSelector } from 'react-redux'
import { selectIsLoading } from '@/redux/post/selectors'
import Loader from '@/components/common/Loader/Loader'

const Page = () => {
	const isLoading = useSelector(selectIsLoading)
	return (
		<>
			{isLoading && <Loader />}
			<section className={css.section}>
				<Container
					maxWidth={false}
					sx={{
						maxWidth: '700px',
					}}
				>
					<CreatePostWrapper />
				</Container>
			</section>
		</>
	)
}

export default Page
