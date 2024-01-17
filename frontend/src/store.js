// app/store.js
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../features/dataSlice'
import userReducer from '../features/userSlice';

export default configureStore({
  reducer: {
    data: dataReducer,
    user: userReducer,
  },
})