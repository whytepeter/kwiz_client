"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/login/page",{

/***/ "(app-pages-browser)/./src/hooks/useAuth.tsx":
/*!*******************************!*\
  !*** ./src/hooks/useAuth.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/actions/auth */ \"(app-pages-browser)/./src/store/actions/auth.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\nvar _s = $RefreshSig$();\n\n\nfunction useAuth() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const signIn = async (user)=>{\n        try {\n            await (0,_store_actions_auth__WEBPACK_IMPORTED_MODULE_0__.signInAction)(user);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            console.log(\"signin: \", error);\n            throw error;\n        }\n    };\n    const signUp = async (user)=>{\n        return await (0,_store_actions_auth__WEBPACK_IMPORTED_MODULE_0__.signUpAction)(user);\n    };\n    const logout = ()=>{\n        (0,_store_actions_auth__WEBPACK_IMPORTED_MODULE_0__.signOutAction)();\n    // router.push(\"/auth/login\");\n    };\n    return {\n        signIn,\n        signUp,\n        logout\n    };\n}\n_s(useAuth, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy91c2VBdXRoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSThCO0FBRWM7QUFFN0IsU0FBU0k7O0lBQ3RCLE1BQU1DLFNBQVNGLDBEQUFTQTtJQUV4QixNQUFNRyxTQUFTLE9BQU9DO1FBQ3BCLElBQUk7WUFDRixNQUFNUCxpRUFBWUEsQ0FBQ087WUFFbkJGLE9BQU9HLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRQyxHQUFHLENBQUMsWUFBWUY7WUFDeEIsTUFBTUE7UUFDUjtJQUNGO0lBRUEsTUFBTUcsU0FBUyxPQUFPTDtRQUNwQixPQUFPLE1BQU1OLGlFQUFZQSxDQUFDTTtJQUM1QjtJQUVBLE1BQU1NLFNBQVM7UUFDYlgsa0VBQWFBO0lBQ2IsOEJBQThCO0lBQ2hDO0lBRUEsT0FBTztRQUFFSTtRQUFRTTtRQUFRQztJQUFPO0FBQ2xDO0dBeEJ3QlQ7O1FBQ1BELHNEQUFTQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlQXV0aC50c3g/NWZhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBzaWduSW5BY3Rpb24sXG4gIHNpZ25VcEFjdGlvbixcbiAgc2lnbk91dEFjdGlvbixcbn0gZnJvbSBcIkAvc3RvcmUvYWN0aW9ucy9hdXRoXCI7XG5pbXBvcnQgeyBTaWduSW5SZXF1ZXN0LCBTaWduVXBSZXF1ZXN0IH0gZnJvbSBcIkAvdHlwZXMvdXNlclwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VBdXRoKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBzaWduSW4gPSBhc3luYyAodXNlcjogU2lnbkluUmVxdWVzdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzaWduSW5BY3Rpb24odXNlcik7XG5cbiAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJzaWduaW46IFwiLCBlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2lnblVwID0gYXN5bmMgKHVzZXI6IFNpZ25VcFJlcXVlc3QpID0+IHtcbiAgICByZXR1cm4gYXdhaXQgc2lnblVwQWN0aW9uKHVzZXIpO1xuICB9O1xuXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICBzaWduT3V0QWN0aW9uKCk7XG4gICAgLy8gcm91dGVyLnB1c2goXCIvYXV0aC9sb2dpblwiKTtcbiAgfTtcblxuICByZXR1cm4geyBzaWduSW4sIHNpZ25VcCwgbG9nb3V0IH07XG59XG4iXSwibmFtZXMiOlsic2lnbkluQWN0aW9uIiwic2lnblVwQWN0aW9uIiwic2lnbk91dEFjdGlvbiIsInVzZVJvdXRlciIsInVzZUF1dGgiLCJyb3V0ZXIiLCJzaWduSW4iLCJ1c2VyIiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNpZ25VcCIsImxvZ291dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/useAuth.tsx\n"));

/***/ })

});