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

/***/ "(app-pages-browser)/./src/store/actions/workspace.ts":
/*!****************************************!*\
  !*** ./src/store/actions/workspace.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCollaborators: function() { return /* binding */ addCollaborators; },\n/* harmony export */   createWorkspace: function() { return /* binding */ createWorkspace; },\n/* harmony export */   deleteWorkspace: function() { return /* binding */ deleteWorkspace; },\n/* harmony export */   editWorkspace: function() { return /* binding */ editWorkspace; },\n/* harmony export */   getWorkspace: function() { return /* binding */ getWorkspace; },\n/* harmony export */   leaveWorkspace: function() { return /* binding */ leaveWorkspace; }\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ \"(app-pages-browser)/./src/store/store.ts\");\n/* harmony import */ var _lib_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/http */ \"(app-pages-browser)/./src/lib/http.ts\");\n\n\nconst getWorkspace = async ()=>{\n    try {\n        const res = await (0,_lib_http__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"MyWorkspace\", \"get\");\n        if (res === null || res === void 0 ? void 0 : res.length) {\n            let selected = _store__WEBPACK_IMPORTED_MODULE_0__.useDataStore.getState().selectedWorkspace;\n            if (selected) {\n                selected = res.find((el)=>el._id == (selected === null || selected === void 0 ? void 0 : selected._id));\n            }\n            console.log(\"SELECTED\", selected);\n            _store__WEBPACK_IMPORTED_MODULE_0__.useDataStore.setState({\n                selectedWorkspace: selected || res[0] || null,\n                workspaces: res || []\n            });\n        }\n    } catch (error) {\n        throw error;\n    }\n};\nconst createWorkspace = async (title)=>{\n    var _useDataStore_getState_user;\n    const createdBy = (_useDataStore_getState_user = _store__WEBPACK_IMPORTED_MODULE_0__.useDataStore.getState().user) === null || _useDataStore_getState_user === void 0 ? void 0 : _useDataStore_getState_user._id;\n    const payload = {\n        title,\n        createdBy,\n        collaborators: []\n    };\n    try {\n        const res = await (0,_lib_http__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Workspace\", \"post\", payload);\n        const newWorkspace = res === null || res === void 0 ? void 0 : res.data;\n        if (newWorkspace) {\n            _store__WEBPACK_IMPORTED_MODULE_0__.useDataStore.setState({\n                selectedWorkspace: newWorkspace\n            });\n        }\n        console.log(res);\n        await getWorkspace();\n    } catch (error) {\n        throw error;\n    }\n};\nconst editWorkspace = async (payload)=>{\n    try {\n        const res = await (0,_lib_http__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Workspace\", \"patch\", payload);\n        console.log(res);\n        await getWorkspace();\n    } catch (error) {\n        throw error;\n    }\n};\nconst deleteWorkspace = async (workspaceId, userId)=>{\n    if (!workspaceId || !userId) return;\n    try {\n        const payload = {\n            workspaceId,\n            userId\n        };\n        const res = await (0,_lib_http__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Workspace\", \"delete\", payload);\n        console.log(res);\n        await getWorkspace();\n    } catch (error) {\n        throw error;\n    }\n};\nconst leaveWorkspace = async (workspaceId, userId)=>{\n    if (!workspaceId || !userId) return;\n    try {\n        const payload = {\n            workspaceId,\n            userId\n        };\n        const res = await (0,_lib_http__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"LeaveWorkspace\", \"post\", payload);\n        console.log(res);\n        await getWorkspace();\n    } catch (error) {\n        throw error;\n    }\n};\nconst addCollaborators = async ()=>{};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9hY3Rpb25zL3dvcmtzcGFjZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQU13QztBQUNWO0FBRXZCLE1BQU1FLGVBQWU7SUFDMUIsSUFBSTtRQUNGLE1BQU1DLE1BQU0sTUFBTUYscURBQUlBLENBQUMsZUFBZTtRQUV0QyxJQUFJRSxnQkFBQUEsMEJBQUFBLElBQUtDLE1BQU0sRUFBRTtZQUNmLElBQUlDLFdBQVdMLGdEQUFZQSxDQUFDTSxRQUFRLEdBQUdDLGlCQUFpQjtZQUN4RCxJQUFJRixVQUFVO2dCQUNaQSxXQUFXRixJQUFJSyxJQUFJLENBQUMsQ0FBQ0MsS0FBa0JBLEdBQUdDLEdBQUcsS0FBSUwscUJBQUFBLCtCQUFBQSxTQUFVSyxHQUFHO1lBQ2hFO1lBRUFDLFFBQVFDLEdBQUcsQ0FBQyxZQUFZUDtZQUV4QkwsZ0RBQVlBLENBQUNhLFFBQVEsQ0FBQztnQkFDcEJOLG1CQUFtQkYsWUFBWUYsR0FBRyxDQUFDLEVBQUUsSUFBSTtnQkFDekNXLFlBQVlYLE9BQU8sRUFBRTtZQUN2QjtRQUNGO0lBQ0YsRUFBRSxPQUFPWSxPQUFPO1FBQ2QsTUFBTUE7SUFDUjtBQUNGLEVBQUU7QUFFSyxNQUFNQyxrQkFBa0IsT0FBT0M7UUFDbEJqQjtJQUFsQixNQUFNa0IsYUFBWWxCLDhCQUFBQSxnREFBWUEsQ0FBQ00sUUFBUSxHQUFHYSxJQUFJLGNBQTVCbkIsa0RBQUFBLDRCQUE4QlUsR0FBRztJQUNuRCxNQUFNVSxVQUEyQjtRQUMvQkg7UUFDQUM7UUFDQUcsZUFBZSxFQUFFO0lBQ25CO0lBRUEsSUFBSTtRQUNGLE1BQU1sQixNQUFNLE1BQU1GLHFEQUFJQSxDQUFDLGFBQWEsUUFBUW1CO1FBQzVDLE1BQU1FLGVBQWVuQixnQkFBQUEsMEJBQUFBLElBQUtvQixJQUFJO1FBRTlCLElBQUlELGNBQWM7WUFDaEJ0QixnREFBWUEsQ0FBQ2EsUUFBUSxDQUFDO2dCQUNwQk4sbUJBQW1CZTtZQUNyQjtRQUNGO1FBRUFYLFFBQVFDLEdBQUcsQ0FBQ1Q7UUFDWixNQUFNRDtJQUNSLEVBQUUsT0FBT2EsT0FBTztRQUNkLE1BQU1BO0lBQ1I7QUFDRixFQUFFO0FBRUssTUFBTVMsZ0JBQWdCLE9BQU9KO0lBQ2xDLElBQUk7UUFDRixNQUFNakIsTUFBTSxNQUFNRixxREFBSUEsQ0FBQyxhQUFhLFNBQVNtQjtRQUM3Q1QsUUFBUUMsR0FBRyxDQUFDVDtRQUNaLE1BQU1EO0lBQ1IsRUFBRSxPQUFPYSxPQUFPO1FBQ2QsTUFBTUE7SUFDUjtBQUNGLEVBQUU7QUFFSyxNQUFNVSxrQkFBa0IsT0FBT0MsYUFBcUJDO0lBQ3pELElBQUksQ0FBQ0QsZUFBZSxDQUFDQyxRQUFRO0lBRTdCLElBQUk7UUFDRixNQUFNUCxVQUFVO1lBQ2RNO1lBQ0FDO1FBQ0Y7UUFDQSxNQUFNeEIsTUFBTSxNQUFNRixxREFBSUEsQ0FBQyxhQUFhLFVBQVVtQjtRQUM5Q1QsUUFBUUMsR0FBRyxDQUFDVDtRQUNaLE1BQU1EO0lBQ1IsRUFBRSxPQUFPYSxPQUFPO1FBQ2QsTUFBTUE7SUFDUjtBQUNGLEVBQUU7QUFFSyxNQUFNYSxpQkFBaUIsT0FBT0YsYUFBcUJDO0lBQ3hELElBQUksQ0FBQ0QsZUFBZSxDQUFDQyxRQUFRO0lBRTdCLElBQUk7UUFDRixNQUFNUCxVQUFVO1lBQ2RNO1lBQ0FDO1FBQ0Y7UUFDQSxNQUFNeEIsTUFBTSxNQUFNRixxREFBSUEsQ0FBQyxrQkFBa0IsUUFBUW1CO1FBQ2pEVCxRQUFRQyxHQUFHLENBQUNUO1FBQ1osTUFBTUQ7SUFDUixFQUFFLE9BQU9hLE9BQU87UUFDZCxNQUFNQTtJQUNSO0FBQ0YsRUFBRTtBQUNLLE1BQU1jLG1CQUFtQixXQUFhLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL2FjdGlvbnMvd29ya3NwYWNlLnRzP2JiMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ3JlYXRlV29ya3NwYWNlLFxuICBMZWF2ZVdvcmtzcGFjZSxcbiAgVXBkYXRlV29ya3NwYWNlLFxuICBXb3Jrc3BhY2UsXG59IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcbmltcG9ydCBodHRwIGZyb20gXCJAL2xpYi9odHRwXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRXb3Jrc3BhY2UgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgaHR0cChcIk15V29ya3NwYWNlXCIsIFwiZ2V0XCIpO1xuXG4gICAgaWYgKHJlcz8ubGVuZ3RoKSB7XG4gICAgICBsZXQgc2VsZWN0ZWQgPSB1c2VEYXRhU3RvcmUuZ2V0U3RhdGUoKS5zZWxlY3RlZFdvcmtzcGFjZTtcbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICBzZWxlY3RlZCA9IHJlcy5maW5kKChlbDogV29ya3NwYWNlKSA9PiBlbC5faWQgPT0gc2VsZWN0ZWQ/Ll9pZCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiU0VMRUNURURcIiwgc2VsZWN0ZWQpO1xuXG4gICAgICB1c2VEYXRhU3RvcmUuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZFdvcmtzcGFjZTogc2VsZWN0ZWQgfHwgcmVzWzBdIHx8IG51bGwsXG4gICAgICAgIHdvcmtzcGFjZXM6IHJlcyB8fCBbXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVdvcmtzcGFjZSA9IGFzeW5jICh0aXRsZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZWRCeSA9IHVzZURhdGFTdG9yZS5nZXRTdGF0ZSgpLnVzZXI/Ll9pZCE7XG4gIGNvbnN0IHBheWxvYWQ6IENyZWF0ZVdvcmtzcGFjZSA9IHtcbiAgICB0aXRsZSxcbiAgICBjcmVhdGVkQnksXG4gICAgY29sbGFib3JhdG9yczogW10sXG4gIH07XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBodHRwKFwiV29ya3NwYWNlXCIsIFwicG9zdFwiLCBwYXlsb2FkKTtcbiAgICBjb25zdCBuZXdXb3Jrc3BhY2UgPSByZXM/LmRhdGE7XG5cbiAgICBpZiAobmV3V29ya3NwYWNlKSB7XG4gICAgICB1c2VEYXRhU3RvcmUuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZFdvcmtzcGFjZTogbmV3V29ya3NwYWNlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2cocmVzKTtcbiAgICBhd2FpdCBnZXRXb3Jrc3BhY2UoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGVkaXRXb3Jrc3BhY2UgPSBhc3luYyAocGF5bG9hZDogVXBkYXRlV29ya3NwYWNlKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgaHR0cChcIldvcmtzcGFjZVwiLCBcInBhdGNoXCIsIHBheWxvYWQpO1xuICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgYXdhaXQgZ2V0V29ya3NwYWNlKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVXb3Jrc3BhY2UgPSBhc3luYyAod29ya3NwYWNlSWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcpID0+IHtcbiAgaWYgKCF3b3Jrc3BhY2VJZCB8fCAhdXNlcklkKSByZXR1cm47XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgd29ya3NwYWNlSWQsXG4gICAgICB1c2VySWQsXG4gICAgfTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBodHRwKFwiV29ya3NwYWNlXCIsIFwiZGVsZXRlXCIsIHBheWxvYWQpO1xuICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgYXdhaXQgZ2V0V29ya3NwYWNlKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBsZWF2ZVdvcmtzcGFjZSA9IGFzeW5jICh3b3Jrc3BhY2VJZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZykgPT4ge1xuICBpZiAoIXdvcmtzcGFjZUlkIHx8ICF1c2VySWQpIHJldHVybjtcblxuICB0cnkge1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICB3b3Jrc3BhY2VJZCxcbiAgICAgIHVzZXJJZCxcbiAgICB9O1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGh0dHAoXCJMZWF2ZVdvcmtzcGFjZVwiLCBcInBvc3RcIiwgcGF5bG9hZCk7XG4gICAgY29uc29sZS5sb2cocmVzKTtcbiAgICBhd2FpdCBnZXRXb3Jrc3BhY2UoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcbmV4cG9ydCBjb25zdCBhZGRDb2xsYWJvcmF0b3JzID0gYXN5bmMgKCkgPT4ge307XG4iXSwibmFtZXMiOlsidXNlRGF0YVN0b3JlIiwiaHR0cCIsImdldFdvcmtzcGFjZSIsInJlcyIsImxlbmd0aCIsInNlbGVjdGVkIiwiZ2V0U3RhdGUiLCJzZWxlY3RlZFdvcmtzcGFjZSIsImZpbmQiLCJlbCIsIl9pZCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIndvcmtzcGFjZXMiLCJlcnJvciIsImNyZWF0ZVdvcmtzcGFjZSIsInRpdGxlIiwiY3JlYXRlZEJ5IiwidXNlciIsInBheWxvYWQiLCJjb2xsYWJvcmF0b3JzIiwibmV3V29ya3NwYWNlIiwiZGF0YSIsImVkaXRXb3Jrc3BhY2UiLCJkZWxldGVXb3Jrc3BhY2UiLCJ3b3Jrc3BhY2VJZCIsInVzZXJJZCIsImxlYXZlV29ya3NwYWNlIiwiYWRkQ29sbGFib3JhdG9ycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/actions/workspace.ts\n"));

/***/ })

});