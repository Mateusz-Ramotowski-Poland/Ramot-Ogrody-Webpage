import { GlownaCarousel, GlownaEnd, GlownaIntroduction, GlownaTiles, TitleH2 } from "../components";

export const Glowna = () => {
  return (
    <>
      <TitleH2 text="Kim jesteśmy?" />
      <GlownaIntroduction />
      <GlownaTiles />
      <GlownaCarousel />
      <GlownaEnd />
    </>
  );
};
