import { FaFile, FaPlus, FaRss, FaSearch, FaSearchengin } from "react-icons/fa";
import styles from "../Sidebar.module.scss";
import ActionsMenuItem from "./ActionsMenuItem";

const ActionsMenu = () => {
  return (
    <div className={styles["actions-menu"]}>
      <ActionsMenuItem text="Search" icon={<FaSearch />} />
      <ActionsMenuItem text="Notifications" icon={<FaRss />} />
      <ActionsMenuItem text="Commands" icon={<FaSearchengin />} />
      <ActionsMenuItem text="Create doc" icon={<FaPlus />} />
      <ActionsMenuItem text="All docs" icon={<FaFile />} />
    </div>
  );
};

export default ActionsMenu;
