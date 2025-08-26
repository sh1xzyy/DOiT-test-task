import { createTheme } from '@mui/material'
import { getStylesByMode } from '../common/getStylesByMode'

export const getTheme = (mode = 'light') => {
	return createTheme({
		palette: {
			mode,
			primary: {
				main: getStylesByMode(mode, '#1976d2', '#90caf9'),
			},
			secondary: {
				main: getStylesByMode(mode, '#9c27b0', '#ce93d8'),
			},
			background: {
				default: getStylesByMode(mode, '#ffffff', '#181818'),
			},
			text: {
				primary: getStylesByMode(mode, '#535353', '#ffffff'),
			},
		},
	})
}
