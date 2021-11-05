<template>
  <div>
      <h1>Todos Completos</h1>
      <div v-for="todo in doneTodos" :key="todo.id" class="alert alert-primary" role="alert">
       <h3>{{todo.title}}</h3>
       <span>{{todo.completed ? "Completo" : "Sin completar"}}</span>
     </div>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
export default {
    name: 'TodosCompletos',
    computed: {
        ...mapState(['todos']),
        ...mapGetters(['doneTodos']),
        todosCompletos() {
          return this.todos.filter(todo => todo.completed)
        }
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