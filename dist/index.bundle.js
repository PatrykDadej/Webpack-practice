"use strict";
(self["webpackChunkuntitled_folder_3"] =
  self["webpackChunkuntitled_folder_3"] || []).push([
  ["index"],
  {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__
          );
        // Imports

        var ___CSS_LOADER_URL_IMPORT_0___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ../fonts/Roboto-Regular.ttf */ "./fonts/Roboto-Regular.ttf"
          ),
          __webpack_require__.b
        );
        var ___CSS_LOADER_URL_IMPORT_1___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ../fonts/Roboto-Medium.ttf */ "./fonts/Roboto-Medium.ttf"
          ),
          __webpack_require__.b
        );
        var ___CSS_LOADER_URL_IMPORT_2___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ../fonts/TiltWarp-Regular.ttf */ "./fonts/TiltWarp-Regular.ttf"
          ),
          __webpack_require__.b
        );
        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        var ___CSS_LOADER_URL_REPLACEMENT_0___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_0___
          );
        var ___CSS_LOADER_URL_REPLACEMENT_1___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_1___
          );
        var ___CSS_LOADER_URL_REPLACEMENT_2___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_2___
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          "@font-face {\n  font-family: 'MyFont';\n  src: url(" +
            ___CSS_LOADER_URL_REPLACEMENT_0___ +
            ") format('ttf'),\n    url(" +
            ___CSS_LOADER_URL_REPLACEMENT_1___ +
            ") format('ttf');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Warp';\n    src:url(" +
            ___CSS_LOADER_URL_REPLACEMENT_2___ +
            ");\n  font-weight: 600;\n  font-style: normal;\n}\n\n\n* {\nbox-sizing: border-box;\npadding: 0px;\nmargin: 0px;\n\n}\n\nhtml {\n  font-family: 'Warp';\n  background-color: #ffe7de;\n}\n\n.hello {\n    color: red;\n  }\n\n.navBarDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  background-color: #e9b1cd;\n}\n\nbutton {\n  font-size: 20px;\n  flex:1;\n  padding: 10px 0px;\n  border: none;\n  background-color: rgba(0,0,0,0) ;\n  cursor: pointer;\n  font-family: 'Warp';\n  font-weight: bold;\n}\n\nbutton:hover { \n  background-color: \t#8d5e72;\n  color: white;\n}\n\n.headerDiv {\n  color: #562135;\n  padding: 10px 5px;\n  display: flex;\n  justify-content: center;\n  background-color:#c3829e;\n  font-size: 50px;\n  font-style: italic;\n  letter-spacing: 10px;\n  text-align: center;\n}\n\n.mainDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.contentArea {\n  width: 50%;\n}\n\n.pageHeader {\nfont-family: 'Warp';\n  font-size: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 20px 0px;\n}\n\n.homeParagraph {\n  margin: 40px 0px;\n  font-family: 'MyFont';\n  font-size: 20px;\n  \n}\n\nimg {\n  height: 100%;\n  width: 100%;\n  /* opacity: 0.6; */\n  /* object-fit:contain; */\n}\n\n.overlayColor {\n  display: flex;\n  /* flex: 1; */\n  /* height: 250px; */\n  /* background: rgba(233, 177, 205); */\n  /* overflow: hidden; */\n\n}\n\n.dishDiv {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap:5px;\n  border: 1px solid rgba(86, 33, 53,0.2);\n  margin-bottom: 25px;\n  text-align: center;\n}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA;EACE,qBAAqB;EACrB;yDACiD;EACjD,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;IACjB,2CAAwC;EAC1C,gBAAgB;EAChB,kBAAkB;AACpB;;;AAGA;AACA,sBAAsB;AACtB,YAAY;AACZ,WAAW;;AAEX;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;IACI,UAAU;EACZ;;AAEF;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,MAAM;EACN,iBAAiB;EACjB,YAAY;EACZ,gCAAgC;EAChC,eAAe;EACf,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,wBAAwB;EACxB,eAAe;EACf,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,UAAU;AACZ;;AAEA;AACA,mBAAmB;EACjB,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,eAAe;;AAEjB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,qCAAqC;EACrC,sBAAsB;;AAExB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,OAAO;EACP,sCAAsC;EACtC,mBAAmB;EACnB,kBAAkB;AACpB",
            sourcesContent: [
              "@font-face {\n  font-family: 'MyFont';\n  src: url('../fonts/Roboto-Regular.ttf') format('ttf'),\n    url('../fonts/Roboto-Medium.ttf') format('ttf');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Warp';\n    src:url('../fonts/TiltWarp-Regular.ttf');\n  font-weight: 600;\n  font-style: normal;\n}\n\n\n* {\nbox-sizing: border-box;\npadding: 0px;\nmargin: 0px;\n\n}\n\nhtml {\n  font-family: 'Warp';\n  background-color: #ffe7de;\n}\n\n.hello {\n    color: red;\n  }\n\n.navBarDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  background-color: #e9b1cd;\n}\n\nbutton {\n  font-size: 20px;\n  flex:1;\n  padding: 10px 0px;\n  border: none;\n  background-color: rgba(0,0,0,0) ;\n  cursor: pointer;\n  font-family: 'Warp';\n  font-weight: bold;\n}\n\nbutton:hover { \n  background-color: \t#8d5e72;\n  color: white;\n}\n\n.headerDiv {\n  color: #562135;\n  padding: 10px 5px;\n  display: flex;\n  justify-content: center;\n  background-color:#c3829e;\n  font-size: 50px;\n  font-style: italic;\n  letter-spacing: 10px;\n  text-align: center;\n}\n\n.mainDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.contentArea {\n  width: 50%;\n}\n\n.pageHeader {\nfont-family: 'Warp';\n  font-size: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 20px 0px;\n}\n\n.homeParagraph {\n  margin: 40px 0px;\n  font-family: 'MyFont';\n  font-size: 20px;\n  \n}\n\nimg {\n  height: 100%;\n  width: 100%;\n  /* opacity: 0.6; */\n  /* object-fit:contain; */\n}\n\n.overlayColor {\n  display: flex;\n  /* flex: 1; */\n  /* height: 250px; */\n  /* background: rgba(233, 177, 205); */\n  /* overflow: hidden; */\n\n}\n\n.dishDiv {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap:5px;\n  border: 1px solid rgba(86, 33, 53,0.2);\n  margin-bottom: 25px;\n  text-align: center;\n}",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
        module.exports = function (cssWithMappingToString) {
          var list = [];

          // return the list of modules as css string
          list.toString = function toString() {
            return this.map(function (item) {
              var content = "";
              var needLayer = typeof item[5] !== "undefined";
              if (item[4]) {
                content += "@supports (".concat(item[4], ") {");
              }
              if (item[2]) {
                content += "@media ".concat(item[2], " {");
              }
              if (needLayer) {
                content += "@layer".concat(
                  item[5].length > 0 ? " ".concat(item[5]) : "",
                  " {"
                );
              }
              content += cssWithMappingToString(item);
              if (needLayer) {
                content += "}";
              }
              if (item[2]) {
                content += "}";
              }
              if (item[4]) {
                content += "}";
              }
              return content;
            }).join("");
          };

          // import a list of modules into the list
          list.i = function i(modules, media, dedupe, supports, layer) {
            if (typeof modules === "string") {
              modules = [[null, modules, undefined]];
            }
            var alreadyImportedModules = {};
            if (dedupe) {
              for (var k = 0; k < this.length; k++) {
                var id = this[k][0];
                if (id != null) {
                  alreadyImportedModules[id] = true;
                }
              }
            }
            for (var _k = 0; _k < modules.length; _k++) {
              var item = [].concat(modules[_k]);
              if (dedupe && alreadyImportedModules[item[0]]) {
                continue;
              }
              if (typeof layer !== "undefined") {
                if (typeof item[5] === "undefined") {
                  item[5] = layer;
                } else {
                  item[1] = "@layer"
                    .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                    .concat(item[1], "}");
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media "
                    .concat(item[2], " {")
                    .concat(item[1], "}");
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports ("
                    .concat(item[4], ") {")
                    .concat(item[1], "}");
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
      /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
      /***/ (module) => {
        module.exports = function (url, options) {
          if (!options) {
            options = {};
          }
          if (!url) {
            return url;
          }
          url = String(url.__esModule ? url.default : url);

          // If url is already wrapped in quotes, remove them
          if (/^['"].*['"]$/.test(url)) {
            url = url.slice(1, -1);
          }
          if (options.hash) {
            url += options.hash;
          }

          // Should url be wrapped?
          // See https://drafts.csswg.org/css-values-3/#urls
          if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
            return '"'.concat(
              url.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
              '"'
            );
          }
          return url;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === "function") {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            );
            var data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64
              );
            var sourceMapping = "/*# ".concat(data, " */");
            return [content].concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        };

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head"
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        var stylesInDOM = [];

        function getIndexByIdentifier(identifier) {
          var result = -1;

          for (var i = 0; i < stylesInDOM.length; i++) {
            if (stylesInDOM[i].identifier === identifier) {
              result = i;
              break;
            }
          }

          return result;
        }

        function modulesToDom(list, options) {
          var idCountMap = {};
          var identifiers = [];

          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = options.base ? item[0] + options.base : item[0];
            var count = idCountMap[id] || 0;
            var identifier = "".concat(id, " ").concat(count);
            idCountMap[id] = count + 1;
            var indexByIdentifier = getIndexByIdentifier(identifier);
            var obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3],
              supports: item[4],
              layer: item[5],
            };

            if (indexByIdentifier !== -1) {
              stylesInDOM[indexByIdentifier].references++;
              stylesInDOM[indexByIdentifier].updater(obj);
            } else {
              var updater = addElementStyle(obj, options);
              options.byIndex = i;
              stylesInDOM.splice(i, 0, {
                identifier: identifier,
                updater: updater,
                references: 1,
              });
            }

            identifiers.push(identifier);
          }

          return identifiers;
        }

        function addElementStyle(obj, options) {
          var api = options.domAPI(options);
          api.update(obj);

          var updater = function updater(newObj) {
            if (newObj) {
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }

              api.update((obj = newObj));
            } else {
              api.remove();
            }
          };

          return updater;
        }

        module.exports = function (list, options) {
          options = options || {};
          list = list || [];
          var lastIdentifiers = modulesToDom(list, options);
          return function update(newList) {
            newList = newList || [];

            for (var i = 0; i < lastIdentifiers.length; i++) {
              var identifier = lastIdentifiers[i];
              var index = getIndexByIdentifier(identifier);
              stylesInDOM[index].references--;
            }

            var newLastIdentifiers = modulesToDom(newList, options);

            for (var _i = 0; _i < lastIdentifiers.length; _i++) {
              var _identifier = lastIdentifiers[_i];

              var _index = getIndexByIdentifier(_identifier);

              if (stylesInDOM[_index].references === 0) {
                stylesInDOM[_index].updater();

                stylesInDOM.splice(_index, 1);
              }
            }

            lastIdentifiers = newLastIdentifiers;
          };
        };

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        var memo = {};
        /* istanbul ignore next  */

        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
              try {
                // This will throw an exception if access to iframe is blocked
                // due to cross-origin restrictions
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                // istanbul ignore next
                styleTarget = null;
              }
            }

            memo[target] = styleTarget;
          }

          return memo[target];
        }
        /* istanbul ignore next  */

        function insertBySelector(insert, style) {
          var target = getTarget(insert);

          if (!target) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }

          target.appendChild(style);
        }

        module.exports = insertBySelector;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }

        module.exports = insertStyleElement;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;

          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }

        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function apply(styleElement, options, obj) {
          var css = "";

          if (obj.supports) {
            css += "@supports (".concat(obj.supports, ") {");
          }

          if (obj.media) {
            css += "@media ".concat(obj.media, " {");
          }

          var needLayer = typeof obj.layer !== "undefined";

          if (needLayer) {
            css += "@layer".concat(
              obj.layer.length > 0 ? " ".concat(obj.layer) : "",
              " {"
            );
          }

          css += obj.css;

          if (needLayer) {
            css += "}";
          }

          if (obj.media) {
            css += "}";
          }

          if (obj.supports) {
            css += "}";
          }

          var sourceMap = obj.sourceMap;

          if (sourceMap && typeof btoa !== "undefined") {
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */"
              );
          } // For old IE

          /* istanbul ignore if  */

          options.styleTagTransform(css, styleElement, options.options);
        }

        function removeStyleElement(styleElement) {
          // istanbul ignore if
          if (styleElement.parentNode === null) {
            return false;
          }

          styleElement.parentNode.removeChild(styleElement);
        }
        /* istanbul ignore next  */

        function domAPI(options) {
          var styleElement = options.insertStyleElement(options);
          return {
            update: function update(obj) {
              apply(styleElement, options, obj);
            },
            remove: function remove() {
              removeStyleElement(styleElement);
            },
          };
        }

        module.exports = domAPI;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function styleTagTransform(css, styleElement) {
          if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = css;
          } else {
            while (styleElement.firstChild) {
              styleElement.removeChild(styleElement.firstChild);
            }

            styleElement.appendChild(document.createTextNode(css));
          }
        }

        module.exports = styleTagTransform;

        /***/
      },

    /***/ "./src/home.js":
      /*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ createHeader: () => /* binding */ createHeader,
          /* harmony export */ homeLoader: () => /* binding */ homeLoader,
          /* harmony export */
        });
        function createHeader(headerContent) {
          const homeHeaderDiv = document.createElement("div");
          homeHeaderDiv.classList.add("pageHeader");
          const homeHeader = document.createElement("h2");
          homeHeader.textContent = headerContent;

          homeHeaderDiv.appendChild(homeHeader);

          return homeHeaderDiv;
        }

        function createHomeContent() {
          const homeContentDiv = document.createElement("div");

          const homeContent1 = document.createElement("p");
          homeContent1.textContent = `Welcome to our Japanese restaurant, where you can experience the authentic flavors of Japan right 
    in your hometown. Our skilled chefs use only the freshest ingredients to prepare traditional Japanese dishes, such as sushi, ramen, and tempura.
    Whether you're in the mood for a hearty bowl of ramen or a delicate sushi roll, our menu has something to satisfy every craving.`;
          homeContent1.classList.add("homeParagraph");

          const homeContent2 = document.createElement("p");
          homeContent2.textContent = `We also offer a wide selection of sake, beer, and wine to complement your meal.
    At our restaurant, we believe that dining should be an experience, not just a meal. That's why we strive to create an atmosphere that is both welcoming and authentic. 
    From the elegant decor to the friendly service, we want you to feel as though you've been transported to Japan.
    So come and visit us today and discover the flavors of Japan right here at our restaurant. We can't wait to serve you!`;
          homeContent2.classList.add("homeParagraph");

          const homeContent3 = document.createElement("p");
          homeContent3.innerHTML = `To make a reservation or inquire about our menu, please feel free to contact us using the following information: <br><br>
    Phone: 1234567890<br>
    Email: exampleadress@sakurasushi.com<br>
    Address: 46 SomeStreet, SomeCity, A33 A333<br><br>
    We look forward to hearing from you and serving you delicious Japanese cuisine!`;

          homeContent3.classList.add("homeParagraph");

          homeContentDiv.appendChild(homeContent1);
          homeContentDiv.appendChild(homeContent2);
          homeContentDiv.appendChild(homeContent3);
          return homeContentDiv;
        }

        function homeLoader() {
          const mainDiv = document.querySelector(".mainDiv");

          if (document.querySelector(".contentArea")) {
            mainDiv.removeChild(document.querySelector(".contentArea"));
          }

          const mainDivContentArea = document.createElement("div");
          mainDivContentArea.classList.add("contentArea");
          mainDiv.appendChild(mainDivContentArea);

          const header = createHeader("About Us");
          mainDivContentArea.appendChild(header);

          const mainContent = createHomeContent();
          mainDivContentArea.appendChild(mainContent);
        }

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _pageLoader_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./pageLoader.js */ "./src/pageLoader.js");
        /* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./home.js */ "./src/home.js");
        /* harmony import */ var _menuLoader_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./menuLoader.js */ "./src/menuLoader.js");
        /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./style.css */ "./src/style.css");

        (0, _pageLoader_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
        (0, _home_js__WEBPACK_IMPORTED_MODULE_1__.homeLoader)();

        const homeButton = document.querySelector("#homeButton");
        const menuButton = document.querySelector("#menuButton");

        homeButton.addEventListener("click", () => {
          (0, _home_js__WEBPACK_IMPORTED_MODULE_1__.homeLoader)();
        });

        menuButton.addEventListener("click", () => {
          (0, _menuLoader_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        });

        /***/
      },

    /***/ "./src/menuLoader.js":
      /*!***************************!*\
  !*** ./src/menuLoader.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./home.js */ "./src/home.js");

        function createMenuPosition(name, description, pictureURL, price) {
          const dishDiv = document.createElement("div");
          dishDiv.classList.add("dishDiv");

          const dishHeader = document.createElement("h2");
          dishHeader.classList.add("dishHeader");
          dishHeader.textContent = name;
          dishDiv.appendChild(dishHeader);

          const overlayColor = document.createElement("div");
          overlayColor.classList.add("overlayColor");
          const dishPicture = document.createElement("img");
          dishPicture.setAttribute("src", pictureURL);
          overlayColor.appendChild(dishPicture);
          dishDiv.appendChild(overlayColor);

          const dishDescription = document.createElement("p");
          dishDescription.classList.add("dishDescription");
          dishDescription.textContent = description;
          dishDiv.appendChild(dishDescription);

          const dishPrice = document.createElement("p");
          dishPrice.classList.add("dishPrice");
          dishPrice.textContent = price;
          dishDiv.appendChild(dishPrice);

          return dishDiv;
        }

        function addMenuPositions() {
          const allDishesDiv = document.createElement("div");
          const dish1 = createMenuPosition(
            "California Roll",
            "American Style Sushi with Salmon and Avocado",
            "https://img.freepik.com/free-photo/closeup-shot-sushi-roll-black-stone-plate_181624-22537.jpg?w=1060&t=st=1677444667~exp=1677445267~hmac=7eabbec972fd3a7940e3ee209b94c2ea101dbadff3bccdf0432deb8225a3630e",
            "£9.99"
          );
          const dish2 = createMenuPosition(
            "Nigiri",
            "Slice of Fish on Rice",
            "https://img.freepik.com/free-photo/nigiri-sushi-set-with-salmon-tuna-shrimp-prawn-eel-shell_74190-6215.jpg?w=1480&t=st=1677446683~exp=1677447283~hmac=cfe82f0af7492371a26371102ee40838bfb506c71f81ece43f78d7417b6878bd",
            "3.99"
          );
          const dish3 = createMenuPosition(
            "Futomaki",
            "Tuna, Cucumber, Surimi, Omlette Wrapped with Nori Sheet",
            "https://img.freepik.com/free-photo/close-up-futomaki-with-chopsticks_1147-20.jpg?w=900&t=st=1677446888~exp=1677447488~hmac=41d332de3935ca50cf475d2c8d98b8832656a630a66e15495818f9edff53ca36",
            "12.99"
          );
          allDishesDiv.appendChild(dish1);
          allDishesDiv.appendChild(dish2);
          allDishesDiv.appendChild(dish3);

          return allDishesDiv;
        }

        function loadMenu() {
          const mainDiv = document.querySelector(".mainDiv");
          if (document.querySelector(".contentArea")) {
            mainDiv.removeChild(document.querySelector(".contentArea"));
          }
          const mainDivContentArea = document.createElement("div");
          mainDivContentArea.classList.add("contentArea");
          const header = (0,
          _home_js__WEBPACK_IMPORTED_MODULE_0__.createHeader)("Our Menu");
          mainDivContentArea.append(header);
          const menuContent = addMenuPositions();
          mainDivContentArea.appendChild(menuContent);
          mainDiv.appendChild(mainDivContentArea);
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          loadMenu;

        /***/
      },

    /***/ "./src/pageLoader.js":
      /*!***************************!*\
  !*** ./src/pageLoader.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        function createHeader(title) {
          const headerDiv = document.createElement("div");
          headerDiv.classList.add("headerDiv");
          const mainHeader = document.createElement("h1");
          mainHeader.textContent = title;
          headerDiv.appendChild(mainHeader);

          return headerDiv;
        }

        function createNavBar(buttonOne, buttonTwo) {
          const navDiv = document.createElement("div");
          navDiv.classList.add("navBarDiv");
          const firstButton = document.createElement("button");
          firstButton.textContent = buttonOne;
          firstButton.setAttribute("id", "homeButton");

          const secondButton = document.createElement("button");
          secondButton.textContent = buttonTwo;
          secondButton.setAttribute("id", "menuButton");

          navDiv.appendChild(firstButton);
          navDiv.appendChild(secondButton);

          return navDiv;
        }

        function createMainDiv() {
          const mainDiv = document.createElement("div");
          mainDiv.classList.add("mainDiv");
          return mainDiv;
        }

        function loadPage() {
          const contentDivSelector = document.querySelector(".content");
          const header = createHeader("Sakura Sushi");

          contentDivSelector.appendChild(header);

          const navigationBar = createNavBar("Home", "Our Menu");
          contentDivSelector.appendChild(navigationBar);

          const mainDiv = createMainDiv();
          contentDivSelector.appendChild(mainDiv);

          const mainDivContentArea = document.createElement("div");
          mainDivContentArea.classList.add("contentArea");
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          loadPage;

        /***/
      },

    /***/ "./fonts/Roboto-Medium.ttf":
      /*!*********************************!*\
  !*** ./fonts/Roboto-Medium.ttf ***!
  \*********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "7c8d04cd831df3033c8a.ttf";

        /***/
      },

    /***/ "./fonts/Roboto-Regular.ttf":
      /*!**********************************!*\
  !*** ./fonts/Roboto-Regular.ttf ***!
  \**********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

        /***/
      },

    /***/ "./fonts/TiltWarp-Regular.ttf":
      /*!************************************!*\
  !*** ./fonts/TiltWarp-Regular.ttf ***!
  \************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "114dee3c9a42dbe62bec.ttf";

        /***/
      },
  },
  /******/ (__webpack_require__) => {
    // webpackRuntimeModules
    /******/ var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    /******/ var __webpack_exports__ = __webpack_exec__("./src/index.js");
    /******/
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlEdUM7QUFDRjtBQUNFO0FBQ2xCOztBQUVyQiwwREFBUTtBQUNSLHFEQUFVOztBQUVWO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHFEQUFVO0FBQ1osQ0FBQzs7QUFFRDtBQUNBLEVBQUUsMkRBQVE7QUFDVjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCdUM7O0FBRXZDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzREFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FDNUR2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsRUFBRSxpRUFBZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW50aXRsZWQtZm9sZGVyLTMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3VudGl0bGVkLWZvbGRlci0zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZC1mb2xkZXItMy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQtZm9sZGVyLTMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZC1mb2xkZXItMy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly91bnRpdGxlZC1mb2xkZXItMy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZC1mb2xkZXItMy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQtZm9sZGVyLTMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQtZm9sZGVyLTMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQtZm9sZGVyLTMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZC1mb2xkZXItMy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3VudGl0bGVkLWZvbGRlci0zLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQtZm9sZGVyLTMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQtZm9sZGVyLTMvLi9zcmMvbWVudUxvYWRlci5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZC1mb2xkZXItMy8uL3NyYy9wYWdlTG9hZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Sb2JvdG8tTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1RpbHRXYXJwLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3R0ZicpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHRmJyk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnV2FycCc7XFxuICAgIHNyYzp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuXFxuKiB7XFxuYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5wYWRkaW5nOiAwcHg7XFxubWFyZ2luOiAwcHg7XFxuXFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6ICdXYXJwJztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU3ZGU7XFxufVxcblxcbi5oZWxsbyB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICB9XFxuXFxuLm5hdkJhckRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5YjFjZDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZsZXg6MTtcXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKSA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogJ1dhcnAnO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogXFx0IzhkNWU3MjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhlYWRlckRpdiB7XFxuICBjb2xvcjogIzU2MjEzNTtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjojYzM4MjllO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50QXJlYSB7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4ucGFnZUhlYWRlciB7XFxuZm9udC1mYW1pbHk6ICdXYXJwJztcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHggMHB4O1xcbn1cXG5cXG4uaG9tZVBhcmFncmFwaCB7XFxuICBtYXJnaW46IDQwcHggMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgXFxufVxcblxcbmltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIG9wYWNpdHk6IDAuNjsgKi9cXG4gIC8qIG9iamVjdC1maXQ6Y29udGFpbjsgKi9cXG59XFxuXFxuLm92ZXJsYXlDb2xvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogZmxleDogMTsgKi9cXG4gIC8qIGhlaWdodDogMjUwcHg7ICovXFxuICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDIzMywgMTc3LCAyMDUpOyAqL1xcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG5cXG59XFxuXFxuLmRpc2hEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6NXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg4NiwgMzMsIDUzLDAuMik7XFxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCO3lEQUNpRDtFQUNqRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0lBQ2pCLDJDQUF3QztFQUMxQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOzs7QUFHQTtBQUNBLHNCQUFzQjtBQUN0QixZQUFZO0FBQ1osV0FBVzs7QUFFWDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0VBQ1o7O0FBRUY7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0FBQ0EsbUJBQW1CO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLHNCQUFzQjs7QUFFeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsT0FBTztFQUNQLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHRmJyksXFxuICAgIHVybCgnLi4vZm9udHMvUm9ib3RvLU1lZGl1bS50dGYnKSBmb3JtYXQoJ3R0ZicpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1dhcnAnO1xcbiAgICBzcmM6dXJsKCcuLi9mb250cy9UaWx0V2FycC1SZWd1bGFyLnR0ZicpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuXFxuKiB7XFxuYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5wYWRkaW5nOiAwcHg7XFxubWFyZ2luOiAwcHg7XFxuXFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6ICdXYXJwJztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU3ZGU7XFxufVxcblxcbi5oZWxsbyB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICB9XFxuXFxuLm5hdkJhckRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5YjFjZDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZsZXg6MTtcXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKSA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogJ1dhcnAnO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogXFx0IzhkNWU3MjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhlYWRlckRpdiB7XFxuICBjb2xvcjogIzU2MjEzNTtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjojYzM4MjllO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50QXJlYSB7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4ucGFnZUhlYWRlciB7XFxuZm9udC1mYW1pbHk6ICdXYXJwJztcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHggMHB4O1xcbn1cXG5cXG4uaG9tZVBhcmFncmFwaCB7XFxuICBtYXJnaW46IDQwcHggMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgXFxufVxcblxcbmltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIG9wYWNpdHk6IDAuNjsgKi9cXG4gIC8qIG9iamVjdC1maXQ6Y29udGFpbjsgKi9cXG59XFxuXFxuLm92ZXJsYXlDb2xvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogZmxleDogMTsgKi9cXG4gIC8qIGhlaWdodDogMjUwcHg7ICovXFxuICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDIzMywgMTc3LCAyMDUpOyAqL1xcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG5cXG59XFxuXFxuLmRpc2hEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6NXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg4NiwgMzMsIDUzLDAuMik7XFxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY3JlYXRlSGVhZGVyKGhlYWRlckNvbnRlbnQpIHtcbiAgICBjb25zdCBob21lSGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBob21lSGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ3BhZ2VIZWFkZXInKVxuICAgIGNvbnN0IGhvbWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgaG9tZUhlYWRlci50ZXh0Q29udGVudCA9IGhlYWRlckNvbnRlbnRcblxuICAgIGhvbWVIZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaG9tZUhlYWRlcilcblxuICAgIHJldHVybiBob21lSGVhZGVyRGl2XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVDb250ZW50KCkge1xuICAgIGNvbnN0IGhvbWVDb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGhvbWVDb250ZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGhvbWVDb250ZW50MS50ZXh0Q29udGVudCA9IGBXZWxjb21lIHRvIG91ciBKYXBhbmVzZSByZXN0YXVyYW50LCB3aGVyZSB5b3UgY2FuIGV4cGVyaWVuY2UgdGhlIGF1dGhlbnRpYyBmbGF2b3JzIG9mIEphcGFuIHJpZ2h0IFxuICAgIGluIHlvdXIgaG9tZXRvd24uIE91ciBza2lsbGVkIGNoZWZzIHVzZSBvbmx5IHRoZSBmcmVzaGVzdCBpbmdyZWRpZW50cyB0byBwcmVwYXJlIHRyYWRpdGlvbmFsIEphcGFuZXNlIGRpc2hlcywgc3VjaCBhcyBzdXNoaSwgcmFtZW4sIGFuZCB0ZW1wdXJhLlxuICAgIFdoZXRoZXIgeW91J3JlIGluIHRoZSBtb29kIGZvciBhIGhlYXJ0eSBib3dsIG9mIHJhbWVuIG9yIGEgZGVsaWNhdGUgc3VzaGkgcm9sbCwgb3VyIG1lbnUgaGFzIHNvbWV0aGluZyB0byBzYXRpc2Z5IGV2ZXJ5IGNyYXZpbmcuYDtcbiAgICBob21lQ29udGVudDEuY2xhc3NMaXN0LmFkZCgnaG9tZVBhcmFncmFwaCcpXG5cbiAgICBjb25zdCBob21lQ29udGVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBob21lQ29udGVudDIudGV4dENvbnRlbnQgPSBgV2UgYWxzbyBvZmZlciBhIHdpZGUgc2VsZWN0aW9uIG9mIHNha2UsIGJlZXIsIGFuZCB3aW5lIHRvIGNvbXBsZW1lbnQgeW91ciBtZWFsLlxuICAgIEF0IG91ciByZXN0YXVyYW50LCB3ZSBiZWxpZXZlIHRoYXQgZGluaW5nIHNob3VsZCBiZSBhbiBleHBlcmllbmNlLCBub3QganVzdCBhIG1lYWwuIFRoYXQncyB3aHkgd2Ugc3RyaXZlIHRvIGNyZWF0ZSBhbiBhdG1vc3BoZXJlIHRoYXQgaXMgYm90aCB3ZWxjb21pbmcgYW5kIGF1dGhlbnRpYy4gXG4gICAgRnJvbSB0aGUgZWxlZ2FudCBkZWNvciB0byB0aGUgZnJpZW5kbHkgc2VydmljZSwgd2Ugd2FudCB5b3UgdG8gZmVlbCBhcyB0aG91Z2ggeW91J3ZlIGJlZW4gdHJhbnNwb3J0ZWQgdG8gSmFwYW4uXG4gICAgU28gY29tZSBhbmQgdmlzaXQgdXMgdG9kYXkgYW5kIGRpc2NvdmVyIHRoZSBmbGF2b3JzIG9mIEphcGFuIHJpZ2h0IGhlcmUgYXQgb3VyIHJlc3RhdXJhbnQuIFdlIGNhbid0IHdhaXQgdG8gc2VydmUgeW91IWA7XG4gICAgaG9tZUNvbnRlbnQyLmNsYXNzTGlzdC5hZGQoJ2hvbWVQYXJhZ3JhcGgnKVxuXG5cbiAgICBjb25zdCBob21lQ29udGVudDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBob21lQ29udGVudDMuaW5uZXJIVE1MID0gYFRvIG1ha2UgYSByZXNlcnZhdGlvbiBvciBpbnF1aXJlIGFib3V0IG91ciBtZW51LCBwbGVhc2UgZmVlbCBmcmVlIHRvIGNvbnRhY3QgdXMgdXNpbmcgdGhlIGZvbGxvd2luZyBpbmZvcm1hdGlvbjogPGJyPjxicj5cbiAgICBQaG9uZTogMTIzNDU2Nzg5MDxicj5cbiAgICBFbWFpbDogZXhhbXBsZWFkcmVzc0BzYWt1cmFzdXNoaS5jb208YnI+XG4gICAgQWRkcmVzczogNDYgU29tZVN0cmVldCwgU29tZUNpdHksIEEzMyBBMzMzPGJyPjxicj5cbiAgICBXZSBsb29rIGZvcndhcmQgdG8gaGVhcmluZyBmcm9tIHlvdSBhbmQgc2VydmluZyB5b3UgZGVsaWNpb3VzIEphcGFuZXNlIGN1aXNpbmUhYFxuXG4gICAgaG9tZUNvbnRlbnQzLmNsYXNzTGlzdC5hZGQoJ2hvbWVQYXJhZ3JhcGgnKVxuXG4gICAgaG9tZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQxKVxuICAgIGhvbWVDb250ZW50RGl2LmFwcGVuZENoaWxkKGhvbWVDb250ZW50MilcbiAgICBob21lQ29udGVudERpdi5hcHBlbmRDaGlsZChob21lQ29udGVudDMpXG4gICAgcmV0dXJuIGhvbWVDb250ZW50RGl2XG59XG5cblxuZnVuY3Rpb24gaG9tZUxvYWRlcigpIHsgXG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluRGl2JylcbiAgICBcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudEFyZWEnKSkge1xuICAgICAgIG1haW5EaXYucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRBcmVhJykpXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG1haW5EaXZDb250ZW50QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWFpbkRpdkNvbnRlbnRBcmVhLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRBcmVhJylcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1haW5EaXZDb250ZW50QXJlYSlcblxuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcihcIkFib3V0IFVzXCIpXG4gICAgbWFpbkRpdkNvbnRlbnRBcmVhLmFwcGVuZENoaWxkKGhlYWRlcilcblxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gY3JlYXRlSG9tZUNvbnRlbnQoKVxuICAgIG1haW5EaXZDb250ZW50QXJlYS5hcHBlbmRDaGlsZChtYWluQ29udGVudClcblxuICAgIFxufVxuXG5leHBvcnQge2hvbWVMb2FkZXIsY3JlYXRlSGVhZGVyfSIsImltcG9ydCBsb2FkUGFnZSBmcm9tICcuL3BhZ2VMb2FkZXIuanMnO1xuaW1wb3J0IHtob21lTG9hZGVyfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudUxvYWRlci5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxubG9hZFBhZ2UoKVxuaG9tZUxvYWRlcigpXG5cbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZUJ1dHRvbicpXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnVCdXR0b24nKVxuXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBob21lTG9hZGVyKClcbn0pXG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGxvYWRNZW51KClcbn1cbilcblxuIiwiaW1wb3J0IHtjcmVhdGVIZWFkZXJ9IGZyb20gJy4vaG9tZS5qcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVQb3NpdGlvbihuYW1lLGRlc2NyaXB0aW9uLHBpY3R1cmVVUkwscHJpY2UpIHtcblxuICAgIGNvbnN0IGRpc2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpc2hEaXYuY2xhc3NMaXN0LmFkZCgnZGlzaERpdicpXG5cbiAgICBjb25zdCBkaXNoSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGRpc2hIZWFkZXIuY2xhc3NMaXN0LmFkZCgnZGlzaEhlYWRlcicpXG4gICAgZGlzaEhlYWRlci50ZXh0Q29udGVudCA9IG5hbWVcbiAgICBkaXNoRGl2LmFwcGVuZENoaWxkKGRpc2hIZWFkZXIpXG5cbiAgICBjb25zdCBvdmVybGF5Q29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG92ZXJsYXlDb2xvci5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Q29sb3InKVxuICAgIGNvbnN0IGRpc2hQaWN0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBkaXNoUGljdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycscGljdHVyZVVSTClcbiAgICBvdmVybGF5Q29sb3IuYXBwZW5kQ2hpbGQoZGlzaFBpY3R1cmUpXG4gICAgZGlzaERpdi5hcHBlbmRDaGlsZChvdmVybGF5Q29sb3IpXG5cbiAgICBjb25zdCBkaXNoRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkaXNoRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGlzaERlc2NyaXB0aW9uJylcbiAgICBkaXNoRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvblxuICAgIGRpc2hEaXYuYXBwZW5kQ2hpbGQoZGlzaERlc2NyaXB0aW9uKVxuXG4gICAgY29uc3QgZGlzaFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGlzaFByaWNlLmNsYXNzTGlzdC5hZGQoJ2Rpc2hQcmljZScpXG4gICAgZGlzaFByaWNlLnRleHRDb250ZW50ID0gcHJpY2VcbiAgICBkaXNoRGl2LmFwcGVuZENoaWxkKGRpc2hQcmljZSlcblxuICAgIHJldHVybiBkaXNoRGl2XG59XG5cbmZ1bmN0aW9uIGFkZE1lbnVQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgYWxsRGlzaGVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBkaXNoMSA9IGNyZWF0ZU1lbnVQb3NpdGlvbihcIkNhbGlmb3JuaWEgUm9sbFwiLCdBbWVyaWNhbiBTdHlsZSBTdXNoaSB3aXRoIFNhbG1vbiBhbmQgQXZvY2FkbycsJ2h0dHBzOi8vaW1nLmZyZWVwaWsuY29tL2ZyZWUtcGhvdG8vY2xvc2V1cC1zaG90LXN1c2hpLXJvbGwtYmxhY2stc3RvbmUtcGxhdGVfMTgxNjI0LTIyNTM3LmpwZz93PTEwNjAmdD1zdD0xNjc3NDQ0NjY3fmV4cD0xNjc3NDQ1MjY3fmhtYWM9N2VhYmJlYzk3MmZkM2E3OTQwZTNlZTIwOWI5NGMyZWExMDFkYmFkZmYzYmNjZGYwNDMyZGViODIyNWEzNjMwZScsICfCozkuOTknKVxuICAgIGNvbnN0IGRpc2gyID0gY3JlYXRlTWVudVBvc2l0aW9uKCdOaWdpcmknLCdTbGljZSBvZiBGaXNoIG9uIFJpY2UnLCdodHRwczovL2ltZy5mcmVlcGlrLmNvbS9mcmVlLXBob3RvL25pZ2lyaS1zdXNoaS1zZXQtd2l0aC1zYWxtb24tdHVuYS1zaHJpbXAtcHJhd24tZWVsLXNoZWxsXzc0MTkwLTYyMTUuanBnP3c9MTQ4MCZ0PXN0PTE2Nzc0NDY2ODN+ZXhwPTE2Nzc0NDcyODN+aG1hYz1jZmU4MmYwYWY3NDkyMzcxYTI2MzcxMTAyZWU0MDgzOGJmYjUwNmM3MWY4MWVjZTQzZjc4ZDc0MTdiNjg3OGJkJywgJzMuOTknKVxuICAgIGNvbnN0IGRpc2gzID1jcmVhdGVNZW51UG9zaXRpb24oJ0Z1dG9tYWtpJywnVHVuYSwgQ3VjdW1iZXIsIFN1cmltaSwgT21sZXR0ZSBXcmFwcGVkIHdpdGggTm9yaSBTaGVldCcsJ2h0dHBzOi8vaW1nLmZyZWVwaWsuY29tL2ZyZWUtcGhvdG8vY2xvc2UtdXAtZnV0b21ha2ktd2l0aC1jaG9wc3RpY2tzXzExNDctMjAuanBnP3c9OTAwJnQ9c3Q9MTY3NzQ0Njg4OH5leHA9MTY3NzQ0NzQ4OH5obWFjPTQxZDMzMmRlMzkzNWNhNTBjZjQ3NWQyYzhkOThiODgzMjY1NmE2MzBhNjZlMTU0OTU4MThmOWVkZmY1M2NhMzYnLCcxMi45OScpXG4gICAgYWxsRGlzaGVzRGl2LmFwcGVuZENoaWxkKGRpc2gxKVxuICAgIGFsbERpc2hlc0Rpdi5hcHBlbmRDaGlsZChkaXNoMilcbiAgICBhbGxEaXNoZXNEaXYuYXBwZW5kQ2hpbGQoZGlzaDMpXG4gICAgXG4gICAgcmV0dXJuIGFsbERpc2hlc0RpdlxufVxuXG5mdW5jdGlvbiBsb2FkTWVudSAoKSB7XG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluRGl2JylcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudEFyZWEnKSkge1xuICAgICAgICBtYWluRGl2LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50QXJlYScpKVxuICAgICB9XG4gICAgICAgIGNvbnN0IG1haW5EaXZDb250ZW50QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG1haW5EaXZDb250ZW50QXJlYS5jbGFzc0xpc3QuYWRkKCdjb250ZW50QXJlYScpXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcignT3VyIE1lbnUnKVxuICAgICAgICBtYWluRGl2Q29udGVudEFyZWEuYXBwZW5kKGhlYWRlcilcbiAgICAgICAgY29uc3QgbWVudUNvbnRlbnQgPSBhZGRNZW51UG9zaXRpb25zKClcbiAgICAgICAgbWFpbkRpdkNvbnRlbnRBcmVhLmFwcGVuZENoaWxkKG1lbnVDb250ZW50KVxuICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1haW5EaXZDb250ZW50QXJlYSlcblxuICAgICAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7IiwiZnVuY3Rpb24gY3JlYXRlSGVhZGVyKHRpdGxlKSB7XG5cbiAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXJEaXYnKVxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgbWFpbkhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlXG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKG1haW5IZWFkZXIpXG4gICAgXG4gICAgcmV0dXJuIGhlYWRlckRpdlxuICB9XG5cblxuXG5mdW5jdGlvbiBjcmVhdGVOYXZCYXIoYnV0dG9uT25lLCBidXR0b25Ud28pIHtcbiAgICBjb25zdCBuYXZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG5hdkRpdi5jbGFzc0xpc3QuYWRkKCduYXZCYXJEaXYnKVxuICAgIGNvbnN0IGZpcnN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBmaXJzdEJ1dHRvbi50ZXh0Q29udGVudCA9IGJ1dHRvbk9uZVxuICAgIGZpcnN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdob21lQnV0dG9uJylcblxuICAgIGNvbnN0IHNlY29uZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc2Vjb25kQnV0dG9uLnRleHRDb250ZW50ID0gYnV0dG9uVHdvXG4gICAgc2Vjb25kQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdtZW51QnV0dG9uJylcblxuICAgIG5hdkRpdi5hcHBlbmRDaGlsZChmaXJzdEJ1dHRvbilcbiAgICBuYXZEaXYuYXBwZW5kQ2hpbGQoc2Vjb25kQnV0dG9uKVxuXG4gICAgcmV0dXJuIG5hdkRpdlxuICB9XG5cbiBmdW5jdGlvbiBjcmVhdGVNYWluRGl2ICgpIHtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoJ21haW5EaXYnKVxuICAgIHJldHVybiBtYWluRGl2XG4gfVxuXG4gIGZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICBjb25zdCBjb250ZW50RGl2U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcihcIlNha3VyYSBTdXNoaVwiKVxuXG4gIGNvbnRlbnREaXZTZWxlY3Rvci5hcHBlbmRDaGlsZChoZWFkZXIpXG5cbiAgY29uc3QgbmF2aWdhdGlvbkJhciA9IGNyZWF0ZU5hdkJhcihcIkhvbWVcIiAsIFwiT3VyIE1lbnVcIilcbiAgY29udGVudERpdlNlbGVjdG9yLmFwcGVuZENoaWxkKG5hdmlnYXRpb25CYXIpXG5cbiAgY29uc3QgbWFpbkRpdiA9IGNyZWF0ZU1haW5EaXYoKVxuICBjb250ZW50RGl2U2VsZWN0b3IuYXBwZW5kQ2hpbGQobWFpbkRpdilcblxuICBjb25zdCBtYWluRGl2Q29udGVudEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBtYWluRGl2Q29udGVudEFyZWEuY2xhc3NMaXN0LmFkZCgnY29udGVudEFyZWEnKVxuICB9XG5cblxuICBleHBvcnQgZGVmYXVsdCBsb2FkUGFnZVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
