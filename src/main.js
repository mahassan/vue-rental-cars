import Vue from "vue";
import App from "./App.vue";

Vue.filter("stripId", val => {
  const convertToArray =  val.split("-");
  convertToArray.pop()
  return convertToArray.toString();
})
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
