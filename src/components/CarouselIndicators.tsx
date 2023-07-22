import { CarouselIndicator } from "./CarouselIndicator";
import hero from "./HeroIndicators.module.scss";
import certyfikaty from "./CertyfikatyIndicators.module.scss";

interface Props {
  maxState: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
  state: number;
  styles: "hero" | "certyfikaty";
}

export const CarouselIndicators = (props: Props) => {
  const styles = props.styles === "hero" ? hero : certyfikaty;

  let numbers: number[] = [];
  for (let i = 0; i <= props.maxState; i++) {
    numbers.push(i);
  }

  const indicators = numbers.map((num) => <CarouselIndicator key={num} setState={props.setState} id={num} state={props.state} />);

  return <div className={styles.container}>{indicators}</div>;
};
