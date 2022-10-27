"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/jokes",{

/***/ "./pages/jokes/index.jsx":
/*!*******************************!*\
  !*** ./pages/jokes/index.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ jokes; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Joke__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Joke */ \"./pages/components/Joke.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSP = true;\nfunction jokes(props) {\n    _s();\n    const [jokes, setJokes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.jokes);\n    const [likes, setLikes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const newJokes = [];\n    let timer = null;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedlikes = window.localStorage.getItem(\"likes\");\n        if (storedlikes != null) setLikes(JSON.parse(storedlikes));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.localStorage.setItem(\"likes\", JSON.stringify(likes));\n    }, [\n        likes\n    ]);\n    const addToLikes = (joke)=>{\n        if (likes.filter((like)=>like.id == joke.id).length !== 1 && likes.length < 10) {\n            //add liked element\n            joke.liked = true;\n            //add joke to likes\n            setLikes([\n                ...likes,\n                joke\n            ]);\n        }\n    };\n    const removeFromLikes = (joketoberemoved)=>{\n        joketoberemoved.liked = false;\n        setLikes(likes.filter((joke)=>joke.id !== joketoberemoved.id));\n    };\n    const fillTimer = ()=>{\n        fillLikes();\n        timer = setInterval(fillLikes, 1000);\n    };\n    const fillLikes = async ()=>{\n        if ([\n            ...likes,\n            ...newJokes\n        ].length < 10) {\n            const res = await fetch(\"https://api.chucknorris.io/jokes/random\");\n            const joke = await res.json();\n            //add liked value\n            joke.liked = true;\n            //create array for new jokes\n            newJokes.push(joke);\n            //add to likes\n            setLikes([\n                ...likes,\n                ...newJokes\n            ]);\n        } else {\n            clearInterval(timer);\n            setLikes([\n                ...likes,\n                ...newJokes\n            ]);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: jokes.map((joke)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Joke__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        joke: joke,\n                        addToLikes: addToLikes,\n                        removeFromLikes: removeFromLikes\n                    }, joke.id, false, {\n                        fileName: \"/Users/matthias.andriessen/projects/chucknorris-app/chuck-norris-app/pages/jokes/index.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/matthias.andriessen/projects/chucknorris-app/chuck-norris-app/pages/jokes/index.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Likes\"\n            }, void 0, false, {\n                fileName: \"/Users/matthias.andriessen/projects/chucknorris-app/chuck-norris-app/pages/jokes/index.jsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: fillTimer,\n                children: \"Vul automatisch\"\n            }, void 0, false, {\n                fileName: \"/Users/matthias.andriessen/projects/chucknorris-app/chuck-norris-app/pages/jokes/index.jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                children: likes.map((joke)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Joke__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        joke: joke,\n                        addToLikes: addToLikes,\n                        removeFromLikes: removeFromLikes\n                    }, joke.id, false, {\n                        fileName: \"/Users/matthias.andriessen/projects/chucknorris-app/chuck-norris-app/pages/jokes/index.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/matthias.andriessen/projects/chucknorris-app/chuck-norris-app/pages/jokes/index.jsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/matthias.andriessen/projects/chucknorris-app/chuck-norris-app/pages/jokes/index.jsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(jokes, \"YWTrxXc8kgU16MjNjZO41qgxBHo=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9qb2tlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUE0QztBQUVOOztBQUV2QixTQUFTRyxNQUFNQyxLQUFLLEVBQUU7O0lBQ25DLE1BQU0sQ0FBQ0QsT0FBT0UsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQ0csTUFBTUQsS0FBSztJQUM5QyxNQUFNLENBQUNHLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNTyxXQUFXLEVBQUU7SUFDbkIsSUFBSUMsUUFBUSxJQUFJO0lBRWhCVCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVUsY0FBY0MsT0FBT0MsWUFBWSxDQUFDQyxPQUFPLENBQUM7UUFDaEQsSUFBSUgsZUFBZSxJQUFJLEVBQUVILFNBQVNPLEtBQUtDLEtBQUssQ0FBQ0w7SUFDL0MsR0FBRyxFQUFFO0lBRUxWLGdEQUFTQSxDQUFDLElBQU07UUFDZFcsT0FBT0MsWUFBWSxDQUFDSSxPQUFPLENBQUMsU0FBU0YsS0FBS0csU0FBUyxDQUFDWDtJQUN0RCxHQUFHO1FBQUNBO0tBQU07SUFFVixNQUFNWSxhQUFhLENBQUNDLE9BQVM7UUFDM0IsSUFDRWIsTUFBTWMsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLEVBQUUsSUFBSUgsS0FBS0csRUFBRSxFQUFFQyxNQUFNLEtBQUssS0FDdERqQixNQUFNaUIsTUFBTSxHQUFHLElBQ2Y7WUFDQSxtQkFBbUI7WUFDbkJKLEtBQUtLLEtBQUssR0FBRyxJQUFJO1lBQ2pCLG1CQUFtQjtZQUNuQmpCLFNBQVM7bUJBQUlEO2dCQUFPYTthQUFLO1FBQzNCLENBQUM7SUFDSDtJQUVBLE1BQU1NLGtCQUFrQixDQUFDQyxrQkFBb0I7UUFDM0NBLGdCQUFnQkYsS0FBSyxHQUFHLEtBQUs7UUFDN0JqQixTQUFTRCxNQUFNYyxNQUFNLENBQUMsQ0FBQ0QsT0FBU0EsS0FBS0csRUFBRSxLQUFLSSxnQkFBZ0JKLEVBQUU7SUFDaEU7SUFFQSxNQUFNSyxZQUFZLElBQU07UUFDdEJDO1FBQ0FuQixRQUFRb0IsWUFBWUQsV0FBVztJQUNqQztJQUVBLE1BQU1BLFlBQVksVUFBWTtRQUM1QixJQUFJO2VBQUl0QjtlQUFVRTtTQUFTLENBQUNlLE1BQU0sR0FBRyxJQUFJO1lBQ3ZDLE1BQU1PLE1BQU0sTUFBTUMsTUFBTztZQUN6QixNQUFNWixPQUFPLE1BQU1XLElBQUlFLElBQUk7WUFFM0IsaUJBQWlCO1lBQ2pCYixLQUFLSyxLQUFLLEdBQUcsSUFBSTtZQUNqQiw0QkFBNEI7WUFDNUJoQixTQUFTeUIsSUFBSSxDQUFDZDtZQUNkLGNBQWM7WUFDZFosU0FBUzttQkFBSUQ7bUJBQVVFO2FBQVM7UUFDbEMsT0FBTztZQUNMMEIsY0FBY3pCO1lBQ2RGLFNBQVM7bUJBQUlEO21CQUFVRTthQUFTO1FBQ2xDLENBQUM7SUFDSDtJQUVBLHFCQUNFLDhEQUFDMkI7OzBCQUNDLDhEQUFDQzswQkFDRWpDLE1BQU1rQyxHQUFHLENBQUMsQ0FBQ2xCLHFCQUNWLDhEQUFDakIsd0RBQUlBO3dCQUVIaUIsTUFBTUE7d0JBQ05ELFlBQVlBO3dCQUNaTyxpQkFBaUJBO3VCQUhaTixLQUFLRyxFQUFFOzs7Ozs7Ozs7OzBCQVFsQiw4REFBQ2dCOzBCQUFHOzs7Ozs7MEJBRUosOERBQUNDO2dCQUFPQyxTQUFTYjswQkFBVzs7Ozs7OzBCQUU1Qiw4REFBQ2M7MEJBQ0VuQyxNQUFNK0IsR0FBRyxDQUFDLENBQUNsQixxQkFDViw4REFBQ2pCLHdEQUFJQTt3QkFFSGlCLE1BQU1BO3dCQUNORCxZQUFZQTt3QkFDWk8saUJBQWlCQTt1QkFIWk4sS0FBS0csRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQVN4QixDQUFDO0dBbkZ1Qm5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2pva2VzL2luZGV4LmpzeD83NDUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEpva2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvSm9rZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBqb2tlcyhwcm9wcykge1xuICBjb25zdCBbam9rZXMsIHNldEpva2VzXSA9IHVzZVN0YXRlKHByb3BzLmpva2VzKTtcbiAgY29uc3QgW2xpa2VzLCBzZXRMaWtlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IG5ld0pva2VzID0gW107XG4gIGxldCB0aW1lciA9IG51bGw7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdG9yZWRsaWtlcyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpa2VzXCIpO1xuICAgIGlmIChzdG9yZWRsaWtlcyAhPSBudWxsKSBzZXRMaWtlcyhKU09OLnBhcnNlKHN0b3JlZGxpa2VzKSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpa2VzXCIsIEpTT04uc3RyaW5naWZ5KGxpa2VzKSk7XG4gIH0sIFtsaWtlc10pO1xuXG4gIGNvbnN0IGFkZFRvTGlrZXMgPSAoam9rZSkgPT4ge1xuICAgIGlmIChcbiAgICAgIGxpa2VzLmZpbHRlcigobGlrZSkgPT4gbGlrZS5pZCA9PSBqb2tlLmlkKS5sZW5ndGggIT09IDEgJiZcbiAgICAgIGxpa2VzLmxlbmd0aCA8IDEwXG4gICAgKSB7XG4gICAgICAvL2FkZCBsaWtlZCBlbGVtZW50XG4gICAgICBqb2tlLmxpa2VkID0gdHJ1ZTtcbiAgICAgIC8vYWRkIGpva2UgdG8gbGlrZXNcbiAgICAgIHNldExpa2VzKFsuLi5saWtlcywgam9rZV0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW1vdmVGcm9tTGlrZXMgPSAoam9rZXRvYmVyZW1vdmVkKSA9PiB7XG4gICAgam9rZXRvYmVyZW1vdmVkLmxpa2VkID0gZmFsc2U7XG4gICAgc2V0TGlrZXMobGlrZXMuZmlsdGVyKChqb2tlKSA9PiBqb2tlLmlkICE9PSBqb2tldG9iZXJlbW92ZWQuaWQpKTtcbiAgfTtcblxuICBjb25zdCBmaWxsVGltZXIgPSAoKSA9PiB7XG4gICAgZmlsbExpa2VzKCk7XG4gICAgdGltZXIgPSBzZXRJbnRlcnZhbChmaWxsTGlrZXMsIDEwMDApO1xuICB9O1xuXG4gIGNvbnN0IGZpbGxMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoWy4uLmxpa2VzLCAuLi5uZXdKb2tlc10ubGVuZ3RoIDwgMTApIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5jaHVja25vcnJpcy5pby9qb2tlcy9yYW5kb21gKTtcbiAgICAgIGNvbnN0IGpva2UgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgICAvL2FkZCBsaWtlZCB2YWx1ZVxuICAgICAgam9rZS5saWtlZCA9IHRydWU7XG4gICAgICAvL2NyZWF0ZSBhcnJheSBmb3IgbmV3IGpva2VzXG4gICAgICBuZXdKb2tlcy5wdXNoKGpva2UpO1xuICAgICAgLy9hZGQgdG8gbGlrZXNcbiAgICAgIHNldExpa2VzKFsuLi5saWtlcywgLi4ubmV3Sm9rZXNdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICBzZXRMaWtlcyhbLi4ubGlrZXMsIC4uLm5ld0pva2VzXSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDx1bD5cbiAgICAgICAge2pva2VzLm1hcCgoam9rZSkgPT4gKFxuICAgICAgICAgIDxKb2tlXG4gICAgICAgICAgICBrZXk9e2pva2UuaWR9XG4gICAgICAgICAgICBqb2tlPXtqb2tlfVxuICAgICAgICAgICAgYWRkVG9MaWtlcz17YWRkVG9MaWtlc31cbiAgICAgICAgICAgIHJlbW92ZUZyb21MaWtlcz17cmVtb3ZlRnJvbUxpa2VzfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cblxuICAgICAgPGgyPkxpa2VzPC9oMj5cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmaWxsVGltZXJ9PlZ1bCBhdXRvbWF0aXNjaDwvYnV0dG9uPlxuXG4gICAgICA8b2w+XG4gICAgICAgIHtsaWtlcy5tYXAoKGpva2UpID0+IChcbiAgICAgICAgICA8Sm9rZVxuICAgICAgICAgICAga2V5PXtqb2tlLmlkfVxuICAgICAgICAgICAgam9rZT17am9rZX1cbiAgICAgICAgICAgIGFkZFRvTGlrZXM9e2FkZFRvTGlrZXN9XG4gICAgICAgICAgICByZW1vdmVGcm9tTGlrZXM9e3JlbW92ZUZyb21MaWtlc31cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvb2w+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGxldCBqb2tlcyA9IFtdO1xuICBjb25zdCBudW1iZXJvZmpva2VzID0gMTU7XG5cbiAgLy9Db3VsZCB1c2UgYSBtYXAgZnVuY3Rpb25cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJvZmpva2VzOyBpKyspIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuY2h1Y2tub3JyaXMuaW8vam9rZXMvcmFuZG9tYCk7XG4gICAgY29uc3Qgam9rZSA9IHJlcy5qc29uKCk7XG5cbiAgICAvL2FkZCBsaWtlIGtleVxuICAgIGpva2UubGlrZWQgPSBmYWxzZTtcblxuICAgIGpva2VzLnB1c2goam9rZSk7XG4gIH1cblxuICAvLyBQYXNzIGRhdGEgdG8gdGhlIHBhZ2UgdmlhIHByb3BzXG4gIHJldHVybiB7IHByb3BzOiB7IGpva2VzIH0gfTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkpva2UiLCJqb2tlcyIsInByb3BzIiwic2V0Sm9rZXMiLCJsaWtlcyIsInNldExpa2VzIiwibmV3Sm9rZXMiLCJ0aW1lciIsInN0b3JlZGxpa2VzIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhZGRUb0xpa2VzIiwiam9rZSIsImZpbHRlciIsImxpa2UiLCJpZCIsImxlbmd0aCIsImxpa2VkIiwicmVtb3ZlRnJvbUxpa2VzIiwiam9rZXRvYmVyZW1vdmVkIiwiZmlsbFRpbWVyIiwiZmlsbExpa2VzIiwic2V0SW50ZXJ2YWwiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJwdXNoIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsInVsIiwibWFwIiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwib2wiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/jokes/index.jsx\n"));

/***/ })

});