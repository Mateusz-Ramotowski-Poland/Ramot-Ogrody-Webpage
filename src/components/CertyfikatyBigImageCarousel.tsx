import styles from "./CertyfikatyBigImageCarousel.module.scss";
import { Image } from "../pages/Certyfikaty";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "../../node_modules/ionicons/icons";
import { CarouselArrows, CarouselIndicators } from "../components";
import { useEffect, useRef } from "react";

interface Props {
  carouselImage: number;
  images: Image[];
  setCarouselImage: React.Dispatch<React.SetStateAction<number>>;
  setIsCarouselVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CertyfikatyBigImageCarousel = (props: Props) => {
  const containerRef = useRef<HTMLElement>(null);
  const exitRef = useRef<HTMLIonIconElement>(null);

  const handleContainerClick = (event: React.MouseEvent) => {
    const clicked = event.target as HTMLElement;
    if (clicked === containerRef.current || clicked === exitRef.current) {
      props.setIsCarouselVisible(false);
    }
  };

  useEffect(() => {
    const exitCarousel = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        props.setIsCarouselVisible(false);
      }
    };

    window.addEventListener("keydown", exitCarousel);

    return () => window.removeEventListener("keydown", exitCarousel);
  }, []);

  return (
    <section className={styles.container} onClick={handleContainerClick} ref={containerRef}>
      <IonIcon icon={closeOutline} className={styles.icon} ref={exitRef} />
      <CarouselArrows maxState={props.images.length - 1} setState={props.setCarouselImage} state={props.carouselImage} />
      <img
        key={props.images[props.carouselImage].id}
        src={props.images[props.carouselImage].source}
        alt={props.images[props.carouselImage].alt}
        className={styles.img}
      />
      <CarouselIndicators maxState={props.images.length - 1} setState={props.setCarouselImage} state={props.carouselImage} styles="certyfikaty" />
    </section>
  );
};
