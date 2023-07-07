import hero1 from "../images/hero1.jpg";
import hero2 from "../images/hero2.jpg";
import hero3 from "../images/hero3.jpg";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container_smallest_sm}>
        <h1 className={styles.title}>Ramot ogrody</h1>
        <p className={styles.paragraph_container}>Profesjonalny sprzęt i bezpieczeństwo</p>
        <img src={hero1} alt="kwitnące drzewo w ogrodzie" className={styles.photo}></img>
      </div>

      <div className={styles.container_md_xxxlg}>
        <h1 className={styles.title}>Ramot ogrody</h1>
        <div className={styles.paragraph_container}>
          <p className={styles.paragraph}>Płatność za ułożone drzewo</p>
          <p className={styles.paragraph}>Profesjonalny sprzęt i bezpieczeństwo</p>
          <p className={styles.paragraph}>Dokładność w pracach ogrodniczych</p>
        </div>
        <ul>
          <img src={hero1} alt="kwitnące drzewo w ogrodzie" className={styles.photo}></img>
          <img src={hero2} alt="ułożone drzewo do palenia" className={styles.photo}></img>
          <img src={hero3} alt="pilarz ścianający drzewo" className={styles.photo}></img>
        </ul>
      </div>
    </div>
  );
};
