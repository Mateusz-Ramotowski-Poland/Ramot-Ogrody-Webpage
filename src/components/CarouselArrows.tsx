import styles from "./CarouselArrows.module.scss";
import { IonIcon } from "@ionic/react";
import { caretBackOutline, caretForwardOutline } from "ionicons/icons";

interface Props {
  maxState: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
  state: number;
}

export const CarouselArrows = (props: Props) => {
  const handleLeftClick = () => {
    if (props.state > 0) {
      props.setState((prev) => prev - 1);
    } else {
      props.setState(props.maxState);
    }
  };

  const handleRightClick = () => {
    if (props.state < props.maxState) {
      props.setState((prev) => prev + 1);
    } else {
      props.setState(0);
    }
  };

  return (
    <div>
      <IonIcon icon={caretBackOutline} className={styles.icon_left} onClick={handleLeftClick} />
      <IonIcon icon={caretForwardOutline} className={styles.icon_right} onClick={handleRightClick} />
    </div>
  );
};
