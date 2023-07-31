import { TitleH3 } from "../components";
import styles from "./WycinkaFilmy.module.scss";

export const WycinkaFilmy = () => {
  const width = 690;
  const height = 715;

  return (
    <section className={styles.container}>
      <TitleH3 text="Filmy" />
      <div className={styles.movies_container}>
        <iframe
          width={width}
          height={height}
          src="https://www.youtube.com/embed/WukDDXG4W8I"
          title="YouTube movie - 'Wycinka drzewa na wysokości - profesjonalny pilarz. Giżycko na Mazurach.'"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles.iframe}
        ></iframe>

        <iframe
          width={width}
          height={height}
          src="https://www.youtube.com/embed/8Y9OTIY3peU"
          title="YouTube movie - 'Wycinka drzewa na wysokości - profesjonalny pilarz. Wilkasy na Mazurach.'"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles.iframe}
        ></iframe>
      </div>
    </section>
  );
};
