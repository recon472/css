import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-scss.min";
import "prismjs/plugins/autolinker/prism-autolinker.min";
import "prismjs/plugins/autolinker/prism-autolinker.css";
import Prism from "vue-prism-component";

Vue.config.productionTip = false;

Vue.component('prism', Prism)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
