webpackJsonp([14],{

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcHomeCatBox_vue__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_32a2a2aa_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcHomeCatBox_vue__ = __webpack_require__(62);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcHomeCatBox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_32a2a2aa_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcHomeCatBox_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\vcHomeCatBox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vcHomeCatBox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32a2a2aa", Component.options)
  } else {
    hotAPI.reload("data-v-32a2a2aa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 61:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      radioCategories: ["horntype", "crystal", "transistor", "minitube", "woodcase", "bakelite", "portable", "unusual"]
    };
  },

  watch: {
    // : function () {
    // }
  },
  props: [],
  components: {},
  mounted: function mounted() {
    console.log("vcHomeCatBox.vue mounted");
  },
  methods: {}
});

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.radioCategories), function(i, index) {
    return _c('section', {
      staticClass: "col-xs-12 col-sm-6 col-lg-3"
    }, [_c('div', {
      staticClass: "item_box"
    }, [_c('div', {
      staticClass: "item_bg--white"
    }, [_c('div', {
      staticClass: "item_bg--skew"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": 'index.html#/radios/' + i
      }
    }, [_c('img', {
      staticClass: "item_img",
      attrs: {
        "src": 'img/ui/cat_' + i + '.png'
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "item_label--front"
    }), _vm._v(" "), _c('div', {
      staticClass: "item_label--back-right"
    }), _vm._v(" "), _c('div', {
      staticClass: "item_label--back-left"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": 'index.html#/radios/' + i
      }
    }, [_c('img', {
      staticClass: "category_name",
      attrs: {
        "src": 'img/ui/label_' + i + '.svg'
      }
    })])])])
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-32a2a2aa", esExports)
  }
}

/***/ })

});