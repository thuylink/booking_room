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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Input */ \"(app-pages-browser)/./src/components/Input.js\");\n/* harmony import */ var _components_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Label */ \"(app-pages-browser)/./src/components/Label.js\");\n/* harmony import */ var _components_InputError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/InputError */ \"(app-pages-browser)/./src/components/InputError.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Button */ \"(app-pages-browser)/./src/components/Button.js\");\n/* harmony import */ var _hooks_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/category */ \"(app-pages-browser)/./src/hooks/category.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst CreateCategoryPage = ()=>{\n    _s();\n    const { createCategory } = (0,_hooks_category__WEBPACK_IMPORTED_MODULE_6__.useCategory)({\n        middleware: \"guest\",\n        redirectIfAuthenticated: \"/dashboard\"\n    });\n    const [name_category, setNameCategory] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);\n    const submitForm = (event)=>{\n        event.preventDefault();\n        const formData = new FormData();\n        formData.append(\"name_category\", name_category);\n        if (image) {\n            formData.append(\"image\", image);\n        }\n        formData.append(\"status\", status);\n        createCategory({\n            name_category,\n            image,\n            status,\n            setErrors,\n            setStatus\n        });\n        // console.log(formData);\n        createCategory({\n            formData,\n            setStatus,\n            setErrors\n        });\n    };\n    const previewImage = ()=>{\n        if (image) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                src: URL.createObjectURL(image),\n                alt: \"Preview\",\n                width: 200,\n                height: 200\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                lineNumber: 52,\n                columnNumber: 17\n            }, undefined);\n        }\n        return null;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: submitForm,\n        className: \"max-w-sm mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border rounded-lg p-4\",\n                color: \"blue\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center\",\n                        children: \"Chủ nh\\xe0 th\\xeam mới danh mục\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Label__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                htmlFor: \"nameCategory\",\n                                children: \"T\\xean danh mục:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                type: \"text\",\n                                id: \"nameCategory\",\n                                value: name_category,\n                                className: \"block w-full\",\n                                onChange: (event)=>setNameCategory(event.target.value),\n                                required: true,\n                                autoFocus: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                lineNumber: 70,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputError__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                messages: errors.nameCategory,\n                                className: \"mt-2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Label__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                htmlFor: \"image\",\n                                children: \"H\\xecnh ảnh:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                lineNumber: 87,\n                                columnNumber: 21\n                            }, undefined),\n                            previewImage(),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                id: \"image\",\n                                type: \"file\",\n                                className: \"block w-full\",\n                                onChange: (event)=>setImage(event.target.files[0])\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                lineNumber: 89,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputError__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                messages: errors.image,\n                                className: \"mt-2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                lineNumber: 97,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Label__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                htmlFor: \"status\",\n                                children: \"Trạng th\\xe1i:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                lineNumber: 101,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                id: \"status\",\n                                type: \"text\",\n                                value: status,\n                                className: \"block w-full\",\n                                onChange: (event)=>setStatus(event.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                lineNumber: 102,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputError__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                messages: errors.status,\n                                className: \"mt-2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                lineNumber: 111,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-end mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/\",\n                        className: \"underline text-sm text-gray-600 hover:text-gray-900\",\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                        lineNumber: 116,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        className: \"ml-4\",\n                        children: \"Tạo mới danh mục\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                        lineNumber: 122,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                lineNumber: 115,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CreateCategoryPage, \"aD/bnLFXOkpTFDjIg3Ti9PzFxbo=\", false, function() {\n    return [\n        _hooks_category__WEBPACK_IMPORTED_MODULE_6__.useCategory\n    ];\n});\n_c = CreateCategoryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateCategoryPage);\nvar _c;\n$RefreshReg$(_c, \"CreateCategoryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGFwcCkvYWRkLWNhdGVnb3J5L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRXNDO0FBQ0E7QUFDVTtBQUNwQjtBQUNZO0FBQ2E7QUFDVjtBQUNiO0FBRTlCLE1BQU1TLHFCQUFxQjs7SUFDdkIsTUFBTSxFQUFFQyxjQUFjLEVBQUUsR0FBR0wsNERBQVdBLENBQUM7UUFDbkNNLFlBQVk7UUFDWkMseUJBQXlCO0lBQzdCO0lBQ0EsTUFBTSxDQUFDQyxlQUFlQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQUM7SUFDbEQsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1csUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNhLFFBQVFDLFVBQVUsR0FBR2QsK0NBQVFBLENBQUMsRUFBRTtJQUV2QyxNQUFNZSxhQUFhQyxDQUFBQTtRQUNmQSxNQUFNQyxjQUFjO1FBRXBCLE1BQU1DLFdBQVcsSUFBSUM7UUFDckJELFNBQVNFLE1BQU0sQ0FBQyxpQkFBaUJiO1FBQ2pDLElBQUlFLE9BQU87WUFDUFMsU0FBU0UsTUFBTSxDQUFDLFNBQVNYO1FBQzdCO1FBQ0FTLFNBQVNFLE1BQU0sQ0FBQyxVQUFVVDtRQUUxQlAsZUFBZTtZQUNYRztZQUNBRTtZQUNBRTtZQUNBRztZQUNBRjtRQUNKO1FBQ0EseUJBQXlCO1FBRXpCUixlQUFlO1lBQ1hjO1lBQ0FOO1lBQ0FFO1FBQ0o7SUFDSjtJQUdBLE1BQU1PLGVBQWU7UUFDakIsSUFBSVosT0FBTztZQUNQLHFCQUNJLDhEQUFDUCxtREFBS0E7Z0JBQ0ZvQixLQUFLQyxJQUFJQyxlQUFlLENBQUNmO2dCQUN6QmdCLEtBQUk7Z0JBQ0pDLE9BQU87Z0JBQ1BDLFFBQVE7Ozs7OztRQUdwQjtRQUNBLE9BQU87SUFDWDtJQUVBLHFCQUNJLDhEQUFDQztRQUFLQyxVQUFVZDtRQUFZZSxXQUFVOzswQkFDbEMsOERBQUNDO2dCQUFJRCxXQUFVO2dCQUF3QkUsT0FBTTs7a0NBQ3pDLDhEQUFDQzt3QkFBR0gsV0FBVTtrQ0FBYzs7Ozs7O2tDQUU1Qiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNYLDhEQUFDbkMseURBQUtBO2dDQUFDdUMsU0FBUTswQ0FBZTs7Ozs7OzBDQUM5Qiw4REFBQ3hDLHlEQUFLQTtnQ0FDRnlDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLE9BQU85QjtnQ0FDUHVCLFdBQVU7Z0NBQ1ZRLFVBQVV0QixDQUFBQSxRQUFTUixnQkFBZ0JRLE1BQU11QixNQUFNLENBQUNGLEtBQUs7Z0NBQ3JERyxRQUFRO2dDQUNSQyxTQUFTOzs7Ozs7MENBR2IsOERBQUM3Qyw4REFBVUE7Z0NBQ1A4QyxVQUFVN0IsT0FBTzhCLFlBQVk7Z0NBQzdCYixXQUFVOzs7Ozs7Ozs7Ozs7a0NBSWxCLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ1gsOERBQUNuQyx5REFBS0E7Z0NBQUN1QyxTQUFROzBDQUFROzs7Ozs7NEJBQ3RCYjswQ0FDRCw4REFBQzNCLHlEQUFLQTtnQ0FDRjBDLElBQUc7Z0NBQ0hELE1BQUs7Z0NBQ0xMLFdBQVU7Z0NBQ1ZRLFVBQVV0QixDQUFBQSxRQUFTTixTQUFTTSxNQUFNdUIsTUFBTSxDQUFDSyxLQUFLLENBQUMsRUFBRTs7Ozs7OzBDQUlyRCw4REFBQ2hELDhEQUFVQTtnQ0FBQzhDLFVBQVU3QixPQUFPSixLQUFLO2dDQUFFcUIsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUdsRCw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNYLDhEQUFDbkMseURBQUtBO2dDQUFDdUMsU0FBUTswQ0FBUzs7Ozs7OzBDQUN4Qiw4REFBQ3hDLHlEQUFLQTtnQ0FDRjBDLElBQUc7Z0NBQ0hELE1BQUs7Z0NBQ0xFLE9BQU8xQjtnQ0FDUG1CLFdBQVU7Z0NBQ1ZRLFVBQVV0QixDQUFBQSxRQUFTSixVQUFVSSxNQUFNdUIsTUFBTSxDQUFDRixLQUFLO2dDQUMvQ0csUUFBUTs7Ozs7OzBDQUdaLDhEQUFDNUMsOERBQVVBO2dDQUFDOEMsVUFBVTdCLE9BQU9GLE1BQU07Z0NBQUVtQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXZELDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ1gsOERBQUNqQyxrREFBSUE7d0JBQ0RnRCxNQUFLO3dCQUNMZixXQUFVO2tDQUFzRDs7Ozs7O2tDQUlwRSw4REFBQ2hDLDBEQUFNQTt3QkFBQ2dDLFdBQVU7a0NBQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl6QztHQWxITTNCOztRQUN5Qkosd0RBQVdBOzs7S0FEcENJO0FBb0hOLCtEQUFlQSxrQkFBa0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC8oYXBwKS9hZGQtY2F0ZWdvcnkvcGFnZS5qcz8wMTM2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IElucHV0IGZyb20gJ0AvY29tcG9uZW50cy9JbnB1dCdcclxuaW1wb3J0IExhYmVsIGZyb20gJ0AvY29tcG9uZW50cy9MYWJlbCdcclxuaW1wb3J0IElucHV0RXJyb3IgZnJvbSAnQC9jb21wb25lbnRzL0lucHV0RXJyb3InXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvQnV0dG9uJ1xyXG5pbXBvcnQgeyB1c2VDYXRlZ29yeSB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL2NhdGVnb3J5J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuY29uc3QgQ3JlYXRlQ2F0ZWdvcnlQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBjcmVhdGVDYXRlZ29yeSB9ID0gdXNlQ2F0ZWdvcnkoe1xyXG4gICAgICAgIG1pZGRsZXdhcmU6ICdndWVzdCcsXHJcbiAgICAgICAgcmVkaXJlY3RJZkF1dGhlbnRpY2F0ZWQ6ICcvZGFzaGJvYXJkJyxcclxuICAgIH0pXHJcbiAgICBjb25zdCBbbmFtZV9jYXRlZ29yeSwgc2V0TmFtZUNhdGVnb3J5XSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ25hbWVfY2F0ZWdvcnknLCBuYW1lX2NhdGVnb3J5KTtcclxuICAgICAgICBpZiAoaW1hZ2UpIHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGltYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzdGF0dXMnLCBzdGF0dXMpO1xyXG5cclxuICAgICAgICBjcmVhdGVDYXRlZ29yeSh7XHJcbiAgICAgICAgICAgIG5hbWVfY2F0ZWdvcnksXHJcbiAgICAgICAgICAgIGltYWdlLFxyXG4gICAgICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgICAgIHNldEVycm9ycyxcclxuICAgICAgICAgICAgc2V0U3RhdHVzLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG5cclxuICAgICAgICBjcmVhdGVDYXRlZ29yeSh7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLFxyXG4gICAgICAgICAgICBzZXRTdGF0dXMsXHJcbiAgICAgICAgICAgIHNldEVycm9ycyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgcHJldmlld0ltYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChpbWFnZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKGltYWdlKX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQcmV2aWV3XCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEZvcm19IGNsYXNzTmFtZT1cIm1heC13LXNtIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC1sZyBwLTRcIiBjb2xvcj1cImJsdWVcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkNo4bunIG5ow6AgdGjDqm0gbeG7m2kgZGFuaCBt4bulYzwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJuYW1lQ2F0ZWdvcnlcIj5Uw6puIGRhbmggbeG7pWM6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lX2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0TmFtZUNhdGVnb3J5KGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzPXtlcnJvcnMubmFtZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJpbWFnZVwiPkjDrG5oIOG6o25oOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAge3ByZXZpZXdJbWFnZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0SW1hZ2UoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0RXJyb3IgbWVzc2FnZXM9e2Vycm9ycy5pbWFnZX0gY2xhc3NOYW1lPVwibXQtMlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cInN0YXR1c1wiPlRy4bqhbmcgdGjDoWk6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRTdGF0dXMoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRFcnJvciBtZXNzYWdlcz17ZXJyb3JzLnN0YXR1c30gY2xhc3NOYW1lPVwibXQtMlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIG10LTRcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuZGVybGluZSB0ZXh0LXNtIHRleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEJhY2tcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1sLTRcIj5U4bqhbyBt4bubaSBkYW5oIG3hu6VjPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlQ2F0ZWdvcnlQYWdlXHJcbiJdLCJuYW1lcyI6WyJJbnB1dCIsIkxhYmVsIiwiSW5wdXRFcnJvciIsIkxpbmsiLCJCdXR0b24iLCJ1c2VDYXRlZ29yeSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJDcmVhdGVDYXRlZ29yeVBhZ2UiLCJjcmVhdGVDYXRlZ29yeSIsIm1pZGRsZXdhcmUiLCJyZWRpcmVjdElmQXV0aGVudGljYXRlZCIsIm5hbWVfY2F0ZWdvcnkiLCJzZXROYW1lQ2F0ZWdvcnkiLCJpbWFnZSIsInNldEltYWdlIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwic3VibWl0Rm9ybSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicHJldmlld0ltYWdlIiwic3JjIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJkaXYiLCJjb2xvciIsImgxIiwiaHRtbEZvciIsInR5cGUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImF1dG9Gb2N1cyIsIm1lc3NhZ2VzIiwibmFtZUNhdGVnb3J5IiwiZmlsZXMiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(app)/add-category/page.js\n"));

/***/ })

});