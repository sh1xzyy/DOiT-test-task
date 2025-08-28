'use client'

import { Box } from '@mui/material'
import { useThemeContext } from '@/context/ThemeContext/useThemeContext'
import { getStylesByMode } from '@/utils/common/getStylesByMode'
import TextWrapper from './parts/TextWrapper'
import ActionButtons from './parts/ActionButtons'

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
				py: { xs: '40px', md: '60px' },
				px: { xs: '15px', md: '25px' },
				textAlign: 'center',
			}}
		>
			<TextWrapper mode={mode} />
			<ActionButtons />
		</Box>
	)
}

export default Hero
