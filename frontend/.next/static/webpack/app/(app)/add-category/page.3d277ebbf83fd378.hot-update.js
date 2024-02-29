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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCategory: function() { return /* binding */ useCategory; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/axios */ \"(app-pages-browser)/./src/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nconst useCategory = function() {\n    let { middleware, redirectIfAuthenticated } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};\n    _s();\n    var _s1 = $RefreshSig$();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n    const { data: category, error, mutate } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"/category\", ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/category\").then((res)=>res.data).catch((error)=>{\n            if (error.response.status !== 409) throw error;\n        }));\n    const csrf = ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/sanctum/csrf-cookie\");\n    const createCategory = async (param)=>{\n        let { setErrors, setStatus, ...props } = param;\n        await csrf();\n        setErrors([]);\n        console.log(props);\n        _lib_axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/add-category\", props).then(()=>mutate()).catch((error)=>{\n            if (error.response.status !== 422) throw error;\n            setErrors(error.response.data.errors);\n        });\n    };\n    const listCategory = ()=>{\n        _s1();\n        const { category, error } = useCategory();\n        if (error) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Kh\\xf4ng thể hiển thị danh s\\xe1ch c\\xe1c danh mục\"\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\hooks\\\\category.js\",\n                lineNumber: 38,\n                columnNumber: 20\n            }, _this);\n        }\n        if (!category) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\hooks\\\\category.js\",\n                lineNumber: 42,\n                columnNumber: 20\n            }, _this);\n        }\n        if (category.length == 0) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Kh\\xf4ng t\\xecm thấy danh mục n\\xe0o\"\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\hooks\\\\category.js\",\n                lineNumber: 46,\n                columnNumber: 20\n            }, _this);\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: category\n        }, void 0, false, {\n            fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\hooks\\\\category.js\",\n            lineNumber: 50,\n            columnNumber: 13\n        }, _this);\n    };\n    _s1(listCategory, \"zPDqHNX0ulIjPGa6U3mr5Js+FCc=\", false, function() {\n        return [\n            useCategory\n        ];\n    });\n    return {\n        category,\n        createCategory,\n        error,\n        mutate\n    };\n};\n_s(useCategory, \"YhlAL9jcL0w0tzEeTwtBLoLjUSs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams,\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy9jYXRlZ29yeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0I7QUFDTztBQUN1QjtBQUUvQyxNQUFNSSxjQUFjO1FBQUMsRUFBRUMsVUFBVSxFQUFFQyx1QkFBdUIsRUFBRSxvRUFBRyxDQUFDOzs7SUFDbkUsTUFBTUMsU0FBU0osMERBQVNBO0lBQ3hCLE1BQU1LLFNBQVNOLDBEQUFTQTtJQUV4QixNQUFNLEVBQUVPLE1BQU1DLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUUsR0FBR1osK0NBQU1BLENBQUMsYUFBYSxJQUMxREMsa0RBQUtBLENBQ0FZLEdBQUcsQ0FBQyxhQUNKQyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlOLElBQUksRUFDcEJPLEtBQUssQ0FBQ0wsQ0FBQUE7WUFDSCxJQUFJQSxNQUFNTSxRQUFRLENBQUNDLE1BQU0sS0FBSyxLQUFLLE1BQU1QO1FBQzdDO0lBR1IsTUFBTVEsT0FBTyxJQUFNbEIsa0RBQUtBLENBQUNZLEdBQUcsQ0FBQztJQUU3QixNQUFNTyxpQkFBaUI7WUFBTyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxPQUFPO1FBQzVELE1BQU1KO1FBQ05FLFVBQVUsRUFBRTtRQUNaRyxRQUFRQyxHQUFHLENBQUNGO1FBQ1p0QixrREFBS0EsQ0FDQXlCLElBQUksQ0FBQyxpQkFBaUJILE9BQ3RCVCxJQUFJLENBQUMsSUFBTUYsVUFDWEksS0FBSyxDQUFDTCxDQUFBQTtZQUNILElBQUlBLE1BQU1NLFFBQVEsQ0FBQ0MsTUFBTSxLQUFLLEtBQUssTUFBTVA7WUFFekNVLFVBQVVWLE1BQU1NLFFBQVEsQ0FBQ1IsSUFBSSxDQUFDa0IsTUFBTTtRQUN4QztJQUNSO0lBR0EsTUFBTUMsZUFBZTs7UUFDakIsTUFBTSxFQUFDbEIsUUFBUSxFQUFFQyxLQUFLLEVBQUMsR0FBR1A7UUFDMUIsSUFBSU8sT0FBTztZQUNQLHFCQUFPLDhEQUFDa0I7MEJBQUU7Ozs7OztRQUNkO1FBRUEsSUFBSSxDQUFDbkIsVUFBVTtZQUNYLHFCQUFPLDhEQUFDbUI7MEJBQUU7Ozs7OztRQUNkO1FBRUEsSUFBSW5CLFNBQVNvQixNQUFNLElBQUksR0FBRztZQUN0QixxQkFBTyw4REFBQ0Q7MEJBQUU7Ozs7OztRQUNkO1FBRUEscUJBQ0ksOERBQUNFO3NCQUNJckI7Ozs7OztJQUdiO1FBbkJNa0I7O1lBQ3dCeEI7OztJQW9COUIsT0FBTztRQUNITTtRQUNBVTtRQUNBVDtRQUNBQztJQUNKO0FBQ0osRUFBQztHQXpEWVI7O1FBQ01ELHNEQUFTQTtRQUNURCxzREFBU0E7UUFFa0JGLDJDQUFNQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvY2F0ZWdvcnkuanM/YTdiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ0AvbGliL2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMsIHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDYXRlZ29yeSA9ICh7IG1pZGRsZXdhcmUsIHJlZGlyZWN0SWZBdXRoZW50aWNhdGVkIH0gPSB7fSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpXHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBjYXRlZ29yeSwgZXJyb3IsIG11dGF0ZSB9ID0gdXNlU1dSKCcvY2F0ZWdvcnknLCAoKSA9PlxyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoJy9jYXRlZ29yeScpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgIT09IDQwOSkgdGhyb3cgZXJyb3JcclxuICAgICAgICAgICAgfSksXHJcbiAgICApXHJcblxyXG4gICAgY29uc3QgY3NyZiA9ICgpID0+IGF4aW9zLmdldCgnL3NhbmN0dW0vY3NyZi1jb29raWUnKVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUNhdGVnb3J5ID0gYXN5bmMgKHsgc2V0RXJyb3JzLCBzZXRTdGF0dXMsIC4uLnByb3BzIH0pID0+IHtcclxuICAgICAgICBhd2FpdCBjc3JmKCkgXHJcbiAgICAgICAgc2V0RXJyb3JzKFtdKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAucG9zdCgnL2FkZC1jYXRlZ29yeScsIHByb3BzKSBcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gbXV0YXRlKCkpIFxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyAhPT0gNDIyKSB0aHJvdyBlcnJvclxyXG5cclxuICAgICAgICAgICAgICAgIHNldEVycm9ycyhlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycylcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgbGlzdENhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtjYXRlZ29yeSwgZXJyb3J9ID0gdXNlQ2F0ZWdvcnkoKVxyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gPHA+S2jDtG5nIHRo4buDIGhp4buDbiB0aOG7iyBkYW5oIHPDoWNoIGPDoWMgZGFuaCBt4bulYzwvcD5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2F0ZWdvcnkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxwPktow7RuZyB0w6xtIHRo4bqleSBkYW5oIG3hu6VjIG7DoG88L3A+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2F0ZWdvcnksXHJcbiAgICAgICAgY3JlYXRlQ2F0ZWdvcnksXHJcbiAgICAgICAgZXJyb3IsIFxyXG4gICAgICAgIG11dGF0ZSxcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJheGlvcyIsInVzZVBhcmFtcyIsInVzZVJvdXRlciIsInVzZUNhdGVnb3J5IiwibWlkZGxld2FyZSIsInJlZGlyZWN0SWZBdXRoZW50aWNhdGVkIiwicm91dGVyIiwicGFyYW1zIiwiZGF0YSIsImNhdGVnb3J5IiwiZXJyb3IiLCJtdXRhdGUiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJyZXNwb25zZSIsInN0YXR1cyIsImNzcmYiLCJjcmVhdGVDYXRlZ29yeSIsInNldEVycm9ycyIsInNldFN0YXR1cyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInBvc3QiLCJlcnJvcnMiLCJsaXN0Q2F0ZWdvcnkiLCJwIiwibGVuZ3RoIiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/category.js\n"));

/***/ })

});