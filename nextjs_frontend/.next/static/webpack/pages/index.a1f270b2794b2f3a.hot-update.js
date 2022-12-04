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

/***/ "./components/global/ImageSlider-v2/ImageSlider.js":
/*!*********************************************************!*\
  !*** ./components/global/ImageSlider-v2/ImageSlider.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst images = [\n    \"https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80\",\n    \"https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80\",\n    \"https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80\"\n];\n// images must be an array of urls , if using Next JS this could something like\n// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']\n// images must be an array of urls , if using Next JS this could something like\n// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']\nfunction Carousel() {\n    _s();\n    // We will start by storing the index of the current image in the state.\n    const [currentImage, setCurrentImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // We are using react ref to 'tag' each of the images. Below will create an array of\n    // objects with numbered keys. We will use those numbers (i) later to access a ref of a\n    // specific image in this array.\n    const refs = images.reduce((acc, val, i)=>{\n        acc[i] = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n        return acc;\n    }, {});\n    const scrollToImage = (i)=>{\n        // First let's set the index of the image we want to see next\n        setCurrentImage(i);\n        // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,\n        // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into\n        // your current view! To do so we pass an index of the image, which is then use to identify our current\n        // image's ref in 'refs' array above.\n        refs[i].current.scrollIntoView({\n            //     Defines the transition animation.\n            behavior: \"smooth\",\n            //      Defines vertical alignment.\n            block: \"nearest\",\n            //      Defines horizontal alignment.\n            inline: \"start\"\n        });\n    };\n    // Some validation for checking the array length could be added if needed\n    const totalImages = images.length;\n    // Below functions will assure that after last image we'll scroll back to the start,\n    // or another way round - first to last in previousImage method.\n    const nextImage = ()=>{\n        if (currentImage >= totalImages - 1) {\n            scrollToImage(0);\n        } else {\n            scrollToImage(currentImage + 1);\n        }\n    };\n    const previousImage = ()=>{\n        if (currentImage === 0) {\n            scrollToImage(totalImages - 1);\n        } else {\n            scrollToImage(currentImage - 1);\n        }\n    };\n    // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.\n    const arrowStyle = \"absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center\";\n    // Let's create dynamic buttons. It can be either left or right. Using\n    // isLeft boolean we can determine which side we'll be rendering our button\n    // as well as change its position and content.\n    const sliderControl = (isLeft)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            onClick: isLeft ? previousImage : nextImage,\n            className: \"\".concat(arrowStyle, \" \").concat(isLeft ? \"left-2\" : \"right-2\"),\n            style: {\n                top: \"40%\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                role: \"img\",\n                \"aria-label\": \"Arrow \".concat(isLeft ? \"left\" : \"right\"),\n                children: isLeft ? \"◀\" : \"▶\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Sanity_NextJS_BlogPage\\\\nextjs_frontend\\\\components\\\\global\\\\ImageSlider-v2\\\\ImageSlider.js\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Sanity_NextJS_BlogPage\\\\nextjs_frontend\\\\components\\\\global\\\\ImageSlider-v2\\\\ImageSlider.js\",\n            lineNumber: 73,\n            columnNumber: 9\n        }, this);\n    return(// Images are placed using inline flex. We then wrap an image in a div\n    // with flex-shrink-0 to stop it from 'shrinking' to fit the outer div.\n    // Finally the image itself will be 100% of a parent div. Outer div is\n    // set with position relative, so we can place our cotrol buttons using\n    // absolute positioning on each side of the image.\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center w-screen md:w-1/2 items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative w-full\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"carousel inline-flex overflow-hidden snap-x snap-mandatory\",\n                children: [\n                    sliderControl(true),\n                    images.map((img, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full flex-shrink-0 \",\n                            ref: refs[i],\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: img,\n                                className: \"w-full object-cover\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Sanity_NextJS_BlogPage\\\\nextjs_frontend\\\\components\\\\global\\\\ImageSlider-v2\\\\ImageSlider.js\",\n                                lineNumber: 97,\n                                columnNumber: 33\n                            }, this)\n                        }, img, false, {\n                            fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Sanity_NextJS_BlogPage\\\\nextjs_frontend\\\\components\\\\global\\\\ImageSlider-v2\\\\ImageSlider.js\",\n                            lineNumber: 96,\n                            columnNumber: 29\n                        }, this)),\n                    sliderControl()\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Sanity_NextJS_BlogPage\\\\nextjs_frontend\\\\components\\\\global\\\\ImageSlider-v2\\\\ImageSlider.js\",\n                lineNumber: 93,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Sanity_NextJS_BlogPage\\\\nextjs_frontend\\\\components\\\\global\\\\ImageSlider-v2\\\\ImageSlider.js\",\n            lineNumber: 92,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lucas\\\\Documents\\\\GitHub\\\\Sanity_NextJS_BlogPage\\\\nextjs_frontend\\\\components\\\\global\\\\ImageSlider-v2\\\\ImageSlider.js\",\n        lineNumber: 91,\n        columnNumber: 13\n    }, this));\n}\n_s(Carousel, \"cnc9rbhP80fTHOrqNEzwhjBY+h0=\");\n_c = Carousel;\n;\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dsb2JhbC9JbWFnZVNsaWRlci12Mi9JbWFnZVNsaWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOztBQUFvRDtBQUVwRCxNQUFNRyxTQUFTO0lBQ1g7SUFDQTtJQUNBO0NBQ0g7QUFDRCwrRUFBK0U7QUFDL0UscUVBQXFFO0FBQ3JFLCtFQUErRTtBQUMvRSxxRUFBcUU7QUFHdEQsU0FBU0MsV0FBVzs7SUFDL0Isd0VBQXdFO0lBQ3hFLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFDO0lBRWpELG9GQUFvRjtJQUNwRix1RkFBdUY7SUFDdkYsZ0NBQWdDO0lBQ2hDLE1BQU1PLE9BQU9KLE9BQU9LLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxLQUFLQyxJQUFNO1FBQ3hDRixHQUFHLENBQUNFLEVBQUUsaUJBQUdULGdEQUFTQTtRQUNsQixPQUFPTztJQUNYLEdBQUcsQ0FBQztJQUVKLE1BQU1HLGdCQUFnQkQsQ0FBQUEsSUFBSztRQUN2Qiw2REFBNkQ7UUFDN0RMLGdCQUFnQks7UUFDaEIsdUZBQXVGO1FBQ3ZGLHNHQUFzRztRQUN0Ryx1R0FBdUc7UUFDdkcscUNBQXFDO1FBQ3JDSixJQUFJLENBQUNJLEVBQUUsQ0FBQ0UsT0FBTyxDQUFDQyxjQUFjLENBQUM7WUFDM0Isd0NBQXdDO1lBQ3hDQyxVQUFVO1lBQ1YsbUNBQW1DO1lBQ25DQyxPQUFPO1lBQ1AscUNBQXFDO1lBQ3JDQyxRQUFRO1FBQ1o7SUFDSjtJQUVBLHlFQUF5RTtJQUN6RSxNQUFNQyxjQUFjZixPQUFPZ0IsTUFBTTtJQUVqQyxvRkFBb0Y7SUFDcEYsZ0VBQWdFO0lBQ2hFLE1BQU1DLFlBQVksSUFBTTtRQUNwQixJQUFJZixnQkFBZ0JhLGNBQWMsR0FBRztZQUNqQ04sY0FBYztRQUNsQixPQUFPO1lBQ0hBLGNBQWNQLGVBQWU7UUFDakMsQ0FBQztJQUNMO0lBRUEsTUFBTWdCLGdCQUFnQixJQUFNO1FBQ3hCLElBQUloQixpQkFBaUIsR0FBRztZQUNwQk8sY0FBY00sY0FBYztRQUNoQyxPQUFPO1lBQ0hOLGNBQWNQLGVBQWU7UUFDakMsQ0FBQztJQUNMO0lBRUEsa0hBQWtIO0lBQ2xILE1BQU1pQixhQUNGO0lBRUosc0VBQXNFO0lBQ3RFLDJFQUEyRTtJQUMzRSw4Q0FBOEM7SUFDOUMsTUFBTUMsZ0JBQWdCQyxDQUFBQSx1QkFDbEIsOERBQUNDO1lBQ0dDLE1BQUs7WUFDTEMsU0FBU0gsU0FBU0gsZ0JBQWdCRCxTQUFTO1lBQzNDUSxXQUFXLEdBQWlCSixPQUFkRixZQUFXLEtBQWlDLE9BQTlCRSxTQUFTLFdBQVcsU0FBUztZQUN6REssT0FBTztnQkFBRUMsS0FBSztZQUFNO3NCQUVwQiw0RUFBQ0M7Z0JBQUtDLE1BQUs7Z0JBQU1DLGNBQVksU0FBbUMsT0FBMUJULFNBQVMsU0FBUyxPQUFPOzBCQUMxREEsU0FBUyxNQUFNLEdBQUc7Ozs7Ozs7Ozs7O0lBSy9CLE9BQ0ksc0VBQXNFO0lBQ3RFLHVFQUF1RTtJQUN2RSxzRUFBc0U7SUFDdEUsdUVBQXVFO0lBQ3ZFLGtEQUFrRDtrQkFDOUMsOERBQUNVO1FBQUlOLFdBQVU7a0JBQ1gsNEVBQUNNO1lBQUlOLFdBQVU7c0JBQ1gsNEVBQUNNO2dCQUFJTixXQUFVOztvQkFDVkwsY0FBYyxJQUFJO29CQUNsQnBCLE9BQU9nQyxHQUFHLENBQUMsQ0FBQ0MsS0FBS3pCLGtCQUNkLDhEQUFDdUI7NEJBQUlOLFdBQVU7NEJBQWtDUyxLQUFLOUIsSUFBSSxDQUFDSSxFQUFFO3NDQUN6RCw0RUFBQ3lCO2dDQUFJRSxLQUFLRjtnQ0FBS1IsV0FBVTs7Ozs7OzJCQURlUTs7Ozs7b0JBSS9DYjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekIsQ0FBQztHQTFGdUJuQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dsb2JhbC9JbWFnZVNsaWRlci12Mi9JbWFnZVNsaWRlci5qcz8xZjMyIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCBjcmVhdGVSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGltYWdlcyA9IFtcclxuICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwNjUwMTEzOTE3NC0wOTkwMjJkZjUyNjA/aXhsaWI9cmItMS4yLjEmaXhpZD1NWHd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh3JTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTM1MSZxPTgwJyxcclxuICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyMzQzODA5NzIwMS01MTJhZTdkNTljNDQ/aXhsaWI9cmItMS4yLjEmaXhpZD1NWHd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh3JTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTM1MCZxPTgwJyxcclxuICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxMzAyNjcwNTc1My1iYzNmZmZjYThiZjQ/aXhsaWI9cmItMS4yLjEmaXhpZD1NWHd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh3JTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTM1MCZxPTgwJ1xyXG5dXHJcbi8vIGltYWdlcyBtdXN0IGJlIGFuIGFycmF5IG9mIHVybHMgLCBpZiB1c2luZyBOZXh0IEpTIHRoaXMgY291bGQgc29tZXRoaW5nIGxpa2VcclxuLy8gY29uc3QgaW1hZ2VzID0gWycvaW1nL2ltZzEucG5nJywgJy9pbWcvaW1nMi5wbmcnLCAnL2ltZy9pbWczLnBuZyddXHJcbi8vIGltYWdlcyBtdXN0IGJlIGFuIGFycmF5IG9mIHVybHMgLCBpZiB1c2luZyBOZXh0IEpTIHRoaXMgY291bGQgc29tZXRoaW5nIGxpa2VcclxuLy8gY29uc3QgaW1hZ2VzID0gWycvaW1nL2ltZzEucG5nJywgJy9pbWcvaW1nMi5wbmcnLCAnL2ltZy9pbWczLnBuZyddXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2Fyb3VzZWwoKSB7XHJcbiAgICAvLyBXZSB3aWxsIHN0YXJ0IGJ5IHN0b3JpbmcgdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IGltYWdlIGluIHRoZSBzdGF0ZS5cclxuICAgIGNvbnN0IFtjdXJyZW50SW1hZ2UsIHNldEN1cnJlbnRJbWFnZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICAvLyBXZSBhcmUgdXNpbmcgcmVhY3QgcmVmIHRvICd0YWcnIGVhY2ggb2YgdGhlIGltYWdlcy4gQmVsb3cgd2lsbCBjcmVhdGUgYW4gYXJyYXkgb2ZcclxuICAgIC8vIG9iamVjdHMgd2l0aCBudW1iZXJlZCBrZXlzLiBXZSB3aWxsIHVzZSB0aG9zZSBudW1iZXJzIChpKSBsYXRlciB0byBhY2Nlc3MgYSByZWYgb2YgYVxyXG4gICAgLy8gc3BlY2lmaWMgaW1hZ2UgaW4gdGhpcyBhcnJheS5cclxuICAgIGNvbnN0IHJlZnMgPSBpbWFnZXMucmVkdWNlKChhY2MsIHZhbCwgaSkgPT4ge1xyXG4gICAgICAgIGFjY1tpXSA9IGNyZWF0ZVJlZigpO1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCB7fSk7XHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsVG9JbWFnZSA9IGkgPT4ge1xyXG4gICAgICAgIC8vIEZpcnN0IGxldCdzIHNldCB0aGUgaW5kZXggb2YgdGhlIGltYWdlIHdlIHdhbnQgdG8gc2VlIG5leHRcclxuICAgICAgICBzZXRDdXJyZW50SW1hZ2UoaSk7XHJcbiAgICAgICAgLy8gTm93LCB0aGlzIGlzIHdoZXJlIHRoZSBtYWdpYyBoYXBwZW5zLiBXZSAndGFnZ2VkJyBlYWNoIG9uZSBvZiB0aGUgaW1hZ2VzIHdpdGggYSByZWYsXHJcbiAgICAgICAgLy8gd2UgY2FuIHRoZW4gdXNlIGJ1aWx0LWluIHNjcm9sbEludG9WaWV3IEFQSSB0byBkbyBlYXhhY3RseSB3aGF0IGl0IHNheXMgb24gdGhlIGJveCAtIHNjcm9sbCBpdCBpbnRvXHJcbiAgICAgICAgLy8geW91ciBjdXJyZW50IHZpZXchIFRvIGRvIHNvIHdlIHBhc3MgYW4gaW5kZXggb2YgdGhlIGltYWdlLCB3aGljaCBpcyB0aGVuIHVzZSB0byBpZGVudGlmeSBvdXIgY3VycmVudFxyXG4gICAgICAgIC8vIGltYWdlJ3MgcmVmIGluICdyZWZzJyBhcnJheSBhYm92ZS5cclxuICAgICAgICByZWZzW2ldLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgICAgICAvLyAgICAgRGVmaW5lcyB0aGUgdHJhbnNpdGlvbiBhbmltYXRpb24uXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgICAgICAgICAgLy8gICAgICBEZWZpbmVzIHZlcnRpY2FsIGFsaWdubWVudC5cclxuICAgICAgICAgICAgYmxvY2s6ICduZWFyZXN0JyxcclxuICAgICAgICAgICAgLy8gICAgICBEZWZpbmVzIGhvcml6b250YWwgYWxpZ25tZW50LlxyXG4gICAgICAgICAgICBpbmxpbmU6ICdzdGFydCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNvbWUgdmFsaWRhdGlvbiBmb3IgY2hlY2tpbmcgdGhlIGFycmF5IGxlbmd0aCBjb3VsZCBiZSBhZGRlZCBpZiBuZWVkZWRcclxuICAgIGNvbnN0IHRvdGFsSW1hZ2VzID0gaW1hZ2VzLmxlbmd0aDtcclxuXHJcbiAgICAvLyBCZWxvdyBmdW5jdGlvbnMgd2lsbCBhc3N1cmUgdGhhdCBhZnRlciBsYXN0IGltYWdlIHdlJ2xsIHNjcm9sbCBiYWNrIHRvIHRoZSBzdGFydCxcclxuICAgIC8vIG9yIGFub3RoZXIgd2F5IHJvdW5kIC0gZmlyc3QgdG8gbGFzdCBpbiBwcmV2aW91c0ltYWdlIG1ldGhvZC5cclxuICAgIGNvbnN0IG5leHRJbWFnZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudEltYWdlID49IHRvdGFsSW1hZ2VzIC0gMSkge1xyXG4gICAgICAgICAgICBzY3JvbGxUb0ltYWdlKDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvSW1hZ2UoY3VycmVudEltYWdlICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwcmV2aW91c0ltYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50SW1hZ2UgPT09IDApIHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9JbWFnZSh0b3RhbEltYWdlcyAtIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvSW1hZ2UoY3VycmVudEltYWdlIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBUYWlsd2luZCBzdHlsZXMuIE1vc3QgaW1wb3J0YW50bHkgbm90aWNlIHBvc2l0aW9uIGFic29sdXRlLCB0aGlzIHdpbGwgc2l0IHJlbGF0aXZlIHRvIHRoZSBjYXJvdXNlbCdzIG91dGVyIGRpdi5cclxuICAgIGNvbnN0IGFycm93U3R5bGUgPVxyXG4gICAgICAgICdhYnNvbHV0ZSB0ZXh0LXdoaXRlIHRleHQtMnhsIHotMTAgYmctYmxhY2sgaC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBvcGFjaXR5LTc1IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJztcclxuXHJcbiAgICAvLyBMZXQncyBjcmVhdGUgZHluYW1pYyBidXR0b25zLiBJdCBjYW4gYmUgZWl0aGVyIGxlZnQgb3IgcmlnaHQuIFVzaW5nXHJcbiAgICAvLyBpc0xlZnQgYm9vbGVhbiB3ZSBjYW4gZGV0ZXJtaW5lIHdoaWNoIHNpZGUgd2UnbGwgYmUgcmVuZGVyaW5nIG91ciBidXR0b25cclxuICAgIC8vIGFzIHdlbGwgYXMgY2hhbmdlIGl0cyBwb3NpdGlvbiBhbmQgY29udGVudC5cclxuICAgIGNvbnN0IHNsaWRlckNvbnRyb2wgPSBpc0xlZnQgPT4gKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2lzTGVmdCA/IHByZXZpb3VzSW1hZ2UgOiBuZXh0SW1hZ2V9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YXJyb3dTdHlsZX0gJHtpc0xlZnQgPyAnbGVmdC0yJyA6ICdyaWdodC0yJ31gfVxyXG4gICAgICAgICAgICBzdHlsZT17eyB0b3A6ICc0MCUnIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD17YEFycm93ICR7aXNMZWZ0ID8gJ2xlZnQnIDogJ3JpZ2h0J31gfT5cclxuICAgICAgICAgICAgICAgIHtpc0xlZnQgPyAn4peAJyA6ICfilrYnfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gSW1hZ2VzIGFyZSBwbGFjZWQgdXNpbmcgaW5saW5lIGZsZXguIFdlIHRoZW4gd3JhcCBhbiBpbWFnZSBpbiBhIGRpdlxyXG4gICAgICAgIC8vIHdpdGggZmxleC1zaHJpbmstMCB0byBzdG9wIGl0IGZyb20gJ3Nocmlua2luZycgdG8gZml0IHRoZSBvdXRlciBkaXYuXHJcbiAgICAgICAgLy8gRmluYWxseSB0aGUgaW1hZ2UgaXRzZWxmIHdpbGwgYmUgMTAwJSBvZiBhIHBhcmVudCBkaXYuIE91dGVyIGRpdiBpc1xyXG4gICAgICAgIC8vIHNldCB3aXRoIHBvc2l0aW9uIHJlbGF0aXZlLCBzbyB3ZSBjYW4gcGxhY2Ugb3VyIGNvdHJvbCBidXR0b25zIHVzaW5nXHJcbiAgICAgICAgLy8gYWJzb2x1dGUgcG9zaXRpb25pbmcgb24gZWFjaCBzaWRlIG9mIHRoZSBpbWFnZS5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctc2NyZWVuIG1kOnctMS8yIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsIGlubGluZS1mbGV4IG92ZXJmbG93LWhpZGRlbiBzbmFwLXggc25hcC1tYW5kYXRvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NsaWRlckNvbnRyb2wodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbWFnZXMubWFwKChpbWcsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgtc2hyaW5rLTAgXCIga2V5PXtpbWd9IHJlZj17cmVmc1tpXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ30gY2xhc3NOYW1lPVwidy1mdWxsIG9iamVjdC1jb3ZlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzbGlkZXJDb250cm9sKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsImNyZWF0ZVJlZiIsImltYWdlcyIsIkNhcm91c2VsIiwiY3VycmVudEltYWdlIiwic2V0Q3VycmVudEltYWdlIiwicmVmcyIsInJlZHVjZSIsImFjYyIsInZhbCIsImkiLCJzY3JvbGxUb0ltYWdlIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImlubGluZSIsInRvdGFsSW1hZ2VzIiwibGVuZ3RoIiwibmV4dEltYWdlIiwicHJldmlvdXNJbWFnZSIsImFycm93U3R5bGUiLCJzbGlkZXJDb250cm9sIiwiaXNMZWZ0IiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJzdHlsZSIsInRvcCIsInNwYW4iLCJyb2xlIiwiYXJpYS1sYWJlbCIsImRpdiIsIm1hcCIsImltZyIsInJlZiIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/global/ImageSlider-v2/ImageSlider.js\n"));

/***/ })

});