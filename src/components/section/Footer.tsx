import type { FooterItem } from "@/.storyblok/types/287474179047807/storyblok-components";

const Footer = ({ blok }: { blok?: FooterItem[] }) => {
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
											decoding="async"
											src="/footer-logo.svg"
											alt="Order Monkey Logo"
											className="wp-image-2341 w-[250px] md:w-[161px]"
											title="Order Monkey"
										/>
									</figure>
								</div>{" "}
							</a>

							<div className="mb-12 md:mb-0">
								<div className="text-16 font-Grauna mb-5">Let’s Connect</div>
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
								Ecosystem
							</div>
							<ul id="footer-menu-1" className="flex flex-col gap-2">
								<li
									id="menu-item-3925"
									className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3925"
								>
									<a
										href="/"
										title="Self Order Terminal"
										className="footer__item"
									>
										Self Order Terminal
									</a>
								</li>
								<li
									id="menu-item-3924"
									className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3924"
								>
									<a
										href="/"
										title="QR Web App"
										className="footer__item"
									>
										QR Web App
									</a>
								</li>
								<li
									id="menu-item-3923"
									className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3923"
								>
									<a
										href="/"
										title="Web Shop"
										className="footer__item"
									>
										Web Shop
									</a>
								</li>
								<li
									id="menu-item-3922"
									className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3922"
								>
									<a
										href="/"
										title="OMK Pay"
										className="footer__item"
									>
										OMK Pay
									</a>
								</li>
								<li
									id="menu-item-3921"
									className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3921"
								>
									<a
										href="/"
										title="Loyalty"
										className="footer__item"
									>
										Loyalty
									</a>
								</li>
							</ul>{" "}
						</div>
						<div className="footer__menu">
							<div className="text-14 lg:text-16 font-Grauna mb-3 lg:mb-5">
								Company
							</div>
							<ul id="footer-menu-2" className="flex flex-col gap-2">
								<li
									id="menu-item-1658"
									className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1658"
								>
									<a
										target="_blank"
										href="/"
										title="Careers"
										className="footer__item"
									>
										Careers
									</a>
								</li>
								<li
									id="menu-item-3862"
									className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3862"
								>
									<a
										href="/"
										title="Blog"
										className="footer__item"
									>
										Blog
									</a>
								</li>
							</ul>{" "}
						</div>
						<div className="footer__menu">
							<div className="text-14 lg:text-16 font-Grauna mb-3 lg:mb-5">
								Support
							</div>
							<div className="textwidget custom-html-widget">
								<ul className="footer__menu">
									<li>
										<a href="/">
											support@ordermonkey.com
										</a>
									</li>
									<li>
										<a href="/">+41 41 562 76 94</a>
									</li>
								</ul>
							</div>{" "}
						</div>

						<div className="footer__menu">
							<div className="text-14 lg:text-16 font-Grauna mb-3 lg:mb-5">
								Location
							</div>
							<a
								href="/"
								target="_blank"
							>
								<p></p>
								SELISE GROUP AG <br /> ORDERMONKEY SCHWEIZ <br /> The Circle 37,
								8058 Zurich Airport, Zurich
								<br />
								<br />
								SELISE GROUP AG <br /> ORDERMONKEY DEUTSCHLAND Friedrichstraße
								79, 10117 Berlin{" "}
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
									<li
										id="menu-item-4087"
										className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4087"
									>
										<a
											href="/"
											title="Privacy Policy"
											className="footer__item font-light hover:border-b border-whiteColor"
										>
											Privacy Policy
										</a>
									</li>
									<li
										id="menu-item-4086"
										className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4086"
									>
										<a
											href="/"
											title="Terms of Service"
											className="footer__item font-light hover:border-b border-whiteColor"
										>
											Terms of Service
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="mt-[18px] md:mt-0">
							<div className="footer-widget">
								<p>Copyright © 2026 SELISE. All right reserved.</p>
							</div>{" "}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
