(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pl-tools-menu"],{

/***/ "./src/scripts/components/pl-tools-menu/pl-tools-menu.js":
/*!***************************************************************************!*\
  !*** ./src/scripts/components/pl-tools-menu/pl-tools-menu.js + 3 modules ***!
  \***************************************************************************/
/*! no exports provided */
/*! ModuleConcatenation bailout: Cannot concat with /Users/ghows/sites/bolt/node_modules/skatejs/dist/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/scripts/components/base-component.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/scripts/utils/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/scripts/utils/preact-compat.js (<- Module is referenced from these modules with unsupported syntax: /Users/ghows/sites/bolt/node_modules/create-react-context/lib/implementation.js (referenced with cjs require), /Users/ghows/sites/bolt/node_modules/create-react-context/lib/index.js (referenced with cjs require), /Users/ghows/sites/bolt/node_modules/react-animate-height/lib/AnimateHeight.js (referenced with cjs require), /Users/ghows/sites/bolt/node_modules/react-autosuggest/dist/Autosuggest.js (referenced with cjs require), /Users/ghows/sites/bolt/node_modules/react-autowhatever/dist/Autowhatever.js (referenced with cjs require), /Users/ghows/sites/bolt/node_modules/react-autowhatever/dist/Item.js (referenced with cjs require), /Users/ghows/sites/bolt/node_modules/react-autowhatever/dist/ItemsList.js (referenced with cjs require), /Users/ghows/sites/bolt/node_modules/react-autowhatever/dist/SectionTitle.js (referenced with cjs require), /Users/ghows/sites/bolt/node_modules/react-html-parser/lib/elementTypes/StyleElementType.js (referenced with cjs require), /Users/ghows/sites/bolt/node_modules/react-html-parser/lib/elementTypes/TagElementType.js (referenced with cjs require), /Users/ghows/sites/bolt/node_modules/react-popper-tooltip/lib/cjs/index.js (referenced with cjs require)) */
/*! ModuleConcatenation bailout: Cannot concat with /Users/ghows/sites/bolt/node_modules/preact/dist/preact.mjs (<- Module is referenced from these modules with unsupported syntax: /Users/ghows/sites/bolt/node_modules/preact-context/dist/context.min.js (referenced with amd require, cjs require)) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("\n// EXTERNAL MODULE: /Users/ghows/sites/bolt/node_modules/skatejs/dist/es/index.js + 12 modules\nvar es = __webpack_require__(\"../../node_modules/skatejs/dist/es/index.js\");\n\n// EXTERNAL MODULE: /Users/ghows/sites/bolt/node_modules/preact/dist/preact.mjs\nvar preact = __webpack_require__(\"../../node_modules/preact/dist/preact.mjs\");\n\n// EXTERNAL MODULE: ./src/scripts/components/base-component.js\nvar base_component = __webpack_require__(\"./src/scripts/components/base-component.js\");\n\n// EXTERNAL MODULE: ./src/scripts/utils/index.js + 9 modules\nvar utils = __webpack_require__(\"./src/scripts/utils/index.js\");\n\n// EXTERNAL MODULE: ./src/scripts/utils/preact-compat.js\nvar preact_compat = __webpack_require__(\"./src/scripts/utils/preact-compat.js\");\n\n// CONCATENATED MODULE: ./src/icons/new-tab.svg\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nvar _ref =\n/*#__PURE__*/\npreact_compat[\"default\"].createElement(\"path\", {\n  d: \"M14.016 3H21v6.984h-2.016V6.421l-9.797 9.797-1.406-1.406 9.797-9.797h-3.563V2.999zm4.968 15.984V12H21v6.984C21 20.062 20.062 21 18.984 21H5.015c-1.125 0-2.016-.938-2.016-2.016V5.015c0-1.078.891-2.016 2.016-2.016h6.984v2.016H5.015v13.969h13.969z\"\n});\n\nvar new_tab_SvgNewTab = function SvgNewTab(props) {\n  return preact_compat[\"default\"].createElement(\"svg\", _extends({\n    width: 24,\n    height: 24\n  }, props), _ref);\n};\n\n/* harmony default export */ var new_tab = (new_tab_SvgNewTab);\n// CONCATENATED MODULE: ./src/icons/help.svg\nfunction help_extends() { help_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return help_extends.apply(this, arguments); }\n\n\n\nvar help_ref =\n/*#__PURE__*/\npreact_compat[\"default\"].createElement(\"path\", {\n  d: \"M12 6a3.98 3.98 0 0 1 3.984 3.984c0 2.484-3 2.766-3 5.016h-1.969c0-3.234 3-3 3-5.016 0-1.078-.938-1.969-2.016-1.969s-2.016.891-2.016 1.969H8.014A3.98 3.98 0 0 1 11.998 6zm0 14.016c4.406 0 8.016-3.609 8.016-8.016S16.407 3.984 12 3.984 3.984 7.593 3.984 12 7.593 20.016 12 20.016zm0-18c5.531 0 9.984 4.453 9.984 9.984S17.531 21.984 12 21.984 2.016 17.531 2.016 12 6.469 2.016 12 2.016zM11.016 18v-2.016h1.969V18h-1.969z\"\n});\n\nvar help_SvgHelp = function SvgHelp(props) {\n  return preact_compat[\"default\"].createElement(\"svg\", help_extends({\n    width: 24,\n    height: 24\n  }, props), help_ref);\n};\n\n/* harmony default export */ var help = (help_SvgHelp);\n// CONCATENATED MODULE: ./src/icons/settings.svg\nfunction settings_extends() { settings_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return settings_extends.apply(this, arguments); }\n\n\n\nvar settings_ref =\n/*#__PURE__*/\npreact_compat[\"default\"].createElement(\"path\", {\n  d: \"M12 15.516c1.922 0 3.516-1.594 3.516-3.516S13.922 8.484 12 8.484 8.484 10.078 8.484 12s1.594 3.516 3.516 3.516zm7.453-2.532l2.109 1.641c.188.141.234.422.094.656L19.64 18.75c-.141.234-.375.281-.609.188l-2.484-.984c-.516.375-1.078.75-1.688.984l-.375 2.625c-.047.234-.234.422-.469.422H9.984c-.234 0-.422-.188-.469-.422l-.375-2.625a6.145 6.145 0 0 1-1.688-.984l-2.484.984c-.234.094-.469.047-.609-.188l-2.016-3.469c-.141-.234-.094-.516.094-.656l2.109-1.641c-.047-.328-.047-.656-.047-.984s0-.656.047-.984L2.437 9.375c-.188-.141-.234-.422-.094-.656L4.359 5.25c.141-.234.375-.281.609-.188l2.484.984c.516-.375 1.078-.75 1.688-.984l.375-2.625c.047-.234.234-.422.469-.422h4.031c.234 0 .422.188.469.422l.375 2.625a6.145 6.145 0 0 1 1.688.984l2.484-.984c.234-.094.469-.047.609.188l2.016 3.469c.141.234.094.516-.094.656l-2.109 1.641c.047.328.047.656.047.984s0 .656-.047.984z\"\n});\n\nvar settings_SvgSettings = function SvgSettings(props) {\n  return preact_compat[\"default\"].createElement(\"svg\", settings_extends({\n    width: 24,\n    height: 24\n  }, props), settings_ref);\n};\n\n/* harmony default export */ var settings = (settings_SvgSettings);\n// CONCATENATED MODULE: ./src/scripts/components/pl-tools-menu/pl-tools-menu.js\nvar _class, _class2, _temp;\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nvar pl_tools_menu_ToolsMenu = Object(es[\"define\"])(_class = (_temp = _class2 =\n/*#__PURE__*/\nfunction (_BaseComponent) {\n  _inherits(ToolsMenu, _BaseComponent);\n\n  _createClass(ToolsMenu, [{\n    key: \"_stateChanged\",\n    value: function _stateChanged(state) {}\n  }]);\n\n  function ToolsMenu() {\n    var _this;\n\n    _classCallCheck(this, ToolsMenu);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ToolsMenu).call(this));\n    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(ToolsMenu, [{\n    key: \"connecting\",\n    value: function connecting() {\n      var ishControlsHide = window.ishControls.ishControlsHide;\n      this.ishControlsHide = ishControlsHide;\n    }\n  }, {\n    key: \"handleClick\",\n    value: function handleClick(e) {\n      var elem = e.target.closest('.pl-js-acc-handle');\n      var panel = elem.nextSibling; // Activate selected panel\n\n      elem.classList.toggle('pl-is-active');\n      panel.classList.toggle('pl-is-active');\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var patternPath = utils[\"urlHandler\"].getFileName(utils[\"patternName\"]);\n      return Object(preact[\"h\"])(\"div\", {\n        class: \"pl-c-tools\"\n      }, Object(preact[\"h\"])(\"button\", {\n        class: \"pl-c-tools__toggle pl-js-acc-handle\",\n        title: \"Tools\",\n        onClick: this.handleClick\n      }, Object(preact[\"h\"])(settings, {\n        width: 18,\n        height: 18,\n        viewBox: \"0 0 24 24\",\n        className: \"pl-c-tools__toggle-icon\",\n        fill: \"currentColor\"\n      })), Object(preact[\"h\"])(\"ul\", {\n        class: \"pl-c-tools__list pl-js-acc-panel\"\n      }, Object(preact[\"h\"])(\"li\", {\n        class: \"pl-c-tools__item\"\n      }, Object(preact[\"h\"])(\"pl-toggle-info\", null)), Object(preact[\"h\"])(\"li\", {\n        class: \"pl-c-tools__item\"\n      }, Object(preact[\"h\"])(\"pl-toggle-layout\", {\n        text: \"Switch Layout\"\n      })), Object(preact[\"h\"])(\"li\", {\n        class: \"pl-c-tools__item\"\n      }, Object(preact[\"h\"])(\"pl-toggle-theme\", null)), !this.ishControlsHide['views-new'] && Object(preact[\"h\"])(\"li\", {\n        class: \"pl-c-tools__item\"\n      }, Object(preact[\"h\"])(\"a\", {\n        href: patternPath,\n        class: \"pl-c-tools__action pl-js-open-new-window\",\n        target: \"_blank\"\n      }, Object(preact[\"h\"])(\"span\", {\n        class: \"pl-c-tools__action-text\"\n      }, \"Open In New Tab\"), Object(preact[\"h\"])(\"span\", {\n        class: \"pl-c-tools__action-icon\"\n      }, Object(preact[\"h\"])(new_tab, {\n        height: 20,\n        width: 20,\n        viewBox: \"0 0 24 24\",\n        fill: \"currentColor\"\n      })))), !this.ishControlsHide['tools-docs'] && Object(preact[\"h\"])(\"li\", {\n        class: \"pl-c-tools__item\"\n      }, Object(preact[\"h\"])(\"a\", {\n        href: \"http://patternlab.io/docs/\",\n        class: \"pl-c-tools__action\",\n        target: \"_blank\"\n      }, Object(preact[\"h\"])(\"span\", {\n        class: \"pl-c-tools__action-text\"\n      }, \"Pattern Lab Docs\"), Object(preact[\"h\"])(\"span\", {\n        class: \"pl-c-tools__action-icon\"\n      }, Object(preact[\"h\"])(help, {\n        height: 20,\n        width: 20,\n        viewBox: \"0 0 24 24\",\n        fill: \"currentColor\"\n      }))))));\n    }\n  }]);\n\n  return ToolsMenu;\n}(base_component[\"BaseComponent\"]), _defineProperty(_class2, \"is\", 'pl-tools-menu'), _temp)) || _class;\n\n//# sourceURL=webpack:///./src/scripts/components/pl-tools-menu/pl-tools-menu.js_+_3_modules?");

/***/ }),

