import { PropsWithChildren } from "react";
import styles from "./Container1440.module.scss";

export const Container1440 = (props: PropsWithChildren) => {
  return <div className={styles.container}>{props.children} </div>;
};
