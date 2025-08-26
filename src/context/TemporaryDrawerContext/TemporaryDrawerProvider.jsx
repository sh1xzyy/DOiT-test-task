'use client'

import { useState } from 'react'
import { TemporaryDrawerContext } from './useTemporaryDrawerContext'

export const TemporaryDrawerProvider = ({ children }) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	return (
		<TemporaryDrawerContext.Provider value={{ isDrawerOpen, setIsDrawerOpen }}>
			{children}
		</TemporaryDrawerContext.Provider>
	)
}
