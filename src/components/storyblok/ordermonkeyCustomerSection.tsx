import {
	type SbBlokData,
	storyblokEditable,
} from "@storyblok/react/rsc";
import type { ordermonkeyCustomerSection as OrdermonkeyCustomerSectionType } from "@/.storyblok/types/288385466767815/storyblok-components";

const OrdermonkeyCustomerSection = ({
	blok,
}: {
	blok: OrdermonkeyCustomerSectionType;
}) => {
	return (
		<section
			{...storyblokEditable(blok as SbBlokData)}
			className="py-16 lg:py-[100px]"
			id="customers"
		>
			<div className="main__container">
				<div className="max-w-[400px] md:max-w-[687px] mx-auto relative">
					<div className="absolute left-[-21px] top-[-27px] rotate-[-23deg] hidden md:block">
						<img
							src="/spark-red.svg"
							alt="Spark Graphic"
							title="Spark Graphic"
							className="w-12 text-center"
						/>
					</div>
					{blok.title && (
						<h2 className="text-32 leading-8 font-Grauna lg:secondary__title text-center text-text900 mb-8 md:mb-16 lg:text-[56px] lg:leading-[60px] lg:mb-[100px] hd:mb-[200px] slide__up">
							{blok.title}
						</h2>
					)}
				</div>

				<div className="relative">
					<div className="mb-16 md:mb-[128px] lg:mb-0">
						<div className="swiper logo__slider">
							<div className="swiper-wrapper">
								{blok.cards?.map((card) => (
									<div key={card._uid} className="swiper-slide flex justify-center">
										{card.image?.filename && (
											<figure className="text-center inline-block">
												<img
													src={card.image.filename}
													alt={card.image.alt || card.title || "customer logo"}
													title={card.image.title || card.title || "customer logo"}
													className="w-auto"
												/>
											</figure>
										)}
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="absolute left-[-16px] top-[-22px] z-10 hidden">
						<img
							src="/black-icon.svg"
							alt="Black Icon Graphic"
							title="Black Icon Graphic"
							className="w-10"
						/>
					</div>
					<div className="absolute right-[-16px] bottom-[-60px] z-10 hidden">
						{/* round-icon.svg was mentioned in PHP but not found in public/, keeping for structure */}
						<img
							src="/round-icon.svg"
							alt="Round Icon Graphic"
							title="Round Icon Graphic"
							className="w-10"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OrdermonkeyCustomerSection;
