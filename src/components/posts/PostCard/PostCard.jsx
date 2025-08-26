'use client'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { useThemeContext } from '@/context/ThemeContext/useThemeContext'
import { getStylesByMode } from '@/utils/common/getStylesByMode'
import useDeletePost from '@/features/posts/deletePost/useDeletePost'
import { Avatar, CardHeader } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useRouter } from 'next/navigation'
import { croppingText } from '@/utils/posts/croppingText'
import Tooltip from '@mui/material/Tooltip'

const PostCard = ({ data: { id, title, body } }) => {
	const { handleDelete } = useDeletePost()
	const { mode } = useThemeContext()
	const router = useRouter()

	return (
		<Card sx={{ minWidth: '100%', position: 'relative' }}>
			<CardContent sx={{ p: '15px 15px 10px 15px' }}>
				<CardHeader
					avatar={
						<Avatar
							sx={{ bgcolor: getStylesByMode(mode, '#bebebe', '#ffffff') }}
							aria-label='avatar'
						>
							{title[0].toUpperCase()}
						</Avatar>
					}
					sx={{
						color: getStylesByMode(mode, '#252525', '#ffffff'),
						fontSize: 14,
						p: '0 0 25px 0',
						maxWidth: '90%',
					}}
					title={
						<Tooltip title={title} arrow>
							<Typography
								variant='body2'
								sx={{
									color: getStylesByMode(mode, '#252525', '#ffffff'),
								}}
							>
								{croppingText(title, 75)}
							</Typography>
						</Tooltip>
					}
					subheader={`User ${id}`}
				/>
				<IconButton
					sx={{
						position: 'absolute',
						top: '12px',
						right: '12px',
						width: '34px',
						height: '34px',
					}}
					aria-label='delete button'
					onClick={() => handleDelete(id)}
				>
					<DeleteIcon sx={{ color: '#f35b4a' }} />
				</IconButton>

				<Tooltip title={title} arrow>
					<Typography
						variant='body2'
						sx={{
							color: getStylesByMode(mode, '#252525', '#ffffff'),
						}}
					>
						{croppingText(body, 80)}
					</Typography>
				</Tooltip>
			</CardContent>
			<CardActions>
				<IconButton
					size='small'
					aria-label='learn more button'
					onClick={() => router.push(`/posts/${id}`)}
				>
					<ArrowForwardIcon color='#bebebe' />
				</IconButton>
			</CardActions>
		</Card>
	)
}

export default PostCard
