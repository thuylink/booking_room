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

/***/ "(app-pages-browser)/./src/app/(app)/add-category/page.js":
/*!********************************************!*\
  !*** ./src/app/(app)/add-category/page.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst CreateCategoryForm = ()=>{\n    _s();\n    const [nameCategory, setNameCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        // Gửi dữ liệu tạo mới danh mục lên server ở đây\n        console.log(nameCategory, image, status);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"nameCategory\",\n                            children: \"T\\xean danh mục:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"nameCategory\",\n                            value: nameCategory,\n                            onChange: (e)=>setNameCategory(e.target.value),\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"image\",\n                            children: \"H\\xecnh ảnh:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"image\",\n                            value: image,\n                            onChange: (e)=>setImage(e.target.value),\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"status\",\n                            children: \"Trạng th\\xe1i:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            id: \"status\",\n                            value: status,\n                            onChange: (e)=>setStatus(e.target.value),\n                            required: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    children: \"-- Chọn trạng th\\xe1i --\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"active\",\n                                    children: \"Hoạt động\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"inactive\",\n                                    children: \"Ngừng hoạt động\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Tạo mới danh mục\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n            lineNumber: 17,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(CreateCategoryForm, \"OlQkpnGCWzXKj30DbQPBgB8dKXc=\");\n_c = CreateCategoryForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateCategoryForm);\nvar _c;\n$RefreshReg$(_c, \"CreateCategoryForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGFwcCkvYWRkLWNhdGVnb3J5L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ2lDO0FBRWpDLE1BQU1DLHFCQUFxQjs7SUFDekIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0gsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNUSxlQUFlLENBQUNDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBQ2hCLGdEQUFnRDtRQUNoREMsUUFBUUMsR0FBRyxDQUFDVixjQUFjRSxPQUFPRTtJQUNuQztJQUVBLHFCQUNFO2tCQUNJLDRFQUFDTztZQUFLQyxVQUFVTjs7OEJBRWhCLDhEQUFDTzs7c0NBQ0csOERBQUNDOzRCQUFNQyxTQUFRO3NDQUFlOzs7Ozs7c0NBQzlCLDhEQUFDQzs0QkFDREMsTUFBSzs0QkFDTEMsSUFBRzs0QkFDSEMsT0FBT25COzRCQUNQb0IsVUFBVSxDQUFDYixJQUFNTixnQkFBZ0JNLEVBQUVjLE1BQU0sQ0FBQ0YsS0FBSzs0QkFDL0NHLFFBQVE7Ozs7Ozs7Ozs7Ozs4QkFLWiw4REFBQ1Q7O3NDQUNHLDhEQUFDQzs0QkFBTUMsU0FBUTtzQ0FBUTs7Ozs7O3NDQUN2Qiw4REFBQ0M7NEJBQ0RDLE1BQUs7NEJBQ0xDLElBQUc7NEJBQ0hDLE9BQU9qQjs0QkFDUGtCLFVBQVUsQ0FBQ2IsSUFBTUosU0FBU0ksRUFBRWMsTUFBTSxDQUFDRixLQUFLOzRCQUN4Q0csUUFBUTs7Ozs7Ozs7Ozs7OzhCQUtaLDhEQUFDVDs7c0NBQ0csOERBQUNDOzRCQUFNQyxTQUFRO3NDQUFTOzs7Ozs7c0NBQ3hCLDhEQUFDUTs0QkFDREwsSUFBRzs0QkFDSEMsT0FBT2Y7NEJBQ1BnQixVQUFVLENBQUNiLElBQU1GLFVBQVVFLEVBQUVjLE1BQU0sQ0FBQ0YsS0FBSzs0QkFDekNHLFFBQVE7OzhDQUVSLDhEQUFDRTtvQ0FBT0wsT0FBTTs4Q0FBRzs7Ozs7OzhDQUNqQiw4REFBQ0s7b0NBQU9MLE9BQU07OENBQVM7Ozs7Ozs4Q0FDdkIsOERBQUNLO29DQUFPTCxPQUFNOzhDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSTdCLDhEQUFDTTtvQkFBT1IsTUFBSzs4QkFBUzs7Ozs7Ozs7Ozs7OztBQUs5QjtHQTFETWxCO0tBQUFBO0FBNEROLCtEQUFlQSxrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC8oYXBwKS9hZGQtY2F0ZWdvcnkvcGFnZS5qcz8wMTM2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IENyZWF0ZUNhdGVnb3J5Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbbmFtZUNhdGVnb3J5LCBzZXROYW1lQ2F0ZWdvcnldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBH4butaSBk4buvIGxp4buHdSB04bqhbyBt4bubaSBkYW5oIG3hu6VjIGzDqm4gc2VydmVyIOG7nyDEkcOieVxyXG4gICAgY29uc29sZS5sb2cobmFtZUNhdGVnb3J5LCBpbWFnZSwgc3RhdHVzKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICB7LyogTmFtZSBDYXRlZ29yeSAqL31cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVDYXRlZ29yeVwiPlTDqm4gZGFuaCBt4bulYzo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cIm5hbWVDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZUNhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIEltYWdlICovfVxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5Iw6xuaCDhuqNuaDo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cImltYWdlXCJcclxuICAgICAgICAgICAgdmFsdWU9e2ltYWdlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEltYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIFN0YXR1cyAqL31cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN0YXR1c1wiPlRy4bqhbmcgdGjDoWk6PC9sYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICBpZD1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0dXN9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3RhdHVzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS0gQ2jhu41uIHRy4bqhbmcgdGjDoWkgLS08L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFjdGl2ZVwiPkhv4bqhdCDEkeG7mW5nPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbmFjdGl2ZVwiPk5n4burbmcgaG/huqF0IMSR4buZbmc8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlThuqFvIG3hu5tpIGRhbmggbeG7pWM8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICA8Lz5cclxuICAgIFxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVDYXRlZ29yeUZvcm07Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ3JlYXRlQ2F0ZWdvcnlGb3JtIiwibmFtZUNhdGVnb3J5Iiwic2V0TmFtZUNhdGVnb3J5IiwiaW1hZ2UiLCJzZXRJbWFnZSIsInN0YXR1cyIsInNldFN0YXR1cyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsInNlbGVjdCIsIm9wdGlvbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(app)/add-category/page.js\n"));

/***/ })

});