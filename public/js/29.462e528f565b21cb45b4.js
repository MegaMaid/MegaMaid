webpackJsonp([29],{

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(302)
/* template */
var __vue_template__ = __webpack_require__(303)
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
Component.options.__file = "resources/assets/js/pages/settings/email.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6632fa0d", Component.options)
  } else {
    hotAPI.reload("data-v-6632fa0d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(27);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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




/* harmony default export */ __webpack_exports__["default"] = ({
    middleware: 'admin',

    scrollToTop: false,

    metaInfo: function metaInfo() {
        return { title: this.$t('plex') + ' ' + this.$t('settings') };
    },


    data: function data() {
        return {
            loading: true,
            form: new __WEBPACK_IMPORTED_MODULE_1_vform___default.a({
                type: ''
            })
        };
    },

    computed: _extends({
        showFieldSecret: function showFieldSecret() {
            return ['mailgun', 'ses', 'sparkpost'].includes(this.form.type);
        },
        showFieldDomain: function showFieldDomain() {
            return this.form.type === 'mailgun';
        }
    }, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapGetters */])({
        email: 'config/email'
    })),

    watch: {
        email: function email(value) {
            var _this = this;

            this.form.keys().forEach(function (key) {
                _this.form[key] = value[key];
            });
            if (!this.form.type) {
                this.form.type = 'manual';
            }
            this.loading = false;
        }
    },

    created: function created() {
        this.loading = true;
        this.$store.dispatch('config/fetchEmail');
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
                                return this.form.post('/api/settings/email');

                            case 2:
                                _ref2 = _context.sent;
                                data = _ref2.data;

                                this.$store.dispatch('config/updateEmail', data);

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

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "card",
    { attrs: { title: _vm.$t("email") + " " + _vm.$t("settings") } },
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
                      _vm.$t("email") +
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
                  "label",
                  { staticClass: "col-md-3 col-form-label text-md-right" },
                  [_vm._v(_vm._s(_vm.$t("email-type")))]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-md-7" },
                  [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.type,
                            expression: "form.type"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("type") },
                        attrs: { name: "type" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.form,
                              "type",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "manual" } }, [
                          _vm._v("Manually Send Links")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "smtp" } }, [
                          _vm._v("SMTP Server")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "mailgun" } }, [
                          _vm._v("Mailgun")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "sparkpost" } }, [
                          _vm._v("SparkPost")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "ses" } }, [
                          _vm._v("Amazon SES")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "type" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _vm.showFieldDomain
                ? _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      { staticClass: "col-md-3 col-form-label text-md-right" },
                      [_vm._v(_vm._s(_vm.$t("email-domain")))]
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
                              value: _vm.form.domain,
                              expression: "form.domain"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("domain")
                          },
                          attrs: { type: "text", name: "domain" },
                          domProps: { value: _vm.form.domain },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "domain", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "domain" }
                        })
                      ],
                      1
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.showFieldSecret
                ? _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      { staticClass: "col-md-3 col-form-label text-md-right" },
                      [_vm._v(_vm._s(_vm.$t("email-secret")))]
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
                              value: _vm.form.secret,
                              expression: "form.secret"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("secret")
                          },
                          attrs: { type: "text", name: "secret" },
                          domProps: { value: _vm.form.secret },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "secret", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "secret" }
                        })
                      ],
                      1
                    )
                  ])
                : _vm._e(),
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
        : _vm._e(),
      _vm._v(
        "\n\n\n\n    'mailgun' => [\n        'domain' => env('MAILGUN_DOMAIN'),\n        'secret' => env('MAILGUN_SECRET'),\n    ],\n\n    'ses' => [\n        'key' => env('SES_KEY'),\n        'secret' => env('SES_SECRET'),\n        'region' => 'us-east-1',\n    ],\n\n    'sparkpost' => [\n        'secret' => env('SPARKPOST_SECRET'),\n    ],\n"
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6632fa0d", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2VtYWlsLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9lbWFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9lbWFpbC52dWU/ZGI5NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFtTDtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaUNBO0FBQ0E7O0FBRUE7Z0JBR0E7O2lCQUVBOztrQ0FDQTt3REFDQTtBQUVBOzs7OztxQkFFQTs7c0JBS0E7QUFKQTtBQUZBOzs7QUFPQTtvREFDQTtzRUFDQTtBQUNBO29EQUNBO3NDQUNBO0FBQ0E7O2VBS0E7QUFKQTs7OztBQU1BOztvREFDQTt3Q0FDQTtBQUNBO2lDQUNBO2lDQUNBO0FBQ0E7MkJBQ0E7QUFHQTtBQVhBOztnQ0FZQTt1QkFDQTs2QkFDQTtBQUVBOzs7O0FBRUE7QUFEQTs7Ozs7Ozs7c0RBRUE7Ozs7OzsyRUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFsREEsRzs7Ozs7OztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFNBQVMsb0RBQW9ELEVBQUU7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LEMiLCJmaWxlIjoianMvMjkuNDYyZTUyOGY1NjViMjFjYjQ1YjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9lbWFpbC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTY2MzJmYTBkXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZW1haWwudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvZW1haWwudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTY2MzJmYTBkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjYzMmZhMGRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvZW1haWwudnVlXG4vLyBtb2R1bGUgaWQgPSAzMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAyOSIsIjx0ZW1wbGF0ZT5cbiAgICA8Y2FyZCA6dGl0bGU9XCIkdCgnZW1haWwnKSArICcgJyArICR0KCdzZXR0aW5ncycpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtLTVcIiB2LWlmPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgPGgyPnt7ICR0KCdsb2FkaW5nJykgKyAnICcgKyAkdCgnZW1haWwnKSArICcgJyArICR0KCdzZXR0aW5ncycpIH19PC9oMj5cbiAgICAgICAgICAgIDxmYSBjbGFzcz1cImdsb2JhbC1zZWFyY2hpbmctc3Bpbm5lciBtdC0zXCIgaWNvbj1cImNvZ1wiIHNpemU9XCI2eFwiIHNwaW4gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwidXBkYXRlXCIgQGtleWRvd249XCJmb3JtLm9uS2V5ZG93bigkZXZlbnQpXCIgdi1pZj1cIiEgbG9hZGluZ1wiPlxuICAgICAgICAgICAgPGFsZXJ0LXN1Y2Nlc3MgOmZvcm09XCJmb3JtXCIgOm1lc3NhZ2U9XCIkdCgnaW5mb191cGRhdGVkJylcIi8+XG5cbiAgICAgICAgICAgIDwhLS0gVHlwZSAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIj57eyAkdCgnZW1haWwtdHlwZScpIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwiZm9ybS50eXBlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwidHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCd0eXBlJykgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1hbnVhbFwiPk1hbnVhbGx5IFNlbmQgTGlua3M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzbXRwXCI+U01UUCBTZXJ2ZXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYWlsZ3VuXCI+TWFpbGd1bjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNwYXJrcG9zdFwiPlNwYXJrUG9zdDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNlc1wiPkFtYXpvbiBTRVM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJ0eXBlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8IS0tIFNlY3JldCAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiIHYtaWY9XCJzaG93RmllbGREb21haW5cIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCI+e3sgJHQoJ2VtYWlsLWRvbWFpbicpIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtLmRvbWFpblwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRvbWFpblwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiBmb3JtLmVycm9ycy5oYXMoJ2RvbWFpbicpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImRvbWFpblwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8IS0tIFNlY3JldCAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiIHYtaWY9XCJzaG93RmllbGRTZWNyZXRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCI+e3sgJHQoJ2VtYWlsLXNlY3JldCcpIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtLnNlY3JldFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlY3JldFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiBmb3JtLmVycm9ycy5oYXMoJ3NlY3JldCcpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cInNlY3JldFwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8IS0tIFN1Ym1pdCBCdXR0b24gLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTkgbWwtbWQtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8di1idXR0b24gdHlwZT1cInN1Y2Nlc3NcIiA6bG9hZGluZz1cImZvcm0uYnVzeVwiPnt7ICR0KCd1cGRhdGUnKSB9fTwvdi1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuXG5cblxuICAgICAgICAnbWFpbGd1bicgPT4gW1xuICAgICAgICAgICAgJ2RvbWFpbicgPT4gZW52KCdNQUlMR1VOX0RPTUFJTicpLFxuICAgICAgICAgICAgJ3NlY3JldCcgPT4gZW52KCdNQUlMR1VOX1NFQ1JFVCcpLFxuICAgICAgICBdLFxuXG4gICAgICAgICdzZXMnID0+IFtcbiAgICAgICAgICAgICdrZXknID0+IGVudignU0VTX0tFWScpLFxuICAgICAgICAgICAgJ3NlY3JldCcgPT4gZW52KCdTRVNfU0VDUkVUJyksXG4gICAgICAgICAgICAncmVnaW9uJyA9PiAndXMtZWFzdC0xJyxcbiAgICAgICAgXSxcblxuICAgICAgICAnc3Bhcmtwb3N0JyA9PiBbXG4gICAgICAgICAgICAnc2VjcmV0JyA9PiBlbnYoJ1NQQVJLUE9TVF9TRUNSRVQnKSxcbiAgICAgICAgXSxcbiAgICA8L2NhcmQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEZvcm0gZnJvbSAndmZvcm0nXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG1pZGRsZXdhcmU6ICdhZG1pbicsXG5cbiAgICBzY3JvbGxUb1RvcDogZmFsc2UsXG5cbiAgICBtZXRhSW5mbyAoKSB7XG4gICAgICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdwbGV4JykgKyAnICcgKyB0aGlzLiR0KCdzZXR0aW5ncycpIH1cbiAgICB9LFxuXG4gICAgZGF0YTogKCkgPT4gKHtcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgICAgICAgdHlwZTogJycsXG4gICAgICAgIH0pXG4gICAgfSksXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBzaG93RmllbGRTZWNyZXQgKCkge1xuICAgICAgICAgICAgcmV0dXJuIFsnbWFpbGd1bicsICdzZXMnLCAnc3Bhcmtwb3N0J10uaW5jbHVkZXModGhpcy5mb3JtLnR5cGUpXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dGaWVsZERvbWFpbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtLnR5cGUgPT09ICdtYWlsZ3VuJ1xuICAgICAgICB9LFxuICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcbiAgICAgICAgICAgIGVtYWlsOiAnY29uZmlnL2VtYWlsJ1xuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgICBlbWFpbCAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5rZXlzKCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybVtrZXldID0gdmFsdWVba2V5XVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmKCF0aGlzLmZvcm0udHlwZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS50eXBlID0gJ21hbnVhbCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNyZWF0ZWQgKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnY29uZmlnL2ZldGNoRW1haWwnKVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFzeW5jIHVwZGF0ZSAoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuZm9ybS5wb3N0KCcvYXBpL3NldHRpbmdzL2VtYWlsJylcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdjb25maWcvdXBkYXRlRW1haWwnLCBkYXRhKVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9lbWFpbC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiY2FyZFwiLFxuICAgIHsgYXR0cnM6IHsgdGl0bGU6IF92bS4kdChcImVtYWlsXCIpICsgXCIgXCIgKyBfdm0uJHQoXCJzZXR0aW5nc1wiKSB9IH0sXG4gICAgW1xuICAgICAgX3ZtLmxvYWRpbmdcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG0tNVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiR0KFwibG9hZGluZ1wiKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kdChcImVtYWlsXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiR0KFwic2V0dGluZ3NcIilcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImZhXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnbG9iYWwtc2VhcmNoaW5nLXNwaW5uZXIgbXQtM1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiY29nXCIsIHNpemU6IFwiNnhcIiwgc3BpbjogXCJcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAhX3ZtLmxvYWRpbmdcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgX3ZtLnVwZGF0ZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5mb3JtLm9uS2V5ZG93bigkZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImFsZXJ0LXN1Y2Nlc3NcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBtZXNzYWdlOiBfdm0uJHQoXCJpbmZvX3VwZGF0ZWRcIikgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJlbWFpbC10eXBlXCIpKSldXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTdcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0udHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtaW52YWxpZFwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwidHlwZVwiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJ0eXBlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJtYW51YWxcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTWFudWFsbHkgU2VuZCBMaW5rc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJzbXRwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNNVFAgU2VydmVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIm1haWxndW5cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTWFpbGd1blwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJzcGFya3Bvc3RcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU3BhcmtQb3N0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcInNlc1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJBbWF6b24gU0VTXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJ0eXBlXCIgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uc2hvd0ZpZWxkRG9tYWluXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJlbWFpbC1kb21haW5cIikpKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmRvbWFpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5kb21haW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJkb21haW5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZG9tYWluXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLmRvbWFpbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImRvbWFpblwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwiZG9tYWluXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uc2hvd0ZpZWxkU2VjcmV0XG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJlbWFpbC1zZWNyZXRcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnNlY3JldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zZWNyZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJzZWNyZXRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwic2VjcmV0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLnNlY3JldCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNlY3JldFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwic2VjcmV0XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTkgbWwtbWQtYXV0b1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHR5cGU6IFwic3VjY2Vzc1wiLCBsb2FkaW5nOiBfdm0uZm9ybS5idXN5IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJ1cGRhdGVcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcbiAgICAgICAgXCJcXG5cXG5cXG5cXG4gICAgJ21haWxndW4nID0+IFtcXG4gICAgICAgICdkb21haW4nID0+IGVudignTUFJTEdVTl9ET01BSU4nKSxcXG4gICAgICAgICdzZWNyZXQnID0+IGVudignTUFJTEdVTl9TRUNSRVQnKSxcXG4gICAgXSxcXG5cXG4gICAgJ3NlcycgPT4gW1xcbiAgICAgICAgJ2tleScgPT4gZW52KCdTRVNfS0VZJyksXFxuICAgICAgICAnc2VjcmV0JyA9PiBlbnYoJ1NFU19TRUNSRVQnKSxcXG4gICAgICAgICdyZWdpb24nID0+ICd1cy1lYXN0LTEnLFxcbiAgICBdLFxcblxcbiAgICAnc3Bhcmtwb3N0JyA9PiBbXFxuICAgICAgICAnc2VjcmV0JyA9PiBlbnYoJ1NQQVJLUE9TVF9TRUNSRVQnKSxcXG4gICAgXSxcXG5cIlxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi02NjMyZmEwZFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNjYzMmZhMGRcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2VtYWlsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMjkiXSwic291cmNlUm9vdCI6IiJ9