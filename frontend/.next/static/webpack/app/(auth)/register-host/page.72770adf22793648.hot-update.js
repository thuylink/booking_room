"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/register-host/page",{

/***/ "(app-pages-browser)/./src/app/(auth)/register-host/page.js":
/*!**********************************************!*\
  !*** ./src/app/(auth)/register-host/page.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Button */ \"(app-pages-browser)/./src/components/Button.js\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Input */ \"(app-pages-browser)/./src/components/Input.js\");\n/* harmony import */ var _components_InputError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/InputError */ \"(app-pages-browser)/./src/components/InputError.js\");\n/* harmony import */ var _components_Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Label */ \"(app-pages-browser)/./src/components/Label.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _hooks_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/auth */ \"(app-pages-browser)/./src/hooks/auth.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    const { register } = (0,_hooks_auth__WEBPACK_IMPORTED_MODULE_6__.useAuth)({\n        middleware: \"guest\",\n        redirectIfAuthenticated: \"/login-host\"\n    });\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const [passwordConfirmation, setPasswordConfirmation] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);\n    const submitForm = (event)=>{\n        event.preventDefault();\n        register({\n            name,\n            email,\n            password,\n            usertype: 1,\n            password_confirmation: passwordConfirmation,\n            setErrors\n        }).then(()=>{\n            router.push(\"/login\");\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: submitForm,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\"\n                },\n                children: \"Đăng k\\xfd cho chủ nh\\xe0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(auth)\\\\register-host\\\\page.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Label__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        htmlFor: \"name\",\n                        children: \"T\\xean đăng nhập\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(auth)\\\\register-host\\\\page.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: \"name\",\n                        type: \"text\",\n                        value: name,\n                        className: \"block mt-1 w-full\",\n                        onChange: (event)=>setName(event.target.value),\n                        required: true,\n                        autoFocus: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(auth)\\\\register-host\\\\page.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputError__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        messages: errors.name,\n                        className: \"mt-2\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(auth)\\\\register-host\\\\page.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(auth)\\\\register-host\\\\page.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Label__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        htmlFor: \"email\",\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(auth)\\\\register-host\\\\page.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: \"email\",\n                        type: \"email\",\n                        value: email,\n                        className: \"block mt-1 w-full\",\n                        onChange: (event)=>setEmail(event.target.value),\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(auth)\\\\register-host\\\\page.js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputError__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        messages: errors.email,\n                        className: \"mt-2\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(auth)\\\\register-host\\\\page.js\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(auth)\\\\register-host\\\\page.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Label__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        htmlFor: \"password\",\n                        children: \"Mật khẩu\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(auth)\\\\register-host\\\\page.js\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: \"password\",\n                        type: \"password\",\n                        value: password,\n                        className: \"block mt-1 w-full\",\n                        onChange: (event)=>setPassword(event.target.value),\n                        required: true,\n                        autoComplete: \"new-password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(auth)\\\\register-host\\\\page.js\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputError__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        messages: errors.password,\n                        className: \"mt-2\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(auth)\\\\register-host\\\\page.js\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(auth)\\\\register-host\\\\page.js\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Label__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        htmlFor: \"passwordConfirmation\",\n                        children: \"X\\xe1c nhận mật khẩu\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(auth)\\\\register-host\\\\page.js\",\n                        lineNumber: 96,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: \"passwordConfirmation\",\n                        type: \"password\",\n                        value: passwordConfirmation,\n                        className: \"block mt-1 w-full\",\n                        onChange: (event)=>setPasswordConfirmation(event.target.value),\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(auth)\\\\register-host\\\\page.js\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputError__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        messages: errors.password_confirmation,\n                        className: \"mt-2\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(auth)\\\\register-host\\\\page.js\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(auth)\\\\register-host\\\\page.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-end mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"/\",\n                        className: \"underline text-sm text-gray-600 hover:text-gray-900\",\n                        children: \"Quay lại\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(auth)\\\\register-host\\\\page.js\",\n                        lineNumber: 118,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"ml-4\",\n                        children: \"Đăng k\\xfd\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(auth)\\\\register-host\\\\page.js\",\n                        lineNumber: 124,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(auth)\\\\register-host\\\\page.js\",\n                lineNumber: 117,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\wamp64\\\\www\\\\booking_room\\\\frontend\\\\src\\\\app\\\\(auth)\\\\register-host\\\\page.js\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Page, \"pQcv1J5lYsuv+A4Y6xAj5GO5yQU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_8__.useRouter,\n        _hooks_auth__WEBPACK_IMPORTED_MODULE_6__.useAuth\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGF1dGgpL3JlZ2lzdGVyLWhvc3QvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFd0M7QUFDRjtBQUNVO0FBQ1Y7QUFDVjtBQUNVO0FBQ047QUFDVztBQUUzQyxNQUFNUSxPQUFPOztJQUNULE1BQU1DLFNBQVNGLDBEQUFTQTtJQUV4QixNQUFNLEVBQUVHLFFBQVEsRUFBRSxHQUFHTCxvREFBT0EsQ0FBQztRQUN6Qk0sWUFBWTtRQUNaQyx5QkFBeUI7SUFDN0I7SUFFQSxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1csVUFBVUMsWUFBWSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNhLHNCQUFzQkMsd0JBQXdCLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ2pFLE1BQU0sQ0FBQ2UsUUFBUUMsVUFBVSxHQUFHaEIsK0NBQVFBLENBQUMsRUFBRTtJQUV2QyxNQUFNaUIsYUFBYUMsQ0FBQUE7UUFDZkEsTUFBTUMsY0FBYztRQUVwQmYsU0FBUztZQUNMRztZQUNBRTtZQUNBRTtZQUNBUyxVQUFVO1lBQ1ZDLHVCQUF1QlI7WUFDdkJHO1FBQ0osR0FBR00sSUFBSSxDQUFDO1lBQ0puQixPQUFPb0IsSUFBSSxDQUFDO1FBQ2hCO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0M7UUFBS0MsVUFBVVI7OzBCQUVaLDhEQUFDUztnQkFBR0MsT0FBTztvQkFBRUMsU0FBUztvQkFBUUMsZ0JBQWdCO2dCQUFTOzBCQUFHOzs7Ozs7MEJBQzFELDhEQUFDQzs7a0NBQ0csOERBQUNqQyx5REFBS0E7d0JBQUNrQyxTQUFRO2tDQUFPOzs7Ozs7a0NBRXRCLDhEQUFDcEMseURBQUtBO3dCQUNGcUMsSUFBRzt3QkFDSEMsTUFBSzt3QkFDTEMsT0FBTzNCO3dCQUNQNEIsV0FBVTt3QkFDVkMsVUFBVWxCLENBQUFBLFFBQVNWLFFBQVFVLE1BQU1tQixNQUFNLENBQUNILEtBQUs7d0JBQzdDSSxRQUFRO3dCQUNSQyxTQUFTOzs7Ozs7a0NBR2IsOERBQUMzQyw4REFBVUE7d0JBQUM0QyxVQUFVekIsT0FBT1IsSUFBSTt3QkFBRTRCLFdBQVU7Ozs7Ozs7Ozs7OzswQkFJakQsOERBQUNMO2dCQUFJSyxXQUFVOztrQ0FDWCw4REFBQ3RDLHlEQUFLQTt3QkFBQ2tDLFNBQVE7a0NBQVE7Ozs7OztrQ0FFdkIsOERBQUNwQyx5REFBS0E7d0JBQ0ZxQyxJQUFHO3dCQUNIQyxNQUFLO3dCQUNMQyxPQUFPekI7d0JBQ1AwQixXQUFVO3dCQUNWQyxVQUFVbEIsQ0FBQUEsUUFBU1IsU0FBU1EsTUFBTW1CLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDOUNJLFFBQVE7Ozs7OztrQ0FHWiw4REFBQzFDLDhEQUFVQTt3QkFBQzRDLFVBQVV6QixPQUFPTixLQUFLO3dCQUFFMEIsV0FBVTs7Ozs7Ozs7Ozs7OzBCQUlsRCw4REFBQ0w7Z0JBQUlLLFdBQVU7O2tDQUNYLDhEQUFDdEMseURBQUtBO3dCQUFDa0MsU0FBUTtrQ0FBVzs7Ozs7O2tDQUUxQiw4REFBQ3BDLHlEQUFLQTt3QkFDRnFDLElBQUc7d0JBQ0hDLE1BQUs7d0JBQ0xDLE9BQU92Qjt3QkFDUHdCLFdBQVU7d0JBQ1ZDLFVBQVVsQixDQUFBQSxRQUFTTixZQUFZTSxNQUFNbUIsTUFBTSxDQUFDSCxLQUFLO3dCQUNqREksUUFBUTt3QkFDUkcsY0FBYTs7Ozs7O2tDQUdqQiw4REFBQzdDLDhEQUFVQTt3QkFBQzRDLFVBQVV6QixPQUFPSixRQUFRO3dCQUFFd0IsV0FBVTs7Ozs7Ozs7Ozs7OzBCQUlyRCw4REFBQ0w7Z0JBQUlLLFdBQVU7O2tDQUNYLDhEQUFDdEMseURBQUtBO3dCQUFDa0MsU0FBUTtrQ0FBdUI7Ozs7OztrQ0FJdEMsOERBQUNwQyx5REFBS0E7d0JBQ0ZxQyxJQUFHO3dCQUNIQyxNQUFLO3dCQUNMQyxPQUFPckI7d0JBQ1BzQixXQUFVO3dCQUNWQyxVQUFVbEIsQ0FBQUEsUUFDTkosd0JBQXdCSSxNQUFNbUIsTUFBTSxDQUFDSCxLQUFLO3dCQUU5Q0ksUUFBUTs7Ozs7O2tDQUdaLDhEQUFDMUMsOERBQVVBO3dCQUNQNEMsVUFBVXpCLE9BQU9NLHFCQUFxQjt3QkFDdENjLFdBQVU7Ozs7Ozs7Ozs7OzswQkFJbEIsOERBQUNMO2dCQUFJSyxXQUFVOztrQ0FDWCw4REFBQ3JDLGtEQUFJQTt3QkFDRDRDLE1BQUs7d0JBQ0xQLFdBQVU7a0NBQXNEOzs7Ozs7a0NBSXBFLDhEQUFDekMsMERBQU1BO3dCQUFDeUMsV0FBVTtrQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXpDO0dBcEhNakM7O1FBQ2FELHNEQUFTQTtRQUVIRixnREFBT0E7OztLQUgxQkc7QUFzSE4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC8oYXV0aCkvcmVnaXN0ZXItaG9zdC9wYWdlLmpzP2Y0MzYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy9CdXR0b24nXHJcbmltcG9ydCBJbnB1dCBmcm9tICdAL2NvbXBvbmVudHMvSW5wdXQnXHJcbmltcG9ydCBJbnB1dEVycm9yIGZyb20gJ0AvY29tcG9uZW50cy9JbnB1dEVycm9yJ1xyXG5pbXBvcnQgTGFiZWwgZnJvbSAnQC9jb21wb25lbnRzL0xhYmVsJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdAL2hvb2tzL2F1dGgnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IHsgcmVnaXN0ZXIgfSA9IHVzZUF1dGgoe1xyXG4gICAgICAgIG1pZGRsZXdhcmU6ICdndWVzdCcsXHJcbiAgICAgICAgcmVkaXJlY3RJZkF1dGhlbnRpY2F0ZWQ6ICcvbG9naW4taG9zdCcsXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbcGFzc3dvcmRDb25maXJtYXRpb24sIHNldFBhc3N3b3JkQ29uZmlybWF0aW9uXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICByZWdpc3Rlcih7XHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICAgICAgdXNlcnR5cGU6IDEsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogcGFzc3dvcmRDb25maXJtYXRpb24sXHJcbiAgICAgICAgICAgIHNldEVycm9ycyxcclxuICAgICAgICB9KS50aGVuKCgpPT4ge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJykgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRGb3JtfT5cclxuICAgICAgICAgICAgey8qIE5hbWUgKi99XHJcbiAgICAgICAgICAgIDxoMSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT7EkMSDbmcga8O9IGNobyBjaOG7pyBuaMOgPC9oMT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwibmFtZVwiPlTDqm4gxJHEg25nIG5o4bqtcDwvTGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbXQtMSB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPElucHV0RXJyb3IgbWVzc2FnZXM9e2Vycm9ycy5uYW1lfSBjbGFzc05hbWU9XCJtdC0yXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogRW1haWwgQWRkcmVzcyAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L0xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIG10LTEgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8SW5wdXRFcnJvciBtZXNzYWdlcz17ZXJyb3JzLmVtYWlsfSBjbGFzc05hbWU9XCJtdC0yXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogUGFzc3dvcmQgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPk3huq10IGto4bqpdTwvTGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbXQtMSB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPElucHV0RXJyb3IgbWVzc2FnZXM9e2Vycm9ycy5wYXNzd29yZH0gY2xhc3NOYW1lPVwibXQtMlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIENvbmZpcm0gUGFzc3dvcmQgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJwYXNzd29yZENvbmZpcm1hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFjDoWMgbmjhuq1uIG3huq10IGto4bqpdVxyXG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkQ29uZmlybWF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZENvbmZpcm1hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBtdC0xIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkQ29uZmlybWF0aW9uKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPElucHV0RXJyb3JcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcz17ZXJyb3JzLnBhc3N3b3JkX2NvbmZpcm1hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgdGV4dC1zbSB0ZXh0LWdyYXktNjAwIGhvdmVyOnRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICBRdWF5IGzhuqFpXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibWwtNFwiPsSQxINuZyBrw708L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlXHJcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJJbnB1dCIsIklucHV0RXJyb3IiLCJMYWJlbCIsIkxpbmsiLCJ1c2VBdXRoIiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJQYWdlIiwicm91dGVyIiwicmVnaXN0ZXIiLCJtaWRkbGV3YXJlIiwicmVkaXJlY3RJZkF1dGhlbnRpY2F0ZWQiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicGFzc3dvcmRDb25maXJtYXRpb24iLCJzZXRQYXNzd29yZENvbmZpcm1hdGlvbiIsImVycm9ycyIsInNldEVycm9ycyIsInN1Ym1pdEZvcm0iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXNlcnR5cGUiLCJwYXNzd29yZF9jb25maXJtYXRpb24iLCJ0aGVuIiwicHVzaCIsImZvcm0iLCJvblN1Ym1pdCIsImgxIiwic3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJkaXYiLCJodG1sRm9yIiwiaWQiLCJ0eXBlIiwidmFsdWUiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwiYXV0b0ZvY3VzIiwibWVzc2FnZXMiLCJhdXRvQ29tcGxldGUiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(auth)/register-host/page.js\n"));

/***/ })

});