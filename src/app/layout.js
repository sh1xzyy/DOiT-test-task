'use client'

import { CssBaseline } from '@mui/material'
import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'
import AppProvider from '@/context/AppProvider'
import ClientThemeProvider from '@/components/ClientThemeProvider/ClientThemeProvider'
import Header from '@/components/Header/Header'
import TemporaryDrawer from '@/components/TemporaryDrawer/TemporaryDrawer'
import { Provider } from 'react-redux'
import store from '@/redux/store'

const RootLayout = ({ children }) => {
	return (
		<html lang='uk'>
			<body>
				<Provider store={store}>
					<AppProvider>
						<ClientThemeProvider>
							<CssBaseline />
							<Header />
							<TemporaryDrawer />
							<Toaster position='bottom-left' />
							<main>{children}</main>
						</ClientThemeProvider>
					</AppProvider>
				</Provider>
			</body>
		</html>
	)
}

export default RootLayout
