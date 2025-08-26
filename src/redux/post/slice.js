import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import {
	deletePostByIdThunk,
	getPostCommentsByIdThunk,
	getPostInfoByIdThunk,
	getPostsByQueryThunk,
} from './operations'

const initialState = {
	postsList: [],
	isLoading: false,
	postInfo: {},
	postComments: [],
}

const postSlice = createSlice({
	name: 'post',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(getPostsByQueryThunk.fulfilled, (state, action) => {
				state.postsList = action.payload
				state.isLoading = false
			})
			.addCase(deletePostByIdThunk.fulfilled, (state, action) => {
				const id = action.meta.arg
				state.postsList = state.postsList.filter(post => post.id !== id)
				state.isLoading = false
			})
			.addCase(getPostCommentsByIdThunk.fulfilled, (state, action) => {
				state.postComments = action.payload
				state.isLoading = false
			})
			.addCase(getPostInfoByIdThunk.fulfilled, (state, action) => {
				state.postInfo = action.payload
				state.isLoading = false
			})
			.addMatcher(
				isAnyOf(
					getPostsByQueryThunk.pending,
					getPostInfoByIdThunk.pending,
					deletePostByIdThunk.pending,
					getPostCommentsByIdThunk.pending
				),
				state => {
					state.isLoading = true
				}
			)
			.addMatcher(
				isAnyOf(
					getPostsByQueryThunk.rejected,
					getPostInfoByIdThunk.rejected,
					deletePostByIdThunk.rejected,
					getPostCommentsByIdThunk.rejected
				),
				state => {
					state.isLoading = false
				}
			)
	},
})

export default postSlice.reducer
