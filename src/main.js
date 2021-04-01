import Vue from "vue";
import App from "./App.vue";

Vue.filter("stripId", val => {
  //split the
  const convertToArray =  val.split("-");
  convertToArray.pop()
  const newVal = convertToArray.toString();
  const firstLetter = newVal.substring(0, 1);
  return `${firstLetter.toUpperCase()}${newVal.substring(1)}`
})
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
