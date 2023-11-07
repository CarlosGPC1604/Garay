import { title } from "@/components/primitives";
import CardTest from "@/components/cardTest";

export default function DocsPage() {
	return (
		<div>
			<h1 className={title()}>Proyectos</h1>
			<div className=" py-8 md:py-10 gap-2 grid grid-cols-3 mt-6 ">
				<CardTest /><CardTest /><CardTest />
				<CardTest /><CardTest /><CardTest />
				<CardTest /><CardTest /><CardTest />
			</div>
		</div>
	);
}
