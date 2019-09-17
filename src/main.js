import Vue from "vue";
import App from "./App.vue";
import LayoutPlugin from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/assets/main.scss";

Vue.config.productionTip = false;
var VueScrollTo = require("vue-scrollto");

Vue.use(VueScrollTo);
Vue.use(LayoutPlugin);

new Vue({
  render: h => h(App)
}).$mount("#app");
