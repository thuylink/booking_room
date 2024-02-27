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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCategory: function() { return /* binding */ useCategory; }\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/axios */ \"(app-pages-browser)/./src/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\nvar _s = $RefreshSig$();\n\n\n\n\nconst useCategory = function() {\n    let { middleware, redirectIfAuthenticated } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n    const { data: category, error, mutate } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/category\", ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/category\").then((res)=>res.data).catch((error)=>{\n            if (error.response.status !== 409) throw error;\n        }));\n    const csrf = ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/sanctum/csrf-cookie\");\n    const createCategory = async (param)=>{\n        let { setErrors, setStatus, ...props } = param;\n        await csrf();\n        setErrors([]);\n        console.log(props);\n        _lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/add-category\", props).then(()=>mutate()) //sau khi POST thành công, gọi hàm mutate() để cập nhật dữ liệu khi đăng kí thàng công\n        .catch((error)=>{\n            if (error.response.status !== 422) throw error;\n            setErrors(error.response.data.errors);\n        });\n    };\n    // useEffect(() => {\n    //     if (middleware === 'guest' && redirectIfAuthenticated && user)\n    //         router.push(redirectIfAuthenticated)\n    //     if (\n    //         window.location.pathname === '/verify-email' &&\n    //         user?.email_verified_at\n    //     )\n    //         router.push(redirectIfAuthenticated)\n    //     if (middleware === 'auth' && error) logout()\n    // }, [user, error])\n    return {\n        category,\n        createCategory,\n        error,\n        mutate\n    };\n} /**\r\n * - tệp này chứa các hàm và custom hooks \r\n * liên quan đến xác thực và quản lý người dùng\r\n * - sử dụng hook useSWR từ thư viện swr \r\n * để thực hiện yêu cầu lấy dữ liệu từ server \r\n * - sử dụng hook useRouter và useParams từ thư viện\r\n * Nextjs để lấy thông tin về router và các tham số trong URL\r\n * - useAuth trả về đối tượng chứa các hàm và thông tin\r\n * liên quan đến xác thực và người dùng\r\n */ ;\n_s(useCategory, \"YhlAL9jcL0w0tzEeTwtBLoLjUSs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams,\n        swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy9jYXRlZ29yeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QjtBQUNPO0FBQ0U7QUFDcUI7QUFFL0MsTUFBTUssY0FBYztRQUFDLEVBQUVDLFVBQVUsRUFBRUMsdUJBQXVCLEVBQUUsb0VBQUcsQ0FBQzs7SUFDbkUsTUFBTUMsU0FBU0osMERBQVNBO0lBQ3hCLE1BQU1LLFNBQVNOLDBEQUFTQTtJQUd4QixNQUFNLEVBQUVPLE1BQU1DLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUUsR0FBR2IsK0NBQU1BLENBQUMsYUFBYSxJQUMxREMsa0RBQUtBLENBQ0FhLEdBQUcsQ0FBQyxhQUNKQyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlOLElBQUksRUFDcEJPLEtBQUssQ0FBQ0wsQ0FBQUE7WUFDSCxJQUFJQSxNQUFNTSxRQUFRLENBQUNDLE1BQU0sS0FBSyxLQUFLLE1BQU1QO1FBQzdDO0lBR1IsTUFBTVEsT0FBTyxJQUFNbkIsa0RBQUtBLENBQUNhLEdBQUcsQ0FBQztJQUU3QixNQUFNTyxpQkFBaUI7WUFBTyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxPQUFPO1FBQzVELE1BQU1KO1FBQ05FLFVBQVUsRUFBRTtRQUVaRyxRQUFRQyxHQUFHLENBQUNGO1FBRVp2QixrREFBS0EsQ0FFQTBCLElBQUksQ0FBQyxpQkFBaUJILE9BQ3RCVCxJQUFJLENBQUMsSUFBTUYsVUFBVSxzRkFBc0Y7U0FDM0dJLEtBQUssQ0FBQ0wsQ0FBQUE7WUFDSCxJQUFJQSxNQUFNTSxRQUFRLENBQUNDLE1BQU0sS0FBSyxLQUFLLE1BQU1QO1lBRXpDVSxVQUFVVixNQUFNTSxRQUFRLENBQUNSLElBQUksQ0FBQ2tCLE1BQU07UUFDeEM7SUFPUjtJQUVBLG9CQUFvQjtJQUNwQixxRUFBcUU7SUFDckUsK0NBQStDO0lBQy9DLFdBQVc7SUFDWCwwREFBMEQ7SUFDMUQsa0NBQWtDO0lBQ2xDLFFBQVE7SUFDUiwrQ0FBK0M7SUFDL0MsbURBQW1EO0lBQ25ELG9CQUFvQjtJQUVwQixPQUFPO1FBQ0hqQjtRQUNBVTtRQUNBVDtRQUFPQztJQUVYO0FBQ0osRUFHQTs7Ozs7Ozs7O0NBU0MsSUFaQTtHQXhEWVI7O1FBQ01ELHNEQUFTQTtRQUNURCxzREFBU0E7UUFHa0JILDJDQUFNQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvY2F0ZWdvcnkuanM/YTdiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ0AvbGliL2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUGFyYW1zLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ2F0ZWdvcnkgPSAoeyBtaWRkbGV3YXJlLCByZWRpcmVjdElmQXV0aGVudGljYXRlZCB9ID0ge30pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKVxyXG5cclxuICAgIFxyXG4gICAgY29uc3QgeyBkYXRhOiBjYXRlZ29yeSwgZXJyb3IsIG11dGF0ZSB9ID0gdXNlU1dSKCcvY2F0ZWdvcnknLCAoKSA9PlxyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoJy9jYXRlZ29yeScpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgIT09IDQwOSkgdGhyb3cgZXJyb3JcclxuICAgICAgICAgICAgfSksXHJcbiAgICApXHJcblxyXG4gICAgY29uc3QgY3NyZiA9ICgpID0+IGF4aW9zLmdldCgnL3NhbmN0dW0vY3NyZi1jb29raWUnKVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUNhdGVnb3J5ID0gYXN5bmMgKHsgc2V0RXJyb3JzLCBzZXRTdGF0dXMsIC4uLnByb3BzIH0pID0+IHtcclxuICAgICAgICBhd2FpdCBjc3JmKCkgXHJcbiAgICAgICAgc2V0RXJyb3JzKFtdKVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcblxyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC5wb3N0KCcvYWRkLWNhdGVnb3J5JywgcHJvcHMpIFxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiBtdXRhdGUoKSkgLy9zYXUga2hpIFBPU1QgdGjDoG5oIGPDtG5nLCBn4buNaSBow6BtIG11dGF0ZSgpIMSR4buDIGPhuq1wIG5o4bqtdCBk4buvIGxp4buHdSBraGkgxJHEg25nIGvDrSB0aMOgbmcgY8O0bmdcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgIT09IDQyMikgdGhyb3cgZXJyb3JcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcnMoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICAgIFxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBpZiAobWlkZGxld2FyZSA9PT0gJ2d1ZXN0JyAmJiByZWRpcmVjdElmQXV0aGVudGljYXRlZCAmJiB1c2VyKVxyXG4gICAgLy8gICAgICAgICByb3V0ZXIucHVzaChyZWRpcmVjdElmQXV0aGVudGljYXRlZClcclxuICAgIC8vICAgICBpZiAoXHJcbiAgICAvLyAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy92ZXJpZnktZW1haWwnICYmXHJcbiAgICAvLyAgICAgICAgIHVzZXI/LmVtYWlsX3ZlcmlmaWVkX2F0XHJcbiAgICAvLyAgICAgKVxyXG4gICAgLy8gICAgICAgICByb3V0ZXIucHVzaChyZWRpcmVjdElmQXV0aGVudGljYXRlZClcclxuICAgIC8vICAgICBpZiAobWlkZGxld2FyZSA9PT0gJ2F1dGgnICYmIGVycm9yKSBsb2dvdXQoKVxyXG4gICAgLy8gfSwgW3VzZXIsIGVycm9yXSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNhdGVnb3J5LFxyXG4gICAgICAgIGNyZWF0ZUNhdGVnb3J5LFxyXG4gICAgICAgIGVycm9yLCBtdXRhdGUsXHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiAtIHThu4dwIG7DoHkgY2jhu6lhIGPDoWMgaMOgbSB2w6AgY3VzdG9tIGhvb2tzIFxyXG4gKiBsacOqbiBxdWFuIMSR4bq/biB4w6FjIHRo4buxYyB2w6AgcXXhuqNuIGzDvSBuZ8aw4budaSBkw7luZ1xyXG4gKiAtIHPhu60gZOG7pW5nIGhvb2sgdXNlU1dSIHThu6sgdGjGsCB2aeG7h24gc3dyIFxyXG4gKiDEkeG7gyB0aOG7sWMgaGnhu4duIHnDqnUgY+G6p3UgbOG6pXkgZOG7ryBsaeG7h3UgdOG7qyBzZXJ2ZXIgXHJcbiAqIC0gc+G7rSBk4bulbmcgaG9vayB1c2VSb3V0ZXIgdsOgIHVzZVBhcmFtcyB04burIHRoxrAgdmnhu4duXHJcbiAqIE5leHRqcyDEkeG7gyBs4bqleSB0aMO0bmcgdGluIHbhu4Egcm91dGVyIHbDoCBjw6FjIHRoYW0gc+G7kSB0cm9uZyBVUkxcclxuICogLSB1c2VBdXRoIHRy4bqjIHbhu4EgxJHhu5FpIHTGsOG7o25nIGNo4bupYSBjw6FjIGjDoG0gdsOgIHRow7RuZyB0aW5cclxuICogbGnDqm4gcXVhbiDEkeG6v24geMOhYyB0aOG7sWMgdsOgIG5nxrDhu51pIGTDuW5nXHJcbiAqLyJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJheGlvcyIsInVzZUVmZmVjdCIsInVzZVBhcmFtcyIsInVzZVJvdXRlciIsInVzZUNhdGVnb3J5IiwibWlkZGxld2FyZSIsInJlZGlyZWN0SWZBdXRoZW50aWNhdGVkIiwicm91dGVyIiwicGFyYW1zIiwiZGF0YSIsImNhdGVnb3J5IiwiZXJyb3IiLCJtdXRhdGUiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJyZXNwb25zZSIsInN0YXR1cyIsImNzcmYiLCJjcmVhdGVDYXRlZ29yeSIsInNldEVycm9ycyIsInNldFN0YXR1cyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInBvc3QiLCJlcnJvcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/category.js\n"));

/***/ })

});