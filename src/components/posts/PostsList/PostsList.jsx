'use client'

import { selectPostsList } from '@/redux/post/selectors'
import PostCard from '../PostCard/PostCard'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { useSelector } from 'react-redux'

const PostsList = () => {
	const postsList = useSelector(selectPostsList)
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{postsList.map(data => (
					<Grid key={data.id} size={{ xs: 12, sm: 4, md: 6, lg: 4 }}>
						<PostCard data={data} type='common' />
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default PostsList
