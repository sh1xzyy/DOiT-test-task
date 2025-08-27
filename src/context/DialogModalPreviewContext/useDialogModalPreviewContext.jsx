'use client'

import { createContext, useContext } from 'react'

export const DialogModalPreviewContext = createContext()
export const useDialogModalPreviewContext = () =>
	useContext(DialogModalPreviewContext)
