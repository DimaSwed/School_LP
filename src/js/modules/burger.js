const burger = (menuSelector, burgerSelector, closeSelector) => {
	const menuElem = document.querySelector(menuSelector),
		burgerElem = document.querySelector(burgerSelector),
		close = document.querySelector(closeSelector)

	menuElem.style.display = 'none'

	burgerElem.addEventListener('click', () => {
		if (menuElem.style.display === 'none' && window.innerWidth < 769) {
			menuElem.style.display = 'block'
			menuElem.classList.add('animated', 'fadeInRight')
		} else {
			menuElem.style.display = 'none'
		}
	})

	close.addEventListener('click', () => {
		menuElem.classList.remove('fadeInRight')
		menuElem.classList.add('animated', 'fadeOutRight')
		setTimeout(() => {
			menuElem.style.display = 'none'
			menuElem.classList.remove('fadeOutRight')
		}, 500)
	})

	menuElem.addEventListener('click', e => {
		if (e.target === menuElem) {
			menuElem.style.display = 'none'
		}
	})

	window.addEventListener('resize', () => {
		if (window.innerWidth > 768) {
			menuElem.style.display = 'none'
		}
	})
}

export default burger
