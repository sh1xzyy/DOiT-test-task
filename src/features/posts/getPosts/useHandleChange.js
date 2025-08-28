import { useEffect } from 'react'

export const useHandleChange = (value, handleSearch, setSnackbar, setError) => {
	useEffect(() => {
		if (!value) return

		const handler = setTimeout(() => {
			handleSearch({ title: value }, null, setSnackbar, setError)
		}, 400)

		return () => clearTimeout(handler)
	}, [value, handleSearch, setSnackbar, setError])
}
