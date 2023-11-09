import { title } from "@/components/primitives";
import CardTest from "@/components/cardTest";
import TestPop from "@/components/testpop"
import MultipleCards from "@/components/MultipleCards";

export default function Proyectos() {
	return (
		<div className="container w-full py-8 md:py-10">
			<div className="container w-full">
				<h1 className={title({ color: "red" }) + " py-8"}>Proyectos</h1>
			</div>
			<div className="container w-full mt-12">
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
