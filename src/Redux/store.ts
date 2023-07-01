import { configureStore } from '@reduxjs/toolkit'
import toggleReducer from './toggleSlice'

export type RootState = ReturnType<typeof store.getState>

const store = configureStore({
  reducer: {
    toggleSlice: toggleReducer,
  },
})

export default store
