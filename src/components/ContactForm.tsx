import { SectionContainer } from "../components";

export const ContactForm = () => {
  return (
    <SectionContainer>
      <form>
        <div>
          <label htmlFor="imie"> </label>
          <input id="imie" minLength={3} name="imie" placeholder="Imię" required></input>
        </div>
        <div>
          <label htmlFor="email"> </label>
          <input id="email" name="email" placeholder="Email" required type="email"></input>
        </div>
        <div>
          <label htmlFor="telefon"> </label>
          <input
            id="telefon"
            name="telefon"
            //examples of validate numbers:'123456789' '123-456-789' '123 456 789' '123-456 789'
            pattern="[0-9]{3}[\-\s]?[0-9]{3}[\-\s]?[0-9]{3}"
            placeholder="Telefon"
            required
            type="tel"
          ></input>
        </div>
        <div>
          <label htmlFor="miejsce"> </label>
          <input id="miejsce" minLength={2} name="miejsce" placeholder="Miejsce realizacji" required></input>
        </div>
        <div>
          <label htmlFor="usluga"> </label>
          <select id="usluga" name="usluga" required>
            <option value="">Wybierz usługę</option>
            <option value="wycinka">Wycinka drzew</option>
            <option value="ogrod">Pielęgnacja ogrodu</option>
            <option value="opal">Sprzedaż drzewa opałowego</option>
          </select>
        </div>
        <div>
          <label htmlFor="plik"> </label>
          <input id="plik" multiple name="plik" type="file"></input>
        </div>
        <div>
          <label htmlFor="informacje"> </label>
          <textarea id="informacje" name="informacje" placeholder="Dodatkowe informacje"></textarea>
        </div>
        <div>
          <button type="submit">Wyślij formularz</button>
        </div>
      </form>
    </SectionContainer>
  );
};
