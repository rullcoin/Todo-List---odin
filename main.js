/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --background-color: rgb(237, 252, 247);\\n}\\n\\nbody {\\n    padding: 0;\\n    margin: 0;\\n    font-family: 'Roboto', sans-serif;\\n    background-color: var(--background-color);\\n    min-width: 100vh;\\n}\\n\\nheader {\\n    border: 1px solid rgb(104, 102, 102);\\n    display: flex;\\n    justify-content: start;\\n    padding-left: 3rem;\\n    background-color: rgb(132, 186, 240);\\n    color: #FFF;\\n}\\n\\n.title {\\n    width: 100vh;\\n}\\n\\n.container {\\n    display: flex;\\n    height: 350px;\\n}\\n\\n.menu-items {\\n    display: flex;\\n    flex-direction: column;\\n    border-right: 1px solid rgb(159, 209, 211);\\n\\n    background-color: rgb(241, 255, 255);\\n    padding: 0 3rem 0 3rem;\\n    border-radius: 15px;\\n}\\n\\n#new-project-button {\\n    background-color: rgb(241, 255, 255);\\n    border-radius: 25px;\\n    border: none;\\n    font-size: 2rem;\\n}\\n\\n#new-project-button:hover {\\n    background-color: rgb(132, 186, 240);\\n}\\n\\n.projects {\\n    height: 300px;\\n    overflow-y: auto;\\n    \\n}\\n\\n#project-name {\\ncursor: pointer;\\n\\n}\\n\\n#project-name:hover {\\n    background-color: rgb(202, 255, 255);\\n}\\n\\n#project-name * {\\n    margin: 0;\\n    padding: 0;\\n} \\n\\n.input-container-hidden, .edit-hidden, .project-label-hidden {\\n    display: none;\\n}\\n\\n.input-container {\\n    display: flex;\\n    justify-content: center;\\n    padding-bottom: 10px;\\n}\\n\\n.projects-title {\\n    text-align: center;\\n}\\n\\n.form-div input{\\n    border: 0;\\n    font-size: 1rem;\\n    background-color: var(--background-color);\\n    /* color: rgb(255, 255, 255); */\\n    font-weight: bold;\\n    height: 2rem;\\n    margin-bottom: 2rem;\\n}\\n\\n.form-div select {\\n    width: 8rem;\\n    height: 2rem;\\n    margin-right: 10px;\\n    background-color: var(--background-color);\\n    text-align: center;\\n    border: none;\\n}\\n\\n#label-button {\\n    border-radius: 10px;\\n    border: 2px solid black;\\n    font-weight: bold;\\n}\\n\\n.form-div *:hover {\\n    background-color: rgb(182, 240, 255);\\n}\\n\\n.content-container {\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n#date {\\n    border: none;\\n}\\n\\n.content {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.add-project-container {\\n    padding-top: 5rem;\\n}\\n\\n.add-project-form, .edit-form {\\n    border: 1px solid var(--grey);\\n    border-radius: 20px;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    background: #FFF;\\n    position: fixed;\\n    top: 50vh;\\n    left: 50vw;\\n    transform: translate(-50%, -50%);\\n    font-size: 1.1em;\\n    padding: 10px;\\n\\n    z-index: 1;\\n    transition: 0.2s ease-in-out;\\n}\\n\\n.add-project-form button {\\n    width: 3rem;\\n    height: 1rem;\\n    padding: 0;\\n    text-align: center;\\n    line-height: 0.8rem;\\n}\\n\\n.task-container {\\n    border: 1px solid rgb(129, 211, 207);\\n    border-radius: 25px;\\n    padding: 5px;\\n    display: flex;\\n    justify-content: space-evenly;\\n    align-items: center;\\n    gap: 5rem;\\n    margin-bottom: 5px;\\n}\\n\\n.task-content-div {\\n    max-width: 6rem;\\n    min-width: 6rem;\\n}\\n\\n.task-buttons img:hover {\\n    background-color:rgb(129, 211, 207)\\n}\\n\\n.project-heading {\\n    display: flex;\\n    align-items: center;\\n    gap: 5px;\\n}\\n\\n.blocker {\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    bottom: 0;\\n    right: 0;\\n    content: ' ';\\n    background: rgba(0,0,0,.5);\\n}\\n\\n.important-priority {\\n    color: red;\\n}\\n\\n.low-priority {\\n    color: rgb(36, 211, 30);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list---odin/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list---odin/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list---odin/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list---odin/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list---odin/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list---odin/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list---odin/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list---odin/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list---odin/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list---odin/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _todoApp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoApp.js */ \"./src/todoApp.js\");\n\n\n\n\nlet submitButton = document.getElementById(\"submit-button\")\nlet addProjectDiv = document.querySelector(\".project-label-hidden\")\nlet projectLabel = document.getElementById(\"add-project\")\nlet projectDiv = document.querySelector('.projects-element')\nlet cancelProjectButton = document.getElementById(\"cancel-button\")\nlet addNewProjectButton = document.getElementById(\"new-project-button\")\n\n\naddNewProjectButton.addEventListener('click', function() {\n    addProjectDiv.classList = \"project-label\"\n    addProjectDiv.id = \"project-label\"\n    projectLabel.value = \"\"\n    _todoApp_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createBlockerDiv(addProjectDiv)\n})\n\nsubmitButton.addEventListener(\"click\", function(e) {\n    e.preventDefault()\n    let title = document.getElementById(\"add-project\").value\n    _todoApp_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newProject(title)\n\n    //todoApp.projectList.push(newProject)\n    //console.log(todoApp.projectList)\n    _todoApp_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addToDiv()\n\n    //Needed to remove blocker div\n    let blockerDiv = document.getElementById(\"blocker\")\n    e.target.parentNode.parentNode.parentNode.removeChild(blockerDiv)\n    //console.log(e.target.parentNode.parentNode.child);\n\n    addProjectDiv.classList = \"project-label-hidden\"\n})\n\nprojectDiv.addEventListener('click', function(e) {\n    //Render all current projects\n    _todoApp_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayContent(e.target.parentElement.getAttribute('data-id'))\n})\n\ncancelProjectButton.addEventListener(\"click\", function(e) {\n    e.preventDefault()\n    addProjectDiv.classList = \"project-label-hidden\"\n    projectLabel.value = \"\"\n})\n\n//Display current local items\n_todoApp_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayLocalItems()\n\n//# sourceURL=webpack://todo-list---odin/./src/index.js?");

/***/ }),

