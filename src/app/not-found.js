'use client'

import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

const NotFound = () => {
	const router = useRouter()

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				height: '93vh',
				backgroundColor: '#001527',
			}}
		>
			<Typography variant='h1' component='h5'>
				404
			</Typography>
			<Typography
				variant='h6'
				component='p'
				sx={{
					color: 'white',
					mb: '20px',
					textAlign: 'center',
					maxWidth: { xs: '240px', sm: '100%' },
				}}
			>
				Сторінка, яку ви шукаєте, не існує.
			</Typography>
			<Button variant='contained' onClick={() => router.back()}>
				Назад додому
			</Button>
		</Box>
	)
}
export default NotFound
