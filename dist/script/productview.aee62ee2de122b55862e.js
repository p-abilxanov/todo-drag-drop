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

/***/ }),

/***/ "./script/db.ts":
/*!**********************!*\
  !*** ./script/db.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar DataBase = [{\n  id: 1,\n  name: 'ave classic sweatshirt',\n  price: 107,\n  discount: 10,\n  count: 1,\n  img: './image/itemImg1.png',\n  description: 'Classic casual t-shirt for women on the move. 100% cotton.'\n}, {\n  id: 2,\n  name: 'ave classic sweatshirt',\n  price: 120,\n  discount: 10,\n  count: 1,\n  img: './image/itemImg2.png',\n  description: 'Classic casual t-shirt for women on the move.100% cotton.'\n}, {\n  id: 3,\n  name: 'ave classic sweatshirt',\n  price: 100,\n  discount: 10,\n  count: 1,\n  img: './image/itemImg3.png',\n  description: 'Classic casual t-shirt for women on the move.100% cotton.'\n}, {\n  id: 4,\n  name: 'ave classic sweatshirt',\n  price: 90,\n  discount: 10,\n  count: 1,\n  img: './image/itemImg4.png',\n  description: 'Classic casual t-shirt for women on the move.100% cotton.'\n}, {\n  id: 5,\n  name: 'ave classic sweatshirt',\n  price: 115,\n  discount: 10,\n  count: 1,\n  img: './image/itemImg5.png',\n  description: 'Classic casual t-shirt for women on the move.100% cotton.'\n}, {\n  id: 6,\n  name: 'ave classic sweatshirt',\n  price: 130,\n  discount: 10,\n  count: 1,\n  img: './image/itemImg6.png',\n  description: 'Classic casual t-shirt for women on the move.100% cotton.'\n}, {\n  id: 7,\n  name: 'ave classic sweatshirt',\n  price: 105,\n  discount: 10,\n  count: 1,\n  img: './image/itemImg7.png',\n  description: 'Classic casual t-shirt for women on the move.100% cotton.'\n}];\n\nif (!localStorage.getItem('database')) {\n  localStorage.setItem('database', JSON.stringify(DataBase));\n}\n\nvar account = [{\n  nickname: 'admin',\n  password: 'admin'\n}, {\n  nickname: 'abc',\n  password: 'abc'\n}, {\n  nickname: 'aaa',\n  password: 'aaa'\n}, {\n  nickname: 'bbb',\n  password: 'ccc'\n}];\n\nif (!localStorage.getItem('users')) {\n  localStorage.setItem('users', JSON.stringify(account));\n}\n\n\n\n//# sourceURL=webpack:///./script/db.ts?");

/***/ }),

