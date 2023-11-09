import { title } from "@/components/primitives";
import PopoverTest from "@/components/PopoverTest"
import ProyectCrds from "@/components/ProyectCards";

export default function Proyectos() {
	return (
		<div className="container w-full py-8 md:py-10">
			<div className="container w-full">
				<h1 className={title({ color: "red" }) + " py-8"}>Proyectos</h1>
			</div>
			<div className="container w-full mt-12">
				<div className="gap-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-4">
					<ProyectCrds />
				</div>
			</div>
		</div>
	);
}
