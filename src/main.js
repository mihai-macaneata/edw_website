import Vue from "vue";
import App from "./App.vue";
import "@/assets/main.scss";
// import "@/assets/waffle-grid.scss"

Vue.config.productionTip = false;
var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)

new Vue({
  render: h => h(App)
}).$mount("#app");
