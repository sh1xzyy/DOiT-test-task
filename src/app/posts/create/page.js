'use client'

import { Container } from '@mui/material'
import css from './page.module.css'
import CreatePostWrapper from '@/components/createPost/CreatePostWrapper/CreatePostWrapper'

const Page = () => {
	return (
		<>
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
