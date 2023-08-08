import styles from "./GlownaTiles.module.scss";
import tile1 from "../images/glownaTile1.webp";
import tile2 from "../images/glownaTile2.webp";
import tile3 from "../images/glownaTile3.webp";
import tile4 from "../images/glownaTile4.webp";
import tile5 from "../images/glownaTile5.webp";
import tile6 from "../images/glownaTile6.webp";
import tile7 from "../images/glownaTile7.webp";
import { TitleH3, GlownaTile, Tile } from "../components";

const tiles: Tile[] = [
  {
    description:
      "Sprzedajemy różne gatunki drzewa, między innymi: brzozę, olchę, jesiona, sosnę... Długość jak i grubość drzewa wybiera klient. Sprzedajemy ułożone drzewo.",
    link: "/sprzedaz-drzewa",
    figcaption: "Sprzedaż drzewa opałowego",
    src: tile1,
  },
  {
    description:
      "Sprzedajemy różne gatunki drzewa, między innymi: brzozę, olchę, jesiona, sosnę... Długość jak i grubość drzewa wybiera klient. Sprzedajemy ułożone drzewo.",
    link: "/sprzedaz-drzewa",
    figcaption: "Sprzedaż drzewa kominkowego",
    src: tile2,
  },
  {
    description: "string",
    link: "/pielegnacja-ogrodow",
    figcaption: "Sadzenie drzew i krzewów",
    src: tile3,
  },
  {
    description: "Sprzątanie liści",
    link: "/pielegnacja-ogrodow",
    figcaption: "Sprzątanie liści",
    src: tile4,
  },
  {
    description: "string",
    link: "/wycinka-drzew",
    figcaption: "Pięlęgnacja drzew",
    src: tile5,
  },
  {
    description: "string",
    link: "/wycinka-drzew",
    figcaption: "Wycinka drzew",
    src: tile6,
  },
  {
    description: "string",
    link: "/wycinka-drzew",
    figcaption: "Alpinistyczna wycinka drzew",
    src: tile7,
  },
];

export const GlownaTiles = () => {
  return (
    <>
      <TitleH3 text="Co możemy dla Państwa zrobić?" />
      <section className={styles.section}>
        {tiles.map((tile) => (
          <GlownaTile tile={tile} />
        ))}
      </section>
    </>
  );
};
