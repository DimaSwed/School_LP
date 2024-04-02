/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const burger = (menuSelector, burgerSelector, closeSelector) => {
  const menuElem = document.querySelector(menuSelector),
    burgerElem = document.querySelector(burgerSelector),
    close = document.querySelector(closeSelector);
  menuElem.style.display = 'none';
  burgerElem.addEventListener('click', () => {
    if (menuElem.style.display === 'none' && window.innerWidth < 769) {
      menuElem.style.display = 'block';
      menuElem.classList.add('animated', 'fadeInRight');
    } else {
      menuElem.style.display = 'none';
    }
  });
  close.addEventListener('click', () => {
    menuElem.classList.remove('fadeInRight');
    menuElem.classList.add('animated', 'fadeOutRight');
    setTimeout(() => {
      menuElem.style.display = 'none';
      menuElem.classList.remove('fadeOutRight');
    }, 500);
  });
  menuElem.addEventListener('click', e => {
    if (e.target === menuElem) {
      menuElem.style.display = 'none';
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      menuElem.style.display = 'none';
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  let btnPressed = false;
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]'),
      scroll = calcScroll();
    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }

        // Скрываем все предыдущие модальные окна
        windows.forEach(item => {
          item.style.display = 'none';
        });

        // Отображаем текущее модальное окно
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
        if (!btnPressed) {
          modal.classList.add('animated', 'fadeIn');
          btnPressed = true;
        }

        // Сбрасываем флаг при закрытии модального окна для возможности повторного применения анимации
        close.addEventListener('click', () => {
          btnPressed = false;
          modal.classList.remove('fadeIn');
          modal.classList.add('animated', 'fadeOut');
          setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('fadeOut');
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
          }, 900);
        });
        modal.querySelector('#start-free').addEventListener('click', () => {
          // закрываем текущее модальное окно
          modal.classList.remove('fadeIn');
          modal.classList.add('animated', 'fadeOut');
          setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('fadeOut');
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';

            // возвращаемся на начальную страницу
            document.querySelector('.header').style.display = 'block';
          }, 900);
        });
      });
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        btnPressed = false;
        modal.classList.remove('fadeIn');
        modal.classList.add('animated', 'fadeOut');
        setTimeout(() => {
          modal.style.display = 'none';
          modal.classList.remove('fadeOut');
          document.body.style.overflow = '';
          document.body.style.marginRight = '0px';
        }, 900);
      }
    });
  }
  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }
  bindModal('.button_start', '.popup_start', '.popup_1 .popup-close');
  bindModal('.popup_1 .button_start', '.popup_about-task', '.popup_2 .popup-close');
  bindModal('.popup_2 .button_start', '.popup_task-1', '.popup_3 .popup-close');
  bindModal('.popup_3 .button_answer', '.popup_answer-1', '.popup_4 .popup-close');
  bindModal('.popup_4 .button_answer', '.popup_result', '.popup_5 .popup-close');
  bindModal('.popup_5 .button_answer', '.header', '.popup_5 .button_answer');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

/***/ }),

/***/ "./src/js/modules/scroll-to-down.js":
/*!******************************************!*\
  !*** ./src/js/modules/scroll-to-down.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrowScroll: () => (/* binding */ arrowScroll)
/* harmony export */ });
const arrowScroll = () => {
  document.querySelector('.button_tap_next').addEventListener('click', event => {
    event.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });
};
window.addEventListener('scroll', arrowScroll);
window.addEventListener('resize', arrowScroll);


/***/ }),

/***/ "./src/js/modules/scroll-to-up.js":
/*!****************************************!*\
  !*** ./src/js/modules/scroll-to-up.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleScroll: () => (/* binding */ handleScroll)
/* harmony export */ });
const handleScroll = () => {
  const scrollToTopButton = document.getElementById('scroll-to-top');
  if (window.pageYOffset > 1000) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
};
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);
document.getElementById('scroll-to-top').addEventListener('click', function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const scrolling = upSelector => {
  const upElem = document.querySelector(upSelector);
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1000) {
      upElem.classList.add('animated', 'fadeIn');
      upElem.classList.remove('fadeOut');
    } else {
      upElem.classList.add('fadeOut');
      upElem.classList.remove('fadeIn');
    }
  });
  let links = document.querySelectorAll('[href^="#"]'),
    speed = 0.3;
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      let widthTop = document.documentElement.scrollTop,
        hash = this.hash;

      // Проверка на пустой хэш
      if (hash !== '') {
        let toBlock = document.querySelector(hash).getBoundingClientRect().top,
          start = null;
        requestAnimationFrame(step);
        function step(time) {
          if (start === null) {
            start = time;
          }
          let progress = time - start,
            r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
          document.documentElement.scrollTo(0, r);
          if (r != widthTop + toBlock) {
            requestAnimationFrame(step);
          } else {
            location.hash = hash;
          }
        }
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrolling);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js");
/* harmony import */ var _modules_scroll_to_up__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll-to-up */ "./src/js/modules/scroll-to-up.js");
/* harmony import */ var _modules_scroll_to_down__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scroll-to-down */ "./src/js/modules/scroll-to-down.js");





window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_1__["default"])('.header__menu_burger', '.burger', '.header__menu_burger .popup-close');
  (0,_modules_scrolling__WEBPACK_IMPORTED_MODULE_2__["default"])('#scroll-to-top');
  window.addEventListener('scroll', _modules_scroll_to_up__WEBPACK_IMPORTED_MODULE_3__.handleScroll);
  window.addEventListener('scroll', _modules_scroll_to_down__WEBPACK_IMPORTED_MODULE_4__.arrowScroll);
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map