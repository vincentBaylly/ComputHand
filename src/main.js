import Vue from "vue";
import App from "./App.vue";

//Vue Bootstrap
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueRouter from "vue-router";

import router from "./router";

Vue.use(VueRouter);
Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
