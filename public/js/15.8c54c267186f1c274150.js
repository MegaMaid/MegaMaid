webpackJsonp([15],{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(130)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(132)
/* template */
var __vue_template__ = __webpack_require__(133)
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

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("19a1d20a", content, false);
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

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(true);
// imports


// module
exports.push([module.i, "\n.top-right[data-v-5e02b7d5] {\n  position: absolute;\n  right: 10px;\n  top: 18px;\n}\n.title[data-v-5e02b7d5] {\n  font-size: 85px;\n}\n", "", {"version":3,"sources":["/sites/laravel-vue-spa.test/resources/assets/js/pages/resources/assets/js/pages/welcome.vue"],"names":[],"mappings":";AAsDA;EACA,mBAAA;EACA,YAAA;EACA,UAAA;CACA;AAEA;EACA,gBAAA;CACA","file":"welcome.vue","sourcesContent":["<template>\n  <div>\n    <div class=\"top-right links\">\n      <template v-if=\"authenticated\">\n        <router-link :to=\"{ name: 'home' }\">\n          {{ $t('home') }}\n        </router-link>\n      </template>\n      <template v-else>\n        <router-link :to=\"{ name: 'login' }\">\n          {{ $t('login') }}\n        </router-link>\n        <router-link :to=\"{ name: 'register' }\">\n          {{ $t('register') }}\n        </router-link>\n      </template>\n    </div>\n\n    <div class=\"text-center\">\n      <div class=\"title mb-4\">\n        {{ title }}\n      </div>\n\n      <div class=\"links\">\n        <a href=\"https://laravel.com/docs\">Documentation</a>\n        <a href=\"https://laracasts.com\">Laracasts</a>\n        <a href=\"https://laravel-news.com\">News</a>\n        <a href=\"https://forge.laravel.com\">Forge</a>\n        <a href=\"https://github.com/laravel/laravel\">GitHub</a>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { mapGetters } from 'vuex'\n\nexport default {\n  layout: 'basic',\n\n  metaInfo () {\n    return { title: this.$t('home') }\n  },\n\n  computed: mapGetters({\n    authenticated: 'auth/check'\n  }),\n\n  data: () => ({\n    title: window.config.appName\n  })\n}\n</script>\n\n<style scoped>\n.top-right {\n  position: absolute;\n  right: 10px;\n  top: 18px;\n}\n\n.title {\n  font-size: 85px;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 133:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3dlbGNvbWUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvd2VsY29tZS52dWU/ZmJhNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3dlbGNvbWUudnVlPzNkZmQiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvd2VsY29tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy93ZWxjb21lLnZ1ZT81MmMwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQWtNO0FBQ2xNO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUErSztBQUMvSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDNUNBOztBQUVBO0FBQ0EscUNBQWtPO0FBQ2xPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnSkFBZ0osaUZBQWlGO0FBQ2pPLHlKQUF5SixpRkFBaUY7QUFDMU87QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0Esd0RBQXlELHVCQUF1QixnQkFBZ0IsY0FBYyxHQUFHLDJCQUEyQixvQkFBb0IsR0FBRyxVQUFVLDhJQUE4SSxNQUFNLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLDZLQUE2SyxlQUFlLGlCQUFpQixjQUFjLGtHQUFrRyxnQkFBZ0IsaUJBQWlCLGVBQWUsc0RBQXNELG1CQUFtQixpQkFBaUIsa0JBQWtCLHdJQUF3SSxTQUFTLGdhQUFnYSxhQUFhLGdDQUFnQyx1Q0FBdUMsY0FBYyx5QkFBeUIsS0FBSyw2QkFBNkIsc0NBQXNDLHNCQUFzQix1Q0FBdUMsSUFBSSwyQ0FBMkMsdUJBQXVCLGdCQUFnQixjQUFjLEdBQUcsWUFBWSxvQkFBb0IsR0FBRywrQkFBK0I7O0FBRXh5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzJCQTs7QUFFQTtVQUdBOztnQ0FDQTs0QkFDQTtBQUVBOzs7O21CQUlBO0FBSEE7Ozs7MkJBTUE7QUFGQTs7QUFYQSxHOzs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpQ0FBaUM7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFNBQVMsTUFBTSxlQUFlLEVBQUUsRUFBRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLE1BQU0sZ0JBQWdCLEVBQUUsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsU0FBUyxNQUFNLG1CQUFtQixFQUFFLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZCQUE2QjtBQUM1QyxpQkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1QkFBdUI7QUFDN0MsZUFBZSxTQUFTLG1DQUFtQyxFQUFFO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUyxnQ0FBZ0MsRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVMsbUNBQW1DLEVBQUU7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTLG9DQUFvQyxFQUFFO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUyw2Q0FBNkMsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvMTUuOGM1NGMyNjcxODZmMWMyNzQxNTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlMDJiN2Q1XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vd2VsY29tZS52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vd2VsY29tZS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVlMDJiN2Q1XFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi93ZWxjb21lLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtNWUwMmI3ZDVcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy93ZWxjb21lLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01ZTAyYjdkNVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVlMDJiN2Q1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3dlbGNvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAxNSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZTAyYjdkNVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3dlbGNvbWUudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIxOWExZDIwYVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZTAyYjdkNVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3dlbGNvbWUudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlMDJiN2Q1XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vd2VsY29tZS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWUwMmI3ZDVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy93ZWxjb21lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTUiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRvcC1yaWdodFtkYXRhLXYtNWUwMmI3ZDVdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgdG9wOiAxOHB4O1xcbn1cXG4udGl0bGVbZGF0YS12LTVlMDJiN2Q1XSB7XFxuICBmb250LXNpemU6IDg1cHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvc2l0ZXMvbGFyYXZlbC12dWUtc3BhLnRlc3QvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3dlbGNvbWUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFzREE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0NBQ0E7QUFFQTtFQUNBLGdCQUFBO0NBQ0FcIixcImZpbGVcIjpcIndlbGNvbWUudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRvcC1yaWdodCBsaW5rc1xcXCI+XFxuICAgICAgPHRlbXBsYXRlIHYtaWY9XFxcImF1dGhlbnRpY2F0ZWRcXFwiPlxcbiAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cXFwieyBuYW1lOiAnaG9tZScgfVxcXCI+XFxuICAgICAgICAgIHt7ICR0KCdob21lJykgfX1cXG4gICAgICAgIDwvcm91dGVyLWxpbms+XFxuICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICA8dGVtcGxhdGUgdi1lbHNlPlxcbiAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cXFwieyBuYW1lOiAnbG9naW4nIH1cXFwiPlxcbiAgICAgICAgICB7eyAkdCgnbG9naW4nKSB9fVxcbiAgICAgICAgPC9yb3V0ZXItbGluaz5cXG4gICAgICAgIDxyb3V0ZXItbGluayA6dG89XFxcInsgbmFtZTogJ3JlZ2lzdGVyJyB9XFxcIj5cXG4gICAgICAgICAge3sgJHQoJ3JlZ2lzdGVyJykgfX1cXG4gICAgICAgIDwvcm91dGVyLWxpbms+XFxuICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJ0aXRsZSBtYi00XFxcIj5cXG4gICAgICAgIHt7IHRpdGxlIH19XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibGlua3NcXFwiPlxcbiAgICAgICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly9sYXJhdmVsLmNvbS9kb2NzXFxcIj5Eb2N1bWVudGF0aW9uPC9hPlxcbiAgICAgICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly9sYXJhY2FzdHMuY29tXFxcIj5MYXJhY2FzdHM8L2E+XFxuICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL2xhcmF2ZWwtbmV3cy5jb21cXFwiPk5ld3M8L2E+XFxuICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL2ZvcmdlLmxhcmF2ZWwuY29tXFxcIj5Gb3JnZTwvYT5cXG4gICAgICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9sYXJhdmVsL2xhcmF2ZWxcXFwiPkdpdEh1YjwvYT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgbGF5b3V0OiAnYmFzaWMnLFxcblxcbiAgbWV0YUluZm8gKCkge1xcbiAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgnaG9tZScpIH1cXG4gIH0sXFxuXFxuICBjb21wdXRlZDogbWFwR2V0dGVycyh7XFxuICAgIGF1dGhlbnRpY2F0ZWQ6ICdhdXRoL2NoZWNrJ1xcbiAgfSksXFxuXFxuICBkYXRhOiAoKSA9PiAoe1xcbiAgICB0aXRsZTogd2luZG93LmNvbmZpZy5hcHBOYW1lXFxuICB9KVxcbn1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbi50b3AtcmlnaHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICB0b3A6IDE4cHg7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LXNpemU6IDg1cHg7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTVlMDJiN2Q1XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvd2VsY29tZS52dWVcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDE1IiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0b3AtcmlnaHQgbGlua3NcIj5cbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiYXV0aGVudGljYXRlZFwiPlxuICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnaG9tZScgfVwiPlxuICAgICAgICAgIHt7ICR0KCdob21lJykgfX1cbiAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnbG9naW4nIH1cIj5cbiAgICAgICAgICB7eyAkdCgnbG9naW4nKSB9fVxuICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAncmVnaXN0ZXInIH1cIj5cbiAgICAgICAgICB7eyAkdCgncmVnaXN0ZXInKSB9fVxuICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlIG1iLTRcIj5cbiAgICAgICAge3sgdGl0bGUgfX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibGlua3NcIj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbGFyYXZlbC5jb20vZG9jc1wiPkRvY3VtZW50YXRpb248L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2xhcmFjYXN0cy5jb21cIj5MYXJhY2FzdHM8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2xhcmF2ZWwtbmV3cy5jb21cIj5OZXdzPC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mb3JnZS5sYXJhdmVsLmNvbVwiPkZvcmdlPC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2xhcmF2ZWwvbGFyYXZlbFwiPkdpdEh1YjwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsYXlvdXQ6ICdiYXNpYycsXG5cbiAgbWV0YUluZm8gKCkge1xuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdob21lJykgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKHtcbiAgICBhdXRoZW50aWNhdGVkOiAnYXV0aC9jaGVjaydcbiAgfSksXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICB0aXRsZTogd2luZG93LmNvbmZpZy5hcHBOYW1lXG4gIH0pXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi50b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDE4cHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogODVweDtcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy93ZWxjb21lLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwidG9wLXJpZ2h0IGxpbmtzXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLmF1dGhlbnRpY2F0ZWRcbiAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwiaG9tZVwiIH0gfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoXCJob21lXCIpKSArIFwiXFxuICAgICAgXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgOiBbXG4gICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcImxvZ2luXCIgfSB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChcImxvZ2luXCIpKSArIFwiXFxuICAgICAgXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJyZWdpc3RlclwiIH0gfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoXCJyZWdpc3RlclwiKSkgKyBcIlxcbiAgICAgIFwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIDJcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgbWItNFwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRpdGxlKSArIFwiXFxuICAgIFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlua3NcIiB9LCBbXG4gICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vbGFyYXZlbC5jb20vZG9jc1wiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCJEb2N1bWVudGF0aW9uXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vbGFyYWNhc3RzLmNvbVwiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCJMYXJhY2FzdHNcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly9sYXJhdmVsLW5ld3MuY29tXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIk5ld3NcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly9mb3JnZS5sYXJhdmVsLmNvbVwiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCJGb3JnZVwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vbGFyYXZlbC9sYXJhdmVsXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIkdpdEh1YlwiKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi01ZTAyYjdkNVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNWUwMmI3ZDVcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvd2VsY29tZS52dWVcbi8vIG1vZHVsZSBpZCA9IDEzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDE1Il0sInNvdXJjZVJvb3QiOiIifQ==