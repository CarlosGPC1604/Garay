import { title, subtitle } from "@/components/primitives";
import LandingCards from "@/components/LandingCards";
import Accordion from "@/components/Accordion";
import AccordionImg from "@/components/AccordionImg";

export default function Home() {
	return (
		<section>
			<div className="py-[40px] px-[10px]">
				{/* TITULO */}
				<div className="text-center">
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
				{/* TITULO */}
				{/* ACERCA DE NOSOTROS */}
				<div className="text-center mt-8">
					<h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]">
						Acerca de nosotros
					</h2>
					<p className="text-wrap-balance mt-2">
						En nuestro estudio, nos dedicamos apasionadamente a cada proyecto con el objetivo de trascender las expectativas y crear obras arquitectónicas que no solo sean funcionales y estéticamente agradables, sino que también cuenten una historia única. Nos esforzamos por fusionar la innovación con la sensibilidad hacia el entorno, incorporando prácticas sostenibles y soluciones creativas en cada diseño.
					</p>
				</div>
				{/* ACERCA DE NOSOTROS */}
				{/* LANDING CARDS */}
				<div className="gap-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
					<LandingCards />
				</div>
				{/* LANDING CARDS */}
				{/* ACCORDION */}
				<div className=" grid sm:grid-cols-1 md:grid-cols-2  gap-1">
					<div>
						<div>
							<h2 className="text-[]">Te ofrecemos</h2>
							<h2 className="text-[]">los mejores servicios</h2>
						</div>
						<div className="mt-5">
							<AccordionImg />
						</div>
					</div>
					<div className="content-center flex justify-center items-center">
						<Accordion />
					</div>
				</div>
				{/* ACCORDION */}
			</div>
		</section>
	);
}

