"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/global";
exports.ids = ["vendor-chunks/global"];
exports.modules = {

/***/ "(ssr)/../node_modules/global/document.js":
/*!******************************************!*\
  !*** ../node_modules/global/document.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar topLevel = typeof global !== \"undefined\" ? global :  false ? 0 : {};\nvar minDoc = __webpack_require__(/*! min-document */ \"(ssr)/../node_modules/min-document/index.js\");\nvar doccy;\nif (typeof document !== \"undefined\") {\n    doccy = document;\n} else {\n    doccy = topLevel[\"__GLOBAL_DOCUMENT_CACHE@4\"];\n    if (!doccy) {\n        doccy = topLevel[\"__GLOBAL_DOCUMENT_CACHE@4\"] = minDoc;\n    }\n}\nmodule.exports = doccy;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2dsb2JhbC9kb2N1bWVudC5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsSUFBSUEsV0FBVyxPQUFPQyxXQUFXLGNBQWNBLFNBQzNDLE1BQWtCLEdBQWNDLENBQU1BLEdBQUcsQ0FBQztBQUM5QyxJQUFJQyxTQUFTQyxtQkFBT0EsQ0FBQztBQUVyQixJQUFJQztBQUVKLElBQUksT0FBT0MsYUFBYSxhQUFhO0lBQ2pDRCxRQUFRQztBQUNaLE9BQU87SUFDSEQsUUFBUUwsUUFBUSxDQUFDLDRCQUE0QjtJQUU3QyxJQUFJLENBQUNLLE9BQU87UUFDUkEsUUFBUUwsUUFBUSxDQUFDLDRCQUE0QixHQUFHRztJQUNwRDtBQUNKO0FBRUFJLE9BQU9DLE9BQU8sR0FBR0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmVlemUtbmV4dC8uLi9ub2RlX21vZHVsZXMvZ2xvYmFsL2RvY3VtZW50LmpzPzU1NDEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHRvcExldmVsID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOlxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge31cbnZhciBtaW5Eb2MgPSByZXF1aXJlKCdtaW4tZG9jdW1lbnQnKTtcblxudmFyIGRvY2N5O1xuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGRvY2N5ID0gZG9jdW1lbnQ7XG59IGVsc2Uge1xuICAgIGRvY2N5ID0gdG9wTGV2ZWxbJ19fR0xPQkFMX0RPQ1VNRU5UX0NBQ0hFQDQnXTtcblxuICAgIGlmICghZG9jY3kpIHtcbiAgICAgICAgZG9jY3kgPSB0b3BMZXZlbFsnX19HTE9CQUxfRE9DVU1FTlRfQ0FDSEVANCddID0gbWluRG9jO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb2NjeTtcbiJdLCJuYW1lcyI6WyJ0b3BMZXZlbCIsImdsb2JhbCIsIndpbmRvdyIsIm1pbkRvYyIsInJlcXVpcmUiLCJkb2NjeSIsImRvY3VtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/global/document.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/global/window.js":
/*!****************************************!*\
  !*** ../node_modules/global/window.js ***!
  \****************************************/
/***/ ((module) => {

eval("\nvar win;\nif (false) {} else if (typeof global !== \"undefined\") {\n    win = global;\n} else if (typeof self !== \"undefined\") {\n    win = self;\n} else {\n    win = {};\n}\nmodule.exports = win;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2dsb2JhbC93aW5kb3cuanMiLCJtYXBwaW5ncyI6IjtBQUFBLElBQUlBO0FBRUosSUFBSSxLQUE2QixFQUFFLEVBRWxDLE1BQU0sSUFBSSxPQUFPRSxXQUFXLGFBQWE7SUFDdENGLE1BQU1FO0FBQ1YsT0FBTyxJQUFJLE9BQU9DLFNBQVMsYUFBWTtJQUNuQ0gsTUFBTUc7QUFDVixPQUFPO0lBQ0hILE1BQU0sQ0FBQztBQUNYO0FBRUFJLE9BQU9DLE9BQU8sR0FBR0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmVlemUtbmV4dC8uLi9ub2RlX21vZHVsZXMvZ2xvYmFsL3dpbmRvdy5qcz8yYjdmIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB3aW47XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgd2luID0gc2VsZjtcbn0gZWxzZSB7XG4gICAgd2luID0ge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2luO1xuIl0sIm5hbWVzIjpbIndpbiIsIndpbmRvdyIsImdsb2JhbCIsInNlbGYiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/global/window.js\n");

/***/ })

};
;