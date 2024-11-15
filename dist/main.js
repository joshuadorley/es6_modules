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

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Car\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\r\n    constructor(id, make, model, year) {\r\n        this.id = id;\r\n        this.make = make;\r\n        this.model = model;\r\n        this.year = year;\r\n    }\r\n}\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist.js */ \"./src/wishlist.js\");\n\r\n\r\nconst form = document.getElementById(\"submitForm\");\r\nconst makeInput = document.getElementById(\"makeInput\");\r\nconst modelInput = document.getElementById(\"modelInput\");\r\nconst yearInput = document.getElementById(\"yearInput\");\r\nconst makeDisplay = document.getElementById(\"car-make\");\r\nconst modelDisplay = document.getElementById(\"car-model\");\r\nconst yearDisplay = document.getElementById(\"car-year\");\r\nconst removeBtn = document.querySelector(\".removeBtn\");\r\nconst wishListUl = document.querySelector(\"#wishListContainer ul\");\r\n\r\nconst wishlist = new _wishlist_js__WEBPACK_IMPORTED_MODULE_0__.WishList();\r\n\r\nfunction showCarDetails(car) {\r\n    makeDisplay.textContent = car.make;\r\n    modelDisplay.textContent = car.model;\r\n    yearDisplay.textContent = car.year;\r\n  \r\n    removeBtn.disabled = false;\r\n    removeBtn.setAttribute(\"data-carId\", car.id);\r\n  }\r\n\r\n  function updateDOMList() {\r\n    wishListUl.innerHTML = \"\";\r\n  \r\n    wishlist.list.forEach(car => {\r\n      const li = document.createElement(\"li\");\r\n      li.textContent = `${car.make} ${car.model}`;\r\n      li.addEventListener(\"click\", () => showCarDetails(car));\r\n      wishListUl.appendChild(li);\r\n    });\r\n  }\r\n\r\n  function addCar(event) {\r\n    event.preventDefault();\r\n  \r\n    const make = makeInput.value;\r\n    const model = modelInput.value;\r\n    const year = yearInput.value;\r\n  \r\n    wishlist.add(make, model, year);\r\n    updateDOMList();\r\n  \r\n    form.reset();\r\n  }\r\n  \r\n  form.addEventListener(\"submit\", addCar);\r\n\r\n  function removeCar() {\r\n    const carId = Number(removeBtn.getAttribute(\"data-carId\"));\r\n  \r\n    wishlist.remove(carId);\r\n    updateDOMList();\r\n  \r\n    makeDisplay.textContent = \"\";\r\n    modelDisplay.textContent = \"\";\r\n    yearDisplay.textContent = \"\";\r\n  \r\n    removeBtn.disabled = true;\r\n  }\r\n  \r\n  removeBtn.addEventListener(\"click\", removeCar);\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WishList\": () => (/* binding */ WishList)\n/* harmony export */ });\n/* harmony import */ var _car_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car.js */ \"./src/car.js\");\n\r\n\r\nclass WishList {\r\n  constructor() {\r\n    this.list = [];\r\n    this.nextId = 0;\r\n  }\r\n\r\n  add(make, model, year) {\r\n    const car = new _car_js__WEBPACK_IMPORTED_MODULE_0__.Car(++this.nextId, make, model, year);\r\n    this.list.push(car);\r\n  }\r\n\r\n  remove(carId) {\r\n    this.list = this.list.filter(car => car.id !== carId);\r\n  }\r\n}\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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