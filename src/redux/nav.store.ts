import { createSlice } from "@reduxjs/toolkit";

export interface NavState {
 selected: string;
}

const initialState: NavState = {
 selected: "#who",
};

const navSlice = createSlice({
 name: "color",
 initialState,
 reducers: {
  setSelected(state, action) {
   state.selected = action.payload;
  },
  resetState() {
   return initialState;
  },
 },
});

export const navActions = navSlice.actions;
export const navReducer = navSlice.reducer;
