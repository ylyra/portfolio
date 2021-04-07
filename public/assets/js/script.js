const c = el => document.querySelector(el)
const cs = el => document.querySelectorAll(el)

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function initScroll() {

	const linksInternos = cs('a[href^="#"]');

	if (linksInternos) {
		const scrollToSection = (event) => {
			const href = event.currentTarget.getAttribute('href');
			event.preventDefault();

			/* section.scrollIntoView({
				behavior: 'smooth',
				block:'start',
			}); */

			const section = c(`section${href}`);
			const top = section.offsetTop - 80
			scrollTo({
				top,
				behavior: 'smooth',
			})
		}

		linksInternos.forEach(link => {
			link.addEventListener('click', scrollToSection);
		});
	}
}

function initDragScroll() {
	let ele = c('section#top .works')

	if (ele) {
		let pos = { top: 0, left: 0, x: 0, y: 0 };

		const mouseDownHandler = function (e) {
			ele.style.cursor = 'grabbing';
			ele.style.userSelect = 'none';

			pos = {
				left: ele.scrollLeft,
				top: ele.scrollTop,
				/* Get the current mouse position */
				x: e.clientX,
				y: e.clientY,
			};

			document.addEventListener('mousemove', mouseMoveHandler);
			document.addEventListener('mouseup', mouseUpHandler);
		};

		const mouseMoveHandler = function (e) {
			/* How far the mouse has been moved */
			const dx = e.clientX - pos.x;
			const dy = e.clientY - pos.y;

			/* Scroll the element */
			ele.scrollTop = pos.top - dy;
			ele.scrollLeft = pos.left - dx;
		};

		const mouseUpHandler = function () {
			ele.style.cursor = 'grab';
			ele.style.removeProperty('user-select');

			document.removeEventListener('mousemove', mouseMoveHandler);
			document.removeEventListener('mouseup', mouseUpHandler);
		};

		/* Attach the handler */
		ele.addEventListener('mousedown', mouseDownHandler);
	}
}

initScroll();
initDragScroll();

const targetNode = document.getElementById('see-work');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {
	const seeWork = document.querySelector(`#see-work`);
	const top = seeWork.offsetTop - 90
	scrollTo({
		top,
		behavior: 'smooth',
	})
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
