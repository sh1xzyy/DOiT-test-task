'use client'

import useGetPostInfo from '@/features/posts/getPostInfo/useGetPostInfo'
import { selectIsLoading, selectPostInfo } from '@/redux/post/selectors'
import { Container } from '@mui/material'
import { notFound, useParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import css from './page.module.css'
import useGetPostComments from '@/features/posts/getPostComments/useGetPostComments'
import { useDialogModalCommentContext } from '@/context/DialogModalCommentContext/useDialogModalCommentContext'
import { useEffect, useState } from 'react'
import PostCard from '../../../components/posts/PostCard/PostCard'
import DialogModal from '@/components/common/DialogModal/DialogModal'
import DialogCommentContent from '@/components/comments/DialogCommentContent/DialogCommentContent'
import SnackbarWrapper from '@/components/common/SnackbarWrapper/SnackbarWrapper'
import Loader from '@/components/common/Loader/Loader'

const Page = () => {
	const { isDialogModalCommentOpen, setIsDialogModalCommentOpen } =
		useDialogModalCommentContext()
	const [snackbar, setSnackbar] = useState({
		open: false,
		message: '',
	})
	const postInfo = useSelector(selectPostInfo)
	const isLoading = useSelector(selectIsLoading)
	const { id } = useParams()

	useEffect(() => {
		const parsedId = Number.parseInt(id)

		if (Number.isNaN(parsedId)) {
			notFound()
		}
	}, [id])

	useGetPostInfo(id, setSnackbar)
	useGetPostComments(id, setSnackbar)

	if (isLoading || Object.keys(postInfo).length === 0) {
		return <Loader />
	}

	return (
		<>
			<DialogModal
				isDialogModalOpen={isDialogModalCommentOpen}
				setIsDialogModalOpen={setIsDialogModalCommentOpen}
				title='Коментарі'
			>
				<DialogCommentContent />
			</DialogModal>
			<section className={css.section}>
				<Container>
					<PostCard data={postInfo} type='cardInfo' />
				</Container>
			</section>
			<SnackbarWrapper snackbar={snackbar} setSnackbar={setSnackbar} />
		</>
	)
}

export default Page
