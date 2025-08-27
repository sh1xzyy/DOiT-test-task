import * as Yup from 'yup'

export const validationSchema = step =>
	Yup.object({
		title: Yup.string().when([], {
			is: () => step === 1,
			then: schema => schema.required('Title is required'),
			otherwise: schema => schema,
		}),
		body: Yup.string().when([], {
			is: () => step === 2,
			then: schema => schema.required('Description is required'),
			otherwise: schema => schema,
		}),
	})
