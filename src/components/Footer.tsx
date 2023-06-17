import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      Copyright © 2023 by{" "}
      <a href="https://mateusz-ramotowski-poland.github.io/portfolio-webpage/" target="_blank">
        Mateusz Ramotowski
      </a>
      . All rights reserved
    </footer>
  );
};
