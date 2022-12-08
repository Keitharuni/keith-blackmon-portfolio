module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/skills.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FontAwesomeIcons.js":
/*!****************************************!*\
  !*** ./components/FontAwesomeIcons.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FontAwesomeIcons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyIcon_MyIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyIcon/MyIcon */ "./components/MyIcon/MyIcon.js");
var _jsxFileName = "C:\\Users\\keith\\Documents\\apps\\keith-blackmon-portfolio\\components\\FontAwesomeIcons.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function FontAwesomeIcons({
  icons
}) {
  const {
    0: selectedIndex,
    1: setSelectedIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  return icons.map((icon, iconIndex) => {
    return __jsx(_components_MyIcon_MyIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: iconIndex,
      icon: icon,
      selectedIndex: selectedIndex,
      iconIndex: iconIndex,
      setSelectedIndex: setSelectedIndex,
      size: "2x",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    });
  });
}

/***/ }),

/***/ "./components/MyIcon/MyIcon.js":
/*!*************************************!*\
  !*** ./components/MyIcon/MyIcon.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MyIconStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyIconStyles */ "./components/MyIcon/MyIconStyles.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/colors */ "./styles/colors.js");
var _jsxFileName = "C:\\Users\\keith\\Documents\\apps\\keith-blackmon-portfolio\\components\\MyIcon\\MyIcon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function MyIcon({
  setSelectedIndex,
  selectedIndex,
  iconIndex,
  icon,
  classes
}) {
  const {
    0: color,
    1: setColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (selectedIndex === iconIndex) {
      setColor(true);
    } else {
      setColor(false);
    }
  }, [selectedIndex]);
  const handleClick = () => {
    setSelectedIndex(iconIndex);
  };
  return __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    onClick: handleClick,
    style: {
      color: color ? `${_styles_colors__WEBPACK_IMPORTED_MODULE_4__["secondaryColor"]}` : "gray"
    },
    className: classes.myIcon,
    icon: icon,
    size: "2x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(_MyIconStyles__WEBPACK_IMPORTED_MODULE_3__["default"])(MyIcon));

/***/ }),

/***/ "./components/MyIcon/MyIconStyles.js":
/*!*******************************************!*\
  !*** ./components/MyIcon/MyIconStyles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  myIcon: {
    display: "inline-flex",
    justifyContent: "center",
    margin: "10px",
    cursor: "pointer"
  }
});

/***/ }),

/***/ "./pages/skills.js":
/*!*************************!*\
  !*** ./pages/skills.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FontAwesomeIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FontAwesomeIcons */ "./components/FontAwesomeIcons.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_skillsStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/skillsStyles */ "./styles/skillsStyles.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\keith\\Documents\\apps\\keith-blackmon-portfolio\\pages\\skills.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const icons = [_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHtml5"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCss3Alt"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBootstrap"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faJs"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faReact"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faNodeJs"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faNpm"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGit"]];
