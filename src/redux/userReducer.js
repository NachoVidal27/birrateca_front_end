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
      state.memberId = action.payload.memberId;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
    },
    logOut(state, action) {
      return null;
    },
    newUserBeer(state, action) {
      state.beers = [...state.beers, action.payload];
    },
  },
});

export const { login, logOut, edit, create, newUserBeer } = userSlice.actions;
export default userSlice.reducer;
