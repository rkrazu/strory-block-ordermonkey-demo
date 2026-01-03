import type { Menu } from "@/.storyblok/types/287474179047807/storyblok-components";

const Header = ({ burger_menu }: { burger_menu?: Menu[] }) => {
	return (
		<header className="desktop__header">
			<div className="main__container header__cover">
				<figure className="logo__part">
					<a href="/">
						<img
							src="/Monkey-Head-120x120-1.gif"
							className="w-[57px]"
							alt="monkey-head"
							title="monkey-head"
						/>

						<img
							src="/logo-text.svg"
							className="w-[110px]"
							alt="Order Monkey Text Logo"
							title="Order Monkey Text Logo"
						/>
					</a>
				</figure>

				<div className="menu__part">
					<ul
						id="menu-primay-menu-home-page-en"
						className="relative flex items-center gap-5"
					>
						<li className=" menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item">
							<a href="/" title="Customers">
								Customers
							</a>
						</li>
						<li className=" menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item">
							<a href="/" title="Partner">
								Partner
							</a>
						</li>
						<li className=" menu-item menu-item-type-post_type menu-item-object-page">
							<a href="/" title="Blog">
								Blog
							</a>
						</li>
					</ul>
				</div>
				<div className="options__part">
					<div className="social__media">
						<ul className="flex gap-3 mt-[3px]">
							<li className="">
								<a
									href="/"
									title="Instagram"
								>
									<span className="icon-instagram text-24 text-whiteColor"></span>
								</a>
							</li>
							<li className="">
								<a
									href="/"
									title="LinkedIn"
								>
									<span className="icon-linkedin text-24 text-whiteColor"></span>
								</a>
							</li>
							<li className="">
								<a
									href="/"
									title="Facebook"
								>
									<span className="icon-facebook text-24 text-whiteColor"></span>
								</a>
							</li>
							<li className=" straight__border">
								<a
									href="/"
									title="Call Us"
								>
									<span className="icon-phone-bold text-24 text-whiteColor"></span>
								</a>
							</li>
						</ul>
					</div>

					<div>
						<ul className="flex items-center gap-3">
							<li>
								<button
									className="startJourneyOpen secondary__btn"
									aria-label="Open start journey modal"
									title="Get in Touch"
								>
									Get in Touch
								</button>
							</li>
						</ul>
					</div>

					<div>
						<ul className="flex items-center gap-2">
							<li>
								<a
									href="/"
									className="white__link font-Grauna"
									title="DE"
								>
									DE
								</a>
							</li>
							<li>
								<a
									href="/"
									className="white__link font-Grauna active"
									title="EN"
								>
									EN
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;