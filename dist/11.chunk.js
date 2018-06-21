webpackJsonp([11],{

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Siema = t() : e.Siema = t();
}(this, function () {
  return function (e) {
    function t(s) {
      if (i[s]) return i[s].exports;var r = i[s] = { i: s, l: !1, exports: {} };return e[s].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
    }var i = {};return t.m = e, t.c = i, t.i = function (e) {
      return e;
    }, t.d = function (e, i, s) {
      t.o(e, i) || Object.defineProperty(e, i, { configurable: !1, enumerable: !0, get: s });
    }, t.n = function (e) {
      var i = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return t.d(i, "a", i), i;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "", t(t.s = 0);
  }([function (e, t, i) {
    "use strict";
    function s(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(t, "__esModule", { value: !0 });var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return typeof e === "undefined" ? "undefined" : _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
    },
        n = function () {
      function e(e, t) {
        for (var i = 0; i < t.length; i++) {
          var s = t[i];s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
        }
      }return function (t, i, s) {
        return i && e(t.prototype, i), s && e(t, s), t;
      };
    }(),
        o = function () {
      function e(t) {
        var i = this;s(this, e), this.config = e.mergeSettings(t), this.selector = "string" == typeof this.config.selector ? document.querySelector(this.config.selector) : this.config.selector, this.selectorWidth = this.selector.offsetWidth, this.innerElements = [].slice.call(this.selector.children), this.currentSlide = this.config.startIndex, this.transformProperty = e.webkitOrNot(), ["resizeHandler", "touchstartHandler", "touchendHandler", "touchmoveHandler", "mousedownHandler", "mouseupHandler", "mouseleaveHandler", "mousemoveHandler"].forEach(function (e) {
          i[e] = i[e].bind(i);
        }), this.init();
      }return n(e, [{ key: "init", value: function value() {
          if (window.addEventListener("resize", this.resizeHandler), this.config.draggable && (this.pointerDown = !1, this.drag = { startX: 0, endX: 0, startY: 0, letItGo: null }, this.selector.addEventListener("touchstart", this.touchstartHandler), this.selector.addEventListener("touchend", this.touchendHandler), this.selector.addEventListener("touchmove", this.touchmoveHandler, { passive: !0 }), this.selector.addEventListener("mousedown", this.mousedownHandler), this.selector.addEventListener("mouseup", this.mouseupHandler), this.selector.addEventListener("mouseleave", this.mouseleaveHandler), this.selector.addEventListener("mousemove", this.mousemoveHandler)), null === this.selector) throw new Error("Something wrong with your selector 😭");this.resolveSlidesNumber(), this.selector.style.overflow = "hidden", this.sliderFrame = document.createElement("div"), this.sliderFrame.style.width = this.selectorWidth / this.perPage * this.innerElements.length + "px", this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.config.draggable && (this.selector.style.cursor = "-webkit-grab");for (var e = document.createDocumentFragment(), t = 0; t < this.innerElements.length; t++) {
            var i = document.createElement("div");i.style.cssFloat = "left", i.style.float = "left", i.style.width = 100 / this.innerElements.length + "%", i.appendChild(this.innerElements[t]), e.appendChild(i);
          }this.sliderFrame.appendChild(e), this.selector.innerHTML = "", this.selector.appendChild(this.sliderFrame), this.slideToCurrent(), this.config.onInit.call(this);
        } }, { key: "resolveSlidesNumber", value: function value() {
          if ("number" == typeof this.config.perPage) this.perPage = this.config.perPage;else if ("object" === r(this.config.perPage)) {
            this.perPage = 1;for (var e in this.config.perPage) {
              window.innerWidth >= e && (this.perPage = this.config.perPage[e]);
            }
          }
        } }, { key: "prev", value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
              t = arguments[1];if (!(this.innerElements.length <= this.perPage)) {
            var i = this.currentSlide;0 === this.currentSlide && this.config.loop ? this.currentSlide = this.innerElements.length - this.perPage : this.currentSlide = Math.max(this.currentSlide - e, 0), i !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this));
          }
        } }, { key: "next", value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
              t = arguments[1];if (!(this.innerElements.length <= this.perPage)) {
            var i = this.currentSlide;this.currentSlide === this.innerElements.length - this.perPage && this.config.loop ? this.currentSlide = 0 : this.currentSlide = Math.min(this.currentSlide + e, this.innerElements.length - this.perPage), i !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this));
          }
        } }, { key: "goTo", value: function value(e, t) {
          this.innerElements.length <= this.perPage || (this.currentSlide = Math.min(Math.max(e, 0), this.innerElements.length - this.perPage), this.slideToCurrent(), t && t.call(this));
        } }, { key: "slideToCurrent", value: function value() {
          this.sliderFrame.style[this.transformProperty] = "translate3d(-" + this.currentSlide * (this.selectorWidth / this.perPage) + "px, 0, 0)";
        } }, { key: "updateAfterDrag", value: function value() {
          var e = this.drag.endX - this.drag.startX,
              t = Math.abs(e),
              i = Math.ceil(t / (this.selectorWidth / this.perPage));e > 0 && t > this.config.threshold && this.innerElements.length > this.perPage ? this.prev(i) : e < 0 && t > this.config.threshold && this.innerElements.length > this.perPage && this.next(i), this.slideToCurrent();
        } }, { key: "resizeHandler", value: function value() {
          this.resolveSlidesNumber(), this.selectorWidth = this.selector.offsetWidth, this.sliderFrame.style.width = this.selectorWidth / this.perPage * this.innerElements.length + "px", this.slideToCurrent();
        } }, { key: "clearDrag", value: function value() {
          this.drag = { startX: 0, endX: 0, startY: 0, letItGo: null };
        } }, { key: "touchstartHandler", value: function value(e) {
          e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.touches[0].pageX, this.drag.startY = e.touches[0].pageY;
        } }, { key: "touchendHandler", value: function value(e) {
          e.stopPropagation(), this.pointerDown = !1, this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.drag.endX && this.updateAfterDrag(), this.clearDrag();
        } }, { key: "touchmoveHandler", value: function value(e) {
          e.stopPropagation(), null === this.drag.letItGo && (this.drag.letItGo = Math.abs(this.drag.startY - e.touches[0].pageY) < Math.abs(this.drag.startX - e.touches[0].pageX)), this.pointerDown && this.drag.letItGo && (this.drag.endX = e.touches[0].pageX, this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing, this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.currentSlide * (this.selectorWidth / this.perPage) + (this.drag.startX - this.drag.endX)) * -1 + "px, 0, 0)");
        } }, { key: "mousedownHandler", value: function value(e) {
          e.preventDefault(), e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.pageX;
        } }, { key: "mouseupHandler", value: function value(e) {
          e.stopPropagation(), this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.drag.endX && this.updateAfterDrag(), this.clearDrag();
        } }, { key: "mousemoveHandler", value: function value(e) {
          e.preventDefault(), this.pointerDown && (this.drag.endX = e.pageX, this.selector.style.cursor = "-webkit-grabbing", this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing, this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.currentSlide * (this.selectorWidth / this.perPage) + (this.drag.startX - this.drag.endX)) * -1 + "px, 0, 0)");
        } }, { key: "mouseleaveHandler", value: function value(e) {
          this.pointerDown && (this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.drag.endX = e.pageX, this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.updateAfterDrag(), this.clearDrag());
        } }, { key: "updateFrame", value: function value() {
          this.sliderFrame = document.createElement("div"), this.sliderFrame.style.width = this.selectorWidth / this.perPage * this.innerElements.length + "px", this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.config.draggable && (this.selector.style.cursor = "-webkit-grab");for (var e = document.createDocumentFragment(), t = 0; t < this.innerElements.length; t++) {
            var i = document.createElement("div");i.style.cssFloat = "left", i.style.float = "left", i.style.width = 100 / this.innerElements.length + "%", i.appendChild(this.innerElements[t]), e.appendChild(i);
          }this.sliderFrame.appendChild(e), this.selector.innerHTML = "", this.selector.appendChild(this.sliderFrame), this.slideToCurrent();
        } }, { key: "remove", value: function value(e, t) {
          if (e < 0 || e > this.innerElements.length) throw new Error("Item to remove doesn't exist 😭");this.innerElements.splice(e, 1), this.currentSlide = e < this.currentSlide ? this.currentSlide - 1 : this.currentSlide, this.updateFrame(), t && t.call(this);
        } }, { key: "insert", value: function value(e, t, i) {
          if (t < 0 || t > this.innerElements.length + 1) throw new Error("Unable to inset it at this index 😭");if (this.innerElements.indexOf(e) !== -1) throw new Error("The same item in a carousel? Really? Nope 😭");this.innerElements.splice(t, 0, e), this.currentSlide = t <= this.currentSlide ? this.currentSlide + 1 : this.currentSlide, this.updateFrame(), i && i.call(this);
        } }, { key: "prepend", value: function value(e, t) {
          this.insert(e, 0), t && t.call(this);
        } }, { key: "append", value: function value(e, t) {
          this.insert(e, this.innerElements.length + 1), t && t.call(this);
        } }, { key: "destroy", value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = arguments[1];if (window.removeEventListener("resize", this.resizeHandler), this.selector.style.cursor = "auto", this.selector.removeEventListener("touchstart", this.touchstartHandler), this.selector.removeEventListener("touchend", this.touchendHandler), this.selector.removeEventListener("touchmove", this.touchmoveHandler), this.selector.removeEventListener("mousedown", this.mousedownHandler), this.selector.removeEventListener("mouseup", this.mouseupHandler), this.selector.removeEventListener("mouseleave", this.mouseleaveHandler), this.selector.removeEventListener("mousemove", this.mousemoveHandler), e) {
            for (var i = document.createDocumentFragment(), s = 0; s < this.innerElements.length; s++) {
              i.appendChild(this.innerElements[s]);
            }this.selector.innerHTML = "", this.selector.appendChild(i), this.selector.removeAttribute("style");
          }t && t.call(this);
        } }], [{ key: "mergeSettings", value: function value(e) {
          var t = { selector: ".siema", duration: 200, easing: "ease-out", perPage: 1, startIndex: 0, draggable: !0, threshold: 20, loop: !1, onInit: function onInit() {}, onChange: function onChange() {} },
              i = e;for (var s in i) {
            t[s] = i[s];
          }return t;
        } }, { key: "webkitOrNot", value: function value() {
          var e = document.documentElement.style;return "string" == typeof e.transform ? "transform" : "WebkitTransform";
        } }]), e;
    }();t.default = o, e.exports = t.default;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)(module)))

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcHomeTopCarousel_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_50a3d390_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcHomeTopCarousel_vue__ = __webpack_require__(65);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcHomeTopCarousel_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_50a3d390_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcHomeTopCarousel_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\vcHomeTopCarousel.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vcHomeTopCarousel.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-50a3d390", Component.options)
  } else {
    hotAPI.reload("data-v-50a3d390", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_vendor_siema_min_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_vendor_siema_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__js_vendor_siema_min_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {};
  },

  mounted: function mounted() {
    var topCarousel = new __WEBPACK_IMPORTED_MODULE_0__js_vendor_siema_min_js___default.a({
      selector: '.main_carousel',
      duration: 600,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      threshold: 20,
      loop: false,
      onInit: function onInit() {},
      onChange: function onChange() {}
    });
    setInterval(function () {
      return topCarousel.next();
    }, 2600);
  }
});

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "col-sm-12 main_carousel"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('h2', {
    staticClass: "main_carousel_title"
  }, [_vm._v("\r\n        Welcome!\r\n      ")]), _vm._v(" "), _c('p', [_vm._v("to my collection of vintage and antique radios. Here you will find the Lorem ipsum dolor sit amet, consectetur adipisicing elit..."), _c('br'), _c('br'), _vm._v("Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in cu...")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8 main_carousel--right"
  }, [_c('img', {
    attrs: {
      "src": "img/ui/carousel_s1.jpg"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('h2', {
    staticClass: "main_carousel_title"
  }, [_vm._v("\r\n        Get fascinated\r\n      ")]), _vm._v(" "), _c('p', [_vm._v("by the beauty and excellent craftmanship Lorem ipsum dolor sit amet...\r\n      "), _c('br'), _c('br'), _vm._v("Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in cu...")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8 main_carousel--right"
  }, [_c('img', {
    attrs: {
      "src": "img/ui/carousel_s2.jpg"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('h2', {
    staticClass: "main_carousel_title"
  }, [_vm._v("\r\n        Lorem ipsum...\r\n      ")]), _vm._v(" "), _c('p', [_vm._v("Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in cu...")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8 main_carousel--right"
  }, [_c('img', {
    attrs: {
      "src": "img/ui/carousel_s3.jpg"
    }
  })])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-50a3d390", esExports)
  }
}

/***/ })

});