'use client'

import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import SnackbarWrapper from '@/components/common/SnackbarWrapper/SnackbarWrapper'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import useGetPostsByQuery from '@/features/posts/getPosts/useGetPostsByQuery'
import { useHandleChange } from '@/features/posts/getPosts/useHandleChange'

const SearchField = () => {
	const [snackbar, setSnackbar] = useState({
		open: false,
		message: '',
	})
	const [value, setValue] = useState('')
	const [error, setError] = useState('')
	const { handleSearch } = useGetPostsByQuery()

	useHandleChange(value, handleSearch, setSnackbar, setError)

	return (
		<>
			<Box
				sx={{
					position: 'relative',
					width: '100%',
					mb: '10px',
				}}
			>
				<TextField
					variant='outlined'
					fullWidth
					value={value}
					onChange={e => setValue(e.target.value)}
					onKeyDown={e =>
						e.key === 'Enter' &&
						handleSearch({ title: value }, setValue, setSnackbar, setError)
					}
					error={!!error}
					helperText={error}
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<IconButton
									onClick={() =>
										handleSearch(
											{ title: value },
											setValue,
											setSnackbar,
											setError
										)
									}
									sx={{ color: '#bebebe' }}
								>
									<SearchIcon />
								</IconButton>
							</InputAdornment>
						),
					}}
					placeholder='Пошук за заголовком...'
				/>
			</Box>
			<SnackbarWrapper snackbar={snackbar} setSnackbar={setSnackbar} />
		</>
	)
}

export default SearchField
