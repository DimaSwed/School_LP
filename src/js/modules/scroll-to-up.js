const handleScroll = () => {
	const scrollToTopButton = document.getElementById('scroll-to-top')

	if (window.pageYOffset > 100) {
		scrollToTopButton.style.display = 'block'
	} else {
		scrollToTopButton.style.display = 'none'
	}
}

window.addEventListener('scroll', handleScroll)
window.addEventListener('resize', handleScroll)

document.getElementById('scroll-to-top').addEventListener('click', function (event) {
	event.preventDefault()

	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
})

export { handleScroll }
