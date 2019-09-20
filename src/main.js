import Vue from "vue";
import App from "./App.vue";
import LayoutPlugin from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/assets/main.scss";
// import Animate from "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;
var VueScrollTo = require("vue-scrollto");

Vue.use(VueScrollTo);
Vue.use(LayoutPlugin);
// Vue.use(Animate);

new Vue({
  created() {
    AOS.init({
      duration: 1200,
      disable: "mobile"
    });
  },
  render: h => h(App)
}).$mount("#app");
