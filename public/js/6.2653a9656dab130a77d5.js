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
exports.push([module.i, "\n.settings-users > .card-body {\n  padding-top: 0;\n}\n", "", {"version":3,"sources":["/sites/megamaid.test/resources/assets/js/pages/settings/users.vue"],"names":[],"mappings":";AAAA;EACE,eAAe;CAAE","file":"users.vue","sourcesContent":[".settings-users > .card-body {\n  padding-top: 0; }\n"],"sourceRoot":""}]);

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
    "card",
    {
      staticClass: "settings-users",
      attrs: { title: _vm.$t("users") + " " + _vm.$t("settings") }
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
                          _vm._s(_vm.$t("user-role")) + ": " + _vm._s(user.role)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3VzZXJzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3VzZXJzLnZ1ZT9jY2IxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvdXNlcnMudnVlPzFhOGUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvdXNlcnMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvdXNlcnMudnVlPzk1ZGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBc007QUFDdE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBeU87QUFDek87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKQUFzSixrRkFBa0Y7QUFDeE8sK0pBQStKLGtGQUFrRjtBQUNqUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSx5REFBMEQsbUJBQW1CLEdBQUcsVUFBVSxvSEFBb0gsS0FBSyxVQUFVLDBFQUEwRSxtQkFBbUIsRUFBRSxxQkFBcUI7O0FBRWpWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2NBO0FBQ0E7O0FBRUE7Z0JBR0E7O2lCQUVBOztrQ0FDQTt5REFDQTtBQUVBOzs7OztxQkFJQTtBQUhBOzs7O2VBT0E7QUFIQTs7O3FDQUtBOzJCQUNBO0FBR0E7QUFMQTs7Z0NBTUE7dUJBQ0E7NkJBQ0E7QUFDQTtBQTFCQSxHOzs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpQ0FBaUM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMEJBQTBCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGFBQWEsd0RBQXdEO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw4QkFBOEIsb0JBQW9CLEVBQUU7QUFDckU7QUFDQSw2QkFBNkIscUJBQXFCO0FBQ2xELCtCQUErQix1QkFBdUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVCQUF1QjtBQUN0RCwrQkFBK0IsNEJBQTRCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzYuMjY1M2E5NjU2ZGFiMTMwYTc3ZDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTA1Y2ZiMzBlXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3VzZXJzLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi91c2Vycy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTA1Y2ZiMzBlXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdXNlcnMudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3VzZXJzLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wNWNmYjMwZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTA1Y2ZiMzBlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3VzZXJzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjUzXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wNWNmYjMwZVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi91c2Vycy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImRiZjA3ZTRhXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTA1Y2ZiMzBlXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3VzZXJzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wNWNmYjMwZVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi91c2Vycy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMDVjZmIzMGVcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy91c2Vycy52dWVcbi8vIG1vZHVsZSBpZCA9IDI4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnNldHRpbmdzLXVzZXJzID4gLmNhcmQtYm9keSB7XFxuICBwYWRkaW5nLXRvcDogMDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9zaXRlcy9tZWdhbWFpZC50ZXN0L3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvdXNlcnMudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLGVBQWU7Q0FBRVwiLFwiZmlsZVwiOlwidXNlcnMudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZXR0aW5ncy11c2VycyA+IC5jYXJkLWJvZHkge1xcbiAgcGFkZGluZy10b3A6IDA7IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMDVjZmIzMGVcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy91c2Vycy52dWVcbi8vIG1vZHVsZSBpZCA9IDI4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCI8dGVtcGxhdGU+XG4gICAgPGNhcmQgOnRpdGxlPVwiJHQoJ3VzZXJzJykgKyAnICcgKyAkdCgnc2V0dGluZ3MnKVwiIGNsYXNzPVwic2V0dGluZ3MtdXNlcnNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG0tNVwiIHYtaWY9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICA8aDI+e3sgJHQoJ2xvYWRpbmcnKSArICcgJyArICR0KCd1c2VycycpICsgJyAnICsgJHQoJ3NldHRpbmdzJykgfX08L2gyPlxuICAgICAgICAgICAgPGZhIGNsYXNzPVwiZ2xvYmFsLXNlYXJjaGluZy1zcGlubmVyIG10LTNcIiBpY29uPVwiY29nXCIgc2l6ZT1cIjZ4XCIgc3BpbiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHBiLTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiIHYtZm9yPVwidXNlciwgaWR4IGluIHVzZXJzXCIgOmtleT1cInVzZXIuaWQgKyAnLScgKyB1c2VyLmVtYWlsXCI+XG4gICAgICAgICAgICAgICAgPGNhcmQgOnRpdGxlPVwidXNlci5lbWFpbFwiIGNsYXNzPVwibXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPjxoNT57eyB1c2VyLm5hbWUgfX08L2g1PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj48cCBjbGFzcz1cInRleHQtcmlnaHRcIj57eyAkdCgndXNlci1yb2xlJykgfX06IHt7IHVzZXIucm9sZSB9fTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9jYXJkPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBGb3JtIGZyb20gJ3Zmb3JtJ1xuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaWRkbGV3YXJlOiAnYWRtaW4nLFxuXG4gICAgc2Nyb2xsVG9Ub3A6IGZhbHNlLFxuXG4gICAgbWV0YUluZm8gKCkge1xuICAgICAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgndXNlcnMnKSArICcgJyArIHRoaXMuJHQoJ3NldHRpbmdzJykgfVxuICAgIH0sXG5cbiAgICBkYXRhOiAoKSA9PiAoe1xuICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgfSksXG5cbiAgICBjb21wdXRlZDogbWFwR2V0dGVycyh7XG4gICAgICAgIHVzZXJzOiAnY29uZmlnL3VzZXJzJ1xuICAgIH0pLFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgdXNlcnMgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjcmVhdGVkICgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2NvbmZpZy9mZXRjaFVzZXJzJylcbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4gICAgLnNldHRpbmdzLXVzZXJzIHtcbiAgICAgICAgJiA+IC5jYXJkLWJvZHkge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIH1cbiAgICB9XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvdXNlcnMudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImNhcmRcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy11c2Vyc1wiLFxuICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS4kdChcInVzZXJzXCIpICsgXCIgXCIgKyBfdm0uJHQoXCJzZXR0aW5nc1wiKSB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfdm0ubG9hZGluZ1xuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbS01XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICBfdm0uJHQoXCJsb2FkaW5nXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiR0KFwidXNlcnNcIikgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHQoXCJzZXR0aW5nc1wiKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZmFcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdsb2JhbC1zZWFyY2hpbmctc3Bpbm5lciBtdC0zXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJjb2dcIiwgc2l6ZTogXCI2eFwiLCBzcGluOiBcIlwiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyBwYi0yXCIgfSxcbiAgICAgICAgX3ZtLl9sKF92bS51c2VycywgZnVuY3Rpb24odXNlciwgaWR4KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsga2V5OiB1c2VyLmlkICsgXCItXCIgKyB1c2VyLmVtYWlsLCBzdGF0aWNDbGFzczogXCJjb2wtNlwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiY2FyZFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtNFwiLCBhdHRyczogeyB0aXRsZTogdXNlci5lbWFpbCB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJoNVwiLCBbX3ZtLl92KF92bS5fcyh1c2VyLm5hbWUpKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC02XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJ1c2VyLXJvbGVcIikpICsgXCI6IFwiICsgX3ZtLl9zKHVzZXIucm9sZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0wNWNmYjMwZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDVjZmIzMGVcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3VzZXJzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjkxXG4vLyBtb2R1bGUgY2h1bmtzID0gNiJdLCJzb3VyY2VSb290IjoiIn0=