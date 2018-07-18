webpackJsonp([0],{

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Radios_Category_vue__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cf3796cc_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Radios_Category_vue__ = __webpack_require__(72);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Radios_Category_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cf3796cc_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Radios_Category_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\Radios-Category.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Radios-Category.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cf3796cc", Component.options)
  } else {
    hotAPI.reload("data-v-cf3796cc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Pager;
// pagination helper
// ======================================================/

function Pager(opts) {
  this.data = opts.data;
  this.perPage = opts.perPage;
  this.currentPage = 1;
}

Pager.prototype = {
  getTotalPages: function getTotalPages() {
    // ret num
    return Math.ceil(this.data.length / this.perPage);
  },
  getCurrentOffset: function getCurrentOffset() {
    // ret num
    return (this.currentPage - 1) * this.perPage;
  },
  page: function page(num) {
    if (this.isValidPage(num)) {
      this.currentPage = num;

      var start = this.getCurrentOffset();
      var end = start + Number(this.perPage);

      return this.data.slice(start, end);
    } else {
      // default page
      this.currentPage = 1;
      return this.data.slice(0, this.perPage);
    }
  },
  hasNext: function hasNext() {
    // ret boolean
    return this.currentPage < this.getTotalPages();
  },
  hasPrev: function hasPrev() {
    // ret boolean
    return this.currentPage !== 1;
  },
  prev: function prev() {
    // ret num
    if (this.hasPrev()) {
      this.currentPage = this.currentPage - 1;
    } else {
      this.currentPage = this.getTotalPages();
    }
    return this.currentPage;
  },
  next: function next() {
    // ret num
    if (this.hasNext()) {
      this.currentPage++;
    } else {
      this.currentPage = 1;
    }
    // console.log(this.currentPage);
    return this.currentPage;
  },
  isValidPage: function isValidPage(num) {
    // ret boolean
    return num > 0 && num <= this.getTotalPages();
  }
};

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pageBtns; });
/**
 *  Generates paginator page buttons
 *
 *  Credits:
 *  https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
 *  
 *  ...returns an array of [1] if there is only 1 page. 
 *  - anotherstarburst
 *  
 */

var pageBtns = function pageBtns(currentPage, nrOfPages) {
  var delta = 2,
      range = [],
      rangeWithDots = [],
      l;

  range.push(1);

  if (nrOfPages <= 1) {
    return range;
  }

  for (var i = currentPage - delta; i <= currentPage + delta; i++) {
    if (i < nrOfPages && i > 1) {
      range.push(i);
    }
  }
  range.push(nrOfPages);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = range[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _i = _step.value;

      if (l) {
        if (_i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (_i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(_i);
      l = _i;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return rangeWithDots;
  // return range;
};



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

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_router_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_store_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_radiocategories_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_categoryexists_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_pager_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_pagebtns_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_jsondir_js__ = __webpack_require__(11);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      API_DIR: __WEBPACK_IMPORTED_MODULE_7__js_jsondir_js__["a" /* jsonDir */],

      // radio displays
      currentItems: __WEBPACK_IMPORTED_MODULE_2__js_store_js__["a" /* store */].currentItems,
      currentCategory: "",
      itemList: "", // paginated items

      // category description
      categoryTitle: "",
      categoryDescription: "",
      categoryPreview: "",

      // breadcrumb
      bcVisible: false,
      bcCategory: "",

      // pager
      pg: "",
      perPage: 10,
      perPageItems: [10, 20, 50, 100],
      totalPages: "",
      currentPage: "",

      temp: "", // temp page buttons
      buttonSet: ""
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
    refreshItems: function refreshItems() {
      this.currentItems = __WEBPACK_IMPORTED_MODULE_2__js_store_js__["a" /* store */].currentItems;
    },
    checkCategory: function checkCategory() {
      // check if category exists
      var categoryToCheck = this.$route.params.category;

      if (!Object(__WEBPACK_IMPORTED_MODULE_4__js_categoryexists_js__["a" /* categoryExists */])(categoryToCheck, __WEBPACK_IMPORTED_MODULE_3__js_radiocategories_js__["a" /* radioCategories */])) {
        console.log("404/ push to default items");
        __WEBPACK_IMPORTED_MODULE_1__js_router_js__["a" /* router */].push({
          path: "/radios/horntype"
        });
      } else {
        // set to currentCategory + breadcrumb
        this.currentCategory = categoryToCheck;
        this.bcCategory = categoryToCheck;

        // show category description
        this.showCatDesc();

        // loadItems
        this.loadItems();
      }
    },
    loadItems: function loadItems() {
      var _this = this;

      var jsonUrl = this.API_DIR + this.currentCategory + ".json";

      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(jsonUrl).then(function (response) {
        // inject to store itemList 
        __WEBPACK_IMPORTED_MODULE_2__js_store_js__["a" /* store */].currentItems = response.data[_this.currentCategory];
        // console.log(store.itemList.length + ": " + self.currentCategory);
      }).then(function () {
        _this.refreshItems();
      }).then(function () {
        _this.activatePager();
      }).catch(function (error) {
        console.log(error);
      });
    },
    // for category description
    showCatDesc: function showCatDesc() {
      var _this2 = this;

      var filteredDescription = "";
      var catDescUrl = this.API_DIR + "catdesc.json";

      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(catDescUrl).then(function (response) {
        filteredDescription = response.data.catdesc.filter(function (el) {
          return el.category === _this2.currentCategory;
        });
      }).then(function () {
        // set category description
        _this2.categoryTitle = filteredDescription[0].title;
        _this2.categoryDescription = filteredDescription[0].description;
        _this2.categoryPreview = filteredDescription[0].preview;

        // show breadcrumb
        _this2.bcVisible = true;
      }).catch(function (error) {
        console.log(error);
      });
    },
    pushRoute: function pushRoute(category, id) {
      __WEBPACK_IMPORTED_MODULE_1__js_router_js__["a" /* router */].push("/radios/" + category + "/" + id);
    },
    activatePager: function activatePager() {
      this.pg = null;
      this.pg = new __WEBPACK_IMPORTED_MODULE_5__js_pager_js__["a" /* default */]({
        perPage: this.perPage,
        data: this.currentItems
      });
      this.totalPages = this.pg.getTotalPages();

      this.setPageBtns();
      this.showItems(1);
    },
    showItems: function showItems(num) {
      this.itemList = this.pg.page(num);
      this.currentPage = this.pg.currentPage;

      this.changePageBtns();
    },
    changePerPage: function changePerPage(perPage) {
      console.log(perPage);
      this.perPage = perPage;
      this.activatePager();
    },
    flip: function flip(direction) {
      if (direction === "next") {
        this.showItems(this.pg.next());
      } else {
        this.showItems(this.pg.prev());
      }
    },
    setPageBtns: function setPageBtns() {
      this.temp = [];
      for (var i = 0, l = this.pg.getTotalPages(); i < l; i++) {
        this.temp.push(Object(__WEBPACK_IMPORTED_MODULE_6__js_pagebtns_js__["a" /* pageBtns */])(i, l));
      }
    },
    changePageBtns: function changePageBtns() {
      this.buttonSet = this.temp[this.pg.currentPage - 1];
    },
    pageJump: function pageJump(page) {
      this.showItems(Number(page));
    }
  }
});

/***/ }),

