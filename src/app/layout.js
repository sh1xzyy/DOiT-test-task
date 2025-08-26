import { CssBaseline } from '@mui/material'
import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'
import AppProvider from '@/context/AppProvider'
import ClientThemeProvider from '@/components/ClientThemeProvider/ClientThemeProvider'
import Header from '@/components/Header/Header'
import TemporaryDrawer from '@/components/TemporaryDrawer/TemporaryDrawer'

const RootLayout = ({ children }) => {
	return (
		<html lang='uk'>
			<body>
				<AppProvider>
					<ClientThemeProvider>
						<CssBaseline />
						<Header />
						<TemporaryDrawer />
						<Toaster position='bottom-left' />
						<main>{children}</main>
					</ClientThemeProvider>
				</AppProvider>
			</body>
		</html>
	)
}

export default RootLayout
