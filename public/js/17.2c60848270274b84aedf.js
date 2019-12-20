webpackJsonp([17],{

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(256)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(258)
/* template */
var __vue_template__ = __webpack_require__(259)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5e02b7d5"
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
Component.options.__file = "resources/assets/js/pages/welcome.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e02b7d5", Component.options)
  } else {
    hotAPI.reload("data-v-5e02b7d5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(257);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("19a1d20a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e02b7d5\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./welcome.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e02b7d5\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./welcome.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(true);
// imports


// module
exports.push([module.i, "\n.top-right[data-v-5e02b7d5] {\n  position: absolute;\n  right: 10px;\n  top: 18px;\n}\n.title[data-v-5e02b7d5] {\n  font-size: 85px;\n}\n", "", {"version":3,"sources":["/sites/megamaid.test/resources/assets/js/pages/resources/assets/js/pages/welcome.vue"],"names":[],"mappings":";AAsDA;EACA,mBAAA;EACA,YAAA;EACA,UAAA;CACA;AAEA;EACA,gBAAA;CACA","file":"welcome.vue","sourcesContent":["<template>\n  <div>\n    <div class=\"top-right links\">\n      <template v-if=\"authenticated\">\n        <router-link :to=\"{ name: 'home' }\">\n          {{ $t('home') }}\n        </router-link>\n      </template>\n      <template v-else>\n        <router-link :to=\"{ name: 'login' }\">\n          {{ $t('login') }}\n        </router-link>\n        <router-link :to=\"{ name: 'register' }\">\n          {{ $t('register') }}\n        </router-link>\n      </template>\n    </div>\n\n    <div class=\"text-center\">\n      <div class=\"title mb-4\">\n        {{ title }}\n      </div>\n\n      <div class=\"links\">\n        <a href=\"https://laravel.com/docs\">Documentation</a>\n        <a href=\"https://laracasts.com\">Laracasts</a>\n        <a href=\"https://laravel-news.com\">News</a>\n        <a href=\"https://forge.laravel.com\">Forge</a>\n        <a href=\"https://github.com/laravel/laravel\">GitHub</a>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { mapGetters } from 'vuex'\n\nexport default {\n  layout: 'basic',\n\n  metaInfo () {\n    return { title: this.$t('home') }\n  },\n\n  computed: mapGetters({\n    authenticated: 'auth/check'\n  }),\n\n  data: () => ({\n    title: window.config.appName\n  })\n}\n</script>\n\n<style scoped>\n.top-right {\n  position: absolute;\n  right: 10px;\n  top: 18px;\n}\n\n.title {\n  font-size: 85px;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: 'basic',

  metaInfo: function metaInfo() {
    return { title: this.$t('home') };
  },


  computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])({
    authenticated: 'auth/check'
  }),

  data: function data() {
    return {
      title: window.config.appName
    };
  }
});

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "top-right links" },
      [
        _vm.authenticated
          ? [
              _c("router-link", { attrs: { to: { name: "home" } } }, [
                _vm._v("\n        " + _vm._s(_vm.$t("home")) + "\n      ")
              ])
            ]
          : [
              _c("router-link", { attrs: { to: { name: "login" } } }, [
                _vm._v("\n        " + _vm._s(_vm.$t("login")) + "\n      ")
              ]),
              _vm._v(" "),
              _c("router-link", { attrs: { to: { name: "register" } } }, [
                _vm._v("\n        " + _vm._s(_vm.$t("register")) + "\n      ")
              ])
            ]
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "text-center" }, [
      _c("div", { staticClass: "title mb-4" }, [
        _vm._v("\n      " + _vm._s(_vm.title) + "\n    ")
      ]),
      _vm._v(" "),
      _vm._m(0)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "links" }, [
      _c("a", { attrs: { href: "https://laravel.com/docs" } }, [
        _vm._v("Documentation")
      ]),
      _vm._v(" "),
      _c("a", { attrs: { href: "https://laracasts.com" } }, [
        _vm._v("Laracasts")
      ]),
      _vm._v(" "),
      _c("a", { attrs: { href: "https://laravel-news.com" } }, [
        _vm._v("News")
      ]),
      _vm._v(" "),
      _c("a", { attrs: { href: "https://forge.laravel.com" } }, [
        _vm._v("Forge")
      ]),
      _vm._v(" "),
      _c("a", { attrs: { href: "https://github.com/laravel/laravel" } }, [
        _vm._v("GitHub")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5e02b7d5", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3dlbGNvbWUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvd2VsY29tZS52dWU/ZmJhNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3dlbGNvbWUudnVlPzNkZmQiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvd2VsY29tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy93ZWxjb21lLnZ1ZT81MmMwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQWtNO0FBQ2xNO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUErSztBQUMvSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDNUNBOztBQUVBO0FBQ0EscUNBQWtPO0FBQ2xPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnSkFBZ0osaUZBQWlGO0FBQ2pPLHlKQUF5SixpRkFBaUY7QUFDMU87QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0Esd0RBQXlELHVCQUF1QixnQkFBZ0IsY0FBYyxHQUFHLDJCQUEyQixvQkFBb0IsR0FBRyxVQUFVLHVJQUF1SSxNQUFNLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLDZLQUE2SyxlQUFlLGlCQUFpQixjQUFjLGtHQUFrRyxnQkFBZ0IsaUJBQWlCLGVBQWUsc0RBQXNELG1CQUFtQixpQkFBaUIsa0JBQWtCLHdJQUF3SSxTQUFTLGdhQUFnYSxhQUFhLGdDQUFnQyx1Q0FBdUMsY0FBYyx5QkFBeUIsS0FBSyw2QkFBNkIsc0NBQXNDLHNCQUFzQix1Q0FBdUMsSUFBSSwyQ0FBMkMsdUJBQXVCLGdCQUFnQixjQUFjLEdBQUcsWUFBWSxvQkFBb0IsR0FBRywrQkFBK0I7O0FBRWp5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzJCQTs7QUFFQTtVQUdBOztnQ0FDQTs0QkFDQTtBQUVBOzs7O21CQUlBO0FBSEE7Ozs7MkJBTUE7QUFGQTs7QUFYQSxHOzs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpQ0FBaUM7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFNBQVMsTUFBTSxlQUFlLEVBQUUsRUFBRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLE1BQU0sZ0JBQWdCLEVBQUUsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsU0FBUyxNQUFNLG1CQUFtQixFQUFFLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZCQUE2QjtBQUM1QyxpQkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1QkFBdUI7QUFDN0MsZUFBZSxTQUFTLG1DQUFtQyxFQUFFO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUyxnQ0FBZ0MsRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVMsbUNBQW1DLEVBQUU7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTLG9DQUFvQyxFQUFFO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUyw2Q0FBNkMsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvMTcuMmM2MDg0ODI3MDI3NGI4NGFlZGYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlMDJiN2Q1XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vd2VsY29tZS52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vd2VsY29tZS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVlMDJiN2Q1XFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi93ZWxjb21lLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtNWUwMmI3ZDVcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy93ZWxjb21lLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01ZTAyYjdkNVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVlMDJiN2Q1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3dlbGNvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSAyNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxNyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZTAyYjdkNVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3dlbGNvbWUudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIxOWExZDIwYVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZTAyYjdkNVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3dlbGNvbWUudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlMDJiN2Q1XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vd2VsY29tZS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWUwMmI3ZDVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy93ZWxjb21lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRvcC1yaWdodFtkYXRhLXYtNWUwMmI3ZDVdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgdG9wOiAxOHB4O1xcbn1cXG4udGl0bGVbZGF0YS12LTVlMDJiN2Q1XSB7XFxuICBmb250LXNpemU6IDg1cHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvc2l0ZXMvbWVnYW1haWQudGVzdC9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvd2VsY29tZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXNEQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7Q0FDQTtBQUVBO0VBQ0EsZ0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwid2VsY29tZS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidG9wLXJpZ2h0IGxpbmtzXFxcIj5cXG4gICAgICA8dGVtcGxhdGUgdi1pZj1cXFwiYXV0aGVudGljYXRlZFxcXCI+XFxuICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICdob21lJyB9XFxcIj5cXG4gICAgICAgICAge3sgJHQoJ2hvbWUnKSB9fVxcbiAgICAgICAgPC9yb3V0ZXItbGluaz5cXG4gICAgICA8L3RlbXBsYXRlPlxcbiAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XFxuICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICdsb2dpbicgfVxcXCI+XFxuICAgICAgICAgIHt7ICR0KCdsb2dpbicpIH19XFxuICAgICAgICA8L3JvdXRlci1saW5rPlxcbiAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cXFwieyBuYW1lOiAncmVnaXN0ZXInIH1cXFwiPlxcbiAgICAgICAgICB7eyAkdCgncmVnaXN0ZXInKSB9fVxcbiAgICAgICAgPC9yb3V0ZXItbGluaz5cXG4gICAgICA8L3RlbXBsYXRlPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInRpdGxlIG1iLTRcXFwiPlxcbiAgICAgICAge3sgdGl0bGUgfX1cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJsaW5rc1xcXCI+XFxuICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL2xhcmF2ZWwuY29tL2RvY3NcXFwiPkRvY3VtZW50YXRpb248L2E+XFxuICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL2xhcmFjYXN0cy5jb21cXFwiPkxhcmFjYXN0czwvYT5cXG4gICAgICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vbGFyYXZlbC1uZXdzLmNvbVxcXCI+TmV3czwvYT5cXG4gICAgICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vZm9yZ2UubGFyYXZlbC5jb21cXFwiPkZvcmdlPC9hPlxcbiAgICAgICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2xhcmF2ZWwvbGFyYXZlbFxcXCI+R2l0SHViPC9hPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBsYXlvdXQ6ICdiYXNpYycsXFxuXFxuICBtZXRhSW5mbyAoKSB7XFxuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdob21lJykgfVxcbiAgfSxcXG5cXG4gIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKHtcXG4gICAgYXV0aGVudGljYXRlZDogJ2F1dGgvY2hlY2snXFxuICB9KSxcXG5cXG4gIGRhdGE6ICgpID0+ICh7XFxuICAgIHRpdGxlOiB3aW5kb3cuY29uZmlnLmFwcE5hbWVcXG4gIH0pXFxufVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuLnRvcC1yaWdodCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogMThweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogODVweDtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWUwMmI3ZDVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy93ZWxjb21lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTciLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzcz1cInRvcC1yaWdodCBsaW5rc1wiPlxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCJhdXRoZW50aWNhdGVkXCI+XG4gICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdob21lJyB9XCI+XG4gICAgICAgICAge3sgJHQoJ2hvbWUnKSB9fVxuICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdsb2dpbicgfVwiPlxuICAgICAgICAgIHt7ICR0KCdsb2dpbicpIH19XG4gICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdyZWdpc3RlcicgfVwiPlxuICAgICAgICAgIHt7ICR0KCdyZWdpc3RlcicpIH19XG4gICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGUgbWItNFwiPlxuICAgICAgICB7eyB0aXRsZSB9fVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJsaW5rc1wiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9sYXJhdmVsLmNvbS9kb2NzXCI+RG9jdW1lbnRhdGlvbjwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbGFyYWNhc3RzLmNvbVwiPkxhcmFjYXN0czwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbGFyYXZlbC1uZXdzLmNvbVwiPk5ld3M8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2ZvcmdlLmxhcmF2ZWwuY29tXCI+Rm9yZ2U8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbGFyYXZlbC9sYXJhdmVsXCI+R2l0SHViPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxheW91dDogJ2Jhc2ljJyxcblxuICBtZXRhSW5mbyAoKSB7XG4gICAgcmV0dXJuIHsgdGl0bGU6IHRoaXMuJHQoJ2hvbWUnKSB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IG1hcEdldHRlcnMoe1xuICAgIGF1dGhlbnRpY2F0ZWQ6ICdhdXRoL2NoZWNrJ1xuICB9KSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIHRpdGxlOiB3aW5kb3cuY29uZmlnLmFwcE5hbWVcbiAgfSlcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLnRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMThweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiA4NXB4O1xufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3dlbGNvbWUudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJ0b3AtcmlnaHQgbGlua3NcIiB9LFxuICAgICAgW1xuICAgICAgICBfdm0uYXV0aGVudGljYXRlZFxuICAgICAgICAgID8gW1xuICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJob21lXCIgfSB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChcImhvbWVcIikpICsgXCJcXG4gICAgICBcIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwibG9naW5cIiB9IH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KFwibG9naW5cIikpICsgXCJcXG4gICAgICBcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcInJlZ2lzdGVyXCIgfSB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChcInJlZ2lzdGVyXCIpKSArIFwiXFxuICAgICAgXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICBdLFxuICAgICAgMlxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSBtYi00XCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0udGl0bGUpICsgXCJcXG4gICAgXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5rc1wiIH0sIFtcbiAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly9sYXJhdmVsLmNvbS9kb2NzXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIkRvY3VtZW50YXRpb25cIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly9sYXJhY2FzdHMuY29tXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIkxhcmFjYXN0c1wiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJodHRwczovL2xhcmF2ZWwtbmV3cy5jb21cIiB9IH0sIFtcbiAgICAgICAgX3ZtLl92KFwiTmV3c1wiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJodHRwczovL2ZvcmdlLmxhcmF2ZWwuY29tXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIkZvcmdlXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sYXJhdmVsL2xhcmF2ZWxcIiB9IH0sIFtcbiAgICAgICAgX3ZtLl92KFwiR2l0SHViXCIpXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTVlMDJiN2Q1XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01ZTAyYjdkNVwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy93ZWxjb21lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTciXSwic291cmNlUm9vdCI6IiJ9