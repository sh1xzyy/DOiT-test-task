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
			<head>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta
					name='description'
					content='Простий сайт для пошуку, створення та видалення постів. Зручний інтерфейс для керування контентом.'
				/>
				<meta
					name='keywords'
					content='пошук постів, створення постів, видалення постів, керування контентом, блог'
				/>
				<title>DOiT MVP</title>
			</head>
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
