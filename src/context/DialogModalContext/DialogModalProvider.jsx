'use client'

import { useState } from 'react'
import { DialogModalContext } from './useDialogModalContext'

const DialogModalProvider = ({ children }) => {
	const [isDialogModalOpen, setIsDialogModalOpen] = useState(false)
	return (
		<DialogModalContext.Provider
			value={{ isDialogModalOpen, setIsDialogModalOpen }}
		>
			{children}
		</DialogModalContext.Provider>
	)
}

export default DialogModalProvider
