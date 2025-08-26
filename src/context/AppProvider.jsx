import DialogModalProvider from './DialogModalContext/DialogModalProvider'
import { TemporaryDrawerProvider } from './TemporaryDrawerContext/TemporaryDrawerProvider'
import { ThemeProvider } from './ThemeContext/ThemeProvider'

const AppProvider = ({ children }) => {
	return (
		<DialogModalProvider>
			<TemporaryDrawerProvider>
				<ThemeProvider>{children}</ThemeProvider>
			</TemporaryDrawerProvider>
		</DialogModalProvider>
	)
}

export default AppProvider
