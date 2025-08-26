'use client'

import { useThemeContext } from '@/context/ThemeContext/useThemeContext'
import { getTheme } from '@/utils/theme/getTheme'
import { ThemeProvider } from '@mui/material'

const ClientThemeProvider = ({ children }) => {
	const { mode } = useThemeContext()
	const theme = getTheme(mode)

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ClientThemeProvider
