export const getStylesByMode = (mode, firstStyles, secondStyles) => {
	return mode === 'light' ? firstStyles : secondStyles
}
