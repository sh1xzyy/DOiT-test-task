export const getStylesByMode = (mode, lightStyles, darkStyles) => {
	return mode === 'light' ? lightStyles : darkStyles
}
