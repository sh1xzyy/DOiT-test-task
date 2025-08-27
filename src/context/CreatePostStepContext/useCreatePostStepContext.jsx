'use client'

import { createContext, useContext } from 'react'

export const CreatePostStepContext = createContext()
export const useCreatePostStepContext = () => useContext(CreatePostStepContext)
