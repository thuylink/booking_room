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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCategory: function() { return /* binding */ useCategory; }\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/axios */ \"(app-pages-browser)/./src/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\nvar _s = $RefreshSig$();\n\n\n\n\nconst useCategory = function() {\n    let { middleware, redirectIfAuthenticated } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n    const { data: category, error, mutate } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/category\", ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/category\").then((res)=>res.data).catch((error)=>{\n            if (error.response.status !== 409) throw error;\n        }));\n    const csrf = ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/sanctum/csrf-cookie\");\n    const createCategory = async (param)=>{\n        let { setErrors, setStatus, ...props } = param;\n        await csrf();\n        // setLoading(true);\n        setErrors([]);\n        console.log(props);\n        _lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/add-category\", props).then(()=>mutate()) //sau khi POST thành công, gọi hàm mutate() để cập nhật dữ liệu khi đăng kí thàng công\n        .catch((error)=>{\n            if (error.response.status !== 422) throw error;\n            setErrors(error.response.data.errors);\n        });\n    };\n    // useEffect(() => {\n    //     if (middleware === 'guest' && redirectIfAuthenticated && user)\n    //         router.push(redirectIfAuthenticated)\n    //     if (\n    //         window.location.pathname === '/verify-email' &&\n    //         user?.email_verified_at\n    //     )\n    //         router.push(redirectIfAuthenticated)\n    //     if (middleware === 'auth' && error) logout()\n    // }, [user, error])\n    return {\n        category,\n        createCategory,\n        error,\n        mutate\n    };\n} /**\r\n * - tệp này chứa các hàm và custom hooks \r\n * liên quan đến xác thực và quản lý người dùng\r\n * - sử dụng hook useSWR từ thư viện swr \r\n * để thực hiện yêu cầu lấy dữ liệu từ server \r\n * - sử dụng hook useRouter và useParams từ thư viện\r\n * Nextjs để lấy thông tin về router và các tham số trong URL\r\n * - useAuth trả về đối tượng chứa các hàm và thông tin\r\n * liên quan đến xác thực và người dùng\r\n */ ;\n_s(useCategory, \"YhlAL9jcL0w0tzEeTwtBLoLjUSs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams,\n        swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy9jYXRlZ29yeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QjtBQUNPO0FBQ0U7QUFDcUI7QUFFL0MsTUFBTUssY0FBYztRQUFDLEVBQUVDLFVBQVUsRUFBRUMsdUJBQXVCLEVBQUUsb0VBQUcsQ0FBQzs7SUFDbkUsTUFBTUMsU0FBU0osMERBQVNBO0lBQ3hCLE1BQU1LLFNBQVNOLDBEQUFTQTtJQUd4QixNQUFNLEVBQUVPLE1BQU1DLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUUsR0FBR2IsK0NBQU1BLENBQUMsYUFBYSxJQUMxREMsa0RBQUtBLENBQ0FhLEdBQUcsQ0FBQyxhQUNKQyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlOLElBQUksRUFDcEJPLEtBQUssQ0FBQ0wsQ0FBQUE7WUFDSCxJQUFJQSxNQUFNTSxRQUFRLENBQUNDLE1BQU0sS0FBSyxLQUFLLE1BQU1QO1FBQzdDO0lBR1IsTUFBTVEsT0FBTyxJQUFNbkIsa0RBQUtBLENBQUNhLEdBQUcsQ0FBQztJQUU3QixNQUFNTyxpQkFBaUI7WUFBTyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxPQUFPO1FBQzVELE1BQU1KO1FBRU4sb0JBQW9CO1FBQ3BCRSxVQUFVLEVBQUU7UUFFWkcsUUFBUUMsR0FBRyxDQUFDRjtRQUVadkIsa0RBQUtBLENBRUEwQixJQUFJLENBQUMsaUJBQWlCSCxPQUN0QlQsSUFBSSxDQUFDLElBQU1GLFVBQVUsc0ZBQXNGO1NBQzNHSSxLQUFLLENBQUNMLENBQUFBO1lBQ0gsSUFBSUEsTUFBTU0sUUFBUSxDQUFDQyxNQUFNLEtBQUssS0FBSyxNQUFNUDtZQUV6Q1UsVUFBVVYsTUFBTU0sUUFBUSxDQUFDUixJQUFJLENBQUNrQixNQUFNO1FBQ3hDO0lBT1I7SUFFQSxvQkFBb0I7SUFDcEIscUVBQXFFO0lBQ3JFLCtDQUErQztJQUMvQyxXQUFXO0lBQ1gsMERBQTBEO0lBQzFELGtDQUFrQztJQUNsQyxRQUFRO0lBQ1IsK0NBQStDO0lBQy9DLG1EQUFtRDtJQUNuRCxvQkFBb0I7SUFFcEIsT0FBTztRQUNIakI7UUFDQVU7UUFDQVQ7UUFBT0M7SUFFWDtBQUNKLEVBR0E7Ozs7Ozs7OztDQVNDLElBWkE7R0ExRFlSOztRQUNNRCxzREFBU0E7UUFDVEQsc0RBQVNBO1FBR2tCSCwyQ0FBTUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL2NhdGVnb3J5LmpzP2E3YjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcbmltcG9ydCBheGlvcyBmcm9tICdAL2xpYi9heGlvcydcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVBhcmFtcywgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUNhdGVnb3J5ID0gKHsgbWlkZGxld2FyZSwgcmVkaXJlY3RJZkF1dGhlbnRpY2F0ZWQgfSA9IHt9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKClcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IHsgZGF0YTogY2F0ZWdvcnksIGVycm9yLCBtdXRhdGUgfSA9IHVzZVNXUignL2NhdGVnb3J5JywgKCkgPT5cclxuICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAuZ2V0KCcvY2F0ZWdvcnknKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzICE9PSA0MDkpIHRocm93IGVycm9yXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IGNzcmYgPSAoKSA9PiBheGlvcy5nZXQoJy9zYW5jdHVtL2NzcmYtY29va2llJylcclxuXHJcbiAgICBjb25zdCBjcmVhdGVDYXRlZ29yeSA9IGFzeW5jICh7IHNldEVycm9ycywgc2V0U3RhdHVzLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgICAgICAgYXdhaXQgY3NyZigpIFxyXG5cclxuICAgICAgICAvLyBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHNldEVycm9ycyhbXSlcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvcHMpO1xyXG5cclxuICAgICAgICBheGlvc1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAucG9zdCgnL2FkZC1jYXRlZ29yeScsIHByb3BzKSBcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gbXV0YXRlKCkpIC8vc2F1IGtoaSBQT1NUIHRow6BuaCBjw7RuZywgZ+G7jWkgaMOgbSBtdXRhdGUoKSDEkeG7gyBj4bqtcCBuaOG6rXQgZOG7ryBsaeG7h3Uga2hpIMSRxINuZyBrw60gdGjDoG5nIGPDtG5nXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzICE9PSA0MjIpIHRocm93IGVycm9yXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JzKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgICBcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKG1pZGRsZXdhcmUgPT09ICdndWVzdCcgJiYgcmVkaXJlY3RJZkF1dGhlbnRpY2F0ZWQgJiYgdXNlcilcclxuICAgIC8vICAgICAgICAgcm91dGVyLnB1c2gocmVkaXJlY3RJZkF1dGhlbnRpY2F0ZWQpXHJcbiAgICAvLyAgICAgaWYgKFxyXG4gICAgLy8gICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09ICcvdmVyaWZ5LWVtYWlsJyAmJlxyXG4gICAgLy8gICAgICAgICB1c2VyPy5lbWFpbF92ZXJpZmllZF9hdFxyXG4gICAgLy8gICAgIClcclxuICAgIC8vICAgICAgICAgcm91dGVyLnB1c2gocmVkaXJlY3RJZkF1dGhlbnRpY2F0ZWQpXHJcbiAgICAvLyAgICAgaWYgKG1pZGRsZXdhcmUgPT09ICdhdXRoJyAmJiBlcnJvcikgbG9nb3V0KClcclxuICAgIC8vIH0sIFt1c2VyLCBlcnJvcl0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICBjcmVhdGVDYXRlZ29yeSxcclxuICAgICAgICBlcnJvciwgbXV0YXRlLFxyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogLSB04buHcCBuw6B5IGNo4bupYSBjw6FjIGjDoG0gdsOgIGN1c3RvbSBob29rcyBcclxuICogbGnDqm4gcXVhbiDEkeG6v24geMOhYyB0aOG7sWMgdsOgIHF14bqjbiBsw70gbmfGsOG7nWkgZMO5bmdcclxuICogLSBz4butIGThu6VuZyBob29rIHVzZVNXUiB04burIHRoxrAgdmnhu4duIHN3ciBcclxuICogxJHhu4MgdGjhu7FjIGhp4buHbiB5w6p1IGPhuqd1IGzhuqV5IGThu68gbGnhu4d1IHThu6sgc2VydmVyIFxyXG4gKiAtIHPhu60gZOG7pW5nIGhvb2sgdXNlUm91dGVyIHbDoCB1c2VQYXJhbXMgdOG7qyB0aMawIHZp4buHblxyXG4gKiBOZXh0anMgxJHhu4MgbOG6pXkgdGjDtG5nIHRpbiB24buBIHJvdXRlciB2w6AgY8OhYyB0aGFtIHPhu5EgdHJvbmcgVVJMXHJcbiAqIC0gdXNlQXV0aCB0cuG6oyB24buBIMSR4buRaSB0xrDhu6NuZyBjaOG7qWEgY8OhYyBow6BtIHbDoCB0aMO0bmcgdGluXHJcbiAqIGxpw6puIHF1YW4gxJHhur9uIHjDoWMgdGjhu7FjIHbDoCBuZ8aw4budaSBkw7luZ1xyXG4gKi8iXSwibmFtZXMiOlsidXNlU1dSIiwiYXhpb3MiLCJ1c2VFZmZlY3QiLCJ1c2VQYXJhbXMiLCJ1c2VSb3V0ZXIiLCJ1c2VDYXRlZ29yeSIsIm1pZGRsZXdhcmUiLCJyZWRpcmVjdElmQXV0aGVudGljYXRlZCIsInJvdXRlciIsInBhcmFtcyIsImRhdGEiLCJjYXRlZ29yeSIsImVycm9yIiwibXV0YXRlIiwiZ2V0IiwidGhlbiIsInJlcyIsImNhdGNoIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJjc3JmIiwiY3JlYXRlQ2F0ZWdvcnkiLCJzZXRFcnJvcnMiLCJzZXRTdGF0dXMiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwiZXJyb3JzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/category.js\n"));

/***/ })

});