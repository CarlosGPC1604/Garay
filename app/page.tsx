import { title, subtitle } from "@/components/primitives";
import LandingCards from "@/components/LandingCards";
import Accordion from "@/components/Accordion";
import App from "../components/Modal"

export default function Home() {
	return (
		<section>
			{/* Hero */}
			<div className="hero w-full py-[225px]">
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
			{/* Acerca de nosotros */}
			<div className="container mx-auto text-center  mx-auto py-[40px] px-[10px] lg:px-[0px]">
				<h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]">
					Acerca de nosotros
				</h2>
				<div className="2xl:w-[65%] mx-auto">
					<p className="text-wrap-balance mt-2">
						En nuestro estudio, nos dedicamos apasionadamente a cada proyecto con el objetivo de trascender las expectativas y crear obras arquitectónicas que no solo sean funcionales y estéticamente agradables, sino que también cuenten una historia única. Nos esforzamos por fusionar la innovación con la sensibilidad hacia el entorno, incorporando prácticas sostenibles y soluciones creativas en cada diseño.
					</p>
				</div>
			</div>
			{/* Acerca de nosotros */}
			{/* Landing cards */}
			<div className="mx-auto">
				<LandingCards />
			</div>
			{/* Landing cards */}
			{/* Modal & Collague */}
			<div className="container mx-auto mx-auto py-[40px] px-[10px] xl:px-[0px]">
				<App />
			</div>
			{/* Modal & Collague */}
			{/* Accordion */}
			<div className="w-full">
				<Accordion />
			</div>
			{/* Accordion */}
			{/* Mapa */}
			<div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.468960221434!2d-104.89810813798556!3d21.504856622501443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842737ad5ef58b63%3A0x29a086ee978a3aeb!2sGaray%20Arquitectos!5e0!3m2!1sen!2smx!4v1700590660418!5m2!1sen!2smx"
					width="100%"
					height="450"
					loading="lazy"
					style={{ filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
				></iframe>
			</div>
			{/* Mapa */}
		</section>
	);
}