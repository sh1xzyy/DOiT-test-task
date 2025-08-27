import Hero from '@/components/Hero/Hero'
import css from './page.module.css'
import { Container } from '@mui/material'

const Home = () => {
	return (
		<section className={css.section}>
			<Container maxWidth='md'>
				<Hero />
			</Container>
		</section>
	)
}

export default Home
