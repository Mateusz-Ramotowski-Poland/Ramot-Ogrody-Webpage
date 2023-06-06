import styles from "./TitleH2.module.scss";

interface Props {
  text: string;
}

export const TitleH2 = (props: Props) => {
  return <h2 className={styles.h2}>{props.text}</h2>;
};
