import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const beerSlice = createSlice({
  name: "beer",
  initialState,
  reducers: {
    getAll(state, action) {
      console.log(action.payload);
      return action.payload;
    },
    edit(state, action) {
      state.beerId = action.payload.beerId;
      state.style = action.payload.style;
      state.description = action.payload.description;
      state.ingredients = action.payload.ingredients;
      state.abv = action.payload.abv;
      state.photo = action.payload.photo;
      state.brewDate = action.payload.brewDate;
      state.memberId = action.payload.beerId;
    },
    create(state, action) {
      return [...state, action.payload];
    },
  },
});

export const { create, edit, getAll } = beerSlice.actions;
export default beerSlice.reducer;
