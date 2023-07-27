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
  const figureRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const imgScale = [1, 1.2, 1.44, 1.7, 2];
  const imgScaleIndex = useRef<number>(0);
  const imgTransformTranslate = useRef<number[]>([0, 0]);

  const handleContainerClick = (event: React.MouseEvent) => {
    const clicked = event.target as HTMLElement;
    if (clicked === containerRef.current || clicked === exitRef.current || clicked === figureRef.current) {
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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons !== 0) {
      // mouse buttons were clicked
      const fig = (figureRef.current as HTMLElement).getBoundingClientRect(); //figure node data relative to viewport
      // Figure coordinates relative to viewport
      // figure.x, figure.y)); //top-left figure corner
      // figure.x, // + figure.height - 1)); //bottom-left figure corner
      // figure.x + figure.width - 1, figure.y)); //top-right figure corner
      // figure.x + figure.width - 1, figure.y + figure.height - 1)); //bottom-right figure corner
      //figure.x, figure.y + figure.height / 2)); //left middle height figure
      //figure.x + figure.width / 2, figure.y)); //top middle width figure
      //figure.x + figure.width - 1, figure.y + figure.height / 2)); //right middle height figure
      //figure.x + figure.width / 2, figure.y + figure.height - 1)); //bottom middle width figure
      const img = imgRef.current;
      const canIMoveFurtherRight = () => e.movementX > 0 && document.elementFromPoint(fig.x, fig.y + fig.height / 2) === img;
      const canIMoveFurtherLeft = () => e.movementX < 0 && document.elementFromPoint(fig.x + fig.width - 1, fig.y + fig.height / 2) === img;
      const canIMoveFurtherDown = () => e.movementY > 0 && document.elementFromPoint(fig.x + fig.width / 2, fig.y) === img;
      const canIMoveFurtherUp = () => e.movementY < 0 && document.elementFromPoint(fig.x + fig.width / 2, fig.y + fig.height - 1) === img;

      if (canIMoveFurtherLeft()) {
        imgTransformTranslate.current[0] += e.movementX;
      }
      if (canIMoveFurtherRight()) {
        imgTransformTranslate.current[0] += e.movementX;
      }
      if (canIMoveFurtherDown()) {
        imgTransformTranslate.current[1] += e.movementY;
      }
      if (canIMoveFurtherUp()) {
        imgTransformTranslate.current[1] += e.movementY;
      }
      //Below move imamge on DOM
      changeImageStyle();
    }
  };

  const handleMouseDown = (event: React.MouseEvent) => event.preventDefault();

  return (
    <section className={styles.container} onClick={handleContainerClick} ref={containerRef}>
      <IonIcon icon={addCircleOutline} className={styles.icon_plus} onClick={handlePlusClick} />
      <IonIcon icon={removeCircleOutline} className={styles.icon_minus} onClick={handleMinusClick} />
      <IonIcon icon={closeOutline} className={styles.icon_exit} ref={exitRef} />
      <CarouselArrows maxState={props.images.length - 1} setState={props.setCarouselImage} state={props.carouselImage} />
      <figure className={styles.figure} ref={figureRef}>
        <img
          key={props.images[props.carouselImage].id}
          src={props.images[props.carouselImage].source}
          alt={props.images[props.carouselImage].alt}
          className={styles.img}
          ref={imgRef}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
        />
      </figure>
      <p className={styles.description}>Kliknij i przesuń mysz aby przesunąć zdjęcie. Możesz też przybliżyć, oddalić zdjęcie.</p>
      <CarouselIndicators maxState={props.images.length - 1} setState={props.setCarouselImage} state={props.carouselImage} styles="certyfikaty" />
    </section>
  );
};
