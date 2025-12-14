import {
	renderRichText,
	type SbBlokData,
	storyblokEditable,
} from "@storyblok/react/rsc";
import parse from "html-react-parser";
import type { heroSection as heroSectionType } from "@/.storyblok/types/287474179047807/storyblok-components";

const heroSection = ({ blok }: { blok: heroSectionType }) => {
	return (
		<section
			{...storyblokEditable(blok as SbBlokData)}
			className="px-20 py-40 h-screen bg-cover bg-center bg-no-repeat sm:mt-20 mt-10"
			style={{ backgroundImage: `url(${blok?.bg_image?.filename || ""})` }}
			>
				<h1 className="text-left mb-5 text-9xl leading-[150px] font-extrabold text-white">{blok?.title}</h1>
				<div className="richtext text-left text-6xl leading-12 font-extrabold text-white">
					{parse(renderRichText(blok?.description) ?? "")}
				</div>
			</section>
		);
};
export default heroSection;
