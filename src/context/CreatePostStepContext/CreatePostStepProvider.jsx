'use client'

import { useState } from 'react'
import { CreatePostStepContext } from './useCreatePostStepContext'

const CreatePostStepProvider = ({ children }) => {
	const [step, setStep] = useState(1)
	return (
		<CreatePostStepContext.Provider value={{ step, setStep }}>
			{children}
		</CreatePostStepContext.Provider>
	)
}

export default CreatePostStepProvider
