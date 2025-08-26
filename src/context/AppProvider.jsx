import { TemporaryDrawerProvider } from './TemporaryDrawerContext/TemporaryDrawerProvider'
import { ThemeProvider } from './ThemeContext/ThemeProvider'

const AppProvider = ({ children }) => {
	return (
		<TemporaryDrawerProvider>
			<ThemeProvider>{children}</ThemeProvider>
		</TemporaryDrawerProvider>
	)
}

export default AppProvider
