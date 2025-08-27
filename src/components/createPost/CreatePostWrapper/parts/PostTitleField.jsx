'use client'

import Box from '@mui/material/Box'
import { Field } from 'formik'
import { TextField } from 'formik-mui'
import TitleIcon from '@mui/icons-material/Title'
import { InputAdornment } from '@mui/material'
import { getStylesByMode } from '@/utils/common/getStylesByMode'
import { useThemeContext } from '@/context/ThemeContext/useThemeContext'

const PostTitleField = () => {
	const { mode } = useThemeContext()
	return (
		<Box
			sx={{
				position: 'relative',
			}}
		>
			<Field
				component={TextField}
				variant='outlined'
				name='title'
				label='Заголовок'
				fullWidth
				sx={{
					color: '#181818',
				}}
				onKeyDown={e => {
					if (e.key === 'Enter') e.preventDefault()
				}}
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							<TitleIcon
								sx={{ color: getStylesByMode(mode, '#535353', '#fffffff') }}
							/>
						</InputAdornment>
					),
				}}
			/>
		</Box>
	)
}

export default PostTitleField