/***/ "./src/scripts/utils/preact-compat.js":
/*!********************************************!*\
  !*** ./src/scripts/utils/preact-compat.js ***!
  \********************************************/
/*! exports provided: version, DOM, PropTypes, Children, render, createClass, createFactory, createElement, cloneElement, isValidElement, findDOMNode, unmountComponentAtNode, Component, PureComponent, unstable_renderSubtreeIntoContainer, __spread, createContext, default */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: /Users/ghows/sites/bolt/node_modules/create-react-context/lib/implementation.js (referenced with cjs require), /Users/ghows/sites/bolt/node_modules/create-react-context/lib/index.js (referenced with cjs require), /Users/ghows/sites/bolt/node_modules/react-animate-height/lib/AnimateHeight.js (referenced with cjs require), /Users/ghows/sites/bolt/node_modules/react-autosuggest/dist/Autosuggest.js (referenced with cjs require), /Users/ghows/sites/bolt/node_modules/react-autowhatever/dist/Autowhatever.js (referenced with cjs require), /Users/ghows/sites/bolt/node_modules/react-autowhatever/dist/Item.js (referenced with cjs require), /Users/ghows/sites/bolt/node_modules/react-autowhatever/dist/ItemsList.js (referenced with cjs require), /Users/ghows/sites/bolt/node_modules/react-autowhatever/dist/SectionTitle.js (referenced with cjs require), /Users/ghows/sites/bolt/node_modules/react-html-parser/lib/elementTypes/StyleElementType.js (referenced with cjs require), /Users/ghows/sites/bolt/node_modules/react-html-parser/lib/elementTypes/TagElementType.js (referenced with cjs require), /Users/ghows/sites/bolt/node_modules/react-popper-tooltip/lib/cjs/index.js (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact-compat */ \"../../node_modules/preact-compat/dist/preact-compat.es.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"version\", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"version\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DOM\", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"DOM\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PropTypes\", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"PropTypes\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Children\", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"Children\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createClass\", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"createClass\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createFactory\", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"createFactory\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cloneElement\", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"cloneElement\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isValidElement\", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"isValidElement\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findDOMNode\", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"findDOMNode\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unmountComponentAtNode\", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"unmountComponentAtNode\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PureComponent\", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unstable_renderSubtreeIntoContainer\", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"unstable_renderSubtreeIntoContainer\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__spread\", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"__spread\"]; });\n\n/* harmony import */ var preact_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact-context */ \"../../node_modules/preact-context/dist/context.min.js\");\n/* harmony import */ var preact_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(preact_context__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createContext\", function() { return preact_context__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"]; });\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  version: preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"version\"],\n  DOM: preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"DOM\"],\n  PropTypes: preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"PropTypes\"],\n  Children: preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"Children\"],\n  render: preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  createClass: preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"createClass\"],\n  createFactory: preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"createFactory\"],\n  createElement: preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"],\n  cloneElement: preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"cloneElement\"],\n  isValidElement: preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"isValidElement\"],\n  findDOMNode: preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"findDOMNode\"],\n  unmountComponentAtNode: preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"unmountComponentAtNode\"],\n  Component: preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"Component\"],\n  PureComponent: preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"],\n  unstable_renderSubtreeIntoContainer: preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"unstable_renderSubtreeIntoContainer\"],\n  __spread: preact_compat__WEBPACK_IMPORTED_MODULE_0__[\"__spread\"],\n  createContext: preact_context__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"] // <-- And here\n\n});\n\n//# sourceURL=webpack:///./src/scripts/utils/preact-compat.js?");

/***/ })

}]);