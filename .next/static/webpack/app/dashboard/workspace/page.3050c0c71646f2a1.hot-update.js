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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_base_EmptyState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/base/EmptyState */ \"(app-pages-browser)/./src/components/base/EmptyState.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_Workspace_WorkspaceNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Workspace/WorkspaceNav */ \"(app-pages-browser)/./src/components/Workspace/WorkspaceNav.tsx\");\n/* harmony import */ var _store_actions_quiz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/actions/quiz */ \"(app-pages-browser)/./src/store/actions/quiz.ts\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/store */ \"(app-pages-browser)/./src/store/store.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction page() {\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);\n    const { selectedWorkspace, quizzes } = (0,_store_store__WEBPACK_IMPORTED_MODULE_5__.useDataStore)();\n    const fetchQuizzes = async ()=>{\n        if (selectedWorkspace) {\n            try {\n                setLoading(true);\n                await (0,_store_actions_quiz__WEBPACK_IMPORTED_MODULE_4__.getQuizzes)(selectedWorkspace._id);\n            } catch (error) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error(error.message || \"Error fetching quiz\");\n            } finally{\n                setLoading(false);\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        fetchQuizzes();\n    }, [\n        selectedWorkspace\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Workspace_WorkspaceNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/app/dashboard/workspace/page.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center p-4\",\n                children: \"Loading\"\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/app/dashboard/workspace/page.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this) : (quizzes === null || quizzes === void 0 ? void 0 : quizzes.length) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"List Quiz\"\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/app/dashboard/workspace/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_base_EmptyState__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: \"There’s not a quiz in sight\",\n                description: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"pi pi-plus\"\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/app/dashboard/workspace/page.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this),\n                        \"Create a new quiz\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/app/dashboard/workspace/page.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/app/dashboard/workspace/page.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/app/dashboard/workspace/page.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"A9jYp21SrxCBFm5btSAJ+l+ayNo=\", false, function() {\n    return [\n        _store_store__WEBPACK_IMPORTED_MODULE_5__.useDataStore\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3dvcmtzcGFjZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDc0Q7QUFDTjtBQUNlO0FBQ2I7QUFDTDtBQUNNO0FBQ2Y7QUFFckIsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLEVBQUVLLGlCQUFpQixFQUFFQyxPQUFPLEVBQUUsR0FBR1QsMERBQVlBO0lBRW5ELE1BQU1VLGVBQWU7UUFDbkIsSUFBSUYsbUJBQW1CO1lBQ3JCLElBQUk7Z0JBQ0ZELFdBQVc7Z0JBQ1gsTUFBTVIsK0RBQVVBLENBQUNTLGtCQUFrQkcsR0FBRztZQUN4QyxFQUFFLE9BQU9DLE9BQVk7Z0JBQ25CUix1REFBS0EsQ0FBQ1EsS0FBSyxDQUFDQSxNQUFNQyxPQUFPLElBQUk7WUFDL0IsU0FBVTtnQkFDUk4sV0FBVztZQUNiO1FBQ0Y7SUFDRjtJQUVBTCxnREFBU0EsQ0FBQztRQUNSUTtJQUNGLEdBQUc7UUFBQ0Y7S0FBa0I7SUFFdEIscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDakIsMEVBQVlBOzs7OztZQUVaUSx3QkFDQyw4REFBQ1E7Z0JBQUlDLFdBQVU7MEJBQWtCOzs7Ozt1QkFDL0JOLENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBU08sTUFBTSxrQkFDakIsOERBQUNGOzBCQUFJOzs7OztxQ0FFTCw4REFBQ2xCLG1FQUFVQTtnQkFBQ3FCLE9BQU07Z0JBQThCQyxhQUFZOzBCQUMxRCw0RUFBQ3JCLHlEQUFNQTs7c0NBQ0wsOERBQUNzQjs0QkFBRUosV0FBVTs7Ozs7O3dCQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEM7R0F2Q3dCVjs7UUFFaUJMLHNEQUFZQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Rhc2hib2FyZC93b3Jrc3BhY2UvcGFnZS50c3g/ZGFhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBFbXB0eVN0YXRlIGZyb20gXCJAL2NvbXBvbmVudHMvYmFzZS9FbXB0eVN0YXRlXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IFdvcmtzcGFjZU5hdiBmcm9tIFwiQC9jb21wb25lbnRzL1dvcmtzcGFjZS9Xb3Jrc3BhY2VOYXZcIjtcbmltcG9ydCB7IGdldFF1aXp6ZXMgfSBmcm9tIFwiQC9zdG9yZS9hY3Rpb25zL3F1aXpcIjtcbmltcG9ydCB7IHVzZURhdGFTdG9yZSB9IGZyb20gXCJAL3N0b3JlL3N0b3JlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHRvYXN0IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZSgpIHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IHNlbGVjdGVkV29ya3NwYWNlLCBxdWl6emVzIH0gPSB1c2VEYXRhU3RvcmUoKTtcblxuICBjb25zdCBmZXRjaFF1aXp6ZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkV29ya3NwYWNlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICBhd2FpdCBnZXRRdWl6emVzKHNlbGVjdGVkV29ya3NwYWNlLl9pZCk7XG4gICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UgfHwgXCJFcnJvciBmZXRjaGluZyBxdWl6XCIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hRdWl6emVzKCk7XG4gIH0sIFtzZWxlY3RlZFdvcmtzcGFjZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC01XCI+XG4gICAgICA8V29ya3NwYWNlTmF2IC8+XG5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHAtNFwiPkxvYWRpbmc8L2Rpdj5cbiAgICAgICkgOiBxdWl6emVzPy5sZW5ndGggPyAoXG4gICAgICAgIDxkaXY+TGlzdCBRdWl6PC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8RW1wdHlTdGF0ZSB0aXRsZT1cIlRoZXJl4oCZcyBub3QgYSBxdWl6IGluIHNpZ2h0XCIgZGVzY3JpcHRpb249XCJcIj5cbiAgICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGkgcGktcGx1c1wiIC8+XG4gICAgICAgICAgICBDcmVhdGUgYSBuZXcgcXVpelxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0VtcHR5U3RhdGU+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkVtcHR5U3RhdGUiLCJCdXR0b24iLCJXb3Jrc3BhY2VOYXYiLCJnZXRRdWl6emVzIiwidXNlRGF0YVN0b3JlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInRvYXN0IiwicGFnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2VsZWN0ZWRXb3Jrc3BhY2UiLCJxdWl6emVzIiwiZmV0Y2hRdWl6emVzIiwiX2lkIiwiZXJyb3IiLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/workspace/page.tsx\n"));

/***/ })

});