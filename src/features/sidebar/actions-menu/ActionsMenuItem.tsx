import { useSelector } from "react-redux";
import styles from "../Sidebar.module.scss";
import { selectSidebarCollapsed } from "../store";

type Props = { text: string; icon: any };

const ActionsMenuItem = ({ text, icon }: Props) => {
  const sidebarCollapsed = useSelector(selectSidebarCollapsed);

  return (
    <div className={styles["actions-menu-item"]}>
      {icon}
      {sidebarCollapsed || <span>{text}</span>}
    </div>
  );
};

export default ActionsMenuItem;
