import { configureStore } from '@reduxjs/toolkit'
import { userSlicer } from './features/users/UserSlice';

export const store = configureStore({
    reducer: {
        user: userSlicer.reducer
    },
})