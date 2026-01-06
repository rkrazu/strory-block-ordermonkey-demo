import {
	type SbBlokData,
	storyblokEditable,
} from "@storyblok/react/rsc";
import type { OrdermonkeyEcosystemSlide as OrdermonkeyEcosystemSlideType } from "@/.storyblok/types/288385466767815/storyblok-components";
import Link from "next/link";

const OrdermonkeyEcosystemSlide = ({
	blok,
}: { blok: OrdermonkeyEcosystemSlideType }) => {
	return (
		<section
			{...storyblokEditable(blok as SbBlokData)}
			className="py-16 lg:py-0 lg:flex lg:items-center lg:h-screen relative overflow-hidden"
		>
			<img
				title="Slider Background"
				src="/slider-bg.svg"
				className="absolute bottom-0 right-0 hidden lg:block 2k:w-[50%]"
				alt="Slider Background"
			/>
			<img
				title="Red Icon Graphic"
				src="/red-icon.svg"
				className="absolute right-[-30px] top-[40%] red-icon-animate hidden lg:block"
				alt="Red Icon Graphic"
			/>

			{/* Desktop Design */}
			<div className="main__container hidden lg:block slide__up">
				<div className="flex justify-between gap-[100px] hd:gap-[250px] 2k:gap-[500px] relative main__slider">
					<div className="w-1/2">
						<figure className="mb-16">
							<img
								title="Black Icon Graphic"
								src="/black-icon.svg"
								className="black-icon-animate"
								alt="Black Icon Graphic"
							/>
						</figure>
						
						<div className="swiper main-slider-headings">
							<div className="swiper-wrapper">
								{blok.cards?.map((card) => (
									<div className="swiper-slide" key={card._uid}>
										<h2 className="text-20 leading-[27px] font-bold text-text900 mb-2">
											{card.tag}
										</h2>
										<h3 className="secondary__title text-text900">
											{card.title}
										</h3>

										<p className="text-16 leading-22 tracking-[-.16px] text-text800 mt-6 line-clamp-5 h-[140px] hd:text-[18px] hd:leading-[28px] lg:mb-[10px] hd:mb-4">
											{card.description}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="w-1/2">
						<div className="swiper main-slider-images">
							<div className="swiper-wrapper">
								{blok.cards?.map((card) => (
									<div className="swiper-slide" key={card._uid}>
										{card.image?.filename && (
											<figure>
												<img
													src={card.image.filename}
													alt={card.image.alt || "slider image"}
													title={card.image.title || "slider image"}
													className="min-w-[560px] max-w-[560px] min-h-[550px] max-h-[550px] hd:min-w-[700px] hd:max-w-[700px] hd:min-h-[680px] hd:max-h-[680px] object-cover relative z-10"
												/>
											</figure>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="swiper-button-next !left-[75px] bottom-0 !mt-[250px] ml-5">
						<img
							src="/arrow-right.svg"
							className="min-h-16 min-w-16"
							alt="Left Arrow Graphic"
							title="Left Arrow Graphic"
						/>
					</div>
					<div className="swiper-button-prev !left-0 bottom-0 !mt-[250px] ml-5">
						<img
							src="/arrow-right.svg"
							className="min-h-16 min-w-16 rotate-180"
							alt="Right Arrow Graphic"
							title="Right Arrow Graphic"
						/>
					</div>
				</div>
			</div>

			{/* Mobile Design */}
			<div className="main__container block lg:hidden">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{blok.cards?.map((card) => (
						<Link href="/" key={card._uid}>
							<div
								className="pt-10 px-5 pb-8 min-h-[543px] max-h-[543px] bg-no-repeat bg-cover bg-center rounded-xl relative"
								style={{
									backgroundImage: `url('${card.background_image?.filename || ""}')`,
									boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
								}}
							>
								{card.image?.filename && (
									<figure className="text-center">
										<img
											src={card.image.filename}
											alt={card.image.alt || "slider image"}
											title={card.image.title || "slider image"}
											className="max-w-[270px] max-h-[300px] object-cover inline-block"
										/>
									</figure>
								)}

								<div className="bg-blackColor text-whiteColor absolute bottom-0 left-0 right-0 pt-8 pb-8 pl-1 pr-5 rounded-bl-xl rounded-br-xl text-center">
									<h3 className="text-16 leading-[27px] font-bold mb-[6px] pl-5">
										{card.tag}
									</h3>
									<h4 className="text-32 leading-8 mb-5 font-Grauna pl-5">
										{card.title}
									</h4>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default OrdermonkeyEcosystemSlide;
