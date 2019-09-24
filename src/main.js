import Vue from "vue";
import App from "./App.vue";
import LayoutPlugin from "bootstrap-vue";
import NavbarPlugin from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/assets/main.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import BackToTop from "vue-backtotop";
// import "@/scrollspy/scrollspy.min.js";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

Vue.config.productionTip = false;
var VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo);
Vue.use(LayoutPlugin);
Vue.use(NavbarPlugin);
Vue.use(BackToTop);
Vue.use(VueAwesomeSwiper);

new Vue({
  created() {
    AOS.init({
      offset: 200,
      duration: window.innerWidth < 768 ? 0 : 500
    });
  },
  render: h => h(App)
}).$mount("#app");
