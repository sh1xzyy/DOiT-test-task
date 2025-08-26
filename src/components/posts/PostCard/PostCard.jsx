'use client'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import { useThemeContext } from '@/context/ThemeContext/useThemeContext'
import { useRouter } from 'next/navigation'
import PostCardHeader from './postCardParts/PostCardHeader'
import DeletePostButton from './postCardParts/DeletePostButton'
import PostCardDescription from './postCardParts/PostCardDescription'
import NavigateButton from './postCardParts/NavigateButton'
import ActionButtons from './postCardParts/ActionButtons'

const PostCard = ({ data: { id, title, body }, type }) => {
	const { mode } = useThemeContext()
	const router = useRouter()

	return (
		<Card sx={{ minWidth: '100%', position: 'relative' }}>
			<CardContent
				sx={{
					p: '15px 15px 10px 15px',
					pb: type === 'cardInfo' ? '30px' : undefined,
				}}
			>
				<PostCardHeader data={{ id, title, mode, type }} />

				{type === 'common' && <DeletePostButton id={id} />}

				<PostCardDescription data={{ mode, type, body }} />
			</CardContent>

			<CardActions>
				{type === 'common' ? (
					<NavigateButton data={{ router, id }} />
				) : (
					<ActionButtons data={{ router, id }} />
				)}
			</CardActions>
		</Card>
	)
}

export default PostCard
