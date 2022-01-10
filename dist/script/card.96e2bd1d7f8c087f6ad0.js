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

/***/ "./script/card.ts":
/*!************************!*\
  !*** ./script/card.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myCart\": function() { return /* binding */ myCart; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar cartMainProduct = document.querySelector('.card-main-product');\nvar cartBuyProductBtn = document.querySelector('#card-buy');\nvar modalBuyProductBtn = document.querySelector('.save-user-edit');\nvar modalClientName = document.querySelector('#modal-buy-product-name');\nvar modalClientPhoneNumber = document.querySelector('#modal-buy-product-tell');\n\nvar Cart = /*#__PURE__*/function () {\n  function Cart(user) {\n    _classCallCheck(this, Cart);\n\n    _defineProperty(this, \"cartProduct\", JSON.parse(localStorage.getItem(\"product\")) ? JSON.parse(localStorage.getItem(\"product\")) : []);\n\n    this.user = user;\n  }\n\n  _createClass(Cart, [{\n    key: \"totalPrice\",\n    value: function totalPrice() {\n      var totalPriceBlock = document.querySelector('.card-price-total');\n      var lcCartProduct = JSON.parse(localStorage.getItem(\"product\"));\n      var sum = 0;\n      lcCartProduct === null || lcCartProduct === void 0 ? void 0 : lcCartProduct.forEach(function (e, i) {\n        sum += e.price * e.count;\n      });\n      if (totalPriceBlock) totalPriceBlock.innerHTML = \"\".concat(sum);\n    }\n  }, {\n    key: \"createCartProduct\",\n    value: function createCartProduct(item) {\n      var _this = this;\n\n      var cartProductItem = document.createElement('div');\n      cartProductItem.setAttribute('class', 'card-product-item');\n      var cartProductImgBlock = document.createElement('div');\n      cartProductImgBlock.setAttribute('class', 'card-product-img');\n      var cartProductImg = document.createElement('img');\n      cartProductImg.setAttribute('src', \"\".concat(item.img));\n      cartProductImgBlock.appendChild(cartProductImg);\n      var cartProductName = document.createElement('div');\n      cartProductName.setAttribute('class', 'card-product-name');\n      cartProductName.innerHTML = \"\".concat(item.name);\n      var cartProductCount = document.createElement('div');\n      cartProductCount.setAttribute('class', 'card-product-count');\n      var cartProductCountInput = document.createElement('input');\n      cartProductCountInput.setAttribute('id', 'card-product-count-input');\n      cartProductCountInput.setAttribute('name', 'card-product-count-input');\n      cartProductCountInput.setAttribute('type', 'number');\n      cartProductCountInput.setAttribute('min', '0');\n      cartProductCountInput.value = \"\".concat(item.count);\n      cartProductCount.appendChild(cartProductCountInput);\n      cartProductCountInput.addEventListener('input', function (e) {\n        var lcCartProduct = JSON.parse(localStorage.getItem(\"product\"));\n        lcCartProduct.forEach(function (e, i) {\n          if (e.id === item.id) {\n            lcCartProduct[i].count = parseInt(cartProductCountInput.value);\n          }\n        });\n        localStorage.setItem('product', JSON.stringify(lcCartProduct));\n\n        _this.totalPrice();\n      });\n      var cartProductDelete = document.createElement('div');\n      cartProductDelete.setAttribute('class', 'card-product-delete');\n      var cartProductDeleteBtn = document.createElement('input');\n      cartProductDeleteBtn.setAttribute('value', 'Delete');\n      cartProductDeleteBtn.setAttribute('type', 'button');\n      cartProductDelete.appendChild(cartProductDeleteBtn);\n      cartProductDeleteBtn.addEventListener('click', function (e) {\n        var lcCartProduct = JSON.parse(localStorage.getItem(\"product\"));\n        lcCartProduct.forEach(function (e, i) {\n          if (e.id === item.id) {\n            lcCartProduct.splice(i, 1);\n          }\n        });\n        e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);\n        localStorage.setItem('product', JSON.stringify(lcCartProduct));\n\n        _this.totalPrice();\n      });\n      cartProductItem.appendChild(cartProductImgBlock);\n      cartProductItem.appendChild(cartProductName);\n      cartProductItem.appendChild(cartProductCount);\n      cartProductItem.appendChild(cartProductDelete);\n      cartMainProduct === null || cartMainProduct === void 0 ? void 0 : cartMainProduct.appendChild(cartProductItem);\n      this.totalPrice();\n    }\n  }, {\n    key: \"autoSetProduct\",\n    value: function autoSetProduct() {\n      var _this2 = this;\n\n      var product = JSON.parse(localStorage.getItem(\"product\"));\n\n      if (cartMainProduct) {\n        cartMainProduct.innerHTML = '';\n      }\n\n      product.forEach(function (e) {\n        _this2.createCartProduct(e);\n      });\n      this.totalPrice();\n    }\n  }, {\n    key: \"setProduct\",\n    value: function setProduct(item) {\n      if (localStorage.getItem(\"product\")) {\n        if (JSON.parse(localStorage.getItem(\"product\")).every(function (e) {\n          return e.id != item.id;\n        })) {\n          this.cartProduct.push(item);\n          localStorage.setItem(\"product\", JSON.stringify(this.cartProduct));\n          this.createCartProduct(item);\n          alert('The product was successfully added!!!');\n        } else {\n          alert('The product has already added!!!');\n        }\n      } else {\n        this.cartProduct.push(item);\n        localStorage.setItem(\"product\", JSON.stringify(this.cartProduct));\n        this.createCartProduct(item);\n        alert('The product was successfully added!!!');\n      }\n    }\n  }, {\n    key: \"cardClear\",\n    value: function cardClear() {\n      this.cartProduct = [];\n      localStorage.removeItem('product');\n      this.totalPrice();\n      cartMainProduct.innerHTML = \"\";\n    }\n  }]);\n\n  return Cart;\n}();\n\nvar myCart = new Cart(JSON.parse(localStorage.getItem('active-user')));\n\nif (localStorage.getItem(\"product\")) {\n  myCart.autoSetProduct();\n}\n\nvar cardClear = document.querySelector('#card-clear');\ncardClear === null || cardClear === void 0 ? void 0 : cardClear.addEventListener('click', function (e) {\n  myCart.cardClear();\n});\nmodalBuyProductBtn === null || modalBuyProductBtn === void 0 ? void 0 : modalBuyProductBtn.addEventListener('click', function (e) {\n  var orderOfClient = {\n    clientName: modalClientName.value,\n    phoneNumber: modalClientPhoneNumber.value,\n    purchasedProduct: JSON.parse(localStorage.getItem(\"product\"))\n  };\n  localStorage.setItem('orderOfClient', JSON.stringify(orderOfClient));\n  alert('Thank you for your purchase');\n});\n\n//# sourceURL=webpack:///./script/card.ts?");

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
/******/ 			"card": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("./script/card.ts"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;