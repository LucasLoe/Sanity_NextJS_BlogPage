"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/global/ImageSlider/Slider.js":
/*!*************************************************!*\
  !*** ./components/global/ImageSlider/Slider.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SliderContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SliderContent */ \"./components/global/ImageSlider/SliderContent.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Slider() {\n    _s();\n    const [indexObj, setIndexObj] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        index: 0,\n        indexShift: \"0\"\n    });\n    const transitionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    let contentUrls = (0,_SliderContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(indexObj);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        contentUrls = (0,_SliderContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(indexObj);\n    }, [\n        indexObj\n    ]);\n    function handleIndexChange(e) {\n        if (e === \"-1\") {\n            setIndexObj({\n                index: indexObj.index - 1,\n                indexShift: e\n            });\n        } else if (e === \"+1\") {\n            setIndexObj({\n                index: indexObj.index + 1,\n                indexShift: e\n            });\n        }\n    }\n    function calcShift(i) {\n        if (i === 0) {\n            return \"left-[-100vw]\";\n        } else if (i === 1) {\n            return \"left-[0vw]\";\n        } else if (i === 2) {\n            return \"left-[100vw]\";\n        } else {\n            return \"left-[0vw]\";\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute h-80 w-screen margin-x-0 margin-y-auto flex box-border overflow-hidden\",\n        children: [\n            contentUrls && contentUrls.map((srcData, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    className: \"w-screen h-80 object-cover transition transform -translate-x-100 active:translate-x-100\",\n                    src: \"/../public/assets/ImageSliderTest/\" + srcData,\n                    alt: \"some alt content\",\n                    width: 1500,\n                    height: 1500\n                }, i, false, {\n                    fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Sanity_NextJS_BlogPage\\\\nextjs_frontend\\\\components\\\\global\\\\ImageSlider\\\\Slider.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-white h-16 w-16 top-0 bottom-0 my-auto absolute left-0\",\n                onClick: ()=>handleIndexChange(\"-1\"),\n                children: \"-1\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Sanity_NextJS_BlogPage\\\\nextjs_frontend\\\\components\\\\global\\\\ImageSlider\\\\Slider.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-white h-16 w-16 top-0 bottom-0 my-auto absolute right-0\",\n                onClick: ()=>handleIndexChange(\"+1\"),\n                children: \"+1\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Sanity_NextJS_BlogPage\\\\nextjs_frontend\\\\components\\\\global\\\\ImageSlider\\\\Slider.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Sanity_NextJS_BlogPage\\\\nextjs_frontend\\\\components\\\\global\\\\ImageSlider\\\\Slider.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Slider, \"EI6daIFlBkwVGeqS5RDOp2p1Ca0=\");\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dsb2JhbC9JbWFnZVNsaWRlci9TbGlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBa0U7QUFDdkI7QUFDYjtBQUc5QixTQUFTTSxTQUFTOztJQUVoQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7UUFDdkNTLE9BQU87UUFDUEMsWUFBWTtJQUNkO0lBRUEsTUFBTUMsZ0JBQWdCUiw2Q0FBTUE7SUFFNUIsSUFBSVMsY0FBY1IsMERBQWFBLENBQUNHO0lBRWhDTixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RXLGNBQWNSLDBEQUFhQSxDQUFDRztJQUM5QixHQUFHO1FBQUNBO0tBQVM7SUFFYixTQUFTTSxrQkFBa0JDLENBQUMsRUFBRTtRQUM1QixJQUFJQSxNQUFNLE1BQU07WUFDZE4sWUFBWTtnQkFDVkMsT0FBT0YsU0FBU0UsS0FBSyxHQUFHO2dCQUN4QkMsWUFBWUk7WUFDZDtRQUNGLE9BQ0ssSUFBSUEsTUFBTSxNQUFNO1lBQ25CTixZQUFZO2dCQUNWQyxPQUFPRixTQUFTRSxLQUFLLEdBQUc7Z0JBQ3hCQyxZQUFZSTtZQUNkO1FBQ0YsQ0FBQztJQUNIO0lBRUEsU0FBU0MsVUFBVUMsQ0FBQyxFQUFFO1FBQ3BCLElBQUlBLE1BQU0sR0FBRztZQUNYLE9BQU87UUFDVCxPQUNLLElBQUlBLE1BQU0sR0FBRztZQUNoQixPQUFPO1FBQ1QsT0FDSyxJQUFJQSxNQUFNLEdBQUc7WUFDaEIsT0FBTztRQUNULE9BQ0s7WUFDSCxPQUFPO1FBQ1QsQ0FBQztJQUNIO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7O1lBQ1pOLGVBQWVBLFlBQVlPLEdBQUcsQ0FBQyxDQUFDQyxTQUFTSixrQkFDeEMsOERBQUNYLG1EQUFLQTtvQkFDSmEsV0FBWTtvQkFDWkcsS0FBSyx1Q0FBdUNEO29CQUU1Q0UsS0FBSTtvQkFDSkMsT0FBTztvQkFDUEMsUUFBUTttQkFISFI7Ozs7OzBCQU9ULDhEQUFDUztnQkFBT1AsV0FBVTtnQkFBNERRLFNBQVMsSUFBTWIsa0JBQWtCOzBCQUFPOzs7Ozs7MEJBQ3RILDhEQUFDWTtnQkFBT1AsV0FBVTtnQkFBNkRRLFNBQVMsSUFBTWIsa0JBQWtCOzBCQUFPOzs7Ozs7Ozs7Ozs7QUFHN0g7R0E5RFNQO0tBQUFBO0FBZ0VULCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2xvYmFsL0ltYWdlU2xpZGVyL1NsaWRlci5qcz8wYWNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVRyYW5zaXRpb24sIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2xpZGVyQ29udGVudCBmcm9tICcuL1NsaWRlckNvbnRlbnQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIFNsaWRlcigpIHtcclxuXHJcbiAgY29uc3QgW2luZGV4T2JqLCBzZXRJbmRleE9ial0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpbmRleDogMCxcclxuICAgIGluZGV4U2hpZnQ6IFwiMFwiXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgdHJhbnNpdGlvblJlZiA9IHVzZVJlZigpXHJcblxyXG4gIGxldCBjb250ZW50VXJscyA9IFNsaWRlckNvbnRlbnQoaW5kZXhPYmopXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb250ZW50VXJscyA9IFNsaWRlckNvbnRlbnQoaW5kZXhPYmopXHJcbiAgfSwgW2luZGV4T2JqXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUluZGV4Q2hhbmdlKGUpIHtcclxuICAgIGlmIChlID09PSAnLTEnKSB7XHJcbiAgICAgIHNldEluZGV4T2JqKHtcclxuICAgICAgICBpbmRleDogaW5kZXhPYmouaW5kZXggLSAxLFxyXG4gICAgICAgIGluZGV4U2hpZnQ6IGVcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGUgPT09ICcrMScpIHtcclxuICAgICAgc2V0SW5kZXhPYmooe1xyXG4gICAgICAgIGluZGV4OiBpbmRleE9iai5pbmRleCArIDEsXHJcbiAgICAgICAgaW5kZXhTaGlmdDogZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2FsY1NoaWZ0KGkpIHtcclxuICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBcImxlZnQtWy0xMDB2d11cIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaSA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gXCJsZWZ0LVswdnddXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGkgPT09IDIpIHtcclxuICAgICAgcmV0dXJuIFwibGVmdC1bMTAwdnddXCJcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJsZWZ0LVswdnddXCJcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgaC04MCB3LXNjcmVlbiBtYXJnaW4teC0wIG1hcmdpbi15LWF1dG8gZmxleCBib3gtYm9yZGVyIG92ZXJmbG93LWhpZGRlbic+XHJcbiAgICAgIHtjb250ZW50VXJscyAmJiBjb250ZW50VXJscy5tYXAoKHNyY0RhdGEsIGkpID0+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2B3LXNjcmVlbiBoLTgwIG9iamVjdC1jb3ZlciB0cmFuc2l0aW9uIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMTAwIGFjdGl2ZTp0cmFuc2xhdGUteC0xMDBgfVxyXG4gICAgICAgICAgc3JjPXtcIi8uLi9wdWJsaWMvYXNzZXRzL0ltYWdlU2xpZGVyVGVzdC9cIiArIHNyY0RhdGF9XHJcbiAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICBhbHQ9XCJzb21lIGFsdCBjb250ZW50XCJcclxuICAgICAgICAgIHdpZHRoPXsxNTAwfVxyXG4gICAgICAgICAgaGVpZ2h0PXsxNTAwfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICApfVxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXdoaXRlIGgtMTYgdy0xNiB0b3AtMCBib3R0b20tMCBteS1hdXRvIGFic29sdXRlIGxlZnQtMFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUluZGV4Q2hhbmdlKFwiLTFcIil9Pi0xPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctd2hpdGUgaC0xNiB3LTE2IHRvcC0wIGJvdHRvbS0wIG15LWF1dG8gYWJzb2x1dGUgcmlnaHQtMFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUluZGV4Q2hhbmdlKFwiKzFcIil9PisxPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlciJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVRyYW5zaXRpb24iLCJ1c2VSZWYiLCJTbGlkZXJDb250ZW50IiwiSW1hZ2UiLCJTbGlkZXIiLCJpbmRleE9iaiIsInNldEluZGV4T2JqIiwiaW5kZXgiLCJpbmRleFNoaWZ0IiwidHJhbnNpdGlvblJlZiIsImNvbnRlbnRVcmxzIiwiaGFuZGxlSW5kZXhDaGFuZ2UiLCJlIiwiY2FsY1NoaWZ0IiwiaSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInNyY0RhdGEiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/global/ImageSlider/Slider.js\n"));

/***/ })

});