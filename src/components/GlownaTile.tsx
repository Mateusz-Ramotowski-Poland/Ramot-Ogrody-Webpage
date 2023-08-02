import styles from "./GlownaTile.module.scss";
import { Link } from "react-router-dom";

export interface Tile {
  description: string;
  link: string;
  figcaption: string;
  src: string;
}

interface Props {
  tile: Tile;
}

export const GlownaTile = (props: Props) => {
  const { description, link, figcaption, src } = props.tile;

  return (
    <div className={styles.tile}>
      <figure>
        <img src={src} alt={figcaption} className={styles.img} />
        <figcaption className={styles.figcaption}>{figcaption}</figcaption>
      </figure>
      <p className={styles.description}>{description}</p>

      <Link to={link}>Dowiedz się więcej</Link>
    </div>
  );
};
