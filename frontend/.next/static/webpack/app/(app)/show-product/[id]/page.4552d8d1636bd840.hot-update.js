"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(app)/show-product/[id]/page",{

/***/ "(app-pages-browser)/./src/app/(app)/show-product/[id]/page.js":
/*!*************************************************!*\
  !*** ./src/app/(app)/show-product/[id]/page.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductDetailPage: function() { return /* binding */ ProductDetailPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hooks/product */ \"(app-pages-browser)/./src/hooks/product.js\");\n/* __next_internal_client_entry_do_not_use__ ProductDetailPage,default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ProductDetailPage = ()=>{\n    _s();\n    const id = window.location.pathname.split(\"/\").pop();\n    const { getProductById, error } = (0,_hooks_product__WEBPACK_IMPORTED_MODULE_2__.useProduct)();\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // console.log('id', id)\n        const fetchProduct = async ()=>{\n            try {\n                const response = await getProductById(id);\n                setProduct(response);\n            } catch (error) {\n                console.error(\"Error:\", error);\n            }\n        };\n        fetchProduct();\n    }, [\n        getProductById,\n        id\n    ]);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n            lineNumber: 27,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (!product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n            lineNumber: 31,\n            columnNumber: 12\n        }, undefined);\n    }\n    const productFields = Object.keys(product);\n    // console.log(getProductById(props.id));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Chi tiết sản phẩm \",\n                    id\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            productFields.map((field)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        field,\n                        \": \",\n                        product[field]\n                    ]\n                }, field, true, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                style: {\n                    borderCollapse: \"collapse\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border\",\n                                    children: \"ID\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border\",\n                                    children: \"Ti\\xeau đề\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border\",\n                                    children: \"Kiểu kiến tr\\xfac\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border\",\n                                    children: \"Phạm vi sử dụng\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border\",\n                                    children: \"Địa chỉ\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border\",\n                                    children: \"Sức chứa\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border\",\n                                    children: \"Tiện \\xedch\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border\",\n                                    children: \"Ảnh\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border\",\n                                    children: \"Ảnh 360\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border\",\n                                    children: \"M\\xf4 tả\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border\",\n                                    children: \"Chi ph\\xed\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            style: {\n                                border: \"1px solid black\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border\",\n                                    children: product.id\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border\",\n                                    children: product.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border\",\n                                    children: product.id_product\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border\",\n                                    children: product.privacy_type\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border\",\n                                    children: product.location\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border\",\n                                    children: product.capacity\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border\",\n                                    children: product.amenities\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border\",\n                                    children: product.image && Array.isArray(JSON.parse(product.image)) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: JSON.parse(product.image).map((image, index)=>{\n                                            const cleanedImagePath = image.replace(/[\\[\\]\"]/g, \"\");\n                                            const imagePath = \"http://127.0.0.1:8000/uploads/product/\".concat(cleanedImagePath);\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: imagePath,\n                                                alt: \"Image\",\n                                                width: \"100px\",\n                                                height: \"70px\"\n                                            }, index, false, {\n                                                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                                lineNumber: 79,\n                                                columnNumber: 25\n                                            }, undefined);\n                                        })\n                                    }, void 0, false)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"http://127.0.0.1:8000/uploads/product360/\".concat(product.image360),\n                                        alt: \"Image 360\",\n                                        style: {\n                                            width: \"100px\",\n                                            height: \"100px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border\",\n                                    children: product.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border\",\n                                    children: product.price\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, product.id, true, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\[id]\\\\page.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductDetailPage, \"f/l5JdmA/HUf8NlhgHnDYWqrEPw=\", false, function() {\n    return [\n        _hooks_product__WEBPACK_IMPORTED_MODULE_2__.useProduct\n    ];\n});\n_c = ProductDetailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetailPage);\nvar _c;\n$RefreshReg$(_c, \"ProductDetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGFwcCkvc2hvdy1wcm9kdWN0L1tpZF0vcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRW1EO0FBQ047QUFDMEI7QUFFaEUsTUFBTU0sb0JBQW9COztJQUMvQixNQUFNQyxLQUFLQyxPQUFPQyxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDLEtBQUtDLEdBQUc7SUFDbEQsTUFBTSxFQUFFUCxjQUFjLEVBQUVRLEtBQUssRUFBRSxHQUFHVCwwREFBVUE7SUFDNUMsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFDO0lBRXZDRCxnREFBU0EsQ0FBQztRQUNSLHdCQUF3QjtRQUN4QixNQUFNZSxlQUFlO1lBQ25CLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNWixlQUFlRTtnQkFDdENRLFdBQVdFO1lBQ2IsRUFBRSxPQUFPSixPQUFPO2dCQUNkSyxRQUFRTCxLQUFLLENBQUMsVUFBVUE7WUFDMUI7UUFDRjtRQUVBRztJQUNGLEdBQUc7UUFBQ1g7UUFBZ0JFO0tBQUc7SUFFdkIsSUFBSU0sT0FBTztRQUNULHFCQUFPLDhEQUFDTTs7Z0JBQUk7Z0JBQVFOOzs7Ozs7O0lBQ3RCO0lBRUEsSUFBSSxDQUFDQyxTQUFTO1FBQ1oscUJBQU8sOERBQUNLO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLE1BQU1DLGdCQUFnQkMsT0FBT0MsSUFBSSxDQUFDUjtJQUNwQyx5Q0FBeUM7SUFFdkMscUJBQ0UsOERBQUNLOzswQkFDQyw4REFBQ0k7O29CQUFHO29CQUFtQmhCOzs7Ozs7O1lBQ3RCYSxjQUFjSSxHQUFHLENBQUMsQ0FBQ0Msc0JBQ2xCLDhEQUFDQzs7d0JBQ0VEO3dCQUFNO3dCQUFHWCxPQUFPLENBQUNXLE1BQU07O21CQURsQkE7Ozs7OzBCQUlWLDhEQUFDRTtnQkFBTUMsT0FBTztvQkFBRUMsZ0JBQWdCO2dCQUFXOztrQ0FDekMsOERBQUNDO2tDQUNDLDRFQUFDQzs7OENBQ0MsOERBQUNDO29DQUFHQyxXQUFVOzhDQUFTOzs7Ozs7OENBQ3ZCLDhEQUFDRDtvQ0FBR0MsV0FBVTs4Q0FBUzs7Ozs7OzhDQUN2Qiw4REFBQ0Q7b0NBQUdDLFdBQVU7OENBQVM7Ozs7Ozs4Q0FDdkIsOERBQUNEO29DQUFHQyxXQUFVOzhDQUFTOzs7Ozs7OENBQ3ZCLDhEQUFDRDtvQ0FBR0MsV0FBVTs4Q0FBUzs7Ozs7OzhDQUN2Qiw4REFBQ0Q7b0NBQUdDLFdBQVU7OENBQVM7Ozs7Ozs4Q0FDdkIsOERBQUNEO29DQUFHQyxXQUFVOzhDQUFTOzs7Ozs7OENBQ3ZCLDhEQUFDRDtvQ0FBR0MsV0FBVTs4Q0FBUzs7Ozs7OzhDQUN2Qiw4REFBQ0Q7b0NBQUdDLFdBQVU7OENBQVM7Ozs7Ozs4Q0FDdkIsOERBQUNEO29DQUFHQyxXQUFVOzhDQUFTOzs7Ozs7OENBQ3ZCLDhEQUFDRDtvQ0FBR0MsV0FBVTs4Q0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRzNCLDhEQUFDQztrQ0FDQyw0RUFBQ0g7NEJBQW9CSCxPQUFPO2dDQUFFTyxRQUFROzRCQUFrQjs7OENBQ3RELDhEQUFDQztvQ0FBR0gsV0FBVTs4Q0FBVW5CLFFBQVFQLEVBQUU7Ozs7Ozs4Q0FDbEMsOERBQUM2QjtvQ0FBR0gsV0FBVTs4Q0FBVW5CLFFBQVF1QixLQUFLOzs7Ozs7OENBQ3JDLDhEQUFDRDtvQ0FBR0gsV0FBVTs4Q0FBVW5CLFFBQVF3QixVQUFVOzs7Ozs7OENBQzFDLDhEQUFDRjtvQ0FBR0gsV0FBVTs4Q0FBVW5CLFFBQVF5QixZQUFZOzs7Ozs7OENBQzVDLDhEQUFDSDtvQ0FBR0gsV0FBVTs4Q0FBVW5CLFFBQVFMLFFBQVE7Ozs7Ozs4Q0FDeEMsOERBQUMyQjtvQ0FBR0gsV0FBVTs4Q0FBVW5CLFFBQVEwQixRQUFROzs7Ozs7OENBQ3hDLDhEQUFDSjtvQ0FBR0gsV0FBVTs4Q0FBVW5CLFFBQVEyQixTQUFTOzs7Ozs7OENBQ3pDLDhEQUFDTDtvQ0FBR0gsV0FBVTs4Q0FDWG5CLFFBQVE0QixLQUFLLElBQ1pDLE1BQU1DLE9BQU8sQ0FBQ0MsS0FBS0MsS0FBSyxDQUFDaEMsUUFBUTRCLEtBQUssb0JBQ3BDO2tEQUNHRyxLQUFLQyxLQUFLLENBQUNoQyxRQUFRNEIsS0FBSyxFQUFFbEIsR0FBRyxDQUFDLENBQUNrQixPQUFPSzs0Q0FDckMsTUFBTUMsbUJBQW1CTixNQUFNTyxPQUFPLENBQUMsWUFBWTs0Q0FDbkQsTUFBTUMsWUFBWSx5Q0FBMEQsT0FBakJGOzRDQUUzRCxxQkFDRSw4REFBQ0c7Z0RBRUNDLEtBQUtGO2dEQUNMRyxLQUFJO2dEQUNKQyxPQUFNO2dEQUNOQyxRQUFPOytDQUpGUjs7Ozs7d0NBT1g7Ozs7Ozs7OENBSVIsOERBQUNYO29DQUFHSCxXQUFVOzhDQUNaLDRFQUFDa0I7d0NBQ0NDLEtBQUssNENBQTZELE9BQWpCdEMsUUFBUTBDLFFBQVE7d0NBQ2pFSCxLQUFJO3dDQUNKekIsT0FBTzs0Q0FBRTBCLE9BQU87NENBQVNDLFFBQVE7d0NBQVE7Ozs7Ozs7Ozs7OzhDQUc3Qyw4REFBQ25CO29DQUFHSCxXQUFVOzhDQUFVbkIsUUFBUTJDLFdBQVc7Ozs7Ozs4Q0FDM0MsOERBQUNyQjtvQ0FBR0gsV0FBVTs4Q0FBVW5CLFFBQVE0QyxLQUFLOzs7Ozs7OzJCQXJDOUI1QyxRQUFRUCxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkM3QixFQUFFO0dBbEdXRDs7UUFFdUJGLHNEQUFVQTs7O0tBRmpDRTtBQW9HYiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvKGFwcCkvc2hvdy1wcm9kdWN0L1tpZF0vcGFnZS5qcz85MjVhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB1c2VQcm9kdWN0LCBnZXRQcm9kdWN0QnlJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2hvb2tzL3Byb2R1Y3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3REZXRhaWxQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGlkID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgY29uc3QgeyBnZXRQcm9kdWN0QnlJZCwgZXJyb3IgfSA9IHVzZVByb2R1Y3QoKTtcclxuICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdpZCcsIGlkKVxyXG4gICAgY29uc3QgZmV0Y2hQcm9kdWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UHJvZHVjdEJ5SWQoaWQpO1xyXG4gICAgICAgIHNldFByb2R1Y3QocmVzcG9uc2UpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFByb2R1Y3QoKTtcclxuICB9LCBbZ2V0UHJvZHVjdEJ5SWQsIGlkXSk7XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvcn08L2Rpdj47XHJcbiAgfVxyXG5cclxuICBpZiAoIXByb2R1Y3QpIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9kdWN0RmllbGRzID0gT2JqZWN0LmtleXMocHJvZHVjdCk7XHJcbi8vIGNvbnNvbGUubG9nKGdldFByb2R1Y3RCeUlkKHByb3BzLmlkKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+Q2hpIHRp4bq/dCBz4bqjbiBwaOG6qW0ge2lkfTwvaDI+XHJcbiAgICAgIHtwcm9kdWN0RmllbGRzLm1hcCgoZmllbGQpID0+IChcclxuICAgICAgICA8cCBrZXk9e2ZpZWxkfT5cclxuICAgICAgICAgIHtmaWVsZH06IHtwcm9kdWN0W2ZpZWxkXX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICkpfVxyXG4gICAgICA8dGFibGUgc3R5bGU9e3sgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScgfX0+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyXCI+SUQ8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyXCI+VGnDqnUgxJHhu4E8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyXCI+S2nhu4N1IGtp4bq/biB0csO6YzwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXJcIj5QaOG6oW0gdmkgc+G7rSBk4bulbmc8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyXCI+xJDhu4thIGNo4buJPC90aD5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlclwiPlPhu6ljIGNo4bupYTwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXJcIj5UaeG7h24gw61jaDwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXJcIj7huqJuaDwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXJcIj7huqJuaCAzNjA8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyXCI+TcO0IHThuqM8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyXCI+Q2hpIHBow608L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIDx0ciBrZXk9e3Byb2R1Y3QuaWR9IHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXJcIj57cHJvZHVjdC5pZH08L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyXCI+e3Byb2R1Y3QudGl0bGV9PC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlclwiPntwcm9kdWN0LmlkX3Byb2R1Y3R9PC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlclwiPntwcm9kdWN0LnByaXZhY3lfdHlwZX08L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyXCI+e3Byb2R1Y3QubG9jYXRpb259PC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlclwiPntwcm9kdWN0LmNhcGFjaXR5fTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXJcIj57cHJvZHVjdC5hbWVuaXRpZXN9PC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlclwiPlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0LmltYWdlICYmXHJcbiAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KEpTT04ucGFyc2UocHJvZHVjdC5pbWFnZSkpICYmIChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7SlNPTi5wYXJzZShwcm9kdWN0LmltYWdlKS5tYXAoKGltYWdlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xlYW5lZEltYWdlUGF0aCA9IGltYWdlLnJlcGxhY2UoL1tcXFtcXF1cIl0vZywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VQYXRoID0gYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC91cGxvYWRzL3Byb2R1Y3QvJHtjbGVhbmVkSW1hZ2VQYXRofWA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVBhdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjcwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cDovLzEyNy4wLjAuMTo4MDAwL3VwbG9hZHMvcHJvZHVjdDM2MC8ke3Byb2R1Y3QuaW1hZ2UzNjB9YH1cclxuICAgICAgICAgICAgICAgIGFsdD1cIkltYWdlIDM2MFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMHB4JywgaGVpZ2h0OiAnMTAwcHgnIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlclwiPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXJcIj57cHJvZHVjdC5wcmljZX08L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWxQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUGFyYW1zIiwidXNlUHJvZHVjdCIsImdldFByb2R1Y3RCeUlkIiwiUHJvZHVjdERldGFpbFBhZ2UiLCJpZCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsInBvcCIsImVycm9yIiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJmZXRjaFByb2R1Y3QiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJkaXYiLCJwcm9kdWN0RmllbGRzIiwiT2JqZWN0Iiwia2V5cyIsImgyIiwibWFwIiwiZmllbGQiLCJwIiwidGFibGUiLCJzdHlsZSIsImJvcmRlckNvbGxhcHNlIiwidGhlYWQiLCJ0ciIsInRoIiwiY2xhc3NOYW1lIiwidGJvZHkiLCJib3JkZXIiLCJ0ZCIsInRpdGxlIiwiaWRfcHJvZHVjdCIsInByaXZhY3lfdHlwZSIsImNhcGFjaXR5IiwiYW1lbml0aWVzIiwiaW1hZ2UiLCJBcnJheSIsImlzQXJyYXkiLCJKU09OIiwicGFyc2UiLCJpbmRleCIsImNsZWFuZWRJbWFnZVBhdGgiLCJyZXBsYWNlIiwiaW1hZ2VQYXRoIiwiaW1nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJpbWFnZTM2MCIsImRlc2NyaXB0aW9uIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(app)/show-product/[id]/page.js\n"));

/***/ })

});