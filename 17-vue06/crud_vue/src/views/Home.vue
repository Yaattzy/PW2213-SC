<template>
  <div class="home">
    <h1>Todos</h1>

    <router-link class="btn btn-primary btn-sm" to="/agregar">Agregar</router-link> <br>

    // Se mostraran todos los registros de todos

    <Tabla />

  </div>
</template>

<script>
import Tabla from '../components/Tabla.vue'
export default {
  name: 'Home',
  components: {
    Tabla
  }
}
</script>
