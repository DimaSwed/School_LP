// import modals from './modules/modals'
import burger from './modules/burger'
import scrolling from './modules/scrolling'
import { handleScroll } from './modules/scroll-to-up'

window.addEventListener('DOMContentLoaded', () => {
	'use strict'
	let modalState = {}
	// modals()
	burger('.header__menu_burger', '.burger', '.header__menu_burger .popup-close')
	scrolling('scroll-to-top')
	window.addEventListener('scroll', handleScroll)
})
