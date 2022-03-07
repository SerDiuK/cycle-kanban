import { KanbanBoardColumn } from "./kanban-board-column.interface";

export interface ActiveKanbanBoard {
  name: string;
  icon: string;
  columns: KanbanBoardColumn[];
}
