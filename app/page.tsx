import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import CardTest from "@/components/cardTest";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center">
				<h1 className={title({ color: "red" })}>
					Garay&nbsp;
				</h1>
				<h1 className={title()}>Arquitectos</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Planeamos, proyectamos, construimos y supervisamos.
				</h2>
			</div>

			<div className="inline-block max-w-lg text-center mt-4">
				<h2 size={60}css={{textGradient: "45deg, $purple600 -20%, $pink600 100%",}}weight="bold">
					Acerca de nosotros
				</h2>
				<h3 className="mt-4">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
				</h3>
			</div>

			<div className="gap-2 grid grid-cols-3">
				<CardTest /><CardTest /><CardTest />
			</div>
		</section>
	);
}
