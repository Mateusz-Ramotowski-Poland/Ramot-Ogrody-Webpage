import styles from "./GoogleMap.module.scss";

export const GoogleMap = () => {
  return (
    <iframe
      className={styles.iframe}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d604618.0094913378!2d21.307863858109485!3d53.704203772545405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e2289e1252ca45%3A0xbe60ce7248418c42!2sKamionki%2025%2C%2011-500%20Kamionki!5e0!3m2!1spl!2spl!4v1686164500739!5m2!1spl!2spl"
      width="600"
      height="450"
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};
