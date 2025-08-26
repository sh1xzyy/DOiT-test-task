import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import { useRouter } from 'next/navigation'

const AddPostButton = () => {
	const router = useRouter()
	return (
		<SpeedDial
			ariaLabel='Add Post Button'
			sx={{
				position: 'fixed',
				bottom: 16,
				right: 16,
				'& .MuiFab-primary': {
					bgcolor: '#1976d2',
					color: '#fff',
					'&:hover': {
						bgcolor: '#115293',
					},
				},
			}}
			icon={<SpeedDialIcon />}
			onClick={() => router.push('/posts/create')}
		/>
	)
}

export default AddPostButton
