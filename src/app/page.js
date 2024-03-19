import Hero from "../../components/Hero";
import Cards from "../../components/Cards"
import Mapa from "../../components/Mapa"
import RenderCarrucel from "../../components/RenderCarrucel";
import Collague from "../../components/Collague";

const divStyle = {
  backgroundImage: 'url(./light-bg.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
  overflow: 'hidden',
  transition: 'background-image 0.5s ease-in-out',
};

export default function Home() {
  return (
    <section className="bg-[#c5c5c5] dark:bg-[#231f20]" style={divStyle}>
      <Hero />
      <Cards />
      <Collague />
      <RenderCarrucel />
      <Mapa />
    </section>
  );
}
