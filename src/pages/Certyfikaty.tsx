import certyfikaty1 from "../images/certyfikaty1.webp";
import certyfikaty2 from "../images/certyfikaty2.webp";
import certyfikaty3 from "../images/certyfikaty3.webp";
import certyfikaty4 from "../images/certyfikaty4.webp";
import { useState } from "react";
import { CertyfikatyBigImageCarousel, CertyfikatySmallImagesGallery, TitleH2 } from "../components";
import styles from "./Certyfikaty.module.scss";

export interface Image {
  alt: string;
  figcaption: string;
  id: number;
  source: string;
}

const images: Image[] = [
  {
    alt: "Kurs: 'Pilarz-drwal, operator pilarki. Pięlęgnacja drzew'",
    figcaption: "Kurs: 'Pilarz-drwal, operator pilarki. Pięlęgnacja drzew",
    id: 0,
    source: certyfikaty1,
  },
  {
    alt: "Szkolenie: 'Zasady cięcia drzew i krzewów ozdobnych'",
    figcaption: "Szkolenie: 'Zasady cięcia drzew i krzewów ozdobnych'",
    id: 1,
    source: certyfikaty2,
  },
  {
    alt: "Kurs: 'Praca na wysokości. Praca na drzewach - arborysta'",
    figcaption: "Kurs: 'Praca na wysokości. Praca na drzewach - arborysta'",
    id: 2,
    source: certyfikaty3,
  },
  {
    alt: "Szkolenie z zakresu wzmocnień mechanicznych drzew",
    figcaption: "Szkolenie z zakresu wzmocnień mechanicznych drzew",
    id: 3,
    source: certyfikaty4,
  },
];

export const Certyfikaty = () => {
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);
  const [carouselImage, setCarouselImage] = useState(0);

  return (
    <>
      <TitleH2 text="Certyfikaty" />
      <p className={styles.introduction}>Kliknij zdjęcie aby je powiększyć</p>
      <CertyfikatySmallImagesGallery images={images} setIsCarouselVisible={setIsCarouselVisible} setCarouselImage={setCarouselImage} />
      {isCarouselVisible && (
        <CertyfikatyBigImageCarousel
          carouselImage={carouselImage}
          images={images}
          setCarouselImage={setCarouselImage}
          setIsCarouselVisible={setIsCarouselVisible}
        />
      )}
    </>
  );
};
