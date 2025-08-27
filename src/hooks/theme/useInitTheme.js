'use client'

import { useThemeContext } from '@/context/ThemeContext/useThemeContext'
import { useEffect } from 'react'

const useInitTheme = () => {
	const { setMode } = useThemeContext()

	useEffect(() => {
		const savedMode = localStorage.getItem('theme') || null

		if (savedMode) {
			setMode(savedMode)
		}
	}, [setMode])
}

export default useInitTheme
