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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Jokes; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Joke__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Joke */ \"./pages/components/Joke.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSP = true;\n//destructor\nfunction Jokes(param) {\n    let { apiJokes  } = param;\n    _s();\n    const [jokes, setJokes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(apiJokes);\n    const [likes, setLikes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const newJokes = [];\n    let timer = null;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedlikes = window.localStorage.getItem(\"likes\");\n        if (storedlikes != null) setLikes(JSON.parse(storedlikes));\n    }, []);\n    // useEffect(() => {\n    //   console.log(\"likes\");\n    // }, [likes]);\n    const addToLikes = (joke)=>{\n        if (likes.filter((like)=>like.id == joke.id).length !== 1 && likes.length < 10) {\n            //add liked element\n            joke.liked = true;\n            //add joke to likes\n            setLikes([\n                ...likes,\n                joke\n            ]);\n            //add to storage\n            window.localStorage.setItem(\"likes\", JSON.stringify(likes));\n        }\n    };\n    const removeFromLikes = (jokeToBeRemoved)=>{\n        jokeToBeRemoved.liked = false;\n        setLikes(likes.filter((joke)=>joke.id !== jokeToBeRemoved.id));\n    };\n    const fillTimer = ()=>{\n        fillLikes();\n        timer = setInterval(fillLikes, 2000);\n    };\n    //Wort gerund ondanks het wachten op call !!!\n    const fillLikes = async ()=>{\n        const oldJokes = [\n            ...likes\n        ];\n        if (likes.length < 10) {\n            const res = await fetch(\"https://api.chucknorris.io/jokes/random\");\n            const newJoke = await res.json();\n            //add liked value\n            newJoke.liked = true;\n            //create array for new jokes\n            // newJokes.push(joke);\n            const newJokes = [\n                ...oldJokes,\n                newJoke\n            ];\n            //add to likes\n            setLikes(newJokes);\n            console.log(likes);\n            console.log(newJokes);\n        } else {\n            clearInterval(timer);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: jokes.map((joke)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Joke__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        joke: joke,\n                        addToLikes: addToLikes,\n                        removeFromLikes: removeFromLikes\n                    }, joke.id, false, {\n                        fileName: \"/Users/matthias.andriessen/projects/chucknorris-app/chuck-norris-app/pages/jokes/index.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/matthias.andriessen/projects/chucknorris-app/chuck-norris-app/pages/jokes/index.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Likes\"\n            }, void 0, false, {\n                fileName: \"/Users/matthias.andriessen/projects/chucknorris-app/chuck-norris-app/pages/jokes/index.jsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: fillTimer,\n                children: \"Vul automatisch\"\n            }, void 0, false, {\n                fileName: \"/Users/matthias.andriessen/projects/chucknorris-app/chuck-norris-app/pages/jokes/index.jsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                children: likes.map((joke)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Joke__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        joke: joke,\n                        addToLikes: addToLikes,\n                        removeFromLikes: removeFromLikes\n                    }, joke.id, false, {\n                        fileName: \"/Users/matthias.andriessen/projects/chucknorris-app/chuck-norris-app/pages/jokes/index.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/matthias.andriessen/projects/chucknorris-app/chuck-norris-app/pages/jokes/index.jsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/matthias.andriessen/projects/chucknorris-app/chuck-norris-app/pages/jokes/index.jsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(Jokes, \"JNo5NsoI/e5Wss7rm55WE7/Q5I8=\");\n_c = Jokes;\nvar _c;\n$RefreshReg$(_c, \"Jokes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEpva2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvSm9rZVwiO1xuXG4vL2Rlc3RydWN0b3JcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEpva2VzKHsgYXBpSm9rZXMgfSkge1xuICBjb25zdCBbam9rZXMsIHNldEpva2VzXSA9IHVzZVN0YXRlKGFwaUpva2VzKTtcbiAgY29uc3QgW2xpa2VzLCBzZXRMaWtlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IG5ld0pva2VzID0gW107XG4gIGxldCB0aW1lciA9IG51bGw7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdG9yZWRsaWtlcyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpa2VzXCIpO1xuICAgIGlmIChzdG9yZWRsaWtlcyAhPSBudWxsKSBzZXRMaWtlcyhKU09OLnBhcnNlKHN0b3JlZGxpa2VzKSk7XG4gIH0sIFtdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKFwibGlrZXNcIik7XG4gIC8vIH0sIFtsaWtlc10pO1xuXG4gIGNvbnN0IGFkZFRvTGlrZXMgPSAoam9rZSkgPT4ge1xuICAgIGlmIChcbiAgICAgIGxpa2VzLmZpbHRlcigobGlrZSkgPT4gbGlrZS5pZCA9PSBqb2tlLmlkKS5sZW5ndGggIT09IDEgJiZcbiAgICAgIGxpa2VzLmxlbmd0aCA8IDEwXG4gICAgKSB7XG4gICAgICAvL2FkZCBsaWtlZCBlbGVtZW50XG4gICAgICBqb2tlLmxpa2VkID0gdHJ1ZTtcbiAgICAgIC8vYWRkIGpva2UgdG8gbGlrZXNcbiAgICAgIHNldExpa2VzKFsuLi5saWtlcywgam9rZV0pO1xuICAgICAgLy9hZGQgdG8gc3RvcmFnZVxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlrZXNcIiwgSlNPTi5zdHJpbmdpZnkobGlrZXMpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlRnJvbUxpa2VzID0gKGpva2VUb0JlUmVtb3ZlZCkgPT4ge1xuICAgIGpva2VUb0JlUmVtb3ZlZC5saWtlZCA9IGZhbHNlO1xuICAgIHNldExpa2VzKGxpa2VzLmZpbHRlcigoam9rZSkgPT4gam9rZS5pZCAhPT0gam9rZVRvQmVSZW1vdmVkLmlkKSk7XG4gIH07XG5cbiAgY29uc3QgZmlsbFRpbWVyID0gKCkgPT4ge1xuICAgIGZpbGxMaWtlcygpO1xuICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoZmlsbExpa2VzLCAyMDAwKTtcbiAgfTtcblxuICAvL1dvcnQgZ2VydW5kIG9uZGFua3MgaGV0IHdhY2h0ZW4gb3AgY2FsbCAhISFcbiAgY29uc3QgZmlsbExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG9sZEpva2VzID0gWy4uLmxpa2VzXTtcblxuICAgIGlmIChsaWtlcy5sZW5ndGggPCAxMCkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmNodWNrbm9ycmlzLmlvL2pva2VzL3JhbmRvbWApO1xuICAgICAgY29uc3QgbmV3Sm9rZSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICAgIC8vYWRkIGxpa2VkIHZhbHVlXG4gICAgICBuZXdKb2tlLmxpa2VkID0gdHJ1ZTtcbiAgICAgIC8vY3JlYXRlIGFycmF5IGZvciBuZXcgam9rZXNcbiAgICAgIC8vIG5ld0pva2VzLnB1c2goam9rZSk7XG5cbiAgICAgIGNvbnN0IG5ld0pva2VzID0gWy4uLm9sZEpva2VzLCBuZXdKb2tlXTtcblxuICAgICAgLy9hZGQgdG8gbGlrZXNcbiAgICAgIHNldExpa2VzKG5ld0pva2VzKTtcbiAgICAgIGNvbnNvbGUubG9nKGxpa2VzKTtcbiAgICAgIGNvbnNvbGUubG9nKG5ld0pva2VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDx1bD5cbiAgICAgICAge2pva2VzLm1hcCgoam9rZSkgPT4gKFxuICAgICAgICAgIDxKb2tlXG4gICAgICAgICAgICBrZXk9e2pva2UuaWR9XG4gICAgICAgICAgICBqb2tlPXtqb2tlfVxuICAgICAgICAgICAgYWRkVG9MaWtlcz17YWRkVG9MaWtlc31cbiAgICAgICAgICAgIHJlbW92ZUZyb21MaWtlcz17cmVtb3ZlRnJvbUxpa2VzfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cblxuICAgICAgPGgyPkxpa2VzPC9oMj5cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmaWxsVGltZXJ9PlZ1bCBhdXRvbWF0aXNjaDwvYnV0dG9uPlxuXG4gICAgICA8b2w+XG4gICAgICAgIHtsaWtlcy5tYXAoKGpva2UpID0+IChcbiAgICAgICAgICA8Sm9rZVxuICAgICAgICAgICAga2V5PXtqb2tlLmlkfVxuICAgICAgICAgICAgam9rZT17am9rZX1cbiAgICAgICAgICAgIGFkZFRvTGlrZXM9e2FkZFRvTGlrZXN9XG4gICAgICAgICAgICByZW1vdmVGcm9tTGlrZXM9e3JlbW92ZUZyb21MaWtlc31cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvb2w+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGxldCBhcGlKb2tlcyA9IFtdO1xuICBjb25zdCBudW1iZXJvZmpva2VzID0gMTU7XG5cbiAgLy9Db3VsZCB1c2UgYSBtYXAgZnVuY3Rpb25cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJvZmpva2VzOyBpKyspIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuY2h1Y2tub3JyaXMuaW8vam9rZXMvcmFuZG9tYCk7XG4gICAgY29uc3Qgam9rZSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICAvL2FkZCBsaWtlIGtleVxuICAgIGpva2UubGlrZWQgPSBmYWxzZTtcblxuICAgIGFwaUpva2VzLnB1c2goam9rZSk7XG4gIH1cblxuICAvLyBQYXNzIGRhdGEgdG8gdGhlIHBhZ2UgdmlhIHByb3BzXG4gIHJldHVybiB7IHByb3BzOiB7IGFwaUpva2VzIH0gfTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkpva2UiLCJKb2tlcyIsImFwaUpva2VzIiwiam9rZXMiLCJzZXRKb2tlcyIsImxpa2VzIiwic2V0TGlrZXMiLCJuZXdKb2tlcyIsInRpbWVyIiwic3RvcmVkbGlrZXMiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiYWRkVG9MaWtlcyIsImpva2UiLCJmaWx0ZXIiLCJsaWtlIiwiaWQiLCJsZW5ndGgiLCJsaWtlZCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZW1vdmVGcm9tTGlrZXMiLCJqb2tlVG9CZVJlbW92ZWQiLCJmaWxsVGltZXIiLCJmaWxsTGlrZXMiLCJzZXRJbnRlcnZhbCIsIm9sZEpva2VzIiwicmVzIiwiZmV0Y2giLCJuZXdKb2tlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJjbGVhckludGVydmFsIiwiZGl2IiwidWwiLCJtYXAiLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/jokes/index.jsx\n"));

/***/ })

});