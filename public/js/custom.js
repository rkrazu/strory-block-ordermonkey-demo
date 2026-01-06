(function () {
	function init() {
		// Dropdown menu functionality
		document.addEventListener('click', function (e) {
			document.querySelectorAll('.dropdown__list').forEach(function (dropdown) {
				dropdown.classList.remove('show');
			});
			if (e.target.matches('.main__dropdown button')) {
				const dropdownList = e.target.nextElementSibling;
				if (dropdownList && dropdownList.classList.contains('dropdown__list')) {
					dropdownList.classList.toggle('show');
				}
			}
		});

		// Modal functionality
		function setupModal(openClass, closeClass, modalClass) {
			const openBtns = document.querySelectorAll('.' + openClass);
			const closeBtn = document.querySelector('.' + closeClass);
			const modal = document.querySelector('.' + modalClass);

			if (!openBtns.length || !closeBtn || !modal) {
				return;
			}

			const innerDiv = modal.querySelector('div');

			openBtns.forEach(openBtn => {
				openBtn.addEventListener('click', () => {
					modal.classList.add('show');
					modal.classList.remove('opacity-0', 'pointer-events-none');
					innerDiv.classList.remove('scale-95');
					document.body.classList.add('inactive-scroll');
					console.log('Modal opened - inactive-scroll class added to body');
				});
			});

			closeBtn.addEventListener('click', () => {
				modal.classList.add('opacity-0', 'pointer-events-none');
				innerDiv.classList.add('scale-95');
				document.body.classList.remove('inactive-scroll');
				console.log('Modal closed - inactive-scroll class removed from body');
				setTimeout(() => modal.classList.remove('show'), 300);
			});

			modal.addEventListener('click', (e) => {
				if (e.target === modal) {
					closeBtn.click();
				}
			});
		}

		setupModal('getInTouchOpen', 'getInTouchClose', 'getInTouchModal');
		setupModal('startJourneyOpen', 'startJourneyClose', 'startJourneyModal');
		setupModal('supportModalOpen', 'supportModalClose', 'supportModal');
		setupModal('tryAppModalOpen', 'tryAppModalClose', 'tryAppModal');
		setupModal('factSheetOpen', 'factSheetClose', 'factSheetModal');

		// Responsive menu functionality
		const responsiveMenuBtn = document.getElementById('responsiveMenuOpen');
		const responsiveCover = document.getElementById('responsiveCover');
		const responsiveMenuClose = document.getElementById('responsiveMenuClose');
		const allMenus = document.querySelectorAll('.nav__text');

		if (responsiveMenuBtn && responsiveCover && responsiveMenuClose) {
			responsiveMenuBtn.addEventListener('click', () => {
				responsiveCover.classList.toggle('show');
			});

			responsiveMenuClose.addEventListener('click', () => {
				responsiveCover.classList.remove('show');
			});

			allMenus.forEach(menuItem => {
				menuItem.addEventListener('click', (e) => {
					if (e.target.id !== "subMenuOpen") {
						responsiveCover.classList.remove('show');
					}
				});
			});
		}

		// Responsive submenu functionality
		const subMenuOpen = document.getElementById('subMenuOpen');
		const responsiveSubMenuCover = document.getElementById('responsiveSubMenuCover');
		const backBtn = document.getElementById('backBtn');
		const allCloseBtn = document.getElementById('allCloseBtn');

		if (subMenuOpen && responsiveSubMenuCover && backBtn && allCloseBtn) {
			subMenuOpen.addEventListener('click', () => {
				responsiveSubMenuCover.classList.toggle('show');
			});

			backBtn.addEventListener('click', () => {
				responsiveSubMenuCover.classList.remove('show');
			});

			allCloseBtn.addEventListener('click', () => {
				responsiveSubMenuCover.classList.remove('show');
				responsiveCover.classList.remove('show');
			});
		}

		function initScrollAnimations() {
			const animatedElements = document.querySelectorAll('.slide__up');

			if (animatedElements.length === 0) return;

			// Create Intersection Observer
			const observer = new IntersectionObserver((entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						// Add animation class when element becomes visible
						entry.target.classList.add('animate-slide-up');
						// Once animated, stop observing
						observer.unobserve(entry.target);
					}
				});
			}, {
				threshold: 0.1, // Trigger when 10% of element is visible
				rootMargin: '0px 0px -50px 0px' // Trigger slightly before element fully enters viewport
			});

			// Observe all animated elements
			animatedElements.forEach(element => {
				// Skip if already animated
				if (element.classList.contains('animate-slide-up')) return;

				// Initially hide the element
				element.style.opacity = '0';
				element.style.transform = 'translateY(300px)';
				// Start observing
				observer.observe(element);
			});
		}

		// Initialize scroll animations
		initScrollAnimations();

		// FAQ Accordion functionality
		const accordionHeaders = document.querySelectorAll('.accordion__header');
		accordionHeaders.forEach(header => {
			header.addEventListener('click', () => {
				const item = header.parentElement;
				const content = header.nextElementSibling;
				const icon = header.querySelector('.icon-chevron-down') || header.querySelector('span');

				// Close other items
				document.querySelectorAll('.accordion__item').forEach(otherItem => {
					if (otherItem !== item) {
						otherItem.querySelector('.accordion__content').style.maxHeight = '0';
						otherItem.querySelector('.accordion__content').style.opacity = '0';
						const otherIcon = otherItem.querySelector('.icon-chevron-down') || otherItem.querySelector('span');
						if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
					}
				});

				// Toggle current item
				if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {
					content.style.maxHeight = content.scrollHeight + 'px';
					content.style.opacity = '1';
					if (icon) icon.style.transform = 'rotate(180deg)';
				} else {
					content.style.maxHeight = '0';
					content.style.opacity = '0';
					if (icon) icon.style.transform = 'rotate(0deg)';
				}
			});
		});

		// Initialize Swiper
		if (typeof Swiper !== 'undefined') {
			// Card Slider
			if (document.querySelector(".card__slider")) {
				new Swiper(".card__slider", {
					slidesPerView: 1,
					spaceBetween: 30,
					autoplay: {
						delay: 2500,
						disableOnInteraction: false,
					},
					loop: true,
					pagination: {
						el: ".swiper-pagination",
						clickable: true,
					}
				});
			}

			// Ecosystem Slider (Device Section)
			if (document.querySelector(".ecosystem__slider")) {
				new Swiper(".ecosystem__slider", {
					slidesPerView: 1,
					spaceBetween: 30,
					autoplay: {
						delay: 3000,
						disableOnInteraction: false,
					},
					loop: true,
					pagination: {
						el: ".swiper-pagination",
						clickable: true,
					}
				});
			}

			// Logo Slider (Customer Section)
			if (document.querySelector(".logo__slider")) {
				new Swiper(".logo__slider", {
					slidesPerView: 'auto',
					spaceBetween: 30,
					speed: 5000,
					autoplay: {
						delay: 0,
						disableOnInteraction: false,
					},
					loop: true,
					freeMode: {
						enabled: true,
						momentum: false,
					},
					allowTouchMove: false,
					resistance: false,
					resistanceRatio: 0,
					breakpoints: {
						320: {
							slidesPerView: 2,
							spaceBetween: 10
						},
						768: {
							slidesPerView: 5,
							spaceBetween: 15
						}
					},
				});
			}

			// Partner Slider (Partner Section Mobile)
			if (document.querySelector(".partner__slider")) {
				new Swiper(".partner__slider", {
					spaceBetween: 0,
					centeredSlides: true,
					speed: 2000,
					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					},
					breakpoints: {
						320: {
							slidesPerView: 1
						}
					}
				});
			}

			// Ecosystem Slide Component Linked Sliders
			if (document.querySelector(".main-slider-headings") && document.querySelector(".main-slider-images")) {
				// Initialize the image slider with slide effect
    const imageSlider = new Swiper(".main-slider-images", {
        slidesPerView: 1,
        effect: 'slide',
        speed: 1200,
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        allowTouchMove: false,
        on: {
            init: function() {
                // Initialize icons with first slide class
                const redIcon = document.querySelector('.red-icon-animate');
                const blackIcon = document.querySelector('.black-icon-animate');
                if (redIcon && blackIcon) {
                    redIcon.classList.add('slide-change-1');
                    blackIcon.classList.add('slide-change-1');
                }
            },
            slideChange: function() {
                const redIcon = document.querySelector('.red-icon-animate');
                const blackIcon = document.querySelector('.black-icon-animate');
                
                if (redIcon && blackIcon) {
                    // Remove all previous classes
                    redIcon.classList.remove('slide-change-1', 'slide-change-2', 'slide-change-3', 'slide-change-4', 'slide-change-5');
                    blackIcon.classList.remove('slide-change-1', 'slide-change-2', 'slide-change-3', 'slide-change-4', 'slide-change-5');
                    
                    // Update slideCount based on active index
                    let slideCount = this.realIndex + 1;
                    
                    // Handle loop if needed
                    if (slideCount > 5) slideCount = 1;
                    if (slideCount < 1) slideCount = 5;
                    
                    // Add the new class
                    redIcon.classList.add(`slide-change-${slideCount}`);
                    blackIcon.classList.add(`slide-change-${slideCount}`);
                }
            }
        }
    });
    
    // Initialize the heading slider with fade effect
    const headingSlider = new Swiper(".main-slider-headings", {
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        speed: 1200,
        loop: false,
        allowTouchMove: false,
    });

    // Sync both sliders
    imageSlider.controller.control = headingSlider;
    headingSlider.controller.control = imageSlider;


	//implement success stories slider
	if (document.querySelector(".success-stories__slider")) {
		new Swiper(".success__story__mobile", {
        navigation: {
            nextEl: ".mobile-button-next",
            prevEl: ".mobile-button-prev",
        },
    });
    //mobile slider script ends
    const cards = Array.from(document.querySelectorAll('.card')).reverse();
    const overlays = document.querySelectorAll('.modalOverlay');
    const storyModalBtns = document.querySelectorAll('.story__modal__btn');
    const storyModals = document.querySelectorAll('.storyModal');
    const closeStoryBtns = document.querySelectorAll('.closeModalBtn');
    const videoModalBtns = document.querySelectorAll('.videoPlayBtn');
    const closeVideoBtns = document.querySelectorAll('.closeVideoBtn');
    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');

    let current = 0;

    // Function to update button states
    function updateButtonStates() {
        const remainingCards = cards.length - current;
        
        if (remainingCards <= 1) {
            // Disable both buttons when only one card remains
            leftBtn.disabled = true;
            rightBtn.disabled = true;
        } else {
            // Enable both buttons when multiple cards remain
            leftBtn.disabled = false;
            rightBtn.disabled = false;
        }
    }

    function swipe(direction) {
        if (current >= cards.length) return;
        const card = cards[current];
        card.style.transition = 'all 1.2s ease-in-out';
        card.style.transform = direction === 'left' ? 'translateX(-300%)' : 'translateX(300%)';
        card.classList.add('hidden-card');
        current++;
        
        // Update button states after each swipe
        updateButtonStates();
        
        if (current === cards.length) {
            setTimeout(() => {
                document.getElementById('cardContainer').style.display = 'none';
            }, 600);
        }
    }
    updateButtonStates();
    // Initialize button states

    const rotations = [0, 0, -7, 7, -16, 14];
    let rotationIndex = 0;

    function swipe(direction) {
        if (direction === 'left') {
            if (current >= cards.length - 1) {
                current = cards.length - 1;
                return;
            }
            const card = cards[current];
            rotationIndex = (rotationIndex + 1) % rotations.length;
            card.style.transition = 'all 1.2s ease-in-out';
            card.style.transform = `translateX(-300%) rotate(${rotations[rotationIndex]}deg)`;
            card.classList.add('hidden-card');
            current++;
        } 
        else if (direction === 'right') {
            if (current <= 0) {
                current = 0;
                return;
            }
            current--;
            rotationIndex = (rotationIndex - 1 + rotations.length) % rotations.length;
            const card = cards[current];
            card.style.transition = 'all 1.2s ease-in-out';
            card.style.transform = `translateX(0%) rotate(${rotations[rotationIndex]}deg)`;
            card.classList.remove('hidden-card');
            card.classList.add('prev-card');
        }

        updateButtonStates();
    }

    function updateButtonStates() {
        leftBtn.disabled = (current === 0);
        rightBtn.disabled = (current === cards.length - 1);
    }
    // previous state back js ends

    leftBtn.addEventListener('click', () => swipe('right'));
    rightBtn.addEventListener('click', () => swipe('left'));

    // Open story modal
    storyModalBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const index = this.getAttribute('data-modal-index');
            document.getElementById('modalOverlay-' + index)?.classList.remove('hidden');
            document.getElementById('storyModal-' + index)?.classList.remove('hidden');
            console.log("clicked");
        });
    });

    // Close story modal
    closeStoryBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const index = this.getAttribute('data-modal-index');
            document.getElementById('modalOverlay-' + index)?.classList.add('hidden');
            document.getElementById('storyModal-' + index)?.classList.add('hidden');
        });
    });

    // Open video modal
    videoModalBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const index = this.getAttribute('data-video-index');
            const modal = document.getElementById('videoPlayer-' + index);
            const video = modal?.querySelector('video');
            if (modal && video) {
                modal.classList.remove('hidden');
                video.currentTime = 0;
                video.play();
            }
        });
    });

    // Close video modal
    closeVideoBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const index = this.getAttribute('data-video-index');
            const modal = document.getElementById('videoPlayer-' + index);
            const video = modal?.querySelector('video');
            if (modal && video) {
                video.pause();
                video.currentTime = 0;
                modal.classList.add('hidden');
            }
        });
    });

    // Overlay click closes all modals
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.add('hidden');
            storyModals.forEach(modal => modal.classList.add('hidden'));
            document.querySelectorAll('.videoPlayer').forEach(modal => {
                const video = modal.querySelector('video');
                if (video) {
                    video.pause();
                    video.currentTime = 0;
                }
                modal.classList.add('hidden');
            });
        });
    });
	}
			}
		} else {
			console.error("Swiper is not defined. Check if swiper-bundle.min.js is loading correctly.");
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
