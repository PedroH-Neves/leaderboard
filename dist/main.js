"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ScoreAdd\": () => (/* binding */ ScoreAdd),\n/* harmony export */   \"inputName\": () => (/* binding */ inputName),\n/* harmony export */   \"inputScore\": () => (/* binding */ inputScore),\n/* harmony export */   \"scoreTable\": () => (/* binding */ scoreTable)\n/* harmony export */ });\nconst scoreTable = document.getElementById('scores');\r\nconst inputName = document.getElementById('inputName');\r\nconst inputScore = document.getElementById('inputScore');\r\nconst ScoreAdd = document.getElementById('scoreSubmit');\r\n\r\nScoreAdd.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  scoreInput.NewScores();\r\n})\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);