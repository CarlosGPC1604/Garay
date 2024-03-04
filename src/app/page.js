import Hero from "../../components/Hero";
import Cards from "../../components/Cards"
import Mapa from "../../components/Mapa"
import RenderCarrucel from "../../components/RenderCarrucel";

export default function Home() {
  return (
    <section>
      <Hero />
      <Cards />
      <RenderCarrucel />
      <Mapa />
    </section>
  );
}
