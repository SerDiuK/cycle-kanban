import { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { KanbanBoard } from "../interfaces/kanban-board.interface";
import styles from "../Sidebar.module.scss";

type Props = {
  board: KanbanBoard;
};

const KanbanBoardsMenuItem = ({ board }: Props) => {
  const activeStyle = board.active ? styles["active"] : "";
  const [showExtra, setShowExtra] = useState(false);

  return (
    <div
      className={`${styles["kanban-boards-menu-item"]} ${activeStyle}`}
      onMouseEnter={() => setShowExtra(true)}
      onMouseLeave={() => setShowExtra(false)}
    >
      <span className={styles["kanban-boards-menu-item-name"]}>
        <span>{board.icon}</span>
        {board.text}
      </span>
      {showExtra && (
        <span className={styles["ellipsis-wrapper"]}>{<FaEllipsisH />}</span>
      )}
    </div>
  );
};

export default KanbanBoardsMenuItem;
