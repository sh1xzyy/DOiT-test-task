'use client'

import Box from '@mui/material/Box'
import { Formik, Form } from 'formik'
import { useDialogModalPreviewContext } from '@/context/DialogModalPreviewContext/useDialogModalPreviewContext'
import DialogModal from '@/components/common/DialogModal/DialogModal'
import DialogPreviewContent from '../DialogPreviewContent/DialogPreviewContent'
import { useCreatePostStepContext } from '@/context/CreatePostStepContext/useCreatePostStepContext'
import useCreateNewPost from '@/features/posts/createNewPost/useCreateNewPost'
import { useRouter } from 'next/navigation'
import { getStylesByMode } from '@/utils/common/getStylesByMode'
import { useThemeContext } from '@/context/ThemeContext/useThemeContext'
import PostStepper from './parts/PostStepper/PostStepper'
import PostTitleField from './parts/PostTitleField'
import PostTextArea from './parts/PostTextArea'
import ActionButtons from './parts/ActionButtons'

const CreatePostWrapper = () => {
	const { isDialogModalPreviewOpen, setIsDialogModalPreviewOpen } =
		useDialogModalPreviewContext()
	const { validationSchema, handleSubmit, initialValues } = useCreateNewPost()
	const { step, setStep } = useCreatePostStepContext()
	const { mode } = useThemeContext()
	const router = useRouter()

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '35px',
				p: '30px 25px',
				bgcolor: getStylesByMode(mode, '#ffffff', '#2b2b2bff'),
				boxShadow: '0px 2px 11px 3px rgba(0,0,0,0.3)',
			}}
		>
			<PostStepper />
			<Formik
				initialValues={initialValues}
				onSubmit={(values, actions) => {
					handleSubmit(values, actions)
					router.push('/posts')
					setIsDialogModalPreviewOpen(false)
					setStep(1)
				}}
				validationSchema={validationSchema(step)}
			>
				<Form>
					{step === 1 && <PostTitleField />}
					{step === 2 && <PostTextArea />}

					<DialogModal
						isDialogModalOpen={isDialogModalPreviewOpen}
						setIsDialogModalOpen={setIsDialogModalPreviewOpen}
						title='Попередній перегляд'
					>
						<DialogPreviewContent />
					</DialogModal>
					<ActionButtons />
				</Form>
			</Formik>
		</Box>
	)
}

export default CreatePostWrapper
