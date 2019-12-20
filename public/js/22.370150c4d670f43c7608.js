webpackJsonp([22],{

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_users_vue__ = __webpack_require__(269);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05cfb30e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_users_vue__ = __webpack_require__(294);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(292)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_users_vue__["a" /* default */],
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

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform__ = __webpack_require__(78);
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




/* harmony default export */ __webpack_exports__["a"] = ({
    middleware: 'admin',

    scrollToTop: false,

    metaInfo: function metaInfo() {
        return { title: this.$t('users') + ' ' + this.$t('settings') };
    },


    data: function data() {
        return {
            loading: true,
            form: new __WEBPACK_IMPORTED_MODULE_1_vform___default.a({
                is_admin: false,
                name: '',
                email: ''
            })
        };
    },

    computed: Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapGetters */])({
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
                                return this.form.post('/api/settings/users/invite');

                            case 2:
                                _ref2 = _context.sent;
                                data = _ref2.data;

                                this.form.reset();

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

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(293);
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

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(true);
// imports


// module
exports.push([module.i, "\n.settings-users-active > .card-body {\n  padding-top: 0;\n}\n", "", {"version":3,"sources":["/sites/megamaid.test/resources/assets/js/pages/settings/users.vue"],"names":[],"mappings":";AAAA;EACE,eAAe;CAAE","file":"users.vue","sourcesContent":[".settings-users-active > .card-body {\n  padding-top: 0; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 294:
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
              _c("alert-success", {
                attrs: { form: _vm.form, message: _vm.$t("users-invite-sent") }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3VzZXJzLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy91c2Vycy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy91c2Vycy52dWU/Y2NiMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3VzZXJzLnZ1ZT8xYThlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvdXNlcnMudnVlPzk1ZGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBc007QUFDdE07QUFDQTtBQUNBO0FBQ2lTO0FBQ2E7QUFDOVM7QUFDaUw7QUFDakw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDa0JBO0FBQ0E7O0FBRUE7Z0JBR0E7O2lCQUVBOztrQ0FDQTt5REFDQTtBQUVBOzs7OztxQkFFQTs7MEJBRUE7c0JBQ0E7dUJBSUE7QUFOQTtBQUZBOzs7O2VBWUE7QUFIQTs7O3FDQUtBOzJCQUNBO0FBR0E7QUFMQTs7Z0NBTUE7dUJBQ0E7NkJBQ0E7QUFFQTs7OztBQUVBO0FBREE7Ozs7Ozs7O3NEQUVBOzs7Ozs7MENBR0E7Ozs7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Q0E7QUFDQSxxQkFBcUIsOEJBQThCLG9CQUFvQixFQUFFO0FBQ3pFO0FBQ0EsaUNBQWlDLHFCQUFxQjtBQUN0RCxtQ0FBbUMsdUJBQXVCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx1QkFBdUI7QUFDMUQsbUNBQW1DLDRCQUE0QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy8yMi4zNzAxNTBjNGQ2NzBmNDNjNzYwOC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDVjZmIzMGVcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vdXNlcnMudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3VzZXJzLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3VzZXJzLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IF9fdnVlX3RlbXBsYXRlX18gZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDVjZmIzMGVcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi91c2Vycy52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy91c2Vycy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDVjZmIzMGVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wNWNmYjMwZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvdXNlcnMudnVlXG4vLyBtb2R1bGUgaWQgPSAyNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAyMiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8Y2FyZCA6dGl0bGU9XCIkdCgndXNlcnMtaW52aXRlJylcIiBjbGFzcz1cInNldHRpbmdzLXVzZXJzLWludml0ZSBtYi0zXCI+XG4gICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJ1cGRhdGVcIiBAa2V5ZG93bj1cImZvcm0ub25LZXlkb3duKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8YWxlcnQtc3VjY2VzcyA6Zm9ybT1cImZvcm1cIiA6bWVzc2FnZT1cIiR0KCd1c2Vycy1pbnZpdGUtc2VudCcpXCIvPlxuXG4gICAgICAgICAgICAgICAgPCEtLSBFbmFibGVkIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTcgb2Zmc2V0LW1kLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaGVja2JveCB2LW1vZGVsPVwiZm9ybS5pc19hZG1pblwiIDpjaGVja2VkPVwiZm9ybS5pc19hZG1pblwiIG5hbWU9XCJlbmFibGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoJ3VzZXJzLWludml0ZS1hcy1hZG1pbicpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2NoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwhLS0gTmFtZSAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCduYW1lJykgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS5uYW1lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCduYW1lJykgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cIm5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPCEtLSBFbWFpbCAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCdlbWFpbCcpIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm0uZW1haWxcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IGZvcm0uZXJyb3JzLmhhcygnZW1haWwnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiZW1haWxcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPCEtLSBTdWJtaXQgQnV0dG9uIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTkgbWwtbWQtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnV0dG9uIHR5cGU9XCJzdWNjZXNzXCIgOmxvYWRpbmc9XCJmb3JtLmJ1c3lcIj57eyAkdCgnaW52aXRlJykgfX08L3YtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9jYXJkPlxuICAgICAgICA8Y2FyZCA6dGl0bGU9XCIkdCgndXNlcnMnKVwiIGNsYXNzPVwic2V0dGluZ3MtdXNlcnMtYWN0aXZlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbS01XCIgdi1pZj1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICA8aDI+e3sgJHQoJ2xvYWRpbmcnKSArICcgJyArICR0KCd1c2VycycpICsgJyAnICsgJHQoJ3NldHRpbmdzJykgfX08L2gyPlxuICAgICAgICAgICAgICAgIDxmYSBjbGFzcz1cImdsb2JhbC1zZWFyY2hpbmctc3Bpbm5lciBtdC0zXCIgaWNvbj1cImNvZ1wiIHNpemU9XCI2eFwiIHNwaW4gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHBiLTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIiB2LWZvcj1cInVzZXIsIGlkeCBpbiB1c2Vyc1wiIDprZXk9XCJ1c2VyLmlkICsgJy0nICsgdXNlci5lbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICA8Y2FyZCA6dGl0bGU9XCJ1c2VyLmVtYWlsXCIgY2xhc3M9XCJtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj48aDU+e3sgdXNlci5uYW1lIH19PC9oNT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPjxwIGNsYXNzPVwidGV4dC1yaWdodFwiPnt7ICR0KCd1c2Vycy1yb2xlJykgfX06IHt7IHVzZXIucm9sZSB9fTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2NhcmQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9jYXJkPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBGb3JtIGZyb20gJ3Zmb3JtJ1xuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaWRkbGV3YXJlOiAnYWRtaW4nLFxuXG4gICAgc2Nyb2xsVG9Ub3A6IGZhbHNlLFxuXG4gICAgbWV0YUluZm8gKCkge1xuICAgICAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgndXNlcnMnKSArICcgJyArIHRoaXMuJHQoJ3NldHRpbmdzJykgfVxuICAgIH0sXG5cbiAgICBkYXRhOiAoKSA9PiAoe1xuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgICAgICBpc19hZG1pbjogZmFsc2UsXG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgfSlcbiAgICB9KSxcblxuICAgIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKHtcbiAgICAgICAgdXNlcnM6ICdjb25maWcvdXNlcnMnXG4gICAgfSksXG5cbiAgICB3YXRjaDoge1xuICAgICAgICB1c2VycyAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNyZWF0ZWQgKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnY29uZmlnL2ZldGNoVXNlcnMnKVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFzeW5jIHVwZGF0ZSAoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuZm9ybS5wb3N0KCcvYXBpL3NldHRpbmdzL3VzZXJzL2ludml0ZScpXG4gICAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICAgIC5zZXR0aW5ncy11c2Vycy1hY3RpdmUge1xuICAgICAgICAmID4gLmNhcmQtYm9keSB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgfVxuICAgIH1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy91c2Vycy52dWUiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDVjZmIzMGVcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdXNlcnMudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJkYmYwN2U0YVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wNWNmYjMwZVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi91c2Vycy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDVjZmIzMGVcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdXNlcnMudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTA1Y2ZiMzBlXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvdXNlcnMudnVlXG4vLyBtb2R1bGUgaWQgPSAyOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAyMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uc2V0dGluZ3MtdXNlcnMtYWN0aXZlID4gLmNhcmQtYm9keSB7XFxuICBwYWRkaW5nLXRvcDogMDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9zaXRlcy9tZWdhbWFpZC50ZXN0L3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvdXNlcnMudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLGVBQWU7Q0FBRVwiLFwiZmlsZVwiOlwidXNlcnMudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZXR0aW5ncy11c2Vycy1hY3RpdmUgPiAuY2FyZC1ib2R5IHtcXG4gIHBhZGRpbmctdG9wOiAwOyB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTA1Y2ZiMzBlXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvdXNlcnMudnVlXG4vLyBtb2R1bGUgaWQgPSAyOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAyMiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJjYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy11c2Vycy1pbnZpdGUgbWItM1wiLFxuICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBfdm0uJHQoXCJ1c2Vycy1pbnZpdGVcIikgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIF92bS51cGRhdGUoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uZm9ybS5vbktleWRvd24oJGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJhbGVydC1zdWNjZXNzXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgbWVzc2FnZTogX3ZtLiR0KFwidXNlcnMtaW52aXRlLXNlbnRcIikgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03IG9mZnNldC1tZC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNoZWNrZWQ6IF92bS5mb3JtLmlzX2FkbWluLCBuYW1lOiBcImVuYWJsZWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmlzX2FkbWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiaXNfYWRtaW5cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uaXNfYWRtaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwidXNlcnMtaW52aXRlLWFzLWFkbWluXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwibmFtZVwiKSkpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1pbnZhbGlkXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJuYW1lXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwibmFtZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJuYW1lXCIgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImVtYWlsXCIpKSldXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTdcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtaW52YWxpZFwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiZW1haWxcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImVtYWlsXCIsIG5hbWU6IFwiZW1haWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5lbWFpbCB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImVtYWlsXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJlbWFpbFwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC05IG1sLW1kLWF1dG9cIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0eXBlOiBcInN1Y2Nlc3NcIiwgbG9hZGluZzogX3ZtLmZvcm0uYnVzeSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiaW52aXRlXCIpKSldXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtdXNlcnMtYWN0aXZlXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS4kdChcInVzZXJzXCIpIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5sb2FkaW5nXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBtLTVcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR0KFwibG9hZGluZ1wiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR0KFwidXNlcnNcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdChcInNldHRpbmdzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImZhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2xvYmFsLXNlYXJjaGluZy1zcGlubmVyIG10LTNcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJjb2dcIiwgc2l6ZTogXCI2eFwiLCBzcGluOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyBwYi0yXCIgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0udXNlcnMsIGZ1bmN0aW9uKHVzZXIsIGlkeCkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IGtleTogdXNlci5pZCArIFwiLVwiICsgdXNlci5lbWFpbCwgc3RhdGljQ2xhc3M6IFwiY29sLTZcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC00XCIsIGF0dHJzOiB7IHRpdGxlOiB1c2VyLmVtYWlsIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoNVwiLCBbX3ZtLl92KF92bS5fcyh1c2VyLm5hbWUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC02XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJ1c2Vycy1yb2xlXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh1c2VyLnJvbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTA1Y2ZiMzBlXCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDVjZmIzMGVcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3VzZXJzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMjIiXSwic291cmNlUm9vdCI6IiJ9