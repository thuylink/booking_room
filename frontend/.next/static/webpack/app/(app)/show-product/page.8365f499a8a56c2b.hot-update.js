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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductDetailPage: function() { return /* binding */ ProductDetailPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/product */ \"(app-pages-browser)/./src/hooks/product.js\");\n/* __next_internal_client_entry_do_not_use__ ProductDetailPage,default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ProductDetailPage = (props)=>{\n    _s();\n    console.log(props.id);\n    const { product_ID } = (0,_hooks_product__WEBPACK_IMPORTED_MODULE_2__.useProduct)();\n    //   const { id } = useParams();\n    //   const { getProductById, error } = useProduct();\n    //   const [product, setProduct] = useState(null);\n    //   useEffect(() => {\n    //     // console.log('id', id)\n    //     const fetchProduct = async () => {\n    //       try {\n    //         const response = await getProductById(id);\n    //         setProduct(response);\n    //       } catch (error) {\n    //         console.error('Error:', error);\n    //       }\n    //     };\n    //     fetchProduct();\n    //   }, [getProductById, id]);\n    //   if (error) {\n    //     return <div>Error: {error}</div>;\n    //   }\n    //   if (!product) {\n    //     return <div>Loading...</div>;\n    //   }\n    //   const productFields = Object.keys(product);\n    console.log(product_ID(pro));\n    return(// <div>\n    //   <h2>Chi tiết sản phẩm {id}</h2>\n    //   {productFields.map((field) => (\n    //     <p key={field}>\n    //       {field}: {product[field]}\n    //     </p>\n    //   ))}\n    //   <table style={{ borderCollapse: 'collapse' }}>\n    //     <thead>\n    //       <tr>\n    //         <th className=\"border\">ID</th>\n    //         <th className=\"border\">Tiêu đề</th>\n    //         <th className=\"border\">Kiểu kiến trúc</th>\n    //         <th className=\"border\">Phạm vi sử dụng</th>\n    //         <th className=\"border\">Địa chỉ</th>\n    //         <th className=\"border\">Sức chứa</th>\n    //         <th className=\"border\">Tiện ích</th>\n    //         <th className=\"border\">Ảnh</th>\n    //         <th className=\"border\">Ảnh 360</th>\n    //         <th className=\"border\">Mô tả</th>\n    //         <th className=\"border\">Chi phí</th>\n    //       </tr>\n    //     </thead>\n    //     <tbody>\n    //       <tr key={product.id} style={{ border: '1px solid black' }}>\n    //         <td className=\"border\">{product.id}</td>\n    //         <td className=\"border\">{product.title}</td>\n    //         <td className=\"border\">{product.id_product}</td>\n    //         <td className=\"border\">{product.privacy_type}</td>\n    //         <td className=\"border\">{product.location}</td>\n    //         <td className=\"border\">{product.capacity}</td>\n    //         <td className=\"border\">{product.amenities}</td>\n    //         <td className=\"border\">\n    //           {product.image &&\n    //             Array.isArray(JSON.parse(product.image)) && (\n    //               <>\n    //                 {JSON.parse(product.image).map((image, index) => {\n    //                   const cleanedImagePath = image.replace(/[\\[\\]\"]/g, '');\n    //                   const imagePath = `http://127.0.0.1:8000/uploads/product/${cleanedImagePath}`;\n    //                   return (\n    //                     <img\n    //                       key={index}\n    //                       src={imagePath}\n    //                       alt=\"Image\"\n    //                       width=\"100px\"\n    //                       height=\"70px\"\n    //                     />\n    //                   );\n    //                 })}\n    //               </>\n    //             )}\n    //         </td>\n    //         <td className=\"border\">\n    //           <img\n    //             src={`http://127.0.0.1:8000/uploads/product360/${product.image360}`}\n    //             alt=\"Image 360\"\n    //             style={{ width: '100px', height: '100px' }}\n    //           />\n    //         </td>\n    //         <td className=\"border\">{product.description}</td>\n    //         <td className=\"border\">{product.price}</td>\n    //       </tr>\n    //     </tbody>\n    //   </table>\n    // </div>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false));\n};\n_s(ProductDetailPage, \"WdEl8B2KCaspVxpSs//feuBUSf8=\", false, function() {\n    return [\n        _hooks_product__WEBPACK_IMPORTED_MODULE_2__.useProduct\n    ];\n});\n_c = ProductDetailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetailPage);\nvar _c;\n$RefreshReg$(_c, \"ProductDetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGFwcCkvc2hvdy1wcm9kdWN0L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVtRDtBQUNOO0FBQ3VCO0FBRTdELE1BQU1NLG9CQUFvQixDQUFDQzs7SUFDOUJDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTUcsRUFBRTtJQUNwQixNQUFNLEVBQUNDLFVBQVUsRUFBQyxHQUFHUCwwREFBVUE7SUFDbkMsZ0NBQWdDO0lBQ2hDLG9EQUFvRDtJQUNwRCxrREFBa0Q7SUFFbEQsc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQix5Q0FBeUM7SUFDekMsY0FBYztJQUNkLHFEQUFxRDtJQUNyRCxnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLDBDQUEwQztJQUMxQyxVQUFVO0lBQ1YsU0FBUztJQUVULHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFFOUIsaUJBQWlCO0lBQ2pCLHdDQUF3QztJQUN4QyxNQUFNO0lBRU4sb0JBQW9CO0lBQ3BCLG9DQUFvQztJQUNwQyxNQUFNO0lBRU4sZ0RBQWdEO0lBQ2hESSxRQUFRQyxHQUFHLENBQUNFLFdBQVdDO0lBRXJCLE9BQ0UsUUFBUTtJQUNSLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsUUFBUTtJQUNSLG1EQUFtRDtJQUNuRCxjQUFjO0lBQ2QsYUFBYTtJQUNiLHlDQUF5QztJQUN6Qyw4Q0FBOEM7SUFDOUMscURBQXFEO0lBQ3JELHNEQUFzRDtJQUN0RCw4Q0FBOEM7SUFDOUMsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywwQ0FBMEM7SUFDMUMsOENBQThDO0lBQzlDLDRDQUE0QztJQUM1Qyw4Q0FBOEM7SUFDOUMsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2Qsb0VBQW9FO0lBQ3BFLG1EQUFtRDtJQUNuRCxzREFBc0Q7SUFDdEQsMkRBQTJEO0lBQzNELDZEQUE2RDtJQUM3RCx5REFBeUQ7SUFDekQseURBQXlEO0lBQ3pELDBEQUEwRDtJQUMxRCxrQ0FBa0M7SUFDbEMsOEJBQThCO0lBQzlCLDREQUE0RDtJQUM1RCxtQkFBbUI7SUFDbkIscUVBQXFFO0lBQ3JFLDRFQUE0RTtJQUM1RSxtR0FBbUc7SUFFbkcsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixvQ0FBb0M7SUFDcEMsd0NBQXdDO0lBQ3hDLG9DQUFvQztJQUNwQyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsbUZBQW1GO0lBQ25GLDhCQUE4QjtJQUM5QiwwREFBMEQ7SUFDMUQsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw0REFBNEQ7SUFDNUQsc0RBQXNEO0lBQ3RELGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLFNBQVM7a0JBQ1Q7QUFFSixFQUFFO0dBckdXTjs7UUFFWUYsc0RBQVVBOzs7S0FGdEJFO0FBdUdiLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC8oYXBwKS9zaG93LXByb2R1Y3QvcGFnZS5qcz85Yzc5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB1c2VQcm9kdWN0LCBnZXRQcm9kdWN0QnlJZCB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3Byb2R1Y3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3REZXRhaWxQYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcy5pZClcclxuICAgIGNvbnN0IHtwcm9kdWN0X0lEfSA9IHVzZVByb2R1Y3QoKTtcclxuLy8gICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuLy8gICBjb25zdCB7IGdldFByb2R1Y3RCeUlkLCBlcnJvciB9ID0gdXNlUHJvZHVjdCgpO1xyXG4vLyAgIGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgLy8gY29uc29sZS5sb2coJ2lkJywgaWQpXHJcbi8vICAgICBjb25zdCBmZXRjaFByb2R1Y3QgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICAgIHRyeSB7XHJcbi8vICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRQcm9kdWN0QnlJZChpZCk7XHJcbi8vICAgICAgICAgc2V0UHJvZHVjdChyZXNwb25zZSk7XHJcbi8vICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIGZldGNoUHJvZHVjdCgpO1xyXG4vLyAgIH0sIFtnZXRQcm9kdWN0QnlJZCwgaWRdKTtcclxuXHJcbi8vICAgaWYgKGVycm9yKSB7XHJcbi8vICAgICByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yfTwvZGl2PjtcclxuLy8gICB9XHJcblxyXG4vLyAgIGlmICghcHJvZHVjdCkge1xyXG4vLyAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuLy8gICB9XHJcblxyXG4vLyAgIGNvbnN0IHByb2R1Y3RGaWVsZHMgPSBPYmplY3Qua2V5cyhwcm9kdWN0KTtcclxuY29uc29sZS5sb2cocHJvZHVjdF9JRChwcm8pKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIDxkaXY+XHJcbiAgICAvLyAgIDxoMj5DaGkgdGnhur90IHPhuqNuIHBo4bqpbSB7aWR9PC9oMj5cclxuICAgIC8vICAge3Byb2R1Y3RGaWVsZHMubWFwKChmaWVsZCkgPT4gKFxyXG4gICAgLy8gICAgIDxwIGtleT17ZmllbGR9PlxyXG4gICAgLy8gICAgICAge2ZpZWxkfToge3Byb2R1Y3RbZmllbGRdfVxyXG4gICAgLy8gICAgIDwvcD5cclxuICAgIC8vICAgKSl9XHJcbiAgICAvLyAgIDx0YWJsZSBzdHlsZT17eyBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJyB9fT5cclxuICAgIC8vICAgICA8dGhlYWQ+XHJcbiAgICAvLyAgICAgICA8dHI+XHJcbiAgICAvLyAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXJcIj5JRDwvdGg+XHJcbiAgICAvLyAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXJcIj5UacOqdSDEkeG7gTwvdGg+XHJcbiAgICAvLyAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXJcIj5LaeG7g3Uga2nhur9uIHRyw7pjPC90aD5cclxuICAgIC8vICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlclwiPlBo4bqhbSB2aSBz4butIGThu6VuZzwvdGg+XHJcbiAgICAvLyAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXJcIj7EkOG7i2EgY2jhu4k8L3RoPlxyXG4gICAgLy8gICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyXCI+U+G7qWMgY2jhu6lhPC90aD5cclxuICAgIC8vICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlclwiPlRp4buHbiDDrWNoPC90aD5cclxuICAgIC8vICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlclwiPuG6om5oPC90aD5cclxuICAgIC8vICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlclwiPuG6om5oIDM2MDwvdGg+XHJcbiAgICAvLyAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXJcIj5Nw7QgdOG6ozwvdGg+XHJcbiAgICAvLyAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXJcIj5DaGkgcGjDrTwvdGg+XHJcbiAgICAvLyAgICAgICA8L3RyPlxyXG4gICAgLy8gICAgIDwvdGhlYWQ+XHJcbiAgICAvLyAgICAgPHRib2R5PlxyXG4gICAgLy8gICAgICAgPHRyIGtleT17cHJvZHVjdC5pZH0gc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgIC8vICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlclwiPntwcm9kdWN0LmlkfTwvdGQ+XHJcbiAgICAvLyAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXJcIj57cHJvZHVjdC50aXRsZX08L3RkPlxyXG4gICAgLy8gICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyXCI+e3Byb2R1Y3QuaWRfcHJvZHVjdH08L3RkPlxyXG4gICAgLy8gICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyXCI+e3Byb2R1Y3QucHJpdmFjeV90eXBlfTwvdGQ+XHJcbiAgICAvLyAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXJcIj57cHJvZHVjdC5sb2NhdGlvbn08L3RkPlxyXG4gICAgLy8gICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyXCI+e3Byb2R1Y3QuY2FwYWNpdHl9PC90ZD5cclxuICAgIC8vICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlclwiPntwcm9kdWN0LmFtZW5pdGllc308L3RkPlxyXG4gICAgLy8gICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XHJcbiAgICAvLyAgICAgICAgICAge3Byb2R1Y3QuaW1hZ2UgJiZcclxuICAgIC8vICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkoSlNPTi5wYXJzZShwcm9kdWN0LmltYWdlKSkgJiYgKFxyXG4gICAgLy8gICAgICAgICAgICAgICA8PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHtKU09OLnBhcnNlKHByb2R1Y3QuaW1hZ2UpLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICBjb25zdCBjbGVhbmVkSW1hZ2VQYXRoID0gaW1hZ2UucmVwbGFjZSgvW1xcW1xcXVwiXS9nLCAnJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZVBhdGggPSBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL3VwbG9hZHMvcHJvZHVjdC8ke2NsZWFuZWRJbWFnZVBhdGh9YDtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlUGF0aH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJbWFnZVwiXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDBweFwiXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNzBweFwiXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgLy8gICAgICAgICAgICAgICA8Lz5cclxuICAgIC8vICAgICAgICAgICAgICl9XHJcbiAgICAvLyAgICAgICAgIDwvdGQ+XHJcbiAgICAvLyAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXJcIj5cclxuICAgIC8vICAgICAgICAgICA8aW1nXHJcbiAgICAvLyAgICAgICAgICAgICBzcmM9e2BodHRwOi8vMTI3LjAuMC4xOjgwMDAvdXBsb2Fkcy9wcm9kdWN0MzYwLyR7cHJvZHVjdC5pbWFnZTM2MH1gfVxyXG4gICAgLy8gICAgICAgICAgICAgYWx0PVwiSW1hZ2UgMzYwXCJcclxuICAgIC8vICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnLCBoZWlnaHQ6ICcxMDBweCcgfX1cclxuICAgIC8vICAgICAgICAgICAvPlxyXG4gICAgLy8gICAgICAgICA8L3RkPlxyXG4gICAgLy8gICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyXCI+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC90ZD5cclxuICAgIC8vICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlclwiPntwcm9kdWN0LnByaWNlfTwvdGQ+XHJcbiAgICAvLyAgICAgICA8L3RyPlxyXG4gICAgLy8gICAgIDwvdGJvZHk+XHJcbiAgICAvLyAgIDwvdGFibGU+XHJcbiAgICAvLyA8L2Rpdj5cclxuICAgIDw+PC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWxQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUGFyYW1zIiwidXNlUHJvZHVjdCIsImdldFByb2R1Y3RCeUlkIiwiUHJvZHVjdERldGFpbFBhZ2UiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInByb2R1Y3RfSUQiLCJwcm8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(app)/show-product/page.js\n"));

/***/ })

});