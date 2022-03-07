import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { KanbanBoardsSection } from "../interfaces/kanban-board-section.interface";
import styles from "../Sidebar.module.scss";
import { selectKanbanBoardSections, loadSections } from "../store";
import KanbanBoardsMenuSection from "./KanbanBoardsMenuSection";

const newSections: KanbanBoardsSection[] = [
  {
    id: 1,
    name: "Starred",
    expanded: true,
    items: [
      { id: 1, text: "Feedback 2.0", icon: "🦊", active: false },
      { id: 2, text: "Roadmap Tech", icon: "🏆", active: false },
      { id: 3, text: "Design", icon: "🎨", active: true },
      { id: 4, text: "Github Feedback", icon: "🤖", active: false },
      { id: 5, text: "Improvements", icon: "⚛️", active: false },
      { id: 6, text: "Bugs", icon: "🚀", active: false },
      { id: 7, text: "Sprint 4", icon: "⌛️", active: false },
    ],
  },
  {
    id: 2,
    name: "Run planning",
    expanded: false,
    items: [],
  },
  {
    id: 3,
    name: "Boards",
    expanded: false,
    items: [],
  },
];

const KanbanBoardsMenu = () => {
  const dispatch = useAppDispatch();
  const sections = useAppSelector(selectKanbanBoardSections);

  useEffect(() => {
    dispatch(loadSections());
  }, []);

  return (
    <div className={styles["kanban-boards-menu"]}>
      {sections.map((section) => (
        <KanbanBoardsMenuSection key={section.id} section={section} />
      ))}
    </div>
  );
};

export default KanbanBoardsMenu;
