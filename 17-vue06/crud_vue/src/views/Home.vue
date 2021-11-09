<template>
  <div class="home">
    <h1>Todos</h1>

    <router-link class="btn btn-primary btn-sm" to="/agregar">Agregar</router-link> <br>

    // Se mostraran todos los registros de todos

    <div>{{todos}}</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
  },
  computed: {
    ...mapState(['todos'])
  }
}
</script>
