'use client'

import { createContext, useContext } from 'react'

export const TemporaryDrawerContext = createContext()
export const useTemporaryDrawerContext = () =>
	useContext(TemporaryDrawerContext)
