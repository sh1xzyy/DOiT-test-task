'use client'

import { useThemeContext } from '@/context/ThemeContext/useThemeContext'
import useInitTheme from '@/hooks/theme/useInitTheme'
import { getTheme } from '@/utils/theme/getTheme'
import { ThemeProvider } from '@mui/material'

const ClientThemeProvider = ({ children }) => {
	const { mode } = useThemeContext()

	useInitTheme()

	if (!mode) return null
	const theme = getTheme(mode)

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ClientThemeProvider
