import { title } from "@/components/primitives";
import ProyectCards from "@/components/ProyectCards";
import RendersCards from "@/components/RendersCards"

export default function Proyectos() {
	return (
		<section>
			<div className="w-full bg-[#000000] mx-auto text-center py-[100px]">
				<h1 className={` ${title({ color: "red" })} text-[30px] sm:text-[36px] md:font-[40px] lg:text-[44px] xl:text-[48px] 2xl:[55px]`}>
					Proyectos
				</h1>
				<div className="mt-5 text-wrap-balance">
					<p>
						Cada proyecto en nuestro catálogo es una obra maestra única que
						cuenta una historia arquitectónica. ¿Listo para inspirarte? Explora
						nuestro catálogo y déjate llevar por la fascinante fusión de forma
						y función en el mundo de la arquitectura.
					</p>
				</div>
			</div>
			<div className="bg-[#1b1919] w-full py-[100px]">
				<ProyectCards />
			</div>
			<div className="bg-[#000000] w-full py-[100px]">
				<RendersCards />
			</div>
		</section>
	);
}
