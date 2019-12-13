/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_12_hw/lesson_12_hw.js":
/*!******************************************!*\
  !*** ./src/lesson_12_hw/lesson_12_hw.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_12_hw_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_12_hw.scss */ "./src/lesson_12_hw/lesson_12_hw.scss");
/* harmony import */ var _lesson_12_hw_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_12_hw_scss__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var colors = document.querySelectorAll(".colors");
var button = document.querySelector(".toggler");
var colorsArr = ["green", "yellow", "red"];

function toggleOn(button) {
  button.setAttribute("data-toggler-on", true);
  button.textContent = "Off";
}

function toggleOff(button) {
  button.removeAttribute("data-toggler-on");
  button.textContent = "On";
}

function toggleOnColor(colors, color) {
  colors[color].setAttribute("data-is-active-color", true);
}

function toggleOffColor(colors, color) {
  colors[color].removeAttribute("data-is-active-color");
}

console.log(_typeof(button.getAttribute("data-toggler-on")));

button.onclick = function () {
  console.log(_typeof(button.getAttribute("data-toggler-on")));
  button.getAttribute("data-toggler-on") ? toggleOff(button) : toggleOn(button);
  console.log(_typeof(button.getAttribute("data-toggler-on")));
  console.log("new click");

  for (var color = 0; color < colors.length; color++) {
    if (typeof button.getAttribute("data-toggler-on") === "string") {
      colors[color].onclick = function () {
        return console.log("Hello");
      };
    }
  }
}; // const isActive = button.getAttribute("data-toggler-on");
//   console.log(isActive);
//   !isActive ? toggleOn(button) : toggleOff(button);
//   console.log(isActive);
//   for (let color = 0; color < colors.length; color++) {
//     let isActiveColor = button.getAttribute("data-is-active-color");
//     console.log(isActiveColor);
//     if (isActive) {
//       colors[color].onclick = () => {
//         if (!colors[color].getAttribute("data-is-active-color")) {
//           toggleOnColor(colors, color);
//           colors[color].style.backgroundColor = `${colorsArr[color]}`;
//         } else {
//           toggleOffColor(colors, color);
//           colors[color].style.background = "none";
//         }
//       };
//     }
//   }


console.log(typeof button.getAttribute("data-toggler-on") === "string");

/***/ }),

/***/ "./src/lesson_12_hw/lesson_12_hw.scss":
/*!********************************************!*\
  !*** ./src/lesson_12_hw/lesson_12_hw.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 9:
/*!************************************************!*\
  !*** multi ./src/lesson_12_hw/lesson_12_hw.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_12_hw/lesson_12_hw.js */"./src/lesson_12_hw/lesson_12_hw.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_12_hw.js.map