webpackJsonp([21],{

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_welcome_vue__ = __webpack_require__(258);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5e02b7d5_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_welcome_vue__ = __webpack_require__(275);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(273)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5e02b7d5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_welcome_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5e02b7d5_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_welcome_vue__["a" /* default */],
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

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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



/* harmony default export */ __webpack_exports__["a"] = ({
  layout: 'basic',

  metaInfo: function metaInfo() {
    return { title: this.$t('home') };
  },


  data: function data() {
    return {
      title: window.config.appName
    };
  },

  computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])({
    authenticated: 'auth/check'
  })
});

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(274);
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

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(true);
// imports


// module
exports.push([module.i, "\n.top-right[data-v-5e02b7d5] {\n  position: absolute;\n  right: 10px;\n  top: 18px;\n}\n.title[data-v-5e02b7d5] {\n  font-size: 85px;\n}\n", "", {"version":3,"sources":["/sites/megamaid.test/resources/assets/js/pages/resources/assets/js/pages/welcome.vue"],"names":[],"mappings":";AAsDA;EACA,mBAAA;EACA,YAAA;EACA,UAAA;CACA;AAEA;EACA,gBAAA;CACA","file":"welcome.vue","sourcesContent":["<template>\n  <div>\n    <div class=\"top-right links\">\n      <template v-if=\"authenticated\">\n        <router-link :to=\"{ name: 'home' }\">\n          {{ $t('home') }}\n        </router-link>\n      </template>\n      <template v-else>\n        <router-link :to=\"{ name: 'login' }\">\n          {{ $t('login') }}\n        </router-link>\n        <router-link :to=\"{ name: 'register' }\">\n          {{ $t('register') }}\n        </router-link>\n      </template>\n    </div>\n\n    <div class=\"text-center\">\n      <div class=\"title mb-4\">\n        {{ title }}\n      </div>\n\n      <div class=\"links\">\n        <a href=\"https://laravel.com/docs\">Documentation</a>\n        <a href=\"https://laracasts.com\">Laracasts</a>\n        <a href=\"https://laravel-news.com\">News</a>\n        <a href=\"https://forge.laravel.com\">Forge</a>\n        <a href=\"https://github.com/laravel/laravel\">GitHub</a>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { mapGetters } from 'vuex'\n\nexport default {\n  layout: 'basic',\n\n  metaInfo () {\n    return { title: this.$t('home') }\n  },\n\n  data: () => ({\n    title: window.config.appName\n  }),\n\n  computed: mapGetters({\n    authenticated: 'auth/check'\n  }),\n}\n</script>\n\n<style scoped>\n.top-right {\n  position: absolute;\n  right: 10px;\n  top: 18px;\n}\n\n.title {\n  font-size: 85px;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5e02b7d5", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3dlbGNvbWUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3dlbGNvbWUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvd2VsY29tZS52dWU/ZmJhNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3dlbGNvbWUudnVlPzNkZmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy93ZWxjb21lLnZ1ZT81MmMwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQWtNO0FBQ2xNO0FBQ0E7QUFDQTtBQUNpUztBQUNhO0FBQzlTO0FBQzZLO0FBQzdLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7O0FBRUE7VUFHQTs7Z0NBQ0E7NEJBQ0E7QUFFQTs7Ozs7MkJBSUE7QUFIQTs7OzttQkFNQTtBQUZBO0FBWEEsRzs7Ozs7OztBQ3JDQTs7QUFFQTtBQUNBLHFDQUFrTztBQUNsTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0pBQWdKLGlGQUFpRjtBQUNqTyx5SkFBeUosaUZBQWlGO0FBQzFPO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLHdEQUF5RCx1QkFBdUIsZ0JBQWdCLGNBQWMsR0FBRywyQkFBMkIsb0JBQW9CLEdBQUcsVUFBVSx1SUFBdUksTUFBTSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyw2S0FBNkssZUFBZSxpQkFBaUIsY0FBYyxrR0FBa0csZ0JBQWdCLGlCQUFpQixlQUFlLHNEQUFzRCxtQkFBbUIsaUJBQWlCLGtCQUFrQix3SUFBd0ksU0FBUyxnYUFBZ2EsYUFBYSxnQ0FBZ0MsdUNBQXVDLGNBQWMseUJBQXlCLEtBQUsscUJBQXFCLHVDQUF1Qyw4QkFBOEIsc0NBQXNDLEtBQUssMkNBQTJDLHVCQUF1QixnQkFBZ0IsY0FBYyxHQUFHLFlBQVksb0JBQW9CLEdBQUcsK0JBQStCOztBQUVseUQ7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpQ0FBaUM7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFNBQVMsTUFBTSxlQUFlLEVBQUUsRUFBRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLE1BQU0sZ0JBQWdCLEVBQUUsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsU0FBUyxNQUFNLG1CQUFtQixFQUFFLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZCQUE2QjtBQUM1QyxpQkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1QkFBdUI7QUFDN0MsZUFBZSxTQUFTLG1DQUFtQyxFQUFFO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUyxnQ0FBZ0MsRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVMsbUNBQW1DLEVBQUU7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTLG9DQUFvQyxFQUFFO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUyw2Q0FBNkMsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy8yMS5hMzViNGIwMjc2OWVhODIxMWMyOS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWUwMmI3ZDVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi93ZWxjb21lLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi93ZWxjb21lLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3dlbGNvbWUudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01ZTAyYjdkNVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vd2VsY29tZS52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtNWUwMmI3ZDVcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy93ZWxjb21lLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01ZTAyYjdkNVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVlMDJiN2Q1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy93ZWxjb21lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMjEiLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzcz1cInRvcC1yaWdodCBsaW5rc1wiPlxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCJhdXRoZW50aWNhdGVkXCI+XG4gICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdob21lJyB9XCI+XG4gICAgICAgICAge3sgJHQoJ2hvbWUnKSB9fVxuICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdsb2dpbicgfVwiPlxuICAgICAgICAgIHt7ICR0KCdsb2dpbicpIH19XG4gICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdyZWdpc3RlcicgfVwiPlxuICAgICAgICAgIHt7ICR0KCdyZWdpc3RlcicpIH19XG4gICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGUgbWItNFwiPlxuICAgICAgICB7eyB0aXRsZSB9fVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJsaW5rc1wiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9sYXJhdmVsLmNvbS9kb2NzXCI+RG9jdW1lbnRhdGlvbjwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbGFyYWNhc3RzLmNvbVwiPkxhcmFjYXN0czwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbGFyYXZlbC1uZXdzLmNvbVwiPk5ld3M8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2ZvcmdlLmxhcmF2ZWwuY29tXCI+Rm9yZ2U8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbGFyYXZlbC9sYXJhdmVsXCI+R2l0SHViPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxheW91dDogJ2Jhc2ljJyxcblxuICBtZXRhSW5mbyAoKSB7XG4gICAgcmV0dXJuIHsgdGl0bGU6IHRoaXMuJHQoJ2hvbWUnKSB9XG4gIH0sXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICB0aXRsZTogd2luZG93LmNvbmZpZy5hcHBOYW1lXG4gIH0pLFxuXG4gIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKHtcbiAgICBhdXRoZW50aWNhdGVkOiAnYXV0aC9jaGVjaydcbiAgfSksXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi50b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDE4cHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogODVweDtcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy93ZWxjb21lLnZ1ZSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZTAyYjdkNVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3dlbGNvbWUudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIxOWExZDIwYVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZTAyYjdkNVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3dlbGNvbWUudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlMDJiN2Q1XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vd2VsY29tZS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWUwMmI3ZDVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy93ZWxjb21lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjczXG4vLyBtb2R1bGUgY2h1bmtzID0gMjEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRvcC1yaWdodFtkYXRhLXYtNWUwMmI3ZDVdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgdG9wOiAxOHB4O1xcbn1cXG4udGl0bGVbZGF0YS12LTVlMDJiN2Q1XSB7XFxuICBmb250LXNpemU6IDg1cHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvc2l0ZXMvbWVnYW1haWQudGVzdC9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvd2VsY29tZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXNEQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7Q0FDQTtBQUVBO0VBQ0EsZ0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwid2VsY29tZS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidG9wLXJpZ2h0IGxpbmtzXFxcIj5cXG4gICAgICA8dGVtcGxhdGUgdi1pZj1cXFwiYXV0aGVudGljYXRlZFxcXCI+XFxuICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICdob21lJyB9XFxcIj5cXG4gICAgICAgICAge3sgJHQoJ2hvbWUnKSB9fVxcbiAgICAgICAgPC9yb3V0ZXItbGluaz5cXG4gICAgICA8L3RlbXBsYXRlPlxcbiAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XFxuICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICdsb2dpbicgfVxcXCI+XFxuICAgICAgICAgIHt7ICR0KCdsb2dpbicpIH19XFxuICAgICAgICA8L3JvdXRlci1saW5rPlxcbiAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cXFwieyBuYW1lOiAncmVnaXN0ZXInIH1cXFwiPlxcbiAgICAgICAgICB7eyAkdCgncmVnaXN0ZXInKSB9fVxcbiAgICAgICAgPC9yb3V0ZXItbGluaz5cXG4gICAgICA8L3RlbXBsYXRlPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInRpdGxlIG1iLTRcXFwiPlxcbiAgICAgICAge3sgdGl0bGUgfX1cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJsaW5rc1xcXCI+XFxuICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL2xhcmF2ZWwuY29tL2RvY3NcXFwiPkRvY3VtZW50YXRpb248L2E+XFxuICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL2xhcmFjYXN0cy5jb21cXFwiPkxhcmFjYXN0czwvYT5cXG4gICAgICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vbGFyYXZlbC1uZXdzLmNvbVxcXCI+TmV3czwvYT5cXG4gICAgICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vZm9yZ2UubGFyYXZlbC5jb21cXFwiPkZvcmdlPC9hPlxcbiAgICAgICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2xhcmF2ZWwvbGFyYXZlbFxcXCI+R2l0SHViPC9hPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBsYXlvdXQ6ICdiYXNpYycsXFxuXFxuICBtZXRhSW5mbyAoKSB7XFxuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdob21lJykgfVxcbiAgfSxcXG5cXG4gIGRhdGE6ICgpID0+ICh7XFxuICAgIHRpdGxlOiB3aW5kb3cuY29uZmlnLmFwcE5hbWVcXG4gIH0pLFxcblxcbiAgY29tcHV0ZWQ6IG1hcEdldHRlcnMoe1xcbiAgICBhdXRoZW50aWNhdGVkOiAnYXV0aC9jaGVjaydcXG4gIH0pLFxcbn1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbi50b3AtcmlnaHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICB0b3A6IDE4cHg7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LXNpemU6IDg1cHg7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTVlMDJiN2Q1XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvd2VsY29tZS52dWVcbi8vIG1vZHVsZSBpZCA9IDI3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIxIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJ0b3AtcmlnaHQgbGlua3NcIiB9LFxuICAgICAgW1xuICAgICAgICBfdm0uYXV0aGVudGljYXRlZFxuICAgICAgICAgID8gW1xuICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJob21lXCIgfSB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChcImhvbWVcIikpICsgXCJcXG4gICAgICBcIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwibG9naW5cIiB9IH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KFwibG9naW5cIikpICsgXCJcXG4gICAgICBcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcInJlZ2lzdGVyXCIgfSB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChcInJlZ2lzdGVyXCIpKSArIFwiXFxuICAgICAgXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICBdLFxuICAgICAgMlxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSBtYi00XCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0udGl0bGUpICsgXCJcXG4gICAgXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5rc1wiIH0sIFtcbiAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly9sYXJhdmVsLmNvbS9kb2NzXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIkRvY3VtZW50YXRpb25cIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly9sYXJhY2FzdHMuY29tXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIkxhcmFjYXN0c1wiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJodHRwczovL2xhcmF2ZWwtbmV3cy5jb21cIiB9IH0sIFtcbiAgICAgICAgX3ZtLl92KFwiTmV3c1wiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJodHRwczovL2ZvcmdlLmxhcmF2ZWwuY29tXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIkZvcmdlXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sYXJhdmVsL2xhcmF2ZWxcIiB9IH0sIFtcbiAgICAgICAgX3ZtLl92KFwiR2l0SHViXCIpXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi01ZTAyYjdkNVwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTVlMDJiN2Q1XCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3dlbGNvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSAyNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAyMSJdLCJzb3VyY2VSb290IjoiIn0=