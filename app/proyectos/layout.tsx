export default function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="items-center justify-center">
			<div className="inline-block text-center justify-center">
				{children}
			</div>
		</section>
	);
}
