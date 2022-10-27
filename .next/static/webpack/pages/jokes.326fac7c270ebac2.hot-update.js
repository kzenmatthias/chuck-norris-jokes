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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Jokes; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Joke__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Joke */ \"./pages/components/Joke.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSP = true;\n//destructor\nfunction Jokes(param) {\n    let { apiJokes  } = param;\n    _s();\n    const [jokes, setJokes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(apiJokes);\n    const [likes, setLikes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const newJokes = [];\n    let timer = null;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedlikes = window.localStorage.getItem(\"likes\");\n        if (storedlikes != null) setLikes(JSON.parse(storedlikes));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.localStorage.setItem(\"likes\", JSON.stringify(likes));\n    }, [\n        likes\n    ]);\n    const addToLikes = (joke)=>{\n        if (likes.filter((like)=>like.id == joke.id).length !== 1 && likes.length < 10) {\n            //add liked element\n            joke.liked = true;\n            //add joke to likes\n            setLikes([\n                ...likes,\n                joke\n            ]);\n        }\n    };\n    const removeFromLikes = (jokeToBeRemoved)=>{\n        jokeToBeRemoved.liked = false;\n        setLikes(likes.filter((joke)=>joke.id !== jokeToBeRemoved.id));\n    };\n    const fillTimer = ()=>{\n        fillLikes();\n        timer = setInterval(fillLikes, 2000);\n    };\n    //Wort gerund ondanks het wachten op call !!!\n    const fillLikes = async ()=>{\n        const oldJokes = [\n            ...likes\n        ];\n        if (likes.length < 10) {\n            const res = await fetch(\"https://api.chucknorris.io/jokes/random\");\n            const newJoke = await res.json();\n            //add liked value\n            newJoke.liked = true;\n            //create array for new jokes\n            // newJokes.push(joke);\n            const newJokes1 = [\n                ...oldJokes,\n                newJoke\n            ];\n            //add to likes\n            setLikes(newJokes1);\n            console.log(likes);\n            console.log(newJokes1);\n        } else {\n            clearInterval(timer);\n            setLikes([\n                ...likes,\n                ...newJokes\n            ]);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: jokes.map((joke)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Joke__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        joke: joke,\n                        addToLikes: addToLikes,\n                        removeFromLikes: removeFromLikes\n                    }, joke.id, false, {\n                        fileName: \"/Users/matthias.andriessen/projects/chucknorris-app/chuck-norris-app/pages/jokes/index.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/matthias.andriessen/projects/chucknorris-app/chuck-norris-app/pages/jokes/index.jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Likes\"\n            }, void 0, false, {\n                fileName: \"/Users/matthias.andriessen/projects/chucknorris-app/chuck-norris-app/pages/jokes/index.jsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: fillTimer,\n                children: \"Vul automatisch\"\n            }, void 0, false, {\n                fileName: \"/Users/matthias.andriessen/projects/chucknorris-app/chuck-norris-app/pages/jokes/index.jsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                children: likes.map((joke)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Joke__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        joke: joke,\n                        addToLikes: addToLikes,\n                        removeFromLikes: removeFromLikes\n                    }, joke.id, false, {\n                        fileName: \"/Users/matthias.andriessen/projects/chucknorris-app/chuck-norris-app/pages/jokes/index.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/matthias.andriessen/projects/chucknorris-app/chuck-norris-app/pages/jokes/index.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/matthias.andriessen/projects/chucknorris-app/chuck-norris-app/pages/jokes/index.jsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(Jokes, \"1/oSCH+vgB6ENaaa4EKgR89hHiA=\");\n_c = Jokes;\nvar _c;\n$RefreshReg$(_c, \"Jokes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9qb2tlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUE0QztBQUVOOztBQUV0QyxZQUFZO0FBQ0csU0FBU0csTUFBTSxLQUFZLEVBQUU7UUFBZCxFQUFFQyxTQUFRLEVBQUUsR0FBWjs7SUFDNUIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDRztJQUNuQyxNQUFNLENBQUNHLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNUSxXQUFXLEVBQUU7SUFDbkIsSUFBSUMsUUFBUSxJQUFJO0lBRWhCVixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVcsY0FBY0MsT0FBT0MsWUFBWSxDQUFDQyxPQUFPLENBQUM7UUFDaEQsSUFBSUgsZUFBZSxJQUFJLEVBQUVILFNBQVNPLEtBQUtDLEtBQUssQ0FBQ0w7SUFDL0MsR0FBRyxFQUFFO0lBRUxYLGdEQUFTQSxDQUFDLElBQU07UUFDZFksT0FBT0MsWUFBWSxDQUFDSSxPQUFPLENBQUMsU0FBU0YsS0FBS0csU0FBUyxDQUFDWDtJQUN0RCxHQUFHO1FBQUNBO0tBQU07SUFFVixNQUFNWSxhQUFhLENBQUNDLE9BQVM7UUFDM0IsSUFDRWIsTUFBTWMsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLEVBQUUsSUFBSUgsS0FBS0csRUFBRSxFQUFFQyxNQUFNLEtBQUssS0FDdERqQixNQUFNaUIsTUFBTSxHQUFHLElBQ2Y7WUFDQSxtQkFBbUI7WUFDbkJKLEtBQUtLLEtBQUssR0FBRyxJQUFJO1lBQ2pCLG1CQUFtQjtZQUNuQmpCLFNBQVM7bUJBQUlEO2dCQUFPYTthQUFLO1FBQzNCLENBQUM7SUFDSDtJQUVBLE1BQU1NLGtCQUFrQixDQUFDQyxrQkFBb0I7UUFDM0NBLGdCQUFnQkYsS0FBSyxHQUFHLEtBQUs7UUFDN0JqQixTQUFTRCxNQUFNYyxNQUFNLENBQUMsQ0FBQ0QsT0FBU0EsS0FBS0csRUFBRSxLQUFLSSxnQkFBZ0JKLEVBQUU7SUFDaEU7SUFFQSxNQUFNSyxZQUFZLElBQU07UUFDdEJDO1FBQ0FuQixRQUFRb0IsWUFBWUQsV0FBVztJQUNqQztJQUVBLDZDQUE2QztJQUM3QyxNQUFNQSxZQUFZLFVBQVk7UUFDNUIsTUFBTUUsV0FBVztlQUFJeEI7U0FBTTtRQUUzQixJQUFJQSxNQUFNaUIsTUFBTSxHQUFHLElBQUk7WUFDckIsTUFBTVEsTUFBTSxNQUFNQyxNQUFPO1lBQ3pCLE1BQU1DLFVBQVUsTUFBTUYsSUFBSUcsSUFBSTtZQUU5QixpQkFBaUI7WUFDakJELFFBQVFULEtBQUssR0FBRyxJQUFJO1lBQ3BCLDRCQUE0QjtZQUM1Qix1QkFBdUI7WUFFdkIsTUFBTWhCLFlBQVc7bUJBQUlzQjtnQkFBVUc7YUFBUTtZQUV2QyxjQUFjO1lBQ2QxQixTQUFTQztZQUNUMkIsUUFBUUMsR0FBRyxDQUFDOUI7WUFDWjZCLFFBQVFDLEdBQUcsQ0FBQzVCO1FBQ2QsT0FBTztZQUNMNkIsY0FBYzVCO1lBQ2RGLFNBQVM7bUJBQUlEO21CQUFVRTthQUFTO1FBQ2xDLENBQUM7SUFDSDtJQUVBLHFCQUNFLDhEQUFDOEI7OzBCQUNDLDhEQUFDQzswQkFDRW5DLE1BQU1vQyxHQUFHLENBQUMsQ0FBQ3JCLHFCQUNWLDhEQUFDbEIsd0RBQUlBO3dCQUVIa0IsTUFBTUE7d0JBQ05ELFlBQVlBO3dCQUNaTyxpQkFBaUJBO3VCQUhaTixLQUFLRyxFQUFFOzs7Ozs7Ozs7OzBCQVFsQiw4REFBQ21COzBCQUFHOzs7Ozs7MEJBRUosOERBQUNDO2dCQUFPQyxTQUFTaEI7MEJBQVc7Ozs7OzswQkFFNUIsOERBQUNpQjswQkFDRXRDLE1BQU1rQyxHQUFHLENBQUMsQ0FBQ3JCLHFCQUNWLDhEQUFDbEIsd0RBQUlBO3dCQUVIa0IsTUFBTUE7d0JBQ05ELFlBQVlBO3dCQUNaTyxpQkFBaUJBO3VCQUhaTixLQUFLRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBU3hCLENBQUM7R0EzRnVCcEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvam9rZXMvaW5kZXguanN4Pzc0NTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgSm9rZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Kb2tlXCI7XG5cbi8vZGVzdHJ1Y3RvclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSm9rZXMoeyBhcGlKb2tlcyB9KSB7XG4gIGNvbnN0IFtqb2tlcywgc2V0Sm9rZXNdID0gdXNlU3RhdGUoYXBpSm9rZXMpO1xuICBjb25zdCBbbGlrZXMsIHNldExpa2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgbmV3Sm9rZXMgPSBbXTtcbiAgbGV0IHRpbWVyID0gbnVsbDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlZGxpa2VzID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlrZXNcIik7XG4gICAgaWYgKHN0b3JlZGxpa2VzICE9IG51bGwpIHNldExpa2VzKEpTT04ucGFyc2Uoc3RvcmVkbGlrZXMpKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlrZXNcIiwgSlNPTi5zdHJpbmdpZnkobGlrZXMpKTtcbiAgfSwgW2xpa2VzXSk7XG5cbiAgY29uc3QgYWRkVG9MaWtlcyA9IChqb2tlKSA9PiB7XG4gICAgaWYgKFxuICAgICAgbGlrZXMuZmlsdGVyKChsaWtlKSA9PiBsaWtlLmlkID09IGpva2UuaWQpLmxlbmd0aCAhPT0gMSAmJlxuICAgICAgbGlrZXMubGVuZ3RoIDwgMTBcbiAgICApIHtcbiAgICAgIC8vYWRkIGxpa2VkIGVsZW1lbnRcbiAgICAgIGpva2UubGlrZWQgPSB0cnVlO1xuICAgICAgLy9hZGQgam9rZSB0byBsaWtlc1xuICAgICAgc2V0TGlrZXMoWy4uLmxpa2VzLCBqb2tlXSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUZyb21MaWtlcyA9IChqb2tlVG9CZVJlbW92ZWQpID0+IHtcbiAgICBqb2tlVG9CZVJlbW92ZWQubGlrZWQgPSBmYWxzZTtcbiAgICBzZXRMaWtlcyhsaWtlcy5maWx0ZXIoKGpva2UpID0+IGpva2UuaWQgIT09IGpva2VUb0JlUmVtb3ZlZC5pZCkpO1xuICB9O1xuXG4gIGNvbnN0IGZpbGxUaW1lciA9ICgpID0+IHtcbiAgICBmaWxsTGlrZXMoKTtcbiAgICB0aW1lciA9IHNldEludGVydmFsKGZpbGxMaWtlcywgMjAwMCk7XG4gIH07XG5cbiAgLy9Xb3J0IGdlcnVuZCBvbmRhbmtzIGhldCB3YWNodGVuIG9wIGNhbGwgISEhXG4gIGNvbnN0IGZpbGxMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBvbGRKb2tlcyA9IFsuLi5saWtlc107XG5cbiAgICBpZiAobGlrZXMubGVuZ3RoIDwgMTApIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5jaHVja25vcnJpcy5pby9qb2tlcy9yYW5kb21gKTtcbiAgICAgIGNvbnN0IG5ld0pva2UgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgICAvL2FkZCBsaWtlZCB2YWx1ZVxuICAgICAgbmV3Sm9rZS5saWtlZCA9IHRydWU7XG4gICAgICAvL2NyZWF0ZSBhcnJheSBmb3IgbmV3IGpva2VzXG4gICAgICAvLyBuZXdKb2tlcy5wdXNoKGpva2UpO1xuXG4gICAgICBjb25zdCBuZXdKb2tlcyA9IFsuLi5vbGRKb2tlcywgbmV3Sm9rZV07XG5cbiAgICAgIC8vYWRkIHRvIGxpa2VzXG4gICAgICBzZXRMaWtlcyhuZXdKb2tlcyk7XG4gICAgICBjb25zb2xlLmxvZyhsaWtlcyk7XG4gICAgICBjb25zb2xlLmxvZyhuZXdKb2tlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgc2V0TGlrZXMoWy4uLmxpa2VzLCAuLi5uZXdKb2tlc10pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8dWw+XG4gICAgICAgIHtqb2tlcy5tYXAoKGpva2UpID0+IChcbiAgICAgICAgICA8Sm9rZVxuICAgICAgICAgICAga2V5PXtqb2tlLmlkfVxuICAgICAgICAgICAgam9rZT17am9rZX1cbiAgICAgICAgICAgIGFkZFRvTGlrZXM9e2FkZFRvTGlrZXN9XG4gICAgICAgICAgICByZW1vdmVGcm9tTGlrZXM9e3JlbW92ZUZyb21MaWtlc31cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG5cbiAgICAgIDxoMj5MaWtlczwvaDI+XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17ZmlsbFRpbWVyfT5WdWwgYXV0b21hdGlzY2g8L2J1dHRvbj5cblxuICAgICAgPG9sPlxuICAgICAgICB7bGlrZXMubWFwKChqb2tlKSA9PiAoXG4gICAgICAgICAgPEpva2VcbiAgICAgICAgICAgIGtleT17am9rZS5pZH1cbiAgICAgICAgICAgIGpva2U9e2pva2V9XG4gICAgICAgICAgICBhZGRUb0xpa2VzPXthZGRUb0xpa2VzfVxuICAgICAgICAgICAgcmVtb3ZlRnJvbUxpa2VzPXtyZW1vdmVGcm9tTGlrZXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L29sPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBsZXQgYXBpSm9rZXMgPSBbXTtcbiAgY29uc3QgbnVtYmVyb2Zqb2tlcyA9IDE1O1xuXG4gIC8vQ291bGQgdXNlIGEgbWFwIGZ1bmN0aW9uXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyb2Zqb2tlczsgaSsrKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmNodWNrbm9ycmlzLmlvL2pva2VzL3JhbmRvbWApO1xuICAgIGNvbnN0IGpva2UgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgLy9hZGQgbGlrZSBrZXlcbiAgICBqb2tlLmxpa2VkID0gZmFsc2U7XG5cbiAgICBhcGlKb2tlcy5wdXNoKGpva2UpO1xuICB9XG5cbiAgLy8gUGFzcyBkYXRhIHRvIHRoZSBwYWdlIHZpYSBwcm9wc1xuICByZXR1cm4geyBwcm9wczogeyBhcGlKb2tlcyB9IH07XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJKb2tlIiwiSm9rZXMiLCJhcGlKb2tlcyIsImpva2VzIiwic2V0Sm9rZXMiLCJsaWtlcyIsInNldExpa2VzIiwibmV3Sm9rZXMiLCJ0aW1lciIsInN0b3JlZGxpa2VzIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhZGRUb0xpa2VzIiwiam9rZSIsImZpbHRlciIsImxpa2UiLCJpZCIsImxlbmd0aCIsImxpa2VkIiwicmVtb3ZlRnJvbUxpa2VzIiwiam9rZVRvQmVSZW1vdmVkIiwiZmlsbFRpbWVyIiwiZmlsbExpa2VzIiwic2V0SW50ZXJ2YWwiLCJvbGRKb2tlcyIsInJlcyIsImZldGNoIiwibmV3Sm9rZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsInVsIiwibWFwIiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwib2wiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/jokes/index.jsx\n"));

/***/ })

});