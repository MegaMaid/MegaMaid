webpackJsonp([6],{

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_users_vue__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_users_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_users_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_users_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_users_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05cfb30e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_users_vue__ = __webpack_require__(297);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(295)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_users_vue__["default"],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05cfb30e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_users_vue__["a" /* default */],
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

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 271:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token, expected ; (131:25)\n\n\u001b[0m \u001b[90m 129 | \u001b[39m\n \u001b[90m 130 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 131 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33mrouter\u001b[39m\u001b[33m-\u001b[39mlink \u001b[33m:\u001b[39mto\u001b[33m=\u001b[39m\u001b[32m\"{ name: 'register', params: { token: lastInvitation.token }}\"\u001b[39m\u001b[33m>\u001b[39m\u001b[33mToken\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mrouter\u001b[39m\u001b[33m-\u001b[39mlink\u001b[33m>\u001b[39m\n \u001b[90m     | \u001b[39m                         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 132 | \u001b[39m        }\n \u001b[90m 133 | \u001b[39m    }\n \u001b[90m 134 | \u001b[39m}\u001b[0m\n");

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(296);
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

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(true);
// imports


// module
exports.push([module.i, "\n.settings-users-active > .card-body {\n  padding-top: 0;\n}\n", "", {"version":3,"sources":["/sites/megamaid.test/resources/assets/js/pages/settings/users.vue"],"names":[],"mappings":";AAAA;EACE,eAAe;CAAE","file":"users.vue","sourcesContent":[".settings-users-active > .card-body {\n  padding-top: 0; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
              !_vm.isManualEmailSetting
                ? _c("alert-success", {
                    attrs: {
                      form: _vm.form,
                      message: _vm.$t("users-invite-sent")
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.showInvitationCreatedAlert
                ? _c(
                    "div",
                    {
                      staticClass: "alert alert-success",
                      attrs: { role: "alert" }
                    },
                    [
                      _c("h5", { staticClass: "alert-heading" }, [
                        _vm._v("Invitation Created!")
                      ]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "p",
                        [
                          _vm._v(_vm._s(_vm.lastInvitation.token) + "\n"),
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: "register",
                                  params: { token: _vm.lastInvitation.token }
                                }
                              }
                            },
                            [_vm._v("Token")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("p", { staticClass: "m-0" }, [
                        _c("small", [
                          _vm._v(
                            "Send the above link to the new user so they can complete the signup process."
                          )
                        ])
                      ])
                    ]
                  )
                : _vm._e(),
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
                          "\n                            " +
                            _vm._s(_vm.$t("users-invite-as-admin")) +
                            "\n                        "
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
                  [_vm._v(_vm._s(_vm.$t("name")))]
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
                          value: _vm.form.name,
                          expression: "form.name"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("name") },
                      attrs: { type: "text", name: "name" },
                      domProps: { value: _vm.form.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "name" }
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
                      attrs: { type: "email", name: "email" },
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
                    _vm.isManualEmailSetting
                      ? _c(
                          "v-button",
                          {
                            attrs: { type: "success", loading: _vm.form.busy }
                          },
                          [_vm._v(_vm._s(_vm.$t("create-invite")))]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.isManualEmailSetting
                      ? _c(
                          "v-button",
                          {
                            attrs: { type: "success", loading: _vm.form.busy }
                          },
                          [_vm._v(_vm._s(_vm.$t("invite")))]
                        )
                      : _vm._e()
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
                              _vm._s(_vm.$t("users-role")) +
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
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-05cfb30e", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3VzZXJzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3VzZXJzLnZ1ZT9jY2IxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvdXNlcnMudnVlPzFhOGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy91c2Vycy52dWU/OTVkYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBc007QUFDdE07QUFDQTtBQUNBO0FBQ2lTO0FBQ2E7QUFDOVM7QUFDaUw7QUFDakw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7O0FBRUE7QUFDQSxxQ0FBeU87QUFDek87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKQUFzSixrRkFBa0Y7QUFDeE8sK0pBQStKLGtGQUFrRjtBQUNqUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSxnRUFBaUUsbUJBQW1CLEdBQUcsVUFBVSxvSEFBb0gsS0FBSyxVQUFVLGlGQUFpRixtQkFBbUIsRUFBRSxxQkFBcUI7O0FBRS9WOzs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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MEJBQTBCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix3REFBd0Q7QUFDekU7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDhCQUE4QixvQkFBb0IsRUFBRTtBQUN6RTtBQUNBLGlDQUFpQyxxQkFBcUI7QUFDdEQsbUNBQW1DLHVCQUF1QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsdUJBQXVCO0FBQzFELG1DQUFtQyw0QkFBNEI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvNi4zZWI1NzFkNGEyZmYxY2RlMjM3OS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDVjZmIzMGVcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vdXNlcnMudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3VzZXJzLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3VzZXJzLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IF9fdnVlX3RlbXBsYXRlX18gZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDVjZmIzMGVcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi91c2Vycy52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy91c2Vycy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDVjZmIzMGVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wNWNmYjMwZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvdXNlcnMudnVlXG4vLyBtb2R1bGUgaWQgPSAyNTJcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTA1Y2ZiMzBlXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3VzZXJzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiZGJmMDdlNGFcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDVjZmIzMGVcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdXNlcnMudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTA1Y2ZiMzBlXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3VzZXJzLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0wNWNmYjMwZVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3VzZXJzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjk1XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uc2V0dGluZ3MtdXNlcnMtYWN0aXZlID4gLmNhcmQtYm9keSB7XFxuICBwYWRkaW5nLXRvcDogMDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9zaXRlcy9tZWdhbWFpZC50ZXN0L3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvdXNlcnMudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLGVBQWU7Q0FBRVwiLFwiZmlsZVwiOlwidXNlcnMudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZXR0aW5ncy11c2Vycy1hY3RpdmUgPiAuY2FyZC1ib2R5IHtcXG4gIHBhZGRpbmctdG9wOiAwOyB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTA1Y2ZiMzBlXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvdXNlcnMudnVlXG4vLyBtb2R1bGUgaWQgPSAyOTZcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImNhcmRcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLXVzZXJzLWludml0ZSBtYi0zXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS4kdChcInVzZXJzLWludml0ZVwiKSB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgX3ZtLnVwZGF0ZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5mb3JtLm9uS2V5ZG93bigkZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAhX3ZtLmlzTWFudWFsRW1haWxTZXR0aW5nXG4gICAgICAgICAgICAgICAgPyBfYyhcImFsZXJ0LXN1Y2Nlc3NcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGZvcm06IF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF92bS4kdChcInVzZXJzLWludml0ZS1zZW50XCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnNob3dJbnZpdGF0aW9uQ3JlYXRlZEFsZXJ0XG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb2xlOiBcImFsZXJ0XCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcImFsZXJ0LWhlYWRpbmdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJJbnZpdGF0aW9uIENyZWF0ZWQhXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFzdEludml0YXRpb24udG9rZW4pICsgXCJcXG5cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmVnaXN0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgdG9rZW46IF92bS5sYXN0SW52aXRhdGlvbi50b2tlbiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJUb2tlblwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm0tMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic21hbGxcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTZW5kIHRoZSBhYm92ZSBsaW5rIHRvIHRoZSBuZXcgdXNlciBzbyB0aGV5IGNhbiBjb21wbGV0ZSB0aGUgc2lnbnVwIHByb2Nlc3MuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03IG9mZnNldC1tZC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNoZWNrZWQ6IF92bS5mb3JtLmlzX2FkbWluLCBuYW1lOiBcImVuYWJsZWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmlzX2FkbWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiaXNfYWRtaW5cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uaXNfYWRtaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcInVzZXJzLWludml0ZS1hcy1hZG1pblwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJuYW1lXCIpKSldXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTdcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWludmFsaWRcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcIm5hbWVcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgbmFtZTogXCJuYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcIm5hbWVcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiZW1haWxcIikpKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1pbnZhbGlkXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJlbWFpbFwiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZW1haWxcIiwgbmFtZTogXCJlbWFpbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLmVtYWlsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZW1haWxcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImVtYWlsXCIgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTkgbWwtbWQtYXV0b1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5pc01hbnVhbEVtYWlsU2V0dGluZ1xuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VjY2Vzc1wiLCBsb2FkaW5nOiBfdm0uZm9ybS5idXN5IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiY3JlYXRlLWludml0ZVwiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICFfdm0uaXNNYW51YWxFbWFpbFNldHRpbmdcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Y2Nlc3NcIiwgbG9hZGluZzogX3ZtLmZvcm0uYnVzeSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImludml0ZVwiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtdXNlcnMtYWN0aXZlXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS4kdChcInVzZXJzXCIpIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5sb2FkaW5nXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBtLTVcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR0KFwibG9hZGluZ1wiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR0KFwidXNlcnNcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdChcInNldHRpbmdzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImZhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2xvYmFsLXNlYXJjaGluZy1zcGlubmVyIG10LTNcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJjb2dcIiwgc2l6ZTogXCI2eFwiLCBzcGluOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyBwYi0yXCIgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0udXNlcnMsIGZ1bmN0aW9uKHVzZXIsIGlkeCkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IGtleTogdXNlci5pZCArIFwiLVwiICsgdXNlci5lbWFpbCwgc3RhdGljQ2xhc3M6IFwiY29sLTZcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC00XCIsIGF0dHJzOiB7IHRpdGxlOiB1c2VyLmVtYWlsIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoNVwiLCBbX3ZtLl92KF92bS5fcyh1c2VyLm5hbWUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC02XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJ1c2Vycy1yb2xlXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh1c2VyLnJvbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTA1Y2ZiMzBlXCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDVjZmIzMGVcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3VzZXJzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjk3XG4vLyBtb2R1bGUgY2h1bmtzID0gNiJdLCJzb3VyY2VSb290IjoiIn0=