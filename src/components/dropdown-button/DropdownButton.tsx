import { FaAngleDown } from "react-icons/fa";
import styles from "./DropdownButton.module.scss";

const DropdownButton = ({ children }: any) => {
  return (
    <div className={styles["dropdown-button"]}>
      <div className={styles.content}>{children}</div>
      <FaAngleDown />
    </div>
  );
};

export default DropdownButton;
