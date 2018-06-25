// import Vue from "vue";
// import VueRouter from "vue-router";

import mainRouterView from "../vue-components/RouterView.vue";
import vcFeaturedItemData from "../vue-components/vcFeaturedItemData.vue";

Vue.use(VueRouter);

const vcHome = (resolve) => import("../vue-components/Home.vue").then(resolve);
const vcRadios = (resolve) => import("../vue-components/Radios.vue").then(resolve);
const vcRadiosCategory = (resolve) => import("../vue-components/Radios-Category.vue").then(resolve);
const vcRadiosId = (resolve) => import("../vue-components/Radios-Id.vue").then(resolve);
const vcGlobal404 = (resolve) => import("../vue-components/global404.vue").then(resolve);

const routes = [{
  path: "/",
  component: vcHome
}, {
  path: "/radios",
  name: "radios",
  component: vcRadios
}, {
  path: "/radios/:category",
  component: vcRadiosCategory
}, {
  path: "/radios/:category/:id",
  component: vcRadiosId
},
{
  path: "*",
  component: vcGlobal404
}];

const router = new VueRouter({
  routes
});

new Vue({
  el: "#components_rightside",
  router,
  render: h => h(mainRouterView)
});

// separate components
new Vue({
  el: "#featured_item_data",
  router, // for getting route params inside component
  render: h => h(vcFeaturedItemData)
});

export {router};