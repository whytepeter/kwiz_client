"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/workspace/[workspace_id]/quiz/[quiz_id]/page",{

/***/ "(app-pages-browser)/./src/components/Editor/Create/Layout/RightSidebar.tsx":
/*!**************************************************************!*\
  !*** ./src/components/Editor/Create/Layout/RightSidebar.tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RightSidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Content_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Content/Content */ \"(app-pages-browser)/./src/components/Editor/Create/Content/Content.tsx\");\n/* harmony import */ var _components_Themes_ThemeGallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Themes/ThemeGallery */ \"(app-pages-browser)/./src/components/Themes/ThemeGallery.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction RightSidebar() {\n    _s();\n    const [tab, setTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"content\");\n    const tabItems = [\n        \"content\",\n        \"design\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border rounded-lg w-full overflow-hidden text-sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-accent p-4 grid grid-cols-2 gap-2\",\n                children: tabItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        onClick: ()=>setTab(item),\n                        className: \"\".concat(tab === item ? \"text-secondary\" : \"\", \" cursor-pointer capitalize\"),\n                        children: item\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Layout/RightSidebar.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Layout/RightSidebar.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 flex flex-col gap-4 \",\n                children: [\n                    tab === \"content\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Content_Content__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Layout/RightSidebar.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 31\n                    }, this),\n                    tab === \"design\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Themes_ThemeGallery__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Layout/RightSidebar.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 30\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Layout/RightSidebar.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Layout/RightSidebar.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(RightSidebar, \"2+DdGvEABvqYq+fSwWSauc4daks=\");\n_c = RightSidebar;\nvar _c;\n$RefreshReg$(_c, \"RightSidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0VkaXRvci9DcmVhdGUvTGF5b3V0L1JpZ2h0U2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDQztBQUNtQjtBQUU3QyxTQUFTSTs7SUFDdEIsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUdMLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU1NLFdBQVc7UUFBQztRQUFXO0tBQVM7SUFFdEMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWkYsU0FBU0csR0FBRyxDQUFDLENBQUNDLHFCQUNiLDhEQUFDQzt3QkFDQ0MsU0FBUyxJQUFNUCxPQUFPSzt3QkFDdEJGLFdBQVcsR0FFVixPQURDSixRQUFRTSxPQUFPLG1CQUFtQixJQUNuQztrQ0FFQUE7Ozs7Ozs7Ozs7OzBCQUlQLDhEQUFDSDtnQkFBSUMsV0FBVTs7b0JBQ1pKLFFBQVEsMkJBQWEsOERBQUNILHdEQUFPQTs7Ozs7b0JBQzdCRyxRQUFRLDBCQUFZLDhEQUFDRix1RUFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTFDO0dBeEJ3QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRWRpdG9yL0NyZWF0ZS9MYXlvdXQvUmlnaHRTaWRlYmFyLnRzeD8wZmQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4uL0NvbnRlbnQvQ29udGVudFwiO1xuaW1wb3J0IFRoZW1lR2FsbGVyeSBmcm9tIFwiQC9jb21wb25lbnRzL1RoZW1lcy9UaGVtZUdhbGxlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmlnaHRTaWRlYmFyKCkge1xuICBjb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGUoXCJjb250ZW50XCIpO1xuICBjb25zdCB0YWJJdGVtcyA9IFtcImNvbnRlbnRcIiwgXCJkZXNpZ25cIl07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLWxnIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gdGV4dC1zbVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1hY2NlbnQgcC00IGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTJcIj5cbiAgICAgICAge3RhYkl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoaXRlbSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICB0YWIgPT09IGl0ZW0gPyBcInRleHQtc2Vjb25kYXJ5XCIgOiBcIlwiXG4gICAgICAgICAgICB9IGN1cnNvci1wb2ludGVyIGNhcGl0YWxpemVgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGZsZXggZmxleC1jb2wgZ2FwLTQgXCI+XG4gICAgICAgIHt0YWIgPT09IFwiY29udGVudFwiICYmIDxDb250ZW50IC8+fVxuICAgICAgICB7dGFiID09PSBcImRlc2lnblwiICYmIDxUaGVtZUdhbGxlcnkgLz59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29udGVudCIsIlRoZW1lR2FsbGVyeSIsIlJpZ2h0U2lkZWJhciIsInRhYiIsInNldFRhYiIsInRhYkl0ZW1zIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsInNwYW4iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Editor/Create/Layout/RightSidebar.tsx\n"));

/***/ })

});