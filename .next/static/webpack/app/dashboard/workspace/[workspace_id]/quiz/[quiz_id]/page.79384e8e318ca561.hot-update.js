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

/***/ "(app-pages-browser)/./src/components/Editor/Create/Content/Settings.tsx":
/*!***********************************************************!*\
  !*** ./src/components/Editor/Create/Content/Settings.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Settings; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_useQuestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useQuestion */ \"(app-pages-browser)/./src/hooks/useQuestion.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Settings() {\n    _s();\n    const { selectedQuestion, updateSelectedQuestion } = (0,_hooks_useQuestion__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    let settinsOption = [\n        {\n            key: \"required\",\n            show: true\n        },\n        {\n            key: \"maxCharacter\",\n            show: (selectedQuestion === null || selectedQuestion === void 0 ? void 0 : selectedQuestion.type) === \"SHORT_ANSWER\"\n        },\n        {\n            key: \"randomize\",\n            show: (selectedQuestion === null || selectedQuestion === void 0 ? void 0 : selectedQuestion.type) === \"MULTIPLE_CHOICE\"\n        }\n    ];\n    // filter out the options that are not shown in the settings menu\n    settinsOption = settinsOption.filter((item)=>item.show);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-3 space-y-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: \"Settings\"\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Settings.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            settinsOption === null || settinsOption === void 0 ? void 0 : settinsOption.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-xs flex items-center justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-dark-200 capitalize\",\n                            children: option.key\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Settings.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"cursor-pointer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/icons/toggle.svg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Settings.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Settings.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, option.key, true, {\n                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Settings.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Settings.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Settings, \"0eVeY5iMMiRdbgGn3P3VCgBqPr4=\", false, function() {\n    return [\n        _hooks_useQuestion__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Settings;\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0VkaXRvci9DcmVhdGUvQ29udGVudC9TZXR0aW5ncy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4QztBQUNwQjtBQUVYLFNBQVNFOztJQUN0QixNQUFNLEVBQUVDLGdCQUFnQixFQUFFQyxzQkFBc0IsRUFBRSxHQUFHSiw4REFBV0E7SUFFaEUsSUFBSUssZ0JBQWdCO1FBQ2xCO1lBQ0VDLEtBQUs7WUFDTEMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsS0FBSztZQUNMQyxNQUFNSixDQUFBQSw2QkFBQUEsdUNBQUFBLGlCQUFrQkssSUFBSSxNQUFLO1FBQ25DO1FBQ0E7WUFDRUYsS0FBSztZQUNMQyxNQUFNSixDQUFBQSw2QkFBQUEsdUNBQUFBLGlCQUFrQkssSUFBSSxNQUFLO1FBQ25DO0tBQ0Q7SUFDRCxpRUFBaUU7SUFDakVILGdCQUFnQkEsY0FBY0ksTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtILElBQUk7SUFFeEQscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBRzs7Ozs7O1lBRUhSLDBCQUFBQSxvQ0FBQUEsY0FBZVMsR0FBRyxDQUFDLENBQUNDLHVCQUNuQiw4REFBQ0o7b0JBRUNDLFdBQVU7O3NDQUVWLDhEQUFDSTs0QkFBS0osV0FBVTtzQ0FBNEJHLE9BQU9ULEdBQUc7Ozs7OztzQ0FDdEQsOERBQUNVOzRCQUFLSixXQUFVO3NDQUNkLDRFQUFDSztnQ0FBSUMsS0FBSTs7Ozs7Ozs7Ozs7O21CQUxOSCxPQUFPVCxHQUFHOzs7Ozs7Ozs7OztBQVd6QjtHQXJDd0JKOztRQUMrQkYsMERBQVdBOzs7S0FEMUNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0VkaXRvci9DcmVhdGUvQ29udGVudC9TZXR0aW5ncy50c3g/NjNhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlUXVlc3Rpb24gZnJvbSBcIkAvaG9va3MvdXNlUXVlc3Rpb25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0dGluZ3MoKSB7XG4gIGNvbnN0IHsgc2VsZWN0ZWRRdWVzdGlvbiwgdXBkYXRlU2VsZWN0ZWRRdWVzdGlvbiB9ID0gdXNlUXVlc3Rpb24oKTtcblxuICBsZXQgc2V0dGluc09wdGlvbiA9IFtcbiAgICB7XG4gICAgICBrZXk6IFwicmVxdWlyZWRcIixcbiAgICAgIHNob3c6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6IFwibWF4Q2hhcmFjdGVyXCIsXG4gICAgICBzaG93OiBzZWxlY3RlZFF1ZXN0aW9uPy50eXBlID09PSBcIlNIT1JUX0FOU1dFUlwiLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiBcInJhbmRvbWl6ZVwiLFxuICAgICAgc2hvdzogc2VsZWN0ZWRRdWVzdGlvbj8udHlwZSA9PT0gXCJNVUxUSVBMRV9DSE9JQ0VcIixcbiAgICB9LFxuICBdO1xuICAvLyBmaWx0ZXIgb3V0IHRoZSBvcHRpb25zIHRoYXQgYXJlIG5vdCBzaG93biBpbiB0aGUgc2V0dGluZ3MgbWVudVxuICBzZXR0aW5zT3B0aW9uID0gc2V0dGluc09wdGlvbi5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uc2hvdyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgc3BhY2UteS0yXCI+XG4gICAgICA8aDU+U2V0dGluZ3M8L2g1PlxuXG4gICAgICB7c2V0dGluc09wdGlvbj8ubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17b3B0aW9uLmtleX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWRhcmstMjAwIGNhcGl0YWxpemVcIj57b3B0aW9uLmtleX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3RvZ2dsZS5zdmdcIiAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VRdWVzdGlvbiIsIlJlYWN0IiwiU2V0dGluZ3MiLCJzZWxlY3RlZFF1ZXN0aW9uIiwidXBkYXRlU2VsZWN0ZWRRdWVzdGlvbiIsInNldHRpbnNPcHRpb24iLCJrZXkiLCJzaG93IiwidHlwZSIsImZpbHRlciIsIml0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJoNSIsIm1hcCIsIm9wdGlvbiIsInNwYW4iLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Editor/Create/Content/Settings.tsx\n"));

/***/ })

});