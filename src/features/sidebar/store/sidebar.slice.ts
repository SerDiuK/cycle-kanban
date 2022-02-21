import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    loadSections: (state, action: PayloadAction<KanbanBoardsSection[]>) => {
      state.sections = action.payload;
    },
  },
});
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const { toggleSidebar, loadSections } = sidebarSlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectSidebarCollapsed = (state: RootState) =>
  state.sidebar.collapsed;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectKanbanBoardSections = (state: RootState) =>
  state.sidebar.sections;

// exporting the reducer here, as we need to add this to the store
export default sidebarSlice.reducer;
