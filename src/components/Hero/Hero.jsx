'use client'

import { Box, Container } from '@mui/material'
import { useThemeContext } from '@/context/ThemeContext/useThemeContext'
import { getStylesByMode } from '@/utils/common/getStylesByMode'
import ActionButtons from './heroParts/ActionButtons'
import TextWrapper from './heroParts/TextWrapper'

const Hero = () => {
	const { mode } = useThemeContext()
	return (
		<Box
			sx={{
				background: getStylesByMode(
					mode,
					'linear-gradient(130deg, #d3ebff, #fce4ff)',
					'linear-gradient(130deg, #386b61, #4c0e70)'
				),
				py: { xs: '50px', md: '60px' },
				px: { xs: '20px', md: '25px' },
				textAlign: 'center',
			}}
		>
			<TextWrapper mode={mode} />
			<ActionButtons />
		</Box>
	)
}

export default Hero
