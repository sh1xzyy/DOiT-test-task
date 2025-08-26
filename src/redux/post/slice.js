import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import {
	deletePostByIdThunk,
	getPostInfoByIdThunk,
	getPostsByQueryThunk,
} from './operations'

const initialState = {
	postsList: [],
	isLoading: false,
	postInfo: [],
}

const postSlice = createSlice({
	name: 'post',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(getPostsByQueryThunk.fulfilled, (state, { payload }) => {
				state.postsList = payload
				state.isLoading = false
			})
			.addCase(deletePostByIdThunk.fulfilled, (state, action) => {
				const id = action.meta.arg
				state.postsList = state.postsList.filter(post => post.id !== id)
				state.isLoading = false
			})
			.addMatcher(
				isAnyOf(
					getPostsByQueryThunk.pending,
					getPostInfoByIdThunk.pending,
					deletePostByIdThunk.pending
				),
				state => {
					state.isLoading = true
				}
			)
			.addMatcher(
				isAnyOf(
					getPostsByQueryThunk.rejected,
					getPostInfoByIdThunk.rejected,
					deletePostByIdThunk.rejected
				),
				state => {
					state.isLoading = false
				}
			)
	},
})

export default postSlice.reducer
