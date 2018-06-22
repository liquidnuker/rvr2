webpackJsonp([13],{

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcFeaturedItems_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e491aa68_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcFeaturedItems_vue__ = __webpack_require__(43);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcFeaturedItems_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e491aa68_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcFeaturedItems_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\vcFeaturedItems.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vcFeaturedItems.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e491aa68", Component.options)
  } else {
    hotAPI.reload("data-v-e491aa68", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_router_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_randomint_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_radiocategories_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_shuffle_js__ = __webpack_require__(39);
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







var vcRibbonLeft = function vcRibbonLeft() {
  return __webpack_require__.e/* import() */(7/* duplicate */).then(__webpack_require__.bind(null, 48));
};
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      // API_DIR: "./src/js/ajax/",
      API_DIR: "https://raw.githubusercontent.com/liquidnuker/rvr2/master/src/js/ajax/",

      featuredItemType: "",
      featuredItemId: "",
      featuredItemImg: "",
      featuredItemMake: "",
      featuredItemModel: "",

      // for top ribbon
      label: "label_featured"

    };
  },

  components: {
    vcRibbonLeft: vcRibbonLeft
  },
  methods: {},
  mounted: function mounted() {
    var _this = this;

    var selectedItems = Object(__WEBPACK_IMPORTED_MODULE_4__js_shuffle_js__["a" /* shuffleCategories */])(__WEBPACK_IMPORTED_MODULE_3__js_radiocategories_js__["a" /* radioCategories */]);
    var dataz = selectedItems[0];
    var featuredItem = void 0;
    var jsonUrl = this.API_DIR + dataz + ".json";

    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(jsonUrl).then(function (response) {
      // console.log(data[dataz][0].id); ok
      featuredItem = response.data[dataz];
    }).then(function () {
      // randomize array length
      var x = Object(__WEBPACK_IMPORTED_MODULE_2__js_randomint_js__["a" /* getRandomInt */])(0, featuredItem.length);

      _this.featuredItemType = dataz;
      _this.featuredItemId = featuredItem[x].id;
      _this.featuredItemImg = featuredItem[x].img;
      _this.featuredItemMake = featuredItem[x].make;
      _this.featuredItemModel = featuredItem[x].model;
    }).catch(function (error) {
      console.log(error);
    });
  }
});

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRandomInt; });
var getRandomInt = function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};



/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('header', {
    staticClass: "row li_subheader categories featured_item"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('vcRibbonLeft', {
    attrs: {
      "pr-label": _vm.label
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row featured_item_data",
    attrs: {
      "id": "featured_item_data"
    }
  }, [_c('a', {
    staticClass: "item_id",
    attrs: {
      "href": 'index.html#/radios/:' + _vm.featuredItemType + '/:' + _vm.featuredItemId
    }
  }, [_c('h2', [_vm._v(_vm._s(_vm.featuredItemId))])]), _c('br'), _vm._v(" "), _c('a', {
    staticClass: "item_id",
    attrs: {
      "href": 'index.html#/radios/:' + _vm.featuredItemType + '/:' + _vm.featuredItemId
    }
  }, [_c('img', {
    attrs: {
      "src": 'img/' + _vm.featuredItemType + '/' +
        _vm.featuredItemImg + '_full.jpg'
    }
  })]), _vm._v(" "), _c('p', [_vm._v("Make: " + _vm._s(_vm.featuredItemMake))]), _vm._v(" "), _c('p', [_vm._v("Model: " + _vm._s(_vm.featuredItemModel))]), _vm._v(" "), _c('p', [_vm._v("Category:\r\n      "), _c('a', {
    staticClass: "item_id",
    attrs: {
      "href": 'index.html#/radios/:' + _vm.featuredItemType
    }
  }, [_vm._v("\r\n        " + _vm._s(_vm.featuredItemType) + "\r\n      ")])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e491aa68", esExports)
  }
}

/***/ })

});