'use client'

import { Box, Button, CssBaseline, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const GlobalError = ({ error }) => {
	const router = useRouter()

	return (
		<html lang='uk'>
			<head>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta
					name='description'
					content='Простий сайт для пошуку, створення та видалення постів. Зручний інтерфейс для керування контентом.'
				/>
				<meta
					name='keywords'
					content='пошук постів, створення постів, видалення постів, керування контентом, блог'
				/>
				<link rel='icon' href='/favicon.svg' />
				<title>DOiT MVP</title>
			</head>
			<body>
				<CssBaseline />
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						height: '100vh',
						backgroundColor: '#001527',
					}}
				>
					<Typography
						variant='h1'
						component='h5'
						sx={{
							color: 'white',
							mb: '20px',
							textAlign: 'center',
							fontSize: { xs: '38px', sm: '64px' },
						}}
					>
						Помилка
					</Typography>
					<Typography
						variant='h6'
						component='p'
						sx={{
							color: 'white',
							mb: '20px',
							textAlign: 'center',
							color: '#b3b3b3',
							maxWidth: { xs: '310px', sm: '100%' },
						}}
					>
						Щось пішло не так. Будь ласка, поверніться на головну сторінку.
					</Typography>
					<Stack
						sx={{
							flexDirection: { xs: 'column', sm: 'row' },
							gap: { xs: '15px', sm: '30px' },
						}}
					>
						<Button variant='contained' component={Link} href='/'>
							На головну
						</Button>
					</Stack>
				</Box>
			</body>
		</html>
	)
}

export default GlobalError
