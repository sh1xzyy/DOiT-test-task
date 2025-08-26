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
import CommentIcon from '@mui/icons-material/Comment'
import { useSelector } from 'react-redux'
import { selectPostComments } from '@/redux/post/selectors'
import { useDialogModalContext } from '@/context/DialogModalContext/useDialogModalContext'
import Badge from '@mui/material/Badge'

const Header = () => {
	const { setIsDialogModalOpen } = useDialogModalContext()
	const { setIsDrawerOpen } = useTemporaryDrawerContext()
	const postComments = useSelector(selectPostComments)
	const { mode, setMode } = useThemeContext()
	const pathname = usePathname()
	const { id } = useParams()

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar className={css.wrapper}>
					<Box className={css.leftSide}>
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
					</Box>
					<Box>
						<IconButton color='inherit' onClick={() => toggleTheme(setMode)}>
							{getIconByMode(mode, <Brightness4Icon />, <BrightnessHighIcon />)}
						</IconButton>
						{pathname === `/posts/${id}` && (
							<IconButton
								color='inherit'
								onClick={() => setIsDialogModalOpen(true)}
							>
								<Badge
									badgeContent={
										postComments?.length > 9 ? '9+' : postComments?.length
									}
									overlap='circular'
									sx={{
										cursor: 'pointer',
										'& .MuiBadge-badge': {
											backgroundColor: '#ff812d',
											color: '#181818',
											borderRadius: '50%',
											height: '18px',
											minWidth: '18px',
											fontSize: '0.75rem',
											fontWeight: 'bold',
										},
									}}
								>
									<CommentIcon />
								</Badge>
							</IconButton>
						)}
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Header
