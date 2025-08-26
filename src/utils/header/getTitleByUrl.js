export const getTitleByUrl = (url = '/', id) => {
	if (url === '/') {
		return 'DOiT MVP'
	} else if (url === '/posts') {
		return 'Усі пости'
	} else if (url === `/posts/create`) {
		return `Створити пост`
	} else if (url === `/posts/${id}`) {
		return `Пост #${id}`
	} else {
		return ''
	}
}
