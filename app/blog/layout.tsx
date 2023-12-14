export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="items-center justify-center gap-4">
			<div className="inline-block max-w-lg text-center justify-center ">
				{children}
			</div>
		</section>
	);
}
