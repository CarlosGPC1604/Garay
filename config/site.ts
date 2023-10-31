export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Garay Arquitectos",
	description: "Planeamos, proyectamos, construimos y supervisamos.",
	navItems: [
		{
			label: "Inicio",
			href: "/",
		},
		{
			label: "Blog",
			href: "/blog",
		},
		{
			label: "Proyectos",
			href: "/proyectos",
		},
		{
			label: "Contacto",
			href: "/contacto",
		},
	],
	navMenuItems: [
		{
			label: "Inicio",
			href: "/",
		},
		{
			label: "Blog",
			href: "/blog",
		},
		{
			label: "Proyectos",
			href: "/proyecto",
		},
		{
			label: "Contacto",
			href: "/contacto",
		},
	],
	links: {
		facebook: "https://www.facebook.com/garay.arquitectos/",
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev"
	},
};
