import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { persistReducer, persistStore } from "redux-persist";
import { storage } from "@/utils/cookieStorage";

const authPersistConfig = {
  key: "auth",
  storage,
  // whitelist: ['token', 'user', 'role', 'permissions'] /**Field Apa saja yang ingin di persist */
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
