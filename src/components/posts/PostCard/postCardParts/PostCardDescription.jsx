import { getStylesByMode } from '@/utils/common/getStylesByMode'
import { croppingText } from '@/utils/posts/croppingText'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

const PostCardDescription = ({ data: { mode, type, body } }) => {
	return (
		<Tooltip title={body} arrow>
			<Typography
				variant='body2'
				sx={{
					color: getStylesByMode(mode, '#252525', '#ffffff'),
				}}
			>
				{type === 'common' ? croppingText(body, 80) : body}
			</Typography>
		</Tooltip>
	)
}

export default PostCardDescription
