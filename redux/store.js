import { configureStore } from "@reduxjs/toolkit"
import {
  authReducer,
  globalReducer
} from './slices'
export const store = configureStore({
  reducer: {
    authReducer,
    globalReducer
  },
})

export default store;