'use client'

import { useState } from 'react'
import { DialogModalPreviewContext } from './useDialogModalPreviewContext'

const DialogModalPreviewProvider = ({ children }) => {
	const [isDialogModalPreviewOpen, setIsDialogModalPreviewOpen] =
		useState(false)

	return (
		<DialogModalPreviewContext.Provider
			value={{ isDialogModalPreviewOpen, setIsDialogModalPreviewOpen }}
		>
			{children}
		</DialogModalPreviewContext.Provider>
	)
}

export default DialogModalPreviewProvider
