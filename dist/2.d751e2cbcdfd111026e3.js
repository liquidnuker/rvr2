webpackJsonp([2],{

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Radios_Id_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bea8137_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Radios_Id_vue__ = __webpack_require__(74);
var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Radios_Id_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bea8137_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Radios_Id_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\Radios-Id.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Radios-Id.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1bea8137", Component.options)
  } else {
    hotAPI.reload("data-v-1bea8137", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store; });
var store = {
  currentItems: ""
};



/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return categoryExists; });
var categoryExists = function categoryExists(category, array) {
  return array.indexOf(category) > -1;
};



/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_router_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_store_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_radiocategories_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_categoryexists_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_jsondir_js__ = __webpack_require__(11);
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










var vcCatDesc = function vcCatDesc() {
  return __webpack_require__.e/* import() */(5/* duplicate */).then(__webpack_require__.bind(null, 52));
};
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      API_DIR: __WEBPACK_IMPORTED_MODULE_5__js_jsondir_js__["a" /* jsonDir */],

      // radio displays
      currentCategory: "",
      filteredId: "",

      // category description
      categoryTitle: "",
      categoryDescription: "",
      categoryPreview: "",

      // breadcrumb
      bcVisible: false,
      bcCategory: "",
      bcId: ""
    };
  },

  components: {
    vcCatDesc: vcCatDesc
  },
  mounted: function mounted() {
    this.checkCategory();
  },
  watch: {
    $route: function $route() {
      this.checkCategory();
    }
  },
  methods: {
    checkCategory: function checkCategory() {
      // check if category exists
      var categoryToCheck = this.$route.params.category;

      if (!Object(__WEBPACK_IMPORTED_MODULE_4__js_categoryexists_js__["a" /* categoryExists */])(categoryToCheck, __WEBPACK_IMPORTED_MODULE_3__js_radiocategories_js__["a" /* radioCategories */])) {
        console.log("radios-id 404");

        // redirect to home instead of 404
        __WEBPACK_IMPORTED_MODULE_1__js_router_js__["a" /* router */].push({ path: "/" });
      } else {
        // set to currentCategory + breadcrumb
        this.currentCategory = categoryToCheck;
        this.bcCategory = categoryToCheck;

        // show category description
        this.showCatDesc();

        // loadItem
        this.loadItems();
      }
    },
    loadItems: function loadItems() {
      var _this = this;

      var filteredItem = "";
      var jsonUrl = this.API_DIR + this.currentCategory + ".json";

      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(jsonUrl).then(function (response) {
        filteredItem = response.data[_this.currentCategory].filter(function (el) {
          return el.id === _this.$route.params.id;
        });
      }).then(function () {
        // check if id is undefined
        if (!filteredItem[0]) {
          console.log("radios id 404");
          // redirect to home instead of 404
          __WEBPACK_IMPORTED_MODULE_1__js_router_js__["a" /* router */].push({ path: "/" });
        } else {
          // attach to filteredId display + breadcrumb
          _this.filteredId = filteredItem;
          _this.bcId = filteredItem[0].id;

          // show breadcrumb
          _this.bcVisible = true;
        }
      }).catch(function (error) {
        console.log(error);
      });
    },
    // for category description
    showCatDesc: function showCatDesc() {
      var _this2 = this;

      var filteredDescription = "";
      var catDescUrl = this.API_DIR + "catdesc.json";

      // filter description to show based on this.currentCategory
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(catDescUrl).then(function (response) {
        filteredDescription = response.data.catdesc.filter(function (el) {
          return el.category === _this2.currentCategory;
        });
      }).then(function () {
        // set category description
        _this2.categoryTitle = filteredDescription[0].title;
        _this2.categoryDescription = filteredDescription[0].description;
        _this2.categoryPreview = filteredDescription[0].preview;
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', {
    staticClass: "row category_description",
    attrs: {
      "id": "category_description"
    }
  }, [_c('vcCatDesc', {
    attrs: {
      "pr-category-title": _vm.categoryTitle,
      "pr-category-description": _vm.categoryDescription,
      "pr-category-preview": _vm.categoryPreview
    }
  })], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('main', {
    staticClass: "row content_box"
  }, [_c('div', {
    staticClass: "row col-sm-12"
  }, [(_vm.bcVisible) ? _c('div', {
    staticClass: "breadcrumb"
  }, [_c('a', {
    attrs: {
      "href": 'index.html#/'
    }
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 20 20"
    }
  }, [_c('path', {
    attrs: {
      "d": "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
    }
  })])]), _vm._v(" \r\n        "), _c('a', {
    attrs: {
      "href": 'index.html#/'
    }
  }, [_vm._v("Home")]), _vm._v(" >\r\n        "), _c('a', {
    attrs: {
      "href": 'index.html#/radios'
    }
  }, [_vm._v("Radios")]), _vm._v(" >\r\n        "), _c('a', {
    attrs: {
      "href": 'index.html#/radios/' + _vm.bcCategory
    }
  }, [_vm._v(_vm._s(_vm.bcCategory))]), _vm._v(" >\r\n        "), _c('p', [_vm._v(_vm._s(_vm.bcId))])]) : _vm._e()]), _vm._v(" "), _c('section', {
    staticClass: "col-sm-12 radios_id",
    attrs: {
      "id": "gallery-placeholder"
    }
  }, _vm._l((_vm.filteredId), function(i) {
    return _c('div', {
      staticClass: "item-description"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-sm-6 radios_id_photo"
    }, [_c('a', {
      attrs: {
        "href": 'img/categories/' + _vm.currentCategory + '/' + i.img + '_full.jpg'
      }
    }, [_c('img', {
      attrs: {
        "src": 'img/categories/' + _vm.currentCategory + '/' + i.img + '_full.jpg'
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "col-sm-6 radios_id_desc"
    }, [_c('h2', {
      staticClass: "item-description_title"
    }, [_vm._v("\r\n            " + _vm._s(i.make) + " " + _vm._s(i.id) + "\r\n            ")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(i.description1))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(i.description2))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h2', {
      staticClass: "item-description_title"
    }, [_vm._v("\r\n            Specifications:\r\n            ")]), _vm._v(" "), _c('p', [_vm._v("Make: " + _vm._s(i.make))]), _vm._v(" "), _c('p', [_vm._v("Model: " + _vm._s(i.id))]), _vm._v(" "), _c('p', [_vm._v("Year: " + _vm._s(i.year))]), _vm._v(" "), _c('p', [_vm._v("Casing: " + _vm._s(i.case))]), _vm._v(" "), _c('p', [_vm._v("Speaker: " + _vm._s(i.speaker))]), _vm._v(" "), _c('p', [_vm._v("Tuning type: " + _vm._s(i.tuning_type))]), _vm._v(" "), _c('p', [_vm._v("Power requirements: " + _vm._s(i.power))]), _vm._v(" "), _c('p', [_vm._v("Frequency: " + _vm._s(i.frequency))]), _vm._v(" "), _c('p', [_vm._v("Measurements: " + _vm._s(i.measurements))])])])])
  })), _vm._v(" "), _c('div', {
    staticClass: "col-sm-12"
  }, [_vm._v("\r\n      reserve\r\n    ")])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row row_subheader"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('p', {
    attrs: {
      "id": "details"
    }
  }, [_vm._v("details")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1bea8137", esExports)
  }
}

/***/ })

});