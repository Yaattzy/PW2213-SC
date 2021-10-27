<template>
  <div>
      <router-link to="/objeto">Regresar</router-link>
      <h1>{{pelicula.title}}</h1>
      <h3>{{pelicula.director}}</h3>
      <img :src="pelicula.movie_banner" alt="" class="mb-3" width="500">
      <p>{{pelicula.description}}</p>
  </div>
</template>

<script>
export default {
    name: 'Detalle',
    data() {
        return {
            pelicula: {}
        }
    },
    methods: {
        async consumirPelicula(){
            try {
                const res = await fetch(`https://ghibliapi.herokuapp.com/films/${this.$route.params.id}`);
                const data = await res.json();
                this.pelicula = data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.consumirPelicula();
    }
}
</script>

<style>

</style>