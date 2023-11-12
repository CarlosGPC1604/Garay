import { title, subtitle } from "@/components/primitives";
import LandingCards from "@/components/LandingCards";
import AccordionTest from "@/components/AccordionTest";
import AccordionImg from "@/components/AccordionImg";


export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">

			<div className="inline-block max-w-lg text-center">
				<h1 className={title({ color: "red" })}>
					Garay&nbsp;
				</h1>
				<h1 className={title()}>Arquitectos</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Planeamos, proyectamos, construimos y supervisamos.
				</h2>
			</div>

			<div className="inline-block max-w-lg text-center">
				<h2 className="text-[2.3rem] text-[#d6292c]">
					Acerca de nosotros
				</h2>
				<h3 className="my-4">
				Somos un estudio de arquitectura apasionado por la creación de espacios excepcionales que inspiran, mejoran la vida y desafían los límites de la imaginación.
				</h3>
			</div>

			<div className="gap-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				<LandingCards />
			</div>

			<div className="sm md lg xl xxl grid sm:grid-cols-1 md:grid-cols-2 mt-10 mx-8 gap-5">
				<div>
					<div>
						<h2 className="text-[2.3rem] text-[#d6292c]">Te ofrecemos</h2>
						<h2 className="text-[2.3rem]">los mejores servicios</h2>
					</div>
					<div className="mt-5">
						<AccordionImg />
					</div>
				</div>
				<div className="content-center flex justify-center items-center">
					<AccordionTest />
				</div>
			</div>
		</section>
	);
}

