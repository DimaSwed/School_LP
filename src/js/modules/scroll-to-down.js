const arrowScroll = () => {
	document.querySelector('.button_tap_next').addEventListener('click', event => {
		event.preventDefault()

		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: 'smooth'
		})
	})
}

window.addEventListener('scroll', arrowScroll)
window.addEventListener('resize', arrowScroll)

export { arrowScroll }
