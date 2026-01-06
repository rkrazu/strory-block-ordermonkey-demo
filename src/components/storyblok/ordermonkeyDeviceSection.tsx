import {
	type SbBlokData,
	storyblokEditable,
} from "@storyblok/react/rsc";
import type { OrdermonkeyDeviceSection as OrdermonkeyDeviceSectionType } from "@/.storyblok/types/288385466767815/storyblok-components";

const OrdermonkeyDeviceSection = ({
	blok,
}: {
	blok: OrdermonkeyDeviceSectionType;
}) => {
	return (
		<section
			{...storyblokEditable(blok as SbBlokData)}
			className="py-16 lg:py-0 lg:flex lg:items-center lg:h-screen"
		>
			<div className="main__container">
				<div className="flex justify-center mb-6 lg:mb-2 slide__up">
					<img
						src="/spark-red.svg"
						alt="Spark Graphic"
						title="Spark Graphic"
						className="w-12 text-center"
					/>
				</div>

				{blok.title && (
					<h2 className="text-32 md:text-48 leading-8 font-Grauna lg:secondary__title text-center text-text900 mb-8 md:mb-[100px] lg:mb-14 hd:mb-14 slide__up">
						{blok.title}
					</h2>
				)}

				<div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-[100px] lg:mb-0 slide__up">
					{blok.cards?.map((card) => (
						<div key={card._uid} className="text-center mb-10 lg:mb-2">
							{card.image?.filename && (
								<figure className="text-center inline-block">
									<img
										src={card.image.filename}
										alt={card.image.alt || card.title || "device"}
										title={card.image.title || card.title || "device"}
										className="min-h-[281px] max-h-[281px]"
									/>
								</figure>
							)}
							{card.title && (
								<h3 className="tertiary__title font-SpaceGrotesk font-bold text-text900 mt-4">
									{card.title}
								</h3>
							)}
						</div>
					))}
				</div>

				{/* Mobile Slider Version */}
				<div className="text-center block md:!hidden slide__up">
					<div className="swiper ecosystem__slider">
						<div className="swiper-wrapper">
							{blok.cards?.map((card) => (
								<div key={card._uid} className="swiper-slide">
									<div className="text-center">
										{card.image?.filename && (
											<figure className="text-center inline-block">
												<img
													src={card.image.filename}
													alt={card.image.alt || card.title || "device"}
													title={card.image.title || card.title || "device"}
													className="min-h-[281px] max-h-[281px]"
												/>
											</figure>
										)}
										{card.title && (
											<h3 className="text-24 leading-[62px] font-Grauna text-blackColor">
												{card.title}
											</h3>
										)}
									</div>
								</div>
							))}
						</div>
						<div className="swiper-pagination !relative mt-8"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OrdermonkeyDeviceSection;
