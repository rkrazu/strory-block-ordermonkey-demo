"use client";

import { useState, useRef, useEffect } from "react";
import {
	type SbBlokData,
	storyblokEditable,
} from "@storyblok/react/rsc";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import parse from "html-react-parser";

import {
    OrdermonkeySuccessStories as OrdermonkeySuccessStoriesType,
    Cards
} from "@/.storyblok/types/288385466767815/storyblok-components";


const OrdermonkeySuccessStories = ({
	blok,
}: {
	blok: OrdermonkeySuccessStoriesType;
}) => {
	const heading = blok.title || "";
    // Ensure we have an array
    const componentList = (blok.cards || []) as Cards[];

    // STATE FOR DESKTOP SLIDER (STACK)
    // We start with 0 swiped cards.
    // The stack visually shows the LAST element on TOP (assuming default DOM stacking).
    // The user script 'reversed' the querySelectorAll results, implying the LAST DOM element is the FIRST logical card?
    // Let's assume standard z-order: Last element in DOM is on top.
    // 'current' in user script started at 0 (Logic Top).
    // Logic: 'swipe(left)' -> 'transform: translateX(-300%)'. current++.
    // This moves the "Top" card away to reveal the next one.
    // So 'swipedCount' represents how many cards from the TOP (End of Array) have been dismissed.
    const [swipedCount, setSwipedCount] = useState(0);

    // STATE FOR MODALS
    const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);
    const [openVideoIndex, setOpenVideoIndex] = useState<number | null>(null);

    // VIDEO REFS
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    useEffect(() => {
        // Reset/Pause videos when modal closes
        if (openVideoIndex === null) {
            videoRefs.current.forEach(video => {
                if (video) {
                    video.pause();
                    video.currentTime = 0;
                }
            });
        } else {
             // Play generic video logic if needed, or rely on autoPlay/user interaction
             const vid = videoRefs.current[openVideoIndex];
             if(vid) {
                 vid.currentTime = 0;
                 vid.play().catch(() => {}); // catch autoplay restrictions
             }
        }
    }, [openVideoIndex]);


    const handleSwipeLeft = () => {
        // "Right Button" click -> Swipe Left (Discard top card)
        // If we haven't discarded everything...
        if (swipedCount < componentList.length - 1) { // Keep at least one or allow clearing? Use script logic: 'if (current >= cards.length) return'
             // Actually script allowed clearing all until 'cardContainer' display none.
             // But usually we stop at last one or loop?
             // User script: if (current >= cards.length) return.
             // Let's match behavior:
             if (swipedCount < componentList.length) {
                 setSwipedCount(p => p + 1);
             }
        }
    };

    const handleSwipeRight = () => {
        // "Left Button" click -> Swipe Right (Bring back card)
        if (swipedCount > 0) {
            setSwipedCount(p => p - 1);
        }
    };

    // Calculate Transform/Class for a card based on its index
    // The array is rendered naturally. Index 0 is bottom. Index Length-1 is top.
    // "current" (swipedCount) corresponds to the 'reversed' index in user script.
    // User script: cards = reversed DOM elements. cards[0] is DOM-Last (Top).
    // So `swipedCount = 0` means DOM-Last is visible.
    // `swipedCount = 1` means DOM-Last is swiped away. DOM-(Last-1) is visible.
    
    // For a card at 'domIndex' (0 to length-1):
    // "Logical Index" (0=Top) = (length - 1) - domIndex.
    // If Logical Index < swipedCount: It is swiped away.
    // If Logical Index == swipedCount: It is active (visible).
    // If Logical Index > swipedCount: It is underneath (visible but covered).

    const getCardStyle = (domIndex: number) => {
        const logicalIndex = (componentList.length - 1) - domIndex;
        // Rotations from script: [0, 0, -7, 7, -16, 14]. 
        // Logic used rotationIndex based on 'current' (swipedCount).
        // But here we need generic style.
        
        if (logicalIndex < swipedCount) {
             // Swiped away (Hidden)
             // User Script: translateX(-300%) rotate(rotations[...])
             // It seems rotation was static per card-swipe? 'rotate(${rotations[rotationIndex]})'.
             // Let's just use a simple -300% for now or hardcode a rotation if needed.
             // User script calculated rotationIndex based on swipe count.
             const rotations = [0, 0, -7, 7, -16, 14];
             const rot = rotations[logicalIndex % rotations.length]; // Approximation
             return {
                 transform: `translateX(-300%) rotate(${rot}deg)`,
                 transition: 'all 1.2s ease-in-out',
                 zIndex: domIndex, // Lower priority?
                 opacity: 0, // 'hidden-card' class usually hides it? or just moves it. User script adds 'hidden-card'.
             };
        } else if (logicalIndex === swipedCount) {
             // Active / Reset
             return {
                 transform: `translateX(0%) rotate(0deg)`,
                 transition: 'all 1.2s ease-in-out',
                 zIndex: domIndex,
                 opacity: 1
             };
        } else {
             // Underneath
             return {
                 transform: `translateX(0%) rotate(0deg)`,
                 transition: 'all 1.2s ease-in-out',
                 zIndex: domIndex,
                 opacity: 1 // Covered by top card
             };
        }
    };

    const isHiddenCard = (domIndex: number) => {
        const logicalIndex = (componentList.length - 1) - domIndex;
        return logicalIndex < swipedCount ? "hidden-card" : " ";
    };


	return (
		<section
			{...storyblokEditable(blok as SbBlokData)}
			className="pt-16 md:pt-[168px] lg:pt-[50px] lg:pb-[100px] relative overflow-hidden"
		>
             {/* Decorative Icons */}
             <img 
                src="/black-icon.svg"
                className="absolute left-0 top-[3%] lg:top-[50%] w-10 lg:w-[151px]"
                alt="Black Icon Graphic" 
                title="Black Icon Graphic"  
            />
            <img 
                src="/red-icon.svg" 
                className="absolute right-[-3%] top-[10%] lg:top-[30%] w-10 lg:w-[147px]" 
                alt="Red Icon Graphic" 
                title="Red Icon Graphic" 
            />
             <img 
                src="/round-icon.svg"  
                className="absolute right-[2%] bottom-0 w-10 lg:w-[85px]" 
                alt="Round Icon Graphic" 
                title="Round Icon Graphic"  
            />

            <div className="relative mdPlus:w-full mdPlus:min-w-[400px] mdPlus:h-[615px] mdPlus:mt-[50px] xl:min-w-[500px] slide__up">
                <div className="flex justify-center mb-0">
                    <img 
                        src="/spark-red.svg"  
                        alt="Spark Graphic"
                        title="Spark Graphic" 
                    />
                </div>

                <h2 className="text-32 leading-8 font-Grauna lg:primary__heading text-center mb-8 md:mb-10 lg:text-[44px]">
                    {parse(heading)}
                </h2>

                <div className="hidden mdPlus:block">
                    <button 
                        id="leftBtn" 
                        className="absolute left-[18%] lg:left-[25%] top-[57%] -translate-y-1/2 z-50 "
                        onClick={handleSwipeRight} // Logic says right button -> swipe left (discard). So Left Button -> Swipe Right (Retrieve).
                        // wait, arrows:
                        // Left Button (Rotate 180, points Left) -> Previous Card (Swipe Right in script logic)
                        // Right Button (Points Right) -> Next Card (Swipe Left in script logic to discard)
                        disabled={swipedCount === 0}
                    >
                        <img
                            src="/arrow-right.svg"   
                            className="rotate-180 mdPlus:w-[60px] mdPlus:h-[60px] xl:w-[88px] xl:h-[88px] cursor-pointer"
                            alt="Left Arrow Graphic" 
                            title="Left Arrow Graphic"  
                        />
                    </button>
                    <button 
                        id="rightBtn" 
                        className="absolute right-[18%] lg:right-[25%] top-[57%] -translate-y-1/2 z-50 cursor-pointer"
                        onClick={handleSwipeLeft}
                        disabled={swipedCount >= componentList.length - 1} // Keep last card visible? User script allowed clearing till display none. but 'updateButtonStates' disabled at end.
                        // User logic: disabled if current === cards.length - 1 (So 1 card remaining... wait. logical)
                        // Actually in user script 'remainingCards <= 1' logic was checking length-current.
                        // Let's stick to simple: Disable if we can't swipe anymore.
                    >
                        <img 
                            src="/arrow-right.svg"  
                            className="mdPlus:w-[60px] mdPlus:h-[60px] xl:w-[88px] xl:h-[88px]" 
                            alt="Right Arrow Graphic" 
                            title="Right Arrow Graphic" 
                        />
                    </button>
                </div>

                <div className="card__wrapper mt-[80px] mdPlus:mt-12 hidden mdPlus:block">
                    {/* cardContainer */}
                    <div id="cardContainer" className="relative">
                        {componentList.map((component, i) => (
                            <div 
                                key={component._uid}
                                className={`card absolute rounded-xl shadow-2xl cursor-pointer story__modal__btn ${isHiddenCard(i)}`}
                                data-modal-index={i}
                                aria-label="Open success story modal"
                                style={getCardStyle(i)}
                                onClick={() => setOpenModalIndex(i)}
                            >
                                <div>
                                    {component.icon?.filename && (
                                        <figure>
                                            <img 
                                                src={component.icon.filename} 
                                                className="block mx-auto max-h-12" 
                                                alt={component.icon.alt || "icon"}
                                                title={component.icon.title || "icon"}
                                            />
                                        </figure>
                                    )}
                                    <figure className="relative">
                                        {component.image?.filename && (
                                            <img 
                                                src={component.image.filename} 
                                                className="my-6 min-h-[200px] max-h-[200px] hd:min-h-[250px] hd:max-h-[250px] w-full object-cover rounded-lg" 
                                                alt={component.image.alt || "Story Image"}
                                                title={component.image.title || "Story Image"}
                                            />
                                        )}
                                    </figure>
                                </div>

                                {component.title && (
                                    <h3 className="mt-6 mb-3 text-20 font-Grauna text-center h-[50px] flex items-center justify-center">
                                        {parse(component.title)}
                                    </h3>
                                )}

                                {component.description && (
                                    <p className="secondary__details text-center line-clamp-2 h-[44px]">
                                        {parse(component.description)}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modals Loop */}
            {componentList.map((component, i) => (
                <div key={`modal-${component._uid}`}>
                    <div 
                        className={`modalOverlay fixed inset-0 bg-black bg-opacity-50 z-[500] ${openModalIndex === i ? " " : "hidden"}`} 
                        id={`modalOverlay-${i}`}
                        onClick={() => { setOpenModalIndex(null); setOpenVideoIndex(null); }}
                    ></div>
                    <div 
                        className={`storyModal fixed left-0 right-0 top-1/2 transform -translate-y-1/2 mx-auto bg-whiteColor max-w-[1000px] lg:max-w-[1280px] p-16 z-[900] ${openModalIndex === i ? " " : "hidden"}`} 
                        id={`storyModal-${i}`}
                    >
                        <button 
                            className="closeModalBtn absolute right-4 top-4 text-text400" 
                            data-modal-index={i}
                            onClick={() => { setOpenModalIndex(null); setOpenVideoIndex(null); }}
                        >
                            <span className="icon-close text-32"></span>
                            {/* Fallback text if icon font missing */}
                        </button>
                        <div className="flex gap-16 min-h-[560px] max-h-[560px] overflow-y-scroll [&::-webkit-scrollbar]:hidden">
                            <div className="w-[56%]">
                                <h2 className="text-[48px] leading-[62px] font-Grauna">
                                    {component.title && parse(component.title)}
                                </h2>
                                <img
                                    src="/divider.svg"  
                                    className="my-6" 
                                    alt="Divider" 
                                    title="Divider" 
                                />
                                <p className="secondary__details mb-12">
                                    {component.description && parse(component.description)}
                                </p>
                            </div>
                            <div className="relative">
                                {component.image?.filename && (
                                    <img 
                                        src={component.image.filename} 
                                        className="w-[540px] h-[560px] object-cover rounded-2xl" 
                                        alt={component.image.alt || "Story Image"}
                                        title={component.image.title || "Story Image"}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}


            <div className="main__container pb-16 mdPlus:pb-[120px] lg:pb-0">
                <div className="mdPlus:hidden">
                    <Swiper 
                        className="success__story__mobile"
                        modules={[Navigation]}
                        loop={false} // User had loop in custom.js usually.
                        navigation={{
                            nextEl: ".mobile-button-next",
                            prevEl: ".mobile-button-prev",
                        }}
                    >
                        {/* User used array_reverse($components) for mobile. */}
                        {[...componentList].reverse().map((component) => (
                             <SwiperSlide key={component._uid}>
                                <div className="swiper-slide-content"> 
                                    {/* Wrapping content to match swiper-slide inner structure if needed, or SwiperSlide IS the slide. */}
                                    
                                    {component.icon?.filename && (
                                        <img 
                                            src={component.icon.filename}
                                            className="block mx-auto max-h-12" 
                                            alt={component.icon.alt || "icon"}
                                            title={component.icon.title || "icon"}
                                        />
                                    )}
                                    
                                    {component.image?.filename && (
                                        <img 
                                            src={component.image.filename}
                                            className="my-6 max-h-[200px] min-h-[200px] w-full object-cover" 
                                            alt={component.image.alt || "Story Image"}
                                            title={component.image.title || "Story Image"}
                                        />
                                    )}
                                    <h3 className="mb-3 text-18 font-Grauna text-center flex items-center justify-center">
                                        {component.title}
                                    </h3>
                                    <p className="secondary__details text-center line-clamp-4 h-[88px]">
                                        {component.description}
                                    </p>
                                </div>
                             </SwiperSlide>
                        ))}
                        
                         {/* Swiper Controls embedded */}
                        <div className="story__navigation__mobile">
                            <div className="mobile-button-prev">
                                <img 
                                    src="/arrow-right.svg"
                                    className="rotate-180 w-10 h-10" 
                                    alt="Right Arrow Graphic"
                                    title="Right Arrow Graphic"  
                                />
                            </div>
                            <div className="mobile-button-next">
                                <img 
                                    src="/arrow-right.svg"
                                    className="w-10 h-10" 
                                    alt="Right Arrow Graphic"
                                    title="Right Arrow Graphic" 
                                />
                            </div>
                        </div>

                    </Swiper>
                </div>
            </div>
		</section>
	);
};

export default OrdermonkeySuccessStories;
