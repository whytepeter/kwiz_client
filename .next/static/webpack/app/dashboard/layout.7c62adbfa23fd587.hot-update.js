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

/***/ "(app-pages-browser)/./src/components/Navbar/WorkspaceList.tsx":
/*!*************************************************!*\
  !*** ./src/components/Navbar/WorkspaceList.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WorkspaceList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/dropdown-menu */ \"(app-pages-browser)/./src/components/ui/dropdown-menu.tsx\");\n/* harmony import */ var _Workspace_WorkspaceForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Workspace/WorkspaceForm */ \"(app-pages-browser)/./src/components/Workspace/WorkspaceForm.tsx\");\n/* harmony import */ var _hooks_useWorkspace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useWorkspace */ \"(app-pages-browser)/./src/hooks/useWorkspace.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction WorkspaceList() {\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [createModal, setCreateModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { workspaces, selectedWorkspace, setSelectedWorkspace } = (0,_hooks_useWorkspace__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenu, {\n                open: open,\n                onOpenChange: setOpen,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuTrigger, {\n                        asChild: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-2 cursor-pointer\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/icons/workspace_active.svg\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"hidden sm:flex\",\n                                    children: selectedWorkspace === null || selectedWorkspace === void 0 ? void 0 : selectedWorkspace.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\".concat(!open ? \"-rotate-90\" : \"\", \" transition-transform transform \"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/icons/arrow_down.svg\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuContent, {\n                        className: \"w-48  mt-2 bg-white/30 backdrop-blur-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuGroup, {\n                                className: \"max-h-44 overflow-auto\",\n                                children: workspaces.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItem, {\n                                        onClick: ()=>setSelectedWorkspace(item),\n                                        className: \"\".concat(item._id === (selectedWorkspace === null || selectedWorkspace === void 0 ? void 0 : selectedWorkspace._id) ? \"text-secondary\" : \"\", \" font-light gap-2 py-2\"),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: item._id === (selectedWorkspace === null || selectedWorkspace === void 0 ? void 0 : selectedWorkspace._id) ? \"/icons/workspace_active.svg\" : \"/icons/workspace.svg\",\n                                                alt: \"\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 17\n                                            }, this),\n                                            item.title\n                                        ]\n                                    }, item.title, true, {\n                                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuSeparator, {}, void 0, false, {\n                                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItem, {\n                                onClick: ()=>setCreateModal(true),\n                                className: \"gap-2 text-secondary\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"pi pi-plus-circle text-secondary\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"Add New\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Workspace_WorkspaceForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                open: createModal,\n                setOpen: setCreateModal\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(WorkspaceList, \"wVDQOWYc7ZQRx9wyw7nEOTZOl9E=\", false, function() {\n    return [\n        _hooks_useWorkspace__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = WorkspaceList;\nvar _c;\n$RefreshReg$(_c, \"WorkspaceList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci9Xb3Jrc3BhY2VMaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUQ7QUFRVjtBQUdnQjtBQUNQO0FBRWpDLFNBQVNVOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDWSxhQUFhQyxlQUFlLEdBQUdiLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU0sRUFBRWMsVUFBVSxFQUFFQyxpQkFBaUIsRUFBRUMsb0JBQW9CLEVBQUUsR0FDM0RSLCtEQUFZQTtJQUVkLHFCQUNFOzswQkFDRSw4REFBQ1Asc0VBQVlBO2dCQUFDUyxNQUFNQTtnQkFBTU8sY0FBY047O2tDQUN0Qyw4REFBQ0wsNkVBQW1CQTt3QkFBQ1ksT0FBTztrQ0FDMUIsNEVBQUNDOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0M7b0NBQUlDLEtBQUk7b0NBQThCQyxLQUFJOzs7Ozs7OENBQzNDLDhEQUFDQztvQ0FBS0osV0FBVTs4Q0FBa0JMLDhCQUFBQSx3Q0FBQUEsa0JBQW1CVSxLQUFLOzs7Ozs7OENBQzFELDhEQUFDRDtvQ0FDQ0osV0FBVyxHQUVWLE9BREMsQ0FBQ1YsT0FBTyxlQUFlLElBQ3hCOzhDQUVELDRFQUFDVzt3Q0FBSUMsS0FBSTt3Q0FBd0JDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSTNDLDhEQUFDckIsNkVBQW1CQTt3QkFBQ2tCLFdBQVU7OzBDQUM3Qiw4REFBQ2pCLDJFQUFpQkE7Z0NBQUNpQixXQUFVOzBDQUMxQk4sV0FBV1ksR0FBRyxDQUFDLENBQUNDLHFCQUNmLDhEQUFDdkIsMEVBQWdCQTt3Q0FDZndCLFNBQVMsSUFBTVoscUJBQXFCVzt3Q0FDcENQLFdBQVcsR0FFVixPQURDTyxLQUFLRSxHQUFHLE1BQUtkLDhCQUFBQSx3Q0FBQUEsa0JBQW1CYyxHQUFHLElBQUcsbUJBQW1CLElBQzFEOzswREFHRCw4REFBQ1I7Z0RBQ0NDLEtBQ0VLLEtBQUtFLEdBQUcsTUFBS2QsOEJBQUFBLHdDQUFBQSxrQkFBbUJjLEdBQUcsSUFDL0IsZ0NBQ0E7Z0RBRU5OLEtBQUk7Ozs7Ozs0Q0FFTEksS0FBS0YsS0FBSzs7dUNBVk5FLEtBQUtGLEtBQUs7Ozs7Ozs7Ozs7MENBZXJCLDhEQUFDcEIsK0VBQXFCQTs7Ozs7MENBQ3RCLDhEQUFDRCwwRUFBZ0JBO2dDQUNmd0IsU0FBUyxJQUFNZixlQUFlO2dDQUM5Qk8sV0FBVTs7a0RBRVYsOERBQUNVO3dDQUFFVixXQUFVOzs7Ozs7b0NBQXFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU14RCw4REFBQ2IsZ0VBQWFBO2dCQUFDRyxNQUFNRTtnQkFBYUQsU0FBU0U7Ozs7Ozs7O0FBR2pEO0dBNUR3Qko7O1FBS3BCRCwyREFBWUE7OztLQUxRQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvV29ya3NwYWNlTGlzdC50c3g/N2E2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25NZW51Q29udGVudCxcbiAgRHJvcGRvd25NZW51R3JvdXAsXG4gIERyb3Bkb3duTWVudUl0ZW0sXG4gIERyb3Bkb3duTWVudVNlcGFyYXRvcixcbiAgRHJvcGRvd25NZW51VHJpZ2dlcixcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgeyBXb3Jrc3BhY2UgfSBmcm9tIFwiQC90eXBlcy93b3Jrc3BhY2VcIjtcbmltcG9ydCB7IHVzZURhdGFTdG9yZSB9IGZyb20gXCJAL3N0b3JlL3N0b3JlXCI7XG5pbXBvcnQgV29ya3NwYWNlRm9ybSBmcm9tIFwiLi4vV29ya3NwYWNlL1dvcmtzcGFjZUZvcm1cIjtcbmltcG9ydCB1c2VXb3Jrc3BhY2UgZnJvbSBcIkAvaG9va3MvdXNlV29ya3NwYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtzcGFjZUxpc3QoKSB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NyZWF0ZU1vZGFsLCBzZXRDcmVhdGVNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgeyB3b3Jrc3BhY2VzLCBzZWxlY3RlZFdvcmtzcGFjZSwgc2V0U2VsZWN0ZWRXb3Jrc3BhY2UgfSA9XG4gICAgdXNlV29ya3NwYWNlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPERyb3Bkb3duTWVudSBvcGVuPXtvcGVufSBvbk9wZW5DaGFuZ2U9e3NldE9wZW59PlxuICAgICAgICA8RHJvcGRvd25NZW51VHJpZ2dlciBhc0NoaWxkPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3dvcmtzcGFjZV9hY3RpdmUuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBzbTpmbGV4XCI+e3NlbGVjdGVkV29ya3NwYWNlPy50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICFvcGVuID8gXCItcm90YXRlLTkwXCIgOiBcIlwiXG4gICAgICAgICAgICAgIH0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gdHJhbnNmb3JtIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL2Fycm93X2Rvd24uc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Ecm9wZG93bk1lbnVUcmlnZ2VyPlxuICAgICAgICA8RHJvcGRvd25NZW51Q29udGVudCBjbGFzc05hbWU9XCJ3LTQ4ICBtdC0yIGJnLXdoaXRlLzMwIGJhY2tkcm9wLWJsdXItbWRcIj5cbiAgICAgICAgICA8RHJvcGRvd25NZW51R3JvdXAgY2xhc3NOYW1lPVwibWF4LWgtNDQgb3ZlcmZsb3ctYXV0b1wiPlxuICAgICAgICAgICAge3dvcmtzcGFjZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVJdGVtXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRXb3Jrc3BhY2UoaXRlbSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgIGl0ZW0uX2lkID09PSBzZWxlY3RlZFdvcmtzcGFjZT8uX2lkID8gXCJ0ZXh0LXNlY29uZGFyeVwiIDogXCJcIlxuICAgICAgICAgICAgICAgIH0gZm9udC1saWdodCBnYXAtMiBweS0yYH1cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgICBpdGVtLl9pZCA9PT0gc2VsZWN0ZWRXb3Jrc3BhY2U/Ll9pZFxuICAgICAgICAgICAgICAgICAgICAgID8gXCIvaWNvbnMvd29ya3NwYWNlX2FjdGl2ZS5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCIvaWNvbnMvd29ya3NwYWNlLnN2Z1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51SXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvRHJvcGRvd25NZW51R3JvdXA+XG5cbiAgICAgICAgICA8RHJvcGRvd25NZW51U2VwYXJhdG9yIC8+XG4gICAgICAgICAgPERyb3Bkb3duTWVudUl0ZW1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENyZWF0ZU1vZGFsKHRydWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2FwLTIgdGV4dC1zZWNvbmRhcnlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBpIHBpLXBsdXMtY2lyY2xlIHRleHQtc2Vjb25kYXJ5XCIgLz5cbiAgICAgICAgICAgIEFkZCBOZXdcbiAgICAgICAgICA8L0Ryb3Bkb3duTWVudUl0ZW0+XG4gICAgICAgIDwvRHJvcGRvd25NZW51Q29udGVudD5cbiAgICAgIDwvRHJvcGRvd25NZW51PlxuXG4gICAgICA8V29ya3NwYWNlRm9ybSBvcGVuPXtjcmVhdGVNb2RhbH0gc2V0T3Blbj17c2V0Q3JlYXRlTW9kYWx9IC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duTWVudUNvbnRlbnQiLCJEcm9wZG93bk1lbnVHcm91cCIsIkRyb3Bkb3duTWVudUl0ZW0iLCJEcm9wZG93bk1lbnVTZXBhcmF0b3IiLCJEcm9wZG93bk1lbnVUcmlnZ2VyIiwiV29ya3NwYWNlRm9ybSIsInVzZVdvcmtzcGFjZSIsIldvcmtzcGFjZUxpc3QiLCJvcGVuIiwic2V0T3BlbiIsImNyZWF0ZU1vZGFsIiwic2V0Q3JlYXRlTW9kYWwiLCJ3b3Jrc3BhY2VzIiwic2VsZWN0ZWRXb3Jrc3BhY2UiLCJzZXRTZWxlY3RlZFdvcmtzcGFjZSIsIm9uT3BlbkNoYW5nZSIsImFzQ2hpbGQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJzcGFuIiwidGl0bGUiLCJtYXAiLCJpdGVtIiwib25DbGljayIsIl9pZCIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navbar/WorkspaceList.tsx\n"));

/***/ })

});