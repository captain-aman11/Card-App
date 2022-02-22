import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
