import type { FooterItem, StoryblokMultiasset, StoryblokRichtext } from "@/.storyblok/types/288385466767815/storyblok-components";
import { renderRichText } from "@storyblok/react/rsc";
import parse from "html-react-parser";

const Footer = ({ blok,logo, footer_item_title_1, footer_item_title_2, footer_item_title_3, footer_item_desc_3, footer_item_title_4, footer_item_desc_4, footer_social_title, footer_copyright_text }: { blok?: FooterItem[], logo?: StoryblokMultiasset[], footer_item_title_1?: string, footer_item_title_2?: string, footer_item_title_3?: string, footer_item_desc_3?: StoryblokRichtext, footer_item_title_4?: string, footer_item_desc_4?: StoryblokRichtext, footer_social_title?: string, footer_copyright_text?: string }) => {
	console.log(blok);
	return (
		<footer className="main__footer">
			<div className="footer__top__icon">
				<img
					src="/footer-top.svg"
					className="w-full hidden md:block"
					alt="footer-icon"
				/>
				<img
					src="/footer-top-mobile.svg"
					className="w-full block md:hidden"
					alt="footer-icon"
				/>
			</div>
			<div className="footer__cover text-whiteColor mt-[-2px]">
				<div className="main__container">
					<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 text-center md:text-left gap-4">
						<div>
							<a href="/">
								<div className="footer-widget">
									<figure className="wp-block-image size-full mb-10 lg:mb-16 flex justify-center md:justify-start">
										<img
										src={logo?.[0].filename}
										className="w-[57px]"
										alt="monkey-head"
										title="monkey-head"
									/>
									<img
										src={logo?.[1].filename}
										className="w-[110px]"
										alt="Order Monkey Text Logo"
										title="Order Monkey Text Logo"
									/>
									</figure>
								</div>{" "}
							</a>

							<div className="mb-12 md:mb-0">
								<div className="text-16 font-Grauna mb-5">{footer_social_title}</div>
								<ul className="flex items-center justify-center md:justify-start gap-4">
									<li>
										<a
											href="/"
											target="_blank"
											rel="noopener noreferrer"
											title="Instagram"
										>
											<span className="icon-instagram text-24"></span>
										</a>
									</li>
									<li>
										<a
											href="/"
											target="_blank"
											rel="noopener noreferrer"
											title="Linkedin"
										>
											<span className="icon-linkedin text-24"></span>
										</a>
									</li>
									<li>
										<a
											href="/"
											target="_blank"
											rel="noopener noreferrer"
											title="Facebook"
										>
											<span className="icon-facebook text-24"></span>
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="footer__menu">
							<div className="text-14 lg:text-16 font-Grauna mb-3 lg:mb-5">
								{footer_item_title_1}
							</div>
							<ul id="footer-menu-1" className="flex flex-col gap-2">
								{blok?.[0]?.items?.map((item, index) => (
									<li key={index}
										id={`menu-item-${index}`}
										className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3925"
									>
										<a
										href="/"
										title={item.text}
										className="footer__item"
									>
										{item.text}
									</a>
								</li>
								))}
							</ul>{" "}
						</div>
						<div className="footer__menu">
							<div className="text-14 lg:text-16 font-Grauna mb-3 lg:mb-5">
								{footer_item_title_2}
							</div>
							<ul id="footer-menu-2" className="flex flex-col gap-2">
								{blok?.[1]?.items?.map((item, index) => (
									<li key={index}
										id={`menu-item-${index}`}
										className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1658"
									>
										<a
										target="_blank"
										href="/"
										title={item.text}
										className="footer__item"
									>
										{item.text}
									</a>
								</li>
							))}
							</ul>{" "}
						</div>
						<div className="footer__menu">
							<div className="text-14 lg:text-16 font-Grauna mb-3 lg:mb-5">
								{footer_item_title_3}
							</div>
							<div className="textwidget custom-html-widget">
								<ul className="footer__menu">
								{parse(renderRichText(footer_item_desc_3) ?? "")}
								</ul>
							</div>{" "}
						</div>

						<div className="footer__menu">
							<div className="text-14 lg:text-16 font-Grauna mb-3 lg:mb-5">
								{footer_item_title_4}
							</div>
							<a
								href="/"
								target="_blank"
							>
								{parse(renderRichText(footer_item_desc_4) ?? "")}
							</a>
						</div>
					</div>
					{/* menu part ends */}
					<div className="copyright__part">
						<div>
							<div className="menu-footer-bottom-menu-en-container">
								<ul
									id="footer-bottom-menu-id"
									className="flex flex-col md:flex-row items-center gap-2 lg:gap-6"
								>
									{blok?.[2]?.items?.map((item, index) => (
									<li key={index}
										id={`menu-item-${index}`}
										className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4087"
									>
										<a
											href="/"
											title={item.text}
											className="footer__item font-light hover:border-b border-whiteColor"
										>
											{item.text}
										</a>
									</li>
									))}
								</ul>
							</div>
						</div>
						<div className="mt-[18px] md:mt-0">
							<div className="footer-widget">
								<p>{footer_copyright_text}</p>
							</div>{" "}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
