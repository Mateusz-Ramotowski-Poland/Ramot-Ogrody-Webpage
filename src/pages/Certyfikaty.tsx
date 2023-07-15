import { useState } from "react";
import { CertyfikatyBigImageCarousel, CertyfikatySmallImagesGallery, TitleH2 } from "../components";
import styles from "./Certyfikaty.module.scss";

export const Certyfikaty = () => {
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);

  return (
    <>
      <TitleH2 text="Certyfikaty" />
      <p className={styles.introduction}>wstęp </p>
      <CertyfikatySmallImagesGallery />
      {isCarouselVisible && <CertyfikatyBigImageCarousel />}
    </>
  );
};
