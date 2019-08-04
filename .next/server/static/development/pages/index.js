module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_aboutStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/aboutStyles */ "./styles/aboutStyles.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
var _jsxFileName = "C:\\Users\\WEB\\Desktop\\WEB\\Mr.STEELE\\Portfolio\\pages\\index.js";






var iconStyles = {
  display: "flex",
  backgroundColor: "black",
  padding: "10px",
  borderRadius: "50%",
  color: "white",
  width: "20px",
  height: "20px"
};
var linkedIn = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  target: "_blank",
  href: "https://www.linkedin.com/in/blackmonkeith/",
  style: {
    cursor: "pointer"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
  style: iconStyles,
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLinkedinIn"],
  size: "2x",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}));
var gitHub = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  target: "_blank",
  href: "https://github.com/Keitharuni",
  style: {
    cursor: "pointer"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
  style: iconStyles,
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGithub"],
  size: "2x",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}));

var Index = function Index(_ref) {
  var classes = _ref.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.about,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: classes.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Keith ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Blackmon")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classes.contact,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "(805) 910-6347 \u2022", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      color: "".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_5__["secondaryColor"])
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, " ", "BLACKMONKEITH@GMAIL.COM")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: "Lato"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "I am a self taught Front-end Web Developer with a love for JavaScript and React. Being a self taught Front-end Web Developer I am very motivated and excited to take my skills and apply it towards meaningful projects."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginRight: "10px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, linkedIn), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, gitHub)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(_styles_aboutStyles__WEBPACK_IMPORTED_MODULE_3__["default"])(Index));

/***/ }),

/***/ "./styles/aboutStyles.js":
/*!*******************************!*\
  !*** ./styles/aboutStyles.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sizes */ "./styles/sizes.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  about: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    marginRight: "10px",
    marginLeft: "220px",
    height: "100%"
  }, _sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down("xs"), {
    marginLeft: "10px"
  }),
  name: {
    marginBottom: "-21px",
    fontFamily: "Notable",
    fontSize: "3rem",
    letterSpacing: "3px"
  },
  span: {
    color: "".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_2__["secondaryColor"]),
    textShadow: "0.5px 0.5px 0.5px #000"
  },
  contact: {
    color: "gray",
    textShadow: "0.5px 0.5px 0.5px #000",
    fontFamily: "Exo"
  }
});

/***/ }),

/***/ "./styles/colors.js":
/*!**************************!*\
  !*** ./styles/colors.js ***!
  \**************************/
/*! exports provided: mainColor, secondaryColor, thirdColor, fourthColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainColor", function() { return mainColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondaryColor", function() { return secondaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thirdColor", function() { return thirdColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fourthColor", function() { return fourthColor; });
var mainColor = "#5bd1d7";
var secondaryColor = "#348498";
var thirdColor = "#004d61";
var fourthColor = "#ff502f";

/***/ }),

/***/ "./styles/sizes.js":
/*!*************************!*\
  !*** ./styles/sizes.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  down: function down(size) {
    var sizes = {
      xs: "575.98px",
      sm: "767.98px",
      md: "991.98px",
      lg: "1199.98px"
    };
    return "@media (max-width: ".concat(sizes[size], ")");
  }
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\WEB\Desktop\WEB\Mr.STEELE\Portfolio\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map