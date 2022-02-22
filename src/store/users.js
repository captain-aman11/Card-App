import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {},
  reducers: {
    userAdded: (state, action) => {
      return { ...state, ...action.payload.somebody };
    },

    updateUserDetails: (state, action) => {
      state.name = action.payload.name;
    },
  },
});

export const { userAdded, updateUserDetails } = userSlice.actions;
export default userSlice.reducer;
