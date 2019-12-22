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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/accardion/accardion.js":
/*!*******************************************!*\
  !*** ./src/common/accardion/accardion.js ***!
  \*******************************************/
/*! exports provided: createAccardion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAccardion", function() { return createAccardion; });
/* harmony import */ var _accardion_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accardion.scss */ "./src/common/accardion/accardion.scss");
/* harmony import */ var _accardion_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_accardion_scss__WEBPACK_IMPORTED_MODULE_0__);

var sectionsContent = [{
  tittle: "Section 1",
  text: "Text 1"
}, {
  tittle: "Section 2",
  text: "Text 2"
}, {
  tittle: "Section 3",
  text: "Text 3"
}];

function renderSection(item) {
  var section = document.createElement("div");
  section.classList.add("section");
  var sectionTittle = document.createElement("div");
  sectionTittle.textContent = item.tittle;
  sectionTittle.classList.add("sectionTittle");
  var sectionText = document.createElement("div");
  sectionText.classList.add("sectionText");
  sectionText.textContent = item.text;
  section.append(sectionTittle);
  section.append(sectionText);
  return section;
}

var renderSections = function renderSections(mountPoint) {
  var sections = [];
  sectionsContent.forEach(function (item) {
    var section = renderSection(item);
    sections.push(section);
    mountPoint.append(section);
  });
  return sections;
};

var createAccardion = function createAccardion(mountPoint) {
  renderSections(mountPoint);

  function sectionHandler() {
    var sections = document.querySelectorAll(".section");
    sections.forEach(function (item) {
      function showSectionText() {
        item.lastElementChild.classList.toggle("active");
      }

      item.firstElementChild.addEventListener("click", showSectionText);
    });
  }

  sectionHandler();
};



/***/ }),

/***/ "./src/common/accardion/accardion.scss":
/*!*********************************************!*\
  !*** ./src/common/accardion/accardion.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/accardion/index.js":
/*!***************************************!*\
  !*** ./src/common/accardion/index.js ***!
  \***************************************/
/*! exports provided: createAccardion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accardion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accardion */ "./src/common/accardion/accardion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAccardion", function() { return _accardion__WEBPACK_IMPORTED_MODULE_0__["createAccardion"]; });



/***/ }),

/***/ "./src/lesson14_hw/lesson14_hw.js":
/*!****************************************!*\
  !*** ./src/lesson14_hw/lesson14_hw.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson14_hw_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson14_hw.scss */ "./src/lesson14_hw/lesson14_hw.scss");
/* harmony import */ var _lesson14_hw_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson14_hw_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_accardion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/accardion */ "./src/common/accardion/index.js");


var container = document.createElement("div");
container.classList.add("container");
document.body.append(container);
Object(_common_accardion__WEBPACK_IMPORTED_MODULE_1__["createAccardion"])(container);

/***/ }),

/***/ "./src/lesson14_hw/lesson14_hw.scss":
/*!******************************************!*\
  !*** ./src/lesson14_hw/lesson14_hw.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 13:
/*!**********************************************!*\
  !*** multi ./src/lesson14_hw/lesson14_hw.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson14_hw/lesson14_hw.js */"./src/lesson14_hw/lesson14_hw.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson14_hw.js.map