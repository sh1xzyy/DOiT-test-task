import { menuItems } from '@/utils/header/menuItems'
import { toggleDrawer } from '@/utils/header/toggleDrawer'
import { Box, ListItemButton } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Link from 'next/link'

const DrawerList = ({ setIsDrawerOpen }) => {
	return (
		<Box
			sx={{ width: 250 }}
			role='presentation'
			onClick={() => toggleDrawer(false, setIsDrawerOpen)}
		>
			<List>
				{menuItems.map(({ text, path, icon }) => (
					<ListItem key={text} disablePadding>
						<ListItemButton component={Link} href={path}>
							<ListItemIcon>{icon}</ListItemIcon>
							<ListItemText color='#ffffff' primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)
}

export default DrawerList
