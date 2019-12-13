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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_11_hw/lesson_11_hw.js":
/*!******************************************!*\
  !*** ./src/lesson_11_hw/lesson_11_hw.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_11_hw_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_11_hw.scss */ "./src/lesson_11_hw/lesson_11_hw.scss");
/* harmony import */ var _lesson_11_hw_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_11_hw_scss__WEBPACK_IMPORTED_MODULE_0__);
//альтернатива for of
//перезаписать обьект
//Task 1


function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
} //Task 2


var user = {};
user.name = "vasya"; //user.surname = "petrov";

user.name = "serg";
delete user.name; //Task 3

function isEmpty(obj) {
  for (var key in obj) {
    if (key) {
      return false;
    }
  }

  return true;
} //Task 4


var salaries = {
  John: 400,
  Jack: 20000,
  test: "asdasda"
};

function calc(salaries) {
  var sum = 0;

  for (var salary in salaries) {
    if (typeof salaries[salary] === "number") {
      sum += salaries[salary];
    }
  }

  return sum;
} //Task 5


function getMaxSalary(salaries) {
  var maxSalary = 0;

  for (var salary in salaries) {
    if (salaries[salary] > maxSalary) {
      maxSalary += salaries[salary];
    }

    return maxSalary;
  }
} //Task 6


function multiplyNumeric(salaries) {
  for (var salary in salaries) {
    if (!isNaN(salaries[salary])) {
      salaries[salary] *= 2;
    }
  }

  return salaries;
} //Task 7


var arr = [1, 2, 3, 4, 5];

function getRandomFromArr(arr) {
  var random = randomInteger(arr[0], arr[arr.length - 1]);
  console.log(random);
} //Task 8


function gerArr() {
  while (true) {
    var _arr = [];
    var number = +prompt("Input namber");
    console.log(number);

    if (number === 0 || number === false || number === "" || isNaN(number)) {
      break;
    }

    _arr.push(number);
  }
} //Task 9


function find(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
} //Task 10


function filterRange(arr, a, b) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > a && arr[i] < b) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(filterRange(arr, 1, 5));

/***/ }),

/***/ "./src/lesson_11_hw/lesson_11_hw.scss":
/*!********************************************!*\
  !*** ./src/lesson_11_hw/lesson_11_hw.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 7:
/*!************************************************!*\
  !*** multi ./src/lesson_11_hw/lesson_11_hw.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_11_hw/lesson_11_hw.js */"./src/lesson_11_hw/lesson_11_hw.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_11_hw.js.map