"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(app)/add-category/page",{

/***/ "(app-pages-browser)/./src/hooks/category.js":
/*!*******************************!*\
  !*** ./src/hooks/category.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCategory: function() { return /* binding */ useCategory; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/axios */ \"(app-pages-browser)/./src/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nconst useCategory = function() {\n    let { middleware, redirectIfAuthenticated } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};\n    _s();\n    var _s1 = $RefreshSig$();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n    const { data: category, error, mutate } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"/category\", ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/category\").then((res)=>res.data).catch((error)=>{\n            if (error.response.status !== 409) throw error;\n        }));\n    const csrf = ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/sanctum/csrf-cookie\");\n    const createCategory = async (param)=>{\n        let { setErrors, setStatus, ...props } = param;\n        await csrf();\n        setErrors([]);\n        console.log(props);\n        _lib_axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/add-category\", props).then(()=>mutate()).catch((error)=>{\n            if (error.response.status !== 422) throw error;\n            setErrors(error.response.data.errors);\n        });\n    };\n    const listCategory = ()=>{\n        _s1();\n        const { category, error } = useCategory();\n        if (error) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\hooks\\\\category.js\",\n                lineNumber: 38,\n                columnNumber: 20\n            }, _this);\n        }\n    };\n    _s1(listCategory, \"zPDqHNX0ulIjPGa6U3mr5Js+FCc=\", false, function() {\n        return [\n            useCategory\n        ];\n    });\n    return {\n        category,\n        createCategory,\n        error,\n        mutate\n    };\n};\n_s(useCategory, \"YhlAL9jcL0w0tzEeTwtBLoLjUSs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams,\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy9jYXRlZ29yeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0I7QUFDTztBQUN1QjtBQUUvQyxNQUFNSSxjQUFjO1FBQUMsRUFBRUMsVUFBVSxFQUFFQyx1QkFBdUIsRUFBRSxvRUFBRyxDQUFDOzs7SUFDbkUsTUFBTUMsU0FBU0osMERBQVNBO0lBQ3hCLE1BQU1LLFNBQVNOLDBEQUFTQTtJQUV4QixNQUFNLEVBQUVPLE1BQU1DLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUUsR0FBR1osK0NBQU1BLENBQUMsYUFBYSxJQUMxREMsa0RBQUtBLENBQ0FZLEdBQUcsQ0FBQyxhQUNKQyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlOLElBQUksRUFDcEJPLEtBQUssQ0FBQ0wsQ0FBQUE7WUFDSCxJQUFJQSxNQUFNTSxRQUFRLENBQUNDLE1BQU0sS0FBSyxLQUFLLE1BQU1QO1FBQzdDO0lBR1IsTUFBTVEsT0FBTyxJQUFNbEIsa0RBQUtBLENBQUNZLEdBQUcsQ0FBQztJQUU3QixNQUFNTyxpQkFBaUI7WUFBTyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxPQUFPO1FBQzVELE1BQU1KO1FBQ05FLFVBQVUsRUFBRTtRQUNaRyxRQUFRQyxHQUFHLENBQUNGO1FBQ1p0QixrREFBS0EsQ0FDQXlCLElBQUksQ0FBQyxpQkFBaUJILE9BQ3RCVCxJQUFJLENBQUMsSUFBTUYsVUFDWEksS0FBSyxDQUFDTCxDQUFBQTtZQUNILElBQUlBLE1BQU1NLFFBQVEsQ0FBQ0MsTUFBTSxLQUFLLEtBQUssTUFBTVA7WUFFekNVLFVBQVVWLE1BQU1NLFFBQVEsQ0FBQ1IsSUFBSSxDQUFDa0IsTUFBTTtRQUN4QztJQUNSO0lBR0EsTUFBTUMsZUFBZTs7UUFDakIsTUFBTSxFQUFDbEIsUUFBUSxFQUFFQyxLQUFLLEVBQUMsR0FBR1A7UUFDMUIsSUFBSU8sT0FBTztZQUNQLHFCQUFPLDhEQUFDa0I7Ozs7O1FBQ1o7SUFDSjtRQUxNRDs7WUFDd0J4Qjs7O0lBTTlCLE9BQU87UUFDSE07UUFDQVU7UUFDQVQ7UUFDQUM7SUFDSjtBQUNKLEVBQUM7R0EzQ1lSOztRQUNNRCxzREFBU0E7UUFDVEQsc0RBQVNBO1FBRWtCRiwyQ0FBTUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL2NhdGVnb3J5LmpzP2E3YjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcbmltcG9ydCBheGlvcyBmcm9tICdAL2xpYi9heGlvcydcclxuaW1wb3J0IHsgdXNlUGFyYW1zLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ2F0ZWdvcnkgPSAoeyBtaWRkbGV3YXJlLCByZWRpcmVjdElmQXV0aGVudGljYXRlZCB9ID0ge30pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogY2F0ZWdvcnksIGVycm9yLCBtdXRhdGUgfSA9IHVzZVNXUignL2NhdGVnb3J5JywgKCkgPT5cclxuICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAuZ2V0KCcvY2F0ZWdvcnknKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzICE9PSA0MDkpIHRocm93IGVycm9yXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IGNzcmYgPSAoKSA9PiBheGlvcy5nZXQoJy9zYW5jdHVtL2NzcmYtY29va2llJylcclxuXHJcbiAgICBjb25zdCBjcmVhdGVDYXRlZ29yeSA9IGFzeW5jICh7IHNldEVycm9ycywgc2V0U3RhdHVzLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgICAgICAgYXdhaXQgY3NyZigpIFxyXG4gICAgICAgIHNldEVycm9ycyhbXSlcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLnBvc3QoJy9hZGQtY2F0ZWdvcnknLCBwcm9wcykgXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IG11dGF0ZSgpKSBcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgIT09IDQyMikgdGhyb3cgZXJyb3JcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcnMoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGxpc3RDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7Y2F0ZWdvcnksIGVycm9yfSA9IHVzZUNhdGVnb3J5KClcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxwPjwvcD5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICBjcmVhdGVDYXRlZ29yeSxcclxuICAgICAgICBlcnJvciwgXHJcbiAgICAgICAgbXV0YXRlLFxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInVzZVNXUiIsImF4aW9zIiwidXNlUGFyYW1zIiwidXNlUm91dGVyIiwidXNlQ2F0ZWdvcnkiLCJtaWRkbGV3YXJlIiwicmVkaXJlY3RJZkF1dGhlbnRpY2F0ZWQiLCJyb3V0ZXIiLCJwYXJhbXMiLCJkYXRhIiwiY2F0ZWdvcnkiLCJlcnJvciIsIm11dGF0ZSIsImdldCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsInJlc3BvbnNlIiwic3RhdHVzIiwiY3NyZiIsImNyZWF0ZUNhdGVnb3J5Iiwic2V0RXJyb3JzIiwic2V0U3RhdHVzIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsImVycm9ycyIsImxpc3RDYXRlZ29yeSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/category.js\n"));

/***/ })

});