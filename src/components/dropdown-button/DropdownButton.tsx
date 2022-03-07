import { FaAngleDown } from "react-icons/fa";
import styles from "./DropdownButton.module.scss";

const DropdownButton = ({ children, square }: any) => {
  const squareClass = square ? styles.square : "";

  return (
    <div className={`${styles["dropdown-button"]} ${squareClass}`}>
      <div className={styles.content}>{children}</div>
      {square || <FaAngleDown />}
    </div>
  );
};

export default DropdownButton;
