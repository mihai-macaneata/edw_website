import Vue from "vue";
import App from "./App.vue";
import LayoutPlugin from "bootstrap-vue";
import NavbarPlugin from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/assets/main.scss";
// import Animate from "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.config.productionTip = false;
var VueScrollTo = require("vue-scrollto");

Vue.use(VueScrollTo);
Vue.use(LayoutPlugin);
// Vue.use(Animate);
Vue.use(NavbarPlugin);

// We import JQuery
const $ = require('jquery');
// We declare it globally
window.$ = $;

new Vue({
  created() {
    AOS.init({
      duration: 2000,
      disable: "mobile"
    });
  },
  render: h => h(App)
}).$mount("#app");
