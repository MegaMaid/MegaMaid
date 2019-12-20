webpackJsonp([23],{

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(291)
/* template */
var __vue_template__ = __webpack_require__(292)
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
Component.options.__file = "resources/assets/js/pages/settings/plex.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2cf4f464", Component.options)
  } else {
    hotAPI.reload("data-v-2cf4f464", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 291:
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




/* harmony default export */ __webpack_exports__["default"] = ({
    scrollToTop: false,

    metaInfo: function metaInfo() {
        return { title: this.$t('radarr') + ' ' + this.$t('settings') };
    },


    data: function data() {
        return {
            loading: true,
            form: new __WEBPACK_IMPORTED_MODULE_1_vform___default.a({
                enabled: false,
                ssl: false,
                hostname: '',
                port: '',
                apikey: ''
            })
        };
    },

    computed: Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapGetters */])({
        radarr: 'config/radarr'
    }),

    watch: {
        radarr: function radarr(value) {
            var _this = this;

            this.form.keys().forEach(function (key) {
                _this.form[key] = value[key];
            });
            this.loading = false;
        }
    },

    created: function created() {
        this.loading = true;
        this.$store.dispatch('config/fetchPlex');
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
                                return this.form.post('/api/settings/plex');

                            case 2:
                                _ref2 = _context.sent;
                                data = _ref2.data;

                                this.$store.dispatch('config/updatePlex', data);

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

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "card",
    { attrs: { title: _vm.$t("radarr") + " " + _vm.$t("settings") } },
    [
      _vm.loading
        ? _c(
            "div",
            { staticClass: "text-center m-5" },
            [
              _c("h2", [
                _vm._v(
                  _vm._s(
                    _vm.$t("loading") +
                      " " +
                      _vm.$t("radarr") +
                      " " +
                      _vm.$t("settings")
                  )
                )
              ]),
              _vm._v(" "),
              _c("fa", {
                staticClass: "global-searching-spinner mt-3",
                attrs: { icon: "cog", size: "6x", spin: "" }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.loading
        ? _c(
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
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "hostname" }
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
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "port" }
                    })
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
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "apikey" }
                    })
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
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2cf4f464", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3BsZXgudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3BsZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvcGxleC52dWU/MDZkYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFtTDtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM0QkE7QUFDQTs7QUFFQTtpQkFHQTs7a0NBQ0E7MERBQ0E7QUFFQTs7Ozs7cUJBRUE7O3lCQUVBO3FCQUNBOzBCQUNBO3NCQUNBO3dCQUlBO0FBUkE7QUFGQTs7OztnQkFjQTtBQUhBOzs7O0FBS0E7O29EQUNBO3dDQUNBO0FBQ0E7MkJBQ0E7QUFHQTtBQVJBOztnQ0FTQTt1QkFDQTs2QkFDQTtBQUVBOzs7O0FBRUE7QUFEQTs7Ozs7Ozs7c0RBRUE7Ozs7OzswRUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF6Q0EsRzs7Ozs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFNBQVMscURBQXFELEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlDQUFpQztBQUM5QztBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzIzLmM3YmNlYjE4ZTAzZDQ1NTI1N2VhLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcGxleC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTJjZjRmNDY0XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGxleC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9wbGV4LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yY2Y0ZjQ2NFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJjZjRmNDY0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3BsZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAyODlcbi8vIG1vZHVsZSBjaHVua3MgPSAyMyIsIjx0ZW1wbGF0ZT5cbiAgICA8Y2FyZCA6dGl0bGU9XCIkdCgncmFkYXJyJykgKyAnICcgKyAkdCgnc2V0dGluZ3MnKVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbS01XCIgdi1pZj1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxoMj57eyAkdCgnbG9hZGluZycpICsgJyAnICsgJHQoJ3JhZGFycicpICsgJyAnICsgJHQoJ3NldHRpbmdzJykgfX08L2gyPlxuICAgICAgICAgICAgPGZhIGNsYXNzPVwiZ2xvYmFsLXNlYXJjaGluZy1zcGlubmVyIG10LTNcIiBpY29uPVwiY29nXCIgc2l6ZT1cIjZ4XCIgc3BpbiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJ1cGRhdGVcIiBAa2V5ZG93bj1cImZvcm0ub25LZXlkb3duKCRldmVudClcIiB2LWlmPVwiISBsb2FkaW5nXCI+XG4gICAgICAgICAgICA8YWxlcnQtc3VjY2VzcyA6Zm9ybT1cImZvcm1cIiA6bWVzc2FnZT1cIiR0KCdpbmZvX3VwZGF0ZWQnKVwiLz5cblxuICAgICAgICAgICAgPCEtLSBFbmFibGVkIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03IG9mZnNldC1tZC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxjaGVja2JveCB2LW1vZGVsPVwiZm9ybS5lbmFibGVkXCIgOmNoZWNrZWQ9XCJmb3JtLmVuYWJsZWRcIiBuYW1lPVwiZW5hYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoJ2VuYWJsZWQnKSB9fSB7eyAkdCgncmFkYXJyJykgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9jaGVja2JveD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8IS0tIEhvc3RuYW1lIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCdob3N0bmFtZScpIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtLmhvc3RuYW1lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiaG9zdG5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCdob3N0bmFtZScpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImhvc3RuYW1lXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwhLS0gUG9ydCAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIj57eyAkdCgncG9ydCcpIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtLnBvcnRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJwb3J0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IGZvcm0uZXJyb3JzLmhhcygncG9ydCcpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cInBvcnRcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPCEtLSBTU0wgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTcgb2Zmc2V0LW1kLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGNoZWNrYm94IHYtbW9kZWw9XCJmb3JtLnNzbFwiIDpjaGVja2VkPVwiZm9ybS5zc2xcIiBuYW1lPVwic3NsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgndXNlcycpIH19IHt7ICR0KCdzc2wnKSB9fVxuICAgICAgICAgICAgICAgICAgICA8L2NoZWNrYm94PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwhLS0gQXBpIEtleSAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIj57eyAkdCgnYXBpa2V5JykgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm0uYXBpa2V5XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiYXBpa2V5XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IGZvcm0uZXJyb3JzLmhhcygnYXBpa2V5JykgfVwiPlxuICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiYXBpa2V5XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwhLS0gU3VibWl0IEJ1dHRvbiAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOSBtbC1tZC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ1dHRvbiB0eXBlPVwic3VjY2Vzc1wiIDpsb2FkaW5nPVwiZm9ybS5idXN5XCI+e3sgJHQoJ3VwZGF0ZScpIH19PC92LWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9jYXJkPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBGb3JtIGZyb20gJ3Zmb3JtJ1xuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzY3JvbGxUb1RvcDogZmFsc2UsXG5cbiAgICBtZXRhSW5mbyAoKSB7XG4gICAgICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdyYWRhcnInKSArICcgJyArIHRoaXMuJHQoJ3NldHRpbmdzJykgfVxuICAgIH0sXG5cbiAgICBkYXRhOiAoKSA9PiAoe1xuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHNzbDogZmFsc2UsXG4gICAgICAgICAgICBob3N0bmFtZTogJycsXG4gICAgICAgICAgICBwb3J0OiAnJyxcbiAgICAgICAgICAgIGFwaWtleTogJydcbiAgICAgICAgfSlcbiAgICB9KSxcblxuICAgIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKHtcbiAgICAgICAgcmFkYXJyOiAnY29uZmlnL3JhZGFycidcbiAgICB9KSxcblxuICAgIHdhdGNoOiB7XG4gICAgICAgIHJhZGFyciAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5rZXlzKCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybVtrZXldID0gdmFsdWVba2V5XVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNyZWF0ZWQgKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnY29uZmlnL2ZldGNoUGxleCcpXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYXN5bmMgdXBkYXRlICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5mb3JtLnBvc3QoJy9hcGkvc2V0dGluZ3MvcGxleCcpXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnY29uZmlnL3VwZGF0ZVBsZXgnLCBkYXRhKVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9wbGV4LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJjYXJkXCIsXG4gICAgeyBhdHRyczogeyB0aXRsZTogX3ZtLiR0KFwicmFkYXJyXCIpICsgXCIgXCIgKyBfdm0uJHQoXCJzZXR0aW5nc1wiKSB9IH0sXG4gICAgW1xuICAgICAgX3ZtLmxvYWRpbmdcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG0tNVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiR0KFwibG9hZGluZ1wiKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kdChcInJhZGFyclwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kdChcInNldHRpbmdzXCIpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJmYVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2xvYmFsLXNlYXJjaGluZy1zcGlubmVyIG10LTNcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImNvZ1wiLCBzaXplOiBcIjZ4XCIsIHNwaW46IFwiXCIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgIV92bS5sb2FkaW5nXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIF92bS51cGRhdGUoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uZm9ybS5vbktleWRvd24oJGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJhbGVydC1zdWNjZXNzXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgbWVzc2FnZTogX3ZtLiR0KFwiaW5mb191cGRhdGVkXCIpIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNyBvZmZzZXQtbWQtM1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjaGVja2VkOiBfdm0uZm9ybS5lbmFibGVkLCBuYW1lOiBcImVuYWJsZWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmVuYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbmFibGVkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmVuYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJlbmFibGVkXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJyYWRhcnJcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImhvc3RuYW1lXCIpKSldXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTdcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5ob3N0bmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmhvc3RuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtaW52YWxpZFwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiaG9zdG5hbWVcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgbmFtZTogXCJob3N0bmFtZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLmhvc3RuYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiaG9zdG5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImhvc3RuYW1lXCIgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInBvcnRcIikpKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBvcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtaW52YWxpZFwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicG9ydFwiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBuYW1lOiBcInBvcnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5wb3J0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicG9ydFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwicG9ydFwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03IG9mZnNldC1tZC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNoZWNrZWQ6IF92bS5mb3JtLnNzbCwgbmFtZTogXCJzc2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnNzbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNzbFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zc2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJ1c2VzXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJzc2xcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImFwaWtleVwiKSkpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uYXBpa2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uYXBpa2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtaW52YWxpZFwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiYXBpa2V5XCIpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiYXBpa2V5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uYXBpa2V5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiYXBpa2V5XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJhcGlrZXlcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtOSBtbC1tZC1hdXRvXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdHlwZTogXCJzdWNjZXNzXCIsIGxvYWRpbmc6IF92bS5mb3JtLmJ1c3kgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInVwZGF0ZVwiKSkpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTJjZjRmNDY0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yY2Y0ZjQ2NFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvcGxleC52dWVcbi8vIG1vZHVsZSBpZCA9IDI5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDIzIl0sInNvdXJjZVJvb3QiOiIifQ==