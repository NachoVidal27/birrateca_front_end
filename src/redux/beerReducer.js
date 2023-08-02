import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const beerSlice = createSlice({
  name: "beer",
  initialState,
  reducers: {
    getAll(state, action) {
      return action.payload;
    },
    editAllBeers(state, action) {
      return state.map((beer) => {
        if (beer.id === action.payload._id) {
          return action.payload;
        } else {
          return beer;
        }
      });
    },
    create(state, action) {
      state.push(action.payload);
    },
    deleteBeer(state, action) {
      return state.filter(beer => beer.id !== action.payload._id);
    },
  },
});

export const { create, editAllBeers, deleteBeer, getAll } = beerSlice.actions;
export default beerSlice.reducer;
