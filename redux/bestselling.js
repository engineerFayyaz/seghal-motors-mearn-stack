import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const bestselling = createSlice({
  name: 'bestselling',
  initialState,
  reducers: {
    addList: (state, action) => {
      console.log("action.payload", action.payload)
      return action.payload
    },
  }
});

export const { addList } = bestselling.actions


export default bestselling.reducer;
