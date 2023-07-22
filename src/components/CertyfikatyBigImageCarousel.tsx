import styles from "./CertyfikatyBigImageCarousel.module.scss";
import { Image } from "../pages/Certyfikaty";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "../../node_modules/ionicons/icons";
import { CarouselArrows, CarouselIndicators } from "../components";

interface Props {
  carouselImage: number;
  images: Image[];
  setCarouselImage: React.Dispatch<React.SetStateAction<number>>;
  setIsCarouselVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CertyfikatyBigImageCarousel = (props: Props) => {
  return (
    <section className={styles.container}>
      <IonIcon icon={closeOutline} className={styles.icon} />
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
