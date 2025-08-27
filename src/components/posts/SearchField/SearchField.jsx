'use client'

import Box from '@mui/material/Box'
import { Field, Form, Formik } from 'formik'
import useGetPostsByQuery from '@/features/posts/getPosts/useGetPostsByQuery'
import { TextField } from 'formik-mui'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import SnackbarWrapper from '@/components/common/SnackbarWrapper/SnackbarWrapper'
import { IconButton, InputAdornment } from '@mui/material'
import { validationSchema } from '@/features/posts/getPosts/validationSchema'

const SearchField = () => {
	const [snackbar, setSnackbar] = useState({
		open: false,
		message: '',
	})
	const { handleSubmit, initialValues } = useGetPostsByQuery()

	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={(values, actions) =>
					handleSubmit(values, actions, setSnackbar)
				}
				validationSchema={validationSchema}
			>
				<Form>
					<Box
						sx={{
							position: 'relative',
							width: '100%',
							mb: '10px',
						}}
					>
						<Field
							component={TextField}
							name='title'
							variant='outlined'
							sx={{
								width: '100%',
							}}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<IconButton type='submit' sx={{ color: '#bebebe' }}>
											<SearchIcon />
										</IconButton>
									</InputAdornment>
								),
							}}
							placeholder='Пошук за заголовком...'
						/>
					</Box>
				</Form>
			</Formik>
			<SnackbarWrapper snackbar={snackbar} setSnackbar={setSnackbar} />
		</>
	)
}

export default SearchField
