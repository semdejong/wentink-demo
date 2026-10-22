import Centrum from "@/components/home/Centrum";
import Close from "@/components/home/Close";
import Hero from "@/components/home/Hero";
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
      <Centrum />
      <Work />
      <Seasons />
      <Trust />
      <Visit />
      <Close />
    </>
  );
}
