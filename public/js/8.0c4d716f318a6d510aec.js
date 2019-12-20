webpackJsonp([8],{

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(299)
/* template */
var __vue_template__ = __webpack_require__(300)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform__ = __webpack_require__(64);
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




/* harmony default export */ __webpack_exports__["default"] = ({
    middleware: 'admin',

    scrollToTop: false,

    metaInfo: function metaInfo() {
        return { title: this.$t('users') + ' ' + this.$t('settings') };
    },


    data: function data() {
        return {
            loading: true,
            form: new __WEBPACK_IMPORTED_MODULE_1_vform___default.a({
                enabled: false,
                ssl: false,
                hostname: '',
                port: '',
                apikey: '',
                subpath: '',
                directory: '',
                availability: '',
                quality: ''
            })
        };
    },

    computed: Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapGetters */])({
        users: 'config/users'
    }),

    watch: {
        users: function users(value) {
            var _this = this;

            this.form.keys().forEach(function (key) {
                _this.form[key] = value[key];
            });
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
                                return this.form.post('/api/settings/users');

                            case 2:
                                _ref2 = _context.sent;
                                data = _ref2.data;

                                this.$store.dispatch('config/updateSonarr', data);

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

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "card",
    { attrs: { title: _vm.$t("users") + " " + _vm.$t("settings") } },
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
      _vm._l(_vm.users, function(user, idx) {
        return _c("card", {
          key: user.id + "-" + user.email,
          class: { "mt-3": idx > 0 },
          attrs: { title: user.email }
        })
      })
    ],
    2
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3VzZXJzLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy91c2Vycy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy91c2Vycy52dWU/OTVkYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFtTDtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7O0FBRUE7Z0JBR0E7O2lCQUVBOztrQ0FDQTt5REFDQTtBQUVBOzs7OztxQkFFQTs7eUJBRUE7cUJBQ0E7MEJBQ0E7c0JBQ0E7d0JBQ0E7eUJBQ0E7MkJBQ0E7OEJBQ0E7eUJBSUE7QUFaQTtBQUZBOzs7O2VBa0JBO0FBSEE7Ozs7QUFLQTs7b0RBQ0E7d0NBQ0E7QUFDQTsyQkFDQTtBQUdBO0FBUkE7O2dDQVNBO3VCQUNBOzZCQUNBO0FBRUE7Ozs7QUFFQTtBQURBOzs7Ozs7OztzREFFQTs7Ozs7OzRFQUdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQS9DQSxHOzs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUyxvREFBb0QsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaUNBQWlDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEMsa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzguMGM0ZDcxNmYzMThhNmQ1MTBhZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi91c2Vycy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTA1Y2ZiMzBlXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdXNlcnMudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvdXNlcnMudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTA1Y2ZiMzBlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDVjZmIzMGVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvdXNlcnMudnVlXG4vLyBtb2R1bGUgaWQgPSAyOThcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiPHRlbXBsYXRlPlxuICAgIDxjYXJkIDp0aXRsZT1cIiR0KCd1c2VycycpICsgJyAnICsgJHQoJ3NldHRpbmdzJylcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG0tNVwiIHYtaWY9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICA8aDI+e3sgJHQoJ2xvYWRpbmcnKSArICcgJyArICR0KCd1c2VycycpICsgJyAnICsgJHQoJ3NldHRpbmdzJykgfX08L2gyPlxuICAgICAgICAgICAgPGZhIGNsYXNzPVwiZ2xvYmFsLXNlYXJjaGluZy1zcGlubmVyIG10LTNcIiBpY29uPVwiY29nXCIgc2l6ZT1cIjZ4XCIgc3BpbiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Y2FyZCB2LWZvcj1cInVzZXIsIGlkeCBpbiB1c2Vyc1wiXG4gICAgICAgICAgICA6a2V5PVwidXNlci5pZCArICctJyArIHVzZXIuZW1haWxcIlxuICAgICAgICAgICAgOnRpdGxlPVwidXNlci5lbWFpbFwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7J210LTMnIDogaWR4ID4gMH1cIlxuICAgICAgICA+XG5cbiAgICAgICAgPC9jYXJkPlxuXG4gICAgPC9jYXJkPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBGb3JtIGZyb20gJ3Zmb3JtJ1xuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaWRkbGV3YXJlOiAnYWRtaW4nLFxuXG4gICAgc2Nyb2xsVG9Ub3A6IGZhbHNlLFxuXG4gICAgbWV0YUluZm8gKCkge1xuICAgICAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgndXNlcnMnKSArICcgJyArIHRoaXMuJHQoJ3NldHRpbmdzJykgfVxuICAgIH0sXG5cbiAgICBkYXRhOiAoKSA9PiAoe1xuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHNzbDogZmFsc2UsXG4gICAgICAgICAgICBob3N0bmFtZTogJycsXG4gICAgICAgICAgICBwb3J0OiAnJyxcbiAgICAgICAgICAgIGFwaWtleTogJycsXG4gICAgICAgICAgICBzdWJwYXRoOiAnJyxcbiAgICAgICAgICAgIGRpcmVjdG9yeTogJycsXG4gICAgICAgICAgICBhdmFpbGFiaWxpdHk6ICcnLFxuICAgICAgICAgICAgcXVhbGl0eTogJydcbiAgICAgICAgfSlcbiAgICB9KSxcblxuICAgIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKHtcbiAgICAgICAgdXNlcnM6ICdjb25maWcvdXNlcnMnXG4gICAgfSksXG5cbiAgICB3YXRjaDoge1xuICAgICAgICB1c2VycyAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5rZXlzKCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybVtrZXldID0gdmFsdWVba2V5XVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNyZWF0ZWQgKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnY29uZmlnL2ZldGNoVXNlcnMnKVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFzeW5jIHVwZGF0ZSAoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuZm9ybS5wb3N0KCcvYXBpL3NldHRpbmdzL3VzZXJzJylcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdjb25maWcvdXBkYXRlU29uYXJyJywgZGF0YSlcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvdXNlcnMudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImNhcmRcIixcbiAgICB7IGF0dHJzOiB7IHRpdGxlOiBfdm0uJHQoXCJ1c2Vyc1wiKSArIFwiIFwiICsgX3ZtLiR0KFwic2V0dGluZ3NcIikgfSB9LFxuICAgIFtcbiAgICAgIF92bS5sb2FkaW5nXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBtLTVcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgIF92bS4kdChcImxvYWRpbmdcIikgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHQoXCJ1c2Vyc1wiKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kdChcInNldHRpbmdzXCIpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJmYVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2xvYmFsLXNlYXJjaGluZy1zcGlubmVyIG10LTNcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImNvZ1wiLCBzaXplOiBcIjZ4XCIsIHNwaW46IFwiXCIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS51c2VycywgZnVuY3Rpb24odXNlciwgaWR4KSB7XG4gICAgICAgIHJldHVybiBfYyhcImNhcmRcIiwge1xuICAgICAgICAgIGtleTogdXNlci5pZCArIFwiLVwiICsgdXNlci5lbWFpbCxcbiAgICAgICAgICBjbGFzczogeyBcIm10LTNcIjogaWR4ID4gMCB9LFxuICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiB1c2VyLmVtYWlsIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMDVjZmIzMGVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTA1Y2ZiMzBlXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy91c2Vycy52dWVcbi8vIG1vZHVsZSBpZCA9IDMwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDgiXSwic291cmNlUm9vdCI6IiJ9