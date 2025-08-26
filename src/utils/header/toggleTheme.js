export const toggleTheme = setMode => {
	setMode(prev => (prev === 'light' ? 'dark' : 'light'))
}
