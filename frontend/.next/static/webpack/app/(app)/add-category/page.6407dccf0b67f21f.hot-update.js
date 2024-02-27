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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCategory: function() { return /* binding */ useCategory; }\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/axios */ \"(app-pages-browser)/./src/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\nvar _s = $RefreshSig$();\n\n\n\n\nconst useCategory = function() {\n    let { middleware, redirectIfAuthenticated } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n    const { data: category, error, mutate } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/category\", ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/category\").then((res)=>res.data).catch((error)=>{\n            if (error.response.status !== 409) throw error;\n        // router.push('/verify-email')\n        }));\n    const csrf = ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/sanctum/csrf-cookie\");\n    /* \r\n    hàm register xử lý quá trình đky ng dùng\r\n    gửi yc POST/register với thông tin người dùng và sau đó cập nhât dữ liệu người dùng\r\n    nhận đối tượng có các thuộc tính, trong đó setErrors là hàm \r\n    để thiết lập lỗi và ...props là cách để truyền các thuộc tính vào hàm\r\n    */ const createCategory = async (param)=>{\n        let { setErrors, setStatus, ...props } = param;\n        await csrf() //hàm đảm bảo mã được gửi kèm yêu câu POST\n        ;\n        // setLoading(true);\n        setErrors([]);\n        setStatus(null);\n        console.log(props);\n        _lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/add-category\", props).then(()=>mutate()) //sau khi POST thành công, gọi hàm mutate() để cập nhật dữ liệu khi đăng kí thàng công\n        .catch((error)=>{\n            if (error.response.status !== 422) throw error;\n            setErrors(error.response.data.errors);\n        });\n    };\n    return {\n        category,\n        createCategory,\n        error,\n        mutate\n    };\n} /**\r\n * - tệp này chứa các hàm và custom hooks \r\n * liên quan đến xác thực và quản lý người dùng\r\n * - sử dụng hook useSWR từ thư viện swr \r\n * để thực hiện yêu cầu lấy dữ liệu từ server \r\n * - sử dụng hook useRouter và useParams từ thư viện\r\n * Nextjs để lấy thông tin về router và các tham số trong URL\r\n * - useAuth trả về đối tượng chứa các hàm và thông tin\r\n * liên quan đến xác thực và người dùng\r\n */ ;\n_s(useCategory, \"YhlAL9jcL0w0tzEeTwtBLoLjUSs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams,\n        swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy9jYXRlZ29yeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QjtBQUNPO0FBQ0U7QUFDcUI7QUFFL0MsTUFBTUssY0FBYztRQUFDLEVBQUVDLFVBQVUsRUFBRUMsdUJBQXVCLEVBQUUsb0VBQUcsQ0FBQzs7SUFDbkUsTUFBTUMsU0FBU0osMERBQVNBO0lBQ3hCLE1BQU1LLFNBQVNOLDBEQUFTQTtJQUd4QixNQUFNLEVBQUVPLE1BQU1DLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUUsR0FBR2IsK0NBQU1BLENBQUMsYUFBYSxJQUMxREMsa0RBQUtBLENBQ0FhLEdBQUcsQ0FBQyxhQUNKQyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlOLElBQUksRUFDcEJPLEtBQUssQ0FBQ0wsQ0FBQUE7WUFDSCxJQUFJQSxNQUFNTSxRQUFRLENBQUNDLE1BQU0sS0FBSyxLQUFLLE1BQU1QO1FBRXpDLCtCQUErQjtRQUNuQztJQUdSLE1BQU1RLE9BQU8sSUFBTW5CLGtEQUFLQSxDQUFDYSxHQUFHLENBQUM7SUFJN0I7Ozs7O0lBS0EsR0FFQSxNQUFNTyxpQkFBaUI7WUFBTyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxPQUFPO1FBQzVELE1BQU1KLE9BQU8sMENBQTBDOztRQUV2RCxvQkFBb0I7UUFDcEJFLFVBQVUsRUFBRTtRQUNaQyxVQUFVO1FBR1ZFLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFFWnZCLGtEQUFLQSxDQUVBMEIsSUFBSSxDQUFDLGlCQUFpQkgsT0FDdEJULElBQUksQ0FBQyxJQUFNRixVQUFVLHNGQUFzRjtTQUMzR0ksS0FBSyxDQUFDTCxDQUFBQTtZQUNILElBQUlBLE1BQU1NLFFBQVEsQ0FBQ0MsTUFBTSxLQUFLLEtBQUssTUFBTVA7WUFFekNVLFVBQVVWLE1BQU1NLFFBQVEsQ0FBQ1IsSUFBSSxDQUFDa0IsTUFBTTtRQUN4QztJQU9SO0lBR0EsT0FBTztRQUNIakI7UUFDQVU7UUFDQVQ7UUFBT0M7SUFFWDtBQUNKLEVBR0E7Ozs7Ozs7OztDQVNDLElBWkE7R0E3RFlSOztRQUNNRCxzREFBU0E7UUFDVEQsc0RBQVNBO1FBR2tCSCwyQ0FBTUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL2NhdGVnb3J5LmpzP2E3YjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcbmltcG9ydCBheGlvcyBmcm9tICdAL2xpYi9heGlvcydcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVBhcmFtcywgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUNhdGVnb3J5ID0gKHsgbWlkZGxld2FyZSwgcmVkaXJlY3RJZkF1dGhlbnRpY2F0ZWQgfSA9IHt9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKClcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IHsgZGF0YTogY2F0ZWdvcnksIGVycm9yLCBtdXRhdGUgfSA9IHVzZVNXUignL2NhdGVnb3J5JywgKCkgPT5cclxuICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAuZ2V0KCcvY2F0ZWdvcnknKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzICE9PSA0MDkpIHRocm93IGVycm9yXHJcbiBcclxuICAgICAgICAgICAgICAgIC8vIHJvdXRlci5wdXNoKCcvdmVyaWZ5LWVtYWlsJylcclxuICAgICAgICAgICAgfSksXHJcbiAgICApXHJcbiAgIFxyXG4gICAgY29uc3QgY3NyZiA9ICgpID0+IGF4aW9zLmdldCgnL3NhbmN0dW0vY3NyZi1jb29raWUnKVxyXG5cclxuICAgIFxyXG5cclxuICAgIC8qIFxyXG4gICAgaMOgbSByZWdpc3RlciB44butIGzDvSBxdcOhIHRyw6xuaCDEkWt5IG5nIGTDuW5nXHJcbiAgICBn4butaSB5YyBQT1NUL3JlZ2lzdGVyIHbhu5tpIHRow7RuZyB0aW4gbmfGsOG7nWkgZMO5bmcgdsOgIHNhdSDEkcOzIGPhuq1wIG5ow6J0IGThu68gbGnhu4d1IG5nxrDhu51pIGTDuW5nXHJcbiAgICBuaOG6rW4gxJHhu5FpIHTGsOG7o25nIGPDsyBjw6FjIHRodeG7mWMgdMOtbmgsIHRyb25nIMSRw7Mgc2V0RXJyb3JzIGzDoCBow6BtIFxyXG4gICAgxJHhu4MgdGhp4bq/dCBs4bqtcCBs4buXaSB2w6AgLi4ucHJvcHMgbMOgIGPDoWNoIMSR4buDIHRydXnhu4FuIGPDoWMgdGh14buZYyB0w61uaCB2w6BvIGjDoG1cclxuICAgICovIFxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUNhdGVnb3J5ID0gYXN5bmMgKHsgc2V0RXJyb3JzLCBzZXRTdGF0dXMsIC4uLnByb3BzIH0pID0+IHtcclxuICAgICAgICBhd2FpdCBjc3JmKCkgLy9ow6BtIMSR4bqjbSBi4bqjbyBtw6MgxJHGsOG7o2MgZ+G7rWkga8OobSB5w6p1IGPDonUgUE9TVFxyXG5cclxuICAgICAgICAvLyBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHNldEVycm9ycyhbXSlcclxuICAgICAgICBzZXRTdGF0dXMobnVsbClcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzKTtcclxuXHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICBcclxuICAgICAgICAgICAgLnBvc3QoJy9hZGQtY2F0ZWdvcnknLCBwcm9wcykgXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IG11dGF0ZSgpKSAvL3NhdSBraGkgUE9TVCB0aMOgbmggY8O0bmcsIGfhu41pIGjDoG0gbXV0YXRlKCkgxJHhu4MgY+G6rXAgbmjhuq10IGThu68gbGnhu4d1IGtoaSDEkcSDbmcga8OtIHRow6BuZyBjw7RuZ1xyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyAhPT0gNDIyKSB0aHJvdyBlcnJvclxyXG5cclxuICAgICAgICAgICAgICAgIHNldEVycm9ycyhlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycylcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG5cclxuICAgICAgXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2F0ZWdvcnksXHJcbiAgICAgICAgY3JlYXRlQ2F0ZWdvcnksXHJcbiAgICAgICAgZXJyb3IsIG11dGF0ZSxcclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIC0gdOG7h3AgbsOgeSBjaOG7qWEgY8OhYyBow6BtIHbDoCBjdXN0b20gaG9va3MgXHJcbiAqIGxpw6puIHF1YW4gxJHhur9uIHjDoWMgdGjhu7FjIHbDoCBxdeG6o24gbMO9IG5nxrDhu51pIGTDuW5nXHJcbiAqIC0gc+G7rSBk4bulbmcgaG9vayB1c2VTV1IgdOG7qyB0aMawIHZp4buHbiBzd3IgXHJcbiAqIMSR4buDIHRo4buxYyBoaeG7h24gecOqdSBj4bqndSBs4bqleSBk4buvIGxp4buHdSB04burIHNlcnZlciBcclxuICogLSBz4butIGThu6VuZyBob29rIHVzZVJvdXRlciB2w6AgdXNlUGFyYW1zIHThu6sgdGjGsCB2aeG7h25cclxuICogTmV4dGpzIMSR4buDIGzhuqV5IHRow7RuZyB0aW4gduG7gSByb3V0ZXIgdsOgIGPDoWMgdGhhbSBz4buRIHRyb25nIFVSTFxyXG4gKiAtIHVzZUF1dGggdHLhuqMgduG7gSDEkeG7kWkgdMaw4bujbmcgY2jhu6lhIGPDoWMgaMOgbSB2w6AgdGjDtG5nIHRpblxyXG4gKiBsacOqbiBxdWFuIMSR4bq/biB4w6FjIHRo4buxYyB2w6AgbmfGsOG7nWkgZMO5bmdcclxuICovIl0sIm5hbWVzIjpbInVzZVNXUiIsImF4aW9zIiwidXNlRWZmZWN0IiwidXNlUGFyYW1zIiwidXNlUm91dGVyIiwidXNlQ2F0ZWdvcnkiLCJtaWRkbGV3YXJlIiwicmVkaXJlY3RJZkF1dGhlbnRpY2F0ZWQiLCJyb3V0ZXIiLCJwYXJhbXMiLCJkYXRhIiwiY2F0ZWdvcnkiLCJlcnJvciIsIm11dGF0ZSIsImdldCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsInJlc3BvbnNlIiwic3RhdHVzIiwiY3NyZiIsImNyZWF0ZUNhdGVnb3J5Iiwic2V0RXJyb3JzIiwic2V0U3RhdHVzIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsImVycm9ycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/category.js\n"));

/***/ })

});