/***/ "./script/order.ts":
/*!*************************!*\
  !*** ./script/order.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clientOrder\": function() { return /* binding */ clientOrder; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar clientBuyPurchaseMainBlock = document.querySelector('.client-product-purchase');\n\nvar Order = /*#__PURE__*/function () {\n  function Order() {\n    _classCallCheck(this, Order);\n  }\n\n  _createClass(Order, [{\n    key: \"createClient\",\n    value: function createClient() {\n      var item = localStorage.getItem('orderOfClient') ? JSON.parse(localStorage.getItem('orderOfClient')) : undefined;\n      var TR = document.createElement('TR');\n      TR.style.borderTop = '1px solid #ccc';\n      var clientNameTD = document.createElement('TD');\n      clientNameTD.setAttribute('class', 'align-middle text-center text-sm');\n      clientNameTD.innerHTML = \"\".concat(item.clientName);\n      var clientPhoneNumberTD = document.createElement('TD');\n      clientPhoneNumberTD.setAttribute('class', 'align-middle text-center text-sm');\n      clientPhoneNumberTD.innerHTML = \"\".concat(item.phoneNumber);\n      var clientProductShowTD = document.createElement('TD');\n      clientProductShowTD.setAttribute('class', 'align-middle text-center text-sm');\n      var clientProductShowBTN = document.createElement('button');\n      clientProductShowBTN.setAttribute('type', 'button');\n      clientProductShowBTN.setAttribute('class', 'btn btn-primary');\n      clientProductShowBTN.setAttribute('data-toggle', 'modal');\n      clientProductShowBTN.setAttribute('data-target', '#exampleModal');\n      clientProductShowBTN.style.padding = '5px 25px';\n      clientProductShowBTN.style.fontSize = '14px';\n      clientProductShowBTN.innerHTML = 'Show';\n      clientProductShowTD.appendChild(clientProductShowBTN);\n      var clientProductExecuteTD = document.createElement('TD');\n      clientProductExecuteTD.setAttribute('class', 'align-middle text-center text-sm');\n      var clientProductExecuteBTN = document.createElement('button');\n      clientProductExecuteBTN.setAttribute('type', 'button');\n      clientProductExecuteBTN.setAttribute('class', 'btn btn-danger');\n      clientProductExecuteBTN.style.padding = '5px 25px';\n      clientProductExecuteBTN.style.fontSize = '14px';\n      clientProductExecuteBTN.innerHTML = 'Execute';\n      clientProductExecuteTD.appendChild(clientProductExecuteBTN);\n      TR.appendChild(clientNameTD);\n      TR.appendChild(clientPhoneNumberTD);\n      TR.appendChild(clientProductShowTD);\n      TR.appendChild(clientProductExecuteTD);\n      clientBuyPurchaseMainBlock === null || clientBuyPurchaseMainBlock === void 0 ? void 0 : clientBuyPurchaseMainBlock.appendChild(TR);\n    }\n  }, {\n    key: \"showProduct\",\n    value: function showProduct(item) {\n      var _document$querySelect;\n\n      var TR = document.createElement('tr');\n      TR.style.border = '1px solid #ccc;'; //PRODUCT IMAGE\n\n      var tdImage = document.createElement('td');\n      tdImage.setAttribute('class', \"product-img text-center\");\n      var productImg = document.createElement('IMG');\n      productImg.setAttribute('src', \"\".concat(item.img));\n      productImg.style.width = '40px';\n      productImg.style.height = '40px';\n      productImg.style.borderRadius = '50%';\n      tdImage.appendChild(productImg); //PRODUCT TITLE\n\n      var tdType = document.createElement('td');\n      tdType.setAttribute('class', \"product-title text-center\");\n      var productTitle = document.createElement('span');\n      productTitle.innerText = \"\".concat(item.name);\n      tdType.appendChild(productTitle); //PRODUCT PRICE\n\n      var tdPrice = document.createElement('td');\n      tdPrice.setAttribute('class', \"product-price text-center\");\n      tdPrice.setAttribute('scope', \"row\");\n      var productPrice = document.createElement('span');\n      productPrice.innerText = \"\".concat(item.price);\n      tdPrice.appendChild(productPrice); //PRODUCT ID\n\n      var tdProductId = document.createElement('td');\n      tdProductId.setAttribute('class', \"product-id text-center\");\n      var productID = document.createElement('span');\n      productID.innerText = \"\".concat(item.id);\n      tdProductId.appendChild(productID); //PRODUCT Count\n\n      var tdCount = document.createElement('td');\n      tdCount.setAttribute('class', \"product-count text-center\");\n      var productCount = document.createElement('span');\n      productCount.innerText = \"\".concat(item.count);\n      tdCount.appendChild(productCount); //PRODUCT DISCOUNT\n\n      var tdDiscount = document.createElement('td');\n      tdDiscount.setAttribute('class', \"product-discount text-center\");\n      var productDiscount = document.createElement('span');\n      productDiscount.innerText = \"\".concat(item.discount);\n      tdDiscount.appendChild(productDiscount);\n      TR.appendChild(tdImage);\n      TR.appendChild(tdType);\n      TR.appendChild(tdPrice);\n      TR.appendChild(tdProductId);\n      TR.appendChild(tdCount);\n      TR.appendChild(tdDiscount);\n      (_document$querySelect = document.querySelector('#orderOfClient-main')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.appendChild(TR);\n    }\n  }, {\n    key: \"setPurchasedProduct\",\n    value: function setPurchasedProduct() {\n      var _this = this;\n\n      var item = localStorage.getItem('orderOfClient') ? JSON.parse(localStorage.getItem('orderOfClient')).purchasedProduct : undefined;\n      item.forEach(function (e) {\n        _this.showProduct(e);\n      });\n    }\n  }]);\n\n  return Order;\n}();\n\nvar clientOrder = new Order();\n\n//# sourceURL=webpack:///./script/order.ts?");

/***/ }),

/***/ "./script/product-view.ts":
/*!********************************!*\
  !*** ./script/product-view.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ \"./script/db.ts\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ \"./script/card.ts\");\n/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order */ \"./script/order.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar DataBase = JSON.parse(localStorage.getItem('database'));\nvar productMain = document.getElementById('product-main');\nvar newProductTitle = document.querySelector('#validationTooltip1');\nvar newProductPrice = document.querySelector('#validationTooltip2');\nvar newProductDiscount = document.querySelector('#validationTooltip3');\nvar newProductDescription = document.querySelector('#validationTooltip4');\nvar modalTitle = document.querySelector('#validationTooltip11');\nvar modalPrice = document.querySelector('#validationTooltip22');\nvar modalDiscount = document.querySelector('#validationTooltip33');\nvar modalDescription = document.querySelector('#validationTooltip44');\nvar productTabMain = document.querySelectorAll('.lookbookItems .tab-pane .tab-main-inner');\nvar indexProduct = document.querySelector('.main-product');\nvar productViewBannerTitle = document.querySelector('#banner__subtitle');\nvar imgZoom = document.querySelector('#img-zoom-container img');\nvar productViewTitle = document.querySelector('#product__title');\nvar productViewIdCode = document.querySelector('#product-id-code');\nvar productViewPrice = document.querySelector('.product__price span');\nvar productViewAddToCart = document.querySelector('.product-add-to-cart');\n\nvar Product = /*#__PURE__*/function () {\n  function Product() {\n    _classCallCheck(this, Product);\n\n    _defineProperty(this, \"defaultImage\", './image/defaultimg.jpg');\n  }\n\n  _createClass(Product, [{\n    key: \"adminSetProduct\",\n    value: function adminSetProduct() {\n      var _this = this;\n\n      DataBase.forEach(function (element) {\n        _this.adminCreateProduct(element);\n      });\n    }\n  }, {\n    key: \"userSetProduct\",\n    value: function userSetProduct() {\n      var _this2 = this;\n\n      DataBase.forEach(function (element) {\n        _this2.createProduct(element);\n      });\n    }\n  }, {\n    key: \"indexSetProduct\",\n    value: function indexSetProduct() {\n      var _this3 = this;\n\n      DataBase.forEach(function (element) {\n        _this3.indexCreateProduct(element);\n      });\n    }\n  }, {\n    key: \"indexCreateProduct\",\n    value: function indexCreateProduct(item) {\n      var tabsItem = document.createElement('div');\n      tabsItem.setAttribute('class', 'tabs-item');\n      var tabsItemImgBlock = document.createElement('div');\n      tabsItemImgBlock.setAttribute('class', 'tabs-item-img');\n      var tabsItemImg = document.createElement('img');\n      tabsItemImg.setAttribute('data-productId', \"\".concat(item.id));\n      tabsItemImg.setAttribute('src', \"\".concat(item.img));\n      var tabsItemInfoIcon = document.createElement('i');\n      tabsItemInfoIcon.setAttribute('class', 'fas fa-info-circle');\n      tabsItemImgBlock.appendChild(tabsItemImg);\n      tabsItemImgBlock.appendChild(tabsItemInfoIcon);\n      tabsItem.appendChild(tabsItemImgBlock);\n      var tabsItemFooter = document.createElement('div');\n      tabsItemFooter.setAttribute('class', 'tabs-item-footer');\n      var tabsItemTitle = document.createElement('div');\n      tabsItemTitle.setAttribute('class', 'tabs-item-title');\n      tabsItemTitle.innerHTML = \"\".concat(item.name);\n      var tabsItemText = document.createElement('div');\n      tabsItemText.setAttribute('class', 'tabs-item-text');\n      tabsItemText.innerHTML = \"\".concat(item.description);\n      var tabsItemOrder = document.createElement('div');\n      tabsItemOrder.setAttribute('class', 'tabs-item-order');\n      var tabsItemCard = document.createElement('button');\n      tabsItemCard.setAttribute('class', 'tabs-item-cart');\n      tabsItemCard.setAttribute('data-productId', \"\".concat(item.id));\n      tabsItemCard.innerHTML = \"<i class=\\\"fas fa-shopping-cart\\\"></i>\";\n      tabsItemCard === null || tabsItemCard === void 0 ? void 0 : tabsItemCard.addEventListener('click', function (e) {\n        addCart(item);\n      });\n      var tabsItemFavourite = document.createElement('button');\n      tabsItemFavourite.setAttribute('class', 'tabs-item-favourite');\n      tabsItemFavourite.innerHTML = \"<i class=\\\"fas fa-heart\\\"></i>\";\n      var tabsItemCompare = document.createElement('button');\n      tabsItemCompare.setAttribute('class', 'tabs-item-compare');\n      tabsItemCompare.innerHTML = \"<i class=\\\"fas fa-compress-alt\\\"></i>\";\n      tabsItemOrder.appendChild(tabsItemCard);\n      tabsItemOrder.appendChild(tabsItemFavourite);\n      tabsItemOrder.appendChild(tabsItemCompare);\n      tabsItemFooter.appendChild(tabsItemTitle);\n      tabsItemFooter.appendChild(tabsItemText);\n      tabsItemFooter.appendChild(tabsItemOrder);\n      tabsItem.appendChild(tabsItemImgBlock);\n      tabsItem.appendChild(tabsItemFooter);\n      indexProduct === null || indexProduct === void 0 ? void 0 : indexProduct.appendChild(tabsItem);\n      tabsItemImgBlock === null || tabsItemImgBlock === void 0 ? void 0 : tabsItemImgBlock.addEventListener('click', function (e) {\n        localStorage.setItem('selectedProduct', JSON.stringify(item));\n        openProductView();\n      });\n    } //USER PRODUCT\n\n  }, {\n    key: \"createProduct\",\n    value: function createProduct(item) {\n      var tabItem = document.createElement('div');\n      tabItem.setAttribute('class', 'tabs-item');\n      var tabItemImg = document.createElement('div');\n      tabItemImg.setAttribute('class', 'tabs-item-img');\n      var productImg = document.createElement('img');\n      productImg.setAttribute('data-productId', \"\".concat(item.id));\n      productImg.setAttribute('src', \"\".concat(item.img));\n      var tabItemHover = document.createElement('div');\n      tabItemHover.setAttribute('class', 'tabs-item-hover');\n      var tabHoverInfoIcon = document.createElement('i');\n      tabHoverInfoIcon.setAttribute('class', \"fas fa-info-circle\");\n      var tabHoverLikeIcon = document.createElement('i');\n      tabHoverLikeIcon.setAttribute('class', \"fas fa-heart\");\n      tabItemHover.appendChild(tabHoverInfoIcon);\n      tabItemHover.appendChild(tabHoverLikeIcon);\n      tabItemImg.appendChild(productImg);\n      tabItemImg.appendChild(tabItemHover);\n      tabItem.appendChild(tabItemImg);\n      productTabMain.forEach(function (element) {\n        element.appendChild(tabItem);\n      });\n    } //ADMIN PRODUCT\n\n  }, {\n    key: \"adminCreateProduct\",\n    value: function adminCreateProduct(item) {\n      var _this4 = this;\n\n      var TR = document.createElement('tr');\n      TR.style.border = '1px solid #ccc;'; //PRODUCT IMAGE\n\n      var tdImage = document.createElement('td');\n      tdImage.setAttribute('class', \"product-img text-center\");\n      var productImg = document.createElement('IMG');\n      productImg.setAttribute('src', \"\".concat(item.img ? item.img : this.defaultImage));\n      productImg.style.width = '40px';\n      productImg.style.height = '40px';\n      productImg.style.borderRadius = '50%';\n      tdImage.appendChild(productImg); //PRODUCT TITLE\n\n      var tdType = document.createElement('td');\n      tdType.setAttribute('class', \"product-title text-center\");\n      var productTitle = document.createElement('span');\n      productTitle.innerText = \"\".concat(item.name);\n      tdType.appendChild(productTitle); //PRODUCT PRICE\n\n      var tdPrice = document.createElement('td');\n      tdPrice.setAttribute('class', \"product-price text-center\");\n      tdPrice.setAttribute('scope', \"row\");\n      var productPrice = document.createElement('span');\n      productPrice.innerText = \"\".concat(item.price);\n      tdPrice.appendChild(productPrice); //PRODUCT ID\n\n      var tdProductId = document.createElement('td');\n      tdProductId.setAttribute('class', \"product-id text-center\");\n      var productID = document.createElement('span');\n      productID.innerText = \"\".concat(item.id);\n      tdProductId.appendChild(productID); //PRODUCT DISCOUNT\n\n      var tdDiscount = document.createElement('td');\n      tdDiscount.setAttribute('class', \"product-discount text-center\");\n      var productDiscount = document.createElement('span');\n      productDiscount.innerText = \"\".concat(item.discount);\n      tdDiscount.appendChild(productDiscount); //PRODUCT CHANGE\n\n      var tdChange = document.createElement('td');\n      tdChange.setAttribute('class', \"product-change text-center\");\n      var productChange = document.createElement('button');\n      productChange.setAttribute('type', \"button\");\n      productChange.setAttribute('class', \"btn btn-primary\");\n      productChange.setAttribute('data-toggle', \"modal\");\n      productChange.setAttribute('data-target', '#exampleModal');\n      productChange.innerText = 'Change';\n      tdChange.appendChild(productChange); //Change MODAL SHOW\n\n      productChange.addEventListener('click', function (e) {\n        _this4.productChangeModal(item, e);\n      }); //PRODUCT DELETE\n\n      var tdDelete = document.createElement('td');\n      tdDelete.setAttribute('class', \"product-delete text-center\");\n      var productDelete = document.createElement('button');\n      productDelete.setAttribute('class', \"btn btn-danger\");\n      productDelete.innerText = 'Delete';\n      tdDelete.appendChild(productDelete); //PRODUCT DELETE\n\n      productDelete.addEventListener('click', function (e) {\n        _this4.productDelete(item, e);\n      });\n      TR.appendChild(tdImage);\n      TR.appendChild(tdType);\n      TR.appendChild(tdPrice);\n      TR.appendChild(tdProductId);\n      TR.appendChild(tdDiscount);\n      TR.appendChild(tdChange);\n      TR.appendChild(tdDelete);\n      productMain === null || productMain === void 0 ? void 0 : productMain.appendChild(TR);\n    }\n  }, {\n    key: \"productChangeModal\",\n    value: function productChangeModal(item, e) {\n      this.selectedProduct = item;\n      this.selectedItem = e;\n      modalTitle.value = \"\".concat(item.name);\n      modalPrice.value = \"\".concat(item.price);\n      modalDiscount.value = \"\".concat(item.discount);\n      modalDescription.value = \"\".concat(item.description);\n    }\n  }, {\n    key: \"changeInfo\",\n    value: function changeInfo() {\n      this.selectedItem.target.parentElement.parentElement.querySelector('.product-title span').innerText = modalTitle.value;\n      this.selectedItem.target.parentElement.parentElement.querySelector('.product-price span').innerText = modalPrice.value;\n      this.selectedItem.target.parentElement.parentElement.querySelector('.product-discount span').innerText = modalDiscount.value;\n      DataBase[DataBase.indexOf(this.selectedProduct)].description = modalDescription.value;\n      DataBase[DataBase.indexOf(this.selectedProduct)].name = modalTitle.value;\n      DataBase[DataBase.indexOf(this.selectedProduct)].price = parseInt(modalPrice.value);\n      DataBase[DataBase.indexOf(this.selectedProduct)].discount = parseInt(modalDiscount.value);\n      localStorage.setItem('database', JSON.stringify(DataBase));\n      alert('The change was successful!!!');\n    }\n  }, {\n    key: \"productDelete\",\n    value: function productDelete(item, e) {\n      e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);\n      DataBase.splice(DataBase.indexOf(item), 1);\n      localStorage.setItem('database', JSON.stringify(DataBase));\n      alert('The delete was successfully!!!');\n    }\n  }, {\n    key: \"addProduct\",\n    value: function addProduct(type, price, discount, description) {\n      var newProduct = {\n        id: DataBase[DataBase.length - 1].id + 1,\n        price: price,\n        name: type,\n        description: description,\n        img: this.defaultImage,\n        discount: discount,\n        count: 1\n      };\n      this.createProduct(newProduct);\n      this.adminCreateProduct(newProduct);\n      DataBase.push(newProduct);\n      localStorage.setItem('database', JSON.stringify(DataBase));\n    }\n  }]);\n\n  return Product;\n}();\n\nvar products = new Product();\nvar modalSaveBtn = document.querySelector('.save-edit');\n\nif (modalSaveBtn) {\n  modalSaveBtn.addEventListener('click', function (e) {\n    products.changeInfo();\n  });\n}\n\nvar addNewProductBtn = document.querySelector('.add-new-product');\n\nif (addNewProductBtn) {\n  addNewProductBtn.addEventListener('click', function (e) {\n    if (newProductTitle.value != \"\" && newProductTitle.value != \" \" && newProductPrice.value != \"\" && newProductPrice.value != \" \" && newProductDiscount.value != \"\" && newProductDiscount.value != \" \" && newProductDescription.value != \"\" && newProductDescription.value != \" \") {\n      products.addProduct(newProductTitle.value, parseInt(newProductPrice.value), parseInt(newProductDiscount.value), newProductDescription.value);\n    }\n  });\n}\n\nwindow.onload = function () {\n  products.userSetProduct();\n  products.adminSetProduct();\n  products.indexSetProduct();\n  setProductView();\n  _order__WEBPACK_IMPORTED_MODULE_2__.clientOrder.createClient();\n  _order__WEBPACK_IMPORTED_MODULE_2__.clientOrder.setPurchasedProduct();\n};\n\nfunction addCart(item) {\n  _card__WEBPACK_IMPORTED_MODULE_1__.myCart.setProduct(item);\n}\n\nfunction openProductView() {\n  window.open('./product-view.html', '_self');\n}\n\nfunction setProductView() {\n  var item = JSON.parse(localStorage.getItem('selectedProduct'));\n  if (productViewBannerTitle) productViewBannerTitle.innerHTML = \"\".concat(item.name);\n  imgZoom === null || imgZoom === void 0 ? void 0 : imgZoom.setAttribute('src', \"\".concat(item.img));\n  if (productViewTitle) productViewTitle.innerHTML = \"\".concat(item.name);\n  if (productViewIdCode) productViewIdCode.innerHTML = \"#\".concat(item.id);\n  if (productViewPrice) productViewPrice.innerHTML = \"\".concat(item.price);\n}\n\nproductViewAddToCart === null || productViewAddToCart === void 0 ? void 0 : productViewAddToCart.addEventListener('click', function (e) {\n  var item = JSON.parse(localStorage.getItem('selectedProduct'));\n  addCart(item);\n});\n\n//# sourceURL=webpack:///./script/product-view.ts?");

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
/******/ 			"productview": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("./script/product-view.ts"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;