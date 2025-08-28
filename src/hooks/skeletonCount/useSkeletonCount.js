import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mui/material'

const useSkeletonCount = () => {
	const theme = useTheme()
	const isXs = useMediaQuery(theme.breakpoints.only('xs'))
	const isSm = useMediaQuery(theme.breakpoints.only('sm'))
	const isMd = useMediaQuery(theme.breakpoints.only('md'))

	if (isXs) return 4
	if (isSm || isMd) return 8
	return 12
}

export default useSkeletonCount
