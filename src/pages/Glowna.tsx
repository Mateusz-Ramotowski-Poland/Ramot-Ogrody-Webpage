import { GlownaCarousel, GlownaEnd, GlownaIntroduction, TitleH2 } from "../components";

export const Glowna = () => {
  return (
    <>
      <TitleH2 text="Kim jesteśmy?" />
      <GlownaIntroduction />
      <GlownaCarousel />
      <GlownaEnd />
    </>
  );
};
