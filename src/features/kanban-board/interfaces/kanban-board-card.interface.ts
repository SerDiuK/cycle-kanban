import { Tag } from "./tag.interface";

export interface KanbanBoardCard {
  description: string;
  tags: Tag[];
}
