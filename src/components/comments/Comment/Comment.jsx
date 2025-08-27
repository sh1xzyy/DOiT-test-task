'use client'

import { useThemeContext } from '@/context/ThemeContext/useThemeContext'
import { getStylesByMode } from '@/utils/common/getStylesByMode'
import { ListItem, ListItemText, Typography } from '@mui/material'

const Comment = ({ data: { name, body } }) => {
	const { mode } = useThemeContext()
	return (
		<ListItem
			sx={{
				p: 0,
			}}
			alignItems='flex-start'
		>
			<ListItemText
				sx={{
					m: 0,
				}}
				primary={
					<Typography
						sx={{ color: getStylesByMode(mode, '#181818', '#f5f5f5') }}
						variant='h6'
						component='h4'
					>
						{name}
					</Typography>
				}
				secondary={
					<Typography
						sx={{
							color: getStylesByMode(mode, '#181818', '#b3b3b3'),
						}}
						variant='body1'
						component='p'
					>
						{body}
					</Typography>
				}
			/>
		</ListItem>
	)
}

export default Comment
