'use client'

import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import Stack from '@mui/material/Stack'
import useDeletePost from '@/features/posts/deletePost/useDeletePost'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Link from 'next/link'

const ActionButtons = ({ data: { router, id }, setSnackbar }) => {
	const { handleDelete } = useDeletePost()

	return (
		<Stack
			sx={{
				width: '100%',
				gap: { xs: '10px', sm: '10px' },
			}}
			direction={{ xs: 'column', sm: 'row' }}
		>
			<Button
				variant='contained'
				aria-label='delete button'
				sx={{
					bgcolor: '#db4736',
					color: '#ffffff',
				}}
				startIcon={<DeleteIcon sx={{ color: '#ffffff' }} />}
				onClick={() => {
					handleDelete(id, setSnackbar)
					router.push('/posts')
				}}
			>
				ВИДАЛИТИ
			</Button>
			<Button
				variant='outlined'
				aria-label='to posts list button'
				startIcon={
					<ArrowForwardIcon
						sx={{
							color: '#1976d2',
							rotate: '180deg',
						}}
					/>
				}
				sx={{
					color: '#1976d2',
				}}
				component={Link}
				href='/posts'
			>
				ДО СПИСКУ
			</Button>
		</Stack>
	)
}

export default ActionButtons
