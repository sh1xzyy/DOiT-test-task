import { getStylesByMode } from '@/utils/common/getStylesByMode'
import { croppingText } from '@/utils/posts/croppingText'
import { Avatar, CardHeader, Tooltip, Typography } from '@mui/material'

const PostCardHeader = ({ data: { id, title, mode, type } }) => {
	return (
		<CardHeader
			avatar={
				<Avatar
					sx={{ bgcolor: getStylesByMode(mode, '#bebebe', '#ffffff') }}
					aria-label='avatar'
				>
					{title?.[0]?.toUpperCase()}
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
						{type === 'list' ? croppingText(title, 75) : title}
					</Typography>
				</Tooltip>
			}
			subheader={`User ${id}`}
		/>
	)
}

export default PostCardHeader
