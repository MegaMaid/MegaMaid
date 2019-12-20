webpackJsonp([7],{

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(280)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(282)
/* template */
var __vue_template__ = __webpack_require__(283)
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

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(281);
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

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(true);
// imports


// module
exports.push([module.i, "\n.settings-card .icon {\n  margin-right: 0.75rem;\n}\n.settings-card .card-body {\n  padding: 0;\n}\n", "", {"version":3,"sources":["/sites/megamaid.test/resources/assets/js/pages/settings/index.vue"],"names":[],"mappings":";AAAA;EACE,sBAAsB;CAAE;AAE1B;EACE,WAAW;CAAE","file":"index.vue","sourcesContent":[".settings-card .icon {\n  margin-right: 0.75rem; }\n\n.settings-card .card-body {\n  padding: 0; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 282:
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
                icon: 'email',
                name: this.$t('email'),
                route: 'settings.email',
                adminOnly: true
            }, {
                icon: 'users',
                name: this.$t('users'),
                route: 'settings.users',
                adminOnly: true
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

/***/ 283:
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
                staticClass: "settings-card mt-5",
                attrs: { title: _vm.$t("admin_settings") }
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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZT8yMTBlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlPzQ3N2UiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlPzljYzAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBc007QUFDdE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBeU87QUFDek87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKQUFzSixrRkFBa0Y7QUFDeE8sK0pBQStKLGtGQUFrRjtBQUNqUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSxpREFBa0QsMEJBQTBCLEdBQUcsNkJBQTZCLGVBQWUsR0FBRyxVQUFVLG9IQUFvSCxLQUFLLFlBQVksS0FBSyxNQUFNLFVBQVUsa0VBQWtFLDBCQUEwQixFQUFFLCtCQUErQixlQUFlLEVBQUUscUJBQXFCOztBQUVyYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMwQkE7Z0JBR0E7OztvQ0FFQTt1Q0FDQTtBQUNBOzhCQUNBOztzQkFHQTs4QkFDQTt1QkFFQTtBQUpBLGFBREE7c0JBT0E7OEJBQ0E7dUJBRUE7QUFKQTtzQkFNQTs4QkFDQTt1QkFDQTsyQkFFQTtBQUxBO3NCQU9BOzhCQUNBO3VCQUNBOzJCQUVBO0FBTEE7c0JBT0E7OEJBQ0E7dUJBQ0E7MkJBRUE7QUFMQTtzQkFPQTs4QkFDQTt1QkFDQTsyQkFFQTtBQUxBO3NCQU9BOzhCQUNBO3VCQUNBOzJCQUdBO0FBTkE7QUFRQTtBQWhEQTtBQUhBLEc7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQSxPQUFPLDBCQUEwQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxlQUFlLDJDQUEyQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGtCQUFrQjtBQUNyRDtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0Qyw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJDQUEyQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGtCQUFrQjtBQUN6RDtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQyxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTLCtCQUErQixFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzcuNzM5MDcwZTViYzg5ZTI1NjRlMDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTkwYTM2NzdhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbmRleC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTkwYTM2NzdhXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi05MGEzNjc3YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTkwYTM2NzdhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjUwXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi05MGEzNjc3YVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjMyNjIyZDJhXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTkwYTM2NzdhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi05MGEzNjc3YVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtOTBhMzY3N2FcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDI4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnNldHRpbmdzLWNhcmQgLmljb24ge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG4uc2V0dGluZ3MtY2FyZCAuY2FyZC1ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvc2l0ZXMvbWVnYW1haWQudGVzdC9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQUE7RUFDRSxzQkFBc0I7Q0FBRTtBQUUxQjtFQUNFLFdBQVc7Q0FBRVwiLFwiZmlsZVwiOlwiaW5kZXgudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZXR0aW5ncy1jYXJkIC5pY29uIHtcXG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTsgfVxcblxcbi5zZXR0aW5ncy1jYXJkIC5jYXJkLWJvZHkge1xcbiAgcGFkZGluZzogMDsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi05MGEzNjc3YVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjgxXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxuICAgICAgICAgICAgPGNhcmQgOnRpdGxlPVwiJHQoJ3NldHRpbmdzJylcIiBjbGFzcz1cInNldHRpbmdzLWNhcmRcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgZmxleC1jb2x1bW4gbmF2LXBpbGxzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cInRhYiBpbiB0YWJzXCIgY2xhc3M9XCJuYXYtaXRlbVwiIHYtaWY9XCIhdGFiLmFkbWluT25seVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogdGFiLnJvdXRlIH1cIiBjbGFzcz1cIm5hdi1saW5rXCIgYWN0aXZlLWNsYXNzPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhIDppY29uPVwidGFiLmljb25cIiBjbGFzcz1cImljb25cIiBmaXhlZC13aWR0aC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdGFiLm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvY2FyZD5cbiAgICAgICAgICAgIDxjYXJkIDp0aXRsZT1cIiR0KCdhZG1pbl9zZXR0aW5ncycpXCIgY2xhc3M9XCJzZXR0aW5ncy1jYXJkIG10LTVcIiB2LWlmPVwiaXNBZG1pblwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBmbGV4LWNvbHVtbiBuYXYtcGlsbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwidGFiIGluIHRhYnNcIiBjbGFzcz1cIm5hdi1pdGVtXCIgdi1pZj1cInRhYi5hZG1pbk9ubHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6IHRhYi5yb3V0ZSB9XCIgY2xhc3M9XCJuYXYtbGlua1wiIGFjdGl2ZS1jbGFzcz1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYSA6aWNvbj1cInRhYi5pY29uXCIgY2xhc3M9XCJpY29uXCIgZml4ZWQtd2lkdGgvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRhYi5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2NhcmQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOVwiPlxuICAgICAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIiBtb2RlPVwib3V0LWluXCI+XG4gICAgICAgICAgICAgICAgPHJvdXRlci12aWV3Lz5cbiAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG1pZGRsZXdhcmU6ICdhdXRoJyxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGlzQWRtaW4gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydhdXRoL2lzQWRtaW4nXVxuICAgICAgICB9LFxuICAgICAgICB0YWJzICgpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAndXNlcicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuJHQoJ3Byb2ZpbGUnKSxcbiAgICAgICAgICAgICAgICAgICAgcm91dGU6ICdzZXR0aW5ncy5wcm9maWxlJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbG9jaycsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuJHQoJ3Bhc3N3b3JkJyksXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlOiAnc2V0dGluZ3MucGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuJHQoJ2VtYWlsJyksXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlOiAnc2V0dGluZ3MuZW1haWwnLFxuICAgICAgICAgICAgICAgICAgICBhZG1pbk9ubHk6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3VzZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy4kdCgndXNlcnMnKSxcbiAgICAgICAgICAgICAgICAgICAgcm91dGU6ICdzZXR0aW5ncy51c2VycycsXG4gICAgICAgICAgICAgICAgICAgIGFkbWluT25seTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnYXJjaGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuJHQoJ3BsZXgnKSxcbiAgICAgICAgICAgICAgICAgICAgcm91dGU6ICdzZXR0aW5ncy5wbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgYWRtaW5Pbmx5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmaWxtJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy4kdCgncmFkYXJyJyksXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlOiAnc2V0dGluZ3MucmFkYXJyJyxcbiAgICAgICAgICAgICAgICAgICAgYWRtaW5Pbmx5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICd0dicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuJHQoJ3NvbmFycicpLFxuICAgICAgICAgICAgICAgICAgICByb3V0ZTogJ3NldHRpbmdzLnNvbmFycicsXG4gICAgICAgICAgICAgICAgICAgIGFkbWluT25seTogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbiAgICAuc2V0dGluZ3MtY2FyZCB7XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC43NXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICB9XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJjYXJkXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtY2FyZFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS4kdChcInNldHRpbmdzXCIpIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2IGZsZXgtY29sdW1uIG5hdi1waWxsc1wiIH0sXG4gICAgICAgICAgICAgIF92bS5fbChfdm0udGFicywgZnVuY3Rpb24odGFiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF0YWIuYWRtaW5Pbmx5XG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHsgbmFtZTogdGFiLnJvdXRlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jbGFzc1wiOiBcImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiB0YWIuaWNvbiwgXCJmaXhlZC13aWR0aFwiOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRhYi5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uaXNBZG1pblxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwiY2FyZFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtY2FyZCBtdC01XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS4kdChcImFkbWluX3NldHRpbmdzXCIpIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuYXYgZmxleC1jb2x1bW4gbmF2LXBpbGxzXCIgfSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGFicywgZnVuY3Rpb24odGFiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YWIuYWRtaW5Pbmx5XG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7IG5hbWU6IHRhYi5yb3V0ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNsYXNzXCI6IFwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IHRhYi5pY29uLCBcImZpeGVkLXdpZHRoXCI6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRhYi5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTlcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwiZmFkZVwiLCBtb2RlOiBcIm91dC1pblwiIH0gfSxcbiAgICAgICAgICBbX2MoXCJyb3V0ZXItdmlld1wiKV0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtOTBhMzY3N2FcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTkwYTM2NzdhXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDI4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDciXSwic291cmNlUm9vdCI6IiJ9