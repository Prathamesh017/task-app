import { configureStore } from '@reduxjs/toolkit'
import switchReducer from '../features/switchSlice'

export default configureStore({
  reducer: {
    switch: switchReducer
  }
})