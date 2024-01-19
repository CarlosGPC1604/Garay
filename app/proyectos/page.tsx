import { title } from "@/components/primitives";
import ProyectCards from "@/components/ProyectCards";

export default function Proyectos() {
	return (
		<section>
			<div className="container mx-auto text-center py-5">
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
			<ProyectCards/>
		</section>
	);
}
