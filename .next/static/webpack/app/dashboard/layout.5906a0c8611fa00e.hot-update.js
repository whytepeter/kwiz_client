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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WorkspaceList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/dropdown-menu */ \"(app-pages-browser)/./src/components/ui/dropdown-menu.tsx\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/store */ \"(app-pages-browser)/./src/store/store.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst workspaces = [\n    {\n        _id: \"1\",\n        title: \"My workspace\",\n        createdBy: \"\",\n        collaborators: [\n            \"\"\n        ]\n    },\n    {\n        _id: \"2\",\n        title: \"NDU Space\",\n        createdBy: \"\",\n        collaborators: [\n            \"\"\n        ]\n    }\n];\nfunction WorkspaceList() {\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { selectedWorkspace, workspaces } = (0,_store_store__WEBPACK_IMPORTED_MODULE_3__.useDataStore)();\n    const setSelected = (workspace)=>{\n        _store_store__WEBPACK_IMPORTED_MODULE_3__.useDataStore.setState({\n            selectedWorkspace: workspace\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenu, {\n        open: open,\n        onOpenChange: setOpen,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuTrigger, {\n                asChild: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-2 cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/icons/workspace_active.svg\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        selectedWorkspace === null || selectedWorkspace === void 0 ? void 0 : selectedWorkspace.title,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"\".concat(!open ? \"-rotate-90\" : \"\", \" transition-transform transform \"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/icons/arrow_down.svg\",\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuContent, {\n                className: \"w-48  mt-2 bg-white/30 backdrop-blur-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuGroup, {\n                        className: \"max-h-44 overflow-auto\",\n                        children: workspaces.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItem, {\n                                onClick: ()=>setSelected(item),\n                                className: \"\".concat(item._id === (selectedWorkspace === null || selectedWorkspace === void 0 ? void 0 : selectedWorkspace._id) ? \"text-secondary\" : \"\", \" font-light gap-2 py-2\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: item._id === (selectedWorkspace === null || selectedWorkspace === void 0 ? void 0 : selectedWorkspace._id) ? \"/icons/workspace_active.svg\" : \"/icons/workspace.svg\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, this),\n                                    item.title\n                                ]\n                            }, item.title, true, {\n                                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuSeparator, {}, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItem, {\n                        className: \"gap-2 text-secondary\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"pi pi-plus-circle text-secondary\"\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            \"Add New\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Navbar/WorkspaceList.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(WorkspaceList, \"FnsKhEcHBT614TW74T4PitA/P0A=\", false, function() {\n    return [\n        _store_store__WEBPACK_IMPORTED_MODULE_3__.useDataStore\n    ];\n});\n_c = WorkspaceList;\nvar _c;\n$RefreshReg$(_c, \"WorkspaceList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci9Xb3Jrc3BhY2VMaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QztBQVFEO0FBRU07QUFFN0MsTUFBTVMsYUFBMEI7SUFDOUI7UUFDRUMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLFdBQVc7UUFDWEMsZUFBZTtZQUFDO1NBQUc7SUFDckI7SUFDQTtRQUNFSCxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsV0FBVztRQUNYQyxlQUFlO1lBQUM7U0FBRztJQUNyQjtDQUNEO0FBRWMsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNLEVBQUVnQixpQkFBaUIsRUFBRVIsVUFBVSxFQUFFLEdBQUdELDBEQUFZQTtJQUV0RCxNQUFNVSxjQUFjLENBQUNDO1FBQ25CWCxzREFBWUEsQ0FBQ1ksUUFBUSxDQUFDO1lBQ3BCSCxtQkFBbUJFO1FBQ3JCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2pCLHNFQUFZQTtRQUFDYSxNQUFNQTtRQUFNTSxjQUFjTDs7MEJBQ3RDLDhEQUFDVCw2RUFBbUJBO2dCQUFDZSxPQUFPOzBCQUMxQiw0RUFBQ0M7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBSUMsS0FBSTs0QkFBOEJDLEtBQUk7Ozs7Ozt3QkFDMUNWLDhCQUFBQSx3Q0FBQUEsa0JBQW1CTixLQUFLO3NDQUV6Qiw4REFBQ2lCOzRCQUNDSixXQUFXLEdBRVYsT0FEQyxDQUFDVCxPQUFPLGVBQWUsSUFDeEI7c0NBRUQsNEVBQUNVO2dDQUFJQyxLQUFJO2dDQUF3QkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJM0MsOERBQUN4Qiw2RUFBbUJBO2dCQUFDcUIsV0FBVTs7a0NBQzdCLDhEQUFDcEIsMkVBQWlCQTt3QkFBQ29CLFdBQVU7a0NBQzFCZixXQUFXb0IsR0FBRyxDQUFDLENBQUNDLHFCQUNmLDhEQUFDekIsMEVBQWdCQTtnQ0FDZjBCLFNBQVMsSUFBTWIsWUFBWVk7Z0NBQzNCTixXQUFXLEdBRVYsT0FEQ00sS0FBS3BCLEdBQUcsTUFBS08sOEJBQUFBLHdDQUFBQSxrQkFBbUJQLEdBQUcsSUFBRyxtQkFBbUIsSUFDMUQ7O2tEQUdELDhEQUFDZTt3Q0FDQ0MsS0FDRUksS0FBS3BCLEdBQUcsTUFBS08sOEJBQUFBLHdDQUFBQSxrQkFBbUJQLEdBQUcsSUFDL0IsZ0NBQ0E7d0NBRU5pQixLQUFJOzs7Ozs7b0NBRUxHLEtBQUtuQixLQUFLOzsrQkFWTm1CLEtBQUtuQixLQUFLOzs7Ozs7Ozs7O2tDQWVyQiw4REFBQ0wsK0VBQXFCQTs7Ozs7a0NBQ3RCLDhEQUFDRCwwRUFBZ0JBO3dCQUFDbUIsV0FBVTs7MENBQzFCLDhEQUFDUTtnQ0FBRVIsV0FBVTs7Ozs7OzRCQUFxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01RDtHQTFEd0JWOztRQUdvQk4sc0RBQVlBOzs7S0FIaENNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdmJhci9Xb3Jrc3BhY2VMaXN0LnRzeD83YTY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgRHJvcGRvd25NZW51LFxuICBEcm9wZG93bk1lbnVDb250ZW50LFxuICBEcm9wZG93bk1lbnVHcm91cCxcbiAgRHJvcGRvd25NZW51SXRlbSxcbiAgRHJvcGRvd25NZW51U2VwYXJhdG9yLFxuICBEcm9wZG93bk1lbnVUcmlnZ2VyLFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2Ryb3Bkb3duLW1lbnVcIjtcbmltcG9ydCB7IFdvcmtzcGFjZSB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSBmcm9tIFwiQC9zdG9yZS9zdG9yZVwiO1xuXG5jb25zdCB3b3Jrc3BhY2VzOiBXb3Jrc3BhY2VbXSA9IFtcbiAge1xuICAgIF9pZDogXCIxXCIsXG4gICAgdGl0bGU6IFwiTXkgd29ya3NwYWNlXCIsXG4gICAgY3JlYXRlZEJ5OiBcIlwiLFxuICAgIGNvbGxhYm9yYXRvcnM6IFtcIlwiXSxcbiAgfSxcbiAge1xuICAgIF9pZDogXCIyXCIsXG4gICAgdGl0bGU6IFwiTkRVIFNwYWNlXCIsXG4gICAgY3JlYXRlZEJ5OiBcIlwiLFxuICAgIGNvbGxhYm9yYXRvcnM6IFtcIlwiXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtzcGFjZUxpc3QoKSB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB7IHNlbGVjdGVkV29ya3NwYWNlLCB3b3Jrc3BhY2VzIH0gPSB1c2VEYXRhU3RvcmUoKTtcblxuICBjb25zdCBzZXRTZWxlY3RlZCA9ICh3b3Jrc3BhY2U6IFdvcmtzcGFjZSkgPT4ge1xuICAgIHVzZURhdGFTdG9yZS5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZFdvcmtzcGFjZTogd29ya3NwYWNlLFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERyb3Bkb3duTWVudSBvcGVuPXtvcGVufSBvbk9wZW5DaGFuZ2U9e3NldE9wZW59PlxuICAgICAgPERyb3Bkb3duTWVudVRyaWdnZXIgYXNDaGlsZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3dvcmtzcGFjZV9hY3RpdmUuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICB7c2VsZWN0ZWRXb3Jrc3BhY2U/LnRpdGxlfVxuXG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICFvcGVuID8gXCItcm90YXRlLTkwXCIgOiBcIlwiXG4gICAgICAgICAgICB9IHRyYW5zaXRpb24tdHJhbnNmb3JtIHRyYW5zZm9ybSBgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL2Fycm93X2Rvd24uc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Ecm9wZG93bk1lbnVUcmlnZ2VyPlxuICAgICAgPERyb3Bkb3duTWVudUNvbnRlbnQgY2xhc3NOYW1lPVwidy00OCAgbXQtMiBiZy13aGl0ZS8zMCBiYWNrZHJvcC1ibHVyLW1kXCI+XG4gICAgICAgIDxEcm9wZG93bk1lbnVHcm91cCBjbGFzc05hbWU9XCJtYXgtaC00NCBvdmVyZmxvdy1hdXRvXCI+XG4gICAgICAgICAge3dvcmtzcGFjZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8RHJvcGRvd25NZW51SXRlbVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZChpdGVtKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICBpdGVtLl9pZCA9PT0gc2VsZWN0ZWRXb3Jrc3BhY2U/Ll9pZCA/IFwidGV4dC1zZWNvbmRhcnlcIiA6IFwiXCJcbiAgICAgICAgICAgICAgfSBmb250LWxpZ2h0IGdhcC0yIHB5LTJgfVxuICAgICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgaXRlbS5faWQgPT09IHNlbGVjdGVkV29ya3NwYWNlPy5faWRcbiAgICAgICAgICAgICAgICAgICAgPyBcIi9pY29ucy93b3Jrc3BhY2VfYWN0aXZlLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgIDogXCIvaWNvbnMvd29ya3NwYWNlLnN2Z1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0Ryb3Bkb3duTWVudUdyb3VwPlxuXG4gICAgICAgIDxEcm9wZG93bk1lbnVTZXBhcmF0b3IgLz5cbiAgICAgICAgPERyb3Bkb3duTWVudUl0ZW0gY2xhc3NOYW1lPVwiZ2FwLTIgdGV4dC1zZWNvbmRhcnlcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwaSBwaS1wbHVzLWNpcmNsZSB0ZXh0LXNlY29uZGFyeVwiIC8+XG4gICAgICAgICAgQWRkIE5ld1xuICAgICAgICA8L0Ryb3Bkb3duTWVudUl0ZW0+XG4gICAgICA8L0Ryb3Bkb3duTWVudUNvbnRlbnQ+XG4gICAgPC9Ecm9wZG93bk1lbnU+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duTWVudUNvbnRlbnQiLCJEcm9wZG93bk1lbnVHcm91cCIsIkRyb3Bkb3duTWVudUl0ZW0iLCJEcm9wZG93bk1lbnVTZXBhcmF0b3IiLCJEcm9wZG93bk1lbnVUcmlnZ2VyIiwidXNlRGF0YVN0b3JlIiwid29ya3NwYWNlcyIsIl9pZCIsInRpdGxlIiwiY3JlYXRlZEJ5IiwiY29sbGFib3JhdG9ycyIsIldvcmtzcGFjZUxpc3QiLCJvcGVuIiwic2V0T3BlbiIsInNlbGVjdGVkV29ya3NwYWNlIiwic2V0U2VsZWN0ZWQiLCJ3b3Jrc3BhY2UiLCJzZXRTdGF0ZSIsIm9uT3BlbkNoYW5nZSIsImFzQ2hpbGQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJzcGFuIiwibWFwIiwiaXRlbSIsIm9uQ2xpY2siLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navbar/WorkspaceList.tsx\n"));

/***/ })

});