'use client'

import PostCard from '@/components/posts/PostCard/PostCard'
import useGetPostInfo from '@/features/posts/getPostInfo/useGetPostInfo'
import { selectPostInfo } from '@/redux/post/selectors'
import { Container } from '@mui/system'
import { notFound, useParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import css from './page.module.css'
import useGetPostComments from '@/features/posts/getPostComments/useGetPostComments'
import { useDialogModalContext } from '@/context/DialogModalContext/useDialogModalContext'
import DialogModal from '@/components/comments/DialogModal/DialogModal'
import { useEffect } from 'react'

const Page = () => {
	const { isDialogModalOpen } = useDialogModalContext()
	const postInfo = useSelector(selectPostInfo)
	const { id } = useParams()

	useEffect(() => {
		const parsedId = Number.parseInt(id)

		if (Number.isNaN(parsedId)) {
			notFound()
		}
	}, [id])

	useGetPostInfo(id)
	useGetPostComments(id)

	return (
		<>
			{isDialogModalOpen && <DialogModal />}
			<section className={css.section}>
				<Container>
					<PostCard data={postInfo} type='cardInfo' />
				</Container>
			</section>
		</>
	)
}

export default Page
