/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderContact: () => (/* binding */ renderContact),
/* harmony export */   renderHome: () => (/* binding */ renderHome),
/* harmony export */   renderMenu: () => (/* binding */ renderMenu)
/* harmony export */ });
const renderHome = function (rootElement) {
  const content = `
    <section
      data-tab-id="home"
      class="tab max-w-screen-sm mx-auto mb-8"
    >
      <h1 class="text-3xl mb-2">Burger Shop</h1>
      <p class="mb-4">The number one top ranked burger place in Canada.</p>
      <div class="mb-4">
        <h2 class="text-2xl mb-2">Hours</h2>
        <p class="">Sunday: 8am - 8pm</p>
        <p class="">Monday: 6am - 6pm</p>
        <p class="">Tuesday: 6am - 6pm</p>
        <p class="">Wednesday: 6am - 6pm</p>
        <p class="">Thursday: 6am - 10pm</p>
        <p class="">Friday: 6am - 10pm</p>
        <p class="">Saturday: 8am - 10pm</p>
      </div>
      <div class="">
        <h2 class="text-2xl mb-2">Location</h2>
        <p class="">1 Burger Place 123 ABC, Vancouver BC</p>
      </div>
    </section>
  `;
  rootElement.insertAdjacentHTML("beforeend", content);
};

const renderMenu = function (rootElement) {
  const content = `
    <section
      data-tab-id="menu"
      class="tab max-w-screen-sm mx-auto mb-8"
    >
      <h1 class="text-3xl mb-2">Menu</h1>
      <div class="flex flex-col gap-y-10">
        <article class="">
          <img src="./assets/beef-burger.jpg" alt="beef burger" class="" />
          <div class="">
            <h2 class="text-2xl mb-2">Beef Burger</h2>
            <p class="">
              The classic beef hamburger sourced from the finest grass-fed
              Canadian cows.
            </p>
            <p class="">$20</p>
          </div>
        </article>
        <article class="">
          <img
            src="./assets/chicken-burger.jpg"
            alt="chicken burger"
            class=""
          />
          <div class="">
            <h2 class="text-2xl mb-2">Chicken Burger</h2>
            <p class="">
              The classic chicken hamburger sourced from the finest free-range
              Canadian chickens.
            </p>
            <p class="">$15</p>
          </div>
        </article>
        <article class="">
          <img
            src="./assets/pulled-pork-burger.jpg"
            alt="pulled pork burger"
            class=""
          />
          <div class="">
            <h2 class="text-2xl mb-2">Pulled Pork Burger</h2>
            <p class="">
              The contemporary pulled pork hamburger sourced from the finest
              local, non-GMO Canadian pigs.
            </p>
            <p class="">$15</p>
          </div>
        </article>
      </div>
    </section>
  `;
  rootElement.insertAdjacentHTML("beforeend", content);
};

const renderContact = function (rootElement) {
  const content = `
    <section
      data-tab-id="contact"
      class="tab max-w-screen-sm mx-auto mb-8"
    >
      <h1 class="text-3xl mb-2">Come Say Hello!</h1>
      <div class="">
        <p class="">Burger Shop Support</p>
        <p class="">012-234-5678</p>
        <p class="">support@burgershop.ca</p>
      </div>
    </section>
  `;
  rootElement.insertAdjacentHTML("beforeend", content);
};




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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage */ "./src/loadPage.js");


const tabToRenderFn = {
  home: (rootElement) => {
    (0,_loadPage__WEBPACK_IMPORTED_MODULE_0__.renderHome)(rootElement);
  },
  menu: (rootElement) => {
    (0,_loadPage__WEBPACK_IMPORTED_MODULE_0__.renderMenu)(rootElement);
  },
  contact: (rootElement) => {
    (0,_loadPage__WEBPACK_IMPORTED_MODULE_0__.renderContact)(rootElement);
  },
};

const isNavItem = function (element) {
  if (!element.classList.contains("nav-item")) return false;
  if (!element.getAttribute("data-nav-id")) return false;
  return true;
};

const renderTabContent = function (tabId, contentElement, tabToRenderFn) {
  contentElement.replaceChildren();
  tabToRenderFn[tabId](contentElement);
};

