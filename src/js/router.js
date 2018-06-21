// import Vue from "vue";
// import VueRouter from "vue-router";

import vcRouterView from "../vue-components/RouterView.vue";

Vue.use(VueRouter);

const vcHome = (resolve) => import("../vue-components/Home.vue").then(resolve);
const vcRadios = (resolve) => import("../vue-components/Radios.vue").then(resolve);
const vcRadiosCategory = (resolve) => import("../vue-components/Radios-Category.vue").then(resolve);
const vcRadiosId = (resolve) => import("../vue-components/Radios-Id.vue").then(resolve);

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
}];

const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  router,
  render: h => h(vcRouterView)
});

export {router};