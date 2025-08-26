'use client'

import { useDialogModalContext } from '@/context/DialogModalContext/useDialogModalContext'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Divider from '@mui/material/Divider'
import CommentsList from '../CommentsList/CommentsList'

const DialogModal = () => {
	const { isDialogModalOpen, setIsDialogModalOpen } = useDialogModalContext()

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
				Коментарі
			</DialogTitle>
			<Divider />
			<DialogContent sx={{ p: '45px 50px' }}>
				<CommentsList />
			</DialogContent>
		</Dialog>
	)
}

export default DialogModal
