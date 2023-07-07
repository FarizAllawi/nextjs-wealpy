import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const globalState = {
  windowSize: {},

  isLoading: false,
  loadingMessage: "",

  isError: false,
  errors: [],

  dataCategory: [],

}

export const global = createSlice({
  name: "global",
  initialState: globalState,
  reducers: {
    setWindowSize: (state, action) => {
      return {
        windowSize: action.payload
      }
    },
    setErrors: (state, action) => {
      return {
        errors: action.payload.errors,
      }
    },
    setLoading: (state, action) => {
      return {
        isLoading: action.payload.isLoading,
        loadingMessage: action.payload.loadingMessage,
      }
    },
    setDataCategory: (state, action) => {
      return {
        dataCategory: action.payload
      }
    }
  }
})

export const {
  setWindowSize,
  setErrors,
  setLoading,
  setDataCategory
} = global.actions;

export default global.reducer;