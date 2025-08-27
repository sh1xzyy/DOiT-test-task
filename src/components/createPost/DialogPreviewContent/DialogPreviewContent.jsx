'use client'

import { DialogContent, Divider, Typography } from '@mui/material'
import { useFormikContext } from 'formik'
import { useThemeContext } from '@/context/ThemeContext/useThemeContext'
import ActionButtons from './parts/ActionButtons'

const DialogPreviewContent = () => {
	const { values } = useFormikContext()
	const { mode } = useThemeContext()
	return (
		<>
			<DialogContent sx={{ p: '45px 50px' }}>
				<Typography
					variant='h5'
					component='h4'
					sx={{
						color: getStylesByMode(mode, '#181818', '#f5f5f5'),
						mb: '10px',
					}}
				>
					{values.title}
				</Typography>
				<Typography
					variant='body1'
					component='p'
					sx={{
						color: getStylesByMod(mode, '#181818', '#b3b3b3'),
					}}
				>
					{values.body}
				</Typography>
			</DialogContent>
			<Divider />
			<ActionButtons />
		</>
	)
}

export default DialogPreviewContent
