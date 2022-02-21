import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebar/store/sidebar.slice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
