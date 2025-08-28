import { IconButton } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const NavigateButton = ({ data: { router, id } }) => {
	return (
		<IconButton
			size='small'
			aria-label='learn more button'
			onClick={() => router.push(`/posts/${id}`)}
		>
			<ArrowForwardIcon sx={{ color: '#bebebe' }} />
		</IconButton>
	)
}

export default NavigateButton
