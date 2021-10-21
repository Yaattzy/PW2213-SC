<template>
  <div id="app">
    <Nav colors="#FF0000"/>
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default({
  components: {
    Nav
  }
})
</script>


<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
