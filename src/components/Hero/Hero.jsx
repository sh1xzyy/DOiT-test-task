'use client'

import { Box, Container, Typography } from '@mui/material'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { useThemeContext } from '@/context/ThemeContext/useThemeContext'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Link from 'next/link'
import { getStylesByMode } from '@/utils/common/getStylesByMode'

const Hero = () => {
	const { mode } = useThemeContext()
	return (
		<Container maxWidth='md'>
			<Box
				sx={{
					background: getStylesByMode(
						mode,
						'linear-gradient(130deg, #d3ebff, #fce4ff)',
						'linear-gradient(130deg, #386b61, #4c0e70)'
					),
					py: { xs: '50px', md: '60px' },
					px: { xs: '20px', md: '25px' },
					textAlign: 'center',
				}}
			>
				<Typography
					variant='h3'
					component='h1'
					align='center'
					sx={{
						fontWeight: 500,
						fontSize: '48px',
						letterSpacing: '0.03em',
						mb: 2,
						color: mode === 'light' ? '#000000' : '#ffffff',
					}}
				>
					Ласкаво просимо до DOiT MVP
				</Typography>
				<Typography
					variant='body1'
					component='p'
					sx={{
						mb: 4,
						color: mode === 'light' ? '#535353' : '#bebebe',
					}}
				>
					Ми працюємо над MVP освітньої платформи. Приєлнуйтесь до команди!
				</Typography>

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
			</Box>
		</Container>
	)
}

export default Hero
