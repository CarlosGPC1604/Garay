import Accordion from "@/components/Accordion";
import Mapa from "../components/Mapa"
import Collague from "../components/Collague"
import CardsHome from "../components/CardsHome"
import RenderCarrucel from "../components/RenderCarrucel"
import HeroTest from "@/components/HeroTest"
import ScrollTop from "@/components/ScrollTop"

export default function Home() {
	return (
		<section>
			{/* Hero */}
			<HeroTest />
			{/* Hero */}
			{/* CardsHome */}
			<CardsHome />
			{/* CardsHome */}
			{/* Accordion */}
			<Accordion />
			{/* Accordion */}
			{/* Modal & Collague */}
			<Collague />
			{/* Modal & Collague */}
			{/* Carrucel */}
			<RenderCarrucel />
			{/* Carrucel */}
			{/* Mapa */}
			<Mapa />
			{/* Mapa */}
			{/* Botones flotantes */}
			<ScrollTop />
			{/* Botones flotantes */}
		</section>
	);
}