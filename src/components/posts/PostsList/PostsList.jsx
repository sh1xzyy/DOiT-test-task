'use client'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const PostsList = ({ items, count, renderItem }) => {
	const list = items ? items : Array.from({ length: count })

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{list.map((item, index) => (
					<Grid key={index} size={{ xs: 12, sm: 4, md: 6, lg: 4 }}>
						{renderItem(item)}
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default PostsList
