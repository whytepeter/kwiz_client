"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/page",{

/***/ "(app-pages-browser)/./src/components/base/EmptyState.tsx":
/*!********************************************!*\
  !*** ./src/components/base/EmptyState.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EmptyState; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction EmptyState(param) {\n    let { title = \"Oops\", description = \"Nothing here\", icon, className, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center gap-2 py-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/img/empty.png\",\n                    className: \"h-20\",\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/base/EmptyState.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/base/EmptyState.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-lg sm:text-xl text-secondary-dark  font-light\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/base/EmptyState.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-xs sm:text-sm text-dark-200 mb-1\",\n                children: description\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/base/EmptyState.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/base/EmptyState.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_c = EmptyState;\nvar _c;\n$RefreshReg$(_c, \"EmptyState\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Jhc2UvRW1wdHlTdGF0ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDMEI7QUFVWCxTQUFTQyxXQUFXLEtBTXZCO1FBTnVCLEVBQ2pDQyxRQUFRLE1BQU0sRUFDZEMsY0FBYyxjQUFjLEVBQzVCQyxJQUFJLEVBQ0pDLFNBQVMsRUFDVEMsUUFBUSxFQUNFLEdBTnVCO0lBT2pDLHFCQUNFLDhEQUFDQztRQUFJRixXQUFVOzswQkFDYiw4REFBQ0U7MEJBQ0MsNEVBQUNDO29CQUFJQyxLQUFJO29CQUFpQkosV0FBVTtvQkFBT0ssS0FBSTs7Ozs7Ozs7Ozs7MEJBRWpELDhEQUFDQztnQkFBR04sV0FBVTswQkFDWEg7Ozs7OzswQkFFSCw4REFBQ1U7Z0JBQUVQLFdBQVU7MEJBQXlDRjs7Ozs7O1lBQ3JERzs7Ozs7OztBQUdQO0tBbkJ3QkwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYmFzZS9FbXB0eVN0YXRlLnRzeD9mNmFlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIFByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRW1wdHlTdGF0ZSh7XG4gIHRpdGxlID0gXCJPb3BzXCIsXG4gIGRlc2NyaXB0aW9uID0gXCJOb3RoaW5nIGhlcmVcIixcbiAgaWNvbixcbiAgY2xhc3NOYW1lLFxuICBjaGlsZHJlbixcbn06IFByb3BUeXBlcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHktMTBcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltZy9lbXB0eS5wbmdcIiBjbGFzc05hbWU9XCJoLTIwXCIgYWx0PVwiXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgc206dGV4dC14bCB0ZXh0LXNlY29uZGFyeS1kYXJrICBmb250LWxpZ2h0XCI+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvaDM+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRleHQtc20gdGV4dC1kYXJrLTIwMCBtYi0xXCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkVtcHR5U3RhdGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiZGl2IiwiaW1nIiwic3JjIiwiYWx0IiwiaDMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/base/EmptyState.tsx\n"));

/***/ })

});