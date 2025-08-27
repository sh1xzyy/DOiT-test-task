'use client'

import { DialogTitle, Divider } from '@mui/material'
import Dialog from '@mui/material/Dialog'

const DialogModal = ({
	isDialogModalOpen,
	setIsDialogModalOpen,
	title,
	children,
}) => {
	return (
		<Dialog
			open={isDialogModalOpen}
			onClose={() => setIsDialogModalOpen(false)}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
			PaperProps={{
				sx: {
					width: '100%',
					maxWidth: '700px',
				},
			}}
		>
			<DialogTitle component='h4' id='alert-dialog-title' sx={{ p: '25px' }}>
				{title}
			</DialogTitle>
			<Divider />
			{children}
		</Dialog>
	)
}

export default DialogModal
