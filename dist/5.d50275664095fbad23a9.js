(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{39:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var s={currentItems:""}},40:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var s=function(t,e){return e.indexOf(t)>-1}},42:function(t,e,r){"use strict";r.r(e);var s=r(3),i=r.n(s),a=r(12),c=(r(39),r(5)),n=r(40),o=r(4),_={data:function(){return{API_DIR:o.a,currentCategory:"",filteredId:"",categoryTitle:"",categoryDescription:"",categoryPreview:"",bcVisible:!1,bcCategory:"",bcId:""}},components:{vcCatDesc:function(){return r.e(0).then(r.bind(null,47))}},mounted:function(){this.checkCategory()},watch:{$route:function(){this.checkCategory()}},methods:{checkCategory:function(){var t=this.$route.params.category;Object(n.a)(t,c.a)?(this.currentCategory=t,this.bcCategory=t,this.showCatDesc(),this.loadItems()):(console.log("radios-id 404"),a.a.push({path:"/"}))},loadItems:function(){var t=this,e="",r=this.API_DIR+this.currentCategory+".json";i.a.get(r).then(function(r){e=r.data[t.currentCategory].filter(function(e){return e.id===t.$route.params.id})}).then(function(){e[0]?(t.filteredId=e,t.bcId=e[0].id,t.bcVisible=!0):(console.log("radios id 404"),a.a.push({path:"/"}))}).catch(function(t){console.log(t)})},showCatDesc:function(){var t=this,e="",r=this.API_DIR+"catdesc.json";i.a.get(r).then(function(r){e=r.data.catdesc.filter(function(e){return e.category===t.currentCategory})}).then(function(){t.categoryTitle=e[0].title,t.categoryDescription=e[0].description,t.categoryPreview=e[0].preview}).catch(function(t){console.log(t)})}}},d=r(1),l=Object(d.a)(_,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"col-sm-9"},[r("div",{staticClass:"row category_description",attrs:{id:"category_description"}},[r("vcCatDesc",{attrs:{"pr-category-title":t.categoryTitle,"pr-category-description":t.categoryDescription,"pr-category-preview":t.categoryPreview}})],1),t._v(" "),t._m(0),t._v(" "),r("main",{staticClass:"row content_box"},[r("div",{staticClass:"row col-sm-12"},[t.bcVisible?r("div",{staticClass:"breadcrumb"},[r("a",{attrs:{href:"index.html#/"}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}})])]),t._v(" \r\n        "),r("a",{attrs:{href:"index.html#/"}},[t._v("Home")]),t._v(" >\r\n        "),r("a",{attrs:{href:"index.html#/radios"}},[t._v("Radios")]),t._v(" >\r\n        "),r("a",{attrs:{href:"index.html#/radios/"+t.bcCategory}},[t._v(t._s(t.bcCategory))]),t._v(" >\r\n        "),r("p",[t._v(t._s(t.bcId))])]):t._e()]),t._v(" "),r("section",{staticClass:"col-sm-12 radios_id",attrs:{id:"gallery-placeholder"}},t._l(t.filteredId,function(e){return r("div",{staticClass:"item-description"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6 radios_id_photo"},[r("a",{attrs:{href:"img/categories/"+t.currentCategory+"/"+e.img+"_full.jpg"}},[r("img",{attrs:{src:"img/categories/"+t.currentCategory+"/"+e.img+"_full.jpg"}})])]),t._v(" "),r("div",{staticClass:"col-sm-6 radios_id_desc"},[r("h2",{staticClass:"item-description_title"},[t._v("\r\n            "+t._s(e.make)+" "+t._s(e.id)+"\r\n            ")]),t._v(" "),r("p",[t._v(t._s(e.description1))]),t._v(" "),r("p",[t._v(t._s(e.description2))]),t._v(" "),r("br"),t._v(" "),r("h2",{staticClass:"item-description_title"},[t._v("\r\n            Specifications:\r\n            ")]),t._v(" "),r("p",[t._v("Make: "+t._s(e.make))]),t._v(" "),r("p",[t._v("Model: "+t._s(e.id))]),t._v(" "),r("p",[t._v("Year: "+t._s(e.year))]),t._v(" "),r("p",[t._v("Casing: "+t._s(e.case))]),t._v(" "),r("p",[t._v("Speaker: "+t._s(e.speaker))]),t._v(" "),r("p",[t._v("Tuning type: "+t._s(e.tuning_type))]),t._v(" "),r("p",[t._v("Power requirements: "+t._s(e.power))]),t._v(" "),r("p",[t._v("Frequency: "+t._s(e.frequency))]),t._v(" "),r("p",[t._v("Measurements: "+t._s(e.measurements))])])])])})),t._v(" "),r("div",{staticClass:"col-sm-12"},[t._v("\r\n      reserve\r\n    ")])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row row_subheader"},[e("div",{staticClass:"col-sm-12"},[e("p",{attrs:{id:"details"}},[this._v("details")])])])}],!1,null,null,null);e.default=l.exports}}]);