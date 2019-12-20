webpackJsonp([8],{

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(284)
/* template */
var __vue_template__ = __webpack_require__(285)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/settings/radarr.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72fe1c0b", Component.options)
  } else {
    hotAPI.reload("data-v-72fe1c0b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(27);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//enabled, ip  ,  port  ,  apikey  ,  subdirectory  ,  ssl  ,  download-quality
//,                      ,  save-directory  ,  enable-seasons-folder
//release-availability  ,  save-directory



/* harmony default export */ __webpack_exports__["default"] = ({
    scrollToTop: false,

    metaInfo: function metaInfo() {
        return { title: this.$t('settings') };
    },


    data: function data() {
        return {
            form: new __WEBPACK_IMPORTED_MODULE_1_vform___default.a({
                enabled: false,
                ssl: false,
                hostname: '',
                port: '',
                apikey: '',
                subpath: '',
                directory: '',
                availability: '',
                quality: ''
            })
        };
    },

    computed: Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapGetters */])({
        radarr: 'config/radarr'
    }),

    watch: {
        radarr: function radarr(value) {
            console.log(value.created_at);

            this.form.keys().forEach(function (key) {
                // this.form[key] = this.user[key]
            });
        }
    },

    created: function created() {
        this.$store.dispatch('config/fetchRadarr');
    },


    methods: {
        update: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var _ref2, data;

                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.form.post('/api/settings/radarr');

                            case 2:
                                _ref2 = _context.sent;
                                data = _ref2.data;

                                console.log(this.form);
                                //
                                // this.$store.dispatch('auth/updateUser', { user: data })

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function update() {
                return _ref.apply(this, arguments);
            }

            return update;
        }()
    }
});

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("card", { attrs: { title: _vm.$t("radarr") } }, [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            _vm.update($event)
          },
          keydown: function($event) {
            _vm.form.onKeydown($event)
          }
        }
      },
      [
        _c("alert-success", {
          attrs: { form: _vm.form, message: _vm.$t("info_updated") }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "div",
            { staticClass: "col-md-7 offset-md-3" },
            [
              _c(
                "checkbox",
                {
                  attrs: { checked: _vm.form.enabled, name: "enabled" },
                  model: {
                    value: _vm.form.enabled,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "enabled", $$v)
                    },
                    expression: "form.enabled"
                  }
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("enabled")) +
                      " " +
                      _vm._s(_vm.$t("radarr")) +
                      "\n                "
                  )
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-md-3 col-form-label text-md-right" },
            [_vm._v(_vm._s(_vm.$t("hostname")))]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-7" },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.hostname,
                    expression: "form.hostname"
                  }
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.form.errors.has("hostname") },
                attrs: { type: "text", name: "hostname" },
                domProps: { value: _vm.form.hostname },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "hostname", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("has-error", { attrs: { form: _vm.form, field: "hostname" } })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-md-3 col-form-label text-md-right" },
            [_vm._v(_vm._s(_vm.$t("port")))]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-7" },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.port,
                    expression: "form.port"
                  }
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.form.errors.has("port") },
                attrs: { type: "text", name: "port" },
                domProps: { value: _vm.form.port },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "port", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("has-error", { attrs: { form: _vm.form, field: "port" } })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "div",
            { staticClass: "col-md-7 offset-md-3" },
            [
              _c(
                "checkbox",
                {
                  attrs: { checked: _vm.form.ssl, name: "ssl" },
                  model: {
                    value: _vm.form.ssl,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "ssl", $$v)
                    },
                    expression: "form.ssl"
                  }
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("uses")) +
                      " " +
                      _vm._s(_vm.$t("ssl")) +
                      "\n                "
                  )
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-md-3 col-form-label text-md-right" },
            [_vm._v(_vm._s(_vm.$t("apikey")))]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-7" },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.apikey,
                    expression: "form.apikey"
                  }
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.form.errors.has("apikey") },
                attrs: { type: "text", name: "apikey" },
                domProps: { value: _vm.form.apikey },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "apikey", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("has-error", { attrs: { form: _vm.form, field: "apikey" } })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-md-3 col-form-label text-md-right" },
            [_vm._v(_vm._s(_vm.$t("subpath")))]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-7" },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.subpath,
                    expression: "form.subpath"
                  }
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.form.errors.has("subpath") },
                attrs: { type: "text", name: "subpath" },
                domProps: { value: _vm.form.subpath },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "subpath", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("has-error", { attrs: { form: _vm.form, field: "subpath" } })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-md-3 col-form-label text-md-right" },
            [_vm._v(_vm._s(_vm.$t("directory")))]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-7" },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.directory,
                    expression: "form.directory"
                  }
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.form.errors.has("directory") },
                attrs: { type: "text", name: "directory" },
                domProps: { value: _vm.form.directory },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "directory", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("has-error", { attrs: { form: _vm.form, field: "directory" } })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-md-3 col-form-label text-md-right" },
            [_vm._v(_vm._s(_vm.$t("availability")))]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-7" },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.availability,
                    expression: "form.availability"
                  }
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.form.errors.has("availability") },
                attrs: { type: "text", name: "availability" },
                domProps: { value: _vm.form.availability },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "availability", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("has-error", {
                attrs: { form: _vm.form, field: "availability" }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-md-3 col-form-label text-md-right" },
            [_vm._v(_vm._s(_vm.$t("quality")))]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-7" },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.quality,
                    expression: "form.quality"
                  }
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.form.errors.has("quality") },
                attrs: { type: "text", name: "quality" },
                domProps: { value: _vm.form.quality },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "quality", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("has-error", { attrs: { form: _vm.form, field: "quality" } })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "div",
            { staticClass: "col-md-9 ml-md-auto" },
            [
              _c(
                "v-button",
                { attrs: { type: "success", loading: _vm.form.busy } },
                [_vm._v(_vm._s(_vm.$t("update")))]
              )
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-72fe1c0b", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3JhZGFyci52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvcmFkYXJyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3JhZGFyci52dWU/OTIzZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFtTDtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQytEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO2lCQUdBOztrQ0FDQTtnQ0FDQTtBQUVBOzs7Ozs7eUJBR0E7cUJBQ0E7MEJBQ0E7c0JBQ0E7d0JBQ0E7eUJBQ0E7MkJBQ0E7OEJBQ0E7eUJBSUE7QUFaQTtBQURBOzs7O2dCQWlCQTtBQUhBOzs7dUNBS0E7OEJBRUE7O29EQUNBO0FBQ0E7QUFDQTtBQUdBO0FBVEE7O2dDQVVBOzZCQUNBO0FBRUE7Ozs7QUFFQTtBQURBOzs7Ozs7OztzREFFQTs7Ozs7O2lEQUNBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE5Q0EsRzs7Ozs7OztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFC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QUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLCtCQUErQixTQUFTLG1DQUFtQyxFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQSxhQUFhLHFDQUFxQztBQUNsRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUywwQ0FBMEMsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy84Ljg5OTgzOWUxNWQ1YjI1ZGY2OGVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcmFkYXJyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzJmZTFjMGJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yYWRhcnIudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvcmFkYXJyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03MmZlMWMwYlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTcyZmUxYzBiXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3JhZGFyci52dWVcbi8vIG1vZHVsZSBpZCA9IDI1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCI8dGVtcGxhdGU+XG4gICAgPGNhcmQgOnRpdGxlPVwiJHQoJ3JhZGFycicpXCI+XG4gICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInVwZGF0ZVwiIEBrZXlkb3duPVwiZm9ybS5vbktleWRvd24oJGV2ZW50KVwiPlxuICAgICAgICAgICAgPGFsZXJ0LXN1Y2Nlc3MgOmZvcm09XCJmb3JtXCIgOm1lc3NhZ2U9XCIkdCgnaW5mb191cGRhdGVkJylcIi8+XG5cbiAgICAgICAgICAgIDwhLS0gRW5hYmxlZCAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNyBvZmZzZXQtbWQtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8Y2hlY2tib3ggdi1tb2RlbD1cImZvcm0uZW5hYmxlZFwiIDpjaGVja2VkPVwiZm9ybS5lbmFibGVkXCIgbmFtZT1cImVuYWJsZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KCdlbmFibGVkJykgfX0ge3sgJHQoJ3JhZGFycicpIH19XG4gICAgICAgICAgICAgICAgICAgIDwvY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPCEtLSBIb3N0bmFtZSAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIj57eyAkdCgnaG9zdG5hbWUnKSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS5ob3N0bmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImhvc3RuYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IGZvcm0uZXJyb3JzLmhhcygnaG9zdG5hbWUnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJob3N0bmFtZVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8IS0tIFBvcnQgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCI+e3sgJHQoJ3BvcnQnKSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS5wb3J0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwicG9ydFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiBmb3JtLmVycm9ycy5oYXMoJ3BvcnQnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJwb3J0XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwhLS0gU1NMIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03IG9mZnNldC1tZC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxjaGVja2JveCB2LW1vZGVsPVwiZm9ybS5zc2xcIiA6Y2hlY2tlZD1cImZvcm0uc3NsXCIgbmFtZT1cInNzbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoJ3VzZXMnKSB9fSB7eyAkdCgnc3NsJykgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9jaGVja2JveD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8IS0tIEFwaSBLZXkgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCI+e3sgJHQoJ2FwaWtleScpIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtLmFwaWtleVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFwaWtleVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiBmb3JtLmVycm9ycy5oYXMoJ2FwaWtleScpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImFwaWtleVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8IS0tIFN1YiBQYXRoIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCdzdWJwYXRoJykgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm0uc3VicGF0aFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN1YnBhdGhcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCdzdWJwYXRoJykgfVwiPlxuICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwic3VicGF0aFwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8IS0tIERpcmVjdG9yeSAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIj57eyAkdCgnZGlyZWN0b3J5JykgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm0uZGlyZWN0b3J5XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZGlyZWN0b3J5XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IGZvcm0uZXJyb3JzLmhhcygnZGlyZWN0b3J5JykgfVwiPlxuICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiZGlyZWN0b3J5XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwhLS0gQXZhaWxhYmlsaXR5IC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCdhdmFpbGFiaWxpdHknKSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS5hdmFpbGFiaWxpdHlcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJhdmFpbGFiaWxpdHlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCdhdmFpbGFiaWxpdHknKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJhdmFpbGFiaWxpdHlcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPCEtLSBRdWFsaXR5IC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCdxdWFsaXR5JykgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm0ucXVhbGl0eVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInF1YWxpdHlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCdxdWFsaXR5JykgfVwiPlxuICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwicXVhbGl0eVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8IS0tIFN1Ym1pdCBCdXR0b24gLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTkgbWwtbWQtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8di1idXR0b24gdHlwZT1cInN1Y2Nlc3NcIiA6bG9hZGluZz1cImZvcm0uYnVzeVwiPnt7ICR0KCd1cGRhdGUnKSB9fTwvdi1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4vL2VuYWJsZWQsIGlwICAsICBwb3J0ICAsICBhcGlrZXkgICwgIHN1YmRpcmVjdG9yeSAgLCAgc3NsICAsICBkb3dubG9hZC1xdWFsaXR5XG4vLywgICAgICAgICAgICAgICAgICAgICAgLCAgc2F2ZS1kaXJlY3RvcnkgICwgIGVuYWJsZS1zZWFzb25zLWZvbGRlclxuLy9yZWxlYXNlLWF2YWlsYWJpbGl0eSAgLCAgc2F2ZS1kaXJlY3RvcnlcbmltcG9ydCBGb3JtIGZyb20gJ3Zmb3JtJ1xuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzY3JvbGxUb1RvcDogZmFsc2UsXG5cbiAgICBtZXRhSW5mbyAoKSB7XG4gICAgICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdzZXR0aW5ncycpIH1cbiAgICB9LFxuXG4gICAgZGF0YTogKCkgPT4gKHtcbiAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBzc2w6IGZhbHNlLFxuICAgICAgICAgICAgaG9zdG5hbWU6ICcnLFxuICAgICAgICAgICAgcG9ydDogJycsXG4gICAgICAgICAgICBhcGlrZXk6ICcnLFxuICAgICAgICAgICAgc3VicGF0aDogJycsXG4gICAgICAgICAgICBkaXJlY3Rvcnk6ICcnLFxuICAgICAgICAgICAgYXZhaWxhYmlsaXR5OiAnJyxcbiAgICAgICAgICAgIHF1YWxpdHk6ICcnXG4gICAgICAgIH0pXG4gICAgfSksXG5cbiAgICBjb21wdXRlZDogbWFwR2V0dGVycyh7XG4gICAgICAgIHJhZGFycjogJ2NvbmZpZy9yYWRhcnInXG4gICAgfSksXG5cbiAgICB3YXRjaDoge1xuICAgICAgICByYWRhcnIgKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZS5jcmVhdGVkX2F0KVxuXG4gICAgICAgICAgICB0aGlzLmZvcm0ua2V5cygpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmZvcm1ba2V5XSA9IHRoaXMudXNlcltrZXldXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNyZWF0ZWQgKCkge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnY29uZmlnL2ZldGNoUmFkYXJyJylcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhc3luYyB1cGRhdGUgKCkge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmZvcm0ucG9zdCgnL2FwaS9zZXR0aW5ncy9yYWRhcnInKVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtKVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL3VwZGF0ZVVzZXInLCB7IHVzZXI6IGRhdGEgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvcmFkYXJyLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJjYXJkXCIsIHsgYXR0cnM6IHsgdGl0bGU6IF92bS4kdChcInJhZGFyclwiKSB9IH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZm9ybVwiLFxuICAgICAge1xuICAgICAgICBvbjoge1xuICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgX3ZtLnVwZGF0ZSgkZXZlbnQpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5mb3JtLm9uS2V5ZG93bigkZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImFsZXJ0LXN1Y2Nlc3NcIiwge1xuICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBtZXNzYWdlOiBfdm0uJHQoXCJpbmZvX3VwZGF0ZWRcIikgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03IG9mZnNldC1tZC0zXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJjaGVja2JveFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNoZWNrZWQ6IF92bS5mb3JtLmVuYWJsZWQsIG5hbWU6IFwiZW5hYmxlZFwiIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZW5hYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImVuYWJsZWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW5hYmxlZFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcImVuYWJsZWRcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcInJhZGFyclwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIiB9LFxuICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiaG9zdG5hbWVcIikpKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmhvc3RuYW1lLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uaG9zdG5hbWVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1pbnZhbGlkXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJob3N0bmFtZVwiKSB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBuYW1lOiBcImhvc3RuYW1lXCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uaG9zdG5hbWUgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJob3N0bmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHsgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImhvc3RuYW1lXCIgfSB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInBvcnRcIikpKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBvcnQsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wb3J0XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtaW52YWxpZFwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicG9ydFwiKSB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBuYW1lOiBcInBvcnRcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5wb3J0IH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicG9ydFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHsgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcInBvcnRcIiB9IH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNyBvZmZzZXQtbWQtM1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBjaGVja2VkOiBfdm0uZm9ybS5zc2wsIG5hbWU6IFwic3NsXCIgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zc2wsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJzc2xcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc3NsXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwidXNlc1wiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwic3NsXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiIH0sXG4gICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJhcGlrZXlcIikpKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmFwaWtleSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmFwaWtleVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWludmFsaWRcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImFwaWtleVwiKSB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBuYW1lOiBcImFwaWtleVwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLmFwaWtleSB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImFwaWtleVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHsgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImFwaWtleVwiIH0gfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiIH0sXG4gICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJzdWJwYXRoXCIpKSldXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTdcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zdWJwYXRoLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc3VicGF0aFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWludmFsaWRcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInN1YnBhdGhcIikgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgbmFtZTogXCJzdWJwYXRoXCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uc3VicGF0aCB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInN1YnBhdGhcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7IGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJzdWJwYXRoXCIgfSB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImRpcmVjdG9yeVwiKSkpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZGlyZWN0b3J5LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZGlyZWN0b3J5XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtaW52YWxpZFwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiZGlyZWN0b3J5XCIpIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZGlyZWN0b3J5XCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uZGlyZWN0b3J5IH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZGlyZWN0b3J5XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwgeyBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwiZGlyZWN0b3J5XCIgfSB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImF2YWlsYWJpbGl0eVwiKSkpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uYXZhaWxhYmlsaXR5LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uYXZhaWxhYmlsaXR5XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtaW52YWxpZFwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiYXZhaWxhYmlsaXR5XCIpIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiYXZhaWxhYmlsaXR5XCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uYXZhaWxhYmlsaXR5IH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiYXZhaWxhYmlsaXR5XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJhdmFpbGFiaWxpdHlcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIiB9LFxuICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwicXVhbGl0eVwiKSkpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucXVhbGl0eSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnF1YWxpdHlcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1pbnZhbGlkXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJxdWFsaXR5XCIpIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwicXVhbGl0eVwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLnF1YWxpdHkgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJxdWFsaXR5XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwgeyBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwicXVhbGl0eVwiIH0gfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC05IG1sLW1kLWF1dG9cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB0eXBlOiBcInN1Y2Nlc3NcIiwgbG9hZGluZzogX3ZtLmZvcm0uYnVzeSB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwidXBkYXRlXCIpKSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTcyZmUxYzBiXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03MmZlMWMwYlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvcmFkYXJyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjg1XG4vLyBtb2R1bGUgY2h1bmtzID0gOCJdLCJzb3VyY2VSb290IjoiIn0=