import { title, subtitle } from "@/components/primitives";
import Accordion from "@/components/Accordion";
import Mapa from "../components/Mapa"
import Collague from "../components/Collague"
import CardsHome from "../components/CardsHome"
import RenderCarrucel from "../components/RenderCarrucel"

export default function Home() {
	return (
		<section>
			{/* Hero */}
			<div className="hero w-full py-[225px]">
				<div className="container mx-auto text-center">
					<h1 className={` ${title({ color: "red" })} text-[30px] sm:text-[36px] md:font-[40px] lg:text-[44px] xl:text-[48px] 2xl:[55px]`}>
						Garay&nbsp;
					</h1>
					<h1 className={`${title()} text-[30px] sm:text-[36px] md:font-[40px] lg:text-[44px] xl:text-[48px] 2xl:[55px]`}>
						Arquitectos
					</h1>
					<h2 className={subtitle({})}>
						Planeamos, proyectamos, construimos y supervisamos.
					</h2>
				</div>
			</div>
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