import { PropsWithChildren } from "react";
import styles from "./SectionContainer.module.scss";

export const SectionContainer = (props: PropsWithChildren) => {
  return <div className={styles.container}>{props.children}</div>;
};
