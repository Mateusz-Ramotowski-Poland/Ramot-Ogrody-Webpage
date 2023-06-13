import { useState } from "react";
import { SectionContainer } from "../components";
import styles from "./ContactForm.module.scss";
import spinner from "../images/spinner200px.gif";

export const ContactForm = () => {
  const [isSendindForm, setIsSendindForm] = useState(false);
  const serverUrl = "http://127.0.0.1:3001/";

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
    setIsSendindForm(true);
    fetch(serverUrl, { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } });
  };

  return (
    <SectionContainer>
      <form className={styles.form} onSubmit={handleSubmit}>
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
            <option value="Wycinka drzew">Wycinka drzew</option>
            <option value="Pielęgnacja ogrodu">Pielęgnacja ogrodu</option>
            <option value="Sprzedaż drzewa">Sprzedaż drzewa</option>
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
        {isSendindForm && (
          <div className={styles.spinner_container}>
            <img src={spinner} alt="spinner" className={styles.spinner}></img> <span>Wysyłam wiadomość. Proszę, poczekaj na potwierdzenie</span>
          </div>
        )}
      </form>
    </SectionContainer>
  );
};
