"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/safe-json-parse";
exports.ids = ["vendor-chunks/safe-json-parse"];
exports.modules = {

/***/ "(ssr)/../node_modules/safe-json-parse/tuple.js":
/*!************************************************!*\
  !*** ../node_modules/safe-json-parse/tuple.js ***!
  \************************************************/
/***/ ((module) => {

eval("\nmodule.exports = SafeParseTuple;\nfunction SafeParseTuple(obj, reviver) {\n    var json;\n    var error = null;\n    try {\n        json = JSON.parse(obj, reviver);\n    } catch (err) {\n        error = err;\n    }\n    return [\n        error,\n        json\n    ];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3NhZmUtanNvbi1wYXJzZS90dXBsZS5qcyIsIm1hcHBpbmdzIjoiO0FBQUFBLE9BQU9DLE9BQU8sR0FBR0M7QUFFakIsU0FBU0EsZUFBZUMsR0FBRyxFQUFFQyxPQUFPO0lBQ2hDLElBQUlDO0lBQ0osSUFBSUMsUUFBUTtJQUVaLElBQUk7UUFDQUQsT0FBT0UsS0FBS0MsS0FBSyxDQUFDTCxLQUFLQztJQUMzQixFQUFFLE9BQU9LLEtBQUs7UUFDVkgsUUFBUUc7SUFDWjtJQUVBLE9BQU87UUFBQ0g7UUFBT0Q7S0FBSztBQUN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2JyZWV6ZS1uZXh0Ly4uL25vZGVfbW9kdWxlcy9zYWZlLWpzb24tcGFyc2UvdHVwbGUuanM/Nzc1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFNhZmVQYXJzZVR1cGxlXG5cbmZ1bmN0aW9uIFNhZmVQYXJzZVR1cGxlKG9iaiwgcmV2aXZlcikge1xuICAgIHZhciBqc29uXG4gICAgdmFyIGVycm9yID0gbnVsbFxuXG4gICAgdHJ5IHtcbiAgICAgICAganNvbiA9IEpTT04ucGFyc2Uob2JqLCByZXZpdmVyKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBlcnJvciA9IGVyclxuICAgIH1cblxuICAgIHJldHVybiBbZXJyb3IsIGpzb25dXG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIlNhZmVQYXJzZVR1cGxlIiwib2JqIiwicmV2aXZlciIsImpzb24iLCJlcnJvciIsIkpTT04iLCJwYXJzZSIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/safe-json-parse/tuple.js\n");

/***/ })

};
;