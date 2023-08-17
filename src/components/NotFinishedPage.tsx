import { Link } from "react-router-dom";

export const NotFinishedPage = () => {
  return (
    <p>
      Strona jest w trakcie budowy. Zapraszamy do <Link to="/faq"> najczęściej zadawanych pytań </Link> lub
      <Link to="/kontakt"> formularza kontaktowego.</Link>
    </p>
  );
};
