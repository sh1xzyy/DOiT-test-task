'use client'

import { Box, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { getTitleByUrl } from '@/utils/header/getTitleByUrl'
import { useTemporaryDrawerContext } from '@/context/TemporaryDrawerContext/useTemporaryDrawerContext'
import { toggleDrawer } from '@/utils/header/toggleDrawer'

const LeftSide = ({ pathname, id }) => {
	const { setIsDrawerOpen } = useTemporaryDrawerContext()

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<IconButton
				size='large'
				edge='start'
				color='inherit'
				aria-label='menu'
				onClick={() => toggleDrawer(true, setIsDrawerOpen)}
			>
				<MenuIcon />
			</IconButton>
			<Typography
				variant='h6'
				component={'div'}
				sx={{
					fontSize: '20px',
					fontWeight: 500,
					color: 'inherit',
					transition: 'color linear 250ms',
					'&:hover ': {
						color: '#e7e7e7',
					},
				}}
			>
				{getTitleByUrl(pathname, id)}
			</Typography>
		</Box>
	)
}

export default LeftSide
