import { configureStore } from '@reduxjs/toolkit'
import residentReducer from '../redux/slices/resident.slice'
import prescriptionSlice from './slices/prescription.slice'
export const store = configureStore({
  reducer: {
    residents: residentReducer,
    prescription: prescriptionSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch