import { FaCaretDown } from "react-icons/fa";
import { useAppDispatch } from "../../../app/hooks";
import { KanbanBoardColumn } from "../interfaces/kanban-board-column.interface";
import styles from "../KanbanBoard.module.scss";
import { toggleColumn } from "../store";
import Card from "./KanbanBoardCard";
import { Scrollbars } from "react-custom-scrollbars";

type Props = { column: KanbanBoardColumn };

const Column = ({ column }: Props) => {
  const dispatch = useAppDispatch();

  const collapsedClass = column.collapsed ? styles["column-collapsed"] : "";

  return (
    <div className={`${styles.column} ${collapsedClass}`}>
      <div className={styles["column-header"]}>
        <span onClick={() => dispatch(toggleColumn(column.id))}>
          <FaCaretDown />
        </span>

        <h4>{column.name}</h4>
      </div>
      <Scrollbars
        universal={true}
        autoHeight={true}
        autoHeightMax={"calc(100vh - 160px)"}
        style={{ width: 254 }}
      >
        <>
          {column.collapsed ||
            column.cards.map((card, i) => <Card key={i} card={card} />)}
          {column.collapsed || (
            <div className={styles["button-new-doc"]}>+ New doc</div>
          )}
        </>
      </Scrollbars>
    </div>
  );
};

export default Column;
