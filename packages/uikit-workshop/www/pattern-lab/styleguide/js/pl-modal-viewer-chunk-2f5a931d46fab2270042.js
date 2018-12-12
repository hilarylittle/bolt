(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pl-modal-viewer"],{

/***/ "./src/scripts/actions/app.js":
/*!************************************!*\
  !*** ./src/scripts/actions/app.js ***!
  \************************************/
/*! exports provided: UPDATE_THEME_MODE, UPDATE_LAYOUT_MODE, UPDATE_DRAWER_ANIMATION_STATE, UPDATE_DRAWER_STATE, UPDATE_DRAWER_HEIGHT, IS_VIEWALL_PAGE, updateLayoutMode, updateThemeMode, updateDrawerState, updateDrawerAnimationState, updateDrawerHeight, isViewallPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_THEME_MODE\", function() { return UPDATE_THEME_MODE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_LAYOUT_MODE\", function() { return UPDATE_LAYOUT_MODE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_DRAWER_ANIMATION_STATE\", function() { return UPDATE_DRAWER_ANIMATION_STATE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_DRAWER_STATE\", function() { return UPDATE_DRAWER_STATE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_DRAWER_HEIGHT\", function() { return UPDATE_DRAWER_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IS_VIEWALL_PAGE\", function() { return IS_VIEWALL_PAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateLayoutMode\", function() { return updateLayoutMode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateThemeMode\", function() { return updateThemeMode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateDrawerState\", function() { return updateDrawerState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateDrawerAnimationState\", function() { return updateDrawerAnimationState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateDrawerHeight\", function() { return updateDrawerHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isViewallPage\", function() { return isViewallPage; });\nvar UPDATE_THEME_MODE = 'UPDATE_THEME_MODE';\nvar UPDATE_LAYOUT_MODE = 'UPDATE_LAYOUT_MODE';\nvar UPDATE_DRAWER_ANIMATION_STATE = 'UPDATE_DRAWER_ANIMATION_STATE';\nvar UPDATE_DRAWER_STATE = 'UPDATE_DRAWER_STATE';\nvar UPDATE_DRAWER_HEIGHT = 'UPDATE_DRAWER_HEIGHT';\nvar IS_VIEWALL_PAGE = 'IS_VIEWALL_PAGE';\nvar updateLayoutMode = function updateLayoutMode(layoutMode) {\n  return function (dispatch, getState) {\n    if (getState().app.layoutMode !== layoutMode) {\n      dispatch({\n        type: UPDATE_LAYOUT_MODE,\n        layoutMode: layoutMode\n      });\n    }\n  };\n};\nvar updateThemeMode = function updateThemeMode(themeMode) {\n  return function (dispatch, getState) {\n    if (getState().app.themeMode !== themeMode) {\n      dispatch({\n        type: UPDATE_THEME_MODE,\n        themeMode: themeMode\n      });\n    }\n  };\n};\nvar updateDrawerState = function updateDrawerState(opened) {\n  return function (dispatch, getState) {\n    if (getState().app.drawerOpened !== opened) {\n      dispatch({\n        type: UPDATE_DRAWER_STATE,\n        opened: opened\n      });\n    }\n  };\n};\nvar updateDrawerAnimationState = function updateDrawerAnimationState(drawerIsAnimating) {\n  return function (dispatch, getState) {\n    if (getState().app.drawerIsAnimating !== drawerIsAnimating) {\n      dispatch({\n        type: UPDATE_DRAWER_ANIMATION_STATE,\n        drawerIsAnimating: drawerIsAnimating\n      });\n    }\n  };\n};\nvar updateDrawerHeight = function updateDrawerHeight(height) {\n  return function (dispatch, getState) {\n    if (getState().app.drawerHeight !== height) {\n      dispatch({\n        type: UPDATE_DRAWER_HEIGHT,\n        height: height\n      });\n    }\n  };\n};\nvar isViewallPage = function isViewallPage(isViewall) {\n  return function (dispatch, getState) {\n    if (getState().app.isViewallPage !== isViewall) {\n      dispatch({\n        type: IS_VIEWALL_PAGE,\n        isViewall: isViewall\n      });\n    }\n  };\n};\n\n//# sourceURL=webpack:///./src/scripts/actions/app.js?");

/***/ }),

