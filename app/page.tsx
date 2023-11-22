import { title, subtitle, MyBgColor, } from "@/components/primitives";
import LandingCards from "@/components/LandingCards";
import Accordion from "@/components/Accordion";
import AccordionImg from "@/components/AccordionImg";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
			{/* TITULO */}
			<div className="inline-block max-w-lg text-center">
				<h1 className={title({ color: "red" })}>
					Garay&nbsp;
				</h1>
				<h1 className={title()}>Arquitectos</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Planeamos, proyectamos, construimos y supervisamos.
				</h2>
			</div>
			{/* TITULO */}
			{/* ACERCA DE NOSOTROS */}
			<div className={`"max-w-[50%]" flex items-center justify-center text-white ${MyBgColor({ color: "red" })}`}>
				<div>
					<div className="inline-block text-center">
						<h2 className="text-[2.3rem]">
							Acerca de nosotros
						</h2>
						<h3 className="my-4 text-wrap-balance">
							En nuestro estudio, nos dedicamos apasionadamente a cada proyecto con el objetivo de trascender las expectativas y crear obras arquitectónicas que no solo sean funcionales y estéticamente agradables, sino que también cuenten una historia única. Nos esforzamos por fusionar la innovación con la sensibilidad hacia el entorno, incorporando prácticas sostenibles y soluciones creativas en cada diseño.
						</h3>
					</div>
				</div>
			</div>
			{/* ACERCA DE NOSOTROS */}
			{/* LANDING CARDS */}
			<div className="gap-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				<LandingCards />
			</div>
			{/* LANDING CARDS */}
			{/* ACCORDION */}
			<div className={`w-screen flex items-center justify-center`}>
				<div className="container">
					<div className=" grid sm:grid-cols-1 md:grid-cols-2 mt-10 mb-10 mx-8 gap-5">
						<div>
							<div>
								<h2 className="text-[2.3rem]">Te ofrecemos</h2>
								<h2 className="text-[2.3rem]">los mejores servicios</h2>
							</div>
							<div className="mt-5">
								<AccordionImg />
							</div>
						</div>
						<div className="content-center flex justify-center items-center">
							<Accordion/>
						</div>
					</div>
				</div>
			</div>
			{/* ACCORDION */}
		</section>
	);
}

