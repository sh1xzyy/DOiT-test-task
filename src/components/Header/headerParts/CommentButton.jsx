import { Badge, IconButton } from '@mui/material'
import CommentIcon from '@mui/icons-material/Comment'
import { useDialogModalCommentContext } from '@/context/DialogModalCommentContext/useDialogModalCommentContext'
import { selectPostComments } from '@/redux/post/selectors'
import { useSelector } from 'react-redux'

const CommentButton = () => {
	const { setIsDialogModalCommentOpen } = useDialogModalCommentContext()
	const postComments = useSelector(selectPostComments)

	return (
		<IconButton
			color='inherit'
			onClick={() => setIsDialogModalCommentOpen(true)}
		>
			<Badge
				badgeContent={postComments?.length > 9 ? '9+' : postComments?.length}
				overlap='circular'
				sx={{
					cursor: 'pointer',
					'& .MuiBadge-badge': {
						backgroundColor: '#ff812d',
						color: '#181818',
						borderRadius: '50%',
						height: '18px',
						minWidth: '18px',
						fontSize: '0.75rem',
						fontWeight: 'bold',
					},
				}}
			>
				<CommentIcon />
			</Badge>
		</IconButton>
	)
}

export default CommentButton
