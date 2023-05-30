import { Route, Routes } from "react-router-dom";
import { Certyfikaty, Faq, Glowna, Kontakt, PielegnacjaOgrodow, SprzedazDrzewa, WycinkaDrzew } from "./pages";
import { Footer, Header, Hero } from "./components";

export function App() {
  return (
    <>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<Glowna />}></Route>
        <Route path="/certyfikaty" element={<Certyfikaty />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/kontakt" element={<Kontakt />}></Route>
        <Route path="/pielegnacja-ogrodow" element={<PielegnacjaOgrodow />}></Route>
        <Route path="/sprzedaz-drzewa" element={<SprzedazDrzewa />}></Route>
        <Route path="/wycinka-drzew" element={<WycinkaDrzew />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
