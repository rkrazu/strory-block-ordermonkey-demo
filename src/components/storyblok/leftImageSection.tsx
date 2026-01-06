import {
	renderRichText,
	type SbBlokData,
	storyblokEditable,
} from "@storyblok/react/rsc";
import parse from "html-react-parser";
import type { leftImageSection as LeftImageSectionType } from "@/.storyblok/types/288385466767815/storyblok-components";

const LeftImageSection = ({ blok }: { blok: LeftImageSectionType }) => {
	return (
		<section
			{...storyblokEditable(blok as SbBlokData)}
			className="py-16 lg:py-0 lg:h-screen lg:flex lg:items-center"
		>
			<div className="main__container">
				<div className="flex items-center gap-4 lg:gap-16">
					<figure
						className="relative w-full lg:min-w-[40%] lg:max-w-[40%] xl:min-w-[48.19%] xl:max-w-[48.19%] slide__up"
						style={{ opacity: 0, transform: "translateY(300px)" }}
					>
						{blok.image?.filename && (
							<img
								decoding="async"
								src={blok.image.filename}
								className="w-full h-full object-cover rounded-lg lg:h-[28.5rem] hd:h-[500px] 2k:h-[700px]"
								alt={blok.image.alt || "increase-customer"}
								title={blok.image.title || "increase-customer"}
							/>
						)}
						<img
							decoding="async"
							src="/black-icon.svg"
							className="absolute top-[-105px] left-0 hidden lg:block"
							alt="Black Graphic"
							title="Black Graphic"
						/>
						{/* Static Badge - Desktop */}
						<div className="secondary__details text-center text-whiteColor bg-[rgba(0,0,0,0.64)] py-2 px-4 absolute bottom-8 left-8 items-center gap-[6px] rounded-full hidden md:flex">
							<span className="icon-flash text-primaryColor text-[24px] mt-[6px]"></span>
							<span>{blok.image_caption}</span>
						</div>
						{/* Mobile Title & Badge */}
						<div className="block md:hidden py-8 px-5 bg-blackColor text-whiteColor rounded-b-xl mt-[-16px]">
							{blok.title && (
								<h3 className="secondary__title mb-6">{blok.title}</h3>
							)}
							<div className="secondary__details text-whiteColor flex items-center gap-2">
								<span className="icon-flash text-primaryColor w-6 h-6 mt-[6px]"></span>
								<span>{blok.image_caption}</span>
							</div>
						</div>
					</figure>

					<div
						className="hidden md:block relative slide__up "
						style={{ opacity: 0, transform: "translateY(300px)" }}
					>
						<img
							decoding="async"
							src="/spark-red.svg"
							alt="Spark Graphic"
							title="Spark Graphic"
						/>
						{blok.title && (
							<h2 className="secondary__title text-text900 mb-6 mt-1">
								{blok.title}
							</h2>
						)}
						{blok.description && (
							<div className="secondary__details text-text800 mb-6">
								{parse(renderRichText(blok.description) ?? "")}
							</div>
						)}

						{/* Hardcoded List Items */}
						<ul className="md:flex md:flex-col lg:flex-row gap-2 lg:gap-6 md:mb-3 lg:mb-12">
							{
							blok.tags?.map((item, index) => (
								
								<li key={index} className="animate-slide-from-right">
									<div className="py-3 px-5 inline-flex items-center gap-3 bg-shade3 rounded-full secondary__details font-bold">
										<span className="icon-candle-2 text-primaryColor text-[28px]"></span>
										{item.text}
									</div>
								</li>
							))}
						</ul>

						{blok.link?.url && blok.link_text && (
							<a
								href={blok.link.url}
								target={blok.link.target === "_blank" ? "_blank" : undefined}
								className="startJourneyOpen red__outline__btn w-[265px] hidden md:block"
								title={blok.link_text}
							>
								{blok.link_text}
							</a>
						)}

						<img
							decoding="async"
							src="/red-icon.svg"
							className="absolute bottom-[-100px] right-[-30px] hidden lg:block"
							alt="Red Graphic"
							title="Red Graphic"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LeftImageSection;