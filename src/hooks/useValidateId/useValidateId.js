import { notFound } from 'next/navigation'
import { useEffect } from 'react'

export const useValidateId = id => {
	useEffect(() => {
		if (!id) {
			notFound()
		}

		const parsedId = Number.parseInt(id)

		if (Number.isNaN(parsedId)) {
			notFound()
		}
	}, [id])
}
