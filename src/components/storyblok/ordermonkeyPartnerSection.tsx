import {
	type SbBlokData,
	storyblokEditable,
} from "@storyblok/react/rsc";
import type { ordermonkeyPartnerSection as OrdermonkeyPartnerSectionType } from "@/.storyblok/types/287474179047807/storyblok-components";

const OrdermonkeyPartnerSection = ({
	blok,
}: {
	blok: OrdermonkeyPartnerSectionType;
}) => {
	return (
		<section
			{...storyblokEditable(blok as SbBlokData)}
			className="py-16 md:pt-[160px] md:pb-[100px] lg:py-0 lg:flex lg:items-center lg:h-screen lg:pt-8"
			id="partners"
		>
			<div className="main__container slide__up">
				{blok.title && (
					<h2 className="text-32 leading-8 font-Grauna lg:secondary__title text-center text-text900 mb-8 md:mb-16 lg:mb-8">
						{blok.title}
					</h2>
				)}

				<div className="hidden md:block">
					{blok.sub_title && (
						<>
							<h3 className="text-16 leading-22 font-Grauna md:text-20 md:leading-7 text-text900 pt-4 pb-[10px] text-center lg:pb-2 lg:pt-0">
								{blok.sub_title}
							</h3>
							<div className="flex justify-center mb-4">
								<img
									src="/black-divider.svg"
									alt="Divider Graphic"
									title="Divider Graphic"
								/>
							</div>
							<div className="flex flex-wrap justify-center gap-6 pt-0 pb-0 lg:pb-2 xl:pb-10 lg:gap-2 xl:gap-6">
								{blok.cards?.map((partner) => (
									<figure key={partner._uid} className="w-[18%]">
										{partner.image?.filename && (
											<img
												src={partner.image.filename}
												alt={partner.image.alt || partner.title || "partner"}
												title={partner.image.title || partner.title || "partner"}
												className="min-w-[164px] max-w-[164px] md:min-w-[143px] md:max-w-[143px] lg:min-w-[164px] lg:max-w-[164px] min-h-[70px] max-h-[70px] object-cover mx-auto"
											/>
										)}
									</figure>
								))}
							</div>
						</>
					)}

					{blok.sub_title_2 && (
						<>
							<h3 className="text-16 leading-22 font-Grauna md:text-20 md:leading-7 text-text900 pt-4 pb-[10px] text-center mt-5">
								{blok.sub_title_2}
							</h3>
							<div className="flex justify-center mb-4">
								<img
									src="/black-divider.svg"
									alt="Divider Graphic"
									title="Divider Graphic"
								/>
							</div>
							<div className="flex flex-wrap justify-center gap-6 pt-0 pb-0 lg:pb-2 lg:gap-2 xl:gap-6">
								{blok.cards_2?.map((partner) => (
									<figure key={partner._uid} className="w-[18%]">
										{partner.image?.filename && (
											<img
												src={partner.image.filename}
												alt={partner.image.alt || partner.title || "payment partner"}
												title={partner.image.title || partner.title || "payment partner"}
												className="min-w-[164px] max-w-[164px] md:min-w-[143px] md:max-w-[143px] lg:min-w-[164px] lg:max-w-[164px] min-h-[70px] max-h-[70px] object-cover mx-auto"
											/>
										)}
									</figure>
								))}
							</div>
						</>
					)}
				</div>

				{/* Mobile slider */}
				<div className="block md:hidden">
					<div className="swiper partner__slider">
						<div className="swiper-wrapper">
							{blok.sub_title && (
								<div className="swiper-slide">
									<h3 className="text-16 leading-22 font-Grauna md:text-20 md:leading-7 text-text900 pt-4 pb-[10px] text-center lg:pb-2 lg:pt-0">
										{blok.sub_title}
									</h3>
									<div className="flex justify-center mb-4">
										<img
											src="/divider.svg"
											className="max-w-[60%]"
											alt="Divider Graphic"
											title="Divider Graphic"
										/>
									</div>
									<div className="flex justify-center flex-wrap gap-6">
										{blok.cards?.map((partner) => (
											<figure key={partner._uid} className="w-[45%]">
												{partner.image?.filename && (
													<img
														src={partner.image.filename}
														alt={partner.image.alt || partner.title || "partner"}
														title={partner.image.title || partner.title || "partner"}
														className="min-w-[143px] max-w-[143px] min-h-[64px] max-h-[64px] object-cover mx-auto"
													/>
												)}
											</figure>
										))}
									</div>
								</div>
							)}

							{blok.sub_title_2 && (
								<div className="swiper-slide">
									<h3 className="text-16 leading-22 font-Grauna md:text-20 md:leading-7 text-text900 pt-4 pb-[10px] text-center lg:pb-2 lg:pt-0">
										{blok.sub_title_2}
									</h3>
									<div className="flex justify-center mb-4">
										<img
											src="/divider.svg"
											className="max-w-[60%]"
											alt="Divider Graphic"
											title="Divider Graphic"
										/>
									</div>
									<div className="flex justify-center flex-wrap gap-6">
										{blok.cards_2?.map((partner) => (
											<figure key={partner._uid} className="w-[45%]">
												{partner.image?.filename && (
													<img
														src={partner.image.filename}
														alt={partner.image.alt || partner.title || "payment partner"}
														title={partner.image.title || partner.title || "payment partner"}
														className="min-w-[143px] max-w-[143px] min-h-[64px] max-h-[64px] object-cover mx-auto"
													/>
												)}
											</figure>
										))}
									</div>
								</div>
							)}
						</div>

						<div className="slider__navigation">
							<div className="swiper-button-prev">
								<img
									src="/arrow-right.svg"
									className="rotate-180 w-10 h-10"
									alt="Arrow"
									title="Arrow"
								/>
							</div>
							<div className="swiper-button-next">
								<img
									src="/arrow-right.svg"
									className="w-10 h-10"
									alt="Arrow"
									title="Arrow"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OrdermonkeyPartnerSection;
