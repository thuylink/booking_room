"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(app)/all-category/page",{

/***/ "(app-pages-browser)/./src/hooks/category.js":
/*!*******************************!*\
  !*** ./src/hooks/category.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCategory: function() { return /* binding */ useCategory; }\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/axios */ \"(app-pages-browser)/./src/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\nvar _s = $RefreshSig$();\n\n\n\nconst useCategory = function() {\n    let { middleware, redirectIfAuthenticated } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const { data: category, error, mutate } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/category\", ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/category\").then((res)=>res.data).catch((error)=>{\n            if (error.response.status !== 409) throw error;\n        }));\n    const csrf = ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/sanctum/csrf-cookie\");\n    const createCategory = async (param)=>{\n        let { formData, setErrors, setStatus } = param;\n        await csrf();\n        setErrors([]);\n        console.log(props);\n        _lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/add-category\", props).then(()=>mutate()).catch((error)=>{\n            if (error.response.status !== 422) throw error;\n            setErrors(error.response.data.errors);\n        });\n    };\n    // const createCategory = async ({ formData, setErrors, setStatus }) => {\n    //     await csrf();\n    //     setErrors([]);\n    //     axios\n    //         .post('/add-category', formData)\n    //         .then(() => mutate())\n    //         .catch((error) => {\n    //             if (error.response && error.response.status !== 422) throw error;\n    //             setErrors(error.response.data.errors);\n    //         });\n    // };\n    return {\n        category,\n        createCategory,\n        // listCategory,\n        error,\n        mutate\n    };\n};\n_s(useCategory, \"YhlAL9jcL0w0tzEeTwtBLoLjUSs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams,\n        swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy9jYXRlZ29yeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0I7QUFDTztBQUN1QjtBQUUvQyxNQUFNSSxjQUFjO1FBQUMsRUFBRUMsVUFBVSxFQUFFQyx1QkFBdUIsRUFBRSxvRUFBRyxDQUFDOztJQUNuRSxNQUFNQyxTQUFTSiwwREFBU0E7SUFDeEIsTUFBTUssU0FBU04sMERBQVNBO0lBRXhCLE1BQU0sRUFBRU8sTUFBTUMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRSxHQUFHWiwrQ0FBTUEsQ0FBQyxhQUFhLElBQzFEQyxrREFBS0EsQ0FDQVksR0FBRyxDQUFDLGFBQ0pDLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSU4sSUFBSSxFQUNwQk8sS0FBSyxDQUFDTCxDQUFBQTtZQUNILElBQUlBLE1BQU1NLFFBQVEsQ0FBQ0MsTUFBTSxLQUFLLEtBQUssTUFBTVA7UUFDN0M7SUFHUixNQUFNUSxPQUFPLElBQU1sQixrREFBS0EsQ0FBQ1ksR0FBRyxDQUFDO0lBRTdCLE1BQU1PLGlCQUFpQjtZQUFPLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUc7UUFDN0QsTUFBTUo7UUFDTkcsVUFBVSxFQUFFO1FBQ1pFLFFBQVFDLEdBQUcsQ0FBQ0M7UUFDWnpCLGtEQUFLQSxDQUNBMEIsSUFBSSxDQUFDLGlCQUFpQkQsT0FDdEJaLElBQUksQ0FBQyxJQUFNRixVQUNYSSxLQUFLLENBQUNMLENBQUFBO1lBQ0gsSUFBSUEsTUFBTU0sUUFBUSxDQUFDQyxNQUFNLEtBQUssS0FBSyxNQUFNUDtZQUV6Q1csVUFBVVgsTUFBTU0sUUFBUSxDQUFDUixJQUFJLENBQUNtQixNQUFNO1FBQ3hDO0lBQ1I7SUFDQSx5RUFBeUU7SUFDekUsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUVyQixZQUFZO0lBQ1osMkNBQTJDO0lBQzNDLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsZ0ZBQWdGO0lBRWhGLHFEQUFxRDtJQUNyRCxjQUFjO0lBQ2QsS0FBSztJQUlMLE9BQU87UUFDSGxCO1FBQ0FVO1FBQ0EsZ0JBQWdCO1FBQ2hCVDtRQUNBQztJQUNKO0FBQ0osRUFBQztHQW5EWVI7O1FBQ01ELHNEQUFTQTtRQUNURCxzREFBU0E7UUFFa0JGLDJDQUFNQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvY2F0ZWdvcnkuanM/YTdiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ0AvbGliL2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMsIHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDYXRlZ29yeSA9ICh7IG1pZGRsZXdhcmUsIHJlZGlyZWN0SWZBdXRoZW50aWNhdGVkIH0gPSB7fSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpXHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBjYXRlZ29yeSwgZXJyb3IsIG11dGF0ZSB9ID0gdXNlU1dSKCcvY2F0ZWdvcnknLCAoKSA9PlxyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoJy9jYXRlZ29yeScpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgIT09IDQwOSkgdGhyb3cgZXJyb3JcclxuICAgICAgICAgICAgfSksXHJcbiAgICApXHJcblxyXG4gICAgY29uc3QgY3NyZiA9ICgpID0+IGF4aW9zLmdldCgnL3NhbmN0dW0vY3NyZi1jb29raWUnKVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUNhdGVnb3J5ID0gYXN5bmMgKHsgZm9ybURhdGEsIHNldEVycm9ycywgc2V0U3RhdHVzLCB9KSA9PiB7XHJcbiAgICAgICAgYXdhaXQgY3NyZigpXHJcbiAgICAgICAgc2V0RXJyb3JzKFtdKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzKVxyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5wb3N0KCcvYWRkLWNhdGVnb3J5JywgcHJvcHMpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IG11dGF0ZSgpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyAhPT0gNDIyKSB0aHJvdyBlcnJvclxyXG5cclxuICAgICAgICAgICAgICAgIHNldEVycm9ycyhlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycylcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8vIGNvbnN0IGNyZWF0ZUNhdGVnb3J5ID0gYXN5bmMgKHsgZm9ybURhdGEsIHNldEVycm9ycywgc2V0U3RhdHVzIH0pID0+IHtcclxuICAgIC8vICAgICBhd2FpdCBjc3JmKCk7XHJcbiAgICAvLyAgICAgc2V0RXJyb3JzKFtdKTtcclxuICAgIFxyXG4gICAgLy8gICAgIGF4aW9zXHJcbiAgICAvLyAgICAgICAgIC5wb3N0KCcvYWRkLWNhdGVnb3J5JywgZm9ybURhdGEpXHJcbiAgICAvLyAgICAgICAgIC50aGVuKCgpID0+IG11dGF0ZSgpKVxyXG4gICAgLy8gICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2Uuc3RhdHVzICE9PSA0MjIpIHRocm93IGVycm9yO1xyXG4gICAgXHJcbiAgICAvLyAgICAgICAgICAgICBzZXRFcnJvcnMoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vIH07XHJcblxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICBjcmVhdGVDYXRlZ29yeSxcclxuICAgICAgICAvLyBsaXN0Q2F0ZWdvcnksXHJcbiAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgbXV0YXRlLFxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJheGlvcyIsInVzZVBhcmFtcyIsInVzZVJvdXRlciIsInVzZUNhdGVnb3J5IiwibWlkZGxld2FyZSIsInJlZGlyZWN0SWZBdXRoZW50aWNhdGVkIiwicm91dGVyIiwicGFyYW1zIiwiZGF0YSIsImNhdGVnb3J5IiwiZXJyb3IiLCJtdXRhdGUiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJyZXNwb25zZSIsInN0YXR1cyIsImNzcmYiLCJjcmVhdGVDYXRlZ29yeSIsImZvcm1EYXRhIiwic2V0RXJyb3JzIiwic2V0U3RhdHVzIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwicG9zdCIsImVycm9ycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/category.js\n"));

/***/ })

});