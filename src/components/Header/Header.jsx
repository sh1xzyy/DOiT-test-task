'use client'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useThemeContext } from '@/context/ThemeContext/useThemeContext'
import { toggleTheme } from '@/utils/header/toggleTheme'
import css from './Header.module.css'
import { useTemporaryDrawerContext } from '@/context/TemporaryDrawerContext/useTemporaryDrawerContext'
import { toggleDrawer } from '@/utils/header/toggleDrawer'
import { Typography } from '@mui/material'
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import { getIconByMode } from '@/utils/common/getIconByMode'
import { useParams, usePathname } from 'next/navigation'
import { getTitleByUrl } from '@/utils/header/getTitleByUrl'

const Header = () => {
	const { setIsDrawerOpen } = useTemporaryDrawerContext()
	const { mode, setMode } = useThemeContext()
	const pathname = usePathname()
	const { id } = useParams()

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar className={css.wrapper}>
					<div className={css.leftSide}>
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='menu'
							onClick={() => toggleDrawer(true, setIsDrawerOpen)}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' component={'div'}>
							{getTitleByUrl(pathname, id)}
						</Typography>
					</div>
					<IconButton color='inherit' onClick={() => toggleTheme(setMode)}>
						{getIconByMode(mode, <Brightness4Icon />, <BrightnessHighIcon />)}
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Header
