'use client'

import { DialogContent, Divider, Typography } from '@mui/material'
import { useFormikContext } from 'formik'
import { useThemeContext } from '@/context/ThemeContext/useThemeContext'
import ActionButtons from './parts/ActionButtons'
import { getStylesByMode } from '@/utils/common/getStylesByMode'

const DialogPreviewContent = () => {
	const { values } = useFormikContext()
	const { mode } = useThemeContext()
	return (
		<>
			<DialogContent sx={{ p: '30px ' }}>
				<Typography
					variant='h5'
					component='h4'
					sx={{
						color: getStylesByMode(mode, '#181818', '#ffffff'),
						mb: '10px',
					}}
				>
					{values.title}
				</Typography>
				<Typography
					variant='body1'
					component='p'
					sx={{
						color: getStylesByMode(mode, '#4d4d4d', '#e6e6e6'),
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
