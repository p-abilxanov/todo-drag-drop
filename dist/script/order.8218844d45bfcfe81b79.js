/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./script/order.ts":
/*!*************************!*\
  !*** ./script/order.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clientOrder\": function() { return /* binding */ clientOrder; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar clientBuyPurchaseMainBlock = document.querySelector('.client-product-purchase');\n\nvar Order = /*#__PURE__*/function () {\n  function Order() {\n    _classCallCheck(this, Order);\n  }\n\n  _createClass(Order, [{\n    key: \"createClient\",\n    value: function createClient() {\n      var item = localStorage.getItem('orderOfClient') ? JSON.parse(localStorage.getItem('orderOfClient')) : undefined;\n      var TR = document.createElement('TR');\n      TR.style.borderTop = '1px solid #ccc';\n      var clientNameTD = document.createElement('TD');\n      clientNameTD.setAttribute('class', 'align-middle text-center text-sm');\n      clientNameTD.innerHTML = \"\".concat(item.clientName);\n      var clientPhoneNumberTD = document.createElement('TD');\n      clientPhoneNumberTD.setAttribute('class', 'align-middle text-center text-sm');\n      clientPhoneNumberTD.innerHTML = \"\".concat(item.phoneNumber);\n      var clientProductShowTD = document.createElement('TD');\n      clientProductShowTD.setAttribute('class', 'align-middle text-center text-sm');\n      var clientProductShowBTN = document.createElement('button');\n      clientProductShowBTN.setAttribute('type', 'button');\n      clientProductShowBTN.setAttribute('class', 'btn btn-primary');\n      clientProductShowBTN.setAttribute('data-toggle', 'modal');\n      clientProductShowBTN.setAttribute('data-target', '#exampleModal');\n      clientProductShowBTN.style.padding = '5px 25px';\n      clientProductShowBTN.style.fontSize = '14px';\n      clientProductShowBTN.innerHTML = 'Show';\n      clientProductShowTD.appendChild(clientProductShowBTN);\n      var clientProductExecuteTD = document.createElement('TD');\n      clientProductExecuteTD.setAttribute('class', 'align-middle text-center text-sm');\n      var clientProductExecuteBTN = document.createElement('button');\n      clientProductExecuteBTN.setAttribute('type', 'button');\n      clientProductExecuteBTN.setAttribute('class', 'btn btn-danger');\n      clientProductExecuteBTN.style.padding = '5px 25px';\n      clientProductExecuteBTN.style.fontSize = '14px';\n      clientProductExecuteBTN.innerHTML = 'Execute';\n      clientProductExecuteTD.appendChild(clientProductExecuteBTN);\n      TR.appendChild(clientNameTD);\n      TR.appendChild(clientPhoneNumberTD);\n      TR.appendChild(clientProductShowTD);\n      TR.appendChild(clientProductExecuteTD);\n      clientBuyPurchaseMainBlock === null || clientBuyPurchaseMainBlock === void 0 ? void 0 : clientBuyPurchaseMainBlock.appendChild(TR);\n    }\n  }, {\n    key: \"showProduct\",\n    value: function showProduct(item) {\n      var _document$querySelect;\n\n      var TR = document.createElement('tr');\n      TR.style.border = '1px solid #ccc;'; //PRODUCT IMAGE\n\n      var tdImage = document.createElement('td');\n      tdImage.setAttribute('class', \"product-img text-center\");\n      var productImg = document.createElement('IMG');\n      productImg.setAttribute('src', \"\".concat(item.img));\n      productImg.style.width = '40px';\n      productImg.style.height = '40px';\n      productImg.style.borderRadius = '50%';\n      tdImage.appendChild(productImg); //PRODUCT TITLE\n\n      var tdType = document.createElement('td');\n      tdType.setAttribute('class', \"product-title text-center\");\n      var productTitle = document.createElement('span');\n      productTitle.innerText = \"\".concat(item.name);\n      tdType.appendChild(productTitle); //PRODUCT PRICE\n\n      var tdPrice = document.createElement('td');\n      tdPrice.setAttribute('class', \"product-price text-center\");\n      tdPrice.setAttribute('scope', \"row\");\n      var productPrice = document.createElement('span');\n      productPrice.innerText = \"\".concat(item.price);\n      tdPrice.appendChild(productPrice); //PRODUCT ID\n\n      var tdProductId = document.createElement('td');\n      tdProductId.setAttribute('class', \"product-id text-center\");\n      var productID = document.createElement('span');\n      productID.innerText = \"\".concat(item.id);\n      tdProductId.appendChild(productID); //PRODUCT Count\n\n      var tdCount = document.createElement('td');\n      tdCount.setAttribute('class', \"product-count text-center\");\n      var productCount = document.createElement('span');\n      productCount.innerText = \"\".concat(item.count);\n      tdCount.appendChild(productCount); //PRODUCT DISCOUNT\n\n      var tdDiscount = document.createElement('td');\n      tdDiscount.setAttribute('class', \"product-discount text-center\");\n      var productDiscount = document.createElement('span');\n      productDiscount.innerText = \"\".concat(item.discount);\n      tdDiscount.appendChild(productDiscount);\n      TR.appendChild(tdImage);\n      TR.appendChild(tdType);\n      TR.appendChild(tdPrice);\n      TR.appendChild(tdProductId);\n      TR.appendChild(tdCount);\n      TR.appendChild(tdDiscount);\n      (_document$querySelect = document.querySelector('#orderOfClient-main')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.appendChild(TR);\n    }\n  }, {\n    key: \"setPurchasedProduct\",\n    value: function setPurchasedProduct() {\n      var _this = this;\n\n      var item = localStorage.getItem('orderOfClient') ? JSON.parse(localStorage.getItem('orderOfClient')).purchasedProduct : undefined;\n      item.forEach(function (e) {\n        _this.showProduct(e);\n      });\n    }\n  }]);\n\n  return Order;\n}();\n\nvar clientOrder = new Order();\n\n//# sourceURL=webpack:///./script/order.ts?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"order": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("./script/order.ts"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;