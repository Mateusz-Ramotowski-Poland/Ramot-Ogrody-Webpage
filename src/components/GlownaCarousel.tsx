import styles from "./GlownaCarousel.module.scss";
import logo1 from "../images/glownaLogo1.webp";
import logo2 from "../images/glownaLogo2.webp";
import logo3 from "../images/glownaLogo3.webp";
import logo4 from "../images/glownaLogo4.webp";
import { TitleH3 } from "./TitleH3";

export const GlownaCarousel = () => {
  return (
    <>
      <TitleH3 text="Sprzęt z którego korzystamy" />
      <div className={styles.img_container}>
        <img src={logo2} alt="logo firmy Fiskars" className={styles.img}></img>
        <img src={logo4} alt="logo firmy Honda" className={styles.img}></img>
        <img src={logo3} alt="logo firmy Silky Saws" className={styles.img}></img>
        <img src={logo1} alt="logo firmy Stihl" className={styles.img}></img>
      </div>
    </>
  );
};
