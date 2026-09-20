import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <Work />
      <Process />
      <TechStack />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
