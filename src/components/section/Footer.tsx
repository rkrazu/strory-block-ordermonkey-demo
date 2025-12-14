import { Link } from "@/i18n/navigation";
import type { FooterItem } from "@/.storyblok/types/287474179047807/storyblok-components";

const Footer = async ({ blok }: { blok?: FooterItem[] }) => {
	if (!blok) {
		return null; // Return null if no blok is provided
	}

	return (
		<footer className="bottom-0 flex gap-4 bg-black px-5 py-8 text-white">		
			<div>
				<ul className="flex items-center justify-center gap-10 font-extrabold">
					<Link className="text-white" href="/">Home</Link>
					<Link className="text-white" href="/about">About</Link>	
					<Link className="text-white" href="/contact">Contact</Link>
				</ul>
        	</div>
		</footer>
	);
};

export default Footer;
