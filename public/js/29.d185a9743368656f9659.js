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

    computed: Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapGetters */])({
        plex: 'config/email'
    }),

    watch: {
        plex: function plex(value) {
            var _this = this;

            this.form.keys().forEach(function (key) {
                _this.form[key] = value[key];
            });
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
                            _vm._s(_vm.$t("plex")) +
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
                  [_vm._v(_vm._s(_vm.$t("email-type")))]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-7" }, [
                  _c(
                    "select",
                    {
                      staticClass: "form-control",
                      attrs: { id: "exampleFormControlSelect2" }
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
                  )
                ])
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
    require("vue-hot-reload-api")      .rerender("data-v-6632fa0d", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2VtYWlsLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9lbWFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9lbWFpbC52dWU/ZGI5NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFtTDtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRUE7QUFDQTs7QUFFQTtnQkFHQTs7aUJBRUE7O2tDQUNBO3dEQUNBO0FBRUE7Ozs7O3FCQUVBOztzQkFLQTtBQUpBO0FBRkE7Ozs7Y0FVQTtBQUhBOzs7O0FBS0E7O29EQUNBO3dDQUNBO0FBQ0E7MkJBQ0E7QUFHQTtBQVJBOztnQ0FTQTt1QkFDQTs2QkFDQTtBQUVBOzs7O0FBRUE7QUFEQTs7Ozs7Ozs7c0RBRUE7Ozs7OzsyRUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF2Q0EsRzs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFNBQVMsb0RBQW9ELEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlDQUFpQztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0EseUJBQXlCLGdDQUFnQztBQUN6RDtBQUNBO0FBQ0EsbUJBQW1CLHNDQUFzQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw2Q0FBNkM7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0NBQWdDO0FBQ3pEO0FBQ0E7QUFDQSxtQkFBbUIsdURBQXVEO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIscUJBQXFCO0FBQ3JCO0FBQ0Esb0NBQW9DLFNBQVMsa0JBQWtCLEVBQUU7QUFDakU7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFNBQVMsZ0JBQWdCLEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFNBQVMsbUJBQW1CLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFNBQVMscUJBQXFCLEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFNBQVMsZUFBZSxFQUFFO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdDQUFnQztBQUN6RDtBQUNBO0FBQ0EsbUJBQW1CLHFDQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUywwQ0FBMEMsRUFBRTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvMjkuZDE4NWE5NzQzMzY4NjU2Zjk2NTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9lbWFpbC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTY2MzJmYTBkXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZW1haWwudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvZW1haWwudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTY2MzJmYTBkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjYzMmZhMGRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvZW1haWwudnVlXG4vLyBtb2R1bGUgaWQgPSAzMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAyOSIsIjx0ZW1wbGF0ZT5cbiAgICA8Y2FyZCA6dGl0bGU9XCIkdCgnZW1haWwnKSArICcgJyArICR0KCdzZXR0aW5ncycpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtLTVcIiB2LWlmPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgPGgyPnt7ICR0KCdsb2FkaW5nJykgKyAnICcgKyAkdCgnZW1haWwnKSArICcgJyArICR0KCdzZXR0aW5ncycpIH19PC9oMj5cbiAgICAgICAgICAgIDxmYSBjbGFzcz1cImdsb2JhbC1zZWFyY2hpbmctc3Bpbm5lciBtdC0zXCIgaWNvbj1cImNvZ1wiIHNpemU9XCI2eFwiIHNwaW4gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwidXBkYXRlXCIgQGtleWRvd249XCJmb3JtLm9uS2V5ZG93bigkZXZlbnQpXCIgdi1pZj1cIiEgbG9hZGluZ1wiPlxuICAgICAgICAgICAgPGFsZXJ0LXN1Y2Nlc3MgOmZvcm09XCJmb3JtXCIgOm1lc3NhZ2U9XCIkdCgnaW5mb191cGRhdGVkJylcIi8+XG5cbiAgICAgICAgICAgIDwhLS0gVHlwZSAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNyBvZmZzZXQtbWQtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8Y2hlY2tib3ggdi1tb2RlbD1cImZvcm0uZW5hYmxlZFwiIDpjaGVja2VkPVwiZm9ybS5lbmFibGVkXCIgbmFtZT1cImVuYWJsZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KCdlbmFibGVkJykgfX0ge3sgJHQoJ3BsZXgnKSB9fVxuICAgICAgICAgICAgICAgICAgICA8L2NoZWNrYm94PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIj57eyAkdCgnZW1haWwtdHlwZScpIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiZXhhbXBsZUZvcm1Db250cm9sU2VsZWN0MlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1hbnVhbFwiPk1hbnVhbGx5IFNlbmQgTGlua3M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzbXRwXCI+U01UUCBTZXJ2ZXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYWlsZ3VuXCI+TWFpbGd1bjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNwYXJrcG9zdFwiPlNwYXJrUG9zdDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNlc1wiPkFtYXpvbiBTRVM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPCEtLSBTdWJtaXQgQnV0dG9uIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC05IG1sLW1kLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtYnV0dG9uIHR5cGU9XCJzdWNjZXNzXCIgOmxvYWRpbmc9XCJmb3JtLmJ1c3lcIj57eyAkdCgndXBkYXRlJykgfX08L3YtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2NhcmQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEZvcm0gZnJvbSAndmZvcm0nXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG1pZGRsZXdhcmU6ICdhZG1pbicsXG5cbiAgICBzY3JvbGxUb1RvcDogZmFsc2UsXG5cbiAgICBtZXRhSW5mbyAoKSB7XG4gICAgICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdwbGV4JykgKyAnICcgKyB0aGlzLiR0KCdzZXR0aW5ncycpIH1cbiAgICB9LFxuXG4gICAgZGF0YTogKCkgPT4gKHtcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgICAgICAgdHlwZTogJycsXG4gICAgICAgIH0pXG4gICAgfSksXG5cbiAgICBjb21wdXRlZDogbWFwR2V0dGVycyh7XG4gICAgICAgIHBsZXg6ICdjb25maWcvZW1haWwnXG4gICAgfSksXG5cbiAgICB3YXRjaDoge1xuICAgICAgICBwbGV4ICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLmtleXMoKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtW2tleV0gPSB2YWx1ZVtrZXldXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY3JlYXRlZCAoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdjb25maWcvZmV0Y2hFbWFpbCcpXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYXN5bmMgdXBkYXRlICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5mb3JtLnBvc3QoJy9hcGkvc2V0dGluZ3MvZW1haWwnKVxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2NvbmZpZy91cGRhdGVFbWFpbCcsIGRhdGEpXG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2VtYWlsLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJjYXJkXCIsXG4gICAgeyBhdHRyczogeyB0aXRsZTogX3ZtLiR0KFwiZW1haWxcIikgKyBcIiBcIiArIF92bS4kdChcInNldHRpbmdzXCIpIH0gfSxcbiAgICBbXG4gICAgICBfdm0ubG9hZGluZ1xuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbS01XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICBfdm0uJHQoXCJsb2FkaW5nXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiR0KFwiZW1haWxcIikgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHQoXCJzZXR0aW5nc1wiKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZmFcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdsb2JhbC1zZWFyY2hpbmctc3Bpbm5lciBtdC0zXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJjb2dcIiwgc2l6ZTogXCI2eFwiLCBzcGluOiBcIlwiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICFfdm0ubG9hZGluZ1xuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICBfdm0udXBkYXRlKCRldmVudClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGtleWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0ub25LZXlkb3duKCRldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiYWxlcnQtc3VjY2Vzc1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIG1lc3NhZ2U6IF92bS4kdChcImluZm9fdXBkYXRlZFwiKSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTcgb2Zmc2V0LW1kLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2hlY2tlZDogX3ZtLmZvcm0uZW5hYmxlZCwgbmFtZTogXCJlbmFibGVkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbmFibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZW5hYmxlZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5lbmFibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiZW5hYmxlZFwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwicGxleFwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiZW1haWwtdHlwZVwiKSkpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJleGFtcGxlRm9ybUNvbnRyb2xTZWxlY3QyXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJtYW51YWxcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk1hbnVhbGx5IFNlbmQgTGlua3NcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwic210cFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU01UUCBTZXJ2ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwibWFpbGd1blwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTWFpbGd1blwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJzcGFya3Bvc3RcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNwYXJrUG9zdFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJzZXNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkFtYXpvbiBTRVNcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtOSBtbC1tZC1hdXRvXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdHlwZTogXCJzdWNjZXNzXCIsIGxvYWRpbmc6IF92bS5mb3JtLmJ1c3kgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInVwZGF0ZVwiKSkpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTY2MzJmYTBkXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02NjMyZmEwZFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvZW1haWwudnVlXG4vLyBtb2R1bGUgaWQgPSAzMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAyOSJdLCJzb3VyY2VSb290IjoiIn0=