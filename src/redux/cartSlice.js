import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const exist = state.find(
        (value) =>
          value.id == action.payload.id && action.payload.color == value.color
      );
      if (exist) {
        exist.count = Number(exist.count);
        exist.count += Number(action.payload.count);
      } else {
        state.push(action.payload);
      }
    },
    remove: (state, action) => {
      state.filter(
        (value) =>
          value.id != action.payload.id && action.payload.id == value.color
      );
    },
    clear: (state, action) => {
      state = [];
    },
    update: (state, action) => {
      state.map((value) => {
        if (
          value.id == action.payload.id &&
          action.payload.color == value.color
        ) {
        }
      });
    },
  },
});

export default cartSlice.reducer;
export const { add, remove, clear, update } = cartSlice.actions;
