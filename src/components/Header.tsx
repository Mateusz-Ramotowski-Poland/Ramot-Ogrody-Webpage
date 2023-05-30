import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <ul>
        <Link to="/">Ramot Ogrody </Link>
        <Link to="/certyfikaty">Certyfikaty </Link>
        <Link to="/faq">Faq </Link>
        <Link to="/kontakt">Kontakt </Link>
        <Link to="/pielegnacja-ogrodow">Pielęgnacja ogrodów </Link>
        <Link to="/sprzedaz-drzewa">Sprzedaż drzewa </Link>
        <Link to="/wycinka-drzew">Wycinka drzew </Link>
      </ul>
    </header>
  );
};
