import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    create(state, action) {
      return [...state, action.payload];
    },
    login(state, action) {
      return action.payload;
    },
    edit(state, action) {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
    },
    logOut(state, action) {
      return null;
    },
  },
});

export const { login, logOut, edit, create } = userSlice.actions;
export default userSlice.reducer;
