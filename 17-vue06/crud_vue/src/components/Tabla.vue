<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Clave</th>
          <th scope="col">Nombre</th>
          <th scope="col">Tipo</th>
          <th scope="col">Prioridad</th>
           <th scope="col">Horas</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="t in todos" :key="t.id">
          <th scope="row">{{t.id}}</th>
          <td>{{t.nombre}}</td>
          <td>{{t.tipo.join(", ") || "---"}}</td>
          <td>{{t.prioridad || "---" }}</td>
           <td>{{t.horas}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Tabla',
  computed: {
    ...mapState(['todos'])
  }
};
</script>

<style></style>
