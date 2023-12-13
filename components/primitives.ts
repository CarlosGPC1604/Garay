import { tv } from "tailwind-variants";

export const title = tv({
	base: "tracking-tight inline font-semibold",
	variants: {
		color: {
			violet: "from-[#FF1CF7] to-[#b249f8]",
			yellow: "from-[#FF705B] to-[#FFB457]",
			blue: "from-[#5EA2EF] to-[#0072F5]",
			cyan: "from-[#00b7fa] to-[#01cfea]",
			green: "from-[#6FEE8D] to-[#17c964]",
			pink: "from-[#FF72E1] to-[#F54C7A]",
			red: "from-[#FF1C1C] to-[#c92d31]",
			foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
		},
		size: {
	
		},
		fullWidth: {
			true: "w-full block",
		},
	},
	defaultVariants: {
	},
	compoundVariants: [
		{
			color: [
				"violet",
				"yellow",
				"blue",
				"cyan",
				"green",
				"pink",
				"red",
				"foreground",
			],
			class: "bg-clip-text text-transparent bg-gradient-to-b",
		},
	],
});

export const subtitle = tv({
	base: "",
	variants: {
		fullWidth: {
			true: "!w-full",
		},
	},
	defaultVariants: {
		fullWidth: true
	}
});






