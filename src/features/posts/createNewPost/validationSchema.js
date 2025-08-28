import * as Yup from 'yup'

export const validationSchema = step =>
	Yup.object({
		title: Yup.string().when([], {
			is: () => step === 1,
			then: schema => schema.required('Необхідно вказати назву'),
			otherwise: schema => schema,
		}),
		body: Yup.string().when([], {
			is: () => step === 2,
			then: schema => schema.required('Потрібен опис'),
			otherwise: schema => schema,
		}),
	})
