import { title, subtitle } from "@/components/primitives";
import Accordion from "@/components/Accordion";
import Mapa from "../components/Mapa"
import Collague from "../components/Collague"
import CardsHome from "../components/CardsHome"
import RenderCarrucel from "../components/RenderCarrucel"
import HeroTest from "@/components/HeroTest"

export default function Home() {
	return (
		<section>
			{/* Hero */}
			<HeroTest />
			{/* Hero */}
			{/* Landing cards */}
			<div className='w-full px-[10px] py-[100px] lg:px-0 bg-[#000000]'>
				<div className="container mx-auto">
					<CardsHome />
				</div>
			</div>
			{/* Landing cards */}
			{/* Accordion */}
			<div className="w-full py-[100px] px-[10px] lg:px-0 paralax-1 ">
				<Accordion />
			</div>
			{/* Accordion */}
			{/* Modal & Collague */}
			<div className="w-full py-[100px] px-[10px] lg:px-0 bg-[#1b1919]">
				<div className="container mx-auto">
					<Collague />
				</div>
			</div>
			{/* Modal & Collague */}
			{/* Carrucel */}
			<div className="w-full py-[100px] px-[10px] lg:px-0 bg-[#000000]">
				<div className="container mx-auto">
					<RenderCarrucel />
				</div>
			</div>
			{/* Carrucel */}
			{/* Mapa */}
			<Mapa />
			{/* Mapa */}
		</section>
	);
}