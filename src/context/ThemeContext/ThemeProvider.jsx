'use client'

import { useState } from 'react'
import { ThemeContext } from './useThemeContext'

export const ThemeProvider = ({ children }) => {
	const [mode, setMode] = useState('light')

	return (
		<ThemeContext.Provider value={{ mode, setMode }}>
			{children}
		</ThemeContext.Provider>
	)
}
