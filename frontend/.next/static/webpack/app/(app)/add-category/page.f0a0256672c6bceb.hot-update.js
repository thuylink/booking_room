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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst CreateCategoryForm = ()=>{\n    _s();\n    const [nameCategory, setNameCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        // Gửi dữ liệu tạo mới danh mục lên server ở đây\n        console.log(nameCategory, image, status);\n    };\n    const submitForm = async (event)=>{\n        event.preventDefault();\n        add - category({\n            nameCategory,\n            image,\n            sta\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: submitForm,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"nameCategory\",\n                            children: \"T\\xean danh mục:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"nameCategory\",\n                            value: nameCategory,\n                            onChange: (e)=>setNameCategory(e.target.value),\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"image\",\n                            children: \"H\\xecnh ảnh:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"image\",\n                            value: image,\n                            onChange: (e)=>setImage(e.target.value),\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"status\",\n                            children: \"Trạng th\\xe1i:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            id: \"status\",\n                            value: status,\n                            onChange: (e)=>setStatus(e.target.value),\n                            required: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    children: \"-- Chọn trạng th\\xe1i --\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"active\",\n                                    children: \"Hoạt động\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"inactive\",\n                                    children: \"Ngừng hoạt động\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Tạo mới danh mục\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(CreateCategoryForm, \"OlQkpnGCWzXKj30DbQPBgB8dKXc=\");\n_c = CreateCategoryForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateCategoryForm);\nvar _c;\n$RefreshReg$(_c, \"CreateCategoryForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGFwcCkvYWRkLWNhdGVnb3J5L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ2lDO0FBRWpDLE1BQU1DLHFCQUFxQjs7SUFDekIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0gsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNUSxlQUFlLENBQUNDO1FBQ2hCQSxFQUFFQyxjQUFjO1FBQ2hCLGdEQUFnRDtRQUNoREMsUUFBUUMsR0FBRyxDQUFDVixjQUFjRSxPQUFPRTtJQUNyQztJQUdBLE1BQU1PLGFBQWEsT0FBTUM7UUFDckJBLE1BQU1KLGNBQWM7UUFFcEJLLE1BQUlDLFNBQVM7WUFDVGQ7WUFDQUU7WUFDQWE7UUFDSjtJQUNKO0lBRUEscUJBQ0k7a0JBQ0ksNEVBQUNDO1lBQUtDLFVBQVVOOzs4QkFFWiw4REFBQ087O3NDQUNHLDhEQUFDQzs0QkFBTUMsU0FBUTtzQ0FBZTs7Ozs7O3NDQUM5Qiw4REFBQ0M7NEJBQ0RDLE1BQUs7NEJBQ0xDLElBQUc7NEJBQ0hDLE9BQU94Qjs0QkFDUHlCLFVBQVUsQ0FBQ2xCLElBQU1OLGdCQUFnQk0sRUFBRW1CLE1BQU0sQ0FBQ0YsS0FBSzs0QkFDL0NHLFFBQVE7Ozs7Ozs7Ozs7Ozs4QkFLWiw4REFBQ1Q7O3NDQUNHLDhEQUFDQzs0QkFBTUMsU0FBUTtzQ0FBUTs7Ozs7O3NDQUN2Qiw4REFBQ0M7NEJBQ0RDLE1BQUs7NEJBQ0xDLElBQUc7NEJBQ0hDLE9BQU90Qjs0QkFDUHVCLFVBQVUsQ0FBQ2xCLElBQU1KLFNBQVNJLEVBQUVtQixNQUFNLENBQUNGLEtBQUs7NEJBQ3hDRyxRQUFROzs7Ozs7Ozs7Ozs7OEJBS1osOERBQUNUOztzQ0FDRyw4REFBQ0M7NEJBQU1DLFNBQVE7c0NBQVM7Ozs7OztzQ0FDeEIsOERBQUNROzRCQUNETCxJQUFHOzRCQUNIQyxPQUFPcEI7NEJBQ1BxQixVQUFVLENBQUNsQixJQUFNRixVQUFVRSxFQUFFbUIsTUFBTSxDQUFDRixLQUFLOzRCQUN6Q0csUUFBUTs7OENBRVIsOERBQUNFO29DQUFPTCxPQUFNOzhDQUFHOzs7Ozs7OENBQ2pCLDhEQUFDSztvQ0FBT0wsT0FBTTs4Q0FBUzs7Ozs7OzhDQUN2Qiw4REFBQ0s7b0NBQU9MLE9BQU07OENBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJN0IsOERBQUNNO29CQUFPUixNQUFLOzhCQUFTOzs7Ozs7Ozs7Ozs7O0FBS3RDO0dBckVNdkI7S0FBQUE7QUF1RU4sK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhhcHApL2FkZC1jYXRlZ29yeS9wYWdlLmpzPzAxMzYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQ3JlYXRlQ2F0ZWdvcnlGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtuYW1lQ2F0ZWdvcnksIHNldE5hbWVDYXRlZ29yeV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gR+G7rWkgZOG7ryBsaeG7h3UgdOG6oW8gbeG7m2kgZGFuaCBt4bulYyBsw6puIHNlcnZlciDhu58gxJHDonlcclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lQ2F0ZWdvcnksIGltYWdlLCBzdGF0dXMpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IGFzeW5jIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIGFkZC1jYXRlZ29yeSh7XHJcbiAgICAgICAgICAgIG5hbWVDYXRlZ29yeSxcclxuICAgICAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgICAgIHN0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0Rm9ybX0+XHJcbiAgICAgICAgICAgICAgICB7LyogTmFtZSBDYXRlZ29yeSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lQ2F0ZWdvcnlcIj5Uw6puIGRhbmggbeG7pWM6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lQ2F0ZWdvcnkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBJbWFnZSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWFnZVwiPkjDrG5oIOG6o25oOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEltYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogU3RhdHVzICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN0YXR1c1wiPlRy4bqhbmcgdGjDoWk6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdGF0dXMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLSBDaOG7jW4gdHLhuqFuZyB0aMOhaSAtLTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhY3RpdmVcIj5Ib+G6oXQgxJHhu5luZzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbmFjdGl2ZVwiPk5n4burbmcgaG/huqF0IMSR4buZbmc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlThuqFvIG3hu5tpIGRhbmggbeG7pWM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUNhdGVnb3J5Rm9ybTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDcmVhdGVDYXRlZ29yeUZvcm0iLCJuYW1lQ2F0ZWdvcnkiLCJzZXROYW1lQ2F0ZWdvcnkiLCJpbWFnZSIsInNldEltYWdlIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInN1Ym1pdEZvcm0iLCJldmVudCIsImFkZCIsImNhdGVnb3J5Iiwic3RhIiwiZm9ybSIsIm9uU3VibWl0IiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJzZWxlY3QiLCJvcHRpb24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(app)/add-category/page.js\n"));

/***/ })

});