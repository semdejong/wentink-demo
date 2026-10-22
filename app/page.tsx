import QuoteBand from "@/components/QuoteBand";
import Assortiment from "@/components/home/Assortiment";
import Centrum from "@/components/home/Centrum";
import Close from "@/components/home/Close";
import Hero from "@/components/home/Hero";
import Landschap from "@/components/home/Landschap";
import Routes from "@/components/home/Routes";
import Seasons from "@/components/home/Seasons";
import Services from "@/components/home/Services";
import Trust from "@/components/home/Trust";
import Visit from "@/components/home/Visit";
import Work from "@/components/home/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Routes />
      <Services />
      <QuoteBand
        section="citaat-onderhoud"
        name="Paul Roescher"
        quote="Door jullie tuinonderhoud blijft de tuin niet alleen netjes, door de professionele snoeiwerkzaamheden wordt de tuin elk jaar mooier, voller en strakker!"
      />
      <Landschap />
      <Centrum />
      <Assortiment />
      <Work />
      <Seasons />
      <Trust />
      <Visit />
      <Close />
    </>
  );
}
