'use client'

import { useState } from 'react'
import { DialogModalCommentContext } from './useDialogModalCommentContext'

const DialogModalCommentProvider = ({ children }) => {
	const [isDialogModalCommentOpen, setIsDialogModalCommentOpen] =
		useState(false)
	return (
		<DialogModalCommentContext.Provider
			value={{ isDialogModalCommentOpen, setIsDialogModalCommentOpen }}
		>
			{children}
		</DialogModalCommentContext.Provider>
	)
}

export default DialogModalCommentProvider
