'use client'

import { createContext, useContext } from 'react'

export const DialogModalCommentContext = createContext()
export const useDialogModalCommentContext = () =>
	useContext(DialogModalCommentContext)
