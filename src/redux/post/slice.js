import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import {
	createNewPostThunk,
	deletePostByIdThunk,
	getPostCommentsByIdThunk,
	getPostInfoByIdThunk,
	getAllPostsThunk,
} from './operations'

const initialState = {
	allPosts: [],
	filteredList: [],
	isLoading: false,
	postInfo: {},
	postComments: [],
}

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		filterPosts(state, action) {
			const value = action.payload.title
			state.filteredList = state.allPosts.filter(post =>
				post.title.toLowerCase().includes(value)
			)
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getAllPostsThunk.fulfilled, (state, action) => {
				state.allPosts = action.payload
				state.filteredList = action.payload
				state.isLoading = false
			})
			.addCase(deletePostByIdThunk.fulfilled, (state, action) => {
				const id = action.meta.arg
				state.allPosts = state.allPosts.filter(post => post.id !== id)
				state.filteredList = state.filteredList.filter(post => post.id !== id)
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
			.addCase(createNewPostThunk.fulfilled, (state, action) => {
				state.allPosts.push(action.payload)
				state.filteredList.push(action.payload)
				state.isLoading = false
			})
			.addMatcher(
				isAnyOf(
					getAllPostsThunk.pending,
					getPostInfoByIdThunk.pending,
					deletePostByIdThunk.pending,
					getPostCommentsByIdThunk.pending,
					createNewPostThunk.pending
				),
				state => {
					state.isLoading = true
				}
			)
			.addMatcher(
				isAnyOf(
					getAllPostsThunk.rejected,
					getPostInfoByIdThunk.rejected,
					deletePostByIdThunk.rejected,
					getPostCommentsByIdThunk.rejected,
					createNewPostThunk.rejected
				),
				state => {
					state.isLoading = false
				}
			)
	},
})

export const { filterPosts } = postSlice.actions
export default postSlice.reducer
