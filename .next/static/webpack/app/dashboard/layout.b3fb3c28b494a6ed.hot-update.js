"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/layout",{

/***/ "(app-pages-browser)/./src/store/actions/auth.ts":
/*!***********************************!*\
  !*** ./src/store/actions/auth.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   signInAction: function() { return /* binding */ signInAction; },\n/* harmony export */   signOutAction: function() { return /* binding */ signOutAction; },\n/* harmony export */   signUpAction: function() { return /* binding */ signUpAction; }\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ \"(app-pages-browser)/./src/store/store.ts\");\n/* harmony import */ var _lib_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/http */ \"(app-pages-browser)/./src/lib/http.ts\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n\n\n\nconst signUpAction = async (payload)=>{\n    try {\n        // handle registration\n        const res = await (0,_lib_http__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Register\", \"post\", payload);\n        console.log(res);\n    } catch (error) {\n        throw error;\n    }\n};\nconst signInAction = async (payload)=>{\n    try {\n        // handle login\n        const res = await (0,_lib_http__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Login\", \"post\", payload);\n        const { token, user } = res;\n        // Set the token in cookies\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"authToken\", token);\n        _store__WEBPACK_IMPORTED_MODULE_0__.useDataStore.setState({\n            isLogin: true,\n            user\n        });\n        return user;\n    } catch (error) {\n        throw error;\n    }\n};\nconst signOutAction = ()=>{\n    js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"authToken\");\n    _store__WEBPACK_IMPORTED_MODULE_0__.useDataStore.getState().reset();\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9hY3Rpb25zL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3dDO0FBQ1Y7QUFDRTtBQUV6QixNQUFNRyxlQUFlLE9BQU9DO0lBQ2pDLElBQUk7UUFDRixzQkFBc0I7UUFDdEIsTUFBTUMsTUFBTSxNQUFNSixxREFBSUEsQ0FBQyxZQUFZLFFBQVFHO1FBQzNDRSxRQUFRQyxHQUFHLENBQUNGO0lBQ2QsRUFBRSxPQUFPRyxPQUFPO1FBQ2QsTUFBTUE7SUFDUjtBQUNGLEVBQUU7QUFFSyxNQUFNQyxlQUFlLE9BQU9MO0lBQ2pDLElBQUk7UUFDRixlQUFlO1FBQ2YsTUFBTUMsTUFBTSxNQUFNSixxREFBSUEsQ0FBQyxTQUFTLFFBQVFHO1FBRXhDLE1BQU0sRUFBRU0sS0FBSyxFQUFFQyxJQUFJLEVBQUUsR0FBR047UUFFeEIsMkJBQTJCO1FBQzNCSCxpREFBT0EsQ0FBQ1UsR0FBRyxDQUFDLGFBQWFGO1FBRXpCVixnREFBWUEsQ0FBQ2EsUUFBUSxDQUFDO1lBQ3BCQyxTQUFTO1lBQ1RIO1FBQ0Y7UUFFQSxPQUFPQTtJQUNULEVBQUUsT0FBT0gsT0FBTztRQUNkLE1BQU1BO0lBQ1I7QUFDRixFQUFFO0FBRUssTUFBTU8sZ0JBQWdCO0lBQzNCYixpREFBT0EsQ0FBQ2MsTUFBTSxDQUFDO0lBQ2ZoQixnREFBWUEsQ0FBQ2lCLFFBQVEsR0FBR0MsS0FBSztBQUMvQixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9hY3Rpb25zL2F1dGgudHM/ZGFjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaWduSW5SZXF1ZXN0LCBTaWduVXBSZXF1ZXN0LCBVc2VyIH0gZnJvbSBcIkAvdHlwZXMvdXNlclwiO1xuaW1wb3J0IHsgdXNlRGF0YVN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XG5pbXBvcnQgaHR0cCBmcm9tIFwiQC9saWIvaHR0cFwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuXG5leHBvcnQgY29uc3Qgc2lnblVwQWN0aW9uID0gYXN5bmMgKHBheWxvYWQ6IFNpZ25VcFJlcXVlc3QpID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBoYW5kbGUgcmVnaXN0cmF0aW9uXG4gICAgY29uc3QgcmVzID0gYXdhaXQgaHR0cChcIlJlZ2lzdGVyXCIsIFwicG9zdFwiLCBwYXlsb2FkKTtcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2lnbkluQWN0aW9uID0gYXN5bmMgKHBheWxvYWQ6IFNpZ25JblJlcXVlc3QpOiBQcm9taXNlPFVzZXI+ID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBoYW5kbGUgbG9naW5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBodHRwKFwiTG9naW5cIiwgXCJwb3N0XCIsIHBheWxvYWQpO1xuXG4gICAgY29uc3QgeyB0b2tlbiwgdXNlciB9ID0gcmVzO1xuXG4gICAgLy8gU2V0IHRoZSB0b2tlbiBpbiBjb29raWVzXG4gICAgQ29va2llcy5zZXQoXCJhdXRoVG9rZW5cIiwgdG9rZW4pO1xuXG4gICAgdXNlRGF0YVN0b3JlLnNldFN0YXRlKHtcbiAgICAgIGlzTG9naW46IHRydWUsXG4gICAgICB1c2VyLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVzZXI7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzaWduT3V0QWN0aW9uID0gKCkgPT4ge1xuICBDb29raWVzLnJlbW92ZShcImF1dGhUb2tlblwiKTtcbiAgdXNlRGF0YVN0b3JlLmdldFN0YXRlKCkucmVzZXQoKTtcbn07XG4iXSwibmFtZXMiOlsidXNlRGF0YVN0b3JlIiwiaHR0cCIsIkNvb2tpZXMiLCJzaWduVXBBY3Rpb24iLCJwYXlsb2FkIiwicmVzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwic2lnbkluQWN0aW9uIiwidG9rZW4iLCJ1c2VyIiwic2V0Iiwic2V0U3RhdGUiLCJpc0xvZ2luIiwic2lnbk91dEFjdGlvbiIsInJlbW92ZSIsImdldFN0YXRlIiwicmVzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/actions/auth.ts\n"));

/***/ })

});