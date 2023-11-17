import { title } from "@/components/primitives";
import PopoverTest from "@/components/PopoverTest"
import ProyectCards from "@/components/ProyectCards";
import MyTooltip from "@/components/MyTooltip"

export default function Proyectos() {
	return (
		<div className="py-8 md:py-10">
			<div className="">
				<div className="">
					<h1 className={title({ color: "red" }) + " py-8"}>Proyectos</h1>
				</div>
				<div>
					<p>Cada proyecto en nuestro catálogo es una obra maestra única que cuenta una historia arquitectónica. ¿Listo para inspirarte? Explora nuestro catálogo y déjate llevar por la fascinante fusión de forma y función en el mundo de la arquitectura.</p>
				</div>
			</div>
			<div className=" py-8 pt-8" style={{backgroundColor:""}}>
					<ProyectCards />
					<MyTooltip/>
			</div>
		</div>
	);
}
