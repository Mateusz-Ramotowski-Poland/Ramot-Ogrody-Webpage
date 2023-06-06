import styles from "./AccordionItem.module.scss";
import { IonIcon } from "@ionic/react";
import { arrowDownOutline } from "../../node_modules/ionicons/icons";

interface Props {
  answer: string;
  question: string;
}

export const AccordionItem = (props: Props) => {
  return (
    <div className={styles.accordion_item}>
      <div>
        <span>{props.question}</span>
        <IonIcon icon={arrowDownOutline} className={styles.icon} />
      </div>
      <div className={styles.answer}>{props.answer}</div>
    </div>
  );
};
