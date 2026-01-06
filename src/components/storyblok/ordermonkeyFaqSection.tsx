import {
	type SbBlokData,
	storyblokEditable,
} from "@storyblok/react/rsc";
import type { OrdermonkeyFaqSection as OrdermonkeyFaqSectionType } from "@/.storyblok/types/288385466767815/storyblok-components";
import { Link } from "@/i18n/navigation";

const OrdermonkeyFaqSection = ({
	blok,
}: {
	blok: OrdermonkeyFaqSectionType;
}) => {
	const linkHref = blok.link?.url || blok.link?.cached_url || "/";

	return (
		<section
			{...storyblokEditable(blok as SbBlokData)}
			className="py-16 md:pt-[160px] md:pb-16 lg:py-0 lg:flex lg:items-center lg:h-screen"
		>
			<div className="max-w-[900px] mx-auto text-text900 px-4 slide__up">
				<figure className="flex justify-center">
					<img src="/spark-red.svg" title="Spark Graphic" alt="Spark Graphic" />
				</figure>
				{blok.title && (
					<h2 className="secondary__title text-center mt-4 mb-6 md:my-6 lg:text-[30px] lg:leading-3 lg:mb-2 xl:text-[40px] xl:leading-[44px] xl:mb-6">
						{blok.title}
					</h2>
				)}
				{blok.sub_title && (
					<p className="text-16 leading-20 md:text-24 xl:text-32 md:leading-8 text-center flex items-center justify-center gap-2 font-Grauna mb-6 lg:text-[24px]">
						<img
							src="/monkey-head.svg"
							className="mr-2"
							title="Ordermonkey Branding Logo"
							alt="Ordermonkey Branding Logo"
						/>
						{blok.sub_title}
					</p>
				)}

				<div className="faq-container" data-total-items={blok.cards?.length}>
						{blok.cards?.map((item) => (
							<div
								key={item._uid}
								className="accordion__item bg-cover bg-center bg-no-repeat py-2 px-4 mb-4 lg:mb-2 xl:mb-4"
								style={{
									border: "10px solid transparent",
									borderImage: "url('/faq-cover.svg') 10 round",
									borderImageRepeat: "stretch",
								}}
							>
								<div className="accordion__header flex justify-between items-center cursor-pointer">
									<h3 className="text-16 leading-22 font-bold text-blackColor">
										{item.title}
									</h3>
									<span className="icon-chevron-down text-24 transform transition-transform duration-300">
									</span>
								</div>
								<div className="accordion__content overflow-hidden max-h-0 opacity-0 transition-all duration-300 ease-in-out">
                                        <div className="content-inner text-16 leading-22 font-normal text-blackColor pt-4">
										{item.description}
									</div>
								</div>
							</div>
						))}

					{blok.link_text && (
						<div className="text-center mt-0">
							<Link
								href={linkHref}
								title={blok.link_text}
								className="primary__btn px-14 border-none transition-colors duration-300"
							>
								{blok.link_text}
							</Link>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default OrdermonkeyFaqSection;
