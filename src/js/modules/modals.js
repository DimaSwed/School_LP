const modals = () => {
	let btnPressed = false

	function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			windows = document.querySelectorAll('[data-modal]'),
			scroll = calcScroll()

		trigger.forEach(item => {
			item.addEventListener('click', e => {
				if (e.target) {
					e.preventDefault()
				}

				btnPressed = true

				if (destroy) {
					item.remove()
				}

				windows.forEach(item => {
					item.style.display = 'none'
					// добавляются классы из animated.css - чтобы было плавно
					item.classList.add('animated', 'fadeIn')
				})

				modal.style.display = 'block'
				document.body.style.overflow = 'hidden'
				document.body.style.marginRight = `${scroll}px`
			})
		})

		close.addEventListener('click', () => {
			windows.forEach(item => {
				item.style.display = 'none'
			})

			modal.style.display = 'none'
			document.body.style.overflow = ''
			document.body.style.marginRight = `0px`
		})

		modal.addEventListener('click', e => {
			if (e.target === modal) {
				windows.forEach(item => {
					item.style.display = 'none'
				})

				modal.style.display = 'none'
				document.body.style.overflow = ''
				document.body.style.marginRight = `0px`
			}
		})
	}

	function calcScroll() {
		let div = document.createElement('div')

		div.style.width = '50px'
		div.style.height = '50px'
		div.style.overflowY = 'scroll'
		div.style.visibility = 'hidden'

		document.body.appendChild(div)
		let scrollWidth = div.offsetWidth - div.clientWidth
		div.remove()

		return scrollWidth
	}

	bindModal('.burger', '.header__menu_burger', '.header__menu_burger .popup-close')
	bindModal('.button-design', '.popup-design', '.popup-design .popup-close')
	// bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close')
}

export default modals
