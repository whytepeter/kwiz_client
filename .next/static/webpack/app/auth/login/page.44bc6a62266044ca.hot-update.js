"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/login/page",{

/***/ "(app-pages-browser)/./src/store/actions/workspace.ts":
/*!****************************************!*\
  !*** ./src/store/actions/workspace.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCollaborators: function() { return /* binding */ addCollaborators; },\n/* harmony export */   createWorkspace: function() { return /* binding */ createWorkspace; },\n/* harmony export */   deleteWorkspace: function() { return /* binding */ deleteWorkspace; },\n/* harmony export */   editWorkspace: function() { return /* binding */ editWorkspace; },\n/* harmony export */   getWorkspace: function() { return /* binding */ getWorkspace; },\n/* harmony export */   leaveWorkspace: function() { return /* binding */ leaveWorkspace; }\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ \"(app-pages-browser)/./src/store/store.ts\");\n/* harmony import */ var _lib_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/http */ \"(app-pages-browser)/./src/lib/http.ts\");\n\n\nconst getWorkspace = async ()=>{\n    try {\n        const res = await (0,_lib_http__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"MyWorkspace\", \"get\");\n        if (res === null || res === void 0 ? void 0 : res.length) {\n            let selected = _store__WEBPACK_IMPORTED_MODULE_0__.useDataStore.getState().selectedWorkspace;\n            if (selected) {\n                selected = res.find((el)=>el._id == (selected === null || selected === void 0 ? void 0 : selected._id));\n            }\n            console.log(\"SELECTED\", selected);\n            _store__WEBPACK_IMPORTED_MODULE_0__.useDataStore.setState({\n                selectedWorkspace: selected || res[0] || null,\n                workspaces: res || []\n            });\n        }\n    } catch (error) {\n        throw error;\n    }\n};\nconst createWorkspace = async (title)=>{\n    var _useDataStore_getState_user;\n    const createdBy = (_useDataStore_getState_user = _store__WEBPACK_IMPORTED_MODULE_0__.useDataStore.getState().user) === null || _useDataStore_getState_user === void 0 ? void 0 : _useDataStore_getState_user._id;\n    const payload = {\n        title,\n        createdBy,\n        collaborators: []\n    };\n    try {\n        const res = await (0,_lib_http__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Workspace\", \"post\", payload);\n        const newWorkspace = res === null || res === void 0 ? void 0 : res.data;\n        if (newWorkspace) {\n            _store__WEBPACK_IMPORTED_MODULE_0__.useDataStore.setState({\n                selectedWorkspace: newWorkspace\n            });\n        }\n        console.log(res);\n        await getWorkspace();\n    } catch (error) {\n        throw error;\n    }\n};\nconst editWorkspace = async (payload)=>{\n    try {\n        const res = await (0,_lib_http__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Workspace\", \"patch\", payload);\n        console.log(res);\n        await getWorkspace();\n    } catch (error) {\n        throw error;\n    }\n};\nconst deleteWorkspace = async (workspaceId)=>{\n    const workspaces = _store__WEBPACK_IMPORTED_MODULE_0__.useDataStore.getState().workspaces;\n    if (!workspaceId) return;\n    try {\n        const res = await (0,_lib_http__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Workspace\", \"delete\", null, {\n            suffix: workspaceId\n        });\n        console.log(res);\n        await getWorkspace();\n    } catch (error) {\n        throw error;\n    }\n};\nconst leaveWorkspace = async (workspaceId, userId)=>{\n    if (!workspaceId || !userId) return;\n    try {\n        const payload = {\n            workspaceId,\n            userId\n        };\n        const res = await (0,_lib_http__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"LeaveWorkspace\", \"post\", payload);\n        console.log(res);\n        await getWorkspace();\n    } catch (error) {\n        throw error;\n    }\n};\nconst addCollaborators = async ()=>{};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9hY3Rpb25zL3dvcmtzcGFjZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN3QztBQUNWO0FBRXZCLE1BQU1FLGVBQWU7SUFDMUIsSUFBSTtRQUNGLE1BQU1DLE1BQU0sTUFBTUYscURBQUlBLENBQUMsZUFBZTtRQUV0QyxJQUFJRSxnQkFBQUEsMEJBQUFBLElBQUtDLE1BQU0sRUFBRTtZQUNmLElBQUlDLFdBQVdMLGdEQUFZQSxDQUFDTSxRQUFRLEdBQUdDLGlCQUFpQjtZQUN4RCxJQUFJRixVQUFVO2dCQUNaQSxXQUFXRixJQUFJSyxJQUFJLENBQUMsQ0FBQ0MsS0FBa0JBLEdBQUdDLEdBQUcsS0FBSUwscUJBQUFBLCtCQUFBQSxTQUFVSyxHQUFHO1lBQ2hFO1lBRUFDLFFBQVFDLEdBQUcsQ0FBQyxZQUFZUDtZQUV4QkwsZ0RBQVlBLENBQUNhLFFBQVEsQ0FBQztnQkFDcEJOLG1CQUFtQkYsWUFBWUYsR0FBRyxDQUFDLEVBQUUsSUFBSTtnQkFDekNXLFlBQVlYLE9BQU8sRUFBRTtZQUN2QjtRQUNGO0lBQ0YsRUFBRSxPQUFPWSxPQUFPO1FBQ2QsTUFBTUE7SUFDUjtBQUNGLEVBQUU7QUFFSyxNQUFNQyxrQkFBa0IsT0FBT0M7UUFDbEJqQjtJQUFsQixNQUFNa0IsYUFBWWxCLDhCQUFBQSxnREFBWUEsQ0FBQ00sUUFBUSxHQUFHYSxJQUFJLGNBQTVCbkIsa0RBQUFBLDRCQUE4QlUsR0FBRztJQUNuRCxNQUFNVSxVQUEyQjtRQUMvQkg7UUFDQUM7UUFDQUcsZUFBZSxFQUFFO0lBQ25CO0lBRUEsSUFBSTtRQUNGLE1BQU1sQixNQUFNLE1BQU1GLHFEQUFJQSxDQUFDLGFBQWEsUUFBUW1CO1FBQzVDLE1BQU1FLGVBQWVuQixnQkFBQUEsMEJBQUFBLElBQUtvQixJQUFJO1FBRTlCLElBQUlELGNBQWM7WUFDaEJ0QixnREFBWUEsQ0FBQ2EsUUFBUSxDQUFDO2dCQUNwQk4sbUJBQW1CZTtZQUNyQjtRQUNGO1FBRUFYLFFBQVFDLEdBQUcsQ0FBQ1Q7UUFDWixNQUFNRDtJQUNSLEVBQUUsT0FBT2EsT0FBTztRQUNkLE1BQU1BO0lBQ1I7QUFDRixFQUFFO0FBRUssTUFBTVMsZ0JBQWdCLE9BQU9KO0lBQ2xDLElBQUk7UUFDRixNQUFNakIsTUFBTSxNQUFNRixxREFBSUEsQ0FBQyxhQUFhLFNBQVNtQjtRQUM3Q1QsUUFBUUMsR0FBRyxDQUFDVDtRQUNaLE1BQU1EO0lBQ1IsRUFBRSxPQUFPYSxPQUFPO1FBQ2QsTUFBTUE7SUFDUjtBQUNGLEVBQUU7QUFFSyxNQUFNVSxrQkFBa0IsT0FBT0M7SUFDcEMsTUFBTVosYUFBYWQsZ0RBQVlBLENBQUNNLFFBQVEsR0FBR1EsVUFBVTtJQUNyRCxJQUFJLENBQUNZLGFBQWE7SUFFbEIsSUFBSTtRQUNGLE1BQU12QixNQUFNLE1BQU1GLHFEQUFJQSxDQUFDLGFBQWEsVUFBVSxNQUFNO1lBQ2xEMEIsUUFBUUQ7UUFDVjtRQUNBZixRQUFRQyxHQUFHLENBQUNUO1FBQ1osTUFBTUQ7SUFDUixFQUFFLE9BQU9hLE9BQU87UUFDZCxNQUFNQTtJQUNSO0FBQ0YsRUFBRTtBQUVLLE1BQU1hLGlCQUFpQixPQUFPRixhQUFxQkc7SUFDeEQsSUFBSSxDQUFDSCxlQUFlLENBQUNHLFFBQVE7SUFFN0IsSUFBSTtRQUNGLE1BQU1ULFVBQVU7WUFDZE07WUFDQUc7UUFDRjtRQUNBLE1BQU0xQixNQUFNLE1BQU1GLHFEQUFJQSxDQUFDLGtCQUFrQixRQUFRbUI7UUFDakRULFFBQVFDLEdBQUcsQ0FBQ1Q7UUFDWixNQUFNRDtJQUNSLEVBQUUsT0FBT2EsT0FBTztRQUNkLE1BQU1BO0lBQ1I7QUFDRixFQUFFO0FBRUssTUFBTWUsbUJBQW1CLFdBQWEsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvYWN0aW9ucy93b3Jrc3BhY2UudHM/YmIxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDcmVhdGVXb3Jrc3BhY2UsIFVwZGF0ZVdvcmtzcGFjZSwgV29ya3NwYWNlIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCB7IHVzZURhdGFTdG9yZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xuaW1wb3J0IGh0dHAgZnJvbSBcIkAvbGliL2h0dHBcIjtcblxuZXhwb3J0IGNvbnN0IGdldFdvcmtzcGFjZSA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBodHRwKFwiTXlXb3Jrc3BhY2VcIiwgXCJnZXRcIik7XG5cbiAgICBpZiAocmVzPy5sZW5ndGgpIHtcbiAgICAgIGxldCBzZWxlY3RlZCA9IHVzZURhdGFTdG9yZS5nZXRTdGF0ZSgpLnNlbGVjdGVkV29ya3NwYWNlO1xuICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgIHNlbGVjdGVkID0gcmVzLmZpbmQoKGVsOiBXb3Jrc3BhY2UpID0+IGVsLl9pZCA9PSBzZWxlY3RlZD8uX2lkKTtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coXCJTRUxFQ1RFRFwiLCBzZWxlY3RlZCk7XG5cbiAgICAgIHVzZURhdGFTdG9yZS5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkV29ya3NwYWNlOiBzZWxlY3RlZCB8fCByZXNbMF0gfHwgbnVsbCxcbiAgICAgICAgd29ya3NwYWNlczogcmVzIHx8IFtdLFxuICAgICAgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlV29ya3NwYWNlID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgY3JlYXRlZEJ5ID0gdXNlRGF0YVN0b3JlLmdldFN0YXRlKCkudXNlcj8uX2lkITtcbiAgY29uc3QgcGF5bG9hZDogQ3JlYXRlV29ya3NwYWNlID0ge1xuICAgIHRpdGxlLFxuICAgIGNyZWF0ZWRCeSxcbiAgICBjb2xsYWJvcmF0b3JzOiBbXSxcbiAgfTtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGh0dHAoXCJXb3Jrc3BhY2VcIiwgXCJwb3N0XCIsIHBheWxvYWQpO1xuICAgIGNvbnN0IG5ld1dvcmtzcGFjZSA9IHJlcz8uZGF0YTtcblxuICAgIGlmIChuZXdXb3Jrc3BhY2UpIHtcbiAgICAgIHVzZURhdGFTdG9yZS5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkV29ya3NwYWNlOiBuZXdXb3Jrc3BhY2UsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIGF3YWl0IGdldFdvcmtzcGFjZSgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZWRpdFdvcmtzcGFjZSA9IGFzeW5jIChwYXlsb2FkOiBVcGRhdGVXb3Jrc3BhY2UpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBodHRwKFwiV29ya3NwYWNlXCIsIFwicGF0Y2hcIiwgcGF5bG9hZCk7XG4gICAgY29uc29sZS5sb2cocmVzKTtcbiAgICBhd2FpdCBnZXRXb3Jrc3BhY2UoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVdvcmtzcGFjZSA9IGFzeW5jICh3b3Jrc3BhY2VJZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHdvcmtzcGFjZXMgPSB1c2VEYXRhU3RvcmUuZ2V0U3RhdGUoKS53b3Jrc3BhY2VzO1xuICBpZiAoIXdvcmtzcGFjZUlkKSByZXR1cm47XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBodHRwKFwiV29ya3NwYWNlXCIsIFwiZGVsZXRlXCIsIG51bGwsIHtcbiAgICAgIHN1ZmZpeDogd29ya3NwYWNlSWQsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVzKTtcbiAgICBhd2FpdCBnZXRXb3Jrc3BhY2UoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGxlYXZlV29ya3NwYWNlID0gYXN5bmMgKHdvcmtzcGFjZUlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKSA9PiB7XG4gIGlmICghd29ya3NwYWNlSWQgfHwgIXVzZXJJZCkgcmV0dXJuO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIHdvcmtzcGFjZUlkLFxuICAgICAgdXNlcklkLFxuICAgIH07XG4gICAgY29uc3QgcmVzID0gYXdhaXQgaHR0cChcIkxlYXZlV29ya3NwYWNlXCIsIFwicG9zdFwiLCBwYXlsb2FkKTtcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIGF3YWl0IGdldFdvcmtzcGFjZSgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgYWRkQ29sbGFib3JhdG9ycyA9IGFzeW5jICgpID0+IHt9O1xuIl0sIm5hbWVzIjpbInVzZURhdGFTdG9yZSIsImh0dHAiLCJnZXRXb3Jrc3BhY2UiLCJyZXMiLCJsZW5ndGgiLCJzZWxlY3RlZCIsImdldFN0YXRlIiwic2VsZWN0ZWRXb3Jrc3BhY2UiLCJmaW5kIiwiZWwiLCJfaWQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJ3b3Jrc3BhY2VzIiwiZXJyb3IiLCJjcmVhdGVXb3Jrc3BhY2UiLCJ0aXRsZSIsImNyZWF0ZWRCeSIsInVzZXIiLCJwYXlsb2FkIiwiY29sbGFib3JhdG9ycyIsIm5ld1dvcmtzcGFjZSIsImRhdGEiLCJlZGl0V29ya3NwYWNlIiwiZGVsZXRlV29ya3NwYWNlIiwid29ya3NwYWNlSWQiLCJzdWZmaXgiLCJsZWF2ZVdvcmtzcGFjZSIsInVzZXJJZCIsImFkZENvbGxhYm9yYXRvcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/actions/workspace.ts\n"));

/***/ })

});