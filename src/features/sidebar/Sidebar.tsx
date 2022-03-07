import Image from "next/image";
import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import DropdownButton from "../../components/dropdown-button/DropdownButton";
import ActionsMenu from "./actions-menu/ActionsMenu";
import KanbanBoardsMenu from "./kanban-boards-menu/KanbanBoardsMenu";
import styles from "./Sidebar.module.scss";
import { selectSidebarCollapsed, toggleSidebar } from "./store";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const collapsed = useAppSelector(selectSidebarCollapsed);

  const [showToggle, setShowToggle] = useState(false);

  const collapsedClass = collapsed ? styles["sidebar-collapsed"] : "";

  return (
    <div className={`${styles.sidebar} ${collapsedClass}`}>
      <div
        className={styles["toggle-activation-area"]}
        onMouseEnter={() => setShowToggle(true)}
        onMouseLeave={() => setShowToggle(false)}
      >
        {showToggle && (
          <>
            <div className={styles["toggle-gradient"]}></div>
            <button
              className={styles["toggle-button"]}
              onClick={() => dispatch(toggleSidebar())}
            >
              <FaAngleLeft></FaAngleLeft>
            </button>
          </>
        )}
      </div>

      <div className={styles.header}>
        <DropdownButton square={collapsed}>
          <Image alt="" src="/assets/logo.svg" height={20} width={20} />
          {collapsed || (
            <span
              style={{ marginLeft: "8px", fontSize: "15px", fontWeight: 500 }}
            >
              Cycle
            </span>
          )}
        </DropdownButton>

        <DropdownButton square={collapsed}>
          <div className={styles["avatar-wrapper"]}>
            <Image src="/assets/profile.jpeg" alt="" width={20} height={20} />
          </div>
        </DropdownButton>
      </div>
      <div className={styles.divider}></div>
      <ActionsMenu />
      <div className={styles.divider}></div>
      <KanbanBoardsMenu />
    </div>
  );
};

export default Sidebar;
