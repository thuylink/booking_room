"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(app)/show-product/page",{

/***/ "(app-pages-browser)/./src/app/(app)/show-product/page.js":
/*!********************************************!*\
  !*** ./src/app/(app)/show-product/page.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductDetailPage: function() { return /* binding */ ProductDetailPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"(app-pages-browser)/./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _hooks_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/product */ \"(app-pages-browser)/./src/hooks/product.js\");\n/* __next_internal_client_entry_do_not_use__ ProductDetailPage,default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ProductDetailPage = (props)=>{\n    _s();\n    console.log(pro);\n    const { id } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n    const { getProductById, error } = (0,_hooks_product__WEBPACK_IMPORTED_MODULE_2__.useProduct)();\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"id\", id);\n        const fetchProduct = async ()=>{\n            try {\n                const response = await getProductById(id);\n                setProduct(response);\n            } catch (error) {\n                console.error(\"Error:\", error);\n            }\n        };\n        fetchProduct();\n    }, [\n        getProductById,\n        id\n    ]);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n            lineNumber: 28,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (!product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n            lineNumber: 32,\n            columnNumber: 12\n        }, undefined);\n    }\n    const productFields = Object.keys(product);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Chi tiết sản phẩm \",\n                    id\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            productFields.map((field)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        field,\n                        \": \",\n                        product[field]\n                    ]\n                }, field, true, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                style: {\n                    borderCollapse: \"collapse\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border\",\n                                    children: \"ID\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border\",\n                                    children: \"Ti\\xeau đề\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border\",\n                                    children: \"Kiểu kiến tr\\xfac\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border\",\n                                    children: \"Phạm vi sử dụng\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border\",\n                                    children: \"Địa chỉ\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border\",\n                                    children: \"Sức chứa\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border\",\n                                    children: \"Tiện \\xedch\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border\",\n                                    children: \"Ảnh\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border\",\n                                    children: \"Ảnh 360\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border\",\n                                    children: \"M\\xf4 tả\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border\",\n                                    children: \"Chi ph\\xed\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            style: {\n                                border: \"1px solid black\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border\",\n                                    children: product.id\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border\",\n                                    children: product.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border\",\n                                    children: product.id_product\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border\",\n                                    children: product.privacy_type\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border\",\n                                    children: product.location\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border\",\n                                    children: product.capacity\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border\",\n                                    children: product.amenities\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border\",\n                                    children: product.image && Array.isArray(JSON.parse(product.image)) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: JSON.parse(product.image).map((image, index)=>{\n                                            const cleanedImagePath = image.replace(/[\\[\\]\"]/g, \"\");\n                                            const imagePath = \"http://127.0.0.1:8000/uploads/product/\".concat(cleanedImagePath);\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: imagePath,\n                                                alt: \"Image\",\n                                                width: \"100px\",\n                                                height: \"70px\"\n                                            }, index, false, {\n                                                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                                lineNumber: 79,\n                                                columnNumber: 25\n                                            }, undefined);\n                                        })\n                                    }, void 0, false)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"http://127.0.0.1:8000/uploads/product360/\".concat(product.image360),\n                                        alt: \"Image 360\",\n                                        style: {\n                                            width: \"100px\",\n                                            height: \"100px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border\",\n                                    children: product.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border\",\n                                    children: product.price\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, product.id, true, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(app)\\\\show-product\\\\page.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductDetailPage, \"/yNySd1yRihVAH7v4kW8S/QLZNE=\", false, function() {\n    return [\n        react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams,\n        _hooks_product__WEBPACK_IMPORTED_MODULE_2__.useProduct\n    ];\n});\n_c = ProductDetailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetailPage);\nvar _c;\n$RefreshReg$(_c, \"ProductDetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGFwcCkvc2hvdy1wcm9kdWN0L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDTjtBQUN1QjtBQUU3RCxNQUFNTSxvQkFBb0IsQ0FBQ0M7O0lBQzlCQyxRQUFRQyxHQUFHLENBQUNDO0lBQ2QsTUFBTSxFQUFFQyxFQUFFLEVBQUUsR0FBR1IsMkRBQVNBO0lBQ3hCLE1BQU0sRUFBRUUsY0FBYyxFQUFFTyxLQUFLLEVBQUUsR0FBR1IsMERBQVVBO0lBQzVDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDUk8sUUFBUUMsR0FBRyxDQUFDLE1BQU1FO1FBQ2xCLE1BQU1JLGVBQWU7WUFDbkIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1YLGVBQWVNO2dCQUN0Q0csV0FBV0U7WUFDYixFQUFFLE9BQU9KLE9BQU87Z0JBQ2RKLFFBQVFJLEtBQUssQ0FBQyxVQUFVQTtZQUMxQjtRQUNGO1FBRUFHO0lBQ0YsR0FBRztRQUFDVjtRQUFnQk07S0FBRztJQUV2QixJQUFJQyxPQUFPO1FBQ1QscUJBQU8sOERBQUNLOztnQkFBSTtnQkFBUUw7Ozs7Ozs7SUFDdEI7SUFFQSxJQUFJLENBQUNDLFNBQVM7UUFDWixxQkFBTyw4REFBQ0k7c0JBQUk7Ozs7OztJQUNkO0lBRUEsTUFBTUMsZ0JBQWdCQyxPQUFPQyxJQUFJLENBQUNQO0lBRWxDLHFCQUNFLDhEQUFDSTs7MEJBQ0MsOERBQUNJOztvQkFBRztvQkFBbUJWOzs7Ozs7O1lBQ3RCTyxjQUFjSSxHQUFHLENBQUMsQ0FBQ0Msc0JBQ2xCLDhEQUFDQzs7d0JBQ0VEO3dCQUFNO3dCQUFHVixPQUFPLENBQUNVLE1BQU07O21CQURsQkE7Ozs7OzBCQUlWLDhEQUFDRTtnQkFBTUMsT0FBTztvQkFBRUMsZ0JBQWdCO2dCQUFXOztrQ0FDekMsOERBQUNDO2tDQUNDLDRFQUFDQzs7OENBQ0MsOERBQUNDO29DQUFHQyxXQUFVOzhDQUFTOzs7Ozs7OENBQ3ZCLDhEQUFDRDtvQ0FBR0MsV0FBVTs4Q0FBUzs7Ozs7OzhDQUN2Qiw4REFBQ0Q7b0NBQUdDLFdBQVU7OENBQVM7Ozs7Ozs4Q0FDdkIsOERBQUNEO29DQUFHQyxXQUFVOzhDQUFTOzs7Ozs7OENBQ3ZCLDhEQUFDRDtvQ0FBR0MsV0FBVTs4Q0FBUzs7Ozs7OzhDQUN2Qiw4REFBQ0Q7b0NBQUdDLFdBQVU7OENBQVM7Ozs7Ozs4Q0FDdkIsOERBQUNEO29DQUFHQyxXQUFVOzhDQUFTOzs7Ozs7OENBQ3ZCLDhEQUFDRDtvQ0FBR0MsV0FBVTs4Q0FBUzs7Ozs7OzhDQUN2Qiw4REFBQ0Q7b0NBQUdDLFdBQVU7OENBQVM7Ozs7Ozs4Q0FDdkIsOERBQUNEO29DQUFHQyxXQUFVOzhDQUFTOzs7Ozs7OENBQ3ZCLDhEQUFDRDtvQ0FBR0MsV0FBVTs4Q0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRzNCLDhEQUFDQztrQ0FDQyw0RUFBQ0g7NEJBQW9CSCxPQUFPO2dDQUFFTyxRQUFROzRCQUFrQjs7OENBQ3RELDhEQUFDQztvQ0FBR0gsV0FBVTs4Q0FBVWxCLFFBQVFGLEVBQUU7Ozs7Ozs4Q0FDbEMsOERBQUN1QjtvQ0FBR0gsV0FBVTs4Q0FBVWxCLFFBQVFzQixLQUFLOzs7Ozs7OENBQ3JDLDhEQUFDRDtvQ0FBR0gsV0FBVTs4Q0FBVWxCLFFBQVF1QixVQUFVOzs7Ozs7OENBQzFDLDhEQUFDRjtvQ0FBR0gsV0FBVTs4Q0FBVWxCLFFBQVF3QixZQUFZOzs7Ozs7OENBQzVDLDhEQUFDSDtvQ0FBR0gsV0FBVTs4Q0FBVWxCLFFBQVF5QixRQUFROzs7Ozs7OENBQ3hDLDhEQUFDSjtvQ0FBR0gsV0FBVTs4Q0FBVWxCLFFBQVEwQixRQUFROzs7Ozs7OENBQ3hDLDhEQUFDTDtvQ0FBR0gsV0FBVTs4Q0FBVWxCLFFBQVEyQixTQUFTOzs7Ozs7OENBQ3pDLDhEQUFDTjtvQ0FBR0gsV0FBVTs4Q0FDWGxCLFFBQVE0QixLQUFLLElBQ1pDLE1BQU1DLE9BQU8sQ0FBQ0MsS0FBS0MsS0FBSyxDQUFDaEMsUUFBUTRCLEtBQUssb0JBQ3BDO2tEQUNHRyxLQUFLQyxLQUFLLENBQUNoQyxRQUFRNEIsS0FBSyxFQUFFbkIsR0FBRyxDQUFDLENBQUNtQixPQUFPSzs0Q0FDckMsTUFBTUMsbUJBQW1CTixNQUFNTyxPQUFPLENBQUMsWUFBWTs0Q0FDbkQsTUFBTUMsWUFBWSx5Q0FBMEQsT0FBakJGOzRDQUUzRCxxQkFDRSw4REFBQ0c7Z0RBRUNDLEtBQUtGO2dEQUNMRyxLQUFJO2dEQUNKQyxPQUFNO2dEQUNOQyxRQUFPOytDQUpGUjs7Ozs7d0NBT1g7Ozs7Ozs7OENBSVIsOERBQUNaO29DQUFHSCxXQUFVOzhDQUNaLDRFQUFDbUI7d0NBQ0NDLEtBQUssNENBQTZELE9BQWpCdEMsUUFBUTBDLFFBQVE7d0NBQ2pFSCxLQUFJO3dDQUNKMUIsT0FBTzs0Q0FBRTJCLE9BQU87NENBQVNDLFFBQVE7d0NBQVE7Ozs7Ozs7Ozs7OzhDQUc3Qyw4REFBQ3BCO29DQUFHSCxXQUFVOzhDQUFVbEIsUUFBUTJDLFdBQVc7Ozs7Ozs4Q0FDM0MsOERBQUN0QjtvQ0FBR0gsV0FBVTs4Q0FBVWxCLFFBQVE0QyxLQUFLOzs7Ozs7OzJCQXJDOUI1QyxRQUFRRixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkM3QixFQUFFO0dBbEdXTDs7UUFFSUgsdURBQVNBO1FBQ1VDLHNEQUFVQTs7O0tBSGpDRTtBQW9HYiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvKGFwcCkvc2hvdy1wcm9kdWN0L3BhZ2UuanM/OWM3OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdXNlUHJvZHVjdCwgZ2V0UHJvZHVjdEJ5SWQgfSBmcm9tICcuLi8uLi8uLi9ob29rcy9wcm9kdWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0RGV0YWlsUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocHJvKVxyXG4gIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gIGNvbnN0IHsgZ2V0UHJvZHVjdEJ5SWQsIGVycm9yIH0gPSB1c2VQcm9kdWN0KCk7XHJcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnaWQnLCBpZClcclxuICAgIGNvbnN0IGZldGNoUHJvZHVjdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFByb2R1Y3RCeUlkKGlkKTtcclxuICAgICAgICBzZXRQcm9kdWN0KHJlc3BvbnNlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hQcm9kdWN0KCk7XHJcbiAgfSwgW2dldFByb2R1Y3RCeUlkLCBpZF0pO1xyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3J9PC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgaWYgKCFwcm9kdWN0KSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvZHVjdEZpZWxkcyA9IE9iamVjdC5rZXlzKHByb2R1Y3QpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyPkNoaSB0aeG6v3Qgc+G6o24gcGjhuqltIHtpZH08L2gyPlxyXG4gICAgICB7cHJvZHVjdEZpZWxkcy5tYXAoKGZpZWxkKSA9PiAoXHJcbiAgICAgICAgPHAga2V5PXtmaWVsZH0+XHJcbiAgICAgICAgICB7ZmllbGR9OiB7cHJvZHVjdFtmaWVsZF19XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApKX1cclxuICAgICAgPHRhYmxlIHN0eWxlPXt7IGJvcmRlckNvbGxhcHNlOiAnY29sbGFwc2UnIH19PlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlclwiPklEPC90aD5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlclwiPlRpw6p1IMSR4buBPC90aD5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlclwiPktp4buDdSBraeG6v24gdHLDumM8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyXCI+UGjhuqFtIHZpIHPhu60gZOG7pW5nPC90aD5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlclwiPsSQ4buLYSBjaOG7iTwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXJcIj5T4bupYyBjaOG7qWE8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyXCI+VGnhu4duIMOtY2g8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyXCI+4bqibmg8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyXCI+4bqibmggMzYwPC90aD5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlclwiPk3DtCB04bqjPC90aD5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlclwiPkNoaSBwaMOtPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICA8dHIga2V5PXtwcm9kdWN0LmlkfSBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyXCI+e3Byb2R1Y3QuaWR9PC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlclwiPntwcm9kdWN0LnRpdGxlfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXJcIj57cHJvZHVjdC5pZF9wcm9kdWN0fTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXJcIj57cHJvZHVjdC5wcml2YWN5X3R5cGV9PC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlclwiPntwcm9kdWN0LmxvY2F0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXJcIj57cHJvZHVjdC5jYXBhY2l0eX08L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyXCI+e3Byb2R1Y3QuYW1lbml0aWVzfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXJcIj5cclxuICAgICAgICAgICAgICB7cHJvZHVjdC5pbWFnZSAmJlxyXG4gICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheShKU09OLnBhcnNlKHByb2R1Y3QuaW1hZ2UpKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAge0pTT04ucGFyc2UocHJvZHVjdC5pbWFnZSkubWFwKChpbWFnZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuZWRJbWFnZVBhdGggPSBpbWFnZS5yZXBsYWNlKC9bXFxbXFxdXCJdL2csICcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlUGF0aCA9IGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvdXBsb2Fkcy9wcm9kdWN0LyR7Y2xlYW5lZEltYWdlUGF0aH1gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VQYXRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI3MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC91cGxvYWRzL3Byb2R1Y3QzNjAvJHtwcm9kdWN0LmltYWdlMzYwfWB9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJJbWFnZSAzNjBcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcsIGhlaWdodDogJzEwMHB4JyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXJcIj57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyXCI+e3Byb2R1Y3QucHJpY2V9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlsUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVBhcmFtcyIsInVzZVByb2R1Y3QiLCJnZXRQcm9kdWN0QnlJZCIsIlByb2R1Y3REZXRhaWxQYWdlIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwicHJvIiwiaWQiLCJlcnJvciIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwiZmV0Y2hQcm9kdWN0IiwicmVzcG9uc2UiLCJkaXYiLCJwcm9kdWN0RmllbGRzIiwiT2JqZWN0Iiwia2V5cyIsImgyIiwibWFwIiwiZmllbGQiLCJwIiwidGFibGUiLCJzdHlsZSIsImJvcmRlckNvbGxhcHNlIiwidGhlYWQiLCJ0ciIsInRoIiwiY2xhc3NOYW1lIiwidGJvZHkiLCJib3JkZXIiLCJ0ZCIsInRpdGxlIiwiaWRfcHJvZHVjdCIsInByaXZhY3lfdHlwZSIsImxvY2F0aW9uIiwiY2FwYWNpdHkiLCJhbWVuaXRpZXMiLCJpbWFnZSIsIkFycmF5IiwiaXNBcnJheSIsIkpTT04iLCJwYXJzZSIsImluZGV4IiwiY2xlYW5lZEltYWdlUGF0aCIsInJlcGxhY2UiLCJpbWFnZVBhdGgiLCJpbWciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImltYWdlMzYwIiwiZGVzY3JpcHRpb24iLCJwcmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(app)/show-product/page.js\n"));

/***/ })

});