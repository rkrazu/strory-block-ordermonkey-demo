import {
	renderRichText,
	type SbBlokData,
	storyblokEditable,
} from "@storyblok/react/rsc";
import parse from "html-react-parser";
import type { SmartOrderingSection as SmartOrderingSectionType } from "@/.storyblok/types/288385466767815/storyblok-components";

const SmartOrderingSection = ({ blok }: { blok: SmartOrderingSectionType }) => {
	return (
		<div
			{...storyblokEditable(blok as SbBlokData)}
			className="wp-block-create-block-ordermonkey-text-image"
		>
			<section
				id="newWay"
				className="bg-cover bg-no-repeat bg-center lg:!h-screen flex items-center"
				style={{
					backgroundImage:
						"url(" + blok.bg_image?.filename + ")",
				}}
			>
				<div className="main__container">
					<div className="flex items-center mdPlus:items-end lg:items-center flex-col-reverse lg:justify-between mdPlus:flex-row gap-6 mdPlus:gap-[60px] pt-[41px] pb-8">
						<div
							className="text-whiteColor mdPlus:min-w-[50%] mdPlus:max-w-[50%] xl:min-w-[62.7%] xl:max-w-[62.7%] text-center mdPlus:text-left mdPlus:ml-10 slide__up"
							style={{ opacity: 0, transform: "translateY(300px)" }}
						>
							{blok.title && (
								<h2 className="primary__heading mb-6">
									{parse(renderRichText(blok.title) ?? "")}
								</h2>
							)}
							{blok.description && (
								<div className="primary__details mb-[37px] md:mb-8">
									{parse(renderRichText(blok.description) ?? "")}
								</div>
							)}
							<ul className="flex items-center flex-col md:flex-row justify-center mdPlus:justify-start gap-4 relative z-20">
								<li className="w-full md:w-auto">
									{blok.link?.url && blok.link_text && (
										<>
											<button
												className="startJourneyOpen secondary__btn hidden md:block"
												title={blok.link_text}
											>
												{blok.link_text}
											</button>
											<a
												href={blok.link.url}
												target={blok.link.target === "_blank" ? "_blank" : undefined}
												className="secondary__btn md:hidden w-full"
											>
												{blok.link_text}
											</a>
										</>
									)}
								</li>
								<li className="w-full md:w-auto">
									{blok.link_2?.url && blok.link_text_2 && (
										<>
											<button
												className="getInTouchOpen primary__btn hidden md:block"
												title={blok.link_text_2}
											>
												{blok.link_text_2}
											</button>
											<a
												href={blok.link_2.url}
												target={blok.link_2.target === "_blank" ? "_blank" : undefined}
												className="primary__btn md:hidden w-full"
											>
												{blok.link_text_2}
											</a>
										</>
									)}
								</li>
							</ul>
						</div>
						<div
							className="relative slide__up"
							style={{ opacity: 0, transform: "translateY(300px)" }}
						>
							{blok.thumbnail?.filename && (
								<img
									decoding="async"
									src={blok.thumbnail.filename}
									className="thumbnail absolute top-0 left-0 w-full lg:max-w-[400px] xl:w-full max-h-[372px] md:max-h-[400px]"
									alt={blok.thumbnail.alt || "Thumbnail preview"}
									style={{ display: "none" }}
								/>
							)}
							{blok.image?.filename && (
								<img
									decoding="async"
									src={blok.image.filename}
									className="main-image w-full lg:max-w-[400px] xl:w-full max-h-[372px] md:max-h-[400px] opacity-0 transition-opacity duration-500"
									alt={blok.image.alt || "Main Image"}
									title={blok.image.title || "Main Image"}
									style={{ opacity: 1 }}
								/>
							)}
							<img
								decoding="async"
								src="/spark.svg"
								className="absolute top-[-50px] right-0 w-16"
								title="icon"
								alt="Spark Graphic"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SmartOrderingSection;
