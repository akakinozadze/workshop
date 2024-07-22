import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./features/usersSlice";
const store = configureStore({
  reducer: {
    users: usersSlice,
    members: usersSlice,
  },
});

export default store;
