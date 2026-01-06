"use client";

import type { Menu } from "@/.storyblok/types/288385466767815/storyblok-components";
import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { i18n } from "@/i18n/i18n-config";
import type { StoryblokMultiasset } from "@/.storyblok/types/288385466767815/storyblok-components";

const Header = ({ burger_menu , header_button, logo}: { burger_menu?: Menu[] , header_button?: string , logo?: StoryblokMultiasset }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	return (
		<header>
			{/* Desktop Header */}
			<div className="desktop__header">
				<div className="main__container header__cover">
					<figure className="logo__part">
						<Link href="/">
							<img
								src={logo?.[0].filename || ""}
								className="w-[57px]"
								alt="monkey-head"
								title="monkey-head"
							/>

							<img
								src={logo?.[1].filename || ""}
								className="w-[110px]"
								alt="Order Monkey Text Logo"
								title="Order Monkey Text Logo"
							/>
						</Link>
					</figure>

					<div className="menu__part">
                        <ul className="relative flex items-center gap-5">
                            {burger_menu?.map((item) => {
                                if (item.component === "menu") {
                                    return item.items?.map((menuItem) => {
                                        const hasSubItems = menuItem.SubItems && menuItem.SubItems.length > 0;

                                        if (hasSubItems) {
                                            return (
                                                <li key={menuItem._uid} className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children relative main__dropdown pr-3">
                                                    <button className="drop__btn arrow--down" title={menuItem.title}>
                                                        {menuItem.title}
                                                    </button>
                                                    <ul className="dropdown__list">
                                                        {menuItem.SubItems?.map((sub) => (
                                                            <li key={sub._uid} className="menu-item menu-item-type-post_type menu-item-object-page">
                                                                <Link href={"/"} title={sub.title}>
                                                                    <span className="icon-arrow_forward"></span>
                                                                    <span className="nav__text">{sub.title}</span>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            );
                                        }

                                        return (
                                            <li key={menuItem._uid} className="menu-item">
                                                <Link href={"/"} title={menuItem.title}>
                                                    {menuItem.title}
                                                </Link>
                                            </li>
                                        );
                                    });
                                }
                                return null;
                            })}
                        </ul>
                    </div>


					<div className="options__part">
						<div className="social__media">
							<ul className="flex gap-3 mt-[3px]">
								<li>
									<a href="/" title="Instagram">
										<span className="icon-instagram text-24 text-whiteColor"></span>
									</a>
								</li>
								<li>
									<a href="/" title="LinkedIn">
										<span className="icon-linkedin text-24 text-whiteColor"></span>
									</a>
								</li>
								<li>
									<a href="/" title="Facebook">
										<span className="icon-facebook text-24 text-whiteColor"></span>
									</a>
								</li>
								<li className="straight__border">
									<a href="/" title="Call Us">
										<span className="icon-phone-bold text-24 text-whiteColor"></span>
									</a>
								</li>
							</ul>
						</div>

						<div>
							<ul className="flex items-center gap-3">
								<li>
									<button className="startJourneyOpen secondary__btn" title="Get in Touch">
										{header_button}
									</button>
								</li>
							</ul>
						</div>

						<div>
							<ul className="flex items-center gap-2">
								{/* {i18n.locales.map((locale) => (
									<li key={locale}>
										<Link
											href={pathname}
											locale={locale}
											className={`white__link font-Grauna ${pathname.startsWith(`/${locale}`) || (pathname === '/' && locale === i18n.defaultLocale) ? 'active' : ''}`}
											title={locale.toUpperCase()}
										>
											{locale.toUpperCase()}
										</Link>
									</li>
								))} */}
								<a className="white__link font-Grauna" href="/de/start" title="English">DE</a>
								<a className="white__link font-Grauna" href="/en/start" title="Arabic">EN</a>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Header */}
			<div className="responsive__header lg:hidden">
					<figure className="logo__part">
						<Link href="/">
							<img
								src={logo?.[0].filename || ""}
								className="w-[32px]"
								alt="monkey-head"
								title="monkey-head"
							/>

							<img
								src={logo?.[1].filename || ""}
								className="w-[62px]"
								alt="Order Monkey Text Logo"
								title="Order Monkey Text Logo"
							/>
						</Link>
					</figure>
				<div className="flex items-center gap-4">
					<div className="language__mobile">
						<ul>
							{i18n.locales.map((locale) => (
								<li key={locale}>
									<Link
										href={pathname}
										locale={locale}
										className={`mobile_menu ${pathname.startsWith(`/${locale}`) ? 'lang__active' : ''}`}
										title={locale.toUpperCase()}
									>
										{locale.toUpperCase()}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<button onClick={toggleMenu} aria-label="Open responsive menu" className="border-none">
							<span className="icon-menu text-[40px] text-whiteColor"></span>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu Overlay */}
			<div id="responsiveCover" className={`responsive__full__wrapper overflow-y-scroll [&::-webkit-scrollbar]:hidden ${isMenuOpen ? 'show' : ''}`}>
				<div className="flex items-center justify-between">
					<figure className="logo__part">
						<Link href="/">
							<img
								src={logo?.[0].filename || ""}
								className="w-[32px]"
								alt="monkey-head"
								title="monkey-head"
							/>

							<img
								src={logo?.[1].filename || ""}
								className="w-[62px]"
								alt="Order Monkey Text Logo"
								title="Order Monkey Text Logo"
							/>
						</Link>
					</figure>
					<div>
						<button onClick={toggleMenu} aria-label="Close responsive menu" className="border-none">
							<span className="icon-close text-24 text-whiteColor"></span>
						</button>
					</div>
				</div>

				<div className="my-12 relative">
					<div className="responsiveMenuWrapper">
						<nav>
							<ul className="flex flex-col gap-12 arrow__button__transition !ml-[7px]">
								{burger_menu?.[0]?.items?.[0]?.SubItems?.map((item) => (
									<li key={item._uid} className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-3900 current_page_item">
										<Link href={ "/"} onClick={toggleMenu} className="text-24 leading-[36px] tracking-[.96px] font-Grauna">
											{item.title}
										</Link>
									</li>
								))}
							</ul>
						</nav>

						<div className="bg-blackColor pb-5 mt-10">
							<ul className="flex flex-col gap-6">
								<li>
									<button className="white__outline__btn w-full" onClick={toggleMenu}>
										{header_button}
									</button>
								</li>
							</ul>

							<ul className="flex justify-center gap-6 mt-8">
								<li>
									<a href="/" className="social-icon">
										<span className="icon-Customer-Service text-whiteColor text-28"></span>
									</a>
								</li>
								<li>
									<a href="/" className="social-icon">
										<span className="icon-whatsapp text-whiteColor text-28"></span>
									</a>
								</li>
								<li>
									<a href="/" className="social-icon">
										<span className="icon-calendar-add text-whiteColor text-28"></span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>

	);
};

export default Header;