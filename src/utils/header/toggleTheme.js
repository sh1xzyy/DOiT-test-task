export const toggleTheme = (mode, setMode) => {
	const newMode = mode === 'light' ? 'dark' : 'light'
	localStorage.setItem('theme', newMode)
	setMode(newMode)
}
