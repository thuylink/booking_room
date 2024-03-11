"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/dom-walk";
exports.ids = ["vendor-chunks/dom-walk"];
exports.modules = {

/***/ "(ssr)/../node_modules/dom-walk/index.js":
/*!*****************************************!*\
  !*** ../node_modules/dom-walk/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\nvar slice = Array.prototype.slice;\nmodule.exports = iterativelyWalk;\nfunction iterativelyWalk(nodes, cb) {\n    if (!(\"length\" in nodes)) {\n        nodes = [\n            nodes\n        ];\n    }\n    nodes = slice.call(nodes);\n    while(nodes.length){\n        var node = nodes.shift(), ret = cb(node);\n        if (ret) {\n            return ret;\n        }\n        if (node.childNodes && node.childNodes.length) {\n            nodes = slice.call(node.childNodes).concat(nodes);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2RvbS13YWxrL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7QUFBQSxJQUFJQSxRQUFRQyxNQUFNQyxTQUFTLENBQUNGLEtBQUs7QUFFakNHLE9BQU9DLE9BQU8sR0FBR0M7QUFFakIsU0FBU0EsZ0JBQWdCQyxLQUFLLEVBQUVDLEVBQUU7SUFDOUIsSUFBSSxDQUFFLGFBQVlELEtBQUksR0FBSTtRQUN0QkEsUUFBUTtZQUFDQTtTQUFNO0lBQ25CO0lBRUFBLFFBQVFOLE1BQU1RLElBQUksQ0FBQ0Y7SUFFbkIsTUFBTUEsTUFBTUcsTUFBTSxDQUFFO1FBQ2hCLElBQUlDLE9BQU9KLE1BQU1LLEtBQUssSUFDbEJDLE1BQU1MLEdBQUdHO1FBRWIsSUFBSUUsS0FBSztZQUNMLE9BQU9BO1FBQ1g7UUFFQSxJQUFJRixLQUFLRyxVQUFVLElBQUlILEtBQUtHLFVBQVUsQ0FBQ0osTUFBTSxFQUFFO1lBQzNDSCxRQUFRTixNQUFNUSxJQUFJLENBQUNFLEtBQUtHLFVBQVUsRUFBRUMsTUFBTSxDQUFDUjtRQUMvQztJQUNKO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmVlemUtbmV4dC8uLi9ub2RlX21vZHVsZXMvZG9tLXdhbGsvaW5kZXguanM/MzE0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcblxubW9kdWxlLmV4cG9ydHMgPSBpdGVyYXRpdmVseVdhbGtcblxuZnVuY3Rpb24gaXRlcmF0aXZlbHlXYWxrKG5vZGVzLCBjYikge1xuICAgIGlmICghKCdsZW5ndGgnIGluIG5vZGVzKSkge1xuICAgICAgICBub2RlcyA9IFtub2Rlc11cbiAgICB9XG4gICAgXG4gICAgbm9kZXMgPSBzbGljZS5jYWxsKG5vZGVzKVxuXG4gICAgd2hpbGUobm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBub2RlID0gbm9kZXMuc2hpZnQoKSxcbiAgICAgICAgICAgIHJldCA9IGNiKG5vZGUpXG5cbiAgICAgICAgaWYgKHJldCkge1xuICAgICAgICAgICAgcmV0dXJuIHJldFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUuY2hpbGROb2RlcyAmJiBub2RlLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBub2RlcyA9IHNsaWNlLmNhbGwobm9kZS5jaGlsZE5vZGVzKS5jb25jYXQobm9kZXMpXG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOlsic2xpY2UiLCJBcnJheSIsInByb3RvdHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJpdGVyYXRpdmVseVdhbGsiLCJub2RlcyIsImNiIiwiY2FsbCIsImxlbmd0aCIsIm5vZGUiLCJzaGlmdCIsInJldCIsImNoaWxkTm9kZXMiLCJjb25jYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/dom-walk/index.js\n");

/***/ })

};
;