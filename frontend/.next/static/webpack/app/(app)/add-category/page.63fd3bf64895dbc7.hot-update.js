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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Input */ \"(app-pages-browser)/./src/components/Input.js\");\n/* harmony import */ var _components_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Label */ \"(app-pages-browser)/./src/components/Label.js\");\n/* harmony import */ var _components_InputError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/InputError */ \"(app-pages-browser)/./src/components/InputError.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Button */ \"(app-pages-browser)/./src/components/Button.js\");\n/* harmony import */ var _hooks_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/category */ \"(app-pages-browser)/./src/hooks/category.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst CreateCategoryPage = ()=>{\n    _s();\n    const { createCategory } = (0,_hooks_category__WEBPACK_IMPORTED_MODULE_6__.useCategory)({\n        middleware: \"guest\",\n        redirectIfAuthenticated: \"/dashboard\"\n    });\n    const [name_category, setNameCategory] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);\n    const submitForm = (event)=>{\n        event.preventDefault();\n        const formData = new FormData();\n        formData.append(\"name_category\", name_category);\n        formData.append(\"image\", image);\n        formData.append(\"status\", status);\n        // if (image.length > 0) {\n        //     for (let i = 0; i < image.length; i++) {\n        //         formData.append('image[]', image[i]);\n        //     }\n        // }\n        // createCategory({\n        //     name_category,\n        //     image,\n        //     status,\n        //     setErrors,\n        //     setStatus,\n        // })\n        // console.log(formData);\n        createCategory({\n            formData,\n            setStatus,\n            setErrors,\n            setStatus\n        });\n    };\n    const previewImage = ()=>{\n        if (image) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                src: URL.createObjectURL(image),\n                alt: \"Preview\",\n                width: 200,\n                height: 200\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                lineNumber: 57,\n                columnNumber: 17\n            }, undefined);\n        }\n        return null;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: submitForm,\n        className: \"max-w-sm mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border rounded-lg p-4\",\n                color: \"blue\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center\",\n                        children: \"Chủ nh\\xe0 th\\xeam mới danh mục\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Label__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                htmlFor: \"nameCategory\",\n                                children: \"T\\xean danh mục:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                type: \"text\",\n                                id: \"nameCategory\",\n                                value: name_category,\n                                className: \"block w-full\",\n                                onChange: (event)=>setNameCategory(event.target.value),\n                                required: true,\n                                autoFocus: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputError__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                messages: errors.nameCategory,\n                                className: \"mt-2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                lineNumber: 85,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Label__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                htmlFor: \"image\",\n                                children: \"H\\xecnh ảnh:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                lineNumber: 92,\n                                columnNumber: 21\n                            }, undefined),\n                            prev,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                id: \"image\",\n                                type: \"file\",\n                                className: \"block w-full\",\n                                onChange: (event)=>setImage(event.target.files),\n                                multiple: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                lineNumber: 94,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputError__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                messages: errors.image,\n                                className: \"mt-2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                lineNumber: 103,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Label__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                htmlFor: \"status\",\n                                children: \"Trạng th\\xe1i:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                lineNumber: 107,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                id: \"status\",\n                                type: \"text\",\n                                value: status,\n                                className: \"block w-full\",\n                                onChange: (event)=>setStatus(event.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                lineNumber: 108,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputError__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                messages: errors.status,\n                                className: \"mt-2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                                lineNumber: 117,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                        lineNumber: 106,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-end mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/\",\n                        className: \"underline text-sm text-gray-600 hover:text-gray-900\",\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                        lineNumber: 122,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        className: \"ml-4\",\n                        children: \"Tạo mới danh mục\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                        lineNumber: 128,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n                lineNumber: 121,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\add-category\\\\page.js\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CreateCategoryPage, \"aD/bnLFXOkpTFDjIg3Ti9PzFxbo=\", false, function() {\n    return [\n        _hooks_category__WEBPACK_IMPORTED_MODULE_6__.useCategory\n    ];\n});\n_c = CreateCategoryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateCategoryPage);\nvar _c;\n$RefreshReg$(_c, \"CreateCategoryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGFwcCkvYWRkLWNhdGVnb3J5L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRXNDO0FBQ0E7QUFDVTtBQUNwQjtBQUNZO0FBQ2E7QUFDVjtBQUNiO0FBRTlCLE1BQU1TLHFCQUFxQjs7SUFDdkIsTUFBTSxFQUFFQyxjQUFjLEVBQUUsR0FBR0wsNERBQVdBLENBQUM7UUFDbkNNLFlBQVk7UUFDWkMseUJBQXlCO0lBQzdCO0lBQ0EsTUFBTSxDQUFDQyxlQUFlQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQUM7SUFDbEQsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1csUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNhLFFBQVFDLFVBQVUsR0FBR2QsK0NBQVFBLENBQUMsRUFBRTtJQUV2QyxNQUFNZSxhQUFhQyxDQUFBQTtRQUNmQSxNQUFNQyxjQUFjO1FBRXBCLE1BQU1DLFdBQVcsSUFBSUM7UUFDckJELFNBQVNFLE1BQU0sQ0FBQyxpQkFBaUJiO1FBQ2pDVyxTQUFTRSxNQUFNLENBQUMsU0FBU1g7UUFDekJTLFNBQVNFLE1BQU0sQ0FBQyxVQUFVVDtRQUMxQiwwQkFBMEI7UUFDMUIsK0NBQStDO1FBQy9DLGdEQUFnRDtRQUNoRCxRQUFRO1FBQ1IsSUFBSTtRQUdKLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIsYUFBYTtRQUNiLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLEtBQUs7UUFDTCx5QkFBeUI7UUFFekJQLGVBQWU7WUFDWGM7WUFDQU47WUFDQUU7WUFDQUY7UUFDSjtJQUNKO0lBR0EsTUFBTVMsZUFBZTtRQUNqQixJQUFJWixPQUFPO1lBQ1AscUJBQ0ksOERBQUNQLG1EQUFLQTtnQkFDRm9CLEtBQUtDLElBQUlDLGVBQWUsQ0FBQ2Y7Z0JBQ3pCZ0IsS0FBSTtnQkFDSkMsT0FBTztnQkFDUEMsUUFBUTs7Ozs7O1FBR3BCO1FBQ0EsT0FBTztJQUNYO0lBRUEscUJBQ0ksOERBQUNDO1FBQUtDLFVBQVVkO1FBQVllLFdBQVU7OzBCQUNsQyw4REFBQ0M7Z0JBQUlELFdBQVU7Z0JBQXdCRSxPQUFNOztrQ0FDekMsOERBQUNDO3dCQUFHSCxXQUFVO2tDQUFjOzs7Ozs7a0NBRTVCLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ1gsOERBQUNuQyx5REFBS0E7Z0NBQUN1QyxTQUFROzBDQUFlOzs7Ozs7MENBQzlCLDhEQUFDeEMseURBQUtBO2dDQUNGeUMsTUFBSztnQ0FDTEMsSUFBRztnQ0FDSEMsT0FBTzlCO2dDQUNQdUIsV0FBVTtnQ0FDVlEsVUFBVXRCLENBQUFBLFFBQVNSLGdCQUFnQlEsTUFBTXVCLE1BQU0sQ0FBQ0YsS0FBSztnQ0FDckRHLFFBQVE7Z0NBQ1JDLFNBQVM7Ozs7OzswQ0FHYiw4REFBQzdDLDhEQUFVQTtnQ0FDUDhDLFVBQVU3QixPQUFPOEIsWUFBWTtnQ0FDN0JiLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FJbEIsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDWCw4REFBQ25DLHlEQUFLQTtnQ0FBQ3VDLFNBQVE7MENBQVE7Ozs7Ozs0QkFDdEJVOzBDQUNELDhEQUFDbEQseURBQUtBO2dDQUNGMEMsSUFBRztnQ0FDSEQsTUFBSztnQ0FDTEwsV0FBVTtnQ0FDVlEsVUFBVXRCLENBQUFBLFFBQVNOLFNBQVNNLE1BQU11QixNQUFNLENBQUNNLEtBQUs7Z0NBQzlDQyxRQUFROzs7Ozs7MENBSVosOERBQUNsRCw4REFBVUE7Z0NBQUM4QyxVQUFVN0IsT0FBT0osS0FBSztnQ0FBRXFCLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FHbEQsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDWCw4REFBQ25DLHlEQUFLQTtnQ0FBQ3VDLFNBQVE7MENBQVM7Ozs7OzswQ0FDeEIsOERBQUN4Qyx5REFBS0E7Z0NBQ0YwQyxJQUFHO2dDQUNIRCxNQUFLO2dDQUNMRSxPQUFPMUI7Z0NBQ1BtQixXQUFVO2dDQUNWUSxVQUFVdEIsQ0FBQUEsUUFBU0osVUFBVUksTUFBTXVCLE1BQU0sQ0FBQ0YsS0FBSztnQ0FDL0NHLFFBQVE7Ozs7OzswQ0FHWiw4REFBQzVDLDhEQUFVQTtnQ0FBQzhDLFVBQVU3QixPQUFPRixNQUFNO2dDQUFFbUIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl2RCw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNYLDhEQUFDakMsa0RBQUlBO3dCQUNEa0QsTUFBSzt3QkFDTGpCLFdBQVU7a0NBQXNEOzs7Ozs7a0NBSXBFLDhEQUFDaEMsMERBQU1BO3dCQUFDZ0MsV0FBVTtrQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXpDO0dBeEhNM0I7O1FBQ3lCSix3REFBV0E7OztLQURwQ0k7QUEwSE4sK0RBQWVBLGtCQUFrQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhhcHApL2FkZC1jYXRlZ29yeS9wYWdlLmpzPzAxMzYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgSW5wdXQgZnJvbSAnQC9jb21wb25lbnRzL0lucHV0J1xyXG5pbXBvcnQgTGFiZWwgZnJvbSAnQC9jb21wb25lbnRzL0xhYmVsJ1xyXG5pbXBvcnQgSW5wdXRFcnJvciBmcm9tICdAL2NvbXBvbmVudHMvSW5wdXRFcnJvcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy9CdXR0b24nXHJcbmltcG9ydCB7IHVzZUNhdGVnb3J5IH0gZnJvbSAnLi4vLi4vLi4vaG9va3MvY2F0ZWdvcnknXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5jb25zdCBDcmVhdGVDYXRlZ29yeVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGNyZWF0ZUNhdGVnb3J5IH0gPSB1c2VDYXRlZ29yeSh7XHJcbiAgICAgICAgbWlkZGxld2FyZTogJ2d1ZXN0JyxcclxuICAgICAgICByZWRpcmVjdElmQXV0aGVudGljYXRlZDogJy9kYXNoYm9hcmQnLFxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtuYW1lX2NhdGVnb3J5LCBzZXROYW1lQ2F0ZWdvcnldID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZV9jYXRlZ29yeScsIG5hbWVfY2F0ZWdvcnkpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBpbWFnZSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzdGF0dXMnLCBzdGF0dXMpO1xyXG4gICAgICAgIC8vIGlmIChpbWFnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2VbXScsIGltYWdlW2ldKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZUNhdGVnb3J5KHtcclxuICAgICAgICAvLyAgICAgbmFtZV9jYXRlZ29yeSxcclxuICAgICAgICAvLyAgICAgaW1hZ2UsXHJcbiAgICAgICAgLy8gICAgIHN0YXR1cyxcclxuICAgICAgICAvLyAgICAgc2V0RXJyb3JzLFxyXG4gICAgICAgIC8vICAgICBzZXRTdGF0dXMsXHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcblxyXG4gICAgICAgIGNyZWF0ZUNhdGVnb3J5KHtcclxuICAgICAgICAgICAgZm9ybURhdGEsXHJcbiAgICAgICAgICAgIHNldFN0YXR1cyxcclxuICAgICAgICAgICAgc2V0RXJyb3JzLFxyXG4gICAgICAgICAgICBzZXRTdGF0dXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHByZXZpZXdJbWFnZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaW1hZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChpbWFnZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiUHJldmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRGb3JtfSBjbGFzc05hbWU9XCJtYXgtdy1zbSBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQtbGcgcC00XCIgY29sb3I9XCJibHVlXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5DaOG7pyBuaMOgIHRow6ptIG3hu5tpIGRhbmggbeG7pWM8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwibmFtZUNhdGVnb3J5XCI+VMOqbiBkYW5oIG3hu6VjOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZV9jYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldE5hbWVDYXRlZ29yeShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRFcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcz17ZXJyb3JzLm5hbWVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5Iw6xuaCDhuqNuaDo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcmV2fVxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0SW1hZ2UoZXZlbnQudGFyZ2V0LmZpbGVzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0RXJyb3IgbWVzc2FnZXM9e2Vycm9ycy5pbWFnZX0gY2xhc3NOYW1lPVwibXQtMlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cInN0YXR1c1wiPlRy4bqhbmcgdGjDoWk6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRTdGF0dXMoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRFcnJvciBtZXNzYWdlcz17ZXJyb3JzLnN0YXR1c30gY2xhc3NOYW1lPVwibXQtMlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIG10LTRcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuZGVybGluZSB0ZXh0LXNtIHRleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEJhY2tcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1sLTRcIj5U4bqhbyBt4bubaSBkYW5oIG3hu6VjPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlQ2F0ZWdvcnlQYWdlXHJcbiJdLCJuYW1lcyI6WyJJbnB1dCIsIkxhYmVsIiwiSW5wdXRFcnJvciIsIkxpbmsiLCJCdXR0b24iLCJ1c2VDYXRlZ29yeSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJDcmVhdGVDYXRlZ29yeVBhZ2UiLCJjcmVhdGVDYXRlZ29yeSIsIm1pZGRsZXdhcmUiLCJyZWRpcmVjdElmQXV0aGVudGljYXRlZCIsIm5hbWVfY2F0ZWdvcnkiLCJzZXROYW1lQ2F0ZWdvcnkiLCJpbWFnZSIsInNldEltYWdlIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwic3VibWl0Rm9ybSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicHJldmlld0ltYWdlIiwic3JjIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJkaXYiLCJjb2xvciIsImgxIiwiaHRtbEZvciIsInR5cGUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImF1dG9Gb2N1cyIsIm1lc3NhZ2VzIiwibmFtZUNhdGVnb3J5IiwicHJldiIsImZpbGVzIiwibXVsdGlwbGUiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(app)/add-category/page.js\n"));

/***/ })

});