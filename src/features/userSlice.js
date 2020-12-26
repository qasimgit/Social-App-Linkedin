import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = null;
    },
  },
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;

// selectors
export const selectUser = (state) => state.user.value;

export default userSlice.reducer;
