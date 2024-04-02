// const modals = () => {
// 	let btnPressed = false

// 	function bindModal(triggerSelector, modalSelector, closeSelector) {
// 		const trigger = document.querySelectorAll(triggerSelector),
// 			modal = document.querySelector(modalSelector),
// 			close = document.querySelector(closeSelector),
// 			windows = document.querySelectorAll('[data-modal]'),
// 			scroll = calcScroll()

// 		trigger.forEach(item => {
// 			item.addEventListener('click', e => {
// 				if (e.target) {
// 					e.preventDefault()
// 				}

// 				btnPressed = true

// 				windows.forEach(item => {
// 					item.style.display = 'none'
// 					item.classList.add('animated', 'fadeIn')
// 				})

// 				modal.style.display = 'block'
// 				document.body.style.overflow = 'hidden'
// 				document.body.style.marginRight = `${scroll}px`
// 			})
// 		})

// 		close.addEventListener('click', () => {
// 			windows.forEach(item => {
// 				item.style.display = 'none'
// 			})

// 			modal.style.display = 'none'
// 			document.body.style.overflow = ''
// 			document.body.style.marginRight = `0px`
// 		})

// 		modal.addEventListener('click', e => {
// 			if (e.target === modal) {
// 				windows.forEach(item => {
// 					item.style.display = 'none'
// 				})

// 				modal.style.display = 'none'
// 				document.body.style.overflow = ''
// 				document.body.style.marginRight = `0px`
// 			}
// 		})
// 	}

// 	function calcScroll() {
// 		let div = document.createElement('div')

// 		div.style.width = '50px'
// 		div.style.height = '50px'
// 		div.style.overflowY = 'scroll'
// 		div.style.visibility = 'hidden'

// 		document.body.appendChild(div)
// 		let scrollWidth = div.offsetWidth - div.clientWidth
// 		div.remove()

// 		return scrollWidth
// 	}

// 	bindModal('.button_start', '.popup_start', '.popup_1 .popup-close')
// 	bindModal('.popup_1 .button_start', '.popup_about-task', '.popup_2 .popup-close')
// 	bindModal('.popup_2 .button_start', '.popup_task-1', '.popup_3 .popup-close')
// 	bindModal('.popup_3 .button_answer', '.popup_answer-1', '.popup_4 .popup-close')
// 	bindModal('.popup_4 .button_answer', '.popup_result', '.popup_5 .popup-close')
// 	bindModal('.popup_5 .button_answer', 'body', false)
// }

// export default modals

const modals = () => {
	let btnPressed = false

	function bindModal(triggerSelector, modalSelector, closeSelector) {
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

				// Скрываем все предыдущие модальные окна
				windows.forEach(item => {
					item.style.display = 'none'
				})

				// Отображаем текущее модальное окно
				modal.style.display = 'block'
				document.body.style.overflow = 'hidden'
				document.body.style.marginRight = `${scroll}px`

				if (!btnPressed) {
					modal.classList.add('animated', 'fadeIn')
					btnPressed = true
				}

				// Сбрасываем флаг при закрытии модального окна для возможности повторного применения анимации
				close.addEventListener('click', () => {
					btnPressed = false
					modal.classList.remove('fadeIn')
					modal.classList.add('animated', 'fadeOut')

					setTimeout(() => {
						modal.style.display = 'none'
						modal.classList.remove('fadeOut')
						document.body.style.overflow = ''
						document.body.style.marginRight = '0px'
					}, 900)
				})

				modal.querySelector('#start-free').addEventListener('click', () => {
					// закрываем текущее модальное окно
					modal.classList.remove('fadeIn')
					modal.classList.add('animated', 'fadeOut')

					setTimeout(() => {
						modal.style.display = 'none'
						modal.classList.remove('fadeOut')
						document.body.style.overflow = ''
						document.body.style.marginRight = '0px'

						// возвращаемся на начальную страницу
						document.querySelector('.header').style.display = 'block'
					}, 900)
				})
			})
		})

		modal.addEventListener('click', e => {
			if (e.target === modal) {
				btnPressed = false
				modal.classList.remove('fadeIn')
				modal.classList.add('animated', 'fadeOut')

				setTimeout(() => {
					modal.style.display = 'none'
					modal.classList.remove('fadeOut')
					document.body.style.overflow = ''
					document.body.style.marginRight = '0px'
				}, 900)
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

	bindModal('.button_start', '.popup_start', '.popup_1 .popup-close')
	bindModal('.popup_1 .button_start', '.popup_about-task', '.popup_2 .popup-close')
	bindModal('.popup_2 .button_start', '.popup_task-1', '.popup_3 .popup-close')
	bindModal('.popup_3 .button_answer', '.popup_answer-1', '.popup_4 .popup-close')
	bindModal('.popup_4 .button_answer', '.popup_result', '.popup_5 .popup-close')
	bindModal('.popup_5 .button_answer', '.header', '.popup_5 .button_answer')
}

export default modals
