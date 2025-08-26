export const croppingText = (text, cutLength) => {
	let newText = ''

	if (text.length >= cutLength) {
		return (newText = text.slice(0, cutLength).padEnd(cutLength + 3, '...'))
	} else {
		return text
	}
}
