import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  members: [],
};

const usersSlice = createSlice({
  initialState,
  name: "Users",
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    addMember: (state, action) => {
      state.members.push(action.payload);
    },
  },
});


export const { addUser } = usersSlice.actions;
export const { addMember } = usersSlice.actions;
export default usersSlice.reducer;
