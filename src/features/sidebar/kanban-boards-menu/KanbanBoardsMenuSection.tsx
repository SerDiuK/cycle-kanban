import { FaCaretRight } from "react-icons/fa";
import { KanbanBoardsSection } from "../interfaces/kanban-board-section.interface";
import styles from "../Sidebar.module.scss";
import KanbanBoardsMenuItem from "./KanbanBoardsMenuItem";

type Props = { section: KanbanBoardsSection };

const KanbanBoardsMenuSection = ({ section }: Props) => {
  const expandedStyle = section.expanded
    ? styles["kanban-boards-menu-section-expanded"]
    : "";

  console.log(section.expanded);

  return (
    <div className={`${styles["kanban-boards-menu-section"]} ${expandedStyle}`}>
      <div className={styles["section-title"]}>
        <span className={styles["section-caret-wrapper"]}>
          <FaCaretRight />
        </span>
        <span className={styles["section-name"]}>{section.name}</span>
      </div>
      {section.expanded &&
        section.items.map((board) => (
          <KanbanBoardsMenuItem key={board.id} board={board} />
        ))}
    </div>
  );
};

export default KanbanBoardsMenuSection;
