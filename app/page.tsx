import { title, subtitle } from "@/components/primitives";
import Accordion from "@/components/Accordion";
import Mapa from "../components/Mapa"
import Collague from "../components/Collague"

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
			{/* Acerca de nosotros */}
			<div className="container mx-auto text-center  mx-auto py-[100px] px-[10px] lg:px-[0px]">
				<div className="grid grid-cols-2">
					<div className="text-right">
						<h2 className={` ${title({})} text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]`}>
							Acerca de&nbsp;
						</h2>
						<h2 className={` ${title({ color: "red" })} text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]`}>
							nosotros
						</h2>
						<p className="text-wrap-balance mt-2 text-balance">
							En nuestro estudio, nos dedicamos apasionadamente a cada proyecto con el objetivo de trascender las expectativas y crear obras arquitectónicas que no solo sean funcionales y estéticamente agradables, sino que también cuenten una historia única. Nos esforzamos por fusionar la innovación con la sensibilidad hacia el entorno, incorporando prácticas sostenibles y soluciones creativas en cada diseño.
						</p>
					</div>
				</div>
			</div>
			{/* Acerca de nosotros */}
			{/* Landing cards */}
			{/* Landing cards */}
			{/* Modal & Collague */}
			<div className="container mx-auto px-[10px] py-8">
				<Collague />
			</div>
			{/* Modal & Collague */}
			{/* Accordion */}
			<div className="w-full">
				<Accordion />
			</div>
			{/* Accordion */}
			{/* Mapa */}
			<Mapa />
			{/* Mapa */}
		</section>
	);
}