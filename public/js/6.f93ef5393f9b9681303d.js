webpackJsonp([6],{

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(288)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(290)
/* template */
var __vue_template__ = __webpack_require__(291)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources/assets/js/pages/settings/users.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05cfb30e", Component.options)
  } else {
    hotAPI.reload("data-v-05cfb30e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(289);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("dbf07e4a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-05cfb30e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./users.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-05cfb30e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./users.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(true);
// imports


// module
exports.push([module.i, "\n.settings-users-active > .card-body {\n  padding-top: 0;\n}\n", "", {"version":3,"sources":["/sites/megamaid.test/resources/assets/js/pages/settings/users.vue"],"names":[],"mappings":";AAAA;EACE,eAAe;CAAE","file":"users.vue","sourcesContent":[".settings-users-active > .card-body {\n  padding-top: 0; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vform__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(27);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        return { title: this.$t('users') + ' ' + this.$t('settings') };
    },


    data: function data() {
        return {
            loading: true
        };
    },

    computed: Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])({
        users: 'config/users'
    }),

    watch: {
        users: function users(value) {
            this.loading = false;
        }
    },

    created: function created() {
        this.loading = true;
        this.$store.dispatch('config/fetchUsers');
    }
});

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "card",
        {
          staticClass: "settings-users-invite mb-3",
          attrs: { title: _vm.$t("users-invite") }
        },
        [
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
                        attrs: { checked: _vm.form.is_admin, name: "enabled" },
                        model: {
                          value: _vm.form.is_admin,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "is_admin", $$v)
                          },
                          expression: "form.is_admin"
                        }
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.$t("users-invite-as-admin")) +
                            "\n                    "
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
                  [_vm._v(_vm._s(_vm.$t("email")))]
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
                          value: _vm.form.email,
                          expression: "form.email"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("email") },
                      attrs: { type: "text", name: "hostname" },
                      domProps: { value: _vm.form.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "email", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "email" }
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
                      [_vm._v(_vm._s(_vm.$t("invite")))]
                    )
                  ],
                  1
                )
              ])
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "card",
        {
          staticClass: "settings-users-active",
          attrs: { title: _vm.$t("users") }
        },
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
                          _vm.$t("users") +
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
          _c(
            "div",
            { staticClass: "row pb-2" },
            _vm._l(_vm.users, function(user, idx) {
              return _c(
                "div",
                { key: user.id + "-" + user.email, staticClass: "col-6" },
                [
                  _c(
                    "card",
                    { staticClass: "mt-4", attrs: { title: user.email } },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-6" }, [
                          _c("h5", [_vm._v(_vm._s(user.name))])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-6" }, [
                          _c("p", { staticClass: "text-right" }, [
                            _vm._v(
                              _vm._s(_vm.$t("user-role")) +
                                ": " +
                                _vm._s(user.role)
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ],
                1
              )
            })
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-05cfb30e", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3VzZXJzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3VzZXJzLnZ1ZT9jY2IxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvdXNlcnMudnVlPzFhOGUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvdXNlcnMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvdXNlcnMudnVlPzk1ZGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBc007QUFDdE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBeU87QUFDek87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKQUFzSixrRkFBa0Y7QUFDeE8sK0pBQStKLGtGQUFrRjtBQUNqUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSxnRUFBaUUsbUJBQW1CLEdBQUcsVUFBVSxvSEFBb0gsS0FBSyxVQUFVLGlGQUFpRixtQkFBbUIsRUFBRSxxQkFBcUI7O0FBRS9WOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM2Q0E7QUFDQTs7QUFFQTtnQkFHQTs7aUJBRUE7O2tDQUNBO3lEQUNBO0FBRUE7Ozs7O3FCQUlBO0FBSEE7Ozs7ZUFPQTtBQUhBOzs7cUNBS0E7MkJBQ0E7QUFHQTtBQUxBOztnQ0FNQTt1QkFDQTs2QkFDQTtBQUNBO0FBMUJBLEc7Ozs7Ozs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBLHlCQUF5QixnQ0FBZ0M7QUFDekQ7QUFDQTtBQUNBLG1CQUFtQixzQ0FBc0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsOENBQThDO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0NBQWdDO0FBQ3pEO0FBQ0E7QUFDQSxtQkFBbUIsdURBQXVEO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNkNBQTZDO0FBQzNFLDhCQUE4QixpQ0FBaUM7QUFDL0QsaUNBQWlDLHdCQUF3QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0NBQWdDO0FBQ3pEO0FBQ0E7QUFDQSxtQkFBbUIscUNBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLDBDQUEwQyxFQUFFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQ0FBaUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMEJBQTBCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix3REFBd0Q7QUFDekU7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDhCQUE4QixvQkFBb0IsRUFBRTtBQUN6RTtBQUNBLGlDQUFpQyxxQkFBcUI7QUFDdEQsbUNBQW1DLHVCQUF1QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsdUJBQXVCO0FBQzFELG1DQUFtQyw0QkFBNEI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzYuZjkzZWY1MzkzZjliOTY4MTMwM2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTA1Y2ZiMzBlXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3VzZXJzLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi91c2Vycy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTA1Y2ZiMzBlXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdXNlcnMudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3VzZXJzLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wNWNmYjMwZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTA1Y2ZiMzBlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3VzZXJzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjUzXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wNWNmYjMwZVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi91c2Vycy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImRiZjA3ZTRhXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTA1Y2ZiMzBlXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3VzZXJzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wNWNmYjMwZVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi91c2Vycy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMDVjZmIzMGVcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy91c2Vycy52dWVcbi8vIG1vZHVsZSBpZCA9IDI4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnNldHRpbmdzLXVzZXJzLWFjdGl2ZSA+IC5jYXJkLWJvZHkge1xcbiAgcGFkZGluZy10b3A6IDA7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvc2l0ZXMvbWVnYW1haWQudGVzdC9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3VzZXJzLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQUE7RUFDRSxlQUFlO0NBQUVcIixcImZpbGVcIjpcInVzZXJzLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2V0dGluZ3MtdXNlcnMtYWN0aXZlID4gLmNhcmQtYm9keSB7XFxuICBwYWRkaW5nLXRvcDogMDsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0wNWNmYjMwZVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3VzZXJzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjg5XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8Y2FyZCA6dGl0bGU9XCIkdCgndXNlcnMtaW52aXRlJylcIiBjbGFzcz1cInNldHRpbmdzLXVzZXJzLWludml0ZSBtYi0zXCI+XG4gICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJ1cGRhdGVcIiBAa2V5ZG93bj1cImZvcm0ub25LZXlkb3duKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8YWxlcnQtc3VjY2VzcyA6Zm9ybT1cImZvcm1cIiA6bWVzc2FnZT1cIiR0KCdpbmZvX3VwZGF0ZWQnKVwiLz5cblxuICAgICAgICAgICAgICAgIDwhLS0gRW5hYmxlZCAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03IG9mZnNldC1tZC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2hlY2tib3ggdi1tb2RlbD1cImZvcm0uaXNfYWRtaW5cIiA6Y2hlY2tlZD1cImZvcm0uaXNfYWRtaW5cIiBuYW1lPVwiZW5hYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KCd1c2Vycy1pbnZpdGUtYXMtYWRtaW4nKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIEhvc3RuYW1lIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCI+e3sgJHQoJ2VtYWlsJykgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImhvc3RuYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiBmb3JtLmVycm9ycy5oYXMoJ2VtYWlsJykgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImVtYWlsXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8IS0tIFN1Ym1pdCBCdXR0b24gLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOSBtbC1tZC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idXR0b24gdHlwZT1cInN1Y2Nlc3NcIiA6bG9hZGluZz1cImZvcm0uYnVzeVwiPnt7ICR0KCdpbnZpdGUnKSB9fTwvdi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2NhcmQ+XG4gICAgICAgIDxjYXJkIDp0aXRsZT1cIiR0KCd1c2VycycpXCIgY2xhc3M9XCJzZXR0aW5ncy11c2Vycy1hY3RpdmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtLTVcIiB2LWlmPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxoMj57eyAkdCgnbG9hZGluZycpICsgJyAnICsgJHQoJ3VzZXJzJykgKyAnICcgKyAkdCgnc2V0dGluZ3MnKSB9fTwvaDI+XG4gICAgICAgICAgICAgICAgPGZhIGNsYXNzPVwiZ2xvYmFsLXNlYXJjaGluZy1zcGlubmVyIG10LTNcIiBpY29uPVwiY29nXCIgc2l6ZT1cIjZ4XCIgc3BpbiAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcGItMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiIHYtZm9yPVwidXNlciwgaWR4IGluIHVzZXJzXCIgOmtleT1cInVzZXIuaWQgKyAnLScgKyB1c2VyLmVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxjYXJkIDp0aXRsZT1cInVzZXIuZW1haWxcIiBjbGFzcz1cIm10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPjxoNT57eyB1c2VyLm5hbWUgfX08L2g1PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+PHAgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+e3sgJHQoJ3VzZXItcm9sZScpIH19OiB7eyB1c2VyLnJvbGUgfX08L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9jYXJkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvY2FyZD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgRm9ybSBmcm9tICd2Zm9ybSdcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbWlkZGxld2FyZTogJ2FkbWluJyxcblxuICAgIHNjcm9sbFRvVG9wOiBmYWxzZSxcblxuICAgIG1ldGFJbmZvICgpIHtcbiAgICAgICAgcmV0dXJuIHsgdGl0bGU6IHRoaXMuJHQoJ3VzZXJzJykgKyAnICcgKyB0aGlzLiR0KCdzZXR0aW5ncycpIH1cbiAgICB9LFxuXG4gICAgZGF0YTogKCkgPT4gKHtcbiAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgIH0pLFxuXG4gICAgY29tcHV0ZWQ6IG1hcEdldHRlcnMoe1xuICAgICAgICB1c2VyczogJ2NvbmZpZy91c2VycydcbiAgICB9KSxcblxuICAgIHdhdGNoOiB7XG4gICAgICAgIHVzZXJzICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY3JlYXRlZCAoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdjb25maWcvZmV0Y2hVc2VycycpXG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICAgIC5zZXR0aW5ncy11c2Vycy1hY3RpdmUge1xuICAgICAgICAmID4gLmNhcmQtYm9keSB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgfVxuICAgIH1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy91c2Vycy52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtdXNlcnMtaW52aXRlIG1iLTNcIixcbiAgICAgICAgICBhdHRyczogeyB0aXRsZTogX3ZtLiR0KFwidXNlcnMtaW52aXRlXCIpIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICBfdm0udXBkYXRlKCRldmVudClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGtleWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0ub25LZXlkb3duKCRldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiYWxlcnQtc3VjY2Vzc1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIG1lc3NhZ2U6IF92bS4kdChcImluZm9fdXBkYXRlZFwiKSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTcgb2Zmc2V0LW1kLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2hlY2tlZDogX3ZtLmZvcm0uaXNfYWRtaW4sIG5hbWU6IFwiZW5hYmxlZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uaXNfYWRtaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJpc19hZG1pblwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5pc19hZG1pblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJ1c2Vycy1pbnZpdGUtYXMtYWRtaW5cIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJlbWFpbFwiKSkpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWludmFsaWRcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImVtYWlsXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiaG9zdG5hbWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5lbWFpbCB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImVtYWlsXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJlbWFpbFwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC05IG1sLW1kLWF1dG9cIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0eXBlOiBcInN1Y2Nlc3NcIiwgbG9hZGluZzogX3ZtLmZvcm0uYnVzeSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiaW52aXRlXCIpKSldXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtdXNlcnMtYWN0aXZlXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS4kdChcInVzZXJzXCIpIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5sb2FkaW5nXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBtLTVcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR0KFwibG9hZGluZ1wiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR0KFwidXNlcnNcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdChcInNldHRpbmdzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImZhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2xvYmFsLXNlYXJjaGluZy1zcGlubmVyIG10LTNcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJjb2dcIiwgc2l6ZTogXCI2eFwiLCBzcGluOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyBwYi0yXCIgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0udXNlcnMsIGZ1bmN0aW9uKHVzZXIsIGlkeCkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IGtleTogdXNlci5pZCArIFwiLVwiICsgdXNlci5lbWFpbCwgc3RhdGljQ2xhc3M6IFwiY29sLTZcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC00XCIsIGF0dHJzOiB7IHRpdGxlOiB1c2VyLmVtYWlsIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoNVwiLCBbX3ZtLl92KF92bS5fcyh1c2VyLm5hbWUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC02XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJ1c2VyLXJvbGVcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHVzZXIucm9sZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0wNWNmYjMwZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDVjZmIzMGVcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3VzZXJzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjkxXG4vLyBtb2R1bGUgY2h1bmtzID0gNiJdLCJzb3VyY2VSb290IjoiIn0=