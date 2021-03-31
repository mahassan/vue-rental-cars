<template>
  <div id="app">
    <Homepage />
  </div>
</template>

<script>
import Homepage from "./components/Homepage.vue";

export default {
  name: "App",
  components: {
    Homepage,
  },
};
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html{
  box-sizing: border-box;
}
li{
  list-style: none;
    color: #989898;
    padding: 0;
    cursor: pointer;
    border-radius: 2px;
    border-bottom: 1px solid #eaeaea;
}
a:link,
a:visited,
a:hover,
a:active{
  text-decoration: none;
  display:flex;
  justify-content: flex-start;
  padding: 10px 9px;
    white-space: nowrap;
    overflow: hidden;
    border-radius: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
