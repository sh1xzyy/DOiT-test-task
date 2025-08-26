'use client'

import Box from '@mui/material/Box'
import { IconButton } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import useGetPostsByQuery from '@/features/posts/getPosts/useGetPostsByQuery'
import { TextField } from 'formik-mui'
import SearchIcon from '@mui/icons-material/Search'

const SearchField = () => {
	const { handleSubmit, initialValues } = useGetPostsByQuery()

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
						name='query'
						variant='outlined'
						sx={{
							width: '100%',
						}}
						InputProps={{
							sx: {
								pl: '40px',
							},
						}}
						placeholder='Пошук за заголовком...'
						helperText={false}
						error={false}
					/>
					<IconButton
						type='submit'
						sx={{
							position: 'absolute',
							top: '50%',
							left: '5px',
							transform: 'translateY(-50%)',
						}}
						aria-label='submit button'
					>
						<SearchIcon sx={{ color: '#bebebe' }} />
					</IconButton>
				</Box>
			</Form>
		</Formik>
	)
}

export default SearchField
