import styles from "./CertyfikatySmallImagesGallery.module.scss";
import { IonIcon } from "@ionic/react";
import { expandOutline } from "../../node_modules/ionicons/icons";
import { Image } from "../pages/Certyfikaty";

interface Props {
  images: Image[];
  setCarouselImage: React.Dispatch<React.SetStateAction<number>>;
  setIsCarouselVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CertyfikatySmallImagesGallery = (props: Props) => {
  const handleClick = (event: React.MouseEvent) => {
    props.setIsCarouselVisible(true);
    props.setCarouselImage(Number((event.currentTarget as HTMLElement).dataset.id as string));
  };

  const imagesList = props.images.map((image) => (
    <figure data-id={image.id} key={image.id} className={styles.figure} onClick={handleClick}>
      <div className={styles.img_container}>
        <img src={image.source} alt={image.alt} className={styles.img} />
      </div>

      <figcaption className={styles.figcaption}>{image.figcaption}</figcaption>
      <IonIcon icon={expandOutline} className={styles.icon} />
    </figure>
  ));

  return <section className={styles.container}>{imagesList}</section>;
};
