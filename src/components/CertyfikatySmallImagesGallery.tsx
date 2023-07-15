import certyfikaty1 from "../images/certyfikaty1.webp";
import certyfikaty2 from "../images/certyfikaty2.webp";
import certyfikaty3 from "../images/certyfikaty3.webp";
import certyfikaty4 from "../images/certyfikaty4.webp";
import styles from "./CertyfikatySmallImagesGallery.module.scss";

const images = [
  {
    alt: "Kurs: 'Pilarz-drwal, operator pilarki. Pięlęgnacja drzew'",
    figcaption: "Kurs: 'Pilarz-drwal, operator pilarki. Pięlęgnacja drzew",
    id: 1,
    source: certyfikaty1,
  },
  {
    alt: "Szkolenie: 'Zasady cięcia drzew i krzewów ozdobnych'",
    figcaption: "Szkolenie: 'Zasady cięcia drzew i krzewów ozdobnych'",
    id: 2,
    source: certyfikaty2,
  },
  {
    alt: "Kurs: 'Praca na wysokości. Praca na drzewach - arborysta'",
    figcaption: "Kurs: 'Praca na wysokości. Praca na drzewach - arborysta'",
    id: 3,
    source: certyfikaty3,
  },
  {
    alt: "Szkolenie z zakresu wzmocnień mechanicznych drzew",
    figcaption: "Szkolenie z zakresu wzmocnień mechanicznych drzew",
    id: 4,
    source: certyfikaty4,
  },
];

export const CertyfikatySmallImagesGallery = () => {
  const imagesList = images.map((image) => (
    <figure key={image.id} className={styles.figure}>
      <img src={image.source} alt={image.alt} className={styles.img} />
      <figcaption className={styles.figcaption}>{image.figcaption}</figcaption>
    </figure>
  ));

  return <section className={styles.container}>{imagesList}</section>;
};
