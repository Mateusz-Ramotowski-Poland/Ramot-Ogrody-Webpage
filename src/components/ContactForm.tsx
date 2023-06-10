import { SectionContainer } from "../components";
import styles from "./ContactForm.module.scss";

export const ContactForm = () => {
  return (
    <SectionContainer>
      <form className={styles.form}>
        <div className={styles.element}>
          <label htmlFor="imie"> </label>
          <input className={styles.input} id="imie" minLength={3} name="imie" placeholder="Imię" required></input>
        </div>
        <div className={styles.element}>
          <label htmlFor="email"> </label>
          <input className={styles.input} id="email" name="email" placeholder="Email" required type="email"></input>
        </div>
        <div className={styles.element}>
          <label htmlFor="telefon"> </label>
          <input
            className={styles.input}
            id="telefon"
            name="telefon"
            //examples of validate numbers:'123456789' '123-456-789' '123 456 789' '123-456 789'
            pattern="[0-9]{3}[\-\s]?[0-9]{3}[\-\s]?[0-9]{3}"
            placeholder="Telefon"
            required
            type="tel"
          ></input>
        </div>
        <div className={styles.element}>
          <label htmlFor="miejsce"> </label>
          <input className={styles.input} id="miejsce" minLength={2} name="miejsce" placeholder="Miejsce realizacji" required></input>
        </div>
        <div className={styles.element}>
          <label htmlFor="usluga"> </label>
          <select className={styles.input} id="usluga" name="usluga" required>
            <option value="">Wybierz usługę</option>
            <option value="wycinka">Wycinka drzew</option>
            <option value="ogrod">Pielęgnacja ogrodu</option>
            <option value="opal">Sprzedaż drzewa</option>
          </select>
        </div>
        <div className={styles.element}>
          <label htmlFor="plik"></label>
          <input className={styles.input} id="plik" multiple name="plik" type="file"></input>
        </div>
        <div className={styles.textarea}>
          <label htmlFor="informacje"> </label>
          <textarea className={styles.input} id="informacje" name="informacje" placeholder="Dodatkowe informacje"></textarea>
        </div>
        <div className={styles.submit}>
          <button className={styles.input} type="submit">
            Zamów usługę
          </button>
        </div>
      </form>
    </SectionContainer>
  );
};
