'use client'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import { useThemeContext } from '@/context/ThemeContext/useThemeContext'
import { useRouter } from 'next/navigation'
import PostCardHeader from './parts/PostCardHeader'
import DeletePostButton from './parts/DeletePostButton'
import PostCardDescription from './parts/PostCardDescription'
import NavigateButton from './parts/NavigateButton'
import ActionButtons from './parts/ActionButtons'
import { useState } from 'react'
import SnackbarWrapper from '@/components/common/SnackbarWrapper/SnackbarWrapper'

const PostCard = ({ data: { id, title, body }, type }) => {
	const [snackbar, setSnackbar] = useState({
		open: false,
		message: '',
	})
	const { mode } = useThemeContext()
	const router = useRouter()

	return (
		<>
			<Card
				sx={{
					minWidth: '100%',
					position: 'relative',
					boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.25)',
				}}
			>
				<CardContent
					sx={{
						p: '15px 15px 10px 15px',
						pb: type === 'cardInfo' ? '30px' : undefined,
					}}
				>
					<PostCardHeader data={{ id, title, mode, type }} />

					{type === 'common' && (
						<DeletePostButton id={id} setSnackbar={setSnackbar} />
					)}

					<PostCardDescription data={{ mode, type, body }} />
				</CardContent>

				<CardActions>
					{type === 'common' ? (
						<NavigateButton data={{ router, id }} />
					) : (
						<ActionButtons data={{ router, id }} setSnackbar={setSnackbar} />
					)}
				</CardActions>
			</Card>
			<SnackbarWrapper snackbar={snackbar} setSnackbar={setSnackbar} />
		</>
	)
}

export default PostCard
