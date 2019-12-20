webpackJsonp([6],{

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(276)
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

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(277);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("286f9845", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-90a3677a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-90a3677a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(true);
// imports


// module
exports.push([module.i, "\n.settings-card .card-body {\n    padding: 0;\n}\n", "", {"version":3,"sources":["/sites/megamaid.test/resources/assets/js/pages/settings/resources/assets/js/pages/settings/index.vue"],"names":[],"mappings":";AAuDA;IACA,WAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"row\">\n        <div class=\"col-md-3\">\n            <card :title=\"$t('settings')\" class=\"settings-card\">\n                <ul class=\"nav flex-column nav-pills\">\n                    <li v-for=\"tab in tabs\" class=\"nav-item\" v-if=\"tab.adminOnly !== true || (tab.adminOnly && isAdmin)\">\n                        <router-link :to=\"{ name: tab.route }\" class=\"nav-link\" active-class=\"active\">\n                            <fa :icon=\"tab.icon\" fixed-width/>\n                            {{ tab.name }}\n                        </router-link>\n                    </li>\n                </ul>\n            </card>\n        </div>\n\n        <div class=\"col-md-9\">\n            <transition name=\"fade\" mode=\"out-in\">\n                <router-view/>\n            </transition>\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    middleware: 'auth',\n\n    computed: {\n        isAdmin () {\n                return this.$store.getters['auth/isAdmin']\n        },\n        tabs () {\n            return [\n                {\n                    icon: 'user',\n                    name: this.$t('profile'),\n                    route: 'settings.profile'\n                },\n                {\n                    icon: 'lock',\n                    name: this.$t('password'),\n                    route: 'settings.password'\n                },\n                {\n                    icon: 'film',\n                    name: this.$t('radarr'),\n                    route: 'settings.radarr',\n                    adminOnly: true\n                }\n            ]\n        }\n    }\n}\n</script>\n\n<style>\n.settings-card .card-body {\n    padding: 0;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


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
                icon: 'film',
                name: this.$t('radarr'),
                route: 'settings.radarr',
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
                return tab.adminOnly !== true || (tab.adminOnly && _vm.isAdmin)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZT80NmY2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlP2Q3MTYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlPzljYzAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBc007QUFDdE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBeU87QUFDek87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKQUFzSixrRkFBa0Y7QUFDeE8sK0pBQStKLGtGQUFrRjtBQUNqUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSxzREFBdUQsaUJBQWlCLEdBQUcsVUFBVSx1SkFBdUosTUFBTSxVQUFVLGdhQUFnYSxrQkFBa0IsZ0pBQWdKLFlBQVksNlZBQTZWLDRDQUE0QyxzQkFBc0IsdUVBQXVFLG9CQUFvQix5Q0FBeUMsb0pBQW9KLG9CQUFvQixzSkFBc0osb0JBQW9CLHdMQUF3TCwwQkFBMEIsT0FBTyxHQUFHLG1EQUFtRCxpQkFBaUIsR0FBRywrQkFBK0I7O0FBRWpnRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2dCQTtnQkFHQTs7O29DQUVBO3VDQUNBO0FBQ0E7OEJBQ0E7O3NCQUdBOzhCQUNBO3VCQUVBO0FBSkEsYUFEQTtzQkFPQTs4QkFDQTt1QkFFQTtBQUpBO3NCQU1BOzhCQUNBO3VCQUNBOzJCQUdBO0FBTkE7QUFRQTtBQXhCQTtBQUhBLEc7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQSxPQUFPLDBCQUEwQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxlQUFlLDJDQUEyQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGtCQUFrQjtBQUNyRDtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDBCQUEwQjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVMsK0JBQStCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvNi5kMWEyMTc4MTVmMTFhYmM0ZDkzZC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOTBhMzY3N2FcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOTBhMzY3N2FcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbmRleC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTkwYTM2NzdhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtOTBhMzY3N2FcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAyNDlcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTkwYTM2NzdhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMjg2Zjk4NDVcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOTBhMzY3N2FcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTkwYTM2NzdhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi05MGEzNjc3YVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDI3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnNldHRpbmdzLWNhcmQgLmNhcmQtYm9keSB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvc2l0ZXMvbWVnYW1haWQudGVzdC9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF1REE7SUFDQSxXQUFBO0NBQ0FcIixcImZpbGVcIjpcImluZGV4LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtM1xcXCI+XFxuICAgICAgICAgICAgPGNhcmQgOnRpdGxlPVxcXCIkdCgnc2V0dGluZ3MnKVxcXCIgY2xhc3M9XFxcInNldHRpbmdzLWNhcmRcXFwiPlxcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdiBmbGV4LWNvbHVtbiBuYXYtcGlsbHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVxcXCJ0YWIgaW4gdGFic1xcXCIgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIiB2LWlmPVxcXCJ0YWIuYWRtaW5Pbmx5ICE9PSB0cnVlIHx8ICh0YWIuYWRtaW5Pbmx5ICYmIGlzQWRtaW4pXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6IHRhYi5yb3V0ZSB9XFxcIiBjbGFzcz1cXFwibmF2LWxpbmtcXFwiIGFjdGl2ZS1jbGFzcz1cXFwiYWN0aXZlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhIDppY29uPVxcXCJ0YWIuaWNvblxcXCIgZml4ZWQtd2lkdGgvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0YWIubmFtZSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgIDwvY2FyZD5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTlcXFwiPlxcbiAgICAgICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XFxcImZhZGVcXFwiIG1vZGU9XFxcIm91dC1pblxcXCI+XFxuICAgICAgICAgICAgICAgIDxyb3V0ZXItdmlldy8+XFxuICAgICAgICAgICAgPC90cmFuc2l0aW9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG1pZGRsZXdhcmU6ICdhdXRoJyxcXG5cXG4gICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgIGlzQWRtaW4gKCkge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snYXV0aC9pc0FkbWluJ11cXG4gICAgICAgIH0sXFxuICAgICAgICB0YWJzICgpIHtcXG4gICAgICAgICAgICByZXR1cm4gW1xcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAndXNlcicsXFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLiR0KCdwcm9maWxlJyksXFxuICAgICAgICAgICAgICAgICAgICByb3V0ZTogJ3NldHRpbmdzLnByb2ZpbGUnXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdsb2NrJyxcXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuJHQoJ3Bhc3N3b3JkJyksXFxuICAgICAgICAgICAgICAgICAgICByb3V0ZTogJ3NldHRpbmdzLnBhc3N3b3JkJ1xcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmlsbScsXFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLiR0KCdyYWRhcnInKSxcXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlOiAnc2V0dGluZ3MucmFkYXJyJyxcXG4gICAgICAgICAgICAgICAgICAgIGFkbWluT25seTogdHJ1ZVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgXVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4uc2V0dGluZ3MtY2FyZCAuY2FyZC1ib2R5IHtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtOTBhMzY3N2FcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAyNzdcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+XG4gICAgICAgICAgICA8Y2FyZCA6dGl0bGU9XCIkdCgnc2V0dGluZ3MnKVwiIGNsYXNzPVwic2V0dGluZ3MtY2FyZFwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBmbGV4LWNvbHVtbiBuYXYtcGlsbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwidGFiIGluIHRhYnNcIiBjbGFzcz1cIm5hdi1pdGVtXCIgdi1pZj1cInRhYi5hZG1pbk9ubHkgIT09IHRydWUgfHwgKHRhYi5hZG1pbk9ubHkgJiYgaXNBZG1pbilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6IHRhYi5yb3V0ZSB9XCIgY2xhc3M9XCJuYXYtbGlua1wiIGFjdGl2ZS1jbGFzcz1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYSA6aWNvbj1cInRhYi5pY29uXCIgZml4ZWQtd2lkdGgvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRhYi5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2NhcmQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOVwiPlxuICAgICAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIiBtb2RlPVwib3V0LWluXCI+XG4gICAgICAgICAgICAgICAgPHJvdXRlci12aWV3Lz5cbiAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG1pZGRsZXdhcmU6ICdhdXRoJyxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGlzQWRtaW4gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydhdXRoL2lzQWRtaW4nXVxuICAgICAgICB9LFxuICAgICAgICB0YWJzICgpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAndXNlcicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuJHQoJ3Byb2ZpbGUnKSxcbiAgICAgICAgICAgICAgICAgICAgcm91dGU6ICdzZXR0aW5ncy5wcm9maWxlJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbG9jaycsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuJHQoJ3Bhc3N3b3JkJyksXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlOiAnc2V0dGluZ3MucGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmaWxtJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy4kdCgncmFkYXJyJyksXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlOiAnc2V0dGluZ3MucmFkYXJyJyxcbiAgICAgICAgICAgICAgICAgICAgYWRtaW5Pbmx5OiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5zZXR0aW5ncy1jYXJkIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDA7XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJjYXJkXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtY2FyZFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS4kdChcInNldHRpbmdzXCIpIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2IGZsZXgtY29sdW1uIG5hdi1waWxsc1wiIH0sXG4gICAgICAgICAgICAgIF92bS5fbChfdm0udGFicywgZnVuY3Rpb24odGFiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhYi5hZG1pbk9ubHkgIT09IHRydWUgfHwgKHRhYi5hZG1pbk9ubHkgJiYgX3ZtLmlzQWRtaW4pXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHsgbmFtZTogdGFiLnJvdXRlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jbGFzc1wiOiBcImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiB0YWIuaWNvbiwgXCJmaXhlZC13aWR0aFwiOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRhYi5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC05XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgeyBhdHRyczogeyBuYW1lOiBcImZhZGVcIiwgbW9kZTogXCJvdXQtaW5cIiB9IH0sXG4gICAgICAgICAgW19jKFwicm91dGVyLXZpZXdcIildLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTkwYTM2NzdhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi05MGEzNjc3YVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAyNzlcbi8vIG1vZHVsZSBjaHVua3MgPSA2Il0sInNvdXJjZVJvb3QiOiIifQ==