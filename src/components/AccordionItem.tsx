import styles from "./AccordionItem.module.scss";
import { IonIcon } from "@ionic/react";
import { arrowDownOutline, arrowUpOutline } from "../../node_modules/ionicons/icons";
import { useState } from "react";
import classNames from "classnames/bind";

interface Props {
  answer: string;
  question: string;
}

export const AccordionItem = (props: Props) => {
  const [isActive, setIsActive] = useState(false);
  const cx = classNames.bind(styles);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  let answerClass = cx({
    answer: true,
    hidden: !isActive,
  });

  let activeIcon = isActive ? arrowUpOutline : arrowDownOutline;

  return (
    <div className={styles.accordion_item}>
      <div className={styles.question} onClick={handleClick}>
        <span>{props.question}</span>
        <IonIcon icon={activeIcon} className={styles.icon} />
      </div>
      <div className={answerClass}>{props.answer}</div>
    </div>
  );
};
