import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import type { RootState } from "../../../app/store";
import { KanbanBoardsSection } from "../interfaces/kanban-board-section.interface";

export type SidebarState = {
  collapsed: boolean;
  sections: KanbanBoardsSection[];
};

const initialState: SidebarState = {
  collapsed: false,
  sections: [],
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.collapsed = !state.collapsed;
    },
    loadSectionsSuccess: (
      state,
      action: PayloadAction<KanbanBoardsSection[]>
    ) => {
      state.sections = action.payload;
    },
  },
});
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const { toggleSidebar, loadSectionsSuccess } = sidebarSlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectSidebarCollapsed = (state: RootState) =>
  state.sidebar.collapsed;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectKanbanBoardSections = (state: RootState) =>
  state.sidebar.sections;

// exporting the reducer here, as we need to add this to the store
export default sidebarSlice.reducer;

export const loadSections = () => async (dispatch: Dispatch<AnyAction>) => {
  const response = await fetch("http://localhost:3001/sections").then((res) =>
    res.json()
  );

  dispatch(loadSectionsSuccess(response));
};