/***/ "./src/scripts/components/modal-viewer.js":
/*!************************************************!*\
  !*** ./src/scripts/components/modal-viewer.js ***!
  \************************************************/
/*! exports provided: modalViewer */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/scripts/patternlab-viewer.js (referenced with import()) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modalViewer\", function() { return modalViewer; });\n/* harmony import */ var scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scroll-js */ \"../../node_modules/scroll-js/dist/scroll.js\");\n/* harmony import */ var scroll_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scroll_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/scripts/utils/index.js\");\n/* harmony import */ var _panels_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panels-viewer */ \"./src/scripts/components/panels-viewer.js\");\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store.js */ \"./src/scripts/store.js\");\n/* harmony import */ var _actions_app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/app.js */ \"./src/scripts/actions/app.js\");\n/**\n * \"Modal\" (aka Panel UI) for the Viewer Layer - for both annotations and code/info\n */\n\n\n\n // These are the actions needed by this element.\n\n\nvar modalViewer = {\n  // set up some defaults\n  iframeElement: document.querySelector('.pl-js-iframe'),\n  active: false,\n  switchText: true,\n  template: 'info',\n  patternData: {},\n  targetOrigin: window.location.protocol === 'file:' ? '*' : window.location.protocol + '//' + window.location.host,\n\n  /**\n   * initialize the modal window\n   */\n  onReady: function onReady() {\n    // make sure the listener for checkpanels is set-up\n    _utils__WEBPACK_IMPORTED_MODULE_1__[\"Dispatcher\"].addListener('insertPanels', modalViewer.insert);\n    modalViewer.__storeUnsubscribe = _store_js__WEBPACK_IMPORTED_MODULE_3__[\"store\"].subscribe(function () {\n      return modalViewer._stateChanged(_store_js__WEBPACK_IMPORTED_MODULE_3__[\"store\"].getState());\n    });\n\n    modalViewer._stateChanged(_store_js__WEBPACK_IMPORTED_MODULE_3__[\"store\"].getState()); // check query strings to handle auto-opening behavior\n\n\n    var queryStringVars = _utils__WEBPACK_IMPORTED_MODULE_1__[\"urlHandler\"].getRequestVars(); // show the modal if code view is called via query string\n\n    if (queryStringVars.view !== undefined && (queryStringVars.view === 'code' || queryStringVars.view === 'c' || queryStringVars.view === 'annotations' || queryStringVars.view === 'a')) {\n      _store_js__WEBPACK_IMPORTED_MODULE_3__[\"store\"].dispatch(Object(_actions_app_js__WEBPACK_IMPORTED_MODULE_4__[\"updateDrawerState\"])(true));\n    }\n  },\n\n  /**\n   * toggle the modal window open and closed\n   */\n  toggle: function toggle() {\n    if (modalViewer.active) {\n      _store_js__WEBPACK_IMPORTED_MODULE_3__[\"store\"].dispatch(Object(_actions_app_js__WEBPACK_IMPORTED_MODULE_4__[\"updateDrawerState\"])(false));\n    } else {\n      _store_js__WEBPACK_IMPORTED_MODULE_3__[\"store\"].dispatch(Object(_actions_app_js__WEBPACK_IMPORTED_MODULE_4__[\"updateDrawerState\"])(true));\n    }\n  },\n\n  /**\n   * open the modal window\n   */\n  open: function open() {\n    modalViewer.queryPattern(); // Show annotations if data is available and modal is open\n\n    if (modalViewer.patternData) {\n      if (modalViewer.patternData.annotations && modalViewer.patternData.annotations.length > 0) {\n        var obj = JSON.stringify({\n          event: 'patternLab.annotationsHighlightShow',\n          annotations: modalViewer.patternData.annotations\n        });\n        modalViewer.iframeElement.contentWindow.postMessage(obj, modalViewer.targetOrigin);\n      }\n    }\n  },\n\n  /**\n   * close the modal window\n   */\n  close: function close() {\n    // tell the styleguide to close\n    var obj = JSON.stringify({\n      event: 'patternLab.patternModalClose'\n    });\n    modalViewer.iframeElement.contentWindow.postMessage(obj, modalViewer.targetOrigin);\n    var obj2 = JSON.stringify({\n      event: 'patternLab.annotationsHighlightHide'\n    });\n    modalViewer.iframeElement.contentWindow.postMessage(obj2, modalViewer.targetOrigin);\n  },\n\n  /**\n   * insert the copy for the modal window. if it's meant to be sent back to the iframe, do that.\n   * @param  {String}       the rendered template that should be inserted\n   * @param  {String}       the patternPartial that the rendered template is related to\n   * @param  {Boolean}      if the refresh is of a view-all view and the content should be sent back\n   * @param  {Boolean}      if the text in the dropdown should be switched\n   */\n  insert: function insert(templateRendered, patternPartial, iframePassback, switchText) {\n    if (iframePassback) {\n      // send a message to the pattern\n      var obj = JSON.stringify({\n        event: 'patternLab.patternModalInsert',\n        patternPartial: patternPartial,\n        modalContent: templateRendered.outerHTML\n      });\n      modalViewer.iframeElement.contentWindow.postMessage(obj, modalViewer.targetOrigin);\n    } else {\n      var contentContainer = document.querySelector('.pl-js-drawer-content'); // Clear out any existing children before appending the new panel content\n\n      if (contentContainer.firstChild !== null) {\n        contentContainer.removeChild(contentContainer.firstChild);\n      }\n\n      contentContainer.appendChild(templateRendered);\n    }\n  },\n\n  /**\n   * refresh the modal if a new pattern is loaded and the modal is active\n   * @param  {Object}       the patternData sent back from the query\n   * @param  {Boolean}      if the refresh is of a view-all view and the content should be sent back\n   * @param  {Boolean}      if the text in the dropdown should be switched\n   */\n  refresh: function refresh(patternData, iframePassback, switchText) {\n    // if this is a styleguide view close the modal\n    if (iframePassback) {\n      modalViewer.close();\n    }\n\n    modalViewer.patternData = patternData; // gather the data that will fill the modal window\n\n    _panels_viewer__WEBPACK_IMPORTED_MODULE_2__[\"panelsViewer\"].gatherPanels(patternData, iframePassback, switchText);\n  },\n\n  /**\n   * slides the modal window into or out of view\n   * @param  {Integer}      where the modal window should be slide to\n   */\n  slide: function slide(pos) {\n    modalViewer.toggle();\n  },\n\n  /**\n   * slides the modal window to a particular annotation\n   * @param  {Integer}      the number for the element that should be highlighted\n   */\n  slideToAnnotation: function slideToAnnotation(pos) {\n    // remove active class\n    var els = document.querySelectorAll('.pl-js-annotations li');\n\n    for (var i = 0; i < els.length; ++i) {\n      els[i].classList.remove('pl-is-active');\n    }\n\n    var patternInfoElem = document.querySelector('.pl-js-pattern-info');\n    var scroll = new scroll_js__WEBPACK_IMPORTED_MODULE_0___default.a(patternInfoElem); // add active class to called element and scroll to it\n\n    for (var _i = 0; _i < els.length; ++_i) {\n      if (_i + 1 === pos) {\n        els[_i].classList.add('pl-is-active');\n\n        scroll.to(patternInfoElem.offsetTop, els[_i].offsetTop - 14, {\n          duration: 600\n        }).then(function () {// console.log('finished scrolling');\n        });\n      }\n    }\n  },\n\n  /**\n   * ask the pattern for info so we can open the modal window and populate it\n   * @param  {Boolean}      if the dropdown text should be changed\n   */\n  queryPattern: function queryPattern(switchText) {\n    // send a message to the pattern\n    var obj = JSON.stringify({\n      event: 'patternLab.patternQuery',\n      switchText: switchText\n    });\n    modalViewer.iframeElement.contentWindow.postMessage(obj, modalViewer.targetOrigin);\n  },\n\n  /**\n   * toggle the comment pop-up based on a user clicking on the pattern\n   * based on the great MDN docs at https://developer.mozilla.org/en-US/docs/Web/API/window.postMessage\n   * @param  {Object}      event info\n   */\n  receiveIframeMessage: function receiveIframeMessage(event) {\n    // does the origin sending the message match the current host? if not dev/null the request\n    if (window.location.protocol !== 'file:' && event.origin !== window.location.protocol + '//' + window.location.host) {\n      return;\n    }\n\n    var data = {};\n\n    try {\n      data = typeof event.data !== 'string' ? event.data : JSON.parse(event.data);\n    } catch (e) {// @todo: how do we want to handle exceptions here?\n    }\n\n    if (data.event !== undefined && data.event === 'patternLab.pageLoad') {\n      if (data.patternpartial.indexOf('viewall-') === 0 || data.patternpartial.indexOf('all') === 0) {\n        _store_js__WEBPACK_IMPORTED_MODULE_3__[\"store\"].dispatch(Object(_actions_app_js__WEBPACK_IMPORTED_MODULE_4__[\"isViewallPage\"])(true));\n      } else {\n        _store_js__WEBPACK_IMPORTED_MODULE_3__[\"store\"].dispatch(Object(_actions_app_js__WEBPACK_IMPORTED_MODULE_4__[\"isViewallPage\"])(false));\n      }\n\n      if (modalViewer.active === false && data.patternpartial !== undefined && data.patternpartial.indexOf('viewall-') === 0 && window.config.defaultShowPatternInfo !== undefined && window.config.defaultShowPatternInfo) {\n        modalViewer.queryPattern(false);\n      } else if (modalViewer.active === true) {\n        modalViewer.queryPattern();\n      }\n    } else if (data.event !== undefined && data.event === 'patternLab.patternQueryInfo') {\n      if (!modalViewer.panelRendered || modalViewer.previouslyRenderedPattern !== data.patternData.patternPartial) {\n        // refresh the modal contents, but only when necessary (ex. when the page changes) -- prevents extra, unnecessary re-renders of content.\n        modalViewer.refresh(data.patternData, data.iframePassback, data.switchText);\n        modalViewer.panelRendered = true;\n        modalViewer.previouslyRenderedPattern = data.patternData.patternPartial;\n      }\n    } else if (data.event !== undefined && data.event === 'patternLab.annotationNumberClicked') {\n      // slide to a given annoation\n      modalViewer.slideToAnnotation(data.displayNumber);\n    }\n  },\n  _stateChanged: function _stateChanged(state) {\n    modalViewer.active = state.app.drawerOpened;\n\n    if (modalViewer.active) {\n      modalViewer.open();\n    } else {\n      modalViewer.close();\n    }\n  }\n};\nmodalViewer.onReady();\nwindow.addEventListener('message', modalViewer.receiveIframeMessage, false);\n\n//# sourceURL=webpack:///./src/scripts/components/modal-viewer.js?");

