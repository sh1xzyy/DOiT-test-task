import CreatePostStepProvider from './CreatePostStepContext/CreatePostStepProvider'
import DialogModalCommentProvider from './DialogModalCommentContext/DialogModalCommentProvider'
import DialogModalPreviewProvider from './DialogModalPreviewContext/DialogModalPreviewProvider'
import { TemporaryDrawerProvider } from './TemporaryDrawerContext/TemporaryDrawerProvider'
import { ThemeProvider } from './ThemeContext/ThemeProvider'

const AppProvider = ({ children }) => {
	return (
		<CreatePostStepProvider>
			<DialogModalPreviewProvider>
				<DialogModalCommentProvider>
					<TemporaryDrawerProvider>
						<ThemeProvider>{children}</ThemeProvider>
					</TemporaryDrawerProvider>
				</DialogModalCommentProvider>
			</DialogModalPreviewProvider>
		</CreatePostStepProvider>
	)
}

export default AppProvider
