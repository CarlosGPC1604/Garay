import { title } from "@/components/primitives";
import CardTest from "@/components/cardTest";
import TestPop from "@/components/testpop"
import MultipleCards from "@/components/MultipleCards";

export default function DocsPage() {
	return (
		<div className="container w-full">
			<div className="container w-full">
				<h1 className={title({ color: "red" })}>Proyectos</h1>
			</div>
			<div className="container w-full mt-4">
				<div className="grid xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3 gap-5">
					<div>
						<CardTest /><TestPop />
					</div>
					<div>
						<CardTest /><TestPop />
					</div>
					<div>
						<CardTest /><TestPop />
					</div>
					<div>
						<CardTest /><TestPop />
					</div>
					<div>
						<CardTest /><TestPop />
					</div>
					<div>
						<CardTest /><TestPop />
					</div>
				</div>
			</div>
		</div>
	);
}
