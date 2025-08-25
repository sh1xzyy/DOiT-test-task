import { CssBaseline } from '@mui/material'
import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'

const RootLayout = ({ children }) => {
	return (
		<html lang='uk'>
			<body>
				<CssBaseline />
				<Toaster position='bottom-left' />
				<main>{children}</main>
			</body>
		</html>
	)
}

export default RootLayout
