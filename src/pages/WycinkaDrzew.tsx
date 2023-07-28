import wycinka1 from "../images/wycinka1.webp";
import wycinka2 from "../images/wycinka2.webp";
import wycinka3 from "../images/wycinka3.webp";
import wycinka4 from "../images/wycinka4.webp";
import wycinka5 from "../images/wycinka5.webp";
import wycinka6 from "../images/wycinka6.webp";
import wycinka7 from "../images/wycinka7.webp";
import { BigImageCarousel, SmallImagesGallery, TitleH2 } from "../components";
import styles from "./WycinkaDrzew.module.scss";
import { Image } from "../pages";
import { useState } from "react";

const images: Image[] = [
  {
    alt: "Pilarz",
    id: 0,
    source: wycinka1,
  },
  {
    alt: "Pilarz",
    id: 1,
    source: wycinka2,
  },
  {
    alt: "Pilarz",
    id: 2,
    source: wycinka3,
  },
  {
    alt: "Pilarz",
    id: 3,
    source: wycinka4,
  },
  {
    alt: "Pilarz",
    id: 4,
    source: wycinka5,
  },
  {
    alt: "Pilarz",
    id: 5,
    source: wycinka6,
  },
  {
    alt: "Pilarz",
    id: 6,
    source: wycinka7,
  },
];

export const WycinkaDrzew = () => {
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);
  const [carouselImage, setCarouselImage] = useState(0);

  return (
    <>
      <TitleH2 text="Wycinka drzew" />
      <p className={styles.introduction}>Kliknij zdjęcie aby je powiększyć</p>
      <SmallImagesGallery images={images} setIsCarouselVisible={setIsCarouselVisible} setCarouselImage={setCarouselImage} />
      {isCarouselVisible && (
        <BigImageCarousel
          carouselImage={carouselImage}
          images={images}
          setCarouselImage={setCarouselImage}
          setIsCarouselVisible={setIsCarouselVisible}
          stylesIndicators="wycinka"
        />
      )}
    </>
  );
};
