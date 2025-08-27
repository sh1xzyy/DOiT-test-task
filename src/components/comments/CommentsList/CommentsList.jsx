'use client'

import { useSelector } from 'react-redux'
import Comment from '../Comment/Comment'
import { List } from '@mui/material'
import { selectPostComments } from '@/redux/post/selectors'

const CommentsList = () => {
	const postComments = useSelector(selectPostComments)

	return (
		<List sx={{ display: 'flex', flexDirection: 'column', gap: '30px', p: 0 }}>
			{postComments.map(({ id, ...rest }) => (
				<Comment key={id} data={rest} />
			))}
		</List>
	)
}

export default CommentsList
