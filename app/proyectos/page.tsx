import { title } from "@/components/primitives";
import ProyectCards from "@/components/ProyectCards";
import RendersCards from "@/components/RendersCards"

export default function Proyectos() {
	return (
		<section>
			<div className="w-full bg-[#000000] mx-auto text-center py-[100px]">
				<h1 className={` ${title({})} text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]`}>
					Explora&nbsp;
				</h1>
				<h1 className={` ${title({ color: "red" })} text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]`}>
					nuestro Portafolio
				</h1>
				<p className='text-balance'>
					Inspiración en Cada Diseño
				</p>
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
