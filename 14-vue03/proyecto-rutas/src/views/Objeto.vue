<template>
  <div>
      <h1>Mi título</h1>
      <button @click="consumirApiAsync">Buscar</button>
      <div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Objeto',
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