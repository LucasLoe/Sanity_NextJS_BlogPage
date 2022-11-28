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

/***/ "./components/categories/BlogPostSnippet.js":
/*!**************************************************!*\
  !*** ./components/categories/BlogPostSnippet.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthorBio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n\n\n\nfunction AuthorBio(param) {\n    let { catData  } = param;\n    function urlFor(source) {\n        return _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).image(source);\n    }\n    console.log(catData);\n    function toPlainText() {\n        let blocks = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], numberOfWords = arguments.length > 1 ? arguments[1] : void 0;\n        return blocks// loop through each block\n        .map((block)=>{\n            // if it's not a text block with children,\n            // return nothing\n            if (block._type !== \"block\" || !block.children) {\n                return \"\";\n            }\n            // loop through the children spans, and join the\n            // text strings\n            return block.children.map((child)=>child.text).join(\"\");\n        })// join the paragraphs leaving split by two linebreaks\n        .join(\"\\n\\n\")// only return first x number of words\n        .split(/\\s+/).slice(0, numberOfWords).join(\" \").concat(\"\", \"...\");\n    }\n    //       <div className=\"bg-blue-300 h-36 w-36 rounded mx-auto md:my-auto md:shrink-0 md:mx-8\"></div>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-blue-50 max-w-5xl mx-auto my-8 flex flex-col justify-center shadow-sm rounded md:flex-row lg:h-48 md:justify-between \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-full h-full max-w-[80%] md:w-[150px] md:h-[150px] md:my-4\",\n                alt: catData.mainImage.alt || \" \",\n                loading: \"lazy\",\n                src: urlFor(catData.mainImage.asset._ref).width(350).height(350).fit(\"max\").auto(\"format\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Solitary_NextJS_BlogPage\\\\nextjs_frontend\\\\components\\\\categories\\\\BlogPostSnippet.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grow h-auto my-6 flex-col justify-between md:mr-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col justify-center items-center md:flex-row md:justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-left my-0\",\n                                children: catData.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Solitary_NextJS_BlogPage\\\\nextjs_frontend\\\\components\\\\categories\\\\BlogPostSnippet.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-blue-600 font-semibold hover:underline cursor-pointer hover:text-blue-500\",\n                                children: catData.authorName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Solitary_NextJS_BlogPage\\\\nextjs_frontend\\\\components\\\\categories\\\\BlogPostSnippet.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Solitary_NextJS_BlogPage\\\\nextjs_frontend\\\\components\\\\categories\\\\BlogPostSnippet.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center my-2 h-3/5 overflow-hidden md:text-left\",\n                        children: toPlainText(catData.body, 40)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Solitary_NextJS_BlogPage\\\\nextjs_frontend\\\\components\\\\categories\\\\BlogPostSnippet.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col mt-8 justify-between w-full mx-auto md:flex-row md:mt-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-400 text-right mr-2 md:mr-0\",\n                                children: catData.date.substr(0, 10)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Solitary_NextJS_BlogPage\\\\nextjs_frontend\\\\components\\\\categories\\\\BlogPostSnippet.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-end mt-4 md:mt-0\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-400 font-semibold md:mx-2\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Solitary_NextJS_BlogPage\\\\nextjs_frontend\\\\components\\\\categories\\\\BlogPostSnippet.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, this),\n                                    catData.categories.map((c)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-400 mx-2 font-semibold hover:text-blue-600 cursor-pointer\",\n                                            children: \"[ \".concat(c, \" ]\")\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Solitary_NextJS_BlogPage\\\\nextjs_frontend\\\\components\\\\categories\\\\BlogPostSnippet.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 15\n                                        }, this))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Solitary_NextJS_BlogPage\\\\nextjs_frontend\\\\components\\\\categories\\\\BlogPostSnippet.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Solitary_NextJS_BlogPage\\\\nextjs_frontend\\\\components\\\\categories\\\\BlogPostSnippet.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Solitary_NextJS_BlogPage\\\\nextjs_frontend\\\\components\\\\categories\\\\BlogPostSnippet.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Solitary_NextJS_BlogPage\\\\nextjs_frontend\\\\components\\\\categories\\\\BlogPostSnippet.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_c = AuthorBio;\nvar _c;\n$RefreshReg$(_c, \"AuthorBio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhdGVnb3JpZXMvQmxvZ1Bvc3RTbmlwcGV0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQWdEO0FBQ2Q7QUFFbkIsU0FBU0UsVUFBVSxLQUFXLEVBQUU7UUFBYixFQUFFQyxRQUFPLEVBQUUsR0FBWDtJQUNoQyxTQUFTQyxPQUFPQyxNQUFNLEVBQUU7UUFDdEIsT0FBT0wsd0RBQWVBLENBQUNDLCtDQUFNQSxFQUFFSyxLQUFLLENBQUNEO0lBQ3ZDO0lBQ0FFLFFBQVFDLEdBQUcsQ0FBQ0w7SUFFWixTQUFTTSxjQUF3QztZQUE1QkMsU0FBQUEsaUVBQVMsRUFBRSxFQUFFQztRQUNoQyxPQUNFRCxNQUNFLDBCQUEwQjtTQUN6QkUsR0FBRyxDQUFDLENBQUNDLFFBQVU7WUFDZCwwQ0FBMEM7WUFDMUMsaUJBQWlCO1lBQ2pCLElBQUlBLE1BQU1DLEtBQUssS0FBSyxXQUFXLENBQUNELE1BQU1FLFFBQVEsRUFBRTtnQkFDOUMsT0FBTztZQUNULENBQUM7WUFDRCxnREFBZ0Q7WUFDaEQsZUFBZTtZQUNmLE9BQU9GLE1BQU1FLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDLENBQUNJLFFBQVVBLE1BQU1DLElBQUksRUFBRUMsSUFBSSxDQUFDO1FBQ3hELEVBQ0Esc0RBQXNEO1NBQ3JEQSxJQUFJLENBQUMsT0FDTixzQ0FBc0M7U0FDckNDLEtBQUssQ0FBQyxPQUNOQyxLQUFLLENBQUMsR0FBR1QsZUFDVE8sSUFBSSxDQUFDLEtBQ0xHLE1BQU0sQ0FBQyxJQUFJO0lBRWxCO0lBQ0YscUdBQXFHO0lBQ25HLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFFYiw4REFBQ0M7Z0JBQ0tELFdBQVU7Z0JBQ1ZFLEtBQUt0QixRQUFRdUIsU0FBUyxDQUFDRCxHQUFHLElBQUk7Z0JBQzlCRSxTQUFRO2dCQUNSQyxLQUFLeEIsT0FBT0QsUUFBUXVCLFNBQVMsQ0FBQ0csS0FBSyxDQUFDQyxJQUFJLEVBQ3JDQyxLQUFLLENBQUMsS0FDTkMsTUFBTSxDQUFDLEtBQ1BDLEdBQUcsQ0FBQyxPQUNKQyxJQUFJLENBQUM7Ozs7OzswQkFHZCw4REFBQ1o7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNZO2dDQUFHWixXQUFVOzBDQUFrQnBCLFFBQVFpQyxLQUFLOzs7Ozs7MENBQzdDLDhEQUFDQztnQ0FBRWQsV0FBVTswQ0FDVnBCLFFBQVFtQyxVQUFVOzs7Ozs7Ozs7Ozs7a0NBR3ZCLDhEQUFDRDt3QkFBRWQsV0FBVTtrQ0FDVmQsWUFBWU4sUUFBUW9DLElBQUksRUFBRTs7Ozs7O2tDQUU3Qiw4REFBQ2pCO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ2M7Z0NBQUVkLFdBQVU7MENBQXlDcEIsUUFBUXFDLElBQUksQ0FBQ0MsTUFBTSxDQUFDLEdBQUc7Ozs7OzswQ0FFN0UsOERBQUNuQjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNjO3dDQUFFZCxXQUFVOzs7Ozs7b0NBQ1pwQixRQUFRdUMsVUFBVSxDQUFDOUIsR0FBRyxDQUFDLENBQUMrQixrQkFDdkIsOERBQUNOOzRDQUFFZCxXQUFVO3NEQUNWLEtBQU8sT0FBRm9CLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF4QixDQUFDO0tBckV1QnpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9CbG9nUG9zdFNuaXBwZXQuanM/MWFmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi9jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhvckJpbyh7IGNhdERhdGEgfSkge1xyXG4gIGZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcclxuICAgIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhjYXREYXRhKTtcclxuXHJcbiAgZnVuY3Rpb24gdG9QbGFpblRleHQoYmxvY2tzID0gW10sIG51bWJlck9mV29yZHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGJsb2Nrc1xyXG4gICAgICAgIC8vIGxvb3AgdGhyb3VnaCBlYWNoIGJsb2NrXHJcbiAgICAgICAgLm1hcCgoYmxvY2spID0+IHtcclxuICAgICAgICAgIC8vIGlmIGl0J3Mgbm90IGEgdGV4dCBibG9jayB3aXRoIGNoaWxkcmVuLFxyXG4gICAgICAgICAgLy8gcmV0dXJuIG5vdGhpbmdcclxuICAgICAgICAgIGlmIChibG9jay5fdHlwZSAhPT0gXCJibG9ja1wiIHx8ICFibG9jay5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgY2hpbGRyZW4gc3BhbnMsIGFuZCBqb2luIHRoZVxyXG4gICAgICAgICAgLy8gdGV4dCBzdHJpbmdzXHJcbiAgICAgICAgICByZXR1cm4gYmxvY2suY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gY2hpbGQudGV4dCkuam9pbihcIlwiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIGpvaW4gdGhlIHBhcmFncmFwaHMgbGVhdmluZyBzcGxpdCBieSB0d28gbGluZWJyZWFrc1xyXG4gICAgICAgIC5qb2luKFwiXFxuXFxuXCIpXHJcbiAgICAgICAgLy8gb25seSByZXR1cm4gZmlyc3QgeCBudW1iZXIgb2Ygd29yZHNcclxuICAgICAgICAuc3BsaXQoL1xccysvKVxyXG4gICAgICAgIC5zbGljZSgwLCBudW1iZXJPZldvcmRzKVxyXG4gICAgICAgIC5qb2luKFwiIFwiKVxyXG4gICAgICAgIC5jb25jYXQoXCJcIiwgXCIuLi5cIilcclxuICAgICk7XHJcbiAgfVxyXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtMzAwIGgtMzYgdy0zNiByb3VuZGVkIG14LWF1dG8gbWQ6bXktYXV0byBtZDpzaHJpbmstMCBtZDpteC04XCI+PC9kaXY+XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS01MCBtYXgtdy01eGwgbXgtYXV0byBteS04IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgc2hhZG93LXNtIHJvdW5kZWQgbWQ6ZmxleC1yb3cgbGc6aC00OCBtZDpqdXN0aWZ5LWJldHdlZW4gIFwiPlxyXG5cclxuICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG1heC13LVs4MCVdIG1kOnctWzE1MHB4XSBtZDpoLVsxNTBweF0gbWQ6bXktNFwiXHJcbiAgICAgICAgICAgIGFsdD17Y2F0RGF0YS5tYWluSW1hZ2UuYWx0IHx8IFwiIFwifVxyXG4gICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICAgIHNyYz17dXJsRm9yKGNhdERhdGEubWFpbkltYWdlLmFzc2V0Ll9yZWYpXHJcbiAgICAgICAgICAgICAgLndpZHRoKDM1MClcclxuICAgICAgICAgICAgICAuaGVpZ2h0KDM1MClcclxuICAgICAgICAgICAgICAuZml0KFwibWF4XCIpXHJcbiAgICAgICAgICAgICAgLmF1dG8oXCJmb3JtYXRcIil9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93IGgtYXV0byBteS02IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBtZDptci04XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtZDpmbGV4LXJvdyBtZDpqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgbXktMFwiPntjYXREYXRhLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwIGZvbnQtc2VtaWJvbGQgaG92ZXI6dW5kZXJsaW5lIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtYmx1ZS01MDBcIj5cclxuICAgICAgICAgICAge2NhdERhdGEuYXV0aG9yTmFtZX1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBteS0yIGgtMy81IG92ZXJmbG93LWhpZGRlbiBtZDp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgIHt0b1BsYWluVGV4dChjYXREYXRhLmJvZHksIDQwKX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG10LTgganVzdGlmeS1iZXR3ZWVuIHctZnVsbCBteC1hdXRvIG1kOmZsZXgtcm93IG1kOm10LTBcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgdGV4dC1yaWdodCBtci0yIG1kOm1yLTBcIj57Y2F0RGF0YS5kYXRlLnN1YnN0cigwLCAxMCl9PC9wPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBtdC00IG1kOm10LTBcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBmb250LXNlbWlib2xkIG1kOm14LTJcIiA+PC9wPlxyXG4gICAgICAgICAgICB7Y2F0RGF0YS5jYXRlZ29yaWVzLm1hcCgoYykgPT4gKFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgIG14LTIgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LWJsdWUtNjAwIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7YFsgJHtjfSBdYH1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwiQXV0aG9yQmlvIiwiY2F0RGF0YSIsInVybEZvciIsInNvdXJjZSIsImltYWdlIiwiY29uc29sZSIsImxvZyIsInRvUGxhaW5UZXh0IiwiYmxvY2tzIiwibnVtYmVyT2ZXb3JkcyIsIm1hcCIsImJsb2NrIiwiX3R5cGUiLCJjaGlsZHJlbiIsImNoaWxkIiwidGV4dCIsImpvaW4iLCJzcGxpdCIsInNsaWNlIiwiY29uY2F0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwiYWx0IiwibWFpbkltYWdlIiwibG9hZGluZyIsInNyYyIsImFzc2V0IiwiX3JlZiIsIndpZHRoIiwiaGVpZ2h0IiwiZml0IiwiYXV0byIsImgzIiwidGl0bGUiLCJwIiwiYXV0aG9yTmFtZSIsImJvZHkiLCJkYXRlIiwic3Vic3RyIiwiY2F0ZWdvcmllcyIsImMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/categories/BlogPostSnippet.js\n"));

/***/ })

});