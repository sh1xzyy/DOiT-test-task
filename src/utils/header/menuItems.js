import HomeIcon from '@mui/icons-material/Home'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import AddCircleIcon from '@mui/icons-material/AddCircle'

export const menuItems = [
	{
		text: 'Головна',
		path: '/',
		icon: <HomeIcon />,
	},
	{
		text: 'Усі пости',
		path: '/posts',
		icon: <FormatListBulletedIcon />,
	},
	{
		text: 'Створити пост',
		path: '/posts/create',
		icon: <AddCircleIcon />,
	},
]
