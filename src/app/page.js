import Hero from "../../components/Hero";
import Cards from "../../components/Cards"
import Mapa from "../../components/Mapa"
import RenderCarrucel from "../../components/RenderCarrucel";
import Collague from "../../components/Collague";

export default function Home() {
  return (
    <section className="bg-[#c5c5c5] dark:bg-[#231f20] section-bg">
      <Hero />
      <Cards />
      <Collague />
      <RenderCarrucel />
      <Mapa />
    </section>
  );
}
