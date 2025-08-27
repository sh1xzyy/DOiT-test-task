'use client'

import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import useDeletePost from '@/features/posts/deletePost/useDeletePost'

const DeletePostButton = ({ id, setSnackbar }) => {
	const { handleDelete } = useDeletePost()

	return (
		<IconButton
			sx={{
				position: 'absolute',
				top: '12px',
				right: '12px',
				width: '34px',
				height: '34px',
			}}
			aria-label='delete button'
			onClick={() => handleDelete(id, setSnackbar)}
		>
			<DeleteIcon sx={{ color: '#f35b4a' }} />
		</IconButton>
	)
}

export default DeletePostButton
