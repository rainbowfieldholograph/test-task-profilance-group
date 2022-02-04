import { configureStore } from '@reduxjs/toolkit'
import authSlice from './reducers/authSlice'
import newsReducer from './reducers/newsSlice'

export default configureStore({
  reducer: {
    news: newsReducer,
    auth: authSlice,
  },
})
