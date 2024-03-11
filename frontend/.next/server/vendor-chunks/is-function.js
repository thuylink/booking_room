"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-function";
exports.ids = ["vendor-chunks/is-function"];
exports.modules = {

/***/ "(ssr)/../node_modules/is-function/index.js":
/*!********************************************!*\
  !*** ../node_modules/is-function/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("\nmodule.exports = isFunction;\nvar toString = Object.prototype.toString;\nfunction isFunction(fn) {\n    if (!fn) {\n        return false;\n    }\n    var string = toString.call(fn);\n    return string === \"[object Function]\" || typeof fn === \"function\" && string !== \"[object RegExp]\" ||  false && // IE8 and below\n    (0);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2lzLWZ1bmN0aW9uL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7QUFBQUEsT0FBT0MsT0FBTyxHQUFHQztBQUVqQixJQUFJQyxXQUFXQyxPQUFPQyxTQUFTLENBQUNGLFFBQVE7QUFFeEMsU0FBU0QsV0FBWUksRUFBRTtJQUNyQixJQUFJLENBQUNBLElBQUk7UUFDUCxPQUFPO0lBQ1Q7SUFDQSxJQUFJQyxTQUFTSixTQUFTSyxJQUFJLENBQUNGO0lBQzNCLE9BQU9DLFdBQVcsdUJBQ2YsT0FBT0QsT0FBTyxjQUFjQyxXQUFXLHFCQUN2QyxNQUFrQixJQUNsQixnQkFBZ0I7SUFDZkQsQ0FBQUEsQ0FHb0I7QUFDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmVlemUtbmV4dC8uLi9ub2RlX21vZHVsZXMvaXMtZnVuY3Rpb24vaW5kZXguanM/MjEwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb25cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uIChmbikge1xuICBpZiAoIWZuKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgdmFyIHN0cmluZyA9IHRvU3RyaW5nLmNhbGwoZm4pXG4gIHJldHVybiBzdHJpbmcgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScgfHxcbiAgICAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIHN0cmluZyAhPT0gJ1tvYmplY3QgUmVnRXhwXScpIHx8XG4gICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgIC8vIElFOCBhbmQgYmVsb3dcbiAgICAgKGZuID09PSB3aW5kb3cuc2V0VGltZW91dCB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5hbGVydCB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5jb25maXJtIHx8XG4gICAgICBmbiA9PT0gd2luZG93LnByb21wdCkpXG59O1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJpc0Z1bmN0aW9uIiwidG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJmbiIsInN0cmluZyIsImNhbGwiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiYWxlcnQiLCJjb25maXJtIiwicHJvbXB0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/is-function/index.js\n");

/***/ })

};
;