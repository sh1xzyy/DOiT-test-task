import { getStylesByMode } from '@/utils/common/getStylesByMode'
import { Typography } from '@mui/material'

const TextWrapper = ({ mode }) => {
	return (
		<>
			<Typography
				variant='h3'
				component='h1'
				align='center'
				sx={{
					fontWeight: 500,
					fontSize: '48px',
					letterSpacing: '0.03em',
					mb: 2,
					color: getStylesByMode(mode, '#000000', '#ffffff'),
				}}
			>
				Ласкаво просимо до DOiT MVP
			</Typography>
			<Typography
				variant='body1'
				component='h3'
				sx={{
					mb: 4,
					color: getStylesByMode(mode, '#535353', '#bebebe'),
				}}
			>
				Ми працюємо над MVP освітньої платформи. Приєлнуйтесь до команди!
			</Typography>
		</>
	)
}

export default TextWrapper
