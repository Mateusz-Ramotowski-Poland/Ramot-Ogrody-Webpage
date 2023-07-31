import styles from "./ButtonLink.module.scss";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  href: string;
}

export const ButtonLink = (props: Props) => {
  return (
    <Link to={props.href}>
      <button className={styles.button}>{props.text}</button>
    </Link>
  );
};
