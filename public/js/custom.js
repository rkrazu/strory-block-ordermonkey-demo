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

		// Initialize Swiper
		if (typeof Swiper !== 'undefined') {
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
