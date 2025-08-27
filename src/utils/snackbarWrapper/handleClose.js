export const handleClose = (setSnackbar, reason) => {
	if (reason === 'clickaway') return

	setSnackbar(prev => ({ ...prev, open: false }))
}
