import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import classNames from "classnames/bind";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const cx = classNames.bind(styles);
  let headerClass = cx({
    header: true,
    active: isActive,
  });
  let burgerClass = cx({
    nav_burger: true,
    active: isActive,
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 992) setIsActive(false);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleClick() {
    setIsActive((prev) => !prev);
  }

  return (
    <header className={headerClass}>
      <nav className={styles.nav}>
        <div className={styles.nav_links}>
          <button className={burgerClass} onClick={handleClick}>
            <div className={styles.nav_burger_line}></div>
          </button>
          <ul className={styles.nav_ul}>
            <li className={styles.nav_li}>
              <Link to="/" className={styles.nav_link}>
                Ramot Ogrody
              </Link>
            </li>
            <li className={styles.nav_li}>
              <Link to="/certyfikaty" className={styles.nav_link}>
                Certyfikaty
              </Link>
            </li>
            <li className={styles.nav_li}>
              <Link to="/faq" className={styles.nav_link}>
                Faq
              </Link>
            </li>
            <li className={styles.nav_li}>
              <Link to="/kontakt" className={styles.nav_link}>
                Kontakt
              </Link>
            </li>
            <li className={styles.nav_li}>
              <Link to="/pielegnacja-ogrodow" className={styles.nav_link}>
                Pielęgnacja ogrodów
              </Link>
            </li>
            <li className={styles.nav_li}>
              <Link to="/sprzedaz-drzewa" className={styles.nav_link}>
                Sprzedaż drzewa
              </Link>
            </li>
            <li className={styles.nav_li}>
              <Link to="/wycinka-drzew" className={styles.nav_link}>
                Wycinka drzew
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
