<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{msg}}</h1>
    <firstcomponent></firstcomponent>
    <router-view/>
  </div>
</template>

<script>
import firstcomponent from './components/firstcomponent.vue'
export default {
  name: 'App',
  data () {
    return {
      msg: 'hello Vue!'
    }
  },
  components: {firstcomponent}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
