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
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log(form.type);
                                // const { data } = await this.form.post('/api/settings/email')
                                // this.$store.dispatch('config/updateEmail', data)

                            case 1:
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
                      attrs: {
                        model: "form.type",
                        id: "exampleFormControlSelect2"
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Not Configured")
                      ]),
                      _vm._v("Manually Send Links"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2VtYWlsLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9lbWFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9lbWFpbC52dWU/ZGI5NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFtTDtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0dBO0FBQ0E7O0FBRUE7Z0JBR0E7O2lCQUVBOztrQ0FDQTt3REFDQTtBQUVBOzs7OztxQkFFQTs7c0JBS0E7QUFKQTtBQUZBOzs7O2NBVUE7QUFIQTs7OztBQUtBOztvREFDQTt3Q0FDQTtBQUNBOzJCQUNBO0FBR0E7QUFSQTs7Z0NBU0E7dUJBQ0E7NkJBQ0E7QUFFQTs7OztBQUVBO0FBREE7Ozs7O2lEQUVBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF4Q0EsRzs7Ozs7OztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFNBQVMsb0RBQW9ELEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlDQUFpQztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0EseUJBQXlCLGdDQUFnQztBQUN6RDtBQUNBO0FBQ0EsbUJBQW1CLHNDQUFzQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw2Q0FBNkM7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0NBQWdDO0FBQ3pEO0FBQ0E7QUFDQSxtQkFBbUIsdURBQXVEO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLG9DQUFvQyxTQUFTLFlBQVksRUFBRTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxTQUFTLGdCQUFnQixFQUFFO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxTQUFTLG1CQUFtQixFQUFFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxTQUFTLHFCQUFxQixFQUFFO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxTQUFTLGVBQWUsRUFBRTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQ0FBZ0M7QUFDekQ7QUFDQTtBQUNBLG1CQUFtQixxQ0FBcUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVMsMENBQTBDLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzI5Ljc1MTRkYmJkMWQ0ODg0NTNiZjc0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZW1haWwudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02NjMyZmEwZFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2VtYWlsLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2VtYWlsLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02NjMyZmEwZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTY2MzJmYTBkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2VtYWlsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMjkiLCI8dGVtcGxhdGU+XG4gICAgPGNhcmQgOnRpdGxlPVwiJHQoJ2VtYWlsJykgKyAnICcgKyAkdCgnc2V0dGluZ3MnKVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbS01XCIgdi1pZj1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxoMj57eyAkdCgnbG9hZGluZycpICsgJyAnICsgJHQoJ2VtYWlsJykgKyAnICcgKyAkdCgnc2V0dGluZ3MnKSB9fTwvaDI+XG4gICAgICAgICAgICA8ZmEgY2xhc3M9XCJnbG9iYWwtc2VhcmNoaW5nLXNwaW5uZXIgbXQtM1wiIGljb249XCJjb2dcIiBzaXplPVwiNnhcIiBzcGluIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInVwZGF0ZVwiIEBrZXlkb3duPVwiZm9ybS5vbktleWRvd24oJGV2ZW50KVwiIHYtaWY9XCIhIGxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxhbGVydC1zdWNjZXNzIDpmb3JtPVwiZm9ybVwiIDptZXNzYWdlPVwiJHQoJ2luZm9fdXBkYXRlZCcpXCIvPlxuXG4gICAgICAgICAgICA8IS0tIFR5cGUgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTcgb2Zmc2V0LW1kLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGNoZWNrYm94IHYtbW9kZWw9XCJmb3JtLmVuYWJsZWRcIiA6Y2hlY2tlZD1cImZvcm0uZW5hYmxlZFwiIG5hbWU9XCJlbmFibGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgnZW5hYmxlZCcpIH19IHt7ICR0KCdwbGV4JykgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9jaGVja2JveD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCI+e3sgJHQoJ2VtYWlsLXR5cGUnKSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbW9kZWw9XCJmb3JtLnR5cGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiZXhhbXBsZUZvcm1Db250cm9sU2VsZWN0MlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPk5vdCBDb25maWd1cmVkPC9vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYW51YWxcIj5NYW51YWxseSBTZW5kIExpbmtzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic210cFwiPlNNVFAgU2VydmVyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWFpbGd1blwiPk1haWxndW48L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzcGFya3Bvc3RcIj5TcGFya1Bvc3Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzZXNcIj5BbWF6b24gU0VTPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwhLS0gU3VibWl0IEJ1dHRvbiAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOSBtbC1tZC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ1dHRvbiB0eXBlPVwic3VjY2Vzc1wiIDpsb2FkaW5nPVwiZm9ybS5idXN5XCI+e3sgJHQoJ3VwZGF0ZScpIH19PC92LWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9jYXJkPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBGb3JtIGZyb20gJ3Zmb3JtJ1xuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaWRkbGV3YXJlOiAnYWRtaW4nLFxuXG4gICAgc2Nyb2xsVG9Ub3A6IGZhbHNlLFxuXG4gICAgbWV0YUluZm8gKCkge1xuICAgICAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgncGxleCcpICsgJyAnICsgdGhpcy4kdCgnc2V0dGluZ3MnKSB9XG4gICAgfSxcblxuICAgIGRhdGE6ICgpID0+ICh7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICAgIHR5cGU6ICcnLFxuICAgICAgICB9KVxuICAgIH0pLFxuXG4gICAgY29tcHV0ZWQ6IG1hcEdldHRlcnMoe1xuICAgICAgICBwbGV4OiAnY29uZmlnL2VtYWlsJ1xuICAgIH0pLFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgcGxleCAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5rZXlzKCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybVtrZXldID0gdmFsdWVba2V5XVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNyZWF0ZWQgKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnY29uZmlnL2ZldGNoRW1haWwnKVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFzeW5jIHVwZGF0ZSAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtLnR5cGUpXG4gICAgICAgICAgICAvLyBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuZm9ybS5wb3N0KCcvYXBpL3NldHRpbmdzL2VtYWlsJylcbiAgICAgICAgICAgIC8vIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdjb25maWcvdXBkYXRlRW1haWwnLCBkYXRhKVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9lbWFpbC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiY2FyZFwiLFxuICAgIHsgYXR0cnM6IHsgdGl0bGU6IF92bS4kdChcImVtYWlsXCIpICsgXCIgXCIgKyBfdm0uJHQoXCJzZXR0aW5nc1wiKSB9IH0sXG4gICAgW1xuICAgICAgX3ZtLmxvYWRpbmdcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG0tNVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiR0KFwibG9hZGluZ1wiKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kdChcImVtYWlsXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiR0KFwic2V0dGluZ3NcIilcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImZhXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnbG9iYWwtc2VhcmNoaW5nLXNwaW5uZXIgbXQtM1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiY29nXCIsIHNpemU6IFwiNnhcIiwgc3BpbjogXCJcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAhX3ZtLmxvYWRpbmdcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgX3ZtLnVwZGF0ZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5mb3JtLm9uS2V5ZG93bigkZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImFsZXJ0LXN1Y2Nlc3NcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBtZXNzYWdlOiBfdm0uJHQoXCJpbmZvX3VwZGF0ZWRcIikgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03IG9mZnNldC1tZC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNoZWNrZWQ6IF92bS5mb3JtLmVuYWJsZWQsIG5hbWU6IFwiZW5hYmxlZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZW5hYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImVuYWJsZWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW5hYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcImVuYWJsZWRcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcInBsZXhcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImVtYWlsLXR5cGVcIikpKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiBcImZvcm0udHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZXhhbXBsZUZvcm1Db250cm9sU2VsZWN0MlwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk5vdCBDb25maWd1cmVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTWFudWFsbHkgU2VuZCBMaW5rc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwic210cFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU01UUCBTZXJ2ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwibWFpbGd1blwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTWFpbGd1blwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJzcGFya3Bvc3RcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNwYXJrUG9zdFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJzZXNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkFtYXpvbiBTRVNcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtOSBtbC1tZC1hdXRvXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdHlwZTogXCJzdWNjZXNzXCIsIGxvYWRpbmc6IF92bS5mb3JtLmJ1c3kgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInVwZGF0ZVwiKSkpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTY2MzJmYTBkXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02NjMyZmEwZFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvZW1haWwudnVlXG4vLyBtb2R1bGUgaWQgPSAzMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAyOSJdLCJzb3VyY2VSb290IjoiIn0=