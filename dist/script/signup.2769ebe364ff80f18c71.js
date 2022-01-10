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

/***/ "./script/signup.ts":
/*!**************************!*\
  !*** ./script/signup.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"users\": function() { return /* binding */ users; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar account = JSON.parse(localStorage.getItem('users'));\nvar usersMain = document.querySelector('.users-main');\nvar signinLogin = document.querySelector('#signin-input-email');\nvar signinPassword = document.querySelector('#signin-input-password');\nvar signinBtn = document.querySelector('.signin-btn');\nvar signupLogin = document.querySelector('#signup-input-email');\nvar signupPassword = document.querySelector('#signup-input-password');\nvar signupConfirmPassword = document.querySelector('#signup-input-confirm-password');\nvar signupBtn = document.querySelector('.register-btn');\nvar adminNewUserLogin = document.querySelector('#user-login-in');\nvar adminNewUserPassword = document.querySelector('#user-password-in');\nvar adminNewUserConfirmPassword = document.querySelector('#user-confirm-password-in');\nvar adminAddNewUser = document.querySelector('.add-new-user');\nvar modalUserSaveBtn = document.querySelector('.save-user-edit');\nvar modalUserConfirmPassword = document.querySelector('#modal-user-edit-confirm-password');\nvar modalUserPassword = document.querySelector('#modal-user-edit-password');\n\nvar User = /*#__PURE__*/function () {\n  function User() {\n    _classCallCheck(this, User);\n  }\n\n  _createClass(User, [{\n    key: \"userChangeModal\",\n    value: // SIGN IN\n    // MODAL\n    function userChangeModal(item, e) {\n      this.selectedUser = item;\n      this.selectedItem = e;\n    }\n  }, {\n    key: \"setUserTable\",\n    value: function setUserTable() {\n      var _this = this;\n\n      account.forEach(function (element) {\n        _this.createUserTable(element);\n      });\n    }\n  }, {\n    key: \"createUserTable\",\n    value: function createUserTable(user) {\n      var _this2 = this;\n\n      var TR = document.createElement('tr');\n      TR.style.borderTop = '1px solid #ccc';\n      var tdIMG = document.createElement('td');\n      var imgBlock = document.createElement('div');\n      imgBlock.setAttribute('class', 'd-flex px-2 py-1 justify-content-center');\n      var imgInnerBlock = document.createElement('div');\n      imgInnerBlock.setAttribute('class', 'd-flex justify-content-center align-items-center');\n      imgInnerBlock.setAttribute('style', 'width: 30px; height: 30px; border-radius: 50%; color: #fff; background-color: #ddd; box-shadow: 0 0 0 3px #fff, 0 0 0 4px #aaa;');\n      imgInnerBlock.innerHTML = \"<i class=\\\"fas fa-user\\\"></i>\";\n      imgBlock.appendChild(imgInnerBlock);\n      tdIMG.appendChild(imgBlock);\n      var tdLogin = document.createElement('td');\n      var loginBlock = document.createElement('div');\n      loginBlock.setAttribute('class', 'd-flex px-2 py-1');\n      var loginInnerBlock = document.createElement('div');\n      loginInnerBlock.setAttribute('class', 'd-flex flex-column justify-content-center');\n      loginInnerBlock.innerHTML = \"<input type=\\\"text\\\" name=\\\"user-login\\\" id=\\\"user-login\\\" value=\\\"\".concat(user.nickname, \"\\\" style=\\\"border: none; outline: none; background-color: transparent;\\\" disabled>\");\n      loginBlock.appendChild(loginInnerBlock);\n      tdLogin.appendChild(loginBlock);\n      var tdPassword = document.createElement('td');\n      var passwordBlock = document.createElement('div');\n      passwordBlock.setAttribute('class', 'd-flex px-2 py-1');\n      var passwordInnerBlock = document.createElement('div');\n      passwordInnerBlock.setAttribute('class', 'd-flex flex-column justify-content-center');\n      passwordInnerBlock.innerHTML = \"<input type=\\\"text\\\" name=\\\"password-login\\\" id=\\\"password-login\\\" value=\\\"\".concat(user.password, \"\\\" style=\\\" border: none; outline: none; background-color: transparent;\\\" disabled>\");\n      passwordBlock.appendChild(passwordInnerBlock);\n      tdPassword.appendChild(passwordBlock);\n      var tdEdit = document.createElement('td');\n      tdEdit.setAttribute('class', 'align-middle text-center text-sm');\n      var editBtn = document.createElement('button');\n      editBtn.setAttribute('class', 'btn btn-primary');\n      editBtn.setAttribute('type', 'button');\n      editBtn.setAttribute('style', 'padding: 5px 25px; font-size: 14px;');\n      editBtn.setAttribute('data-toggle', \"modal\");\n      editBtn.setAttribute('data-target', '#exampleModal');\n      editBtn.innerHTML = \"Edit\";\n      tdEdit.appendChild(editBtn); //Change MODAL\n\n      editBtn.addEventListener('click', function (e) {\n        _this2.userChangeModal(user, e);\n      });\n      var tdDelete = document.createElement('td');\n      tdDelete.setAttribute('class', 'align-middle');\n      var deleteBtn = document.createElement('button');\n      deleteBtn.setAttribute('class', 'btn btn-danger');\n      deleteBtn.setAttribute('type', 'button');\n      deleteBtn.setAttribute('style', 'padding: 5px 25px; font-size: 14px;');\n      deleteBtn.innerHTML = \"Delete\";\n      tdDelete.appendChild(deleteBtn);\n      deleteBtn.addEventListener('click', function (e) {\n        _this2.userDelete(user, e);\n      });\n      TR.appendChild(tdIMG);\n      TR.appendChild(tdLogin);\n      TR.appendChild(tdPassword);\n      TR.appendChild(tdEdit);\n      TR.appendChild(tdDelete);\n      usersMain === null || usersMain === void 0 ? void 0 : usersMain.appendChild(TR);\n    }\n  }, {\n    key: \"checkUser\",\n    value: function checkUser(nickname, password) {\n      var _this3 = this;\n\n      if (account.every(function (e) {\n        return e.nickname !== nickname && e.password !== password;\n      })) {\n        alert('Invalid login or password!!! Please try again.');\n      }\n\n      account.forEach(function (element) {\n        if (element.nickname === nickname && element.password === password) {\n          _this3.activeUser = {\n            nickname: nickname,\n            password: password\n          };\n          localStorage.setItem('active-user', JSON.stringify(_this3.activeUser));\n          alert(_this3.activeUser.nickname + \": \" + _this3.activeUser.password);\n          window.open(\"./index.html\", \"_self\");\n        }\n      });\n    }\n  }, {\n    key: \"addUser\",\n    value: function addUser(nickname, password) {\n      var newUser = {\n        nickname: nickname,\n        password: password\n      };\n      account.push(newUser);\n      localStorage.setItem('users', JSON.stringify(account));\n      this.createUserTable(newUser);\n    }\n  }, {\n    key: \"userEditInfo\",\n    value: function userEditInfo(newPassword, newConfirmPassword) {\n      this.selectedItem.target.parentElement.parentElement.querySelector('#password-login').value = newPassword;\n      account[account.indexOf(this.selectedUser)].password = newPassword;\n      localStorage.setItem('users', JSON.stringify(account));\n      alert('The change was successful!!!');\n    }\n  }, {\n    key: \"userDelete\",\n    value: function userDelete(item, e) {\n      e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);\n      account.splice(account.indexOf(item), 1);\n      localStorage.setItem('users', JSON.stringify(account));\n      alert('The delete was successfully!!!');\n    }\n  }]);\n\n  return User;\n}();\n\nvar users = new User();\nusers.setUserTable();\nsigninBtn === null || signinBtn === void 0 ? void 0 : signinBtn.addEventListener('click', function (e) {\n  if (signinLogin.value != \"\" && signinPassword.value != \"\") {\n    users.checkUser(signinLogin.value, signinPassword.value);\n  }\n});\nsignupBtn === null || signupBtn === void 0 ? void 0 : signupBtn.addEventListener('click', function (e) {\n  if (signupLogin.value != \"\" && signupPassword.value != \"\" && signupConfirmPassword.value != \"\" && signupPassword.value == signupConfirmPassword.value) {\n    users.addUser(signupLogin.value, signupPassword.value);\n    alert('Account added!!!');\n  } else {\n    alert('Invalid login or password!!! Please try again.');\n  }\n\n  ;\n});\nadminAddNewUser === null || adminAddNewUser === void 0 ? void 0 : adminAddNewUser.addEventListener('click', function (e) {\n  if (adminNewUserLogin.value != \"\" && adminNewUserPassword.value != \"\" && adminNewUserConfirmPassword.value != \"\" && adminNewUserPassword.value == adminNewUserConfirmPassword.value) {\n    users.addUser(adminNewUserLogin.value, adminNewUserPassword.value);\n    alert('Account added!!!');\n  } else {\n    alert('Invalid login or password!!! Please try again.');\n  }\n\n  ;\n});\nmodalUserSaveBtn === null || modalUserSaveBtn === void 0 ? void 0 : modalUserSaveBtn.addEventListener('click', function (e) {\n  if (modalUserConfirmPassword.value != \"\" && modalUserPassword.value != \"\" && modalUserPassword.value == modalUserConfirmPassword.value) {\n    users.userEditInfo(modalUserPassword.value, modalUserConfirmPassword.value);\n  }\n});\n\n//# sourceURL=webpack:///./script/signup.ts?");

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
/******/ 			"signup": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("./script/signup.ts"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;