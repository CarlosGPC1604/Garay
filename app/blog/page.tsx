import { title } from "@/components/primitives";

export default function BlogPage() {
	return (
		<div className="h-full text-center py-[1000px]">
			<h1 className={` ${title({ color: "red" })} text-[30px] sm:text-[36px] md:font-[40px] lg:text-[44px] xl:text-[48px] 2xl:[55px]`}>
				Blog
			</h1>
		</div>
	);
}
