import { useEffect, useState } from "react";
import hero1 from "../images/hero1.webp";
import hero2 from "../images/hero2.webp";
import hero3 from "../images/hero3.webp";
import { CarouselIndicators } from "../components";
import styles from "./Hero.module.scss";

const carouselItems = [
  {
    description: "Dokładność w pracach ogrodniczych",
    imgAlt: "kwitnące drzewo w ogrodzie",
    imgSrc: hero1,
  },
  {
    description: "Płatność za ułożone drzewo",
    imgAlt: "ułożone drzewo do palenia",
    imgSrc: hero2,
  },
  {
    description: "Profesjonalny sprzęt i bezpieczeństwo",
    imgAlt: "pilarz ścinający drzewo",
    imgSrc: hero3,
  },
];

export const Hero = () => {
  const [state, setState] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const maxState = 2;

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width < 768) {
      const id = setInterval(() => {
        if (state < maxState) {
          setState(state + 1);
        } else {
          setState(0);
        }
      }, 3000);

      return () => {
        clearInterval(id);
      };
    }
  });

  return (
    <div className={styles.hero}>
      <div className={styles.container_smallest_sm}>
        <h1 className={styles.title}>Ramot ogrody</h1>
        <p className={styles.paragraph_container}>{carouselItems[state].description}</p>
        <img src={carouselItems[state].imgSrc} alt={carouselItems[state].imgAlt} className={styles.photo}></img>
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
      <CarouselIndicators maxState={maxState} state={state} setState={setState} styles="hero" />
    </div>
  );
};
