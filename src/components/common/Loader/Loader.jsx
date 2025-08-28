import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const Loader = () => {
	return (
		<Box
			sx={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%,-50%)',
				zIndex: '10000',
			}}
		>
			<CircularProgress />
		</Box>
	)
}
export default Loader
