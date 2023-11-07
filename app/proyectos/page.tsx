import { title } from "@/components/primitives";
import CardTest from "@/components/cardTest";

export default function DocsPage() {
	return (
		<div className="py-8 md:py-10">
			<h1 className={title()}>Proyectos</h1>
			<div className="py-8 items-center justify-center gap-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
				<CardTest /><CardTest /><CardTest />
				<CardTest /><CardTest /><CardTest />
				<CardTest /><CardTest /><CardTest />
			</div>
		</div>
	);
}