function skills({
  classes
}) {
  return __jsx("div", {
    className: classes.skillsContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("h1", {
    style: {
      fontFamily: "Oswald",
      marginBottom: "-10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "SKILLS"), __jsx("h3", {
    style: {
      fontFamily: "Lato",
      fontWeight: "lighter",
      letterSpacing: "-0.2px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "PROGRAMMING LANGUAGES & TOOLS"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(_components_FontAwesomeIcons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icons: icons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(_styles_skillsStyles__WEBPACK_IMPORTED_MODULE_3__["default"])(skills));

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
const mainColor = "#5bd1d7";
const secondaryColor = "#348498";
const thirdColor = "#004d61";
const fourthColor = "#ff502f";

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
  down(size) {
    const sizes = {
      xs: "575.98px",
      sm: "767.98px",
      md: "991.98px",
      lg: "1199.98px"
    };
    return `@media (max-width: ${sizes[size]})`;
  }
});

/***/ }),

/***/ "./styles/skillsStyles.js":
/*!********************************!*\
  !*** ./styles/skillsStyles.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sizes */ "./styles/sizes.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  skillsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    marginRight: "10px",
    marginLeft: "220px",
    height: "100%",
    [_sizes__WEBPACK_IMPORTED_MODULE_0__["default"].down("xs")]: {
      marginLeft: "10px"
    }
  }
});

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb250QXdlc29tZUljb25zLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXlJY29uL015SWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015SWNvbi9NeUljb25TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2tpbGxzLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3NpemVzLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9za2lsbHNTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkZvbnRBd2Vzb21lSWNvbnMiLCJpY29ucyIsInNlbGVjdGVkSW5kZXgiLCJzZXRTZWxlY3RlZEluZGV4IiwidXNlU3RhdGUiLCJtYXAiLCJpY29uIiwiaWNvbkluZGV4IiwiTXlJY29uIiwiY2xhc3NlcyIsImNvbG9yIiwic2V0Q29sb3IiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDbGljayIsInNlY29uZGFyeUNvbG9yIiwibXlJY29uIiwid2l0aFN0eWxlcyIsInN0eWxlcyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbiIsImN1cnNvciIsImZhSHRtbDUiLCJmYUNzczNBbHQiLCJmYUJvb3RzdHJhcCIsImZhSnMiLCJmYVJlYWN0IiwiZmFOb2RlSnMiLCJmYU5wbSIsImZhR2l0Iiwic2tpbGxzIiwic2tpbGxzQ29udGFpbmVyIiwiZm9udEZhbWlseSIsIm1hcmdpbkJvdHRvbSIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwibWFpbkNvbG9yIiwidGhpcmRDb2xvciIsImZvdXJ0aENvbG9yIiwiZG93biIsInNpemUiLCJzaXplcyIsInhzIiwic20iLCJtZCIsImxnIiwiZmxleERpcmVjdGlvbiIsImFsaWduQ29udGVudCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RndDO0FBQ1M7QUFFbEMsU0FBU0EsZ0JBQWdCLENBQUM7RUFBRUM7QUFBTSxDQUFDLEVBQUU7RUFDbEQsTUFBTTtJQUFBLEdBQUNDLGFBQWE7SUFBQSxHQUFFQztFQUFnQixJQUFJQyxzREFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3RELE9BQU9ILEtBQUssQ0FBQ0ksR0FBRyxDQUFDLENBQUNDLElBQUksRUFBRUMsU0FBUyxLQUFLO0lBQ3BDLE9BQ0UsTUFBQyxpRUFBTTtNQUNMLEdBQUcsRUFBRUEsU0FBVTtNQUNmLElBQUksRUFBRUQsSUFBSztNQUNYLGFBQWEsRUFBRUosYUFBYztNQUM3QixTQUFTLEVBQUVLLFNBQVU7TUFDckIsZ0JBQWdCLEVBQUVKLGdCQUFpQjtNQUNuQyxJQUFJLEVBQUMsSUFBSTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQ1Q7RUFFTixDQUFDLENBQUM7QUFDSixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCbUQ7QUFDYztBQUNoQjtBQUNiO0FBQzRCO0FBRWhFLFNBQVNLLE1BQU0sQ0FBQztFQUFFTCxnQkFBZ0I7RUFBRUQsYUFBYTtFQUFFSyxTQUFTO0VBQUVELElBQUk7RUFBRUc7QUFBUSxDQUFDLEVBQUU7RUFDN0UsTUFBTTtJQUFBLEdBQUNDLEtBQUs7SUFBQSxHQUFFQztFQUFRLElBQUlQLHNEQUFRLENBQUMsS0FBSyxDQUFDO0VBRXpDUSx1REFBUyxDQUFDLE1BQU07SUFDZCxJQUFJVixhQUFhLEtBQUtLLFNBQVMsRUFBRTtNQUMvQkksUUFBUSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDLE1BQU07TUFDTEEsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUNqQjtFQUNGLENBQUMsRUFBRSxDQUFDVCxhQUFhLENBQUMsQ0FBQztFQUVuQixNQUFNVyxXQUFXLEdBQUcsTUFBTTtJQUN4QlYsZ0JBQWdCLENBQUNJLFNBQVMsQ0FBQztFQUM3QixDQUFDO0VBRUQsT0FDRSxNQUFDLDhFQUFlO0lBQ2QsT0FBTyxFQUFFTSxXQUFZO0lBQ3JCLEtBQUssRUFBRTtNQUFFSCxLQUFLLEVBQUVBLEtBQUssR0FBSSxHQUFFSSw2REFBZSxFQUFDLEdBQUc7SUFBTyxDQUFFO0lBQ3ZELFNBQVMsRUFBRUwsT0FBTyxDQUFDTSxNQUFPO0lBQzFCLElBQUksRUFBRVQsSUFBSztJQUNYLElBQUksRUFBQyxJQUFJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFDVDtBQUVOO0FBRWVVLHFJQUFVLENBQUNDLHFEQUFNLENBQUMsQ0FBQ1QsTUFBTSxDQUFDLEU7Ozs7Ozs7Ozs7OztBQ2hDekM7QUFBZTtFQUNiTyxNQUFNLEVBQUU7SUFDTkcsT0FBTyxFQUFFLGFBQWE7SUFDdEJDLGNBQWMsRUFBRSxRQUFRO0lBQ3hCQyxNQUFNLEVBQUUsTUFBTTtJQUNkQyxNQUFNLEVBQUU7RUFDVjtBQUNGLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQeUI7QUFDb0M7QUFVbEI7QUFDQTtBQUNLO0FBRWpELE1BQU1wQixLQUFLLEdBQUcsQ0FDWnFCLDBFQUFPLEVBQ1BDLDRFQUFTLEVBQ1RDLDhFQUFXLEVBQ1hDLHVFQUFJLEVBQ0pDLDBFQUFPLEVBQ1BDLDJFQUFRLEVBQ1JDLHdFQUFLLEVBQ0xDLHdFQUFLLENBQ047QUFFRCxTQUFTQyxNQUFNLENBQUM7RUFBRXJCO0FBQVEsQ0FBQyxFQUFFO0VBQzNCLE9BQ0U7SUFBSyxTQUFTLEVBQUVBLE9BQU8sQ0FBQ3NCLGVBQWdCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDdEM7SUFDRSxLQUFLLEVBQUU7TUFDTEMsVUFBVSxFQUFFLFFBQVE7TUFDcEJDLFlBQVksRUFBRTtJQUNoQixDQUFFO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsWUFFQyxFQUNMO0lBQ0UsS0FBSyxFQUFFO01BQ0xELFVBQVUsRUFBRSxNQUFNO01BQ2xCRSxVQUFVLEVBQUUsU0FBUztNQUNyQkMsYUFBYSxFQUFFO0lBQ2pCLENBQUU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxtQ0FFQyxFQUVMO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLG9FQUFnQjtJQUFDLEtBQUssRUFBRWxDLEtBQU07SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLENBQzlCLENBQ0Y7QUFFVjtBQUVlZSxxSUFBVSxDQUFDQyw0REFBTSxDQUFDLENBQUNhLE1BQU0sQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUNwRHpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNTSxTQUFTLEdBQUcsU0FBUztBQUMzQixNQUFNdEIsY0FBYyxHQUFHLFNBQVM7QUFDaEMsTUFBTXVCLFVBQVUsR0FBRyxTQUFTO0FBQzVCLE1BQU1DLFdBQVcsR0FBRyxTQUFTLEM7Ozs7Ozs7Ozs7OztBQ0hwQztBQUFlO0VBQ2JDLElBQUksQ0FBQ0MsSUFBSSxFQUFFO0lBQ1QsTUFBTUMsS0FBSyxHQUFHO01BQ1pDLEVBQUUsRUFBRSxVQUFVO01BQ2RDLEVBQUUsRUFBRSxVQUFVO01BQ2RDLEVBQUUsRUFBRSxVQUFVO01BQ2RDLEVBQUUsRUFBRTtJQUNOLENBQUM7SUFDRCxPQUFRLHNCQUFxQkosS0FBSyxDQUFDRCxJQUFJLENBQUUsR0FBRTtFQUM3QztBQUNGLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDVkQ7QUFBQTtBQUE0QjtBQUViO0VBQ2JULGVBQWUsRUFBRTtJQUNmYixPQUFPLEVBQUUsTUFBTTtJQUNmNEIsYUFBYSxFQUFFLFFBQVE7SUFDdkIzQixjQUFjLEVBQUUsUUFBUTtJQUN4QjRCLFlBQVksRUFBRSxRQUFRO0lBQ3RCQyxXQUFXLEVBQUUsTUFBTTtJQUNuQkMsVUFBVSxFQUFFLE9BQU87SUFDbkJDLE1BQU0sRUFBRSxNQUFNO0lBQ2QsQ0FBQ1QsOENBQUssQ0FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO01BQ2xCVSxVQUFVLEVBQUU7SUFDZDtFQUNGO0FBQ0YsQ0FBQyxFOzs7Ozs7Ozs7OztBQ2ZELCtEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL3NraWxscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvc2tpbGxzLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNeUljb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlJY29uL015SWNvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9udEF3ZXNvbWVJY29ucyh7IGljb25zIH0pIHtcclxuICBjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgcmV0dXJuIGljb25zLm1hcCgoaWNvbiwgaWNvbkluZGV4KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TXlJY29uXHJcbiAgICAgICAga2V5PXtpY29uSW5kZXh9XHJcbiAgICAgICAgaWNvbj17aWNvbn1cclxuICAgICAgICBzZWxlY3RlZEluZGV4PXtzZWxlY3RlZEluZGV4fVxyXG4gICAgICAgIGljb25JbmRleD17aWNvbkluZGV4fVxyXG4gICAgICAgIHNldFNlbGVjdGVkSW5kZXg9e3NldFNlbGVjdGVkSW5kZXh9XHJcbiAgICAgICAgc2l6ZT0nMngnXHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTXlJY29uU3R5bGVzXCI7XHJcbmltcG9ydCB7IG1haW5Db2xvciwgc2Vjb25kYXJ5Q29sb3IgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL2NvbG9yc1wiO1xyXG5cclxuZnVuY3Rpb24gTXlJY29uKHsgc2V0U2VsZWN0ZWRJbmRleCwgc2VsZWN0ZWRJbmRleCwgaWNvbkluZGV4LCBpY29uLCBjbGFzc2VzIH0pIHtcclxuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzZWxlY3RlZEluZGV4ID09PSBpY29uSW5kZXgpIHtcclxuICAgICAgc2V0Q29sb3IodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDb2xvcihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW3NlbGVjdGVkSW5kZXhdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZEluZGV4KGljb25JbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgIHN0eWxlPXt7IGNvbG9yOiBjb2xvciA/IGAke3NlY29uZGFyeUNvbG9yfWAgOiBcImdyYXlcIiB9fVxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMubXlJY29ufVxyXG4gICAgICBpY29uPXtpY29ufVxyXG4gICAgICBzaXplPScyeCdcclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKE15SWNvbik7XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBteUljb246IHtcclxuICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgbWFyZ2luOiBcIjEwcHhcIixcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCJcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvbnRBd2Vzb21lSWNvbnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9udEF3ZXNvbWVJY29uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGZhSHRtbDUsXHJcbiAgZmFHaXQsXHJcbiAgZmFSZWFjdCxcclxuICBmYU5vZGVKcyxcclxuICBmYUpzLFxyXG4gIGZhTnBtLFxyXG4gIGZhQ3NzM0FsdCxcclxuICBmYUJvb3RzdHJhcFxyXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9za2lsbHNTdHlsZXNcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XHJcblxyXG5jb25zdCBpY29ucyA9IFtcclxuICBmYUh0bWw1LFxyXG4gIGZhQ3NzM0FsdCxcclxuICBmYUJvb3RzdHJhcCxcclxuICBmYUpzLFxyXG4gIGZhUmVhY3QsXHJcbiAgZmFOb2RlSnMsXHJcbiAgZmFOcG0sXHJcbiAgZmFHaXRcclxuXTtcclxuXHJcbmZ1bmN0aW9uIHNraWxscyh7IGNsYXNzZXMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5za2lsbHNDb250YWluZXJ9PlxyXG4gICAgICA8aDFcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZm9udEZhbWlseTogXCJPc3dhbGRcIixcclxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCItMTBweFwiXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgU0tJTExTXHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxoM1xyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBmb250RmFtaWx5OiBcIkxhdG9cIixcclxuICAgICAgICAgIGZvbnRXZWlnaHQ6IFwibGlnaHRlclwiLFxyXG4gICAgICAgICAgbGV0dGVyU3BhY2luZzogXCItMC4ycHhcIlxyXG4gICAgICAgIH19PlxyXG4gICAgICAgIFBST0dSQU1NSU5HIExBTkdVQUdFUyAmIFRPT0xTXHJcbiAgICAgIDwvaDM+XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxGb250QXdlc29tZUljb25zIGljb25zPXtpY29uc30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoc2tpbGxzKTtcclxuIiwiZXhwb3J0IGNvbnN0IG1haW5Db2xvciA9IFwiIzViZDFkN1wiO1xyXG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5Q29sb3IgPSBcIiMzNDg0OThcIjtcclxuZXhwb3J0IGNvbnN0IHRoaXJkQ29sb3IgPSBcIiMwMDRkNjFcIjtcclxuZXhwb3J0IGNvbnN0IGZvdXJ0aENvbG9yID0gXCIjZmY1MDJmXCI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBkb3duKHNpemUpIHtcclxuICAgIGNvbnN0IHNpemVzID0ge1xyXG4gICAgICB4czogXCI1NzUuOThweFwiLFxyXG4gICAgICBzbTogXCI3NjcuOThweFwiLFxyXG4gICAgICBtZDogXCI5OTEuOThweFwiLFxyXG4gICAgICBsZzogXCIxMTk5Ljk4cHhcIlxyXG4gICAgfTtcclxuICAgIHJldHVybiBgQG1lZGlhIChtYXgtd2lkdGg6ICR7c2l6ZXNbc2l6ZV19KWA7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgc2l6ZXMgZnJvbSBcIi4vc2l6ZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBza2lsbHNDb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgYWxpZ25Db250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLFxyXG4gICAgbWFyZ2luTGVmdDogXCIyMjBweFwiLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIFtzaXplcy5kb3duKFwieHNcIildOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IFwiMTBweFwiXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=