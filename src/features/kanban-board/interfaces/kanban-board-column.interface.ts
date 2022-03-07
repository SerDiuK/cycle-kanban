import { KanbanBoardCard } from "./kanban-board-card.interface";

export interface KanbanBoardColumn {
  id: number;
  name: string;
  cards: KanbanBoardCard[];
  collapsed: boolean;
}
