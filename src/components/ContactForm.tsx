import { useState } from "react";
import { SectionContainer } from "../components";
import styles from "./ContactForm.module.scss";
import spinner from "../images/spinner200px.gif";
import { api } from "../shared/api";
import { IonIcon } from "@ionic/react";
import { alertCircleOutline, checkmarkCircleOutline, closeCircleOutline } from "../../node_modules/ionicons/icons";

interface File {
  size: number;
}

export const ContactForm = () => {
  const [filesSize, setFilesSize] = useState(0); // google set atachments limit as 25 MB. I set 24MB limit in my app
  const [isSendindForm, setIsSendindForm] = useState(false);
  const [deliveryStatus, setDeliveryStatus] = useState<string | null>(null);
  const nieDostarczono = "Nie dostarczono wiadomości. Spróbuj ponownie za kilka minut";

  const handleClick = () => {
    setDeliveryStatus(null);
  };

  const handleInput = (event: any) => {
    const files: File[] = event.target.files;
    let filesSize = 0;
    if (files.length !== 0) {
      for (const file of files) {
        filesSize += file.size;
      }
    }
    setFilesSize(filesSize / 1000000);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (filesSize > 24 || isSendindForm) {
      return;
    }

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("webpage", "ramotOgrody"); //depending on the webpage value, the node.js server knows which gmail account to send the email to
    setDeliveryStatus(null);
    setIsSendindForm(true);

    api
      .post(formData)
      .then((res) => res.json())
      .then((body) => {
        if (body.accepted[0] === "ramotOgrody@gmail.com") {
          setDeliveryStatus("Dostarczono wiadomość");
        } else {
          setDeliveryStatus(nieDostarczono);
        }
      })
      .catch(() => {
        setDeliveryStatus(nieDostarczono);
      })
      .finally(() => setIsSendindForm(false));
  };

  const deliveryStatusIcon =
    deliveryStatus === nieDostarczono ? (
      <IonIcon icon={closeCircleOutline} className={styles.failure_icon} />
    ) : (
      <IonIcon icon={checkmarkCircleOutline} className={styles.success_icon} />
    );

  return (
    <SectionContainer>
      <form className={styles.form} onSubmit={handleSubmit} onClick={handleClick}>
        <div className={styles.element}>
          <label htmlFor="imie"> </label>
          <input className={styles.input} id="imie" minLength={3} name="imie" placeholder="* Imię" required></input>
        </div>
        <div className={styles.element}>
          <label htmlFor="email"> </label>
          <input className={styles.input} id="email" name="email" placeholder="* Email" required type="email"></input>
        </div>
        <div className={styles.element}>
          <label htmlFor="telefon"> </label>
          <input
            className={styles.input}
            id="telefon"
            name="telefon"
            //examples of validate numbers:'123456789' '123-456-789' '123 456 789' '123-456 789'
            pattern="[0-9]{3}[\-\s]?[0-9]{3}[\-\s]?[0-9]{3}"
            placeholder="* Telefon"
            required
            type="tel"
          ></input>
        </div>
        <div className={styles.element}>
          <label htmlFor="miejsce"> </label>
          <input className={styles.input} id="miejsce" minLength={2} name="miejsce" placeholder="* Miejsce realizacji" required></input>
        </div>
        <div className={styles.element}>
          <label htmlFor="usluga"> </label>
          <select className={styles.input} id="usluga" name="usluga" required>
            <option value="">* Wybierz usługę</option>
            <option value="Wycinka drzew">Wycinka drzew</option>
            <option value="Pielęgnacja ogrodu">Pielęgnacja ogrodu</option>
            <option value="Sprzedaż drzewa">Sprzedaż drzewa</option>
          </select>
        </div>
        <div className={styles.element}>
          <label htmlFor="plik"></label>
          <input className={styles.input} id="plik" multiple name="files" type="file" onInput={handleInput}></input>
        </div>
        <div className={styles.textarea}>
          <label htmlFor="informacje"> </label>
          <textarea className={styles.input} id="informacje" name="informacje" placeholder="Dodatkowe informacje"></textarea>
        </div>
        <div className={styles.flex_container}>
          <p>* - pola obowiązkowe</p>
        </div>
        <div className={styles.flex_container}>
          <p className={filesSize > 24 ? styles.alert : ""}>Pliki: {filesSize.toFixed(2)}MB. Limit: 24MB</p>
        </div>
        <div className={styles.submit}>
          <button className={styles.input} type="submit">
            Zamów usługę
          </button>
        </div>
        {isSendindForm && (
          <div className={styles.message_container}>
            <img src={spinner} alt="spinner" className={styles.spinner}></img> <span>Wysyłam wiadomość. Proszę, poczekaj na potwierdzenie</span>
          </div>
        )}
        {deliveryStatus && (
          <div className={styles.message_container}>
            {deliveryStatusIcon}
            <span>{deliveryStatus}</span>
          </div>
        )}
        {filesSize > 24 && (
          <div className={styles.message_container}>
            <IonIcon icon={alertCircleOutline} className={styles.failure_icon} />
            <span>Przekroczono limit plików. Nie można wysłać wiadomości</span>
          </div>
        )}
      </form>
    </SectionContainer>
  );
};
