import styles from "./TitleH3.module.scss";

interface Props {
  text: string;
}

export const TitleH3 = (props: Props) => {
  return <h3 className={styles.title}>{props.text}</h3>;
};
