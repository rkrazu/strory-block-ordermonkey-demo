import {
	renderRichText,
	type SbBlokData,
	storyblokEditable,
} from "@storyblok/react/rsc";
import parse from "html-react-parser";
import type { OrdermonkeyEcosystemSection as OrdermonkeyEcosystemSectionType } from "@/.storyblok/types/288385466767815/storyblok-components";

const OrdermonkeyEcosystemSection = ({
	blok,
}: {
	blok: OrdermonkeyEcosystemSectionType;
}) => {
	return (
		<section
			{...storyblokEditable(blok as SbBlokData)}
			className="py-16 lg:py-0 bg-primaryColor lg:h-screen lg:flex lg:items-center"
			id="allFeatures"
		>
			<div className="main__container">
				{blok.title && (
					<h2
						className="text-[48px] leading-12 mb:leading-8 font-Grauna lg:secondary__title text-center text-whiteColor mb-[20px] md:mb-6 lg:mb-4 hd:mb-4 slide__up "
						style={{ opacity: 0, transform: "translateY(300px)" }}
					>
						{blok.title}
					</h2>
				)}
				{blok.title_2 && (
					<h2
						className="text-[48px] leading-12 mb:leading-8 font-Grauna lg:secondary__title text-center text-whiteColor mb-[80px] md:mb-16 lg:mb-12 hd:mb-10 slide__up "
						style={{ opacity: 0, transform: "translateY(300px)" }}
					>
						{blok.title_2}
					</h2>
				)}

				{/* Desktop Grid */}
				<div
					className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 hd:gap-[50px] 2k:gap-[100px] slide__up "
					style={{ opacity: 0, transform: "translateY(300px)" }}
				>
					{blok.cards?.map((card, index) => (
						<div key={card._uid} className="text-center text-whiteColor mb-10 lg:mb-2">
							{card.image?.filename && (
								<figure className="text-center inline-block">
									<img
										decoding="async"
										src={card.image.filename}
										alt={card.image.alt || card.title || "feature"}
										title={card.image.title || card.title || "feature"}
										className="max-w-[5rem]"
									/>
								</figure>
							)}
							{card.title && (
								<h3 className="tertiary__title mb-4 mt-8 lg:mt-3 lg:mb-1 lg:text-[1.375rem] !tracking-[0.5px]">
									{card.title}
								</h3>
							)}
							{card.description && (
								<p className="primary__details lg:leading-6 lg:text-[1.125rem] lg:px-2">
									{card.description}
								</p>
							)}
						</div>
					))}
				</div>

				{/* Mobile Swiper */}
				<div
					className="text-center text-whiteColor block md:!hidden slide__up"
					
				>
					<div className="swiper card__slider">
						<div
							className="swiper-wrapper"
						>
							{blok.cards?.map((card, index) => (
								<div
									key={card._uid}
									className="swiper-slide"
								>
									{card.image?.filename && (
										<figure className="text-center inline-block">
											<img
												decoding="async"
												src={card.image.filename}
												alt={card.image.alt || card.title || "feature"}
												title={card.image.title || card.title || "feature"}
											/>
										</figure>
									)}
									{card.title && (
										<h3 className="text-24 leading-6 mb-[10px] font-Grauna mt-8">
											{card.title}
										</h3>
									)}
									{card.description && (
										<p className="secondary__details">
											{card.description}
										</p>
									)}
								</div>
							))}
						</div>
						<div className="swiper-pagination !relative mt-10"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OrdermonkeyEcosystemSection;
