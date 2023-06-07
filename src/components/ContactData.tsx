import styles from "./ContactData.module.scss";
import { IonIcon } from "@ionic/react";
import { callOutline, homeOutline, mailOutline, personOutline, timeOutline } from "../../node_modules/ionicons/icons";

export const ContactData = () => {
  return (
    <div className={styles.contact_data}>
      <div className={styles.data_element}>
        <IonIcon icon={personOutline} className={styles.icon} />
        <p>Łukasz Ramotowski</p>
      </div>
      <div className={styles.data_element}>
        <IonIcon icon={callOutline} className={styles.icon} />
        <p>
          <a href="tel:+48 665 133 044">+48 665 133 044</a>
        </p>
      </div>
      <div className={styles.data_element}>
        <IonIcon icon={mailOutline} className={styles.icon} />
        <p>
          <a href="mailto:ramotogrody@gmail.com">ramotogrody@gmail.com</a>
        </p>
      </div>
      <div className={styles.data_element}>
        <IonIcon icon={timeOutline} className={styles.icon} />
        <p>Poniedziałek - Sobota: 7.00-17.00</p>
      </div>
      <div className={styles.data_element}>
        <IonIcon icon={homeOutline} className={styles.icon} />
        <p>Kamionki 25/2, 11-500 Giżycko</p>
      </div>
    </div>
  );
};
