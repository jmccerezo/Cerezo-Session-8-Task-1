import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import usersSlice from "./slices/userSlice";
import { postsAPI } from "./slices/postsAPI";

export const store = configureStore({
  reducer: {
    userData: usersSlice,
    [postsAPI.reducerPath]: postsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsAPI.middleware),
});

setupListeners(store.dispatch);
