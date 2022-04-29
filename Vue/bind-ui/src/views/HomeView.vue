<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <BindIndex/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import BindIndex from '@/components/BindIndex.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    BindIndex,
  }
}
</script>
