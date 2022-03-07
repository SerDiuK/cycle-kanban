import { useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectSidebarCollapsed } from "../sidebar/store";
import Column from "./kanban-board-column/KanbanBoardColumn";
import styles from "./KanbanBoard.module.scss";
import { loadActiveKanbanBoard, selectActiveKanbanBoard } from "./store";

const KanbanBoard = () => {
  const dispatch = useAppDispatch();
  const board = useAppSelector(selectActiveKanbanBoard);
  const sidebarCollapsed = useAppSelector(selectSidebarCollapsed);

  useEffect(() => {
    dispatch(loadActiveKanbanBoard());
  }, []);

  return (
    <Scrollbars
      universal={true}
      style={{
        width: `calc(100vw - ${sidebarCollapsed ? "64px" : "240px"})`,
        height: "100vh",
      }}
    >
      <div className={styles.container} style={{}}>
        <h2>
          <span>{board.icon}</span>
          {board.name}
        </h2>
        <div className={styles.columns}>
          {board.columns.map((column, index) => (
            <Column key={index} column={column} />
          ))}
        </div>
      </div>
    </Scrollbars>
  );
};

export default KanbanBoard;
