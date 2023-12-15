import { title, subtitle } from "@/components/primitives";
import LandingCards from "@/components/LandingCards";
import Accordion from "@/components/Accordion";
import Collague from "../components/collague"
import App from "../components/Modal"


export default function Home() {

	return (
		<section>
			{/* Hero */}
			<div className="hero w-full py-[225px] bg">
				<div className="container mx-auto text-center">
					<h1 className={` ${title({ color: "red" })} text-[30px] sm:text-[36px] md:font-[40px] lg:text-[44px] xl:text-[48px] 2xl:[55px]`}>
						Garay&nbsp;
					</h1>
					<h1 className={` ${title()} text-[30px] sm:text-[36px] md:font-[40px] lg:text-[44px] xl:text-[48px] 2xl:[55px]`}>
						Arquitectos
					</h1>
					<h2 className={subtitle({})}>
						Planeamos, proyectamos, construimos y supervisamos.
					</h2>
				</div>
			</div>
			{/* Hero */}
			{/* ACERCA DE NOSOTROS */}
			<div className="container mx-auto text-center mt-8 mx-auto py-[40px] px-[10px]">
				<h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]">
					Acerca de nosotros
				</h2>
				<div className="2xl:w-[65%] mx-auto">
					<p className="text-wrap-balance mt-2">
						En nuestro estudio, nos dedicamos apasionadamente a cada proyecto con el objetivo de trascender las expectativas y crear obras arquitectónicas que no solo sean funcionales y estéticamente agradables, sino que también cuenten una historia única. Nos esforzamos por fusionar la innovación con la sensibilidad hacia el entorno, incorporando prácticas sostenibles y soluciones creativas en cada diseño.
					</p>
				</div>
			</div>
			{/* ACERCA DE NOSOTROS */}
			{/* LANDING CARDS */}
			<div className=" mx-auto mt-8 md:mt-12]">
				<LandingCards />
			</div>
			{/* LANDING CARDS */}
			{/* Collague */}
			<div className="container mx-auto mt-[50px] mx-auto py-[40px] px-[10px]">
				<Collague />
			</div>
			<App />
			{/* Collague */}
			{/* ACCORDION */}
			<div className="w-full">
				<Accordion />
			</div>
			{/* ACCORDION */}
		</section>
	);
}