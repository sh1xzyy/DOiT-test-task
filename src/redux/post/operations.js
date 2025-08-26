import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export const getPostsByQueryThunk = createAsyncThunk(
	'/posts',
	async (query, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${API_KEY}/posts`, {
				params: query,
				headers: 'Content-type: application/json',
			})
			return response.data
		} catch (error) {
			return rejectWithValue('Something went wrong with uploading posts.')
		}
	}
)

export const getPostInfoByIdThunk = createAsyncThunk(
	'/posts/{id}',
	async (id, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${API_KEY}/posts/${id}`)
			return response.data
		} catch (error) {
			return rejectWithValue('Something went wrong with uploading post.')
		}
	}
)

export const deletePostByIdThunk = createAsyncThunk(
	'/posts/{id}',
	async (id, { rejectWithValue }) => {
		try {
			const response = await axios.delete(`${API_KEY}/posts/${id}`)
			return response.data
		} catch (error) {
			return rejectWithValue('Something went wrong with deleting post.')
		}
	}
)
