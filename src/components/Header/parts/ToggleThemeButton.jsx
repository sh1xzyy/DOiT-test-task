'use client'

import { getIconByMode } from '@/utils/common/getIconByMode'
import { IconButton } from '@mui/material'
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import { toggleTheme } from '@/utils/header/toggleTheme'
import { useThemeContext } from '@/context/ThemeContext/useThemeContext'

const ToggleThemeButton = () => {
	const { mode, setMode } = useThemeContext()
	return (
		<IconButton
			color='inherit'
			aria-label='toggle theme button'
			onClick={() => toggleTheme(mode, setMode)}
		>
			{getIconByMode(mode, <Brightness4Icon />, <BrightnessHighIcon />)}
		</IconButton>
	)
}

export default ToggleThemeButton
