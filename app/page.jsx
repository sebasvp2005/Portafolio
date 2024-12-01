"use client";
import { ThemeProvider } from "next-themes";
import {
  Header,
  PanelHero,
  AboutMe,
  Footer,
  ContactMeLayout,
  ProjectsLayout,
  ButtonToTop,
  OverlayGallery,
  AchievementsSection
} from "./components";

export default function HomePage() {
  return (
    <ThemeProvider>
      <OverlayGallery/>
      <Header />
      <PanelHero />
      <AboutMe />
      <ProjectsLayout />
      <AchievementsSection />
      <ContactMeLayout />
      <Footer />
      <ButtonToTop />
      <section className="stars_container">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>
    </ThemeProvider>
  );
}
