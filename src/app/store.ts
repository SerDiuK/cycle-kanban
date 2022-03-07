import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebar/store/sidebar.slice";
import kanbanBoardReducer from "../features/kanban-board/store/kanban-board.slice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    kanbanBoard: kanbanBoardReducer,
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
