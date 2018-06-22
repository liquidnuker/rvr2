webpackJsonp([5],{

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcCategories_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cfeace1c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcCategories_vue__ = __webpack_require__(60);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcCategories_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cfeace1c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcCategories_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\vcCategories.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vcCategories.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cfeace1c", Component.options)
  } else {
    hotAPI.reload("data-v-cfeace1c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 57:
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

var vcRibbonLeft = function vcRibbonLeft() {
  return __webpack_require__.e/* import() */(7/* duplicate */).then(__webpack_require__.bind(null, 48));
};
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'categories',
  data: function data() {
    return {
      categoryList: [{
        name: "Horn Type",
        category: "horntype"
      }, {
        name: "Crystal",
        category: "crystal"
      }, {
        name: "Transistor",
        category: "transistor"
      }, {
        name: "Mini Tube",
        category: "minitube"
      }, {
        name: "Wood Case",
        category: "woodcase"
      }, {
        name: "Bakelite",
        category: "bakelite"
      }, {
        name: "Portable",
        category: "portable"
      }, {
        name: "Unusual",
        category: "unusual"
      }],

      // for top ribbon
      label: "label_categories"
    };
  },

  components: {
    vcRibbonLeft: vcRibbonLeft
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('header', {
    staticClass: "row li_subheader categories"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('vcRibbonLeft', {
    attrs: {
      "pr-label": _vm.label
    }
  })], 1)]), _vm._v(" "), _c('nav', {
    staticClass: "list_group--custom"
  }, [_c('h2', {
    staticClass: "list_group--item"
  }, [_vm._v("Vintage Radios")]), _vm._v(" "), _vm._l((_vm.categoryList), function(i) {
    return [_c('a', {
      staticClass: "list_group--item",
      attrs: {
        "href": 'index.html#/radios/:' + i.category
      }
    }, [_vm._v("\r\n        " + _vm._s(i.name) + "\r\n      ")])]
  })], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-cfeace1c", esExports)
  }
}

/***/ })

});