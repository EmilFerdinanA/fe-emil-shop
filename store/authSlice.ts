import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  username: string;
  email: string;
  role: string;
  permissions: string[];
}

interface CounterState {
  token: string;
  user: User;
}

const initialState: CounterState = {
  token: "",
  user: {
    username: "",
    email: "",
    role: "",
    permissions: [],
  },
};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export default counterSlice.reducer;
