"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(app)/add-product/page",{

/***/ "(app-pages-browser)/./src/hooks/product.js":
/*!******************************!*\
  !*** ./src/hooks/product.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useProduct: function() { return /* binding */ useProduct; }\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/axios */ \"(app-pages-browser)/./src/lib/axios.js\");\nvar _s = $RefreshSig$();\n\n\nconst useProduct = function() {\n    let { middleware, redirectIfAuthenticated } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};\n    _s();\n    var _s1 = $RefreshSig$();\n    const { data: product, error, mutate } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/product\", ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/product\").then((res)=>res.data).catch((error)=>{\n            if (error.response && error.response.status !== 409) throw error;\n        }));\n    const getProductById = async (id)=>{\n        _s1();\n        // try {\n        //   const response = await axios.get(`/show-product/${id}`);\n        //   return response.data;\n        // } catch (error) {\n        //   throw new Error(error.response.data.message);\n        // }\n        const { data: product, error, mutate } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/product\", (id)=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/show-product/${id}\").then((res)=>res.data).catch((error)=>{\n                if (error.response && error.response.status !== 409) throw error;\n            }));\n    };\n    _s1(getProductById, \"Zi1OaJhasoiExdegyexJWqV+EEE=\", false, function() {\n        return [\n            swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n        ];\n    });\n    const csrf = ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/sanctum/csrf-cookie\");\n    const createProduct = async (param)=>{\n        let { formData, setErrors, setStatus } = param;\n        await csrf();\n        setErrors([]);\n        _lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/add-product\", formData).then(()=>mutate()).catch((error)=>{\n            if (error.response && error.response.status !== 422) throw error;\n            setErrors(error.response.data.errors);\n        });\n    };\n    return {\n        product,\n        createProduct,\n        error,\n        mutate,\n        getProductById\n    };\n};\n_s(useProduct, \"Zi1OaJhasoiExdegyexJWqV+EEE=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy9wcm9kdWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUI7QUFDTztBQUV6QixNQUFNRSxhQUFhO1FBQUMsRUFBRUMsVUFBVSxFQUFFQyx1QkFBdUIsRUFBRSxvRUFBRyxDQUFDOzs7SUFDcEUsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFLEdBQUdSLCtDQUFNQSxDQUFDLFlBQVksSUFDMURDLGtEQUFLQSxDQUNGUSxHQUFHLENBQUMsWUFDSkMsSUFBSSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJTixJQUFJLEVBQ3BCTyxLQUFLLENBQUNMLENBQUFBO1lBQ0wsSUFBSUEsTUFBTU0sUUFBUSxJQUFJTixNQUFNTSxRQUFRLENBQUNDLE1BQU0sS0FBSyxLQUFLLE1BQU1QO1FBQzdEO0lBR0osTUFBTVEsaUJBQWlCLE9BQU1DOztRQUMzQixRQUFRO1FBQ1IsNkRBQTZEO1FBQzdELDBCQUEwQjtRQUMxQixvQkFBb0I7UUFDcEIsa0RBQWtEO1FBQ2xELElBQUk7UUFDSixNQUFNLEVBQUVYLE1BQU1DLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUUsR0FBR1IsK0NBQU1BLENBQUMsWUFBWSxDQUFDZ0IsS0FDN0RmLGtEQUFLQSxDQUNGUSxHQUFHLENBQUMsdUJBQ0pDLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSU4sSUFBSSxFQUNwQk8sS0FBSyxDQUFDTCxDQUFBQTtnQkFDTCxJQUFJQSxNQUFNTSxRQUFRLElBQUlOLE1BQU1NLFFBQVEsQ0FBQ0MsTUFBTSxLQUFLLEtBQUssTUFBTVA7WUFDN0Q7SUFFSjtRQWZNUTs7WUFPcUNmLDJDQUFNQTs7O0lBVWpELE1BQU1pQixPQUFPLElBQU1oQixrREFBS0EsQ0FBQ1EsR0FBRyxDQUFDO0lBQzdCLE1BQU1TLGdCQUFnQjtZQUFPLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7UUFDN0QsTUFBTUo7UUFDTkcsVUFBVSxFQUFFO1FBQ1puQixrREFBS0EsQ0FDRnFCLElBQUksQ0FBQyxnQkFBZ0JILFVBQ3JCVCxJQUFJLENBQUMsSUFBTUYsVUFDWEksS0FBSyxDQUFDTCxDQUFBQTtZQUNMLElBQUlBLE1BQU1NLFFBQVEsSUFBSU4sTUFBTU0sUUFBUSxDQUFDQyxNQUFNLEtBQUssS0FBSyxNQUFNUDtZQUUzRGEsVUFBVWIsTUFBTU0sUUFBUSxDQUFDUixJQUFJLENBQUNrQixNQUFNO1FBQ3RDO0lBQ0o7SUFFQSxPQUFPO1FBQ0xqQjtRQUNBWTtRQUNBWDtRQUNBQztRQUNBTztJQUNGO0FBQ0YsRUFBRTtHQWhEV2I7O1FBQzhCRiwyQ0FBTUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3Byb2R1Y3QuanM/YTFiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdAL2xpYi9heGlvcyc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUHJvZHVjdCA9ICh7IG1pZGRsZXdhcmUsIHJlZGlyZWN0SWZBdXRoZW50aWNhdGVkIH0gPSB7fSkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YTogcHJvZHVjdCwgZXJyb3IsIG11dGF0ZSB9ID0gdXNlU1dSKCcvcHJvZHVjdCcsICgpID0+XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KCcvcHJvZHVjdCcpXHJcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2Uuc3RhdHVzICE9PSA0MDkpIHRocm93IGVycm9yO1xyXG4gICAgICB9KSxcclxuICApO1xyXG5cclxuICBjb25zdCBnZXRQcm9kdWN0QnlJZCA9IGFzeW5jIGlkID0+IHtcclxuICAgIC8vIHRyeSB7XHJcbiAgICAvLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAvc2hvdy1wcm9kdWN0LyR7aWR9YCk7XHJcbiAgICAvLyAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAvLyB9XHJcbiAgICBjb25zdCB7IGRhdGE6IHByb2R1Y3QsIGVycm9yLCBtdXRhdGUgfSA9IHVzZVNXUignL3Byb2R1Y3QnLCAoaWQpID0+XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KCcvc2hvdy1wcm9kdWN0LyR7aWR9JylcclxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5zdGF0dXMgIT09IDQwOSkgdGhyb3cgZXJyb3I7XHJcbiAgICAgIH0pLFxyXG4gICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3NyZiA9ICgpID0+IGF4aW9zLmdldCgnL3NhbmN0dW0vY3NyZi1jb29raWUnKTtcclxuICBjb25zdCBjcmVhdGVQcm9kdWN0ID0gYXN5bmMgKHsgZm9ybURhdGEsIHNldEVycm9ycywgc2V0U3RhdHVzIH0pID0+IHtcclxuICAgIGF3YWl0IGNzcmYoKTtcclxuICAgIHNldEVycm9ycyhbXSk7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdCgnL2FkZC1wcm9kdWN0JywgZm9ybURhdGEpXHJcbiAgICAgIC50aGVuKCgpID0+IG11dGF0ZSgpKVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5zdGF0dXMgIT09IDQyMikgdGhyb3cgZXJyb3I7XHJcblxyXG4gICAgICAgIHNldEVycm9ycyhlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycyk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9kdWN0LFxyXG4gICAgY3JlYXRlUHJvZHVjdCxcclxuICAgIGVycm9yLFxyXG4gICAgbXV0YXRlLFxyXG4gICAgZ2V0UHJvZHVjdEJ5SWQsXHJcbiAgfTtcclxufTsiXSwibmFtZXMiOlsidXNlU1dSIiwiYXhpb3MiLCJ1c2VQcm9kdWN0IiwibWlkZGxld2FyZSIsInJlZGlyZWN0SWZBdXRoZW50aWNhdGVkIiwiZGF0YSIsInByb2R1Y3QiLCJlcnJvciIsIm11dGF0ZSIsImdldCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsInJlc3BvbnNlIiwic3RhdHVzIiwiZ2V0UHJvZHVjdEJ5SWQiLCJpZCIsImNzcmYiLCJjcmVhdGVQcm9kdWN0IiwiZm9ybURhdGEiLCJzZXRFcnJvcnMiLCJzZXRTdGF0dXMiLCJwb3N0IiwiZXJyb3JzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/product.js\n"));

/***/ })

});