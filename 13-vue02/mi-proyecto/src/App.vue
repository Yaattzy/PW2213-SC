<template>
  <div id="app" class="m-4">
    <img alt="Vue logo" src="./assets/logo.png" width="40">
   <Tarjeta 
      v-for="f in lista"
      :key="f.id"
      :titulo="f.nombre" 
      :subtitulo="f.cantidad" 
      :texto="f.color"
   />
  </div>
</template>

<script>
import Tarjeta from './components/Tarjeta.vue'

export default {
  name: 'App',
  components: {
    Tarjeta
  },
  data() {
    return {
      lista: [
        {
          id: 1,
          nombre: "Fresa",
          cantidad: 10,
          color: "Rojo"
        },
        {
          id: 2,
          nombre: "Manzana",
          cantidad: 6,
          color: "Verde"
        },
        {
          id: 3,
          nombre: "Pera",
          cantidad: 12,
          color: "Verde"
        }
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