/***/ 72:
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
  }, [_vm._v("Radios")]), _vm._v(" >\r\n        "), _c('p', [_vm._v(_vm._s(_vm.bcCategory))])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "row col-sm-12"
  }, [_c('div', {
    staticClass: "row jspager1_holder"
  }, [_c('nav', {
    staticClass: "jspager1"
  }, [_c('aside', {
    staticClass: "jspager1_totalpagesholder"
  }, [_c('label', {
    attrs: {
      "for": "jspager1_select"
    }
  }, [_vm._v("Page:")]), _vm._v(" "), _c('p', {
    attrs: {
      "id": "jspager1_currentpage"
    }
  }), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentPage),
      expression: "currentPage"
    }],
    staticClass: "jspager1_select",
    attrs: {
      "id": "jspager1_select",
      "name": "jspager1_select",
      "tabindex": "0"
    },
    on: {
      "change": [function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.currentPage = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }, function($event) {
        _vm.pageJump($event.target.value)
      }]
    }
  }, _vm._l((_vm.totalPages), function(i) {
    return _c('option', {
      domProps: {
        "value": i
      }
    }, [_vm._v(_vm._s(i))])
  })), _vm._v(" "), _c('p', {
    attrs: {
      "id": "jspager1_totalpages"
    }
  }, [_vm._v("of " + _vm._s(_vm.totalPages))])]), _vm._v(" "), _c('aside', {
    staticClass: "jspager1_prevnextholder"
  }, [_c('button', {
    staticClass: "btn btn_first",
    attrs: {
      "id": "jspager1_first",
      "tabindex": "0"
    },
    on: {
      "click": function($event) {
        _vm.showItems(1)
      }
    }
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
    }
  })]), _vm._v(" "), _c('span', [_vm._v("First")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn_prev",
    attrs: {
      "id": "jspager1_prev",
      "tabindex": "0"
    },
    on: {
      "click": function($event) {
        _vm.flip()
      }
    }
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
    }
  })]), _vm._v(" "), _c('span', [_vm._v("Prev")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn_next",
    attrs: {
      "id": "jspager1_next",
      "tabindex": "0"
    },
    on: {
      "click": function($event) {
        _vm.flip('next')
      }
    }
  }, [_c('span', [_vm._v("Next")]), _vm._v(" "), _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
    }
  })])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn_last",
    attrs: {
      "id": "jspager1_last",
      "tabindex": "0"
    },
    on: {
      "click": function($event) {
        _vm.showItems(_vm.totalPages)
      }
    }
  }, [_c('span', [_vm._v("Last")]), _vm._v(" "), _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
    }
  })])])]), _vm._v(" "), _c('aside', {
    staticClass: "jspager1_pagebtnholder",
    attrs: {
      "id": "jspager1_pagebtnholder",
      "aria-atomic": "true",
      "aria-live": "polite",
      "aria-relevant": "additions"
    }
  }, [_vm._l((_vm.buttonSet), function(i, index) {
    return [(i === _vm.currentPage) ? _c('a', {
      staticClass: "jspager1_pagebtn jspager1_pagebtn--active",
      attrs: {
        "tabindex": "0",
        "aria-posinset": _vm.currentPage,
        "aria-selected": "true"
      },
      on: {
        "click": function($event) {
          _vm.showItems(i)
        }
      }
    }, [_vm._v(_vm._s(i))]) : _c('a', {
      staticClass: "jspager1_pagebtn",
      attrs: {
        "tabindex": "0",
        "aria-posinset": index + 1
      },
      on: {
        "click": function($event) {
          _vm.showItems(i)
        }
      }
    }, [_vm._v("\r\n              " + _vm._s(i) + "\r\n            ")])]
  })], 2), _vm._v(" "), _c('aside', {
    staticClass: "jspager1_jumptopageholder"
  }, [_c('label', {
    attrs: {
      "for": "jspager1_jump"
    }
  }, [_vm._v("jump to page: ")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.toPage),
      expression: "toPage"
    }],
    staticClass: " jspager1_jump",
    attrs: {
      "type": "tel",
      "name": "jspager1_jump",
      "id": "jspager1_jump",
      "placeholder": "",
      "tabindex": "0"
    },
    domProps: {
      "value": _vm.toPage,
      "value": (_vm.toPage)
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
        _vm.pageJump(_vm.toPage)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.toPage = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "id": "jspager1_jumpbtn",
      "tabindex": "0"
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
        _vm.pageJump(_vm.toPage)
      },
      "click": function($event) {
        _vm.pageJump(_vm.toPage)
      }
    }
  }, [_vm._v("Go")])]), _vm._v(" "), _c('aside', {
    staticClass: "jspager1_perpageholder"
  }, [_c('label', {
    attrs: {
      "for": "jspager1_perpage"
    }
  }, [_vm._v("perPage: ")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.perPage),
      expression: "perPage"
    }],
    staticClass: "jspager1_perpage",
    attrs: {
      "id": "jspager1_perpage",
      "name": "jspager1_perpage",
      "tabindex": "0"
    },
    on: {
      "change": [function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.perPage = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }, function($event) {
        _vm.changePerPage($event.target.value)
      }]
    }
  }, _vm._l((_vm.perPageItems), function(i) {
    return _c('option', {
      domProps: {
        "value": i
      }
    }, [_vm._v(_vm._s(i))])
  }))])])])]), _vm._v(" "), _c('section', {
    staticClass: "col-sm-12",
    attrs: {
      "id": "gallery-placeholder"
    }
  }, [_c('div', {
    staticClass: "row",
    attrs: {
      "id": "galleryContainer"
    }
  }, _vm._l((_vm.itemList), function(i) {
    return _c('div', {
      staticClass: "col-xs-12 col-sm-4 col-md-3 col-lg-3",
      attrs: {
        "id": "gridder"
      }
    }, [_c('div', {
      attrs: {
        "id": "ajaxbox"
      }
    }, [_c('div', {
      staticClass: "ajaxbox-bg-skew"
    }), _vm._v(" "), _c('img', {
      attrs: {
        "src": 'img/categories/' + _vm.currentCategory + '/' + i.img + '_thumb.jpg',
        "id": i.id,
        "alt": i.id
      },
      on: {
        "click": function($event) {
          _vm.pushRoute(_vm.currentCategory, i.id)
        }
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "ajaxboxText"
    }, [_c('h2', {
      staticClass: "model",
      attrs: {
        "id": i.id
      }
    }, [_vm._v(_vm._s(i.model))]), _c('br'), _vm._v(" "), _c('span', {
      staticClass: "make"
    }, [_vm._v(_vm._s(i.make))])])])])
  }))]), _vm._v(" "), _vm._m(1)])])])
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
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-sm-12"
  }, [_c('div', {
    staticClass: "gallery-listing-paginator"
  }, [_vm._v("\r\n        bottom paginator\r\n      ")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-cf3796cc", esExports)
  }
}

/***/ })

});