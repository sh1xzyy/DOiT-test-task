'use client'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { useParams, usePathname } from 'next/navigation'
import ToggleThemeButton from './parts/ToggleThemeButton'
import CommentButton from './parts/CommentButton'
import LeftSide from './parts/LeftSide'

const Header = () => {
	const pathname = usePathname()
	const { id } = useParams()

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						bgcolor: '#2196f3',
					}}
				>
					<LeftSide pathname={pathname} id={id} />
					<Box>
						<ToggleThemeButton />
						{pathname === `/posts/${id}` && <CommentButton />}
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Header