window.addEventListener("load", function () {
  const contentElement = document.querySelector("#content");
  const navListElement = document.querySelector(".nav-list");

  const handleNavItem = function (e) {
    if (!isNavItem(e.target)) return;

    const desiredTab = e.target.getAttribute("data-nav-id");
    const realTab = document.querySelector(".tab")
      ? document.querySelector(".tab").getAttribute("data-tab-id")
      : "home";
    if (desiredTab === realTab) return;

    renderTabContent(desiredTab, contentElement, tabToRenderFn);
  };

  navListElement.addEventListener("click", handleNavItem);

  renderTabContent("home", contentElement, tabToRenderFn);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2lEOzs7Ozs7O1VDbkdqRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQVU7QUFDZCxHQUFHO0FBQ0g7QUFDQSxJQUFJLHFEQUFVO0FBQ2QsR0FBRztBQUNIO0FBQ0EsSUFBSSx3REFBYTtBQUNqQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRQYWdlLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlbmRlckhvbWUgPSBmdW5jdGlvbiAocm9vdEVsZW1lbnQpIHtcclxuICBjb25zdCBjb250ZW50ID0gYFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgZGF0YS10YWItaWQ9XCJob21lXCJcclxuICAgICAgY2xhc3M9XCJ0YWIgbWF4LXctc2NyZWVuLXNtIG14LWF1dG8gbWItOFwiXHJcbiAgICA+XHJcbiAgICAgIDxoMSBjbGFzcz1cInRleHQtM3hsIG1iLTJcIj5CdXJnZXIgU2hvcDwvaDE+XHJcbiAgICAgIDxwIGNsYXNzPVwibWItNFwiPlRoZSBudW1iZXIgb25lIHRvcCByYW5rZWQgYnVyZ2VyIHBsYWNlIGluIENhbmFkYS48L3A+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtYi00XCI+XHJcbiAgICAgICAgPGgyIGNsYXNzPVwidGV4dC0yeGwgbWItMlwiPkhvdXJzPC9oMj5cclxuICAgICAgICA8cCBjbGFzcz1cIlwiPlN1bmRheTogOGFtIC0gOHBtPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiXCI+TW9uZGF5OiA2YW0gLSA2cG08L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJcIj5UdWVzZGF5OiA2YW0gLSA2cG08L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJcIj5XZWRuZXNkYXk6IDZhbSAtIDZwbTwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cIlwiPlRodXJzZGF5OiA2YW0gLSAxMHBtPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiXCI+RnJpZGF5OiA2YW0gLSAxMHBtPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiXCI+U2F0dXJkYXk6IDhhbSAtIDEwcG08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzPVwidGV4dC0yeGwgbWItMlwiPkxvY2F0aW9uPC9oMj5cclxuICAgICAgICA8cCBjbGFzcz1cIlwiPjEgQnVyZ2VyIFBsYWNlIDEyMyBBQkMsIFZhbmNvdXZlciBCQzwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgYDtcclxuICByb290RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgY29udGVudCk7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJNZW51ID0gZnVuY3Rpb24gKHJvb3RFbGVtZW50KSB7XHJcbiAgY29uc3QgY29udGVudCA9IGBcclxuICAgIDxzZWN0aW9uXHJcbiAgICAgIGRhdGEtdGFiLWlkPVwibWVudVwiXHJcbiAgICAgIGNsYXNzPVwidGFiIG1heC13LXNjcmVlbi1zbSBteC1hdXRvIG1iLThcIlxyXG4gICAgPlxyXG4gICAgICA8aDEgY2xhc3M9XCJ0ZXh0LTN4bCBtYi0yXCI+TWVudTwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGdhcC15LTEwXCI+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvYmVlZi1idXJnZXIuanBnXCIgYWx0PVwiYmVlZiBidXJnZXJcIiBjbGFzcz1cIlwiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtMnhsIG1iLTJcIj5CZWVmIEJ1cmdlcjwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgVGhlIGNsYXNzaWMgYmVlZiBoYW1idXJnZXIgc291cmNlZCBmcm9tIHRoZSBmaW5lc3QgZ3Jhc3MtZmVkXHJcbiAgICAgICAgICAgICAgQ2FuYWRpYW4gY293cy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cIlwiPiQyMDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCIuL2Fzc2V0cy9jaGlja2VuLWJ1cmdlci5qcGdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJjaGlja2VuIGJ1cmdlclwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtMnhsIG1iLTJcIj5DaGlja2VuIEJ1cmdlcjwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgVGhlIGNsYXNzaWMgY2hpY2tlbiBoYW1idXJnZXIgc291cmNlZCBmcm9tIHRoZSBmaW5lc3QgZnJlZS1yYW5nZVxyXG4gICAgICAgICAgICAgIENhbmFkaWFuIGNoaWNrZW5zLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiXCI+JDE1PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIi4vYXNzZXRzL3B1bGxlZC1wb3JrLWJ1cmdlci5qcGdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJwdWxsZWQgcG9yayBidXJnZXJcIlxyXG4gICAgICAgICAgICBjbGFzcz1cIlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LTJ4bCBtYi0yXCI+UHVsbGVkIFBvcmsgQnVyZ2VyPC9oMj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICBUaGUgY29udGVtcG9yYXJ5IHB1bGxlZCBwb3JrIGhhbWJ1cmdlciBzb3VyY2VkIGZyb20gdGhlIGZpbmVzdFxyXG4gICAgICAgICAgICAgIGxvY2FsLCBub24tR01PIENhbmFkaWFuIHBpZ3MuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJcIj4kMTU8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIGA7XHJcbiAgcm9vdEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGNvbnRlbnQpO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyQ29udGFjdCA9IGZ1bmN0aW9uIChyb290RWxlbWVudCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBgXHJcbiAgICA8c2VjdGlvblxyXG4gICAgICBkYXRhLXRhYi1pZD1cImNvbnRhY3RcIlxyXG4gICAgICBjbGFzcz1cInRhYiBtYXgtdy1zY3JlZW4tc20gbXgtYXV0byBtYi04XCJcclxuICAgID5cclxuICAgICAgPGgxIGNsYXNzPVwidGV4dC0zeGwgbWItMlwiPkNvbWUgU2F5IEhlbGxvITwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJcIj5cclxuICAgICAgICA8cCBjbGFzcz1cIlwiPkJ1cmdlciBTaG9wIFN1cHBvcnQ8L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJcIj4wMTItMjM0LTU2Nzg8L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJcIj5zdXBwb3J0QGJ1cmdlcnNob3AuY2E8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIGA7XHJcbiAgcm9vdEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGNvbnRlbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgcmVuZGVySG9tZSwgcmVuZGVyTWVudSwgcmVuZGVyQ29udGFjdCB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHJlbmRlckhvbWUsIHJlbmRlck1lbnUsIHJlbmRlckNvbnRhY3QgfSBmcm9tIFwiLi9sb2FkUGFnZVwiO1xyXG5cclxuY29uc3QgdGFiVG9SZW5kZXJGbiA9IHtcclxuICBob21lOiAocm9vdEVsZW1lbnQpID0+IHtcclxuICAgIHJlbmRlckhvbWUocm9vdEVsZW1lbnQpO1xyXG4gIH0sXHJcbiAgbWVudTogKHJvb3RFbGVtZW50KSA9PiB7XHJcbiAgICByZW5kZXJNZW51KHJvb3RFbGVtZW50KTtcclxuICB9LFxyXG4gIGNvbnRhY3Q6IChyb290RWxlbWVudCkgPT4ge1xyXG4gICAgcmVuZGVyQ29udGFjdChyb290RWxlbWVudCk7XHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGlzTmF2SXRlbSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgaWYgKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm5hdi1pdGVtXCIpKSByZXR1cm4gZmFsc2U7XHJcbiAgaWYgKCFlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbmF2LWlkXCIpKSByZXR1cm4gZmFsc2U7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJUYWJDb250ZW50ID0gZnVuY3Rpb24gKHRhYklkLCBjb250ZW50RWxlbWVudCwgdGFiVG9SZW5kZXJGbikge1xyXG4gIGNvbnRlbnRFbGVtZW50LnJlcGxhY2VDaGlsZHJlbigpO1xyXG4gIHRhYlRvUmVuZGVyRm5bdGFiSWRdKGNvbnRlbnRFbGVtZW50KTtcclxufTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgY29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgY29uc3QgbmF2TGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1saXN0XCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVOYXZJdGVtID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmICghaXNOYXZJdGVtKGUudGFyZ2V0KSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGRlc2lyZWRUYWIgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hdi1pZFwiKTtcclxuICAgIGNvbnN0IHJlYWxUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYlwiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFiXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtdGFiLWlkXCIpXHJcbiAgICAgIDogXCJob21lXCI7XHJcbiAgICBpZiAoZGVzaXJlZFRhYiA9PT0gcmVhbFRhYikgcmV0dXJuO1xyXG5cclxuICAgIHJlbmRlclRhYkNvbnRlbnQoZGVzaXJlZFRhYiwgY29udGVudEVsZW1lbnQsIHRhYlRvUmVuZGVyRm4pO1xyXG4gIH07XHJcblxyXG4gIG5hdkxpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVOYXZJdGVtKTtcclxuXHJcbiAgcmVuZGVyVGFiQ29udGVudChcImhvbWVcIiwgY29udGVudEVsZW1lbnQsIHRhYlRvUmVuZGVyRm4pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9