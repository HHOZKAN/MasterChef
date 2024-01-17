import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk('user/login', async (userCredentials, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/api/users/login', userCredentials);
        return data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});

export const registerUser = createAsyncThunk('user/register', async (userData, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/api/users', userData);
        return data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});

export const getUserProfile = createAsyncThunk('user/profile', async (_, { rejectWithValue, getState }) => {
    const { user } = getState();
    try {
        const { data } = await axios.get('/api/users/profile', {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        });
        return data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});

// Slice
const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(getUserProfile.fulfilled, (state, action) => {
                return action.payload;
            });
    },
});

export default userSlice.reducer;