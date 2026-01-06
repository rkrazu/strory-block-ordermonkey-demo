"use client";

import {
	renderRichText,
	type SbBlokData,
	storyblokEditable,
} from "@storyblok/react/rsc";
import parse from "html-react-parser";
import type { OrderMonkeyVideoSection as OrderMonkeyVideoSectionType } from "@/.storyblok/types/288385466767815/storyblok-components";
import { useState, useRef } from "react";

const OrderMonkeyVideoSection = ({
	blok,
}: { blok: OrderMonkeyVideoSectionType }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	const handlePlayClick = () => {
		setIsPlaying(true);
		// Wait for state update and then play
		setTimeout(() => {
			if (videoRef.current) {
				videoRef.current.play();
			}
		}, 100);
	};

	return (
		<section {...storyblokEditable(blok as SbBlokData)}>
			<div className="bg-cover bg-no-repeat bg-center relative bg-primaryColor pt-16 pb-[80px] lg:py-[100px] lg:w-full">
				<div className="main__container">
					{blok.title && (
						<h2 className="secondary__title mb-6 mdPlus:mb-10 text-center text-whiteColor">
							{parse(renderRichText(blok.title) ?? "")}
						</h2>
					)}
					<div className="relative">
						<div
							className="video-wrapper w-full max-w-[1148px] mx-auto rounded-2xl overflow-hidden relative slide__up "
							style={{ opacity: 0, transform: "translateY(300px)" }}
						>
							{/* Thumbnail */}
							{!isPlaying && (
								<div
									className="video-thumbnail relative cursor-pointer"
									onClick={handlePlayClick}
								>
									{blok.video_thumb?.filename && (
										<img
											decoding="async"
											src={blok.video_thumb.filename}
											alt={blok.video_thumb.alt || "Video thumbnail"}
											className="w-full h-auto object-cover rounded-2xl max-h-[560px]"
										/>
									)}
									<img
										decoding="async"
										src="/play-icon.webp"
										alt="Media Player Play Icon"
										className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer w-16 h-16"
									/>
								</div>
							)}

							
				{/* Video */}
				{/* Note: Video source is not currently mapped in schema. Using static placeholder or assuming image field might be used if adapted later. 
            For now, preserving structure. If a video field is added, map it here. */}

								<video
									ref={videoRef}
									controls
									playsInline
									className={`${isPlaying ? "block" : "hidden"} w-full h-auto object-cover rounded-2xl lg:w-[1000px] xl:w-[1200px] xl:h-auto hd:w-[1600px] mx-auto`}
									aria-label="Promotional video"
									src="https://ordermonkey.com/wp-content/themes/ordermonkey/assets/videos/lite-About-ORDERMONKEY-EN.mp4"
								/>
						</div>

						<img
							decoding="async"
							src="/spark.svg"
							alt="Spark Graphic"
							className="absolute bottom-[-54px] right-[-75px] rotate-[90deg] hidden lg:block"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OrderMonkeyVideoSection;
