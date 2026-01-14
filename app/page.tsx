import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { Process } from "@/components/sections/process";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Clients } from "@/components/sections/clients";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesOverview />
      <Process />
      <FeaturedWork />
      <Clients />
      <CTA />
    </div>
  );
}
