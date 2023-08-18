import styles from "./GoogleMap.module.scss";

export const GoogleMap = () => {
  return (
    <iframe
      className={styles.iframe}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d149872.6730925175!2d21.47502688698211!3d54.06025522106841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e22938b4387f03%3A0x6170e85feb4dab82!2sRamot%20Ogrody!5e0!3m2!1spl!2spl!4v1692359544168!5m2!1spl!2spl"
      width="600"
      height="450"
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};
