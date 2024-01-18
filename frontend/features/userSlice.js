import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk('user/login', async (userData, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('http://localhost:5000/api/users/login', userData);
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

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        token: null,
    },
    reducers: {
        logoutUser: (state) => {
            state.isAuthenticated = false;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.token = action.payload.token;
            })
            // Gérer le token pour registerUser.fulfilled si nécessaire
            .addCase(getUserProfile.fulfilled, (state, action) => {
                return action.payload;
            });
    },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;