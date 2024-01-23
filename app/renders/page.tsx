import { title } from "@/components/primitives";
import RendersCards from "@/components/RendersCards"

export default function RendersPage() {
	return (
		<section>
			<div className="w-full renders-paralax text-center py-[125px]">
				<h1 className={` ${title({})} text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]`}>
					Explora&nbsp;
				</h1>
				<h1 className={` ${title({ color: "red" })} text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]`}>
					nuestros renders
				</h1>
				<p className='text-lg'>
					Inspiración en Cada Diseño
				</p>
			</div>
			{/* RenderCards */}
			<RendersCards />
			{/* RenderCards */}
		</section>
	);
}
