import {
	renderRichText,
	type SbBlokData,
	storyblokEditable,
} from "@storyblok/react/rsc";
import parse from "html-react-parser";
import type { heroVideoSection as HeroVideoSectionType } from "@/.storyblok/types/288385466767815/storyblok-components";

const HeroVideoSection = ({ blok }: { blok: HeroVideoSectionType }) => {
	return (
		<section
			{...storyblokEditable(blok as SbBlokData)}
			className="relative wp-block-create-block-ordermonkey-hero-video"
		>
			<div className="relative">
				{/* Thumbnail */}
				{blok.video_thumb?.filename && (
					<img
						src={blok.video_thumb.filename}
						alt={blok.video_thumb.alt || "Video Thumbnail"}
						className="absolute inset-0 w-full h-full object-cover min-h-[756px] lg:h-screen z-20 transition-opacity duration-700 ease-in-out thumbnail"
						style={{ transition: "opacity 0.7s", opacity: 0, display: "none" }}
					/>
				)}

				{/* Video */}
				{/* Note: Video source is not currently mapped in schema. Using static placeholder or assuming image field might be used if adapted later. 
            For now, preserving structure. If a video field is added, map it here. */}
				<video
					autoPlay
					muted
					loop
					playsInline
					className="w-full object-cover min-h-[756px] lg:h-screen"
					src="https://ordermonkey.com/wp-content/themes/ordermonkey/assets/images/promo.mp4"
				></video>

				<div className="absolute inset-0 bg-black opacity-50"></div>
			</div>

			<div className="absolute top-0 left-0 w-full h-full lg:h-screen flex flex-col items-center justify-center z-30 text-whiteColor">
				<div
					className="main__container text-center slide__up animate-slide-up"
					style={{ opacity: 0, transform: "translateY(300px)" }}
				>
					{blok.title && (
						<h1 className="primary__heading mb-[43px] md:mb-6 relative normal-case">
							{parse(renderRichText(blok.title) ?? "")}
							<img
								src="/spark.svg"
								alt="Spark Graphic"
								title="Spark Icon"
								className="absolute top-[-66px] right-0 left-0 mx-auto -rotate-[30deg] lg:-rotate-[6deg] xl:rotate-0 xl:left-auto xl:right-[20%] lg:right-[-52%] h-[44px] w-[44px] lg:h-[88px] lg:w-[88px]"
							/>
						</h1>
					)}

					{blok.description && (
						<div className="primary__details mb-16 hidden lg:block lg:max-w-[1022px] lg:mx-auto">
							{parse(renderRichText(blok.description) ?? "")}
						</div>
					)}

					{blok.link?.url && blok.link_text && (
						<a
							href={blok.link.url}
							target={blok.link.target === "_blank" ? "_blank" : undefined}
							className="white__outline__btn"
							title={blok.link_text}
						>
							{blok.link_text}
						</a>
					)}
				</div>
			</div>
		</section>
	);
};

export default HeroVideoSection;
