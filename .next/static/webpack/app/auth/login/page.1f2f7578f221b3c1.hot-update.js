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

/***/ "(app-pages-browser)/./src/lib/http.ts":
/*!*************************!*\
  !*** ./src/lib/http.ts ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apis */ \"(app-pages-browser)/./src/lib/apis.ts\");\n\n\naxios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].defaults.baseURL = \"http://localhost:8000/api\" || 0;\naxios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].defaults.headers.post[\"Content-Type\"] = \"application/json\";\nconst parseParams = async (params, extraHeaders)=>{\n    const token = localStorage.getItem(\"token\");\n    const AUTH_TOKEN = \"Bearer \".concat(token);\n    return {\n        headers: {\n            ...extraHeaders,\n            Authorization: AUTH_TOKEN\n        },\n        params: {\n            ...params\n        }\n    };\n};\nconst processError = async function(e) {\n    var _e_data;\n    // TODO: add popup\n    const status = ((_e_data = e.data) === null || _e_data === void 0 ? void 0 : _e_data.statusCode) || e.status;\n    if (status === 404 || e.data === \"\") {\n    //\n    }\n    if (status === 401) {\n        //handle logout\n        console.log(e);\n    //\n    } else {\n        //\n        throw new Error(e === null || e === void 0 ? void 0 : e.data);\n    }\n};\nconst apiCall = function(url, httpMethod, body, additionalParams) {\n    switch(httpMethod){\n        case \"post\":\n        case \"put\":\n        case \"patch\":\n            return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"][httpMethod](url, body, additionalParams);\n        case \"get\":\n            return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"][httpMethod](url, additionalParams);\n        case \"delete\":\n            return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"][httpMethod](url, {\n                ...additionalParams\n            });\n        default:\n            throw new Error(\"Please provide a valid http method\");\n    }\n};\nconst http = async function(endpoint, httpMethod) {\n    let body = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, options = arguments.length > 3 ? arguments[3] : void 0;\n    const defaultOptions = {\n        suffix: \"\",\n        additionalParams: {},\n        extraHeaders: {},\n        ...options\n    };\n    try {\n        let url = _apis__WEBPACK_IMPORTED_MODULE_0__[\"default\"][endpoint];\n        if (defaultOptions === null || defaultOptions === void 0 ? void 0 : defaultOptions.suffix) {\n            url = \"\".concat(url, \"/\").concat(defaultOptions === null || defaultOptions === void 0 ? void 0 : defaultOptions.suffix);\n        }\n        const { data } = await apiCall(url, httpMethod, body, await parseParams(defaultOptions === null || defaultOptions === void 0 ? void 0 : defaultOptions.additionalParams, defaultOptions === null || defaultOptions === void 0 ? void 0 : defaultOptions.extraHeaders));\n        return data;\n    } catch (error) {\n        if (error.message === \"Network Error\") {\n            console.log(\"error\", error.message);\n        } else {\n            processError(error.response);\n        }\n        throw error;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (http);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvaHR0cC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBMEI7QUFDQTtBQUUxQkEsNkNBQUtBLENBQUNFLFFBQVEsQ0FBQ0MsT0FBTyxHQUNwQkMsMkJBQStCLElBQUksQ0FBMkI7QUFDaEVKLDZDQUFLQSxDQUFDRSxRQUFRLENBQUNLLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLGVBQWUsR0FBRztBQUU5QyxNQUFNQyxjQUFjLE9BQ2xCQyxRQUNBQztJQUVBLE1BQU1DLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztJQUNuQyxNQUFNQyxhQUFhLFVBQWdCLE9BQU5IO0lBRTdCLE9BQU87UUFDTEwsU0FBUztZQUNQLEdBQUdJLFlBQVk7WUFDZkssZUFBZUQ7UUFDakI7UUFDQUwsUUFBUTtZQUNOLEdBQUdBLE1BQU07UUFDWDtJQUNGO0FBQ0Y7QUFFQSxNQUFNTyxlQUFlLGVBQWdCQyxDQUFNO1FBRTFCQTtJQURmLGtCQUFrQjtJQUNsQixNQUFNQyxTQUFTRCxFQUFBQSxVQUFBQSxFQUFFRSxJQUFJLGNBQU5GLDhCQUFBQSxRQUFRRyxVQUFVLEtBQUlILEVBQUVDLE1BQU07SUFFN0MsSUFBSUEsV0FBVyxPQUFPRCxFQUFFRSxJQUFJLEtBQUssSUFBSTtJQUNuQyxFQUFFO0lBQ0o7SUFDQSxJQUFJRCxXQUFXLEtBQUs7UUFDbEIsZUFBZTtRQUNmRyxRQUFRQyxHQUFHLENBQUNMO0lBQ1osRUFBRTtJQUNKLE9BQU87UUFDTCxFQUFFO1FBRUYsTUFBTSxJQUFJTSxNQUFNTixjQUFBQSx3QkFBQUEsRUFBR0UsSUFBSTtJQUN6QjtBQUNGO0FBRUEsTUFBTUssVUFBVSxTQUNkQyxHQUFXLEVBQ1hDLFVBQXVELEVBQ3ZEQyxJQUFTLEVBQ1RDLGdCQUFxQztJQUVyQyxPQUFRRjtRQUNOLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztZQUNILE9BQU8zQiw2Q0FBSyxDQUFDMkIsV0FBVyxDQUFDRCxLQUFLRSxNQUFNQztRQUN0QyxLQUFLO1lBQ0gsT0FBTzdCLDZDQUFLLENBQUMyQixXQUFXLENBQUNELEtBQUtHO1FBQ2hDLEtBQUs7WUFDSCxPQUFPN0IsNkNBQUssQ0FBQzJCLFdBQVcsQ0FBQ0QsS0FBSztnQkFDNUIsR0FBR0csZ0JBQWdCO1lBQ3JCO1FBQ0Y7WUFDRSxNQUFNLElBQUlMLE1BQU07SUFDcEI7QUFDRjtBQUVBLE1BQU1NLE9BQU8sZUFDWEMsVUFDQUo7UUFDQUMsd0VBQVksTUFDWkk7SUFNQSxNQUFNQyxpQkFBaUI7UUFDckJDLFFBQVE7UUFDUkwsa0JBQWtCLENBQUM7UUFDbkJsQixjQUFjLENBQUM7UUFDZixHQUFHcUIsT0FBTztJQUNaO0lBRUEsSUFBSTtRQUNGLElBQUlOLE1BQU16Qiw2Q0FBSSxDQUFDOEIsU0FBUztRQUV4QixJQUFJRSwyQkFBQUEscUNBQUFBLGVBQWdCQyxNQUFNLEVBQUU7WUFDMUJSLE1BQU0sVUFBR0EsS0FBSSxLQUEwQixPQUF2Qk8sMkJBQUFBLHFDQUFBQSxlQUFnQkMsTUFBTTtRQUN4QztRQUVBLE1BQU0sRUFBRWQsSUFBSSxFQUFFLEdBQUcsTUFBTUssUUFDckJDLEtBQ0FDLFlBQ0FDLE1BQ0EsTUFBTW5CLFlBQ0p3QiwyQkFBQUEscUNBQUFBLGVBQWdCSixnQkFBZ0IsRUFDaENJLDJCQUFBQSxxQ0FBQUEsZUFBZ0J0QixZQUFZO1FBR2hDLE9BQU9TO0lBQ1QsRUFBRSxPQUFPZSxPQUFZO1FBQ25CLElBQUlBLE1BQU1DLE9BQU8sS0FBSyxpQkFBaUI7WUFDckNkLFFBQVFDLEdBQUcsQ0FBQyxTQUFTWSxNQUFNQyxPQUFPO1FBQ3BDLE9BQU87WUFDTG5CLGFBQWFrQixNQUFNRSxRQUFRO1FBQzdCO1FBRUEsTUFBTUY7SUFDUjtBQUNGO0FBRUEsK0RBQWVMLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9odHRwLnRzPzEwODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGFwaXMgZnJvbSBcIi4vYXBpc1wiO1xuXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID1cbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGlcIjtcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFtcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuXG5jb25zdCBwYXJzZVBhcmFtcyA9IGFzeW5jIChcbiAgcGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LFxuICBleHRyYUhlYWRlcnM6IFJlY29yZDxzdHJpbmcsIGFueT5cbikgPT4ge1xuICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG4gIGNvbnN0IEFVVEhfVE9LRU4gPSBgQmVhcmVyICR7dG9rZW59YDtcblxuICByZXR1cm4ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIC4uLmV4dHJhSGVhZGVycyxcbiAgICAgIEF1dGhvcml6YXRpb246IEFVVEhfVE9LRU4sXG4gICAgfSxcbiAgICBwYXJhbXM6IHtcbiAgICAgIC4uLnBhcmFtcyxcbiAgICB9LFxuICB9O1xufTtcblxuY29uc3QgcHJvY2Vzc0Vycm9yID0gYXN5bmMgZnVuY3Rpb24gKGU6IGFueSkge1xuICAvLyBUT0RPOiBhZGQgcG9wdXBcbiAgY29uc3Qgc3RhdHVzID0gZS5kYXRhPy5zdGF0dXNDb2RlIHx8IGUuc3RhdHVzO1xuXG4gIGlmIChzdGF0dXMgPT09IDQwNCB8fCBlLmRhdGEgPT09IFwiXCIpIHtcbiAgICAvL1xuICB9XG4gIGlmIChzdGF0dXMgPT09IDQwMSkge1xuICAgIC8vaGFuZGxlIGxvZ291dFxuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIC8vXG4gIH0gZWxzZSB7XG4gICAgLy9cblxuICAgIHRocm93IG5ldyBFcnJvcihlPy5kYXRhKTtcbiAgfVxufTtcblxuY29uc3QgYXBpQ2FsbCA9IGZ1bmN0aW9uIChcbiAgdXJsOiBzdHJpbmcsXG4gIGh0dHBNZXRob2Q6IFwicG9zdFwiIHwgXCJwdXRcIiB8IFwiZ2V0XCIgfCBcInBhdGNoXCIgfCBcImRlbGV0ZVwiLFxuICBib2R5OiBhbnksXG4gIGFkZGl0aW9uYWxQYXJhbXM6IFJlY29yZDxzdHJpbmcsIGFueT5cbikge1xuICBzd2l0Y2ggKGh0dHBNZXRob2QpIHtcbiAgICBjYXNlIFwicG9zdFwiOlxuICAgIGNhc2UgXCJwdXRcIjpcbiAgICBjYXNlIFwicGF0Y2hcIjpcbiAgICAgIHJldHVybiBheGlvc1todHRwTWV0aG9kXSh1cmwsIGJvZHksIGFkZGl0aW9uYWxQYXJhbXMpO1xuICAgIGNhc2UgXCJnZXRcIjpcbiAgICAgIHJldHVybiBheGlvc1todHRwTWV0aG9kXSh1cmwsIGFkZGl0aW9uYWxQYXJhbXMpO1xuICAgIGNhc2UgXCJkZWxldGVcIjpcbiAgICAgIHJldHVybiBheGlvc1todHRwTWV0aG9kXSh1cmwsIHtcbiAgICAgICAgLi4uYWRkaXRpb25hbFBhcmFtcyxcbiAgICAgIH0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIGh0dHAgbWV0aG9kXCIpO1xuICB9XG59O1xuXG5jb25zdCBodHRwID0gYXN5bmMgPFQ+KFxuICBlbmRwb2ludDoga2V5b2YgdHlwZW9mIGFwaXMsXG4gIGh0dHBNZXRob2Q6IFwicG9zdFwiIHwgXCJwdXRcIiB8IFwiZ2V0XCIgfCBcInBhdGNoXCIgfCBcImRlbGV0ZVwiLFxuICBib2R5OiBhbnkgPSBudWxsLFxuICBvcHRpb25zPzoge1xuICAgIHN1ZmZpeD86IHN0cmluZztcbiAgICBhZGRpdGlvbmFsUGFyYW1zPzogUmVjb3JkPHN0cmluZywgYW55PjtcbiAgICBleHRyYUhlYWRlcnM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICB9XG4pOiBQcm9taXNlPFQ+ID0+IHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgc3VmZml4OiBcIlwiLFxuICAgIGFkZGl0aW9uYWxQYXJhbXM6IHt9LFxuICAgIGV4dHJhSGVhZGVyczoge30sXG4gICAgLi4ub3B0aW9ucyxcbiAgfTtcblxuICB0cnkge1xuICAgIGxldCB1cmwgPSBhcGlzW2VuZHBvaW50XTtcblxuICAgIGlmIChkZWZhdWx0T3B0aW9ucz8uc3VmZml4KSB7XG4gICAgICB1cmwgPSBgJHt1cmx9LyR7ZGVmYXVsdE9wdGlvbnM/LnN1ZmZpeH1gO1xuICAgIH1cblxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpQ2FsbChcbiAgICAgIHVybCxcbiAgICAgIGh0dHBNZXRob2QsXG4gICAgICBib2R5LFxuICAgICAgYXdhaXQgcGFyc2VQYXJhbXMoXG4gICAgICAgIGRlZmF1bHRPcHRpb25zPy5hZGRpdGlvbmFsUGFyYW1zLFxuICAgICAgICBkZWZhdWx0T3B0aW9ucz8uZXh0cmFIZWFkZXJzXG4gICAgICApXG4gICAgKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIGlmIChlcnJvci5tZXNzYWdlID09PSBcIk5ldHdvcmsgRXJyb3JcIikge1xuICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvY2Vzc0Vycm9yKGVycm9yLnJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaHR0cDtcbiJdLCJuYW1lcyI6WyJheGlvcyIsImFwaXMiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImhlYWRlcnMiLCJwb3N0IiwicGFyc2VQYXJhbXMiLCJwYXJhbXMiLCJleHRyYUhlYWRlcnMiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJBVVRIX1RPS0VOIiwiQXV0aG9yaXphdGlvbiIsInByb2Nlc3NFcnJvciIsImUiLCJzdGF0dXMiLCJkYXRhIiwic3RhdHVzQ29kZSIsImNvbnNvbGUiLCJsb2ciLCJFcnJvciIsImFwaUNhbGwiLCJ1cmwiLCJodHRwTWV0aG9kIiwiYm9keSIsImFkZGl0aW9uYWxQYXJhbXMiLCJodHRwIiwiZW5kcG9pbnQiLCJvcHRpb25zIiwiZGVmYXVsdE9wdGlvbnMiLCJzdWZmaXgiLCJlcnJvciIsIm1lc3NhZ2UiLCJyZXNwb25zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/http.ts\n"));

/***/ })

});