import { ILoginDAO, User } from "@/app/login/dao";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  token: string;
  user: User;
  isLogin: boolean;
}

const initialState: CounterState = {
  token: "",
  user: {
    username: "",
    email: "",
    role: "",
    permissions: [],
  },
  isLogin: false,
};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<ILoginDAO>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLogin = true;
    },
  },
});

export const { setAuth } = counterSlice.actions;
export default counterSlice.reducer;
