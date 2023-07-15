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
      state.memberId = action.paylod.memberId;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
    },
    logOut(state, action) {
      return null;
    },
  },
});

export const { login, logOut, edit, create } = userSlice.actions;
export default userSlice.reducer;
