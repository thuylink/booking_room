"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(app)/add-product/page",{

/***/ "(app-pages-browser)/./src/hooks/product.js":
/*!******************************!*\
  !*** ./src/hooks/product.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useProduct: function() { return /* binding */ useProduct; }\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/axios */ \"(app-pages-browser)/./src/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\nvar _s = $RefreshSig$();\n\n\n\nconst useProduct = function() {\n    let { middleware, redirectIfAuthenticated } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const { data: product, error, mutate } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/product\", ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/product\").then((res)=>res.data).catch((error)=>{\n            if (error.response.status !== 409) throw error;\n        }));\n    const csrf = ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/sanctum/csrf-cookie\");\n    const createProduct = async (param)=>{\n        let { setErrors, setStatus, ...props } = param;\n        await csrf();\n        setErrors([]);\n        // setStatus(null)\n        console.log(props);\n        _lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/add-product\", props).then(()=>mutate()) //sau khi POST thành công, gọi hàm mutate() để cập nhật dữ liệu khi đăng kí thàng công\n        .catch((error)=>{\n            if (error.response.status !== 422) throw error;\n            setErrors(error.response.data.errors);\n        });\n    };\n    return {\n        product,\n        createProduct,\n        error,\n        mutate\n    };\n};\n_s(useProduct, \"69su/TzhMRq5loJn3UuvNRWFQpM=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams,\n        swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy9wcm9kdWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QjtBQUNPO0FBQ3VCO0FBRS9DLE1BQU1JLGFBQWE7UUFBQyxFQUFFQyxVQUFVLEVBQUVDLHVCQUF1QixFQUFFLG9FQUFHLENBQUM7O0lBQ2xFLE1BQU1DLFNBQVNKLDBEQUFTQTtJQUN4QixNQUFNSyxTQUFTTiwwREFBU0E7SUFDeEIsTUFBTSxFQUFFTyxNQUFNQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFLEdBQUdaLCtDQUFNQSxDQUFDLFlBQVksSUFDeERDLGtEQUFLQSxDQUNBWSxHQUFHLENBQUMsWUFDSkMsSUFBSSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJTixJQUFJLEVBQ3BCTyxLQUFLLENBQUNMLENBQUFBO1lBQ0gsSUFBSUEsTUFBTU0sUUFBUSxDQUFDQyxNQUFNLEtBQUssS0FBSyxNQUFNUDtRQUM3QztJQUVSLE1BQU1RLE9BQU8sSUFBTWxCLGtEQUFLQSxDQUFDWSxHQUFHLENBQUM7SUFDN0IsTUFBTU8sZ0JBQWdCO1lBQU8sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsT0FBTztRQUMzRCxNQUFNSjtRQUNORSxVQUFVLEVBQUU7UUFDWixrQkFBa0I7UUFDbEJHLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWnRCLGtEQUFLQSxDQUNBeUIsSUFBSSxDQUFDLGdCQUFnQkgsT0FDckJULElBQUksQ0FBQyxJQUFNRixVQUFVLHNGQUFzRjtTQUMzR0ksS0FBSyxDQUFDTCxDQUFBQTtZQUNILElBQUlBLE1BQU1NLFFBQVEsQ0FBQ0MsTUFBTSxLQUFLLEtBQUssTUFBTVA7WUFFekNVLFVBQVVWLE1BQU1NLFFBQVEsQ0FBQ1IsSUFBSSxDQUFDa0IsTUFBTTtRQUN4QztJQUNSO0lBQ0EsT0FBTztRQUNIakI7UUFDQVU7UUFDQVQ7UUFBT0M7SUFFWDtBQUNKLEVBQUM7R0FoQ1lSOztRQUNNRCxzREFBU0E7UUFDVEQsc0RBQVNBO1FBQ2lCRiwyQ0FBTUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3Byb2R1Y3QuanM/YTFiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ0AvbGliL2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMsIHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VQcm9kdWN0ID0gKHsgbWlkZGxld2FyZSwgcmVkaXJlY3RJZkF1dGhlbnRpY2F0ZWQgfSA9IHt9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKClcclxuICAgIGNvbnN0IHsgZGF0YTogcHJvZHVjdCwgZXJyb3IsIG11dGF0ZSB9ID0gdXNlU1dSKCcvcHJvZHVjdCcsICgpID0+XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldCgnL3Byb2R1Y3QnKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzICE9PSA0MDkpIHRocm93IGVycm9yXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgKVxyXG4gICAgY29uc3QgY3NyZiA9ICgpID0+IGF4aW9zLmdldCgnL3NhbmN0dW0vY3NyZi1jb29raWUnKVxyXG4gICAgY29uc3QgY3JlYXRlUHJvZHVjdCA9IGFzeW5jICh7IHNldEVycm9ycywgc2V0U3RhdHVzLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgICAgICAgYXdhaXQgY3NyZigpIFxyXG4gICAgICAgIHNldEVycm9ycyhbXSlcclxuICAgICAgICAvLyBzZXRTdGF0dXMobnVsbClcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLnBvc3QoJy9hZGQtcHJvZHVjdCcsIHByb3BzKSBcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gbXV0YXRlKCkpIC8vc2F1IGtoaSBQT1NUIHRow6BuaCBjw7RuZywgZ+G7jWkgaMOgbSBtdXRhdGUoKSDEkeG7gyBj4bqtcCBuaOG6rXQgZOG7ryBsaeG7h3Uga2hpIMSRxINuZyBrw60gdGjDoG5nIGPDtG5nXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzICE9PSA0MjIpIHRocm93IGVycm9yXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JzKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9kdWN0LFxyXG4gICAgICAgIGNyZWF0ZVByb2R1Y3QsXHJcbiAgICAgICAgZXJyb3IsIG11dGF0ZSxcclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsidXNlU1dSIiwiYXhpb3MiLCJ1c2VQYXJhbXMiLCJ1c2VSb3V0ZXIiLCJ1c2VQcm9kdWN0IiwibWlkZGxld2FyZSIsInJlZGlyZWN0SWZBdXRoZW50aWNhdGVkIiwicm91dGVyIiwicGFyYW1zIiwiZGF0YSIsInByb2R1Y3QiLCJlcnJvciIsIm11dGF0ZSIsImdldCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsInJlc3BvbnNlIiwic3RhdHVzIiwiY3NyZiIsImNyZWF0ZVByb2R1Y3QiLCJzZXRFcnJvcnMiLCJzZXRTdGF0dXMiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwiZXJyb3JzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/product.js\n"));

/***/ })

});