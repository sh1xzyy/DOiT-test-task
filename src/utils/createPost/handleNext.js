export const handleNext = async (setTouched, validateForm, setStep) => {
	const errors = await validateForm()

	setTouched({ title: true, body: true })

	if (Object.keys(errors).length === 0) {
		setStep(prev => prev + 1)
	}
}
