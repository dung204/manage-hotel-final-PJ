import localStorageService from "@/common/services/localStorage.service";
import userApi from "@/features/user/user.service";
import { User } from "@/features/user/user.types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: undefined as User | undefined,
};

export type AuthState = typeof initialState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload.user;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.isAuth = false;
        state.user = undefined;
      });
  },
});

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (user: Pick<User, "username" | "password">) => {
    const response = await userApi.checkLogin(user);
    return response.data;
  },
);
