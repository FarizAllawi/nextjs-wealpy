import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const authState = {
  id: "",
  name: "",
  username: "",
  email: "",
  accessToken: "",
  refreshToken: "",
}

export const auth = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    loOut: () => {
      return authState;
    },
    login: (state, action) => {
      return {
        id: action.payload.id,
        name: action.payload.name,
        username: action.payload.username,
        email: action.payload.email,
        accessToken: action.payload.accessToken
      }
    }
  }
})

export const {
  login,
  logOut
} = auth.actions;

export default auth.reducer;