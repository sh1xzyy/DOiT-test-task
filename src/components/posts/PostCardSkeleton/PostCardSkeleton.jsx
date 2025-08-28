'use client'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Skeleton from '@mui/material/Skeleton'
import Box from '@mui/material/Box'

const PostCardSkeleton = () => {
	return (
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
				}}
			>
				<Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
					<Skeleton variant='circular' width={40} height={40} />
					<Box sx={{ ml: 2, flex: 1 }}>
						<Skeleton variant='text' width='60%' height={24} />
						<Skeleton variant='text' width='20%' height={24} />
					</Box>
					<Box sx={{ mb: 2 }}>
						<Skeleton variant='rectangular' width={24} height={24} />
					</Box>
				</Box>

				<Box>
					<Skeleton variant='text' width='90%' />
					<Skeleton variant='text' width='60%' />
				</Box>
			</CardContent>

			<CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Skeleton variant='rectangular' width={34} height={34} />
			</CardActions>
		</Card>
	)
}

export default PostCardSkeleton
