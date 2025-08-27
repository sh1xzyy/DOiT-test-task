import { handleClose } from '@/utils/snackbarWrapper/handleClose'
import { Snackbar } from '@mui/material'

const SnackbarWrapper = ({ snackbar, setSnackbar }) => {
	return (
		<Snackbar
			open={snackbar.open}
			autoHideDuration={6000}
			onClose={reason => handleClose(setSnackbar, reason)}
			message={snackbar.message}
		/>
	)
}

export default SnackbarWrapper
