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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCategory: function() { return /* binding */ useCategory; }\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/axios */ \"(app-pages-browser)/./src/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\nvar _s = $RefreshSig$();\n\n\n\n\nconst useCategory = function() {\n    let { middleware, redirectIfAuthenticated } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n    const { data: category, error, mutate } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/category\", ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/category\").then((res)=>res.data).catch((error)=>{\n            if (error.response.status !== 409) throw error;\n        // router.push('/verify-email')\n        }));\n    /**\r\n     * hàm csrf gửi yêu cầu get/scanctum/csrf-cookie để nhận XSRF token từ server \r\n     */ const csrf = ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/sanctum/csrf-cookie\");\n    /* \r\n    hàm register xử lý quá trình đky ng dùng\r\n    gửi yc POST/register với thông tin người dùng và sau đó cập nhât dữ liệu người dùng\r\n    nhận đối tượng có các thuộc tính, trong đó setErrors là hàm \r\n    để thiết lập lỗi và ...props là cách để truyền các thuộc tính vào hàm\r\n    */ const createCategory = async (param)=>{\n        let { setErrors, setStatus, ...props } = param;\n        await csrf() //hàm đảm bảo mã được gửi kèm yêu câu POST\n        ;\n        // setLoading(true);\n        setErrors([]);\n        console.log(props);\n        _lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/add-category\", props).then(()=>mutate()) //sau khi POST thành công, gọi hàm mutate() để cập nhật dữ liệu khi đăng kí thàng công\n        .catch((error)=>{\n            if (error.response.status !== 422) throw error;\n            setErrors(error.response.data.errors);\n        });\n    };\n    // useEffect(() => {\n    //     if (middleware === 'guest' && redirectIfAuthenticated && user)\n    //         router.push(redirectIfAuthenticated)\n    //     if (\n    //         window.location.pathname === '/verify-email' &&\n    //         user?.email_verified_at\n    //     )\n    //         router.push(redirectIfAuthenticated)\n    //     if (middleware === 'auth' && error) logout()\n    // }, [user, error])\n    return {\n        category,\n        createCategory,\n        error,\n        mutate\n    };\n} /**\r\n * - tệp này chứa các hàm và custom hooks \r\n * liên quan đến xác thực và quản lý người dùng\r\n * - sử dụng hook useSWR từ thư viện swr \r\n * để thực hiện yêu cầu lấy dữ liệu từ server \r\n * - sử dụng hook useRouter và useParams từ thư viện\r\n * Nextjs để lấy thông tin về router và các tham số trong URL\r\n * - useAuth trả về đối tượng chứa các hàm và thông tin\r\n * liên quan đến xác thực và người dùng\r\n */ ;\n_s(useCategory, \"YhlAL9jcL0w0tzEeTwtBLoLjUSs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams,\n        swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy9jYXRlZ29yeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QjtBQUNPO0FBQ0U7QUFDcUI7QUFFL0MsTUFBTUssY0FBYztRQUFDLEVBQUVDLFVBQVUsRUFBRUMsdUJBQXVCLEVBQUUsb0VBQUcsQ0FBQzs7SUFDbkUsTUFBTUMsU0FBU0osMERBQVNBO0lBQ3hCLE1BQU1LLFNBQVNOLDBEQUFTQTtJQUd4QixNQUFNLEVBQUVPLE1BQU1DLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUUsR0FBR2IsK0NBQU1BLENBQUMsYUFBYSxJQUMxREMsa0RBQUtBLENBQ0FhLEdBQUcsQ0FBQyxhQUNKQyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlOLElBQUksRUFDcEJPLEtBQUssQ0FBQ0wsQ0FBQUE7WUFDSCxJQUFJQSxNQUFNTSxRQUFRLENBQUNDLE1BQU0sS0FBSyxLQUFLLE1BQU1QO1FBRXpDLCtCQUErQjtRQUNuQztJQUdSOztLQUVDLEdBRUQsTUFBTVEsT0FBTyxJQUFNbkIsa0RBQUtBLENBQUNhLEdBQUcsQ0FBQztJQUk3Qjs7Ozs7SUFLQSxHQUVBLE1BQU1PLGlCQUFpQjtZQUFPLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFLEdBQUdDLE9BQU87UUFDNUQsTUFBTUosT0FBTywwQ0FBMEM7O1FBRXZELG9CQUFvQjtRQUNwQkUsVUFBVSxFQUFFO1FBRVpHLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFFWnZCLGtEQUFLQSxDQUVBMEIsSUFBSSxDQUFDLGlCQUFpQkgsT0FDdEJULElBQUksQ0FBQyxJQUFNRixVQUFVLHNGQUFzRjtTQUMzR0ksS0FBSyxDQUFDTCxDQUFBQTtZQUNILElBQUlBLE1BQU1NLFFBQVEsQ0FBQ0MsTUFBTSxLQUFLLEtBQUssTUFBTVA7WUFFekNVLFVBQVVWLE1BQU1NLFFBQVEsQ0FBQ1IsSUFBSSxDQUFDa0IsTUFBTTtRQUN4QztJQU9SO0lBRUEsb0JBQW9CO0lBQ3BCLHFFQUFxRTtJQUNyRSwrQ0FBK0M7SUFDL0MsV0FBVztJQUNYLDBEQUEwRDtJQUMxRCxrQ0FBa0M7SUFDbEMsUUFBUTtJQUNSLCtDQUErQztJQUMvQyxtREFBbUQ7SUFDbkQsb0JBQW9CO0lBRXBCLE9BQU87UUFDSGpCO1FBQ0FVO1FBQ0FUO1FBQU9DO0lBRVg7QUFDSixFQUdBOzs7Ozs7Ozs7Q0FTQyxJQVpBO0dBekVZUjs7UUFDTUQsc0RBQVNBO1FBQ1RELHNEQUFTQTtRQUdrQkgsMkNBQU1BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy9jYXRlZ29yeS5qcz9hN2I2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnQC9saWIvYXhpb3MnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMsIHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDYXRlZ29yeSA9ICh7IG1pZGRsZXdhcmUsIHJlZGlyZWN0SWZBdXRoZW50aWNhdGVkIH0gPSB7fSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpXHJcblxyXG4gICAgXHJcbiAgICBjb25zdCB7IGRhdGE6IGNhdGVnb3J5LCBlcnJvciwgbXV0YXRlIH0gPSB1c2VTV1IoJy9jYXRlZ29yeScsICgpID0+XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldCgnL2NhdGVnb3J5JylcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyAhPT0gNDA5KSB0aHJvdyBlcnJvclxyXG4gXHJcbiAgICAgICAgICAgICAgICAvLyByb3V0ZXIucHVzaCgnL3ZlcmlmeS1lbWFpbCcpXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaMOgbSBjc3JmIGfhu61pIHnDqnUgY+G6p3UgZ2V0L3NjYW5jdHVtL2NzcmYtY29va2llIMSR4buDIG5o4bqtbiBYU1JGIHRva2VuIHThu6sgc2VydmVyIFxyXG4gICAgICovXHJcblxyXG4gICAgY29uc3QgY3NyZiA9ICgpID0+IGF4aW9zLmdldCgnL3NhbmN0dW0vY3NyZi1jb29raWUnKVxyXG5cclxuICAgIFxyXG5cclxuICAgIC8qIFxyXG4gICAgaMOgbSByZWdpc3RlciB44butIGzDvSBxdcOhIHRyw6xuaCDEkWt5IG5nIGTDuW5nXHJcbiAgICBn4butaSB5YyBQT1NUL3JlZ2lzdGVyIHbhu5tpIHRow7RuZyB0aW4gbmfGsOG7nWkgZMO5bmcgdsOgIHNhdSDEkcOzIGPhuq1wIG5ow6J0IGThu68gbGnhu4d1IG5nxrDhu51pIGTDuW5nXHJcbiAgICBuaOG6rW4gxJHhu5FpIHTGsOG7o25nIGPDsyBjw6FjIHRodeG7mWMgdMOtbmgsIHRyb25nIMSRw7Mgc2V0RXJyb3JzIGzDoCBow6BtIFxyXG4gICAgxJHhu4MgdGhp4bq/dCBs4bqtcCBs4buXaSB2w6AgLi4ucHJvcHMgbMOgIGPDoWNoIMSR4buDIHRydXnhu4FuIGPDoWMgdGh14buZYyB0w61uaCB2w6BvIGjDoG1cclxuICAgICovIFxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUNhdGVnb3J5ID0gYXN5bmMgKHsgc2V0RXJyb3JzLCBzZXRTdGF0dXMsIC4uLnByb3BzIH0pID0+IHtcclxuICAgICAgICBhd2FpdCBjc3JmKCkgLy9ow6BtIMSR4bqjbSBi4bqjbyBtw6MgxJHGsOG7o2MgZ+G7rWkga8OobSB5w6p1IGPDonUgUE9TVFxyXG5cclxuICAgICAgICAvLyBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHNldEVycm9ycyhbXSlcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvcHMpO1xyXG5cclxuICAgICAgICBheGlvc1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAucG9zdCgnL2FkZC1jYXRlZ29yeScsIHByb3BzKSBcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gbXV0YXRlKCkpIC8vc2F1IGtoaSBQT1NUIHRow6BuaCBjw7RuZywgZ+G7jWkgaMOgbSBtdXRhdGUoKSDEkeG7gyBj4bqtcCBuaOG6rXQgZOG7ryBsaeG7h3Uga2hpIMSRxINuZyBrw60gdGjDoG5nIGPDtG5nXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzICE9PSA0MjIpIHRocm93IGVycm9yXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JzKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgICBcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKG1pZGRsZXdhcmUgPT09ICdndWVzdCcgJiYgcmVkaXJlY3RJZkF1dGhlbnRpY2F0ZWQgJiYgdXNlcilcclxuICAgIC8vICAgICAgICAgcm91dGVyLnB1c2gocmVkaXJlY3RJZkF1dGhlbnRpY2F0ZWQpXHJcbiAgICAvLyAgICAgaWYgKFxyXG4gICAgLy8gICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09ICcvdmVyaWZ5LWVtYWlsJyAmJlxyXG4gICAgLy8gICAgICAgICB1c2VyPy5lbWFpbF92ZXJpZmllZF9hdFxyXG4gICAgLy8gICAgIClcclxuICAgIC8vICAgICAgICAgcm91dGVyLnB1c2gocmVkaXJlY3RJZkF1dGhlbnRpY2F0ZWQpXHJcbiAgICAvLyAgICAgaWYgKG1pZGRsZXdhcmUgPT09ICdhdXRoJyAmJiBlcnJvcikgbG9nb3V0KClcclxuICAgIC8vIH0sIFt1c2VyLCBlcnJvcl0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICBjcmVhdGVDYXRlZ29yeSxcclxuICAgICAgICBlcnJvciwgbXV0YXRlLFxyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogLSB04buHcCBuw6B5IGNo4bupYSBjw6FjIGjDoG0gdsOgIGN1c3RvbSBob29rcyBcclxuICogbGnDqm4gcXVhbiDEkeG6v24geMOhYyB0aOG7sWMgdsOgIHF14bqjbiBsw70gbmfGsOG7nWkgZMO5bmdcclxuICogLSBz4butIGThu6VuZyBob29rIHVzZVNXUiB04burIHRoxrAgdmnhu4duIHN3ciBcclxuICogxJHhu4MgdGjhu7FjIGhp4buHbiB5w6p1IGPhuqd1IGzhuqV5IGThu68gbGnhu4d1IHThu6sgc2VydmVyIFxyXG4gKiAtIHPhu60gZOG7pW5nIGhvb2sgdXNlUm91dGVyIHbDoCB1c2VQYXJhbXMgdOG7qyB0aMawIHZp4buHblxyXG4gKiBOZXh0anMgxJHhu4MgbOG6pXkgdGjDtG5nIHRpbiB24buBIHJvdXRlciB2w6AgY8OhYyB0aGFtIHPhu5EgdHJvbmcgVVJMXHJcbiAqIC0gdXNlQXV0aCB0cuG6oyB24buBIMSR4buRaSB0xrDhu6NuZyBjaOG7qWEgY8OhYyBow6BtIHbDoCB0aMO0bmcgdGluXHJcbiAqIGxpw6puIHF1YW4gxJHhur9uIHjDoWMgdGjhu7FjIHbDoCBuZ8aw4budaSBkw7luZ1xyXG4gKi8iXSwibmFtZXMiOlsidXNlU1dSIiwiYXhpb3MiLCJ1c2VFZmZlY3QiLCJ1c2VQYXJhbXMiLCJ1c2VSb3V0ZXIiLCJ1c2VDYXRlZ29yeSIsIm1pZGRsZXdhcmUiLCJyZWRpcmVjdElmQXV0aGVudGljYXRlZCIsInJvdXRlciIsInBhcmFtcyIsImRhdGEiLCJjYXRlZ29yeSIsImVycm9yIiwibXV0YXRlIiwiZ2V0IiwidGhlbiIsInJlcyIsImNhdGNoIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJjc3JmIiwiY3JlYXRlQ2F0ZWdvcnkiLCJzZXRFcnJvcnMiLCJzZXRTdGF0dXMiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwiZXJyb3JzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/category.js\n"));

/***/ })

});