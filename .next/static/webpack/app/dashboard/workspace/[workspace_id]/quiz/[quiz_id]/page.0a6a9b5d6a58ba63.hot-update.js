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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Answer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_useQuestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useQuestion */ \"(app-pages-browser)/./src/hooks/useQuestion.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Answer() {\n    _s();\n    const { selectedQuestion, updateSelectedQuestion } = (0,_hooks_useQuestion__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const YesNoDropdown = [\n        {\n            label: \"Yes\",\n            value: \"YES\"\n        },\n        {\n            label: \"No\",\n            value: \"NO\"\n        }\n    ];\n    const MultiChoiceDropdown = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        if ((selectedQuestion === null || selectedQuestion === void 0 ? void 0 : selectedQuestion.type) === \"MULTIPLE_CHOICE\" && (selectedQuestion === null || selectedQuestion === void 0 ? void 0 : selectedQuestion.options)) {\n            return selectedQuestion.options.map((option)=>({\n                    label: option.text,\n                    value: option.id\n                }));\n        }\n        return [];\n    }, [\n        selectedQuestion\n    ]);\n    const updatePoint = (points)=>{\n        if (!selectedQuestion || !points) return;\n        const newQuestion = {\n            ...selectedQuestion,\n            points: +points\n        };\n        updateSelectedQuestion(newQuestion);\n    };\n    const updateShortAnswer = (answer)=>{\n        if (!selectedQuestion) return;\n        const newQuestion = {\n            ...selectedQuestion,\n            answer: answer === null || answer === void 0 ? void 0 : answer.toLowerCase()\n        };\n        updateSelectedQuestion(newQuestion);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-3 space-y-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: \"Answer\"\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-xs\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-2 items-center justify-between text-secondary\",\n                    children: [\n                        (selectedQuestion === null || selectedQuestion === void 0 ? void 0 : selectedQuestion.type) === \"MULTIPLE_CHOICE\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 60\n                        }, this),\n                        (selectedQuestion === null || selectedQuestion === void 0 ? void 0 : selectedQuestion.type) === \"YES/NO\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 51\n                        }, this),\n                        (selectedQuestion === null || selectedQuestion === void 0 ? void 0 : selectedQuestion.type) === \"SHORT_ANSWER\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"answer\",\n                            className: \"flex-1 appearance-none border-b  focus:outline-none\",\n                            value: selectedQuestion.answer,\n                            onChange: (e)=>{\n                                updateShortAnswer(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"pi pi-check-circle text-sm\"\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-xs flex items-center justify-between gap-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \" text-dark-200\",\n                        children: \"Points\"\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: selectedQuestion === null || selectedQuestion === void 0 ? void 0 : selectedQuestion.points,\n                        onChange: (e)=>{\n                            updatePoint(e.target.value);\n                        },\n                        type: \"number\",\n                        inputMode: \"numeric\",\n                        className: \"appearance-none focus:outline-none w-12 text-center py-1.5 text-secondary-dark bg-accent border border-secondary rounded-md\"\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Content/Answer.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(Answer, \"4csHKp080Ht+SBzZXLqXRrQL4Q4=\", false, function() {\n    return [\n        _hooks_useQuestion__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Answer;\nvar _c;\n$RefreshReg$(_c, \"Answer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0VkaXRvci9DcmVhdGUvQ29udGVudC9BbnN3ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEM7QUFDUDtBQVl4QixTQUFTRzs7SUFDdEIsTUFBTSxFQUFFQyxnQkFBZ0IsRUFBRUMsc0JBQXNCLEVBQUUsR0FBR0wsOERBQVdBO0lBRWhFLE1BQU1NLGdCQUE0QjtRQUNoQztZQUNFQyxPQUFPO1lBQ1BDLE9BQU87UUFDVDtRQUNBO1lBQ0VELE9BQU87WUFDUEMsT0FBTztRQUNUO0tBQ0Q7SUFFRCxNQUFNQyxzQkFBa0NQLDhDQUFPQSxDQUFDO1FBQzlDLElBQ0VFLENBQUFBLDZCQUFBQSx1Q0FBQUEsaUJBQWtCTSxJQUFJLE1BQUssc0JBQzNCTiw2QkFBQUEsdUNBQUFBLGlCQUFrQk8sT0FBTyxHQUN6QjtZQUNBLE9BQU9QLGlCQUFpQk8sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsU0FBNkI7b0JBQ2hFTixPQUFPTSxPQUFPQyxJQUFJO29CQUNsQk4sT0FBT0ssT0FBT0UsRUFBRTtnQkFDbEI7UUFDRjtRQUNBLE9BQU8sRUFBRTtJQUNYLEdBQUc7UUFBQ1g7S0FBaUI7SUFFckIsTUFBTVksY0FBYyxDQUFDQztRQUNuQixJQUFJLENBQUNiLG9CQUFvQixDQUFDYSxRQUFRO1FBQ2xDLE1BQU1DLGNBQWM7WUFDbEIsR0FBR2QsZ0JBQWdCO1lBQ25CYSxRQUFRLENBQUNBO1FBQ1g7UUFFQVosdUJBQXVCYTtJQUN6QjtJQUVBLE1BQU1DLG9CQUFvQixDQUFDQztRQUN6QixJQUFJLENBQUNoQixrQkFBa0I7UUFDdkIsTUFBTWMsY0FBYztZQUNsQixHQUFHZCxnQkFBZ0I7WUFDbkJnQixNQUFNLEVBQUVBLG1CQUFBQSw2QkFBQUEsT0FBUUMsV0FBVztRQUM3QjtRQUVBaEIsdUJBQXVCYTtJQUN6QjtJQUVBLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFFSiw4REFBQ0Y7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzt3QkFDWm5CLENBQUFBLDZCQUFBQSx1Q0FBQUEsaUJBQWtCTSxJQUFJLE1BQUssbUNBQXFCLDhEQUFDWTs7Ozs7d0JBRWpEbEIsQ0FBQUEsNkJBQUFBLHVDQUFBQSxpQkFBa0JNLElBQUksTUFBSywwQkFBWSw4REFBQ1k7Ozs7O3dCQUV4Q2xCLENBQUFBLDZCQUFBQSx1Q0FBQUEsaUJBQWtCTSxJQUFJLE1BQUssZ0NBQzFCLDhEQUFDZTs0QkFDQ2YsTUFBSzs0QkFDTGdCLE1BQUs7NEJBQ0xILFdBQVU7NEJBQ1ZmLE9BQU9KLGlCQUFpQmdCLE1BQU07NEJBQzlCTyxVQUFVLENBQUNDO2dDQUNUVCxrQkFBa0JTLEVBQUVDLE1BQU0sQ0FBQ3JCLEtBQUs7NEJBQ2xDOzs7Ozs7c0NBSUosOERBQUNzQjs0QkFBRVAsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWpCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNRO3dCQUFLUixXQUFVO2tDQUFpQjs7Ozs7O2tDQUNqQyw4REFBQ0U7d0JBQ0NqQixLQUFLLEVBQUVKLDZCQUFBQSx1Q0FBQUEsaUJBQWtCYSxNQUFNO3dCQUMvQlUsVUFBVSxDQUFDQzs0QkFDVFosWUFBWVksRUFBRUMsTUFBTSxDQUFDckIsS0FBSzt3QkFDNUI7d0JBQ0FFLE1BQUs7d0JBQ0xzQixXQUFVO3dCQUNWVCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0F2RndCcEI7O1FBQytCSCwwREFBV0E7OztLQUQxQ0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRWRpdG9yL0NyZWF0ZS9Db250ZW50L0Fuc3dlci50c3g/YmE4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlUXVlc3Rpb24gZnJvbSBcIkAvaG9va3MvdXNlUXVlc3Rpb25cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25NZW51Q29udGVudCxcbiAgRHJvcGRvd25NZW51R3JvdXAsXG4gIERyb3Bkb3duTWVudUl0ZW0sXG4gIERyb3Bkb3duTWVudVRyaWdnZXIsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IHsgTGlzdFR5cGUgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uT3B0aW9ucyB9IGZyb20gXCJAL3R5cGVzL3F1ZXN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuc3dlcigpIHtcbiAgY29uc3QgeyBzZWxlY3RlZFF1ZXN0aW9uLCB1cGRhdGVTZWxlY3RlZFF1ZXN0aW9uIH0gPSB1c2VRdWVzdGlvbigpO1xuXG4gIGNvbnN0IFllc05vRHJvcGRvd246IExpc3RUeXBlW10gPSBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiWWVzXCIsXG4gICAgICB2YWx1ZTogXCJZRVNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIk5vXCIsXG4gICAgICB2YWx1ZTogXCJOT1wiLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgTXVsdGlDaG9pY2VEcm9wZG93bjogTGlzdFR5cGVbXSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHNlbGVjdGVkUXVlc3Rpb24/LnR5cGUgPT09IFwiTVVMVElQTEVfQ0hPSUNFXCIgJiZcbiAgICAgIHNlbGVjdGVkUXVlc3Rpb24/Lm9wdGlvbnNcbiAgICApIHtcbiAgICAgIHJldHVybiBzZWxlY3RlZFF1ZXN0aW9uLm9wdGlvbnMubWFwKChvcHRpb246IFF1ZXN0aW9uT3B0aW9ucykgPT4gKHtcbiAgICAgICAgbGFiZWw6IG9wdGlvbi50ZXh0LFxuICAgICAgICB2YWx1ZTogb3B0aW9uLmlkLFxuICAgICAgfSkpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH0sIFtzZWxlY3RlZFF1ZXN0aW9uXSk7XG5cbiAgY29uc3QgdXBkYXRlUG9pbnQgPSAocG9pbnRzOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkUXVlc3Rpb24gfHwgIXBvaW50cykgcmV0dXJuO1xuICAgIGNvbnN0IG5ld1F1ZXN0aW9uID0ge1xuICAgICAgLi4uc2VsZWN0ZWRRdWVzdGlvbixcbiAgICAgIHBvaW50czogK3BvaW50cyxcbiAgICB9O1xuXG4gICAgdXBkYXRlU2VsZWN0ZWRRdWVzdGlvbihuZXdRdWVzdGlvbik7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlU2hvcnRBbnN3ZXIgPSAoYW5zd2VyOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkUXVlc3Rpb24pIHJldHVybjtcbiAgICBjb25zdCBuZXdRdWVzdGlvbiA9IHtcbiAgICAgIC4uLnNlbGVjdGVkUXVlc3Rpb24sXG4gICAgICBhbnN3ZXI6IGFuc3dlcj8udG9Mb3dlckNhc2UoKSxcbiAgICB9O1xuXG4gICAgdXBkYXRlU2VsZWN0ZWRRdWVzdGlvbihuZXdRdWVzdGlvbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgc3BhY2UteS0zXCI+XG4gICAgICA8aDU+QW5zd2VyPC9oNT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtc2Vjb25kYXJ5XCI+XG4gICAgICAgICAge3NlbGVjdGVkUXVlc3Rpb24/LnR5cGUgPT09IFwiTVVMVElQTEVfQ0hPSUNFXCIgJiYgPGRpdj48L2Rpdj59XG5cbiAgICAgICAgICB7c2VsZWN0ZWRRdWVzdGlvbj8udHlwZSA9PT0gXCJZRVMvTk9cIiAmJiA8ZGl2PjwvZGl2Pn1cblxuICAgICAgICAgIHtzZWxlY3RlZFF1ZXN0aW9uPy50eXBlID09PSBcIlNIT1JUX0FOU1dFUlwiICYmIChcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJhbnN3ZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgYXBwZWFyYW5jZS1ub25lIGJvcmRlci1iICBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRRdWVzdGlvbi5hbnN3ZXJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVNob3J0QW5zd2VyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBpIHBpLWNoZWNrLWNpcmNsZSB0ZXh0LXNtXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0zXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiB0ZXh0LWRhcmstMjAwXCI+UG9pbnRzPC9zcGFuPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRRdWVzdGlvbj8ucG9pbnRzfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgdXBkYXRlUG9pbnQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgaW5wdXRNb2RlPVwibnVtZXJpY1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSB3LTEyIHRleHQtY2VudGVyIHB5LTEuNSB0ZXh0LXNlY29uZGFyeS1kYXJrIGJnLWFjY2VudCBib3JkZXIgYm9yZGVyLXNlY29uZGFyeSByb3VuZGVkLW1kXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVF1ZXN0aW9uIiwiUmVhY3QiLCJ1c2VNZW1vIiwiQW5zd2VyIiwic2VsZWN0ZWRRdWVzdGlvbiIsInVwZGF0ZVNlbGVjdGVkUXVlc3Rpb24iLCJZZXNOb0Ryb3Bkb3duIiwibGFiZWwiLCJ2YWx1ZSIsIk11bHRpQ2hvaWNlRHJvcGRvd24iLCJ0eXBlIiwib3B0aW9ucyIsIm1hcCIsIm9wdGlvbiIsInRleHQiLCJpZCIsInVwZGF0ZVBvaW50IiwicG9pbnRzIiwibmV3UXVlc3Rpb24iLCJ1cGRhdGVTaG9ydEFuc3dlciIsImFuc3dlciIsInRvTG93ZXJDYXNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDUiLCJpbnB1dCIsIm5hbWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJpIiwic3BhbiIsImlucHV0TW9kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Editor/Create/Content/Answer.tsx\n"));

/***/ })

});