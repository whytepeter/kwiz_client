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

/***/ "(app-pages-browser)/./src/components/Workspace/WorkspaceNav.tsx":
/*!***************************************************!*\
  !*** ./src/components/Workspace/WorkspaceNav.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WorkspaceNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/store */ \"(app-pages-browser)/./src/store/store.ts\");\n/* harmony import */ var _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/dropdown-menu */ \"(app-pages-browser)/./src/components/ui/dropdown-menu.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst sortOptions = [\n    {\n        title: \"Date created\",\n        value: \"createdAt\",\n        icon: \"/icons/calendar.svg\"\n    },\n    {\n        title: \"Last updated\",\n        value: \"updatedAt\",\n        icon: \"/icons/edit.svg\"\n    },\n    {\n        title: \"Alphabetical\",\n        value: \"title\",\n        icon: \"/icons/sort.svg\"\n    }\n];\nfunction WorkspaceNav() {\n    _s();\n    const { selectedWorkspace } = (0,_store_store__WEBPACK_IMPORTED_MODULE_3__.useDataStore)();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(sortOptions[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full border-y \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container flex items-center justify-between gap-4 p-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-2 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-sm sm:text-base text-secondary-dark\",\n                                    children: selectedWorkspace === null || selectedWorkspace === void 0 ? void 0 : selectedWorkspace.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Workspace/WorkspaceNav.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"cursor-pointer\",\n                                    src: \"/icons/dots.svg\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Workspace/WorkspaceNav.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Workspace/WorkspaceNav.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            className: \"!text-dark-300 !text-sm hover:!bg-dark-50/30\",\n                            color: \"white\",\n                            size: \"xsmall\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/icons/invite.svg\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Workspace/WorkspaceNav.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, this),\n                                \"Invite\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Workspace/WorkspaceNav.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Workspace/WorkspaceNav.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenu, {\n                            open: open,\n                            onOpenChange: setOpen,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuTrigger, {\n                                    asChild: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center gap-2 cursor-pointer\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: sortBy === null || sortBy === void 0 ? void 0 : sortBy.icon,\n                                                alt: \"\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Workspace/WorkspaceNav.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"hidden sm:flex text-sm text-dark-300 \",\n                                                children: sortBy === null || sortBy === void 0 ? void 0 : sortBy.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Workspace/WorkspaceNav.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"\".concat(!open ? \"-rotate-90\" : \"\", \" transition-transform transform \"),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"/icons/arrow_down.svg\",\n                                                    alt: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Workspace/WorkspaceNav.tsx\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Workspace/WorkspaceNav.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Workspace/WorkspaceNav.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Workspace/WorkspaceNav.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuContent, {\n                                    className: \"w-48 mt-2 bg-white/30 backdrop-blur-md\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuGroup, {\n                                        className: \"max-h-44 overflow-auto\",\n                                        children: sortOptions.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuItem, {\n                                                onClick: ()=>setSortBy(item),\n                                                className: \"font-light gap-2 py-2\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: item.icon,\n                                                        alt: \"\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Workspace/WorkspaceNav.tsx\",\n                                                        lineNumber: 89,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    item.title\n                                                ]\n                                            }, item.title, true, {\n                                                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Workspace/WorkspaceNav.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Workspace/WorkspaceNav.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Workspace/WorkspaceNav.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Workspace/WorkspaceNav.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Workspace/WorkspaceNav.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Workspace/WorkspaceNav.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Workspace/WorkspaceNav.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Workspace/WorkspaceNav.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(WorkspaceNav, \"x7mvq1e/ltpPUWbYzV/OwSzG5ys=\", false, function() {\n    return [\n        _store_store__WEBPACK_IMPORTED_MODULE_3__.useDataStore\n    ];\n});\n_c = WorkspaceNav;\nvar _c;\n$RefreshReg$(_c, \"WorkspaceNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1dvcmtzcGFjZS9Xb3Jrc3BhY2VOYXYudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNGO0FBQ087QUFTTjtBQU92QyxNQUFNUyxjQUEyQjtJQUMvQjtRQUNFQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLE1BQU07SUFDUjtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsT0FBTztRQUNQQyxNQUFNO0lBQ1I7Q0FDRDtBQUVjLFNBQVNDOztJQUN0QixNQUFNLEVBQUVDLGlCQUFpQixFQUFFLEdBQUdYLDBEQUFZQTtJQUUxQyxNQUFNLENBQUNZLE1BQU1DLFFBQVEsR0FBR2YsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDZ0IsUUFBUUMsVUFBVSxHQUFHakIsK0NBQVFBLENBQVlRLFdBQVcsQ0FBQyxFQUFFO0lBRTlELHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNDO29DQUFHRCxXQUFVOzhDQUNYTiw4QkFBQUEsd0NBQUFBLGtCQUFtQkosS0FBSzs7Ozs7OzhDQUUzQiw4REFBQ1k7b0NBQUlGLFdBQVU7b0NBQWlCRyxLQUFJO29DQUFrQkMsS0FBSTs7Ozs7Ozs7Ozs7O3NDQUc1RCw4REFBQ3RCLDhDQUFNQTs0QkFDTGtCLFdBQVU7NEJBQ1ZLLE9BQU07NEJBQ05DLE1BQUs7OzhDQUVMLDhEQUFDSjtvQ0FBSUMsS0FBSTtvQ0FBb0JDLEtBQUk7Ozs7OztnQ0FBSzs7Ozs7Ozs7Ozs7Ozs4QkFLMUMsOERBQUNMO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ2hCLHNFQUFZQTs0QkFBQ1csTUFBTUE7NEJBQU1ZLGNBQWNYOzs4Q0FDdEMsOERBQUNSLDZFQUFtQkE7b0NBQUNvQixPQUFPOzhDQUMxQiw0RUFBQ1Q7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDRTtnREFBSUMsR0FBRyxFQUFFTixtQkFBQUEsNkJBQUFBLE9BQVFMLElBQUk7Z0RBQUVZLEtBQUk7Ozs7OzswREFDNUIsOERBQUNLO2dEQUFLVCxXQUFVOzBEQUNiSCxtQkFBQUEsNkJBQUFBLE9BQVFQLEtBQUs7Ozs7OzswREFFaEIsOERBQUNtQjtnREFDQ1QsV0FBVyxHQUVWLE9BREMsQ0FBQ0wsT0FBTyxlQUFlLElBQ3hCOzBEQUVELDRFQUFDTztvREFBSUMsS0FBSTtvREFBd0JDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBSTNDLDhEQUFDbkIsNkVBQW1CQTtvQ0FBQ2UsV0FBVTs4Q0FDN0IsNEVBQUNkLDJFQUFpQkE7d0NBQUNjLFdBQVU7a0RBQzFCWCxZQUFZcUIsR0FBRyxDQUFDLENBQUNDLHFCQUNoQiw4REFBQ3hCLDBFQUFnQkE7Z0RBQ2Z5QixTQUFTLElBQU1kLFVBQVVhO2dEQUN6QlgsV0FBVTs7a0VBR1YsOERBQUNFO3dEQUFJQyxLQUFLUSxLQUFLbkIsSUFBSTt3REFBRVksS0FBSTs7Ozs7O29EQUN4Qk8sS0FBS3JCLEtBQUs7OytDQUhOcUIsS0FBS3JCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FTekIsOERBQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1g7R0FoRXdCTjs7UUFDUVYsc0RBQVlBOzs7S0FEcEJVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1dvcmtzcGFjZS9Xb3Jrc3BhY2VOYXYudHN4P2M0YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSBmcm9tIFwiQC9zdG9yZS9zdG9yZVwiO1xuXG5pbXBvcnQge1xuICBEcm9wZG93bk1lbnUsXG4gIERyb3Bkb3duTWVudUNvbnRlbnQsXG4gIERyb3Bkb3duTWVudUdyb3VwLFxuICBEcm9wZG93bk1lbnVJdGVtLFxuICBEcm9wZG93bk1lbnVTZXBhcmF0b3IsXG4gIERyb3Bkb3duTWVudVRyaWdnZXIsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvZHJvcGRvd24tbWVudVwiO1xuXG5leHBvcnQgdHlwZSBTb3J0SXRlbXMgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbn07XG5jb25zdCBzb3J0T3B0aW9uczogU29ydEl0ZW1zW10gPSBbXG4gIHtcbiAgICB0aXRsZTogXCJEYXRlIGNyZWF0ZWRcIixcbiAgICB2YWx1ZTogXCJjcmVhdGVkQXRcIixcbiAgICBpY29uOiBcIi9pY29ucy9jYWxlbmRhci5zdmdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxhc3QgdXBkYXRlZFwiLFxuICAgIHZhbHVlOiBcInVwZGF0ZWRBdFwiLFxuICAgIGljb246IFwiL2ljb25zL2VkaXQuc3ZnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJBbHBoYWJldGljYWxcIixcbiAgICB2YWx1ZTogXCJ0aXRsZVwiLFxuICAgIGljb246IFwiL2ljb25zL3NvcnQuc3ZnXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3Jrc3BhY2VOYXYoKSB7XG4gIGNvbnN0IHsgc2VsZWN0ZWRXb3Jrc3BhY2UgfSA9IHVzZURhdGFTdG9yZSgpO1xuXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NvcnRCeSwgc2V0U29ydEJ5XSA9IHVzZVN0YXRlPFNvcnRJdGVtcz4oc29ydE9wdGlvbnNbMF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLXkgXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTQgcC0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gc206dGV4dC1iYXNlIHRleHQtc2Vjb25kYXJ5LWRhcmtcIj5cbiAgICAgICAgICAgICAge3NlbGVjdGVkV29ya3NwYWNlPy50aXRsZX1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgc3JjPVwiL2ljb25zL2RvdHMuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiF0ZXh0LWRhcmstMzAwICF0ZXh0LXNtIGhvdmVyOiFiZy1kYXJrLTUwLzMwXCJcbiAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgc2l6ZT1cInhzbWFsbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvaW52aXRlLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICBJbnZpdGVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgIDxEcm9wZG93bk1lbnUgb3Blbj17b3Blbn0gb25PcGVuQ2hhbmdlPXtzZXRPcGVufT5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnVUcmlnZ2VyIGFzQ2hpbGQ+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17c29ydEJ5Py5pY29ufSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBzbTpmbGV4IHRleHQtc20gdGV4dC1kYXJrLTMwMCBcIj5cbiAgICAgICAgICAgICAgICAgIHtzb3J0Qnk/LnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgIW9wZW4gPyBcIi1yb3RhdGUtOTBcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIH0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gdHJhbnNmb3JtIGB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvYXJyb3dfZG93bi5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudVRyaWdnZXI+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51Q29udGVudCBjbGFzc05hbWU9XCJ3LTQ4IG10LTIgYmctd2hpdGUvMzAgYmFja2Ryb3AtYmx1ci1tZFwiPlxuICAgICAgICAgICAgICA8RHJvcGRvd25NZW51R3JvdXAgY2xhc3NOYW1lPVwibWF4LWgtNDQgb3ZlcmZsb3ctYXV0b1wiPlxuICAgICAgICAgICAgICAgIHtzb3J0T3B0aW9ucy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNvcnRCeShpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1saWdodCBnYXAtMiBweS0yXCJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pY29ufSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51SXRlbT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVHcm91cD5cbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51Q29udGVudD5cbiAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJ1c2VEYXRhU3RvcmUiLCJEcm9wZG93bk1lbnUiLCJEcm9wZG93bk1lbnVDb250ZW50IiwiRHJvcGRvd25NZW51R3JvdXAiLCJEcm9wZG93bk1lbnVJdGVtIiwiRHJvcGRvd25NZW51VHJpZ2dlciIsInNvcnRPcHRpb25zIiwidGl0bGUiLCJ2YWx1ZSIsImljb24iLCJXb3Jrc3BhY2VOYXYiLCJzZWxlY3RlZFdvcmtzcGFjZSIsIm9wZW4iLCJzZXRPcGVuIiwic29ydEJ5Iiwic2V0U29ydEJ5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJpbWciLCJzcmMiLCJhbHQiLCJjb2xvciIsInNpemUiLCJvbk9wZW5DaGFuZ2UiLCJhc0NoaWxkIiwic3BhbiIsIm1hcCIsIml0ZW0iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Workspace/WorkspaceNav.tsx\n"));

/***/ })

});