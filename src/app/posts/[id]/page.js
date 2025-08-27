'use client'

import useGetPostInfo from '@/features/posts/getPostInfo/useGetPostInfo'
import { selectPostInfo } from '@/redux/post/selectors'
import { Container } from '@mui/material'
import { notFound, useParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import css from './page.module.css'
import useGetPostComments from '@/features/posts/getPostComments/useGetPostComments'
import { useDialogModalCommentContext } from '@/context/DialogModalCommentContext/useDialogModalCommentContext'
import { useEffect } from 'react'
import PostCard from '../../../components/posts/PostCard/PostCard'
import DialogModal from '@/components/common/DialogModal/DialogModal'
import DialogCommentContent from '@/components/comments/DialogCommentContent/DialogCommentContent'

const Page = () => {
	const { isDialogModalCommentOpen, setIsDialogModalCommentOpen } =
		useDialogModalCommentContext()
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
			{isDialogModalCommentOpen && (
				<DialogModal
					isDialogModalOpen={isDialogModalCommentOpen}
					setIsDialogModalOpen={setIsDialogModalCommentOpen}
					title='Коментарі'
				>
					<DialogCommentContent />
				</DialogModal>
			)}
			<section className={css.section}>
				<Container>
					<PostCard data={postInfo} type='cardInfo' />
				</Container>
			</section>
		</>
	)
}

export default Page
