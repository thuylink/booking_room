"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(app)/all-product/page",{

/***/ "(app-pages-browser)/./src/app/(app)/show-product/page.js":
/*!********************************************!*\
  !*** ./src/app/(app)/show-product/page.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductDetailPage: function() { return /* binding */ ProductDetailPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/product */ \"(app-pages-browser)/./src/hooks/product.js\");\n/* __next_internal_client_entry_do_not_use__ ProductDetailPage,default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ProductDetailPage = (props)=>{\n    _s();\n    console.log(props.id);\n    // const {product_ID} = useProduct();\n    //   const { id } = useParams();\n    const { getProductById, error } = (0,_hooks_product__WEBPACK_IMPORTED_MODULE_2__.useProduct)();\n    //   const [product, setProduct] = useState(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // console.log('id', id)\n        const fetchProduct = async ()=>{\n            try {\n                const response = await getProductById(id);\n            // setProduct(response);\n            } catch (error) {\n                console.error(\"Error:\", error);\n            }\n        };\n        fetchProduct();\n    }, [\n        getProductById,\n        id\n    ]);\n    //   if (error) {\n    //     return <div>Error: {error}</div>;\n    //   }\n    //   if (!product) {\n    //     return <div>Loading...</div>;\n    //   }\n    //   const productFields = Object.keys(product);\n    console.log(getProductById(props.id));\n    return(// <div>\n    //   <h2>Chi tiết sản phẩm {id}</h2>\n    //   {productFields.map((field) => (\n    //     <p key={field}>\n    //       {field}: {product[field]}\n    //     </p>\n    //   ))}\n    //   <table style={{ borderCollapse: 'collapse' }}>\n    //     <thead>\n    //       <tr>\n    //         <th className=\"border\">ID</th>\n    //         <th className=\"border\">Tiêu đề</th>\n    //         <th className=\"border\">Kiểu kiến trúc</th>\n    //         <th className=\"border\">Phạm vi sử dụng</th>\n    //         <th className=\"border\">Địa chỉ</th>\n    //         <th className=\"border\">Sức chứa</th>\n    //         <th className=\"border\">Tiện ích</th>\n    //         <th className=\"border\">Ảnh</th>\n    //         <th className=\"border\">Ảnh 360</th>\n    //         <th className=\"border\">Mô tả</th>\n    //         <th className=\"border\">Chi phí</th>\n    //       </tr>\n    //     </thead>\n    //     <tbody>\n    //       <tr key={product.id} style={{ border: '1px solid black' }}>\n    //         <td className=\"border\">{product.id}</td>\n    //         <td className=\"border\">{product.title}</td>\n    //         <td className=\"border\">{product.id_product}</td>\n    //         <td className=\"border\">{product.privacy_type}</td>\n    //         <td className=\"border\">{product.location}</td>\n    //         <td className=\"border\">{product.capacity}</td>\n    //         <td className=\"border\">{product.amenities}</td>\n    //         <td className=\"border\">\n    //           {product.image &&\n    //             Array.isArray(JSON.parse(product.image)) && (\n    //               <>\n    //                 {JSON.parse(product.image).map((image, index) => {\n    //                   const cleanedImagePath = image.replace(/[\\[\\]\"]/g, '');\n    //                   const imagePath = `http://127.0.0.1:8000/uploads/product/${cleanedImagePath}`;\n    //                   return (\n    //                     <img\n    //                       key={index}\n    //                       src={imagePath}\n    //                       alt=\"Image\"\n    //                       width=\"100px\"\n    //                       height=\"70px\"\n    //                     />\n    //                   );\n    //                 })}\n    //               </>\n    //             )}\n    //         </td>\n    //         <td className=\"border\">\n    //           <img\n    //             src={`http://127.0.0.1:8000/uploads/product360/${product.image360}`}\n    //             alt=\"Image 360\"\n    //             style={{ width: '100px', height: '100px' }}\n    //           />\n    //         </td>\n    //         <td className=\"border\">{product.description}</td>\n    //         <td className=\"border\">{product.price}</td>\n    //       </tr>\n    //     </tbody>\n    //   </table>\n    // </div>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false));\n};\n_s(ProductDetailPage, \"hqvU5yXAf32iIrJ/gBegbHRPVOA=\", false, function() {\n    return [\n        _hooks_product__WEBPACK_IMPORTED_MODULE_2__.useProduct\n    ];\n});\n_c = ProductDetailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetailPage);\nvar _c;\n$RefreshReg$(_c, \"ProductDetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGFwcCkvc2hvdy1wcm9kdWN0L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVtRDtBQUNOO0FBQ3VCO0FBRTdELE1BQU1NLG9CQUFvQixDQUFDQzs7SUFDOUJDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTUcsRUFBRTtJQUNwQixxQ0FBcUM7SUFDekMsZ0NBQWdDO0lBQzlCLE1BQU0sRUFBRUwsY0FBYyxFQUFFTSxLQUFLLEVBQUUsR0FBR1AsMERBQVVBO0lBQzlDLGtEQUFrRDtJQUVoREgsZ0RBQVNBLENBQUM7UUFDUix3QkFBd0I7UUFDeEIsTUFBTVcsZUFBZTtZQUNuQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTVIsZUFBZUs7WUFDdEMsd0JBQXdCO1lBQzFCLEVBQUUsT0FBT0MsT0FBTztnQkFDZEgsUUFBUUcsS0FBSyxDQUFDLFVBQVVBO1lBQzFCO1FBQ0Y7UUFFQUM7SUFDRixHQUFHO1FBQUNQO1FBQWdCSztLQUFHO0lBRXpCLGlCQUFpQjtJQUNqQix3Q0FBd0M7SUFDeEMsTUFBTTtJQUVOLG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEMsTUFBTTtJQUVOLGdEQUFnRDtJQUNoREYsUUFBUUMsR0FBRyxDQUFDSixlQUFlRSxNQUFNRyxFQUFFO0lBRWpDLE9BQ0UsUUFBUTtJQUNSLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsUUFBUTtJQUNSLG1EQUFtRDtJQUNuRCxjQUFjO0lBQ2QsYUFBYTtJQUNiLHlDQUF5QztJQUN6Qyw4Q0FBOEM7SUFDOUMscURBQXFEO0lBQ3JELHNEQUFzRDtJQUN0RCw4Q0FBOEM7SUFDOUMsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywwQ0FBMEM7SUFDMUMsOENBQThDO0lBQzlDLDRDQUE0QztJQUM1Qyw4Q0FBOEM7SUFDOUMsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2Qsb0VBQW9FO0lBQ3BFLG1EQUFtRDtJQUNuRCxzREFBc0Q7SUFDdEQsMkRBQTJEO0lBQzNELDZEQUE2RDtJQUM3RCx5REFBeUQ7SUFDekQseURBQXlEO0lBQ3pELDBEQUEwRDtJQUMxRCxrQ0FBa0M7SUFDbEMsOEJBQThCO0lBQzlCLDREQUE0RDtJQUM1RCxtQkFBbUI7SUFDbkIscUVBQXFFO0lBQ3JFLDRFQUE0RTtJQUM1RSxtR0FBbUc7SUFFbkcsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixvQ0FBb0M7SUFDcEMsd0NBQXdDO0lBQ3hDLG9DQUFvQztJQUNwQyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsbUZBQW1GO0lBQ25GLDhCQUE4QjtJQUM5QiwwREFBMEQ7SUFDMUQsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw0REFBNEQ7SUFDNUQsc0RBQXNEO0lBQ3RELGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLFNBQVM7a0JBQ1Q7QUFFSixFQUFFO0dBckdXSjs7UUFJdUJGLHNEQUFVQTs7O0tBSmpDRTtBQXVHYiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvKGFwcCkvc2hvdy1wcm9kdWN0L3BhZ2UuanM/OWM3OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdXNlUHJvZHVjdCwgZ2V0UHJvZHVjdEJ5SWQgfSBmcm9tICcuLi8uLi8uLi9ob29rcy9wcm9kdWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0RGV0YWlsUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocHJvcHMuaWQpXHJcbiAgICAvLyBjb25zdCB7cHJvZHVjdF9JRH0gPSB1c2VQcm9kdWN0KCk7XHJcbi8vICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgeyBnZXRQcm9kdWN0QnlJZCwgZXJyb3IgfSA9IHVzZVByb2R1Y3QoKTtcclxuLy8gICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdpZCcsIGlkKVxyXG4gICAgY29uc3QgZmV0Y2hQcm9kdWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UHJvZHVjdEJ5SWQoaWQpO1xyXG4gICAgICAgIC8vIHNldFByb2R1Y3QocmVzcG9uc2UpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFByb2R1Y3QoKTtcclxuICB9LCBbZ2V0UHJvZHVjdEJ5SWQsIGlkXSk7XHJcblxyXG4vLyAgIGlmIChlcnJvcikge1xyXG4vLyAgICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvcn08L2Rpdj47XHJcbi8vICAgfVxyXG5cclxuLy8gICBpZiAoIXByb2R1Y3QpIHtcclxuLy8gICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbi8vICAgfVxyXG5cclxuLy8gICBjb25zdCBwcm9kdWN0RmllbGRzID0gT2JqZWN0LmtleXMocHJvZHVjdCk7XHJcbmNvbnNvbGUubG9nKGdldFByb2R1Y3RCeUlkKHByb3BzLmlkKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyA8ZGl2PlxyXG4gICAgLy8gICA8aDI+Q2hpIHRp4bq/dCBz4bqjbiBwaOG6qW0ge2lkfTwvaDI+XHJcbiAgICAvLyAgIHtwcm9kdWN0RmllbGRzLm1hcCgoZmllbGQpID0+IChcclxuICAgIC8vICAgICA8cCBrZXk9e2ZpZWxkfT5cclxuICAgIC8vICAgICAgIHtmaWVsZH06IHtwcm9kdWN0W2ZpZWxkXX1cclxuICAgIC8vICAgICA8L3A+XHJcbiAgICAvLyAgICkpfVxyXG4gICAgLy8gICA8dGFibGUgc3R5bGU9e3sgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScgfX0+XHJcbiAgICAvLyAgICAgPHRoZWFkPlxyXG4gICAgLy8gICAgICAgPHRyPlxyXG4gICAgLy8gICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyXCI+SUQ8L3RoPlxyXG4gICAgLy8gICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyXCI+VGnDqnUgxJHhu4E8L3RoPlxyXG4gICAgLy8gICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyXCI+S2nhu4N1IGtp4bq/biB0csO6YzwvdGg+XHJcbiAgICAvLyAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXJcIj5QaOG6oW0gdmkgc+G7rSBk4bulbmc8L3RoPlxyXG4gICAgLy8gICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyXCI+xJDhu4thIGNo4buJPC90aD5cclxuICAgIC8vICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlclwiPlPhu6ljIGNo4bupYTwvdGg+XHJcbiAgICAvLyAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXJcIj5UaeG7h24gw61jaDwvdGg+XHJcbiAgICAvLyAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXJcIj7huqJuaDwvdGg+XHJcbiAgICAvLyAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXJcIj7huqJuaCAzNjA8L3RoPlxyXG4gICAgLy8gICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyXCI+TcO0IHThuqM8L3RoPlxyXG4gICAgLy8gICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyXCI+Q2hpIHBow608L3RoPlxyXG4gICAgLy8gICAgICAgPC90cj5cclxuICAgIC8vICAgICA8L3RoZWFkPlxyXG4gICAgLy8gICAgIDx0Ym9keT5cclxuICAgIC8vICAgICAgIDx0ciBrZXk9e3Byb2R1Y3QuaWR9IHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+XHJcbiAgICAvLyAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXJcIj57cHJvZHVjdC5pZH08L3RkPlxyXG4gICAgLy8gICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyXCI+e3Byb2R1Y3QudGl0bGV9PC90ZD5cclxuICAgIC8vICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlclwiPntwcm9kdWN0LmlkX3Byb2R1Y3R9PC90ZD5cclxuICAgIC8vICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlclwiPntwcm9kdWN0LnByaXZhY3lfdHlwZX08L3RkPlxyXG4gICAgLy8gICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyXCI+e3Byb2R1Y3QubG9jYXRpb259PC90ZD5cclxuICAgIC8vICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlclwiPntwcm9kdWN0LmNhcGFjaXR5fTwvdGQ+XHJcbiAgICAvLyAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXJcIj57cHJvZHVjdC5hbWVuaXRpZXN9PC90ZD5cclxuICAgIC8vICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlclwiPlxyXG4gICAgLy8gICAgICAgICAgIHtwcm9kdWN0LmltYWdlICYmXHJcbiAgICAvLyAgICAgICAgICAgICBBcnJheS5pc0FycmF5KEpTT04ucGFyc2UocHJvZHVjdC5pbWFnZSkpICYmIChcclxuICAgIC8vICAgICAgICAgICAgICAgPD5cclxuICAgIC8vICAgICAgICAgICAgICAgICB7SlNPTi5wYXJzZShwcm9kdWN0LmltYWdlKS5tYXAoKGltYWdlLCBpbmRleCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgY29uc3QgY2xlYW5lZEltYWdlUGF0aCA9IGltYWdlLnJlcGxhY2UoL1tcXFtcXF1cIl0vZywgJycpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VQYXRoID0gYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC91cGxvYWRzL3Byb2R1Y3QvJHtjbGVhbmVkSW1hZ2VQYXRofWA7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVBhdGh9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiSW1hZ2VcIlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwcHhcIlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjcwcHhcIlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9KX1cclxuICAgIC8vICAgICAgICAgICAgICAgPC8+XHJcbiAgICAvLyAgICAgICAgICAgICApfVxyXG4gICAgLy8gICAgICAgICA8L3RkPlxyXG4gICAgLy8gICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XHJcbiAgICAvLyAgICAgICAgICAgPGltZ1xyXG4gICAgLy8gICAgICAgICAgICAgc3JjPXtgaHR0cDovLzEyNy4wLjAuMTo4MDAwL3VwbG9hZHMvcHJvZHVjdDM2MC8ke3Byb2R1Y3QuaW1hZ2UzNjB9YH1cclxuICAgIC8vICAgICAgICAgICAgIGFsdD1cIkltYWdlIDM2MFwiXHJcbiAgICAvLyAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMHB4JywgaGVpZ2h0OiAnMTAwcHgnIH19XHJcbiAgICAvLyAgICAgICAgICAgLz5cclxuICAgIC8vICAgICAgICAgPC90ZD5cclxuICAgIC8vICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlclwiPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAvLyAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXJcIj57cHJvZHVjdC5wcmljZX08L3RkPlxyXG4gICAgLy8gICAgICAgPC90cj5cclxuICAgIC8vICAgICA8L3Rib2R5PlxyXG4gICAgLy8gICA8L3RhYmxlPlxyXG4gICAgLy8gPC9kaXY+XHJcbiAgICA8PjwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlsUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVBhcmFtcyIsInVzZVByb2R1Y3QiLCJnZXRQcm9kdWN0QnlJZCIsIlByb2R1Y3REZXRhaWxQYWdlIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJlcnJvciIsImZldGNoUHJvZHVjdCIsInJlc3BvbnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(app)/show-product/page.js\n"));

/***/ })

});