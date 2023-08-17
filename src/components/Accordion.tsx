import { AccordionItem, SectionContainer } from "../components";

export const Accordion = () => {
  const accordionItems = [
    {
      question: `Czy zapewniacie transport drzewa?`,
      answer: `Tak. Zapewniamy transport drzewa. Na terenie miasta Giżycko transport jest darmowy. Poza miastem Giżycko za transport trzeba dodatkowo zapłacić.`,
    },
    {
      question: `Czy sprzedajecie ułożone drzewo?`,
      answer: `Sprzedajemy ułożone drzewo, które przywozimy na przyczepie. Można samemu zmierzyć wymiary przyczepki, żeby sprawdzić ilość drzewa.`,
    },
    {
      question: `Ile zapłacę za wycinkę drzewa?`,
      answer: `Nie ma jednej ustalonej ceny za wycinkę drzewa. Cena ta różni się w zależności od trudności wycinki - odległości od innych budowli, linii energetycznych, płotów. Cena różni się również w zależności od wielkości drzewa, stopnia pochyłu. Polecam przedzwonić i wysłać do nas zdjęcia przez formularz kontaktowy - wtedy możemy przyjechać do Państwa i zrobić wycenę.`,
    },
  ];

  const accordionItemsList = accordionItems.map((item, i) => <AccordionItem question={item.question} answer={item.answer} key={i + 1} />);

  return (
    <>
      <SectionContainer>{accordionItemsList}</SectionContainer>
    </>
  );
};
