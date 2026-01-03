import {
	renderRichText,
	type SbBlokData,
	storyblokEditable,
} from "@storyblok/react/rsc";
import parse from "html-react-parser";
import type { heroSection as heroSectionType } from "@/.storyblok/types/287474179047807/storyblok-components";

const heroSection = ({ blok }: { blok: heroSectionType }) => {
	return (
		<div
			{...storyblokEditable(blok as SbBlokData)}
			className="wp-block-create-block-ordermonkey-discount"
		>
			<section
				className="bg-cover bg-no-repeat bg-center flex items-center h-[400px] md:h-[982px] lg:h-screen overlay-20"
				style={{
					backgroundImage: `url(${blok?.bg_image?.filename})`,
				}}
			>
				<div className="main__container w-full">
					<div
						className="min-w-[60%] md:max-w-[80%] lg:max-w-[60%] text-whiteColor slide__up relative z-[1] animate-slide-up"
						style={{ opacity: 0, transform: "translateY(300px)" }}
					>
						<img
							decoding="async"
							src="/spark-red.svg"
							title="Spark Graphic"
							alt="Spark Graphic"
						/>
						{blok?.title && (
							<h2
								className="text-[64px] leading-16 md:text-[82px] lg:text-[128px] lg:leading-[128px] font-Grauna tracking-[1px] my-2 md:my-4"
								style={{ textShadow: "0px 25px 50px rgba(0, 0, 0, 0.25)" }}
							>
								{blok.title}
							</h2>
						)}
						{blok?.description && (
							<div
								className="text-20 leading-26 tracking-[0.2px] md:font-Grauna md:text-56 md:leading-[56px] md:tracking-[1.2px]"
								style={{ textShadow: "0px 25px 50px rgba(0, 0, 0, 0.25)" }}
							>
								{parse(renderRichText(blok.description) ?? "")}
							</div>
						)}
					</div>
				</div>
			</section>
		</div>
	);
};
export default heroSection;
