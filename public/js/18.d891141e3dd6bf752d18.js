webpackJsonp([18],{

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(295)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(278)
/* template */
var __vue_template__ = __webpack_require__(279)
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
Component.options.__file = "resources/assets/js/pages/settings/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-90a3677a", Component.options)
  } else {
    hotAPI.reload("data-v-90a3677a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    middleware: 'auth',

    computed: {
        isAdmin: function isAdmin() {
            return this.$store.getters['auth/isAdmin'];
        },
        tabs: function tabs() {
            return [{
                icon: 'user',
                name: this.$t('profile'),
                route: 'settings.profile'
            }, {
                icon: 'lock',
                name: this.$t('password'),
                route: 'settings.password'
            }, {
                icon: 'archive',
                name: this.$t('plex'),
                route: 'settings.plex',
                adminOnly: true
            }, {
                icon: 'film',
                name: this.$t('radarr'),
                route: 'settings.radarr',
                adminOnly: true
            }, {
                icon: 'tv',
                name: this.$t('sonarr'),
                route: 'settings.sonarr',
                adminOnly: true
            }];
        }
    }
});

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-md-3" },
      [
        _c(
          "card",
          {
            staticClass: "settings-card",
            attrs: { title: _vm.$t("settings") }
          },
          [
            _c(
              "ul",
              { staticClass: "nav flex-column nav-pills" },
              _vm._l(_vm.tabs, function(tab) {
                return !tab.adminOnly
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-link",
                            attrs: {
                              to: { name: tab.route },
                              "active-class": "active"
                            }
                          },
                          [
                            _c("fa", {
                              staticClass: "icon",
                              attrs: { icon: tab.icon, "fixed-width": "" }
                            }),
                            _vm._v(
                              "\n                        " +
                                _vm._s(tab.name) +
                                "\n                    "
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : _vm._e()
              })
            )
          ]
        ),
        _vm._v(" "),
        _vm.isAdmin
          ? _c(
              "card",
              {
                staticClass: "settings-card",
                attrs: { title: _vm.$t("settings") }
              },
              [
                _c(
                  "ul",
                  { staticClass: "nav flex-column nav-pills" },
                  _vm._l(_vm.tabs, function(tab) {
                    return tab.adminOnly
                      ? _c(
                          "li",
                          { staticClass: "nav-item" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "nav-link",
                                attrs: {
                                  to: { name: tab.route },
                                  "active-class": "active"
                                }
                              },
                              [
                                _c("fa", {
                                  staticClass: "icon",
                                  attrs: { icon: tab.icon, "fixed-width": "" }
                                }),
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(tab.name) +
                                    "\n                    "
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  })
                )
              ]
            )
          : _vm._e()
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-9" },
      [
        _c(
          "transition",
          { attrs: { name: "fade", mode: "out-in" } },
          [_c("router-view")],
          1
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-90a3677a", module.exports)
  }
}

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(296);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("32622d2a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-90a3677a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-90a3677a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
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
exports.push([module.i, "\n.settings-card .icon {\n  margin-right: 0.75rem;\n}\n.settings-card .card-body {\n  padding: 0;\n}\n", "", {"version":3,"sources":["/sites/megamaid.test/resources/assets/js/pages/settings/index.vue"],"names":[],"mappings":";AAAA;EACE,sBAAsB;CAAE;AAE1B;EACE,WAAW;CAAE","file":"index.vue","sourcesContent":[".settings-card .icon {\n  margin-right: 0.75rem; }\n\n.settings-card .card-body {\n  padding: 0; }\n"],"sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWU/OWNjMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZT8yMTBlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlPzQ3N2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBc007QUFDdE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtnQkFHQTs7O29DQUVBO3VDQUNBO0FBQ0E7OEJBQ0E7O3NCQUdBOzhCQUNBO3VCQUVBO0FBSkEsYUFEQTtzQkFPQTs4QkFDQTt1QkFFQTtBQUpBO3NCQU1BOzhCQUNBO3VCQUNBOzJCQUVBO0FBTEE7c0JBT0E7OEJBQ0E7dUJBQ0E7MkJBRUE7QUFMQTtzQkFPQTs4QkFDQTt1QkFDQTsyQkFHQTtBQU5BO0FBUUE7QUFwQ0E7QUFIQSxHOzs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsZUFBZSwyQ0FBMkM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMEJBQTBCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxrQkFBa0I7QUFDckQ7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyQ0FBMkM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMEJBQTBCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxrQkFBa0I7QUFDekQ7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUMsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sMEJBQTBCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUywrQkFBK0IsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ25JQTs7QUFFQTtBQUNBLHFDQUF5TztBQUN6TztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0pBQXNKLGtGQUFrRjtBQUN4TywrSkFBK0osa0ZBQWtGO0FBQ2pQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLGlEQUFrRCwwQkFBMEIsR0FBRyw2QkFBNkIsZUFBZSxHQUFHLFVBQVUsb0hBQW9ILEtBQUssWUFBWSxLQUFLLE1BQU0sVUFBVSxrRUFBa0UsMEJBQTBCLEVBQUUsK0JBQStCLGVBQWUsRUFBRSxxQkFBcUI7O0FBRXJjIiwiZmlsZSI6ImpzLzE4LmQ4OTExNDFlM2RkNmJmNzUyZDE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi05MGEzNjc3YVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi05MGEzNjc3YVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtOTBhMzY3N2FcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi05MGEzNjc3YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDI0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+XG4gICAgICAgICAgICA8Y2FyZCA6dGl0bGU9XCIkdCgnc2V0dGluZ3MnKVwiIGNsYXNzPVwic2V0dGluZ3MtY2FyZFwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBmbGV4LWNvbHVtbiBuYXYtcGlsbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwidGFiIGluIHRhYnNcIiBjbGFzcz1cIm5hdi1pdGVtXCIgdi1pZj1cIiF0YWIuYWRtaW5Pbmx5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiB0YWIucm91dGUgfVwiIGNsYXNzPVwibmF2LWxpbmtcIiBhY3RpdmUtY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEgOmljb249XCJ0YWIuaWNvblwiIGNsYXNzPVwiaWNvblwiIGZpeGVkLXdpZHRoLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0YWIubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9jYXJkPlxuICAgICAgICAgICAgPGNhcmQgOnRpdGxlPVwiJHQoJ3NldHRpbmdzJylcIiBjbGFzcz1cInNldHRpbmdzLWNhcmRcIiB2LWlmPVwiaXNBZG1pblwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBmbGV4LWNvbHVtbiBuYXYtcGlsbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwidGFiIGluIHRhYnNcIiBjbGFzcz1cIm5hdi1pdGVtXCIgdi1pZj1cInRhYi5hZG1pbk9ubHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6IHRhYi5yb3V0ZSB9XCIgY2xhc3M9XCJuYXYtbGlua1wiIGFjdGl2ZS1jbGFzcz1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYSA6aWNvbj1cInRhYi5pY29uXCIgY2xhc3M9XCJpY29uXCIgZml4ZWQtd2lkdGgvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRhYi5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2NhcmQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOVwiPlxuICAgICAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIiBtb2RlPVwib3V0LWluXCI+XG4gICAgICAgICAgICAgICAgPHJvdXRlci12aWV3Lz5cbiAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG1pZGRsZXdhcmU6ICdhdXRoJyxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGlzQWRtaW4gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydhdXRoL2lzQWRtaW4nXVxuICAgICAgICB9LFxuICAgICAgICB0YWJzICgpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAndXNlcicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuJHQoJ3Byb2ZpbGUnKSxcbiAgICAgICAgICAgICAgICAgICAgcm91dGU6ICdzZXR0aW5ncy5wcm9maWxlJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbG9jaycsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuJHQoJ3Bhc3N3b3JkJyksXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlOiAnc2V0dGluZ3MucGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdhcmNoaXZlJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy4kdCgncGxleCcpLFxuICAgICAgICAgICAgICAgICAgICByb3V0ZTogJ3NldHRpbmdzLnBsZXgnLFxuICAgICAgICAgICAgICAgICAgICBhZG1pbk9ubHk6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZpbG0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLiR0KCdyYWRhcnInKSxcbiAgICAgICAgICAgICAgICAgICAgcm91dGU6ICdzZXR0aW5ncy5yYWRhcnInLFxuICAgICAgICAgICAgICAgICAgICBhZG1pbk9ubHk6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3R2JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy4kdCgnc29uYXJyJyksXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlOiAnc2V0dGluZ3Muc29uYXJyJyxcbiAgICAgICAgICAgICAgICAgICAgYWRtaW5Pbmx5OiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICAgIC5zZXR0aW5ncy1jYXJkIHtcbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLWJvZHkge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgIH1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTNcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImNhcmRcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1jYXJkXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0aXRsZTogX3ZtLiR0KFwic2V0dGluZ3NcIikgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuYXYgZmxleC1jb2x1bW4gbmF2LXBpbGxzXCIgfSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS50YWJzLCBmdW5jdGlvbih0YWIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRhYi5hZG1pbk9ubHlcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogeyBuYW1lOiB0YWIucm91dGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNsYXNzXCI6IFwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IHRhYi5pY29uLCBcImZpeGVkLXdpZHRoXCI6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModGFiLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5pc0FkbWluXG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJjYXJkXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1jYXJkXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS4kdChcInNldHRpbmdzXCIpIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuYXYgZmxleC1jb2x1bW4gbmF2LXBpbGxzXCIgfSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGFicywgZnVuY3Rpb24odGFiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YWIuYWRtaW5Pbmx5XG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7IG5hbWU6IHRhYi5yb3V0ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNsYXNzXCI6IFwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IHRhYi5pY29uLCBcImZpeGVkLXdpZHRoXCI6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRhYi5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTlcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwiZmFkZVwiLCBtb2RlOiBcIm91dC1pblwiIH0gfSxcbiAgICAgICAgICBbX2MoXCJyb3V0ZXItdmlld1wiKV0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtOTBhMzY3N2FcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTkwYTM2NzdhXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDI3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTkwYTM2NzdhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMzI2MjJkMmFcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOTBhMzY3N2FcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTkwYTM2NzdhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi05MGEzNjc3YVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnNldHRpbmdzLWNhcmQgLmljb24ge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG4uc2V0dGluZ3MtY2FyZCAuY2FyZC1ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvc2l0ZXMvbWVnYW1haWQudGVzdC9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQUE7RUFDRSxzQkFBc0I7Q0FBRTtBQUUxQjtFQUNFLFdBQVc7Q0FBRVwiLFwiZmlsZVwiOlwiaW5kZXgudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZXR0aW5ncy1jYXJkIC5pY29uIHtcXG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTsgfVxcblxcbi5zZXR0aW5ncy1jYXJkIC5jYXJkLWJvZHkge1xcbiAgcGFkZGluZzogMDsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi05MGEzNjc3YVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgiXSwic291cmNlUm9vdCI6IiJ9