/***/ "./src/todoApp.js":
/*!************************!*\
  !*** ./src/todoApp.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst todoApp = (() => {\n  //Projects are stored in this array with their todo's\n  let projectList = [];\n  let contentDiv = document.getElementById(\"content\")\n  let newForm = document.createElement(\"form\")\n\n  let CreateNewTodo = (title, description, dueDate, priority) => {\n    return {\n      title,\n      description,\n      dueDate,\n      priority,\n    };\n  };\n\n  let newProject = (name) => {\n    let id = projectList.length;\n    projectList.push({name, id, projectTodoList: []})\n    return {\n      name,\n      id,\n      projectTodoList: [],\n    };\n  };\n\n  let deleteTask = (e) => {\n    let projectID = e.target.parentNode.parentNode.getAttribute(\"project-id\");\n    let idToDelete = e.target.parentNode.parentNode.getAttribute('div-id')\n\n    e.target.parentNode.parentNode.remove()\n    projectList[projectID].projectTodoList.splice(idToDelete, 1)\n    console.log(projectList[projectID].projectTodoList.length);\n\n    // Needed to refresh current todo's div ID.\n    displayContent(projectID)\n\n    //Refresh local item list\n    localStoreItem('list', JSON.stringify(projectList))\n  };\n\n  let editTask = (e) => {\n    let projectID = e.target.parentNode.parentNode.getAttribute(\"project-id\");\n    let idToUpdate = e.target.parentNode.parentNode.getAttribute('div-id')\n    let project = projectList[projectID].projectTodoList[idToUpdate]\n    \n    let currentTitle = project.title\n    let currentDescription = project.description\n    let currentDate = project.dueDate\n    let currentPriority = project.priority\n    //Add date and priority as well\n    \n    let projectDiv = document.getElementById(\"add-project-container\")\n\n    newForm.classList = \"edit-form\"\n    newForm.id = \"edit-form\"\n\n    let editingDiv = document.createElement(\"div\")\n    editingDiv.id = \"editing-div\"\n\n    createBlockerDiv(editingDiv)\n\n    let title = document.createElement(\"input\")\n    let description = document.createElement(\"input\")\n    let date = document.createElement(\"input\")\n    let priority = document.createElement(\"select\")\n\n    title.type = 'text'\n    title.id = \"edit-title\"\n    title.value = currentTitle\n\n    description.type = \"text\"\n    description.id = \"edit-description\"\n    description.value = currentDescription\n\n    date.type = \"date\"\n    date.id = \"edit-date\"\n    date.value = currentDate\n\n    priority.id = \"edit-select\"\n\n    let optionLow = document.createElement('option')\n    let optionImportant = document.createElement('option')\n    optionLow.text = 'Low'\n    optionImportant.text = 'Important'\n    optionImportant.classList = 'important-priority'\n    optionLow.classList = 'low-priority'\n    priority.append(optionLow, optionImportant)\n\n    let button = document.createElement(\"button\");\n    button.type = 'submit'\n    button.id = 'edit-button'\n    button.textContent = 'Edit'\n\n    button.addEventListener(\"click\", function(e) {\n        \n\n        e.preventDefault()\n        let newTitle = document.getElementById(\"edit-title\").value\n        let newDescription = document.getElementById(\"edit-description\").value\n        let newDate = document.getElementById(\"edit-date\").value\n        let newPriority = document.getElementById(\"edit-select\").value\n  \n        projectList[projectID].projectTodoList.splice(idToUpdate, 1, CreateNewTodo(newTitle, newDescription, newDate, newPriority))\n        // Refresh localStorage list\n        localStoreItem('list', JSON.stringify(projectList))\n\n        displayContent(projectID)\n        //Removes edit-form div on submission\n        e.target.parentNode.parentNode.parentNode.removeChild(editingDiv)\n        newForm.textContent = \"\"\n    }) \n\n    newForm.append(title, description, date, priority, button)\n    editingDiv.append(newForm)\n    projectDiv.append(editingDiv)\n  }\n\n  let createBlockerDiv = (div) => {\n    let blockerDiv = document.createElement(\"div\")\n    blockerDiv.classList = \"blocker\"\n    blockerDiv.id = \"blocker\"\n\n    div.append(blockerDiv)\n\n    blockerDiv.addEventListener('click', function(e) {\n        div.classList = \"project-label-hidden\"\n        newForm.textContent = \"\"\n        if (e.target.parentNode.id === \"editing-div\") {\n            e.target.parentNode.parentNode.removeChild(e.target.parentNode)\n        } else {\n            e.target.parentNode.removeChild(blockerDiv)\n        }\n    })\n  }\n\n  //Creates the new projects div\n  let addToDiv = () => {\n    let projectDiv = document.getElementById(\"projects-element\");\n    projectDiv.textContent = \"\";\n\n    for (let i = 0; i < projectList.length; i++) {\n      let childDiv = document.createElement(\"div\");\n      childDiv.id = \"project-name\"\n      let projectTitle = document.createElement(\"h3\");\n\n      //Sets new ID for the div\n      childDiv.setAttribute(\"data-id\", i);\n      //Project name\n      projectTitle.textContent = projectList[i].name;\n\n      childDiv.append(projectTitle);\n      projectDiv.append(childDiv);\n    }\n  };\n\n  let displayContent = (id) => {\n    let currentProject = projectList[id]\n    \n    //Resets content div, needed so there are no duplicates\n    contentDiv.textContent = \"\"\n    \n    let projectsName = document.createElement(\"h1\")\n    projectsName.classList = \"projects-title\"\n    projectsName.textContent = projectList[id].name\n\n    contentDiv.append(projectsName)\n    createForm(id)\n    \n    //For each project todo, make div etc\n    for (let i = 0; i < currentProject.projectTodoList.length; i++) {\n        \n        let childDiv = document.createElement(\"div\");\n        childDiv.classList = \"task-container\"\n        childDiv.setAttribute('div-id', i)\n        childDiv.setAttribute('project-id', id)\n\n        let nameDiv = document.createElement(\"div\")\n        nameDiv.classList = \"task-content-div\"\n        let TodoName = document.createElement(\"h4\")\n        nameDiv.append(TodoName)\n\n        let descDiv = document.createElement(\"div\")\n        descDiv.classList = \"task-content-div\"\n        let TodoDescription = document.createElement(\"p\")\n        descDiv.append(TodoDescription)\n\n        let dateDiv = document.createElement(\"div\")\n        dateDiv.classList = \"task-content-div\"\n        let TodoDate = document.createElement(\"p\")\n        dateDiv.append(TodoDate)\n\n        let priorityDiv = document.createElement(\"div\")\n        priorityDiv.classList = \"task-content-div\"\n        let TodoPriority = document.createElement('p')\n        priorityDiv.append(TodoPriority)\n\n\n\n        TodoName.textContent = currentProject.projectTodoList[i].title\n        TodoDescription.textContent = currentProject.projectTodoList[i].description\n        TodoDate.textContent = currentProject.projectTodoList[i].dueDate\n        TodoPriority.textContent = currentProject.projectTodoList[i].priority\n\n        if (TodoPriority.textContent === \"Important\") {\n            TodoPriority.classList = \"important-priority\"\n        } else {\n            TodoPriority.classList = \"low-priority\"\n        }\n        \n\n        childDiv.append(nameDiv, descDiv, dateDiv, priorityDiv)\n        contentDiv.append(childDiv)\n        \n\n        addTaskButtons(childDiv)\n        \n    }\n  };\n\n  let addTaskButtons = (taskDiv) => {\n    let taskButtonDiv = document.createElement(\"div\")\n    taskButtonDiv.classList = \"task-buttons\"\n    let deleteButton = document.createElement(\"img\");\n    deleteButton.id = 'delete-button'\n    deleteButton.src = \"/src/trash-can.png\"\n\n    let editButton = document.createElement(\"img\");\n    editButton.id = 'update-button'\n    editButton.src = \"/src/pencil.png\"\n\n    for (let i = 0; i < projectList.length; i++) {\n        deleteButton.setAttribute('button-id', i)\n        editButton.setAttribute('button-id', i)\n    }\n\n    taskButtonDiv.append(deleteButton, editButton)\n    taskDiv.append(taskButtonDiv)\n\n    deleteButton.addEventListener(\"click\", deleteTask)\n    editButton.addEventListener('click', editTask)\n  };\n\n\n  let createForm = (id) => {\n    let currentID = id\n\n    let formDiv = document.createElement(\"div\")\n\n    formDiv.classList.add(\"input-container\")\n    let form = document.createElement(\"form\")\n    form.classList.add(\"form-div\")\n\n    let button = document.createElement(\"input\");\n    let title = document.createElement(\"input\")\n    let description = document.createElement(\"input\")\n    let date = document.createElement(\"input\")\n    let priority = document.createElement(\"select\")\n\n    title.type = 'text'\n    title.id = \"title\"\n    title.placeholder = \"New task title\"\n    title.required = true\n\n    description.type = \"text\"\n    description.id = \"description\"\n    description.placeholder = \"Description\"\n    description.required = true\n\n\n    button.type = 'button'\n    button.id = 'label-button'\n    button.value = 'Add task'\n\n    date.type = \"date\"\n    date.id = 'date'\n\n    priority.id = 'select'\n    let optionLow = document.createElement('option')\n    let optionImportant = document.createElement('option')\n    optionLow.text = 'Low'\n    optionImportant.text = 'Important'\n    optionImportant.classList = 'important-priority'\n    optionLow.classList = 'low-priority'\n\n    priority.append(optionLow, optionImportant)\n\n    form.append(title, description, date, priority, button)\n    formDiv.append(form)\n    contentDiv.append(formDiv)\n\n    //Cannot add \"required\" inputs because of this function\n    button.addEventListener('click', function(e) {\n        \n        title = document.getElementById('title').value\n        description = document.getElementById('description').value\n        date = document.getElementById('date').value\n        priority = document.getElementById('select').value\n\n        \n        if (title != \"\") {\n        let newTask = CreateNewTodo(title, description, date, priority)\n        let currentProjectList = projectList[currentID].projectTodoList\n\n        currentProjectList.push(newTask)\n\n        // Local item storage\n        localStoreItem('list', JSON.stringify(projectList))\n       \n        displayContent(currentID)\n\n    } else {\n        alert(\"Make sure that you enter a title!\")\n    }\n    })\n}\n\nlet localStoreItem = (key, value) => {\n    localStorage.setItem(key, JSON.stringify(value));\n}\n\nlet retrieveLocalItem = (item) => {\n    let x = localStorage.getItem(item)\n    let parsedItem = JSON.parse(x)\n    return JSON.parse(parsedItem)\n}\n\nlet displayLocalItems = () => {\n    if (localStorage.length === 1) {\n        projectList = retrieveLocalItem('list')\n        addToDiv()\n    }\n}\n\n  return { CreateNewTodo, newProject, projectList, deleteTask, \n    addToDiv, displayContent, createForm, createBlockerDiv, localStoreItem, \n    retrieveLocalItem, displayLocalItems };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoApp);\n\n\n//# sourceURL=webpack://todo-list---odin/./src/todoApp.js?");

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
/******/ 			id: moduleId,
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;