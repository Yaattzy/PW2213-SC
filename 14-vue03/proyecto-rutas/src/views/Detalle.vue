<template>
  <div>
      <h1>Detalle</h1>
      {{$route.params.id}}
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
    }
}
</script>

<style>

</style>