import AboutUs from "@/src/components/AboutUs/AboutUs";
import ContactCTA from "@/src/components/ContactCTA/ContactCTA";
import Portfolio from "@/src/components/Portfolio/Portfolio";
import Process from "@/src/components/Process/Process";
import Services from "@/src/components/Services/Services";
import Hero from "@/src/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Portfolio />
      <ContactCTA />
      <Services />
      <AboutUs />
      <Process />
    </main>
  );
}
