"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/category/[category]",{

/***/ "./pages/category/[category].js":
/*!**************************************!*\
  !*** ./pages/category/[category].js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var _components_global_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/global/Header */ \"./components/global/Header.js\");\n/* harmony import */ var _components_categories_BlogPostSnippet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/categories/BlogPostSnippet */ \"./components/categories/BlogPostSnippet.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n// [slug].js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default()(_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).image(source);\n}\nconst ptComponents = {\n    types: {\n        image: (param)=>{\n            let { value  } = param;\n            var ref;\n            if (!(value === null || value === void 0 ? void 0 : (ref = value.asset) === null || ref === void 0 ? void 0 : ref._ref)) {\n                return null;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"mx-auto my-12 w-1/2\",\n                    alt: value.alt || \" \",\n                    loading: \"lazy\",\n                    src: urlFor(value).width(1600).height(900).fit(\"max\").auto(\"format\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Solitary_NextJS_BlogPage\\\\nextjs_frontend\\\\pages\\\\category\\\\[category].js\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false);\n        }\n    }\n};\nconst Post = (param)=>{\n    let { category  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(); //is here, because I dont know how else to access the slug in that specific code block; probably (definitely) more elegant ways exist\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_global_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Solitary_NextJS_BlogPage\\\\nextjs_frontend\\\\pages\\\\category\\\\[category].js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex justify-center z-0 top-64 h-auto m-auto bg-fixed bg-cover bg-parallax text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"z-50\",\n                            children: \"All posts belonging to category \".concat(router.query.category)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Solitary_NextJS_BlogPage\\\\nextjs_frontend\\\\pages\\\\category\\\\[category].js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full\",\n                            children: category && category.map((c)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_categories_BlogPostSnippet__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    catData: c\n                                }, c.title, false, {\n                                    fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Solitary_NextJS_BlogPage\\\\nextjs_frontend\\\\pages\\\\category\\\\[category].js\",\n                                    lineNumber: 60,\n                                    columnNumber: 46\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Solitary_NextJS_BlogPage\\\\nextjs_frontend\\\\pages\\\\category\\\\[category].js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Solitary_NextJS_BlogPage\\\\nextjs_frontend\\\\pages\\\\category\\\\[category].js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Solitary_NextJS_BlogPage\\\\nextjs_frontend\\\\pages\\\\category\\\\[category].js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXRlZ29yeS9bY2F0ZWdvcnldLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFZO0FBQ1o7O0FBQ2dEO0FBQ2Q7QUFDa0I7QUFDc0I7QUFDbEM7QUFFeEMsU0FBU0ssT0FBT0MsTUFBTSxFQUFFO0lBQ3RCLE9BQU9OLHdEQUFlQSxDQUFDQywrQ0FBTUEsRUFBRU0sS0FBSyxDQUFDRDtBQUN2QztBQWVBLE1BQU1FLGVBQWU7SUFDbkJDLE9BQU87UUFDTEYsT0FBTyxTQUFlO2dCQUFkLEVBQUVHLE1BQUssRUFBRTtnQkFDVkE7WUFBTCxJQUFJLENBQUNBLENBQUFBLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsTUFBQUEsTUFBT0MsS0FBSyxjQUFaRCxpQkFBQUEsS0FBQUEsSUFBQUEsSUFBY0UsSUFBRixHQUFRO2dCQUN2QixPQUFPLElBQUk7WUFDYixDQUFDO1lBQ0QscUJBQ0U7MEJBQ0UsNEVBQUNDO29CQUNDQyxXQUFVO29CQUNWQyxLQUFLTCxNQUFNSyxHQUFHLElBQUk7b0JBQ2xCQyxTQUFRO29CQUNSQyxLQUFLWixPQUFPSyxPQUNUUSxLQUFLLENBQUMsTUFDTkMsTUFBTSxDQUFDLEtBQ1BDLEdBQUcsQ0FBQyxPQUNKQyxJQUFJLENBQUM7Ozs7Ozs7UUFJaEI7SUFDRjtBQUNGO0FBRUEsTUFBTUMsT0FBTyxTQUFrQjtRQUFqQixFQUFFQyxTQUFRLEVBQUU7O0lBQ3hCLE1BQU1DLFNBQVNwQixzREFBU0EsSUFBSSxxSUFBcUk7SUFFaksscUJBQ0U7OzBCQUNFLDhEQUFDRixpRUFBTUE7Ozs7OzBCQUNQLDhEQUFDdUI7Z0JBQVFYLFdBQVU7MEJBQ2pCLDRFQUFDWTs7c0NBQ0MsOERBQUNDOzRCQUFHYixXQUFVO3NDQUFRLG1DQUF5RCxPQUF0QlUsT0FBT0ksS0FBSyxDQUFDTCxRQUFROzs7Ozs7c0NBQzlFLDhEQUFDTTs0QkFBSWYsV0FBVTtzQ0FDWlMsWUFBWUEsU0FBU08sR0FBRyxDQUFDLENBQUNDLGtCQUFNLDhEQUFDNUIsOEVBQWVBO29DQUFlNkIsU0FBU0Q7bUNBQWxCQSxFQUFFRSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0xRTtHQWhCTVg7O1FBQ1dsQixrREFBU0E7OztLQURwQmtCOztBQStDTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYXRlZ29yeS9bY2F0ZWdvcnldLmpzPzE1YjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gW3NsdWddLmpzXHJcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uLy4uL2NsaWVudFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dsb2JhbC9IZWFkZXJcIjtcclxuaW1wb3J0IEJsb2dQb3N0U25pcHBldCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXRlZ29yaWVzL0Jsb2dQb3N0U25pcHBldFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcclxuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2F0TWFwKGNhdGVnb3J5KSB7XHJcbiAgbGV0IGNhdFN0cmluZyA9IFwiXCI7XHJcbiAgaWYgKGNhdGVnb3J5ID09PSBcImNhdGVnb3J5LTFcIikge1xyXG4gICAgY2F0U3RyaW5nID0gXCJLYXRlZ29yaWUgMVwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNhdGVnb3J5ID09PSBcImNhdGVnb3J5LTJcIikge1xyXG4gICAgY2F0U3RyaW5nID0gXCJLYXRlZ29yaWUgMlwiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNhdFN0cmluZztcclxufVxyXG5cclxuY29uc3QgcHRDb21wb25lbnRzID0ge1xyXG4gIHR5cGVzOiB7XHJcbiAgICBpbWFnZTogKHsgdmFsdWUgfSkgPT4ge1xyXG4gICAgICBpZiAoIXZhbHVlPy5hc3NldD8uX3JlZikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBteS0xMiB3LTEvMlwiXHJcbiAgICAgICAgICAgIGFsdD17dmFsdWUuYWx0IHx8IFwiIFwifVxyXG4gICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICAgIHNyYz17dXJsRm9yKHZhbHVlKVxyXG4gICAgICAgICAgICAgIC53aWR0aCgxNjAwKVxyXG4gICAgICAgICAgICAgIC5oZWlnaHQoOTAwKVxyXG4gICAgICAgICAgICAgIC5maXQoXCJtYXhcIilcclxuICAgICAgICAgICAgICAuYXV0byhcImZvcm1hdFwiKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBQb3N0ID0gKHsgY2F0ZWdvcnkgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpOyAvL2lzIGhlcmUsIGJlY2F1c2UgSSBkb250IGtub3cgaG93IGVsc2UgdG8gYWNjZXNzIHRoZSBzbHVnIGluIHRoYXQgc3BlY2lmaWMgY29kZSBibG9jazsgcHJvYmFibHkgKGRlZmluaXRlbHkpIG1vcmUgZWxlZ2FudCB3YXlzIGV4aXN0XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgei0wIHRvcC02NCBoLWF1dG8gbS1hdXRvIGJnLWZpeGVkIGJnLWNvdmVyIGJnLXBhcmFsbGF4IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiei01MFwiPntgQWxsIHBvc3RzIGJlbG9uZ2luZyB0byBjYXRlZ29yeSAke3JvdXRlci5xdWVyeS5jYXRlZ29yeX1gfTwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICB7Y2F0ZWdvcnkgJiYgY2F0ZWdvcnkubWFwKChjKSA9PiA8QmxvZ1Bvc3RTbmlwcGV0IGtleT17Yy50aXRsZX0gY2F0RGF0YT17Y30gLz4pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgcXVlcnkgPSBncm9xYCpbJHNsdWcgaW4gIGNhdGVnb3JpZXNbXS0+dGl0bGVde1xyXG4gIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxyXG4gIHRpdGxlLFxyXG4gIG1haW5JbWFnZSxcclxuICBcImF1dGhvck5hbWVcIjogYXV0aG9yLT5uYW1lLFxyXG4gIFwiZGF0ZVwiOiBwdWJsaXNoZWRBdCxcclxuICBib2R5XHJcbn1gO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHBhdGhzID0gYXdhaXQgY2xpZW50LmZldGNoKGdyb3FgKltfdHlwZSA9PSBcImNhdGVnb3J5XCJde3RpdGxlfVtdLnRpdGxlYCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcGF0aHMubWFwKChzbHVnKSA9PiAoeyBwYXJhbXM6IHsgY2F0ZWdvcnk6IGNhdE1hcChzbHVnKSB9IH0pKSxcclxuICAgIGZhbGxiYWNrOiB0cnVlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcclxuICBjb25zdCBwcmVTbHVnID0gY29udGV4dC5wYXJhbXMuY2F0ZWdvcnk7XHJcbiAgY29uc3Qgc2x1ZyA9IGNhdE1hcChwcmVTbHVnKTtcclxuICBjb25zdCBjYXRlZ29yeSA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyBzbHVnIH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBjYXRlZ29yeSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iXSwibmFtZXMiOlsiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwiSGVhZGVyIiwiQmxvZ1Bvc3RTbmlwcGV0IiwidXNlUm91dGVyIiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiLCJwdENvbXBvbmVudHMiLCJ0eXBlcyIsInZhbHVlIiwiYXNzZXQiLCJfcmVmIiwiaW1nIiwiY2xhc3NOYW1lIiwiYWx0IiwibG9hZGluZyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiZml0IiwiYXV0byIsIlBvc3QiLCJjYXRlZ29yeSIsInJvdXRlciIsInNlY3Rpb24iLCJhcnRpY2xlIiwiaDEiLCJxdWVyeSIsImRpdiIsIm1hcCIsImMiLCJjYXREYXRhIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/category/[category].js\n"));

/***/ })

});