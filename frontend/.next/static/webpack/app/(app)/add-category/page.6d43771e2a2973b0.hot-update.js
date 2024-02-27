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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCategory: function() { return /* binding */ useCategory; }\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/axios */ \"(app-pages-browser)/./src/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\nvar _s = $RefreshSig$();\n\n\n\n\nconst useCategory = function() {\n    let { middleware, redirectIfAuthenticated } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n    const { data: category, error, mutate } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/category\", ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/category\").then((res)=>res.data).catch((error)=>{\n            if (error.response.status !== 409) throw error;\n        }));\n    const csrf = ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/sanctum/csrf-cookie\");\n    const createCategory = async (param)=>{\n        let { setErrors, setStatus, ...props } = param;\n        await csrf();\n        setErrors([]);\n        console.log(props);\n        _lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/add-category\", props).then(()=>mutate()).catch((error)=>{\n            if (error.response.status !== 422) throw error;\n            setErrors(error.response.data.errors);\n        });\n    };\n    return {\n        category,\n        createCategory,\n        error,\n        mutate\n    };\n} /**\r\n * - tệp này chứa các hàm và custom hooks \r\n * liên quan đến xác thực và quản lý người dùng\r\n * - sử dụng hook useSWR từ thư viện swr \r\n * để thực hiện yêu cầu lấy dữ liệu từ server \r\n * - sử dụng hook useRouter và useParams từ thư viện\r\n * Nextjs để lấy thông tin về router và các tham số trong URL\r\n * - useAuth trả về đối tượng chứa các hàm và thông tin\r\n * liên quan đến xác thực và người dùng\r\n */ ;\n_s(useCategory, \"YhlAL9jcL0w0tzEeTwtBLoLjUSs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams,\n        swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy9jYXRlZ29yeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QjtBQUNPO0FBQ0U7QUFDcUI7QUFFL0MsTUFBTUssY0FBYztRQUFDLEVBQUVDLFVBQVUsRUFBRUMsdUJBQXVCLEVBQUUsb0VBQUcsQ0FBQzs7SUFDbkUsTUFBTUMsU0FBU0osMERBQVNBO0lBQ3hCLE1BQU1LLFNBQVNOLDBEQUFTQTtJQUd4QixNQUFNLEVBQUVPLE1BQU1DLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUUsR0FBR2IsK0NBQU1BLENBQUMsYUFBYSxJQUMxREMsa0RBQUtBLENBQ0FhLEdBQUcsQ0FBQyxhQUNKQyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlOLElBQUksRUFDcEJPLEtBQUssQ0FBQ0wsQ0FBQUE7WUFDSCxJQUFJQSxNQUFNTSxRQUFRLENBQUNDLE1BQU0sS0FBSyxLQUFLLE1BQU1QO1FBQzdDO0lBR1IsTUFBTVEsT0FBTyxJQUFNbkIsa0RBQUtBLENBQUNhLEdBQUcsQ0FBQztJQUU3QixNQUFNTyxpQkFBaUI7WUFBTyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxPQUFPO1FBQzVELE1BQU1KO1FBQ05FLFVBQVUsRUFBRTtRQUVaRyxRQUFRQyxHQUFHLENBQUNGO1FBRVp2QixrREFBS0EsQ0FFQTBCLElBQUksQ0FBQyxpQkFBaUJILE9BQ3RCVCxJQUFJLENBQUMsSUFBTUYsVUFDWEksS0FBSyxDQUFDTCxDQUFBQTtZQUNILElBQUlBLE1BQU1NLFFBQVEsQ0FBQ0MsTUFBTSxLQUFLLEtBQUssTUFBTVA7WUFFekNVLFVBQVVWLE1BQU1NLFFBQVEsQ0FBQ1IsSUFBSSxDQUFDa0IsTUFBTTtRQUN4QztJQU9SO0lBRUEsT0FBTztRQUNIakI7UUFDQVU7UUFDQVQ7UUFBT0M7SUFFWDtBQUNKLEVBR0E7Ozs7Ozs7OztDQVNDLElBWkE7R0E3Q1lSOztRQUNNRCxzREFBU0E7UUFDVEQsc0RBQVNBO1FBR2tCSCwyQ0FBTUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL2NhdGVnb3J5LmpzP2E3YjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcbmltcG9ydCBheGlvcyBmcm9tICdAL2xpYi9heGlvcydcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVBhcmFtcywgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUNhdGVnb3J5ID0gKHsgbWlkZGxld2FyZSwgcmVkaXJlY3RJZkF1dGhlbnRpY2F0ZWQgfSA9IHt9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKClcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IHsgZGF0YTogY2F0ZWdvcnksIGVycm9yLCBtdXRhdGUgfSA9IHVzZVNXUignL2NhdGVnb3J5JywgKCkgPT5cclxuICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAuZ2V0KCcvY2F0ZWdvcnknKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzICE9PSA0MDkpIHRocm93IGVycm9yXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IGNzcmYgPSAoKSA9PiBheGlvcy5nZXQoJy9zYW5jdHVtL2NzcmYtY29va2llJylcclxuXHJcbiAgICBjb25zdCBjcmVhdGVDYXRlZ29yeSA9IGFzeW5jICh7IHNldEVycm9ycywgc2V0U3RhdHVzLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgICAgICAgYXdhaXQgY3NyZigpIFxyXG4gICAgICAgIHNldEVycm9ycyhbXSlcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvcHMpO1xyXG5cclxuICAgICAgICBheGlvc1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAucG9zdCgnL2FkZC1jYXRlZ29yeScsIHByb3BzKSBcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gbXV0YXRlKCkpIFxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyAhPT0gNDIyKSB0aHJvdyBlcnJvclxyXG5cclxuICAgICAgICAgICAgICAgIHNldEVycm9ycyhlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycylcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG5cclxuICAgICAgXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNhdGVnb3J5LFxyXG4gICAgICAgIGNyZWF0ZUNhdGVnb3J5LFxyXG4gICAgICAgIGVycm9yLCBtdXRhdGUsXHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiAtIHThu4dwIG7DoHkgY2jhu6lhIGPDoWMgaMOgbSB2w6AgY3VzdG9tIGhvb2tzIFxyXG4gKiBsacOqbiBxdWFuIMSR4bq/biB4w6FjIHRo4buxYyB2w6AgcXXhuqNuIGzDvSBuZ8aw4budaSBkw7luZ1xyXG4gKiAtIHPhu60gZOG7pW5nIGhvb2sgdXNlU1dSIHThu6sgdGjGsCB2aeG7h24gc3dyIFxyXG4gKiDEkeG7gyB0aOG7sWMgaGnhu4duIHnDqnUgY+G6p3UgbOG6pXkgZOG7ryBsaeG7h3UgdOG7qyBzZXJ2ZXIgXHJcbiAqIC0gc+G7rSBk4bulbmcgaG9vayB1c2VSb3V0ZXIgdsOgIHVzZVBhcmFtcyB04burIHRoxrAgdmnhu4duXHJcbiAqIE5leHRqcyDEkeG7gyBs4bqleSB0aMO0bmcgdGluIHbhu4Egcm91dGVyIHbDoCBjw6FjIHRoYW0gc+G7kSB0cm9uZyBVUkxcclxuICogLSB1c2VBdXRoIHRy4bqjIHbhu4EgxJHhu5FpIHTGsOG7o25nIGNo4bupYSBjw6FjIGjDoG0gdsOgIHRow7RuZyB0aW5cclxuICogbGnDqm4gcXVhbiDEkeG6v24geMOhYyB0aOG7sWMgdsOgIG5nxrDhu51pIGTDuW5nXHJcbiAqLyJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJheGlvcyIsInVzZUVmZmVjdCIsInVzZVBhcmFtcyIsInVzZVJvdXRlciIsInVzZUNhdGVnb3J5IiwibWlkZGxld2FyZSIsInJlZGlyZWN0SWZBdXRoZW50aWNhdGVkIiwicm91dGVyIiwicGFyYW1zIiwiZGF0YSIsImNhdGVnb3J5IiwiZXJyb3IiLCJtdXRhdGUiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJyZXNwb25zZSIsInN0YXR1cyIsImNzcmYiLCJjcmVhdGVDYXRlZ29yeSIsInNldEVycm9ycyIsInNldFN0YXR1cyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInBvc3QiLCJlcnJvcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/category.js\n"));

/***/ })

});