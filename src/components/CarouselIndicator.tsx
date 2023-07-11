import styles from "./CarouselIndicator.module.scss";
import classNames from "classnames/bind";

interface Props {
  id: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
  state: number;
}

export const CarouselIndicator = (props: Props) => {
  const cx = classNames.bind(styles);
  const classes = cx({
    indicator: true,
    active: props.id === props.state,
  });

  const handleClick = () => {
    props.setState(props.id);
  };

  return <div className={classes} onClick={handleClick}></div>;
};