/***/ }),

/***/ "./src/scripts/store.js":
/*!******************************************!*\
  !*** ./src/scripts/store.js + 2 modules ***!
  \******************************************/
/*! exports provided: store */
/*! ModuleConcatenation bailout: Cannot concat with /Users/ghows/sites/bolt/node_modules/pwa-helpers/lazy-reducer-enhancer.js */
/*! ModuleConcatenation bailout: Cannot concat with /Users/ghows/sites/bolt/node_modules/redux-thunk/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with /Users/ghows/sites/bolt/node_modules/redux/es/redux.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/scripts/actions/app.js because of ./src/scripts/components/pl-drawer/pl-drawer.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("\n// EXTERNAL MODULE: /Users/ghows/sites/bolt/node_modules/redux/es/redux.js\nvar redux = __webpack_require__(\"../../node_modules/redux/es/redux.js\");\n\n// EXTERNAL MODULE: /Users/ghows/sites/bolt/node_modules/redux-thunk/es/index.js\nvar es = __webpack_require__(\"../../node_modules/redux-thunk/es/index.js\");\n\n// EXTERNAL MODULE: /Users/ghows/sites/bolt/node_modules/pwa-helpers/lazy-reducer-enhancer.js\nvar lazy_reducer_enhancer = __webpack_require__(\"../../node_modules/pwa-helpers/lazy-reducer-enhancer.js\");\n\n// EXTERNAL MODULE: ./src/scripts/actions/app.js\nvar actions_app = __webpack_require__(\"./src/scripts/actions/app.js\");\n\n// CONCATENATED MODULE: ./src/scripts/reducers/app.js\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar app_app = function app() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case actions_app[\"UPDATE_LAYOUT_MODE\"]:\n      return _objectSpread({}, state, {\n        layoutMode: action.layoutMode\n      });\n\n    case actions_app[\"UPDATE_THEME_MODE\"]:\n      return _objectSpread({}, state, {\n        themeMode: action.themeMode\n      });\n\n    case actions_app[\"UPDATE_DRAWER_STATE\"]:\n      return _objectSpread({}, state, {\n        drawerOpened: action.opened\n      });\n\n    case actions_app[\"UPDATE_DRAWER_HEIGHT\"]:\n      return _objectSpread({}, state, {\n        drawerHeight: action.height\n      });\n\n    case actions_app[\"UPDATE_DRAWER_ANIMATION_STATE\"]:\n      return _objectSpread({}, state, {\n        drawerIsAnimating: action.drawerIsAnimating\n      });\n\n    case actions_app[\"IS_VIEWALL_PAGE\"]:\n      return _objectSpread({}, state, {\n        isViewallPage: action.isViewall\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ var reducers_app = (app_app);\n// CONCATENATED MODULE: ./src/scripts/localstorage.js\nvar saveState = function saveState(state) {\n  var json = localStorage.getItem('patternlab') || '{}';\n  var stringifiedNewState = JSON.stringify(state);\n\n  if (stringifiedNewState !== json && stringifiedNewState !== '{}') {\n    localStorage.setItem('patternlab', stringifiedNewState);\n  }\n};\nvar loadState = function loadState() {\n  var json; // Temporarily don't load the cached state in debug mode.\n\n  if (window.location.hash === '#debug') {\n    json = '{}'; // Alternatively, clear the localStorage redux state with a #reset hash\n  } else if (window.location.hash === '#reset') {\n    localStorage.removeItem('patternlab');\n    json = {};\n  } else {\n    json = localStorage.getItem('patternlab') || '{}';\n  }\n\n  var state = JSON.parse(json);\n\n  if (state) {\n    // Add default state data here (if necessary)\n    if (state.app) {\n      if (state.app.drawerHeight && !state.app.drawerOpened) {\n        state.app.appHeight = window.innerHeight;\n      } else if (state.app.drawerHeight && state.app.drawerOpened) {\n        state.app.appHeight = window.innerHeight - state.app.drawerHeight;\n      }\n    }\n\n    if (state.app) {\n      if (state.app.themeMode === undefined) {\n        try {\n          if (window.patternlab.config.theme.color !== undefined) {\n            state.app.themeMode = window.patternlab.config.theme.color;\n          }\n        } catch (e) {\n          state.app.themeMode = 'dark';\n        }\n      }\n    }\n\n    return state;\n  } else {\n    return undefined;\n  }\n};\n// CONCATENATED MODULE: ./src/scripts/store.js\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n\n\n\n\n\nvar compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux[\"compose\"];\nvar store = Object(redux[\"createStore\"])(function (state, action) {\n  return state;\n}, loadState(), // If there is local storage data, load it.\ncompose(Object(lazy_reducer_enhancer[\"lazyReducerEnhancer\"])(redux[\"combineReducers\"]), Object(redux[\"applyMiddleware\"])(es[\"default\"])));\nstore.addReducers({\n  app: reducers_app\n}); // This subscriber writes to local storage anytime the state updates.\n\nstore.subscribe(function () {\n  saveState(store.getState());\n});\n\n//# sourceURL=webpack:///./src/scripts/store.js_+_2_modules?");

/***/ })

}]);