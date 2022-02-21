import { KanbanBoard } from "./kanban-board.interface";

export interface KanbanBoardsSection {
  id: number;
  name: string;
  expanded: boolean;
  items: KanbanBoard[];
}
