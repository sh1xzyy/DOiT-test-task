import { DialogContent } from '@mui/material'
import CommentsList from '../CommentsList/CommentsList'

const DialogCommentContent = () => {
	return (
		<DialogContent sx={{ p: '45px 50px' }}>
			<CommentsList />
		</DialogContent>
	)
}

export default DialogCommentContent
