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

/***/ "(app-pages-browser)/./src/components/Editor/Create/Question/OptionBox.tsx":
/*!*************************************************************!*\
  !*** ./src/components/Editor/Create/Question/OptionBox.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ OptionBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constant */ \"(app-pages-browser)/./src/constant/index.ts\");\n/* harmony import */ var _hooks_useQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useQuestion */ \"(app-pages-browser)/./src/hooks/useQuestion.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst optionLength = _constant__WEBPACK_IMPORTED_MODULE_2__.OPTION_IDS.length;\nfunction OptionBox() {\n    var _selectedQuestion_options, _selectedQuestion_options1, _selectedQuestion_options2;\n    _s();\n    const { selectedQuestion, addOptions, removeOption, updateOption } = (0,_hooks_useQuestion__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const inputRefs = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)([]);\n    const [optionAdded, setOptionAdded] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    //focus on the newly added option choice\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        var _selectedQuestion_options;\n        if (optionAdded && (selectedQuestion === null || selectedQuestion === void 0 ? void 0 : (_selectedQuestion_options = selectedQuestion.options) === null || _selectedQuestion_options === void 0 ? void 0 : _selectedQuestion_options.length) && inputRefs.current.length) {\n            const lastInput = inputRefs.current[selectedQuestion.options.length - 1];\n            if (lastInput) {\n                lastInput.focus();\n            }\n            setOptionAdded(false); // Reset the state after focusing\n        }\n    }, [\n        selectedQuestion === null || selectedQuestion === void 0 ? void 0 : (_selectedQuestion_options = selectedQuestion.options) === null || _selectedQuestion_options === void 0 ? void 0 : _selectedQuestion_options.length,\n        optionAdded\n    ]);\n    const handleAddOption = ()=>{\n        var _selectedQuestion_options;\n        if (!selectedQuestion || (selectedQuestion === null || selectedQuestion === void 0 ? void 0 : (_selectedQuestion_options = selectedQuestion.options) === null || _selectedQuestion_options === void 0 ? void 0 : _selectedQuestion_options.length) >= optionLength) return;\n        const option = {\n            id: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.generateUniqueId)(),\n            text: \"\"\n        };\n        addOptions(option);\n        setOptionAdded(true);\n    };\n    const handleUpdateOption = (option, text)=>{\n        if (!option) return;\n        const updatedOption = {\n            ...option,\n            text\n        };\n        updateOption(updatedOption);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            (selectedQuestion === null || selectedQuestion === void 0 ? void 0 : selectedQuestion.type) === \"MULTIPLE_CHOICE\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-2\",\n                children: [\n                    selectedQuestion === null || selectedQuestion === void 0 ? void 0 : (_selectedQuestion_options1 = selectedQuestion.options) === null || _selectedQuestion_options1 === void 0 ? void 0 : _selectedQuestion_options1.map((option, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative group p-1.5 capitalize  rounded-md border border-secondary-dark flex items-center gap-2 w-[250px] text-secondary-dark\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"uppercase w-6 h-6 border border-secondary-dark flex items-center justify-center rounded bg-white \",\n                                    children: _constant__WEBPACK_IMPORTED_MODULE_2__.OPTION_IDS[index]\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/OptionBox.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"option\",\n                                    ref: (el)=>{\n                                        if (el) inputRefs.current[index] = el;\n                                    },\n                                    value: option.text,\n                                    onChange: (e)=>{\n                                        handleUpdateOption(option, e.target.value);\n                                    },\n                                    placeholder: \"choice\",\n                                    className: \"w-full  appearance-none focus:outline-none capitalize\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/OptionBox.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: ()=>{\n                                        removeOption(option.id);\n                                    },\n                                    className: \"hidden group-hover:flex rounded-full h-5 w-5 -right-3 bg-error-dark text-white absolute top-1/2 -translate-y-1/2  items-center justify-center  cursor-pointer text-xs\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"pi pi-times \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/OptionBox.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/OptionBox.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, \"option-\".concat(index, \"-\").concat(option === null || option === void 0 ? void 0 : option.id), true, {\n                            fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/OptionBox.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this)),\n                    (selectedQuestion === null || selectedQuestion === void 0 ? void 0 : (_selectedQuestion_options2 = selectedQuestion.options) === null || _selectedQuestion_options2 === void 0 ? void 0 : _selectedQuestion_options2.length) < optionLength && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        onClick: handleAddOption,\n                        variant: \"text\",\n                        size: \"small\",\n                        color: \"secondary\",\n                        className: \"underline  underline-offset-2 !px-0\",\n                        children: \"Add Option\"\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/OptionBox.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/OptionBox.tsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this),\n            (selectedQuestion === null || selectedQuestion === void 0 ? void 0 : selectedQuestion.type) === \"YES/NO\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-1.5 capitalize  rounded-md border border-secondary-dark flex items-center gap-2 w-[250px] text-secondary-dark\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"uppercase w-6 h-6 border border-secondary-dark flex items-center justify-center rounded bg-white \",\n                                children: \"Y\"\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/OptionBox.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Yes\"\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/OptionBox.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/OptionBox.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-1.5 capitalize  rounded-md border border-secondary-dark flex items-center gap-2 w-[250px] text-secondary-dark\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"uppercase w-6 h-6 border border-secondary-dark flex items-center justify-center rounded bg-white \",\n                                children: \"N\"\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/OptionBox.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"No\"\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/OptionBox.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/OptionBox.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/OptionBox.tsx\",\n                lineNumber: 103,\n                columnNumber: 9\n            }, this),\n            (selectedQuestion === null || selectedQuestion === void 0 ? void 0 : selectedQuestion.type) === \"SHORT_ANSWER\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Type your answer here\",\n                    className: \"pointer-events-none appearance-none focus:outline-none text-xl italic border-b focus:border-secondary w-full py-2 \"\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/OptionBox.tsx\",\n                    lineNumber: 121,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/code/kwiz/kwiz_client/src/components/Editor/Create/Question/OptionBox.tsx\",\n                lineNumber: 120,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(OptionBox, \"JuEEVw3OsbUWmADV6Os/g6ufY38=\", false, function() {\n    return [\n        _hooks_useQuestion__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = OptionBox;\nvar _c;\n$RefreshReg$(_c, \"OptionBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0VkaXRvci9DcmVhdGUvUXVlc3Rpb24vT3B0aW9uQm94LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ1I7QUFDTTtBQUNDO0FBRVk7QUFFM0QsTUFBTVEsZUFBZVAsaURBQVVBLENBQUNRLE1BQU07QUFFdkIsU0FBU0M7UUFvQmxCQywyQkF5QktBLDRCQWlDQUE7O0lBN0VULE1BQU0sRUFBRUEsZ0JBQWdCLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUFFQyxZQUFZLEVBQUUsR0FDaEVaLDhEQUFXQTtJQUViLE1BQU1hLFlBQVlULDZDQUFNQSxDQUFxQixFQUFFO0lBQy9DLE1BQU0sQ0FBQ1UsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBQztJQUUvQyx3Q0FBd0M7SUFDeENGLGdEQUFTQSxDQUFDO1lBR05NO1FBRkYsSUFDRUssZ0JBQ0FMLDZCQUFBQSx3Q0FBQUEsNEJBQUFBLGlCQUFrQk8sT0FBTyxjQUF6QlAsZ0RBQUFBLDBCQUEyQkYsTUFBTSxLQUNqQ00sVUFBVUksT0FBTyxDQUFDVixNQUFNLEVBQ3hCO1lBQ0EsTUFBTVcsWUFBWUwsVUFBVUksT0FBTyxDQUFDUixpQkFBaUJPLE9BQU8sQ0FBQ1QsTUFBTSxHQUFHLEVBQUU7WUFDeEUsSUFBSVcsV0FBVztnQkFDYkEsVUFBVUMsS0FBSztZQUNqQjtZQUNBSixlQUFlLFFBQVEsaUNBQWlDO1FBQzFEO0lBQ0YsR0FBRztRQUFDTiw2QkFBQUEsd0NBQUFBLDRCQUFBQSxpQkFBa0JPLE9BQU8sY0FBekJQLGdEQUFBQSwwQkFBMkJGLE1BQU07UUFBRU87S0FBWTtJQUVuRCxNQUFNTSxrQkFBa0I7WUFDR1g7UUFBekIsSUFBSSxDQUFDQSxvQkFBb0JBLENBQUFBLDZCQUFBQSx3Q0FBQUEsNEJBQUFBLGlCQUFrQk8sT0FBTyxjQUF6QlAsZ0RBQUFBLDBCQUEyQkYsTUFBTSxLQUFJRCxjQUM1RDtRQUVGLE1BQU1lLFNBQVM7WUFDYkMsSUFBSXJCLDREQUFnQkE7WUFDcEJzQixNQUFNO1FBQ1I7UUFFQWIsV0FBV1c7UUFDWE4sZUFBZTtJQUNqQjtJQUVBLE1BQU1TLHFCQUFxQixDQUFDSCxRQUF5QkU7UUFDbkQsSUFBSSxDQUFDRixRQUFRO1FBQ2IsTUFBTUksZ0JBQWdCO1lBQUUsR0FBR0osTUFBTTtZQUFFRTtRQUFLO1FBQ3hDWCxhQUFhYTtJQUNmO0lBRUEscUJBQ0U7O1lBQ0doQixDQUFBQSw2QkFBQUEsdUNBQUFBLGlCQUFrQmlCLElBQUksTUFBSyxtQ0FDMUIsOERBQUNDO2dCQUFJQyxXQUFVOztvQkFDWm5CLDZCQUFBQSx3Q0FBQUEsNkJBQUFBLGlCQUFrQk8sT0FBTyxjQUF6QlAsaURBQUFBLDJCQUEyQm9CLEdBQUcsQ0FBQyxDQUFDUixRQUFRUyxzQkFDdkMsOERBQUNIOzRCQUVDQyxXQUFVOzs4Q0FFViw4REFBQ0c7b0NBQUtILFdBQVU7OENBQ2I3QixpREFBVSxDQUFDK0IsTUFBTTs7Ozs7OzhDQUVwQiw4REFBQ0U7b0NBQ0NOLE1BQUs7b0NBQ0xPLE1BQUs7b0NBQ0xDLEtBQUssQ0FBQ0M7d0NBQ0osSUFBSUEsSUFBSXRCLFVBQVVJLE9BQU8sQ0FBQ2EsTUFBTSxHQUFHSztvQ0FDckM7b0NBQ0FDLE9BQU9mLE9BQU9FLElBQUk7b0NBQ2xCYyxVQUFVLENBQUNDO3dDQUNUZCxtQkFBbUJILFFBQVFpQixFQUFFQyxNQUFNLENBQUNILEtBQUs7b0NBQzNDO29DQUNBSSxhQUFZO29DQUNaWixXQUFVOzs7Ozs7OENBR1osOERBQUNHO29DQUNDVSxTQUFTO3dDQUNQOUIsYUFBYVUsT0FBT0MsRUFBRTtvQ0FDeEI7b0NBQ0FNLFdBQVU7OENBRVYsNEVBQUNjO3dDQUFFZCxXQUFVOzs7Ozs7Ozs7Ozs7MkJBMUJWLGlCQUFVRSxPQUFNLEtBQWMsT0FBWFQsbUJBQUFBLDZCQUFBQSxPQUFRQyxFQUFFOzs7OztvQkErQnJDYixDQUFBQSw2QkFBQUEsd0NBQUFBLDZCQUFBQSxpQkFBa0JPLE9BQU8sY0FBekJQLGlEQUFBQSwyQkFBMkJGLE1BQU0sSUFBR0QsOEJBQ25DLDhEQUFDUix5REFBTUE7d0JBQ0wyQyxTQUFTckI7d0JBQ1R1QixTQUFRO3dCQUNSQyxNQUFLO3dCQUNMQyxPQUFNO3dCQUNOakIsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7O1lBT05uQixDQUFBQSw2QkFBQUEsdUNBQUFBLGlCQUFrQmlCLElBQUksTUFBSywwQkFDMUIsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRztnQ0FBS0gsV0FBVTswQ0FBb0c7Ozs7OzswQ0FHcEgsOERBQUNHOzBDQUFLOzs7Ozs7Ozs7Ozs7a0NBRVIsOERBQUNKO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0c7Z0NBQUtILFdBQVU7MENBQW9HOzs7Ozs7MENBR3BILDhEQUFDRzswQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS1h0QixDQUFBQSw2QkFBQUEsdUNBQUFBLGlCQUFrQmlCLElBQUksTUFBSyxnQ0FDMUIsOERBQUNDOzBCQUNDLDRFQUFDSztvQkFDQ04sTUFBSztvQkFDTGMsYUFBWTtvQkFDWlosV0FBVTs7Ozs7Ozs7Ozs7OztBQU10QjtHQXhId0JwQjs7UUFFcEJSLDBEQUFXQTs7O0tBRlNRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0VkaXRvci9DcmVhdGUvUXVlc3Rpb24vT3B0aW9uQm94LnRzeD9lMzIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBPUFRJT05fSURTIH0gZnJvbSBcIkAvY29uc3RhbnRcIjtcbmltcG9ydCB1c2VRdWVzdGlvbiBmcm9tIFwiQC9ob29rcy91c2VRdWVzdGlvblwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVVbmlxdWVJZCB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgUXVlc3Rpb25PcHRpb25zIH0gZnJvbSBcIkAvdHlwZXMvcXVlc3Rpb25cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3Qgb3B0aW9uTGVuZ3RoID0gT1BUSU9OX0lEUy5sZW5ndGg7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9wdGlvbkJveCgpIHtcbiAgY29uc3QgeyBzZWxlY3RlZFF1ZXN0aW9uLCBhZGRPcHRpb25zLCByZW1vdmVPcHRpb24sIHVwZGF0ZU9wdGlvbiB9ID1cbiAgICB1c2VRdWVzdGlvbigpO1xuXG4gIGNvbnN0IGlucHV0UmVmcyA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50W10+KFtdKTtcbiAgY29uc3QgW29wdGlvbkFkZGVkLCBzZXRPcHRpb25BZGRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy9mb2N1cyBvbiB0aGUgbmV3bHkgYWRkZWQgb3B0aW9uIGNob2ljZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIG9wdGlvbkFkZGVkICYmXG4gICAgICBzZWxlY3RlZFF1ZXN0aW9uPy5vcHRpb25zPy5sZW5ndGggJiZcbiAgICAgIGlucHV0UmVmcy5jdXJyZW50Lmxlbmd0aFxuICAgICkge1xuICAgICAgY29uc3QgbGFzdElucHV0ID0gaW5wdXRSZWZzLmN1cnJlbnRbc2VsZWN0ZWRRdWVzdGlvbi5vcHRpb25zLmxlbmd0aCAtIDFdO1xuICAgICAgaWYgKGxhc3RJbnB1dCkge1xuICAgICAgICBsYXN0SW5wdXQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICAgIHNldE9wdGlvbkFkZGVkKGZhbHNlKTsgLy8gUmVzZXQgdGhlIHN0YXRlIGFmdGVyIGZvY3VzaW5nXG4gICAgfVxuICB9LCBbc2VsZWN0ZWRRdWVzdGlvbj8ub3B0aW9ucz8ubGVuZ3RoLCBvcHRpb25BZGRlZF0pO1xuXG4gIGNvbnN0IGhhbmRsZUFkZE9wdGlvbiA9ICgpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkUXVlc3Rpb24gfHwgc2VsZWN0ZWRRdWVzdGlvbj8ub3B0aW9ucz8ubGVuZ3RoID49IG9wdGlvbkxlbmd0aClcbiAgICAgIHJldHVybjtcblxuICAgIGNvbnN0IG9wdGlvbiA9IHtcbiAgICAgIGlkOiBnZW5lcmF0ZVVuaXF1ZUlkKCksXG4gICAgICB0ZXh0OiBcIlwiLFxuICAgIH07XG5cbiAgICBhZGRPcHRpb25zKG9wdGlvbik7XG4gICAgc2V0T3B0aW9uQWRkZWQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVXBkYXRlT3B0aW9uID0gKG9wdGlvbjogUXVlc3Rpb25PcHRpb25zLCB0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIW9wdGlvbikgcmV0dXJuO1xuICAgIGNvbnN0IHVwZGF0ZWRPcHRpb24gPSB7IC4uLm9wdGlvbiwgdGV4dCB9O1xuICAgIHVwZGF0ZU9wdGlvbih1cGRhdGVkT3B0aW9uKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2VsZWN0ZWRRdWVzdGlvbj8udHlwZSA9PT0gXCJNVUxUSVBMRV9DSE9JQ0VcIiAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMlwiPlxuICAgICAgICAgIHtzZWxlY3RlZFF1ZXN0aW9uPy5vcHRpb25zPy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtgb3B0aW9uLSR7aW5kZXh9LSR7b3B0aW9uPy5pZH1gfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBncm91cCBwLTEuNSBjYXBpdGFsaXplICByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItc2Vjb25kYXJ5LWRhcmsgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdy1bMjUwcHhdIHRleHQtc2Vjb25kYXJ5LWRhcmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1cHBlcmNhc2Ugdy02IGgtNiBib3JkZXIgYm9yZGVyLXNlY29uZGFyeS1kYXJrIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQgYmctd2hpdGUgXCI+XG4gICAgICAgICAgICAgICAge09QVElPTl9JRFNbaW5kZXhdfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3B0aW9uXCJcbiAgICAgICAgICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGVsKSBpbnB1dFJlZnMuY3VycmVudFtpbmRleF0gPSBlbCE7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9uLnRleHR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVVcGRhdGVPcHRpb24ob3B0aW9uLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImNob2ljZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsICBhcHBlYXJhbmNlLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIGNhcGl0YWxpemVcIlxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmVtb3ZlT3B0aW9uKG9wdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gZ3JvdXAtaG92ZXI6ZmxleCByb3VuZGVkLWZ1bGwgaC01IHctNSAtcmlnaHQtMyBiZy1lcnJvci1kYXJrIHRleHQtd2hpdGUgYWJzb2x1dGUgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yICBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgIGN1cnNvci1wb2ludGVyIHRleHQteHNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGkgcGktdGltZXMgXCIgLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgICB7c2VsZWN0ZWRRdWVzdGlvbj8ub3B0aW9ucz8ubGVuZ3RoIDwgb3B0aW9uTGVuZ3RoICYmIChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkT3B0aW9ufVxuICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidW5kZXJsaW5lICB1bmRlcmxpbmUtb2Zmc2V0LTIgIXB4LTBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBZGQgT3B0aW9uXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHtzZWxlY3RlZFF1ZXN0aW9uPy50eXBlID09PSBcIllFUy9OT1wiICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEuNSBjYXBpdGFsaXplICByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItc2Vjb25kYXJ5LWRhcmsgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdy1bMjUwcHhdIHRleHQtc2Vjb25kYXJ5LWRhcmtcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB3LTYgaC02IGJvcmRlciBib3JkZXItc2Vjb25kYXJ5LWRhcmsgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZCBiZy13aGl0ZSBcIj5cbiAgICAgICAgICAgICAgWVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+WWVzPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xLjUgY2FwaXRhbGl6ZSAgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXNlY29uZGFyeS1kYXJrIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHctWzI1MHB4XSB0ZXh0LXNlY29uZGFyeS1kYXJrXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1cHBlcmNhc2Ugdy02IGgtNiBib3JkZXIgYm9yZGVyLXNlY29uZGFyeS1kYXJrIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQgYmctd2hpdGUgXCI+XG4gICAgICAgICAgICAgIE5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPk5vPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHtzZWxlY3RlZFF1ZXN0aW9uPy50eXBlID09PSBcIlNIT1JUX0FOU1dFUlwiICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIGFuc3dlciBoZXJlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYXBwZWFyYW5jZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LXhsIGl0YWxpYyBib3JkZXItYiBmb2N1czpib3JkZXItc2Vjb25kYXJ5IHctZnVsbCBweS0yIFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIk9QVElPTl9JRFMiLCJ1c2VRdWVzdGlvbiIsImdlbmVyYXRlVW5pcXVlSWQiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwib3B0aW9uTGVuZ3RoIiwibGVuZ3RoIiwiT3B0aW9uQm94Iiwic2VsZWN0ZWRRdWVzdGlvbiIsImFkZE9wdGlvbnMiLCJyZW1vdmVPcHRpb24iLCJ1cGRhdGVPcHRpb24iLCJpbnB1dFJlZnMiLCJvcHRpb25BZGRlZCIsInNldE9wdGlvbkFkZGVkIiwib3B0aW9ucyIsImN1cnJlbnQiLCJsYXN0SW5wdXQiLCJmb2N1cyIsImhhbmRsZUFkZE9wdGlvbiIsIm9wdGlvbiIsImlkIiwidGV4dCIsImhhbmRsZVVwZGF0ZU9wdGlvbiIsInVwZGF0ZWRPcHRpb24iLCJ0eXBlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaW5kZXgiLCJzcGFuIiwiaW5wdXQiLCJuYW1lIiwicmVmIiwiZWwiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwib25DbGljayIsImkiLCJ2YXJpYW50Iiwic2l6ZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Editor/Create/Question/OptionBox.tsx\n"));

/***/ })

});