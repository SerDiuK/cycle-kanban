import { KanbanBoardCard } from "../interfaces/kanban-board-card.interface";
import styles from "../KanbanBoard.module.scss";

type Props = { card: KanbanBoardCard };

const Card = ({ card }: Props) => {
  return <div className={styles.card}>{card.description}</div>;
};

export default Card;
