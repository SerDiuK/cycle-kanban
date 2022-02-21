import styles from "../Sidebar.module.scss";

type Props = { text: string; icon: any };

const ActionsMenuItem = ({ text, icon }: Props) => {
  return (
    <div className={styles["actions-menu-item"]}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default ActionsMenuItem;
