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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Answer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_useQuestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useQuestion */ \"(app-pages-browser)/./src/hooks/useQuestion.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Answer() {\n    _s();\n    const { selectedQuestion, updateSelectedQuestion } = (0,_hooks_useQuestion__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const YesNoDropdown = [\n        {\n            label: \"Yes\",\n            value: \"YES\"\n        },\n        {\n            label: \"No\",\n            value: \"NO\"\n        }\n    ];\n    const MultiChoiceDropdown = (selectedQuestion === null || selectedQuestion === void 0 ? void 0 : selectedQuestion.type) === \"MULTIPLE_CHOICE\" ? selectedQuestion === null || selectedQuestion === void 0 ? void 0 : selectedQuestion.options.map((option)=>({\n            label: option.text,\n            value: option.id\n        })) : [];\n    console.log(MultiChoiceDropdown);\n    const updatePoint = (points)=>{\n        if (!selectedQuestion || !points) return;\n        const newQuestion = {\n            ...selectedQuestion,\n            points: +points\n        };\n        updateSelectedQuestion(newQuestion);\n    };\n    const updateShortAnswer = (answer)=>{\n        if (!selectedQuestion) return;\n        const newQuestion = {\n            ...selectedQuestion,\n            answer: answer === null || answer === void 0 ? void 0 : answer.toLowerCase()\n        };\n        updateSelectedQuestion(newQuestion);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-3 space-y-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: \"Answer\"\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-xs\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-2 items-center justify-between text-secondary\",\n                    children: [\n                        (selectedQuestion === null || selectedQuestion === void 0 ? void 0 : selectedQuestion.type) === \"MULTIPLE_CHOICE\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 60\n                        }, this),\n                        (selectedQuestion === null || selectedQuestion === void 0 ? void 0 : selectedQuestion.type) === \"YES/NO\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 51\n                        }, this),\n                        (selectedQuestion === null || selectedQuestion === void 0 ? void 0 : selectedQuestion.type) === \"SHORT_ANSWER\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"answer\",\n                            className: \"flex-1 appearance-none border-b  focus:outline-none\",\n                            value: selectedQuestion.answer,\n                            onChange: (e)=>{\n                                updateShortAnswer(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"pi pi-check-circle text-sm\"\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-xs flex items-center justify-between gap-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \" text-dark-200\",\n                        children: \"Points\"\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: selectedQuestion === null || selectedQuestion === void 0 ? void 0 : selectedQuestion.points,\n                        onChange: (e)=>{\n                            updatePoint(e.target.value);\n                        },\n                        type: \"number\",\n                        inputMode: \"numeric\",\n                        className: \"appearance-none focus:outline-none w-12 text-center py-1.5 text-secondary-dark bg-accent border border-secondary rounded-md\"\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(Answer, \"0eVeY5iMMiRdbgGn3P3VCgBqPr4=\", false, function() {\n    return [\n        _hooks_useQuestion__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Answer;\nvar _c;\n$RefreshReg$(_c, \"Answer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0VkaXRvci9DcmVhdGUvQ29udGVudC9BbnN3ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEM7QUFDcEI7QUFZWCxTQUFTRTs7SUFDdEIsTUFBTSxFQUFFQyxnQkFBZ0IsRUFBRUMsc0JBQXNCLEVBQUUsR0FBR0osOERBQVdBO0lBRWhFLE1BQU1LLGdCQUE0QjtRQUNoQztZQUNFQyxPQUFPO1lBQ1BDLE9BQU87UUFDVDtRQUNBO1lBQ0VELE9BQU87WUFDUEMsT0FBTztRQUNUO0tBQ0Q7SUFFRCxNQUFNQyxzQkFDSkwsQ0FBQUEsNkJBQUFBLHVDQUFBQSxpQkFBa0JNLElBQUksTUFBSyxvQkFDdkJOLDZCQUFBQSx1Q0FBQUEsaUJBQWtCTyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxTQUE2QjtZQUMxRE4sT0FBT00sT0FBT0MsSUFBSTtZQUNsQk4sT0FBT0ssT0FBT0UsRUFBRTtRQUNsQixNQUNBLEVBQUU7SUFFUkMsUUFBUUMsR0FBRyxDQUFDUjtJQUVaLE1BQU1TLGNBQWMsQ0FBQ0M7UUFDbkIsSUFBSSxDQUFDZixvQkFBb0IsQ0FBQ2UsUUFBUTtRQUNsQyxNQUFNQyxjQUFjO1lBQ2xCLEdBQUdoQixnQkFBZ0I7WUFDbkJlLFFBQVEsQ0FBQ0E7UUFDWDtRQUVBZCx1QkFBdUJlO0lBQ3pCO0lBRUEsTUFBTUMsb0JBQW9CLENBQUNDO1FBQ3pCLElBQUksQ0FBQ2xCLGtCQUFrQjtRQUN2QixNQUFNZ0IsY0FBYztZQUNsQixHQUFHaEIsZ0JBQWdCO1lBQ25Ca0IsTUFBTSxFQUFFQSxtQkFBQUEsNkJBQUFBLE9BQVFDLFdBQVc7UUFDN0I7UUFFQWxCLHVCQUF1QmU7SUFDekI7SUFFQSxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFHOzs7Ozs7MEJBRUosOERBQUNGO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7d0JBQ1pyQixDQUFBQSw2QkFBQUEsdUNBQUFBLGlCQUFrQk0sSUFBSSxNQUFLLG1DQUFxQiw4REFBQ2M7Ozs7O3dCQUVqRHBCLENBQUFBLDZCQUFBQSx1Q0FBQUEsaUJBQWtCTSxJQUFJLE1BQUssMEJBQVksOERBQUNjOzs7Ozt3QkFFeENwQixDQUFBQSw2QkFBQUEsdUNBQUFBLGlCQUFrQk0sSUFBSSxNQUFLLGdDQUMxQiw4REFBQ2lCOzRCQUNDakIsTUFBSzs0QkFDTGtCLE1BQUs7NEJBQ0xILFdBQVU7NEJBQ1ZqQixPQUFPSixpQkFBaUJrQixNQUFNOzRCQUM5Qk8sVUFBVSxDQUFDQztnQ0FDVFQsa0JBQWtCUyxFQUFFQyxNQUFNLENBQUN2QixLQUFLOzRCQUNsQzs7Ozs7O3NDQUlKLDhEQUFDd0I7NEJBQUVQLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlqQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDUTt3QkFBS1IsV0FBVTtrQ0FBaUI7Ozs7OztrQ0FDakMsOERBQUNFO3dCQUNDbkIsS0FBSyxFQUFFSiw2QkFBQUEsdUNBQUFBLGlCQUFrQmUsTUFBTTt3QkFDL0JVLFVBQVUsQ0FBQ0M7NEJBQ1RaLFlBQVlZLEVBQUVDLE1BQU0sQ0FBQ3ZCLEtBQUs7d0JBQzVCO3dCQUNBRSxNQUFLO3dCQUNMd0IsV0FBVTt3QkFDVlQsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0dBcEZ3QnRCOztRQUMrQkYsMERBQVdBOzs7S0FEMUNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0VkaXRvci9DcmVhdGUvQ29udGVudC9BbnN3ZXIudHN4P2JhODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVF1ZXN0aW9uIGZyb20gXCJAL2hvb2tzL3VzZVF1ZXN0aW9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25NZW51Q29udGVudCxcbiAgRHJvcGRvd25NZW51R3JvdXAsXG4gIERyb3Bkb3duTWVudUl0ZW0sXG4gIERyb3Bkb3duTWVudVRyaWdnZXIsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IHsgTGlzdFR5cGUgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uT3B0aW9ucyB9IGZyb20gXCJAL3R5cGVzL3F1ZXN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuc3dlcigpIHtcbiAgY29uc3QgeyBzZWxlY3RlZFF1ZXN0aW9uLCB1cGRhdGVTZWxlY3RlZFF1ZXN0aW9uIH0gPSB1c2VRdWVzdGlvbigpO1xuXG4gIGNvbnN0IFllc05vRHJvcGRvd246IExpc3RUeXBlW10gPSBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiWWVzXCIsXG4gICAgICB2YWx1ZTogXCJZRVNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIk5vXCIsXG4gICAgICB2YWx1ZTogXCJOT1wiLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgTXVsdGlDaG9pY2VEcm9wZG93bjogTGlzdFR5cGVbXSA9XG4gICAgc2VsZWN0ZWRRdWVzdGlvbj8udHlwZSA9PT0gXCJNVUxUSVBMRV9DSE9JQ0VcIlxuICAgICAgPyBzZWxlY3RlZFF1ZXN0aW9uPy5vcHRpb25zLm1hcCgob3B0aW9uOiBRdWVzdGlvbk9wdGlvbnMpID0+ICh7XG4gICAgICAgICAgbGFiZWw6IG9wdGlvbi50ZXh0LFxuICAgICAgICAgIHZhbHVlOiBvcHRpb24uaWQsXG4gICAgICAgIH0pKVxuICAgICAgOiBbXTtcblxuICBjb25zb2xlLmxvZyhNdWx0aUNob2ljZURyb3Bkb3duKTtcblxuICBjb25zdCB1cGRhdGVQb2ludCA9IChwb2ludHM6IHN0cmluZykgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRRdWVzdGlvbiB8fCAhcG9pbnRzKSByZXR1cm47XG4gICAgY29uc3QgbmV3UXVlc3Rpb24gPSB7XG4gICAgICAuLi5zZWxlY3RlZFF1ZXN0aW9uLFxuICAgICAgcG9pbnRzOiArcG9pbnRzLFxuICAgIH07XG5cbiAgICB1cGRhdGVTZWxlY3RlZFF1ZXN0aW9uKG5ld1F1ZXN0aW9uKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVTaG9ydEFuc3dlciA9IChhbnN3ZXI6IHN0cmluZykgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRRdWVzdGlvbikgcmV0dXJuO1xuICAgIGNvbnN0IG5ld1F1ZXN0aW9uID0ge1xuICAgICAgLi4uc2VsZWN0ZWRRdWVzdGlvbixcbiAgICAgIGFuc3dlcjogYW5zd2VyPy50b0xvd2VyQ2FzZSgpLFxuICAgIH07XG5cbiAgICB1cGRhdGVTZWxlY3RlZFF1ZXN0aW9uKG5ld1F1ZXN0aW9uKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBzcGFjZS15LTNcIj5cbiAgICAgIDxoNT5BbnN3ZXI8L2g1PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zZWNvbmRhcnlcIj5cbiAgICAgICAgICB7c2VsZWN0ZWRRdWVzdGlvbj8udHlwZSA9PT0gXCJNVUxUSVBMRV9DSE9JQ0VcIiAmJiA8ZGl2PjwvZGl2Pn1cblxuICAgICAgICAgIHtzZWxlY3RlZFF1ZXN0aW9uPy50eXBlID09PSBcIllFUy9OT1wiICYmIDxkaXY+PC9kaXY+fVxuXG4gICAgICAgICAge3NlbGVjdGVkUXVlc3Rpb24/LnR5cGUgPT09IFwiU0hPUlRfQU5TV0VSXCIgJiYgKFxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImFuc3dlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLWIgIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFF1ZXN0aW9uLmFuc3dlcn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgdXBkYXRlU2hvcnRBbnN3ZXIoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGkgcGktY2hlY2stY2lyY2xlIHRleHQtc21cIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTNcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiIHRleHQtZGFyay0yMDBcIj5Qb2ludHM8L3NwYW4+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFF1ZXN0aW9uPy5wb2ludHN9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVQb2ludChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBpbnB1dE1vZGU9XCJudW1lcmljXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIHctMTIgdGV4dC1jZW50ZXIgcHktMS41IHRleHQtc2Vjb25kYXJ5LWRhcmsgYmctYWNjZW50IGJvcmRlciBib3JkZXItc2Vjb25kYXJ5IHJvdW5kZWQtbWRcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUXVlc3Rpb24iLCJSZWFjdCIsIkFuc3dlciIsInNlbGVjdGVkUXVlc3Rpb24iLCJ1cGRhdGVTZWxlY3RlZFF1ZXN0aW9uIiwiWWVzTm9Ecm9wZG93biIsImxhYmVsIiwidmFsdWUiLCJNdWx0aUNob2ljZURyb3Bkb3duIiwidHlwZSIsIm9wdGlvbnMiLCJtYXAiLCJvcHRpb24iLCJ0ZXh0IiwiaWQiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlUG9pbnQiLCJwb2ludHMiLCJuZXdRdWVzdGlvbiIsInVwZGF0ZVNob3J0QW5zd2VyIiwiYW5zd2VyIiwidG9Mb3dlckNhc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoNSIsImlucHV0IiwibmFtZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImkiLCJzcGFuIiwiaW5wdXRNb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Editor/Create/Content/Answer.tsx\n"));

/***/ })

});