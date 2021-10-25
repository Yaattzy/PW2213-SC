<template>
  <div>
      <h1>Mi título</h1>
      <button class="btn btn-success mb-2" @click="consumirApiAsync">Buscar</button>
      
      <Card 
        v-for="p in peliculas"
        :key="p.id"
        :id="p.id"
        :titulo="p.title"
        :descripcion="p.description"
        :imagen="p.image"
      />
  </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
    name: 'Objeto',
    components: {
        Card
    },
    data() {
        return {
            peliculas: []
        }
    },
    methods: {
        consumirApi() {
            fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(data => console.log("api", data))
            .catch(error => console.log(error));
        },
        async consumirApiAsync() {
            try {
                const res = await fetch('https://ghibliapi.herokuapp.com/films');

                const data = await res.json();
                this.peliculas = data;
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style>

</style>