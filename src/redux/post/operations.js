import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export const getAllPostsThunk = createAsyncThunk(
	'/posts/getAllPosts',
	async (value, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${API_KEY}/posts`, {
				params: value,
			})
			return response.data
		} catch (error) {
			return rejectWithValue(
				error.response?.data?.message ||
					'Something went wrong with uploading posts.'
			)
		}
	}
)

export const getPostInfoByIdThunk = createAsyncThunk(
	'/posts/getPostInfo/{id}',
	async (id, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${API_KEY}/posts/${id}`)
			return response.data
		} catch (error) {
			return rejectWithValue(
				error.response?.data?.message ||
					'Something went wrong with uploading post info.'
			)
		}
	}
)

export const getPostCommentsByIdThunk = createAsyncThunk(
	'/posts/getPostComments/{id}',
	async (id, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${API_KEY}/posts/${id}/comments`)
			return response.data
		} catch (error) {
			return rejectWithValue(
				error.response?.data?.message ||
					'Something went wrong with uploading post comments.' ||
					error.message
			)
		}
	}
)

export const deletePostByIdThunk = createAsyncThunk(
	'/posts/deletePost/{id}',
	async (id, { rejectWithValue }) => {
		try {
			const response = await axios.delete(`${API_KEY}/posts/${id}`)
			return response.data
		} catch (error) {
			return rejectWithValue(
				error.response?.data?.message ||
					'Something went wrong with deleting post.'
			)
		}
	}
)

export const createNewPostThunk = createAsyncThunk(
	'/posts/createNewPost/',
	async (values, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${API_KEY}/posts`, values)
			return response.data
		} catch (error) {
			return rejectWithValue(
				error.response?.data?.message ||
					'Something went wrong with creating new post.'
			)
		}
	}
)
