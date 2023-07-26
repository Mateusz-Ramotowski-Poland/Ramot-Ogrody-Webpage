import styles from "./CertyfikatyBigImageCarousel.module.scss";
import { Image } from "../pages/Certyfikaty";
import { IonIcon } from "@ionic/react";
import { addCircleOutline, closeOutline, removeCircleOutline } from "../../node_modules/ionicons/icons";
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
  const imgRef = useRef<HTMLImageElement>(null);

  const imgScale = [1, 1.2, 1.44, 1.7, 2];
  const imgScaleIndex = useRef<number>(0);
  const imgTransformTranslate = useRef<number[]>([0, 0]);

  const handleContainerClick = (event: React.MouseEvent) => {
    const clicked = event.target as HTMLElement;
    if (clicked === containerRef.current || clicked === exitRef.current) {
      props.setIsCarouselVisible(false);
    }
  };

  const changeImageStyle = () => {
    (imgRef.current as HTMLImageElement).style.transform = `scale(${imgScale[imgScaleIndex.current]}) translate(${
      imgTransformTranslate.current[0]
    }px, ${imgTransformTranslate.current[1]}px)`;
  };

  const handlePlusClick = () => {
    if (imgScaleIndex.current < imgScale.length - 1) {
      imgScaleIndex.current += 1;
    }
    changeImageStyle();
  };

  const handleMinusClick = () => {
    if (imgScaleIndex.current > 0) {
      imgScaleIndex.current -= 1;
    }
    changeImageStyle();
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
      <IonIcon icon={addCircleOutline} className={styles.icon_plus} onClick={handlePlusClick} />
      <IonIcon icon={removeCircleOutline} className={styles.icon_minus} onClick={handleMinusClick} />
      <IonIcon icon={closeOutline} className={styles.icon_exit} ref={exitRef} />

      <CarouselArrows maxState={props.images.length - 1} setState={props.setCarouselImage} state={props.carouselImage} />
      <img
        key={props.images[props.carouselImage].id}
        src={props.images[props.carouselImage].source}
        alt={props.images[props.carouselImage].alt}
        className={styles.img}
        ref={imgRef}
      />
      <CarouselIndicators maxState={props.images.length - 1} setState={props.setCarouselImage} state={props.carouselImage} styles="certyfikaty" />
    </section>
  );
};
