"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/workspace/page",{

/***/ "(app-pages-browser)/./src/app/dashboard/workspace/page.tsx":
/*!**********************************************!*\
  !*** ./src/app/dashboard/workspace/page.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Quiz_ListQuiz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Quiz/ListQuiz */ \"(app-pages-browser)/./src/components/Quiz/ListQuiz.tsx\");\n/* harmony import */ var _components_Workspace_NoWorkspaceFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Workspace/NoWorkspaceFound */ \"(app-pages-browser)/./src/components/Workspace/NoWorkspaceFound.tsx\");\n/* harmony import */ var _components_Workspace_WorkspaceNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Workspace/WorkspaceNav */ \"(app-pages-browser)/./src/components/Workspace/WorkspaceNav.tsx\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/store */ \"(app-pages-browser)/./src/store/store.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction page() {\n    _s();\n    const { workspaces } = (0,_store_store__WEBPACK_IMPORTED_MODULE_4__.useDataStore)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: (workspaces === null || workspaces === void 0 ? void 0 : workspaces.length) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Workspace_WorkspaceNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/app/dashboard/workspace/page.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Quiz_ListQuiz__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/app/dashboard/workspace/page.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/app/dashboard/workspace/page.tsx\",\n            lineNumber: 18,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Workspace_NoWorkspaceFound__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/app/dashboard/workspace/page.tsx\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(page, \"NqekYn3lBkmNB1Hv7Fcl2uAPsoY=\", false, function() {\n    return [\n        _store_store__WEBPACK_IMPORTED_MODULE_4__.useDataStore\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3dvcmtzcGFjZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRWtEO0FBRXFCO0FBQ1I7QUFFbEI7QUFDTTtBQUdwQyxTQUFTSzs7SUFDdEIsTUFBTSxFQUFFQyxVQUFVLEVBQUUsR0FBR0gsMERBQVlBO0lBRW5DLHFCQUNFO2tCQUNHRyxDQUFBQSx1QkFBQUEsaUNBQUFBLFdBQVlDLE1BQU0sa0JBQ2pCLDhEQUFDQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ1AsMEVBQVlBOzs7Ozs4QkFDYiw4REFBQ0YsaUVBQVFBOzs7Ozs7Ozs7O2lDQUdYLDhEQUFDQyw4RUFBZ0JBOzs7Ozs7QUFJekI7R0Fmd0JJOztRQUNDRixzREFBWUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9kYXNoYm9hcmQvd29ya3NwYWNlL3BhZ2UudHN4P2RhYWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgRW1wdHlTdGF0ZSBmcm9tIFwiQC9jb21wb25lbnRzL2Jhc2UvRW1wdHlTdGF0ZVwiO1xuaW1wb3J0IExpc3RRdWl6IGZyb20gXCJAL2NvbXBvbmVudHMvUXVpei9MaXN0UXVpelwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCBOb1dvcmtzcGFjZUZvdW5kIGZyb20gXCJAL2NvbXBvbmVudHMvV29ya3NwYWNlL05vV29ya3NwYWNlRm91bmRcIjtcbmltcG9ydCBXb3Jrc3BhY2VOYXYgZnJvbSBcIkAvY29tcG9uZW50cy9Xb3Jrc3BhY2UvV29ya3NwYWNlTmF2XCI7XG5pbXBvcnQgeyBnZXRRdWl6emVzIH0gZnJvbSBcIkAvc3RvcmUvYWN0aW9ucy9xdWl6XCI7XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSBmcm9tIFwiQC9zdG9yZS9zdG9yZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2UoKSB7XG4gIGNvbnN0IHsgd29ya3NwYWNlcyB9ID0gdXNlRGF0YVN0b3JlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3dvcmtzcGFjZXM/Lmxlbmd0aCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC01XCI+XG4gICAgICAgICAgPFdvcmtzcGFjZU5hdiAvPlxuICAgICAgICAgIDxMaXN0UXVpeiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxOb1dvcmtzcGFjZUZvdW5kIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpc3RRdWl6IiwiTm9Xb3Jrc3BhY2VGb3VuZCIsIldvcmtzcGFjZU5hdiIsInVzZURhdGFTdG9yZSIsIlJlYWN0IiwicGFnZSIsIndvcmtzcGFjZXMiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/workspace/page.tsx\n"));

/***/ })

});