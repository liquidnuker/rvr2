webpackJsonp([3],{

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

var vcCategories = function vcCategories() {
  return __webpack_require__.e/* import() */(5/* duplicate */).then(__webpack_require__.bind(null, 47));
};
var vcHomeCatBox = function vcHomeCatBox() {
  return __webpack_require__.e/* import() */(14).then(__webpack_require__.bind(null, 61));
};
var vcFeaturedItems = function vcFeaturedItems() {
  return __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, 40));
};
var vcHomeTopCarousel = function vcHomeTopCarousel() {
  return __webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, 64));
};
var vcHomeBottomCarousel = function vcHomeBottomCarousel() {
  return __webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, 67));
};
var vcFooter = function vcFooter() {
  return __webpack_require__.e/* import() */(4/* duplicate */).then(__webpack_require__.bind(null, 49));
};

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },

  components: {
    vcCategories: vcCategories,
    vcHomeCatBox: vcHomeCatBox,
    vcFeaturedItems: vcFeaturedItems,
    vcHomeTopCarousel: vcHomeTopCarousel,
    vcHomeBottomCarousel: vcHomeBottomCarousel,
    vcFooter: vcFooter
  },
  methods: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19b7a970_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(72);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19b7a970_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19b7a970", Component.options)
  } else {
    hotAPI.reload("data-v-19b7a970", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('section', {
    staticClass: "col-sm-3"
  }, [_c('vcCategories'), _vm._v(" "), _c('vcFeaturedItems')], 1), _vm._v(" "), _c('section', {
    staticClass: "col-sm-9"
  }, [_c('div', {
    staticClass: "row carousel_box"
  }, [_c('vcHomeTopCarousel')], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('main', {
    staticClass: "row content_box"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('div', {
    staticClass: "row item_container"
  }, [_c('vcHomeCatBox')], 1)])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "row content_box"
  }, [_c('vcHomeBottomCarousel')], 1)])])]), _vm._v(" "), _c('footer', {
    staticClass: "row footer1"
  }, [_c('vcFooter')], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12"
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row row_subheader"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_vm._v(" \r\n          ")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row row_subheader"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_vm._v(" \r\n          ")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-19b7a970", esExports)
  }
}

/***/ })

});