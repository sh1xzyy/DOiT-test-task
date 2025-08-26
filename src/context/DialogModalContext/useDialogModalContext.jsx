'use client'

import { createContext, useContext } from 'react'

export const DialogModalContext = createContext()
export const useDialogModalContext = () => useContext(DialogModalContext)
