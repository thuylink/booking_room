"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/login/page",{

/***/ "(app-pages-browser)/./src/hooks/auth.js":
/*!***************************!*\
  !*** ./src/hooks/auth.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/axios */ \"(app-pages-browser)/./src/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\nvar _s = $RefreshSig$();\n\n\n\n\nconst useAuth = function() {\n    let { middleware, redirectIfAuthenticated } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n    /**\r\n     * sử dụng hook useSWR để thực hiện yc GET đến /api/user để\r\n     * lấy thông tin người dùng từ backend\r\n     * - user: biến chứa dữ liệu ng dùng, được lấy từ phản hồi của yc GET/api/user\r\n     * - error: biến chứa thôn tin về lỗi nếu có\r\n     * - mutate: hàm để làm mới dữ liệu ng dùng khi cần\r\n     */ const { data: user, error, mutate } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/api/user\", ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/api/user\").then((res)=>res.data).catch((error)=>{\n            if (error.response.status !== 409) throw error;\n            router.push(\"/verify-email\");\n        }));\n    /**\r\n     * hàm csrf gửi yêu cầu get/scanctum/csrf-cookie để nhận XSRF token từ server \r\n     */ const csrf = ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/sanctum/csrf-cookie\");\n    /* \r\n    hàm register xử lý quá trình đky ng dùng\r\n    gửi yc POST/register với thông tin người dùng và sau đó cập nhât dữ liệu người dùng\r\n    nhận đối tượng có các thuộc tính, trong đó setErrors là hàm \r\n    để thiết lập lỗi và ...props là cách để truyền các thuộc tính vào hàm\r\n    */ const register = async (param)=>{\n        let { setErrors, ...props } = param;\n        await csrf() //hàm đảm bảo mã được gửi kèm yêu câu POST\n        ;\n        setErrors([]);\n        _lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"]/* yêu cầu POST gửi đến đường dẫn /register\r\n        props là đối tượng chứa các thông tin username, pass, email cần gửi đi trong yêu cầu\r\n        */ .post(\"/register\", props);\n        console.log(p).then(()=>mutate()) //sau khi POST thành công, gọi hàm mutate() để cập nhật dữ liệu khi đăng kí thàng công\n        .catch((error)=>{\n            if (error.response.status !== 422) throw error;\n            setErrors(error.response.data.errors);\n        });\n    };\n    const login = async (param)=>{\n        let { setErrors, setStatus, ...props } = param;\n        await csrf();\n        setErrors([]);\n        setStatus(null);\n        _lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/login\", props).then(()=>mutate()).catch((error)=>{\n            if (error.response.status !== 422) throw error;\n            setErrors(error.response.data.errors);\n        });\n    };\n    // const forgotPassword = async ({ setErrors, setStatus, email }) => {\n    //     await csrf()\n    //     setErrors([])\n    //     setStatus(null)\n    //     axios\n    //         .post('/forgot-password', { email })\n    //         .then(response => setStatus(response.data.status))\n    //         .catch(error => {\n    //             if (error.response.status !== 422) throw error\n    //             setErrors(error.response.data.errors)\n    //         })\n    // }\n    // const resetPassword = async ({ setErrors, setStatus, ...props }) => {\n    //     await csrf()\n    //     setErrors([])\n    //     setStatus(null)\n    //     axios\n    //         .post('/reset-password', { token: params.token, ...props })\n    //         .then(response =>\n    //             router.push('/login?reset=' + btoa(response.data.status)),\n    //         )\n    //         .catch(error => {\n    //             if (error.response.status !== 422) throw error\n    //             setErrors(error.response.data.errors)\n    //         })\n    // }\n    // const resendEmailVerification = ({ setStatus }) => {\n    //     axios\n    //         .post('/email/verification-notification')\n    //         .then(response => setStatus(response.data.status))\n    // }\n    const logout = async ()=>{\n        if (!error) {\n            await _lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/logout\").then(()=>mutate());\n        }\n        window.location.pathname = \"/login\";\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (middleware === \"guest\" && redirectIfAuthenticated && user) router.push(redirectIfAuthenticated);\n        if (window.location.pathname === \"/verify-email\" && (user === null || user === void 0 ? void 0 : user.email_verified_at)) router.push(redirectIfAuthenticated);\n        if (middleware === \"auth\" && error) logout();\n    }, [\n        user,\n        error\n    ]);\n    return {\n        user,\n        register,\n        login,\n        // forgotPassword,\n        // resetPassword,\n        // resendEmailVerification,\n        logout\n    };\n} /**\r\n * - tệp này chứa các hàm và custom hooks \r\n * liên quan đến xác thực và quản lý người dùng\r\n * - sử dụng hook useSWR từ thư viện swr \r\n * để thực hiện yêu cầu lấy dữ liệu từ server \r\n * - sử dụng hook useRouter và useParams từ thư viện\r\n * Nextjs để lấy thông tin về router và các tham số trong URL\r\n * - useAuth trả về đối tượng chứa các hàm và thông tin\r\n * liên quan đến xác thực và người dùng\r\n */ ;\n_s(useAuth, \"60Wu3Gpga2JnjZbeEVJs1AOlR3g=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams,\n        swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QnhCLGlCQUFBQSwyQkFBQUEsS0FBTXlCLGlCQUFpQixHQUV2QjVCLE9BQU9ZLElBQUksQ0FBQ2I7UUFDaEIsSUFBSUQsZUFBZSxVQUFVTSxPQUFPb0I7SUFDeEMsR0FBRztRQUFDckI7UUFBTUM7S0FBTTtJQUVoQixPQUFPO1FBQ0hEO1FBQ0FXO1FBQ0FRO1FBQ0Esa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQiwyQkFBMkI7UUFDM0JFO0lBQ0o7QUFDSixFQUdBOzs7Ozs7Ozs7Q0FTQyxJQVpBO0dBM0lZM0I7O1FBQ01ELHNEQUFTQTtRQUNURCxzREFBU0E7UUFTY0gsMkNBQU1BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy9hdXRoLmpzPzRhYzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcbmltcG9ydCBheGlvcyBmcm9tICdAL2xpYi9heGlvcydcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVBhcmFtcywgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoeyBtaWRkbGV3YXJlLCByZWRpcmVjdElmQXV0aGVudGljYXRlZCB9ID0ge30pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc+G7rSBk4bulbmcgaG9vayB1c2VTV1IgxJHhu4MgdGjhu7FjIGhp4buHbiB5YyBHRVQgxJHhur9uIC9hcGkvdXNlciDEkeG7g1xyXG4gICAgICogbOG6pXkgdGjDtG5nIHRpbiBuZ8aw4budaSBkw7luZyB04burIGJhY2tlbmRcclxuICAgICAqIC0gdXNlcjogYmnhur9uIGNo4bupYSBk4buvIGxp4buHdSBuZyBkw7luZywgxJHGsOG7o2MgbOG6pXkgdOG7qyBwaOG6o24gaOG7k2kgY+G7p2EgeWMgR0VUL2FwaS91c2VyXHJcbiAgICAgKiAtIGVycm9yOiBiaeG6v24gY2jhu6lhIHRow7RuIHRpbiB24buBIGzhu5dpIG7hur91IGPDs1xyXG4gICAgICogLSBtdXRhdGU6IGjDoG0gxJHhu4MgbMOgbSBt4bubaSBk4buvIGxp4buHdSBuZyBkw7luZyBraGkgY+G6p25cclxuICAgICAqL1xyXG4gICAgY29uc3QgeyBkYXRhOiB1c2VyLCBlcnJvciwgbXV0YXRlIH0gPSB1c2VTV1IoJy9hcGkvdXNlcicsICgpID0+XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldCgnL2FwaS91c2VyJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyAhPT0gNDA5KSB0aHJvdyBlcnJvclxyXG4gXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL3ZlcmlmeS1lbWFpbCcpXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaMOgbSBjc3JmIGfhu61pIHnDqnUgY+G6p3UgZ2V0L3NjYW5jdHVtL2NzcmYtY29va2llIMSR4buDIG5o4bqtbiBYU1JGIHRva2VuIHThu6sgc2VydmVyIFxyXG4gICAgICovXHJcblxyXG4gICAgY29uc3QgY3NyZiA9ICgpID0+IGF4aW9zLmdldCgnL3NhbmN0dW0vY3NyZi1jb29raWUnKVxyXG5cclxuXHJcbiAgICAvKiBcclxuICAgIGjDoG0gcmVnaXN0ZXIgeOG7rSBsw70gcXXDoSB0csOsbmggxJFreSBuZyBkw7luZ1xyXG4gICAgZ+G7rWkgeWMgUE9TVC9yZWdpc3RlciB24bubaSB0aMO0bmcgdGluIG5nxrDhu51pIGTDuW5nIHbDoCBzYXUgxJHDsyBj4bqtcCBuaMOidCBk4buvIGxp4buHdSBuZ8aw4budaSBkw7luZ1xyXG4gICAgbmjhuq1uIMSR4buRaSB0xrDhu6NuZyBjw7MgY8OhYyB0aHXhu5ljIHTDrW5oLCB0cm9uZyDEkcOzIHNldEVycm9ycyBsw6AgaMOgbSBcclxuICAgIMSR4buDIHRoaeG6v3QgbOG6rXAgbOG7l2kgdsOgIC4uLnByb3BzIGzDoCBjw6FjaCDEkeG7gyB0cnV54buBbiBjw6FjIHRodeG7mWMgdMOtbmggdsOgbyBow6BtXHJcbiAgICAqLyBcclxuXHJcbiAgICBjb25zdCByZWdpc3RlciA9IGFzeW5jICh7IHNldEVycm9ycywgLi4ucHJvcHMgfSkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGNzcmYoKSAvL2jDoG0gxJHhuqNtIGLhuqNvIG3DoyDEkcaw4bujYyBn4butaSBrw6htIHnDqnUgY8OidSBQT1NUXHJcblxyXG4gICAgICAgIHNldEVycm9ycyhbXSlcclxuXHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAvKiB5w6p1IGPhuqd1IFBPU1QgZ+G7rWkgxJHhur9uIMSRxrDhu51uZyBk4bqrbiAvcmVnaXN0ZXJcclxuICAgICAgICBwcm9wcyBsw6AgxJHhu5FpIHTGsOG7o25nIGNo4bupYSBjw6FjIHRow7RuZyB0aW4gdXNlcm5hbWUsIHBhc3MsIGVtYWlsIGPhuqduIGfhu61pIMSRaSB0cm9uZyB5w6p1IGPhuqd1XHJcbiAgICAgICAgKi9cclxuICAgICAgICAgICAgLnBvc3QoJy9yZWdpc3RlcicsIHByb3BzKSBcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gbXV0YXRlKCkpIC8vc2F1IGtoaSBQT1NUIHRow6BuaCBjw7RuZywgZ+G7jWkgaMOgbSBtdXRhdGUoKSDEkeG7gyBj4bqtcCBuaOG6rXQgZOG7ryBsaeG7h3Uga2hpIMSRxINuZyBrw60gdGjDoG5nIGPDtG5nXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzICE9PSA0MjIpIHRocm93IGVycm9yXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JzKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgc2V0RXJyb3JzLCBzZXRTdGF0dXMsIC4uLnByb3BzIH0pID0+IHtcclxuICAgICAgICBhd2FpdCBjc3JmKClcclxuXHJcbiAgICAgICAgc2V0RXJyb3JzKFtdKVxyXG4gICAgICAgIHNldFN0YXR1cyhudWxsKVxyXG5cclxuICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAucG9zdCgnL2xvZ2luJywgcHJvcHMpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IG11dGF0ZSgpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyAhPT0gNDIyKSB0aHJvdyBlcnJvclxyXG5cclxuICAgICAgICAgICAgICAgIHNldEVycm9ycyhlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycylcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zdCBmb3Jnb3RQYXNzd29yZCA9IGFzeW5jICh7IHNldEVycm9ycywgc2V0U3RhdHVzLCBlbWFpbCB9KSA9PiB7XHJcbiAgICAvLyAgICAgYXdhaXQgY3NyZigpXHJcblxyXG4gICAgLy8gICAgIHNldEVycm9ycyhbXSlcclxuICAgIC8vICAgICBzZXRTdGF0dXMobnVsbClcclxuXHJcbiAgICAvLyAgICAgYXhpb3NcclxuICAgIC8vICAgICAgICAgLnBvc3QoJy9mb3Jnb3QtcGFzc3dvcmQnLCB7IGVtYWlsIH0pXHJcbiAgICAvLyAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHNldFN0YXR1cyhyZXNwb25zZS5kYXRhLnN0YXR1cykpXHJcbiAgICAvLyAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzICE9PSA0MjIpIHRocm93IGVycm9yXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgc2V0RXJyb3JzKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzKVxyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGNvbnN0IHJlc2V0UGFzc3dvcmQgPSBhc3luYyAoeyBzZXRFcnJvcnMsIHNldFN0YXR1cywgLi4ucHJvcHMgfSkgPT4ge1xyXG4gICAgLy8gICAgIGF3YWl0IGNzcmYoKVxyXG5cclxuICAgIC8vICAgICBzZXRFcnJvcnMoW10pXHJcbiAgICAvLyAgICAgc2V0U3RhdHVzKG51bGwpXHJcblxyXG4gICAgLy8gICAgIGF4aW9zXHJcbiAgICAvLyAgICAgICAgIC5wb3N0KCcvcmVzZXQtcGFzc3dvcmQnLCB7IHRva2VuOiBwYXJhbXMudG9rZW4sIC4uLnByb3BzIH0pXHJcbiAgICAvLyAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+XHJcbiAgICAvLyAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luP3Jlc2V0PScgKyBidG9hKHJlc3BvbnNlLmRhdGEuc3RhdHVzKSksXHJcbiAgICAvLyAgICAgICAgIClcclxuICAgIC8vICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgIT09IDQyMikgdGhyb3cgZXJyb3JcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBzZXRFcnJvcnMoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpXHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gY29uc3QgcmVzZW5kRW1haWxWZXJpZmljYXRpb24gPSAoeyBzZXRTdGF0dXMgfSkgPT4ge1xyXG4gICAgLy8gICAgIGF4aW9zXHJcbiAgICAvLyAgICAgICAgIC5wb3N0KCcvZW1haWwvdmVyaWZpY2F0aW9uLW5vdGlmaWNhdGlvbicpXHJcbiAgICAvLyAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHNldFN0YXR1cyhyZXNwb25zZS5kYXRhLnN0YXR1cykpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmICghZXJyb3IpIHtcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdCgnL2xvZ291dCcpLnRoZW4oKCkgPT4gbXV0YXRlKCkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPSAnL2xvZ2luJ1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1pZGRsZXdhcmUgPT09ICdndWVzdCcgJiYgcmVkaXJlY3RJZkF1dGhlbnRpY2F0ZWQgJiYgdXNlcilcclxuICAgICAgICAgICAgcm91dGVyLnB1c2gocmVkaXJlY3RJZkF1dGhlbnRpY2F0ZWQpXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09ICcvdmVyaWZ5LWVtYWlsJyAmJlxyXG4gICAgICAgICAgICB1c2VyPy5lbWFpbF92ZXJpZmllZF9hdFxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgcm91dGVyLnB1c2gocmVkaXJlY3RJZkF1dGhlbnRpY2F0ZWQpXHJcbiAgICAgICAgaWYgKG1pZGRsZXdhcmUgPT09ICdhdXRoJyAmJiBlcnJvcikgbG9nb3V0KClcclxuICAgIH0sIFt1c2VyLCBlcnJvcl0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIHJlZ2lzdGVyLFxyXG4gICAgICAgIGxvZ2luLFxyXG4gICAgICAgIC8vIGZvcmdvdFBhc3N3b3JkLFxyXG4gICAgICAgIC8vIHJlc2V0UGFzc3dvcmQsXHJcbiAgICAgICAgLy8gcmVzZW5kRW1haWxWZXJpZmljYXRpb24sXHJcbiAgICAgICAgbG9nb3V0LFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIC0gdOG7h3AgbsOgeSBjaOG7qWEgY8OhYyBow6BtIHbDoCBjdXN0b20gaG9va3MgXHJcbiAqIGxpw6puIHF1YW4gxJHhur9uIHjDoWMgdGjhu7FjIHbDoCBxdeG6o24gbMO9IG5nxrDhu51pIGTDuW5nXHJcbiAqIC0gc+G7rSBk4bulbmcgaG9vayB1c2VTV1IgdOG7qyB0aMawIHZp4buHbiBzd3IgXHJcbiAqIMSR4buDIHRo4buxYyBoaeG7h24gecOqdSBj4bqndSBs4bqleSBk4buvIGxp4buHdSB04burIHNlcnZlciBcclxuICogLSBz4butIGThu6VuZyBob29rIHVzZVJvdXRlciB2w6AgdXNlUGFyYW1zIHThu6sgdGjGsCB2aeG7h25cclxuICogTmV4dGpzIMSR4buDIGzhuqV5IHRow7RuZyB0aW4gduG7gSByb3V0ZXIgdsOgIGPDoWMgdGhhbSBz4buRIHRyb25nIFVSTFxyXG4gKiAtIHVzZUF1dGggdHLhuqMgduG7gSDEkeG7kWkgdMaw4bujbmcgY2jhu6lhIGPDoWMgaMOgbSB2w6AgdGjDtG5nIHRpblxyXG4gKiBsacOqbiBxdWFuIMSR4bq/biB4w6FjIHRo4buxYyB2w6AgbmfGsOG7nWkgZMO5bmdcclxuICovIl0sIm5hbWVzIjpbInVzZVNXUiIsImF4aW9zIiwidXNlRWZmZWN0IiwidXNlUGFyYW1zIiwidXNlUm91dGVyIiwidXNlQXV0aCIsIm1pZGRsZXdhcmUiLCJyZWRpcmVjdElmQXV0aGVudGljYXRlZCIsInJvdXRlciIsInBhcmFtcyIsImRhdGEiLCJ1c2VyIiwiZXJyb3IiLCJtdXRhdGUiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJyZXNwb25zZSIsInN0YXR1cyIsInB1c2giLCJjc3JmIiwicmVnaXN0ZXIiLCJzZXRFcnJvcnMiLCJwcm9wcyIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwicCIsImVycm9ycyIsImxvZ2luIiwic2V0U3RhdHVzIiwibG9nb3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImVtYWlsX3ZlcmlmaWVkX2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/auth.js\n"));

/***/ })

});