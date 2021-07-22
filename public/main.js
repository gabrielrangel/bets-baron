/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Checkout/style.css":
/*!*******************************************!*\
  !*** ./src/components/Checkout/style.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bets-baron/./src/components/Checkout/style.css?");

/***/ }),

/***/ "./src/components/EventCard/style.css":
/*!********************************************!*\
  !*** ./src/components/EventCard/style.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bets-baron/./src/components/EventCard/style.css?");

/***/ }),

/***/ "./src/components/Market/style.css":
/*!*****************************************!*\
  !*** ./src/components/Market/style.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bets-baron/./src/components/Market/style.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bets-baron/./src/style.css?");

/***/ }),

/***/ "./src/components/Checkout/index.js":
/*!******************************************!*\
  !*** ./src/components/Checkout/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Checkout\": () => (/* binding */ Checkout)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/components/Checkout/style.css\");\n\n\n\n\nfunction Checkout(rawData){\n    const productList = document.querySelector('.product-list')\n\n    const list = () => Array.from(productList.children)\n\n    const selected = () => document.querySelectorAll('.selections-area .green')\n\n    const getPrice = ({eventID, marketID, selectionID}) => {\n        const eventIndex = rawData.findIndex(({id}) => id === eventID)\n\n        const {markets} = rawData[eventIndex]\n        const marketIndex = markets.findIndex(({id}) =>id === marketID)\n\n        const {selections} = markets[marketIndex]\n        const selectionIndex = selections.findIndex(({id}) => id === selectionID)\n\n        const {price} = selections[selectionIndex]\n        return price\n    }\n\n    const total = () => {\n        return Array.from(selected(), (button) => getPrice(JSON.parse(button.value)))\n            .reduce((total, unitPrice) => total + unitPrice)\n    }\n\n    const handleCheckout = (e) => {\n        e.preventDefault()\n    }\n\n    const slipViewToggle = () => {\n        const wrapper = document.querySelector('.checkout-wrapper')\n        const display = wrapper.style.display === 'none'\n        wrapper.style.display = !display ? 'none' : 'flex'\n        document.querySelector('body').classList[!display ? 'remove' : 'add']('slip-view')\n    }\n\n    this.ProductCard = ({desc, ...ids}) => {\n        return Object.assign( document.createElement('output'), {\n            className: 'grey-hover',\n            innerHTML: `${desc} <span>${getPrice(ids)}</span>`\n        })\n    }\n\n    this.render = () => {\n        list().forEach(card => card.remove())\n\n        selected().forEach((button)=>{\n            productList.appendChild( this.ProductCard(JSON.parse(button.value)) )\n        })\n\n        document.querySelector('#total').innerHTML = `<span>$</span> ${total()}`\n    }\n\n    document.querySelector('#checkout').addEventListener('submit', handleCheckout)\n\n    document.querySelectorAll('.slip-view-toggle').forEach(toggle => {\n        toggle.addEventListener('click', slipViewToggle)\n    })\n}\n\n\n//# sourceURL=webpack://bets-baron/./src/components/Checkout/index.js?");

/***/ }),

/***/ "./src/components/EventCard/index.js":
/*!*******************************************!*\
  !*** ./src/components/EventCard/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EventCard\": () => (/* binding */ EventCard)\n/* harmony export */ });\n/* harmony import */ var _Market__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Market */ \"./src/components/Market/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/components/EventCard/style.css\");\n\n\n\nfunction EventCard ({name, markets, id}, callback) {\n    const [teamA, teamB] = name.split(' vs ')\n\n    const card = document.createElement('div')\n    card.classList.add('event-card')\n    card.classList.add('grey-hover')\n\n\n    card.appendChild( Object.assign(\n        document.createElement('div'),\n        {\n            className:'event-name',\n            innerHTML: name\n        }\n    ) )\n\n    markets.forEach(markets => {\n        card.appendChild((0,_Market__WEBPACK_IMPORTED_MODULE_0__.Market)({eventID:id, ...markets}, callback))\n    })\n\n    return card\n}\n\n\n//# sourceURL=webpack://bets-baron/./src/components/EventCard/index.js?");

/***/ }),

/***/ "./src/components/Market/index.js":
/*!****************************************!*\
  !*** ./src/components/Market/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Market\": () => (/* binding */ Market)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/components/Market/style.css\");\n\n\nfunction Market ({eventID, id:marketID, name:marketName, selections}, callback){\n    const handleBetButtonClick = (e) => {\n        const isButton = e.target.tagName === 'BUTTON'\n        const button = isButton ? e.target : e.target.parentNode\n\n        const isClicked = button.classList.contains('green')\n\n        isClicked || Array.from(button.parentNode.children).forEach(button => button.classList.remove('green'))\n        isClicked ? button.classList.remove('green') : button.classList.add('green')\n\n        callback()\n    }\n\n    const market = document.createElement('div')\n\n    market.classList.add('market')\n    market.dataset.market = marketName\n\n    market.appendChild( Object.assign(\n        document.createElement('p'),\n        {\n            innerHTML: marketName\n        }\n    ))\n\n    const selectionsArea = market.appendChild( Object.assign(\n        document.createElement('div'),\n        {\n            className: 'selections-area'\n        }\n    ))\n\n    selections.forEach(({id:selectionID, name:selectionName, price}) => {\n        const desc = `${selectionName} to ${marketName.split(' to ')[1]}`\n        selectionsArea.appendChild( Object.assign(\n            document.createElement('button'),\n            {\n                innerHTML: `<div>${selectionName}</div> <div>${price}</div>`,\n                value: JSON.stringify({eventID, marketID, selectionID, desc}),\n                onclick: handleBetButtonClick,\n            }\n        ))\n    })\n\n    return market\n}\n\n\n//# sourceURL=webpack://bets-baron/./src/components/Market/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_EventCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/EventCard */ \"./src/components/EventCard/index.js\");\n/* harmony import */ var _components_Checkout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Checkout */ \"./src/components/Checkout/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nwindow.onscroll = () => {\n    const test = document.documentElement.scrollTop > 20 ? 'add' : 'remove'\n    document.querySelector('header').classList[test]('fixed')\n    document.querySelector('main').classList[test]('fixed')\n}\n\nfetch('https://www.mocky.io/v2/59f08692310000b4130e9f71')\n    .then((res) => res.json())\n    .then((data) => {\n        const main = document.querySelector('main')\n        const checkout = new _components_Checkout__WEBPACK_IMPORTED_MODULE_1__.Checkout(data)\n\n        data.forEach(({markets, ...event}) => {\n            markets.length > 0 && main.appendChild((0,_components_EventCard__WEBPACK_IMPORTED_MODULE_0__.EventCard)({markets, ...event}, checkout.render))\n        })\n    })\n\n\n//# sourceURL=webpack://bets-baron/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;