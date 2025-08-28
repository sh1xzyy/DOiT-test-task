'use client'

import { useThemeContext } from '@/context/ThemeContext/useThemeContext'
import { getStylesByMode } from '@/utils/common/getStylesByMode'
import { DialogTitle, Divider } from '@mui/material'
import Dialog from '@mui/material/Dialog'

const DialogModal = ({
	isDialogModalOpen,
	setIsDialogModalOpen,
	title,
	children,
}) => {
	const { mode } = useThemeContext()
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
			<DialogTitle
				component='h4'
				id='alert-dialog-title'
				sx={{ p: '25px', color: getStylesByMode(mode, '#181818', '#e9e9e9ff') }}
			>
				{title}
			</DialogTitle>
			<Divider />
			{children}
		</Dialog>
	)
}

export default DialogModal
