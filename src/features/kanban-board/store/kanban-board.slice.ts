import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { useAppSelector } from "../../../app/hooks";
import type { RootState } from "../../../app/store";
import { ActiveKanbanBoard } from "../interfaces/active-kanban-board.interface";
import { KanbanBoardColumn } from "../interfaces/kanban-board-column.interface";

export type KanbanBoardState = {
  activeBoard: ActiveKanbanBoard;
};

const initialState: KanbanBoardState = {
  activeBoard: {
    name: "",
    icon: "",
    columns: [],
  },
};

export const kanbanBoardSlice = createSlice({
  name: "kanbanBoard",
  initialState,
  reducers: {
    toggleColumnSuccess: (state, action: PayloadAction<number>) => {
      const currentColumn = state.activeBoard.columns.find(
        (col) => col.id === action.payload
      ) as KanbanBoardColumn;

      currentColumn.collapsed = !currentColumn.collapsed;
    },
    loadActiveKanbanBoardSuccess: (
      state,
      action: PayloadAction<ActiveKanbanBoard>
    ) => {
      state.activeBoard = action.payload;
    },
  },
});
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const { loadActiveKanbanBoardSuccess, toggleColumnSuccess } =
  kanbanBoardSlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectActiveKanbanBoard = (state: RootState) =>
  state.kanbanBoard.activeBoard;

// exporting the reducer here, as we need to add this to the store
export default kanbanBoardSlice.reducer;

// Define a thunk that dispatches those action creators
export const loadActiveKanbanBoard =
  () => async (dispatch: Dispatch<AnyAction>) => {
    const response = await fetch("http://localhost:3001/active-board").then(
      (res) => res.json()
    );

    dispatch(loadActiveKanbanBoardSuccess(response));
  };

// Define a thunk that dispatches those action creators
export const toggleColumn =
  (id: number) =>
  async (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    dispatch(toggleColumnSuccess(id));

    const board = getState().kanbanBoard.activeBoard;

    const response = await fetch("http://localhost:3001/active-board", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(board),
    }).then((res) => res.json());

    console.log(response);
  };
