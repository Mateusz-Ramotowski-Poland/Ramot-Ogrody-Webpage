import { ContactForm, ContactData, GoogleMap, TitleH2 } from "../components";
import styles from "./Kontakt.module.scss";

export const Kontakt = () => {
  return (
    <div className={styles.kontakt}>
      <TitleH2 text="Kontakt" />
      <ContactData />
      <ContactForm />
      <GoogleMap />
    </div>
  );
};
