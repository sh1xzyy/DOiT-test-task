'use client'

import Drawer from '@mui/material/Drawer'
import { toggleDrawer } from '@/utils/header/toggleDrawer'
import { useTemporaryDrawerContext } from '@/context/TemporaryDrawerContext/useTemporaryDrawerContext'
import DrawerList from './DrawerList/DrawerList'

const TemporaryDrawer = () => {
	const { isDrawerOpen, setIsDrawerOpen } = useTemporaryDrawerContext()

	return (
		<div>
			<Drawer
				open={isDrawerOpen}
				onClose={() => toggleDrawer(false, setIsDrawerOpen)}
			>
				<DrawerList setIsDrawerOpen={setIsDrawerOpen} />
			</Drawer>
		</div>
	)
}

export default TemporaryDrawer
