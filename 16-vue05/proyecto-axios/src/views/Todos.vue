<template>
  <div>
      <h1>Todos</h1>
      <div v-for="todo in todos" :key="todo.id" class="alert alert-warning" role="alert">
       <h3>{{todo.title}}</h3>
       <span>{{todo.completed ? "Completo" : "Sin completar"}}</span>
     </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    name: 'Todos',
    computed: {
        ...mapState(['todos'])
    },
    methods: {
        ...mapActions(['getTodos'])
    },
    created(){
        this.getTodos();
    }
}
</script>

<style>

</style>