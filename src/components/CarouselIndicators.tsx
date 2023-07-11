import { CarouselIndicator } from "./CarouselIndicator";
import styles from "./CarouselIndicators.module.scss";

interface Props {
  maxState: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
  state: number;
}

export const CarouselIndicators = (props: Props) => {
  let numbers: number[] = [];
  for (let i = 0; i <= props.maxState; i++) {
    numbers.push(i);
  }

  const indicators = numbers.map((num) => <CarouselIndicator key={num} setState={props.setState} id={num} state={props.state} />);

  return <div className={styles.container}>{indicators}</div>;
};
