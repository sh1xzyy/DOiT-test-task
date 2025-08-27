import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Link from 'next/link'

const ActionButtons = () => {
	return (
		<Stack justifyContent='center' direction='row' spacing={3}>
			<Button
				sx={{
					bgcolor: '#2196f3',
					color: '#ffffff',
					px: { xs: '15x', md: '20px' },
					':hover': {
						bgcolor: '#0a70c4ff',
					},
				}}
				href='/posts'
				component={Link}
				startIcon={<FormatListBulletedIcon color='#ffffff' />}
			>
				ПЕРЕГЛЯНУТИ ПОСТИ
			</Button>
			<Button
				sx={{
					px: { xs: '15x', md: '20px' },
				}}
				href='/posts/create'
				component={Link}
				variant='outlined'
				startIcon={<AddCircleIcon />}
			>
				ДОДАТИ ПОСТ
			</Button>
		</Stack>
	)
}

export default ActionButtons
