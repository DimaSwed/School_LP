import modals from './modules/modals'
import burger from './modules/burger'
import scrolling from './modules/scrolling'
import { handleScroll } from './modules/scroll-to-up'
import { arrowScroll } from './modules/scroll-to-down'

window.addEventListener('DOMContentLoaded', () => {
	'use strict'

	modals()
	burger('.header__menu_burger', '.burger', '.header__menu_burger .popup-close')
	scrolling('#scroll-to-top')
	window.addEventListener('scroll', handleScroll)
	window.addEventListener('scroll', arrowScroll)
})
