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

/***/ "(app-pages-browser)/./src/components/Editor/Create/Content/Answer.tsx":
/*!*********************************************************!*\
  !*** ./src/components/Editor/Create/Content/Answer.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Answer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_useQuestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useQuestion */ \"(app-pages-browser)/./src/hooks/useQuestion.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Answer() {\n    _s();\n    const { selectedQuestion, updateSelectedQuestion } = (0,_hooks_useQuestion__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const updatePoint = (points)=>{\n        if (!selectedQuestion || !points) return;\n        const newQuestion = {\n            ...selectedQuestion,\n            points: +points\n        };\n        updateSelectedQuestion(newQuestion);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-3 space-y-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: \"Answer\"\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between gap-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-[0.8rem] font-light text-dark-200\",\n                        children: \"Points\"\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: selectedQuestion === null || selectedQuestion === void 0 ? void 0 : selectedQuestion.points,\n                        onChange: (e)=>{\n                            updatePoint(e.target.value);\n                        },\n                        type: \"number\",\n                        inputMode: \"numeric\",\n                        className: \"appearance-none focus:outline-none w-12 text-center py-1 text-secondary-dark bg-accent border border-secondary rounded-md\"\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Answer, \"0eVeY5iMMiRdbgGn3P3VCgBqPr4=\", false, function() {\n    return [\n        _hooks_useQuestion__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Answer;\nvar _c;\n$RefreshReg$(_c, \"Answer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0VkaXRvci9DcmVhdGUvQ29udGVudC9BbnN3ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEM7QUFDcEI7QUFFWCxTQUFTRTs7SUFDdEIsTUFBTSxFQUFFQyxnQkFBZ0IsRUFBRUMsc0JBQXNCLEVBQUUsR0FBR0osOERBQVdBO0lBRWhFLE1BQU1LLGNBQWMsQ0FBQ0M7UUFDbkIsSUFBSSxDQUFDSCxvQkFBb0IsQ0FBQ0csUUFBUTtRQUNsQyxNQUFNQyxjQUFjO1lBQ2xCLEdBQUdKLGdCQUFnQjtZQUNuQkcsUUFBUSxDQUFDQTtRQUNYO1FBRUFGLHVCQUF1Qkc7SUFDekI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFHOzs7Ozs7MEJBRUosOERBQUNGOzs7OzswQkFFRCw4REFBQ0E7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBS0YsV0FBVTtrQ0FBeUM7Ozs7OztrQ0FDekQsOERBQUNHO3dCQUNDQyxLQUFLLEVBQUVWLDZCQUFBQSx1Q0FBQUEsaUJBQWtCRyxNQUFNO3dCQUMvQlEsVUFBVSxDQUFDQzs0QkFDVFYsWUFBWVUsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO3dCQUM1Qjt3QkFDQUksTUFBSzt3QkFDTEMsV0FBVTt3QkFDVlQsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0dBakN3QlA7O1FBQytCRiwwREFBV0E7OztLQUQxQ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRWRpdG9yL0NyZWF0ZS9Db250ZW50L0Fuc3dlci50c3g/YmE4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlUXVlc3Rpb24gZnJvbSBcIkAvaG9va3MvdXNlUXVlc3Rpb25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5zd2VyKCkge1xuICBjb25zdCB7IHNlbGVjdGVkUXVlc3Rpb24sIHVwZGF0ZVNlbGVjdGVkUXVlc3Rpb24gfSA9IHVzZVF1ZXN0aW9uKCk7XG5cbiAgY29uc3QgdXBkYXRlUG9pbnQgPSAocG9pbnRzOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkUXVlc3Rpb24gfHwgIXBvaW50cykgcmV0dXJuO1xuICAgIGNvbnN0IG5ld1F1ZXN0aW9uID0ge1xuICAgICAgLi4uc2VsZWN0ZWRRdWVzdGlvbixcbiAgICAgIHBvaW50czogK3BvaW50cyxcbiAgICB9O1xuXG4gICAgdXBkYXRlU2VsZWN0ZWRRdWVzdGlvbihuZXdRdWVzdGlvbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgc3BhY2UteS0yXCI+XG4gICAgICA8aDU+QW5zd2VyPC9oNT5cblxuICAgICAgPGRpdj48L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTNcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMC44cmVtXSBmb250LWxpZ2h0IHRleHQtZGFyay0yMDBcIj5Qb2ludHM8L3NwYW4+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFF1ZXN0aW9uPy5wb2ludHN9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVQb2ludChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBpbnB1dE1vZGU9XCJudW1lcmljXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIHctMTIgdGV4dC1jZW50ZXIgcHktMSB0ZXh0LXNlY29uZGFyeS1kYXJrIGJnLWFjY2VudCBib3JkZXIgYm9yZGVyLXNlY29uZGFyeSByb3VuZGVkLW1kXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVF1ZXN0aW9uIiwiUmVhY3QiLCJBbnN3ZXIiLCJzZWxlY3RlZFF1ZXN0aW9uIiwidXBkYXRlU2VsZWN0ZWRRdWVzdGlvbiIsInVwZGF0ZVBvaW50IiwicG9pbnRzIiwibmV3UXVlc3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJoNSIsInNwYW4iLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidHlwZSIsImlucHV0TW9kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Editor/Create/Content/Answer.tsx\n"));

/***/ })

});