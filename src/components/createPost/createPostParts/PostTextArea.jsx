'use client'

import Box from '@mui/material/Box'
import { Field } from 'formik'
import { TextField } from 'formik-mui'

const PostTextArea = () => {
	return (
		<Box
			sx={{
				position: 'relative',
			}}
		>
			<Field
				component={TextField}
				name='body'
				label='Описание'
				fullWidth
				multiline
				minRows={2}
			/>
		</Box>
	)
}

export default PostTextArea
