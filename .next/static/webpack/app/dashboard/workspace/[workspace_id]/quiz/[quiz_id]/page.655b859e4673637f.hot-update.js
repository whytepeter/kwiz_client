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

/***/ "(app-pages-browser)/./src/components/Editor/Create/Question/AddQuestion.tsx":
/*!***************************************************************!*\
  !*** ./src/components/Editor/Create/Question/AddQuestion.tsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddQuestion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/dropdown-menu */ \"(app-pages-browser)/./src/components/ui/dropdown-menu.tsx\");\n\n\n\n\nconst dropdown = [\n    {\n        label: \"Multiple Choice\",\n        type: \"MULTIPLE_CHOICE\",\n        icon: \"/icons/multi_choice.svg\"\n    },\n    {\n        label: \"Short Answer\",\n        type: \"SHORT_ANSWER\",\n        icon: \"/icons/short_answer.svg\"\n    },\n    {\n        label: \"Yes/No\",\n        type: \"YES/NO\",\n        icon: \"/icons/yes_no.svg\"\n    }\n];\nfunction AddQuestion() {\n    const handleAddQuestion = (item)=>{\n        const question = {\n            question: \"\",\n            description: \"\",\n            type: item.type,\n            points: 0\n        };\n        console.log(item);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuTrigger, {\n                    asChild: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        block: true,\n                        variant: \"outline\",\n                        className: \"!bg-accent\",\n                        size: \"xsmall\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"pi pi-plus\"\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/AddQuestion.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this),\n                            \" Add Content\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/AddQuestion.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/AddQuestion.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuContent, {\n                    className: \"w-44  bg-white/30 backdrop-blur-md\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuGroup, {\n                        className: \" overflow-auto\",\n                        children: dropdown.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuItem, {\n                                onClick: ()=>handleAddQuestion(item),\n                                className: \"font-light gap-2 py-2 text-[0.8rem] hover:text-secondary\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: item.icon,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/AddQuestion.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, this),\n                                    item.label\n                                ]\n                            }, item.type, true, {\n                                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/AddQuestion.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/AddQuestion.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/AddQuestion.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/AddQuestion.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/AddQuestion.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_c = AddQuestion;\nvar _c;\n$RefreshReg$(_c, \"AddQuestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0VkaXRvci9DcmVhdGUvUXVlc3Rpb24vQWRkUXVlc3Rpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDdEI7QUFRYTtBQUl2QyxNQUFNTyxXQUErQjtJQUNuQztRQUNFQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7Q0FDRDtBQUVjLFNBQVNDO0lBQ3RCLE1BQU1DLG9CQUFvQixDQUFDQztRQUN6QixNQUFNQyxXQUFXO1lBQ2ZBLFVBQVU7WUFDVkMsYUFBYTtZQUNiTixNQUFNSSxLQUFLSixJQUFJO1lBQ2ZPLFFBQVE7UUFDVjtRQUNBQyxRQUFRQyxHQUFHLENBQUNMO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ007a0JBQ0MsNEVBQUNqQixzRUFBWUE7OzhCQUNYLDhEQUFDSSw2RUFBbUJBO29CQUFDYyxPQUFPOzhCQUMxQiw0RUFBQ3BCLHlEQUFNQTt3QkFBQ3FCLEtBQUs7d0JBQUNDLFNBQVE7d0JBQVVDLFdBQVU7d0JBQWFDLE1BQUs7OzBDQUMxRCw4REFBQ0M7Z0NBQUVGLFdBQVU7Ozs7Ozs0QkFBZTs7Ozs7Ozs7Ozs7OzhCQUdoQyw4REFBQ3BCLDZFQUFtQkE7b0JBQUNvQixXQUFVOzhCQUM3Qiw0RUFBQ25CLDJFQUFpQkE7d0JBQUNtQixXQUFVO2tDQUMxQmhCLFNBQVNtQixHQUFHLENBQUMsQ0FBQ2IscUJBQ2IsOERBQUNSLDBFQUFnQkE7Z0NBQ2ZzQixTQUFTLElBQU1mLGtCQUFrQkM7Z0NBQ2pDVSxXQUFVOztrREFHViw4REFBQ0s7d0NBQUlDLEtBQUtoQixLQUFLSCxJQUFJO3dDQUFFb0IsS0FBSTs7Ozs7O29DQUN4QmpCLEtBQUtMLEtBQUs7OytCQUhOSyxLQUFLSixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVc5QjtLQXBDd0JFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0VkaXRvci9DcmVhdGUvUXVlc3Rpb24vQWRkUXVlc3Rpb24udHN4P2NhYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcbiAgRHJvcGRvd25NZW51LFxuICBEcm9wZG93bk1lbnVDb250ZW50LFxuICBEcm9wZG93bk1lbnVHcm91cCxcbiAgRHJvcGRvd25NZW51SXRlbSxcbiAgRHJvcGRvd25NZW51VHJpZ2dlcixcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9kcm9wZG93bi1tZW51XCI7XG5cbmltcG9ydCB7IFF1ZXN0aW9uVHlwZUxpc3QgfSBmcm9tIFwiQC90eXBlcy9xdWVzdGlvblwiO1xuXG5jb25zdCBkcm9wZG93bjogUXVlc3Rpb25UeXBlTGlzdFtdID0gW1xuICB7XG4gICAgbGFiZWw6IFwiTXVsdGlwbGUgQ2hvaWNlXCIsXG4gICAgdHlwZTogXCJNVUxUSVBMRV9DSE9JQ0VcIixcbiAgICBpY29uOiBcIi9pY29ucy9tdWx0aV9jaG9pY2Uuc3ZnXCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJTaG9ydCBBbnN3ZXJcIixcbiAgICB0eXBlOiBcIlNIT1JUX0FOU1dFUlwiLFxuICAgIGljb246IFwiL2ljb25zL3Nob3J0X2Fuc3dlci5zdmdcIixcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIlllcy9Ob1wiLFxuICAgIHR5cGU6IFwiWUVTL05PXCIsXG4gICAgaWNvbjogXCIvaWNvbnMveWVzX25vLnN2Z1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkUXVlc3Rpb24oKSB7XG4gIGNvbnN0IGhhbmRsZUFkZFF1ZXN0aW9uID0gKGl0ZW06IFF1ZXN0aW9uVHlwZUxpc3QpID0+IHtcbiAgICBjb25zdCBxdWVzdGlvbiA9IHtcbiAgICAgIHF1ZXN0aW9uOiBcIlwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICB0eXBlOiBpdGVtLnR5cGUsXG4gICAgICBwb2ludHM6IDAsXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8RHJvcGRvd25NZW51PlxuICAgICAgICA8RHJvcGRvd25NZW51VHJpZ2dlciBhc0NoaWxkPlxuICAgICAgICAgIDxCdXR0b24gYmxvY2sgdmFyaWFudD1cIm91dGxpbmVcIiBjbGFzc05hbWU9XCIhYmctYWNjZW50XCIgc2l6ZT1cInhzbWFsbFwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGkgcGktcGx1c1wiIC8+IEFkZCBDb250ZW50XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRHJvcGRvd25NZW51VHJpZ2dlcj5cbiAgICAgICAgPERyb3Bkb3duTWVudUNvbnRlbnQgY2xhc3NOYW1lPVwidy00NCAgYmctd2hpdGUvMzAgYmFja2Ryb3AtYmx1ci1tZFwiPlxuICAgICAgICAgIDxEcm9wZG93bk1lbnVHcm91cCBjbGFzc05hbWU9XCIgb3ZlcmZsb3ctYXV0b1wiPlxuICAgICAgICAgICAge2Ryb3Bkb3duLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8RHJvcGRvd25NZW51SXRlbVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZFF1ZXN0aW9uKGl0ZW0pfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtbGlnaHQgZ2FwLTIgcHktMiB0ZXh0LVswLjhyZW1dIGhvdmVyOnRleHQtc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udHlwZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmljb259IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51SXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvRHJvcGRvd25NZW51R3JvdXA+XG4gICAgICAgIDwvRHJvcGRvd25NZW51Q29udGVudD5cbiAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIlJlYWN0IiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25NZW51Q29udGVudCIsIkRyb3Bkb3duTWVudUdyb3VwIiwiRHJvcGRvd25NZW51SXRlbSIsIkRyb3Bkb3duTWVudVRyaWdnZXIiLCJkcm9wZG93biIsImxhYmVsIiwidHlwZSIsImljb24iLCJBZGRRdWVzdGlvbiIsImhhbmRsZUFkZFF1ZXN0aW9uIiwiaXRlbSIsInF1ZXN0aW9uIiwiZGVzY3JpcHRpb24iLCJwb2ludHMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiYXNDaGlsZCIsImJsb2NrIiwidmFyaWFudCIsImNsYXNzTmFtZSIsInNpemUiLCJpIiwibWFwIiwib25DbGljayIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Editor/Create/Question/AddQuestion.tsx\n"));

/***/ })

});