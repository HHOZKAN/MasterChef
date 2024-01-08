// features/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get('http://localhost:5000/api/cours')
  return response.data
})

const dataSlice = createSlice({
  name: 'data',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      return action.payload
    })
  },
})

export default dataSlice.reducer